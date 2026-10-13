// Builds the committed skills snapshot for the website from the gtm-libraries
// repo (a sibling folder). Mirrors the agent-registry snapshot pattern: this is
// a local dev tool; the committed JSON is what the build consumes.
//
//   node scripts/sync-skills.mjs           # write src/data/skills.snapshot.json
//   node scripts/sync-skills.mjs --check    # fail if the snapshot is stale
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const websiteRoot = path.resolve(__dirname, '..');
const libRoot = path.resolve(websiteRoot, '..', 'gtm-libraries');
const skillsDir = path.join(libRoot, 'skills');
const outFile = path.resolve(websiteRoot, 'src/data/skills.snapshot.json');
const check = process.argv.includes('--check');

const libPresent = fs.existsSync(skillsDir);
if (!check && !libPresent) {
  console.error(`✗ gtm-libraries not found at ${libRoot}`);
  console.error('  (sync:skills is a local tool; it needs the gtm-libraries folder next to the website repo)');
  process.exit(1);
}

// CI-safe validation of the committed snapshot (no library folder required).
function validateSnapshot() {
  if (!fs.existsSync(outFile)) { console.error('✗ skills snapshot missing — run: npm run sync:skills'); process.exit(1); }
  const snap = JSON.parse(fs.readFileSync(outFile, 'utf8'));
  const errs = [];
  if (!snap.count || snap.count !== snap.skills.length) errs.push(`count ${snap.count} != skills ${snap.skills?.length}`);
  const seen = new Set();
  for (const s of snap.skills) {
    if (!s.slug || !s.name || !s.body) errs.push(`skill missing fields: ${s.slug || '?'}`);
    if (seen.has(s.slug)) errs.push(`duplicate slug: ${s.slug}`);
    seen.add(s.slug);
    for (const sec of ['## Purpose', '## When to use', '## Inputs', '## Procedure', '## Output', '## Quality bar']) {
      if (!s.body.includes(sec)) errs.push(`${s.slug} missing ${sec}`);
    }
  }
  if (errs.length) { console.error('✗ skills snapshot invalid:'); errs.slice(0, 20).forEach((e) => console.error('  - ' + e)); process.exit(1); }
  console.log(`✓ skills snapshot valid — ${snap.count} skills, ${snap.domains.length} domains`);
}

const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

// Domain grouping is authored in the library README ("### Name (n)" + links).
function parseDomains() {
  const readme = fs.readFileSync(path.join(libRoot, 'README.md'), 'utf8');
  const lines = readme.split('\n');
  const domains = [];
  let current = null;
  for (const line of lines) {
    const h = line.match(/^###\s+(.+?)\s*\(\d+\)\s*$/);
    if (h) { current = { id: slugify(h[1]), name: h[1].trim(), slugs: [] }; domains.push(current); continue; }
    if (/^##\s/.test(line)) { current = null; }
    if (!current) continue;
    const m = line.match(/skills\/([a-z0-9-]+)\/SKILL\.md/);
    if (m) current.slugs.push(m[1]);
  }
  return domains.filter((d) => d.slugs.length);
}

function splitFrontmatter(raw) {
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!m) return { fm: {}, body: raw };
  const fm = {};
  const name = m[1].match(/^name:\s*(.+)$/m);
  const version = m[1].match(/^version:\s*(.+)$/m);
  const description = m[1].match(/^description:\s*(.+)$/m);
  if (name) fm.name = name[1].trim().replace(/^"|"$/g, '');
  if (version) fm.version = version[1].trim().replace(/^"|"$/g, '');
  if (description) fm.description = description[1].trim().replace(/^"([\s\S]*)"$/g, '$1');
  return { fm, body: (m[2] || '').trim() };
}

if (!libPresent) { validateSnapshot(); process.exit(0); }

const domains = parseDomains();
const domainBySlug = {};
for (const d of domains) for (const s of d.slugs) domainBySlug[s] = d.id;

const dirs = fs.readdirSync(skillsDir, { withFileTypes: true }).filter((e) => e.isDirectory()).map((e) => e.name);
const skills = [];
for (const slug of dirs) {
  const f = path.join(skillsDir, slug, 'SKILL.md');
  if (!fs.existsSync(f)) continue;
  const raw = fs.readFileSync(f, 'utf8');
  const { fm, body } = splitFrontmatter(raw);
  const words = body.split(/\s+/).filter(Boolean).length;
  const purpose = body.match(/##\s+Purpose\s*\n+([\s\S]*?)(?:\n\s*\n|$)/);
  let blurb = purpose ? purpose[1].replace(/\s+/g, ' ').trim() : '';
  const firstSentence = blurb.split(/(?<=[.!?])\s/)[0];
  if (firstSentence && firstSentence.length <= 260) blurb = firstSentence;
  if (!blurb) blurb = (fm.description || '').slice(0, 200);
  skills.push({
    slug,
    name: fm.name || slug,
    version: fm.version || '',
    description: fm.description || '',
    blurb,
    domain: domainBySlug[slug] || 'uncategorized',
    words,
    body,
  });
}
skills.sort((a, b) => a.name.localeCompare(b.name));

const snapshot = {
  source: 'gtm-libraries/skills',
  generatedFrom: 'skills-library-qa',
  count: skills.length,
  domains: domains.map((d) => ({ id: d.id, name: d.name, count: d.slugs.length })),
  skills,
};
const next = JSON.stringify(snapshot, null, 2) + '\n';

const prev = fs.existsSync(outFile) ? fs.readFileSync(outFile, 'utf8') : '';

if (check) {
  if (prev !== next) { console.error('✗ skills snapshot is stale — run: npm run sync:skills'); process.exit(1); }
  console.log(`✓ skills snapshot current — ${snapshot.count} skills, ${snapshot.domains.length} domains`);
} else {
  fs.writeFileSync(outFile, next);
  console.log(`✓ wrote ${path.relative(websiteRoot, outFile)} — ${snapshot.count} skills, ${snapshot.domains.length} domains`);
}
