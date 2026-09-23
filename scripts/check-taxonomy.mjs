// Taxonomy drift gate.
//
// The canonical taxonomy lives in @gtm360/agent-registry (content-engine),
// snapshotted to src/data/agentRegistry.snapshot.json. This gate fails the build
// if the website's public taxonomy (src/data/engines.js) has drifted from it.
//
// The wiki's editorial agent list (src/data/wiki/framework.js AGENT_SLOTS) is
// still on a legacy id scheme; its known divergence is allow-listed below and
// reported, so NEW drift fails while the existing gap is visible.
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const snapshot = JSON.parse(fs.readFileSync(path.resolve(root, 'src/data/agentRegistry.snapshot.json'), 'utf8'));
const { ENGINES, AGENT_TOTAL } = await import(new URL('../src/data/engines.js', import.meta.url).href);
const { AGENT_SLOTS } = await import(new URL('../src/data/wiki/framework.js', import.meta.url).href);

// Wiki slot ids that predate the canonical registry and have not been reconciled
// yet. (Empty now — the wiki list is generated from the registry.)
const KNOWN_UNMAPPED_WIKI_IDS = new Set([]);

const errors = [];
const warnings = [];
const canonIds = new Set(snapshot.agents.map((a) => a.id));

// 1) public engines.js must match the registry exactly
const groups = snapshot.groups;
if (ENGINES.length !== groups.length) {
  errors.push(`engines.js has ${ENGINES.length} engines, registry has ${groups.length}`);
}
groups.forEach((g, i) => {
  const e = ENGINES[i];
  if (!e || e.id !== g.id) { errors.push(`engine #${i}: expected "${g.id}", got "${e && e.id}"`); return; }
  if (e.name !== g.name) errors.push(`engine "${g.id}" name: expected "${g.name}", got "${e.name}"`);
  if (e.color !== g.color) errors.push(`engine "${g.id}" color: expected "${g.color}", got "${e.color}"`);
  const want = snapshot.agents.filter((a) => a.group === g.id).map((a) => a.id).sort();
  const got = e.agents.map((a) => a.id).sort();
  const missing = want.filter((id) => !got.includes(id));
  const extra = got.filter((id) => !want.includes(id));
  if (missing.length) errors.push(`engine "${g.id}" missing agents: ${missing.join(', ')}`);
  if (extra.length) errors.push(`engine "${g.id}" has non-registry agents: ${extra.join(', ')}`);
});
if (AGENT_TOTAL !== snapshot.agents.length) {
  errors.push(`AGENT_TOTAL ${AGENT_TOTAL} !== registry ${snapshot.agents.length}`);
}

// 2) wiki AGENT_SLOTS must be exactly the registry
const slotIds = Object.keys(AGENT_SLOTS);
const unknown = slotIds.filter((id) => !canonIds.has(id));
for (const id of unknown) {
  if (!KNOWN_UNMAPPED_WIKI_IDS.has(id)) errors.push(`wiki AGENT_SLOTS has unknown agent id "${id}" (not in registry)`);
}
const missingFromWiki = [...canonIds].filter((id) => !slotIds.includes(id));
if (unknown.length) warnings.push(`wiki AGENT_SLOTS: ${unknown.length} legacy ids not yet reconciled (${unknown.join(', ')})`);
if (missingFromWiki.length) warnings.push(`wiki AGENT_SLOTS: ${missingFromWiki.length} registry agents absent from the wiki list`);

// 3) wiki process arrays must only reference canonical agent ids
const frameworkText = fs.readFileSync(path.resolve(root, 'src/data/wiki/framework.js'), 'utf8');
const badProcessIds = new Set();
for (const m of frameworkText.matchAll(/agents:\s*\[([^\]]*)\]/g)) {
  for (const raw of m[1].split(',')) {
    const id = raw.trim().replace(/^['"]|['"]$/g, '');
    if (id && !canonIds.has(id)) badProcessIds.add(id);
  }
}
for (const id of badProcessIds) errors.push(`wiki process references unknown agent id "${id}"`);

warnings.forEach((w) => console.warn(`⚠ ${w}`));
if (errors.length) {
  console.error('\n✗ taxonomy drift:');
  errors.forEach((e) => console.error('  - ' + e));
  process.exit(1);
}
console.log(`✓ taxonomy consistent: ${groups.length} engines, ${snapshot.agents.length} agents`);
