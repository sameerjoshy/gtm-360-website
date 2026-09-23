#!/usr/bin/env node
// GTM-360 cross-surface smoke test.
//
// Three surfaces (IA): marketing site + knowledge base + Agent Portal.
//   gtm-360.com            marketing + /wiki knowledge base
//   agents.gtm-360.com     Agent Portal (the single agent surface)
//   okr / brain            Compass / Cockpit
//
// Also asserts the retired URLs still 301 to their canonical destination, and
// that every URL in the sitemap resolves. Pure fetch — no browser. Run locally
// or in CI.

const SURFACES = [
  { label: 'Marketing', url: 'https://gtm-360.com', mustContain: ['GTM-360'] },
  { label: 'Knowledge base', url: 'https://gtm-360.com/wiki', mustContain: ['GTM-360'] },
  { label: 'Agents (marketing)', url: 'https://gtm-360.com/agents', mustContain: ['GTM-360'] },
  { label: 'Agent Portal', url: 'https://agents.gtm-360.com', mustContain: ['GTM-360'] },
  { label: 'Compass (okr)', url: 'https://okr.gtm-360.com', mustContain: ['GTM-360'] },
  { label: 'Cockpit (brain)', url: 'https://brain.gtm-360.com/cockpit', mustContain: ['GTM-360'] },
]

// Retired URLs must keep 301-ing to their canonical destination (never 404).
const REDIRECTS = [
  { from: 'https://gtm.gtm-360.com', to: 'gtm-360.com/wiki' },
  { from: 'https://gtm-360-agents.pages.dev', to: 'agents.gtm-360.com' },
  { from: 'https://content.gtm-360.com', to: 'agents.gtm-360.com' },
]

const get = async (url, opts = {}) => {
  const ctrl = new AbortController()
  const t = setTimeout(() => ctrl.abort(), 25000)
  try {
    const res = await fetch(url, { redirect: 'follow', signal: ctrl.signal, ...opts })
    return { status: res.status, text: await res.text(), headers: res.headers }
  } finally {
    clearTimeout(t)
  }
}

const failures = []

async function checkSurface(s) {
  try {
    const { status, text } = await get(s.url)
    if (status !== 200) throw new Error(`HTTP ${status}`)
    const missing = s.mustContain.filter((c) => !text.includes(c))
    if (missing.length) throw new Error(`missing: ${missing.join(', ')}`)
    console.log(`✓ ${s.label} — live`)
  } catch (e) {
    failures.push(`✗ ${s.label} (${s.url}) — ${e.message}`)
  }
}

async function checkRedirect(r) {
  try {
    const res = await fetch(r.from, { redirect: 'manual' })
    const loc = res.headers.get('location') || ''
    if (![301, 302, 307, 308].includes(res.status)) throw new Error(`expected 3xx, got ${res.status}`)
    if (!loc.includes(r.to)) throw new Error(`location "${loc}" does not include "${r.to}"`)
    console.log(`✓ ${r.from} → ${r.to}`)
  } catch (e) {
    failures.push(`✗ redirect ${r.from} — ${e.message}`)
  }
}

async function checkSitemap() {
  try {
    const { status, text } = await get('https://gtm-360.com/sitemap.xml')
    if (status !== 200) throw new Error('HTTP ' + status)
    const urls = [...text.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
    for (const u of urls) {
      const res = await fetch(u, { redirect: 'manual' })
      if (res.status >= 400) failures.push(`✗ sitemap route ${u} → ${res.status}`)
    }
    console.log(`✓ sitemap — ${urls.length} routes checked`)
  } catch (e) {
    failures.push(`✗ sitemap — ${e.message}`)
  }
}

await Promise.all([...SURFACES.map(checkSurface), ...REDIRECTS.map(checkRedirect), checkSitemap()])

if (failures.length) {
  console.log('\nFAILURES:')
  failures.forEach((f) => console.log(f))
  process.exit(1)
}
console.log('\n✅ All surfaces live, retired URLs 301, no dead sitemap routes.')
