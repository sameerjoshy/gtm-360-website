// Exports the canonical agent registry from content-engine into a committed
// snapshot so the website can derive its taxonomy from ONE source without
// cross-repo tooling at build time.
//
//   node scripts/sync-registry.mjs           # write the snapshot
//   node scripts/sync-registry.mjs --check    # fail if the snapshot is stale
//
// Needs the content-engine folder alongside the website repo (local only).
import { build } from 'esbuild';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const websiteRoot = path.resolve(__dirname, '..');
const repoRoot = path.resolve(websiteRoot, '..');
const registryEntry = path.resolve(repoRoot, 'content-engine/packages/agent-registry/src/index.ts');
const outFile = path.resolve(websiteRoot, 'src/data/agentRegistry.snapshot.json');
const check = process.argv.includes('--check');

if (!fs.existsSync(registryEntry)) {
  console.error(`✗ canonical registry not found at ${registryEntry}`);
  console.error('  (sync:registry is a local tool; it needs the content-engine folder next to the website repo)');
  process.exit(1);
}

const bundled = await build({
  entryPoints: [registryEntry],
  bundle: true,
  format: 'esm',
  platform: 'node',
  write: false,
  logLevel: 'silent',
});

const code = bundled.outputFiles[0].text;
const mod = await import('data:text/javascript;base64,' + Buffer.from(code).toString('base64'));

const snapshot = {
  source: 'content-engine/packages/agent-registry',
  groups: mod.OUTCOME_GROUPS,
  agents: mod.AGENTS,
  executiveLenses: mod.EXECUTIVE_LENSES,
};
const next = JSON.stringify(snapshot, null, 2) + '\n';

// The wiki's agent slots are derived from the registry (canonical ids).
const slotLines = snapshot.agents
  .map((a) => `  '${a.id}': { name: ${JSON.stringify(a.name)}, status: '${a.status === 'planned' ? 'build' : a.status}', swarm: '${a.group}' },`)
  .join('\n');
const slotsFile = `// GENERATED from @gtm360/agent-registry — do not edit. Run: npm run sync:registry\n\nexport const AGENT_SLOTS = {\n${slotLines}\n};\n`;

const outFile2 = path.resolve(websiteRoot, 'src/data/wiki/agentSlots.js');
const prev = fs.existsSync(outFile) ? fs.readFileSync(outFile, 'utf8') : '';
const prev2 = fs.existsSync(outFile2) ? fs.readFileSync(outFile2, 'utf8') : '';

if (check) {
  if (prev !== next || prev2 !== slotsFile) {
    console.error('✗ registry snapshot/slots are stale — run: npm run sync:registry');
    process.exit(1);
  }
  console.log('✓ registry snapshot + slots are current');
} else {
  fs.writeFileSync(outFile, next);
  fs.writeFileSync(outFile2, slotsFile);
  console.log(`✓ wrote agentRegistry.snapshot.json + wiki/agentSlots.js — ${snapshot.groups.length} engines, ${snapshot.agents.length} agents`);
}
