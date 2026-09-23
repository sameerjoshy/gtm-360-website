#!/usr/bin/env node
// Live QA — pure fetch, no browser. Checks the consolidated surfaces, the
// redirect contract, per-page titles, analytics tagging, and SEO files.
//
//   node qa/live.mjs
const BASE = process.env.QA_BASE || 'https://gtm-360.com'

const get = async (url, opts = {}) => {
  const ctrl = new AbortController()
  const t = setTimeout(() => ctrl.abort(), 25000)
  try {
    const res = await fetch(url, { redirect: 'follow', signal: ctrl.signal, ...opts })
    return { status: res.status, text: await res.text(), headers: res.headers }
  } finally { clearTimeout(t) }
}
const raw = (url) => fetch(url, { redirect: 'manual' })

const errors = []
const ok = (m) => console.log('✓ ' + m)
const bad = (m) => { errors.push(m); console.log('✗ ' + m) }

const SURFACES = [
  ['Marketing', 'https://gtm-360.com'],
  ['Knowledge base', 'https://gtm-360.com/wiki'],
  ['Agents (marketing)', 'https://gtm-360.com/agents'],
  ['Agent Portal', 'https://agents.gtm-360.com'],
  ['Compass', 'https://okr.gtm-360.com'],
  ['Cockpit', 'https://brain.gtm-360.com/cockpit'],
]

const REDIRECTS = [
  ['https://gtm.gtm-360.com', 'gtm-360.com/wiki'],
  ['https://gtm-360-agents.pages.dev', 'agents.gtm-360.com'],
  ['https://content.gtm-360.com', 'agents.gtm-360.com'],
  ['https://gtm-360.com/system', '/wiki'],
  ['https://gtm-360.com/engine', '/wiki/method'],
  ['https://gtm-360.com/learn', '/wiki/guides'],
  ['https://gtm-360.com/services', '/offerings'],
  ['https://gtm-360.com/playbooks', '/insights'],
]

const TITLE_PAGES = [
  ['/', null],
  ['/wiki/method/layer/L5', /Pricing/],
  ['/wiki/method/process/crm-management', /CRM Management/],
  ['/wiki/method/tools', /tool index/i],
  ['/agents', /agent/i],
]

async function surfaces() {
  for (const [label, url] of SURFACES) {
    try {
      const { status } = await get(url)
      status === 200 ? ok(`${label} live`) : bad(`${label} HTTP ${status}`)
    } catch (e) { bad(`${label} — ${e.message}`) }
  }
}

async function redirects() {
  for (const [from, to] of REDIRECTS) {
    try {
      const res = await raw(from)
      const loc = res.headers.get('location') || ''
      const is3xx = [301, 302, 307, 308].includes(res.status)
      if (!is3xx) bad(`${from} expected 3xx, got ${res.status}`)
      else if (!loc.includes(to)) bad(`${from} → "${loc}" (expected "${to}")`)
      else ok(`${from.replace('https://', '')} → ${to}`)
    } catch (e) { bad(`redirect ${from} — ${e.message}`) }
  }
}

async function titles() {
  for (const [path, re] of TITLE_PAGES) {
    try {
      const { text } = await get(BASE + path)
      const m = text.match(/<title[^>]*>([^<]*)<\/title>/)
      const title = m ? m[1].trim() : ''
      if (!title) bad(`${path} — empty/missing title`)
      else if (re && !re.test(title)) bad(`${path} — title "${title}" did not match ${re}`)
      else ok(`${path} title ok`)
    } catch (e) { bad(`${path} — ${e.message}`) }
  }
}

async function analytics() {
  try {
    const { text } = await get(BASE)
    const js = [...text.matchAll(/src="([^"]+\.js)"/g)].map((m) => m[1])
    let tagged = text.includes('G-ZYCR2GTVQ8')
    for (const src of js) {
      if (tagged) break
      try { const r = await get(new URL(src, BASE).href); if (r.text.includes('G-ZYCR2GTVQ8')) tagged = true } catch {}
    }
    tagged ? ok('GA4 tagged (G-ZYCR2GTVQ8 present)') : bad('GA4 Measurement ID not found in page or bundle')
  } catch (e) { bad(`analytics — ${e.message}`) }
}

async function seoFiles() {
  for (const [path, must] of [['/robots.txt', 'Sitemap'], ['/llms.txt', 'GTM-360'], ['/sitemap.xml', '<urlset']]) {
    try {
      const { status, text } = await get(BASE + path)
      if (status !== 200) bad(`${path} HTTP ${status}`)
      else if (!text.includes(must)) bad(`${path} missing "${must}"`)
      else ok(`${path} ok`)
    } catch (e) { bad(`${path} — ${e.message}`) }
  }
  try {
    const { text } = await get(BASE + '/llms.txt')
    if (/gtm-360\.com\/(system|engine)\b/.test(text)) bad('llms.txt still references retired /system or /engine')
    else ok('llms.txt has no retired URLs')
  } catch {}
}

async function sitemap() {
  try {
    const { status, text } = await get(BASE + '/sitemap.xml')
    if (status !== 200) return bad('sitemap HTTP ' + status)
    const urls = [...text.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
    let dead = 0
    for (const u of urls) {
      const res = await fetch(u, { redirect: 'manual' })
      if (res.status >= 400) { dead++; bad(`sitemap route ${u} → ${res.status}`) }
    }
    ok(`sitemap — ${urls.length} routes, ${dead} dead`)
  } catch (e) { bad('sitemap — ' + e.message) }
}

console.log(`\nLIVE QA — ${BASE}\n`)
await Promise.all([surfaces(), redirects(), titles(), analytics(), seoFiles(), sitemap()])

console.log(`\n${errors.length ? 'FAILURES: ' + errors.length : '✅ live QA passed'}`)
process.exit(errors.length ? 1 : 0)
