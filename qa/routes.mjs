#!/usr/bin/env node
// Route crawl (browser) — verifies every live route renders, has a title + a
// single H1, throws no console/page errors, has no broken images, and that every
// internal link resolves to a real client route (not the 404 page / catch-all).
//
//   PLAYWRIGHT_PATH=<dir> node qa/routes.mjs [baseUrl] [max]
//
// Playwright is resolved from PLAYWRIGHT_PATH (machine-specific install) so this
// stays portable in CI where it may differ.
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const pwPath = process.env.PLAYWRIGHT_PATH
const { chromium } = pwPath ? require(pwPath) : require('playwright')

const BASE = process.argv[2] || 'https://gtm-360.com'
const MAX = Number(process.argv[3] || 0)

const sm = await fetch(BASE + '/sitemap.xml').then((r) => r.text())
let routes = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace(/^https?:\/\/[^/]+/, '').replace(/\/$/, '') || '/')
if (MAX) routes = routes.slice(0, MAX)

const browser = await chromium.launch()
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } })
// speed: don't download media
await ctx.route('**/*.{mp4,webm,jpg,jpeg,png,webp}', (r) => (r.request().resourceType() === 'media' ? r.abort() : r.continue())).catch(() => {})
const page = await ctx.newPage()

const consoleErrors = []
const pageErrors = []
let cur = ''
const at = () => (cur ? `[visit ${cur}] ` : '') + '[' + page.url().replace(BASE, '') + ']'
page.on('pageerror', (e) => pageErrors.push(`${at()} :: ${e.message}`))
page.on('console', (m) => { if (m.type() === 'error') consoleErrors.push(`${at()} :: ${m.text()}`) })

const failures = []
const links = new Set()
const NOT_FOUND_H1 = /that page moved on/i

for (const r of routes) {
  cur = r
  const before = consoleErrors.length + pageErrors.length
  let status = 0
  try {
    const resp = await page.goto(BASE + r, { waitUntil: 'domcontentloaded', timeout: 30000 })
    status = resp ? resp.status() : 0
    await page.waitForLoadState('load', { timeout: 8000 }).catch(() => {})
  } catch (e) { failures.push(`${r} : goto ${e.message.slice(0, 80)}`); continue }

  const title = await page.title().catch(() => '')
  const h1count = await page.locator('h1').count().catch(() => 0)
  const h1 = h1count ? await page.locator('h1').first().textContent().catch(() => '') : ''
  const notFound = NOT_FOUND_H1.test(h1 || '')
  const imgs = await page.locator('img').evaluateAll((im) => im.filter((i) => i.complete && i.naturalWidth === 0).map((i) => i.getAttribute('src'))).catch(() => [])
  const hrefs = await page.locator('a[href]').evaluateAll((as) => as.map((a) => a.getAttribute('href'))).catch(() => [])
  for (const h of hrefs) if (h && h.startsWith('/') && !h.startsWith('//')) links.add(h.split('#')[0].split('?')[0])

  const issues = []
  if (status !== 200) issues.push(`HTTP ${status}`)
  if (!title) issues.push('no title')
  if (h1count !== 1) issues.push(`${h1count} h1`)
  if (notFound) issues.push('renders 404 page')
  if (imgs.length) issues.push(`broken imgs ${imgs.slice(0, 2).join(',')}`)
  if (consoleErrors.length + pageErrors.length > before) issues.push('console/page error')
  if (issues.length) { failures.push(`${r} : ${issues.join(' | ')}`); console.log('✗ ' + r + ' : ' + issues.join(' | ')) }
}

// internal link resolution — none may land on the 404 page
console.log(`\nchecking ${links.size} internal links for client-route resolution...`)
const deadLinks = []
for (const l of links) {
  try {
    await page.goto(BASE + l, { waitUntil: 'domcontentloaded', timeout: 20000 })
    await page.waitForLoadState('load', { timeout: 6000 }).catch(() => {})
    const h1c = await page.locator('h1').count()
    const h1 = h1c ? await page.locator('h1').first().textContent() : ''
    if (NOT_FOUND_H1.test(h1 || '')) deadLinks.push(`${l} → renders 404`)
  } catch (e) { deadLinks.push(`${l} → ${e.message.slice(0, 50)}`) }
}
deadLinks.forEach((d) => console.log('✗ dead link ' + d))

console.log(`\nSUMMARY ${routes.length} routes | route failures ${failures.length} | dead links ${deadLinks.length} | console errors ${new Set(consoleErrors).size} | page errors ${new Set(pageErrors).size}`)
if (pageErrors.length) console.log('PAGE ERRORS:\n' + [...new Set(pageErrors)].slice(0, 20).join('\n'))
if (consoleErrors.length) console.log('CONSOLE ERRORS:\n' + [...new Set(consoleErrors)].slice(0, 20).join('\n'))

await browser.close()
process.exit(failures.length || deadLinks.length || pageErrors.length ? 1 : 0)
