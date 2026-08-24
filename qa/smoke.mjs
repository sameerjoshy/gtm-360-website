#!/usr/bin/env node
// GTM-360 cross-app smoke test.
// Checks every product URL is live, the unified brand (Compass · Cockpit · Crew)
// is present in every shipped bundle, and no route in the sitemap is dead.
// No browser needed — pure fetch. Run locally or in CI (GitHub Actions).

const PRODUCTS = [
  { label: 'Compass (okr)', url: 'https://okr.gtm-360.com', mustContain: ['Compass', 'Cockpit', 'Crew'] },
  { label: 'Cockpit (brain)', url: 'https://brain.gtm-360.com/cockpit', mustContain: ['Compass', 'Cockpit', 'Crew'] },
  { label: 'Crew (agents)', url: 'https://agents.gtm-360.com', mustContain: ['Compass', 'Cockpit', 'Crew'] },
  { label: 'Marketing (gtm-360.com)', url: 'https://gtm-360.com', mustContain: ['Compass', 'Cockpit', 'Crew', 'The Revenue Operating System'] },
  { label: 'Hub (/system)', url: 'https://gtm-360.com/system', mustContain: ['Compass', 'Cockpit', 'Crew', 'Revenue Operating System'] },
  { label: 'Revenue OS (hq)', url: 'https://hq.gtm-360.com', mustContain: ['Compass', 'Cockpit', 'Crew'] },
]

const timeout = (ms) => new Promise((_, rej) => setTimeout(() => rej(new Error('timeout')), ms))

async function get(url) {
  const ctrl = new AbortController()
  const t = setTimeout(() => ctrl.abort(), 25000)
  try {
    const res = await fetch(url, { redirect: 'follow', signal: ctrl.signal })
    const text = await res.text()
    return { status: res.status, text }
  } finally {
    clearTimeout(t)
  }
}

const failures = []

async function checkProduct(p) {
  try {
    const { status, text } = await get(p.url)
    if (status !== 200) throw new Error(`HTTP ${status}`)
    const jsMatch = text.match(/src="([^"]+\.js)"/)
    let bundle = text
    if (jsMatch) {
      const bundleUrl = new URL(jsMatch[1], p.url).href
      const { text: js } = await get(bundleUrl)
      bundle = js
    }
    const missing = p.mustContain.filter((s) => !bundle.includes(s))
    if (missing.length) throw new Error(`missing brand strings: ${missing.join(', ')}`)
    console.log(`✓ ${p.label} — live, brand present`)
  } catch (e) {
    failures.push(`✗ ${p.label} — ${e.message}`)
  }
}

async function checkSitemap() {
  const { status, text } = await get('https://gtm-360.com/sitemap.xml')
  if (status !== 200) { failures.push('✗ sitemap.xml HTTP ' + status); return }
  const urls = [...text.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
  for (const u of urls) {
    const { status } = await get(u)
    if (status !== 200 && status !== 301 && status !== 308) failures.push(`✗ sitemap route ${u} → ${status}`)
  }
  console.log(`✓ sitemap — ${urls.length} routes checked`)
}

await Promise.all([...PRODUCTS.map(checkProduct), checkSitemap()])
if (failures.length) {
  console.log('\nFAILURES:')
  failures.forEach((f) => console.log(f))
  process.exit(1)
} else {
  console.log('\n✅ All products live, brand unified, no dead routes.')
}