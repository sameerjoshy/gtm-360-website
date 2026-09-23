/**
 * GTM-360 Static Prerender Script
 * Runs after `vite build` to generate static HTML for every route.
 * Makes the site fully readable by crawlers, Google AI, Perplexity, and LLMs.
 * 
 * Usage: node prerender.mjs
 * Full build: npm run build:ssg
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// All routes to prerender
const routes = [
    '/',
    '/about',
    '/contact',
    '/how-we-work',
    '/agents',
    '/offerings',
    '/wiki',
    '/wiki/guides',
    '/wiki/playbooks',
    '/wiki/glossary',
    '/wiki/method',
    '/wiki/method/tools',
    '/wiki/method/agents',
    '/wiki/method/about',
    '/diagnostic-score',
    '/problems',
    '/problems/stalled-growth',
    '/problems/pipeline-conversion',
    '/problems/forecast-volatility',
    '/insights',
    '/insights/why-growth-stalls',
    '/insights/stage-definition-problem',
    '/insights/forecast-decay',
    '/insights/solving-wrong-problem',
    '/insights/when-ai-makes-gtm-worse',
    '/insights/icp-drift',
    '/insights/growth-engine-vs-amplifier',
    '/insights/gtm-revenue-flywheel',
    '/insights/case-studies/pipeline-full-revenue-flat',
    '/insights/case-studies/forecast-board-wanted-predictability',
    '/insights/case-studies/sales-cycle-doubled-icp-drift',
    '/insights/case-studies/fixing-the-wrong-problem',
    '/insights/case-studies/when-ai-created-noise-not-clarity',
    '/start-here',
    '/services/gtm-operating-model',
    '/services/pipeline-quality',
    '/services/forecasting-governance',
    '/services/gtm-signals-and-ai',
    '/gtm-consulting',
    '/b2b-sales-consulting',
    '/series-b-gtm-strategy',
    '/resources/gtm-diagnostic-checklist',
    '/privacy',
    '/terms',
    '/thank-you',
];

// Canonical agent pages: gtm-360.com/agents/<engine>/<agent> (from engines.js).
// Each agent gets a static, crawler-readable page so AI systems can find, cite,
// and link to every specialist job.
const { ENGINES } = await import(pathToFileURL(path.resolve(__dirname, 'src/data/engines.js')).href);
const { AGENT_GUIDES } = await import(pathToFileURL(path.resolve(__dirname, 'src/data/agentGuides.js')).href);
for (const e of ENGINES) {
    for (const a of e.agents) {
        routes.push(`/agents/${e.id}/${a.id}`);
        // Agents with a written explainer also get a static guide page.
        if (AGENT_GUIDES[a.id]) routes.push(`/agents/${e.id}/${a.id}/guide`);
    }
}

// Knowledge base (wiki) — the operating model's layers and processes, and the
// playbook library. Enumerated from data so the sitemap + prerender stay in sync.
const { LAYERS } = await import(pathToFileURL(path.resolve(__dirname, 'src/data/wiki/framework.js')).href);
const { slugify } = await import(pathToFileURL(path.resolve(__dirname, 'src/data/wiki/content.js')).href);
const { playbooks } = await import(pathToFileURL(path.resolve(__dirname, 'src/data/playbooks.js')).href);
for (const l of LAYERS) {
    routes.push(`/wiki/method/layer/${l.id}`);
    for (const p of (l.processes || [])) routes.push(`/wiki/method/process/${slugify(p.name)}`);
}
for (const p of playbooks) routes.push(`/wiki/playbooks/${p.slug}`);

const distDir = path.resolve(__dirname, 'dist');
const templatePath = path.resolve(distDir, 'index.html');

// Generate sitemap.xml from the SAME route list we prerender, so the sitemap can
// never drift from what actually exists (no more hand-maintained URL list).
function writeSitemap() {
    const priorityFor = (route) => {
        if (route === '/') return '1.0';
        if (route === '/start-here') return '0.9';
        if (['/how-we-work', '/wiki', '/agents', '/about'].includes(route)) return '0.8';
        if (route.endsWith('/guide')) return '0.7';
        if (route.startsWith('/agents/')) return '0.6';
        return '0.6';
    };
    const unique = [...new Set(routes)];
    const body = unique
        .map((r) => {
            const loc = `https://gtm-360.com${r === '/' ? '/' : r + '/'}`;
            const freq = r === '/' ? 'weekly' : 'monthly';
            return `  <url><loc>${loc}</loc><changefreq>${freq}</changefreq><priority>${priorityFor(r)}</priority></url>`;
        })
        .join('\n');
    const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
    fs.writeFileSync(path.resolve(distDir, 'sitemap.xml'), xml);
    console.log(`  ✓ sitemap.xml (${unique.length} urls)`);
}

async function prerender() {
    // Check dist exists
    if (!fs.existsSync(templatePath)) {
        console.error('❌ dist/index.html not found. Run `vite build` first.');
        process.exit(1);
    }

    const template = fs.readFileSync(templatePath, 'utf-8');

    // Load the SSR build
    const serverEntryPath = path.resolve(distDir, 'server', 'entry-server.js');
    if (!fs.existsSync(serverEntryPath)) {
        console.warn('⚠️  SSR entry not found. Generating meta-only prerender (still improves crawlability).');
        // Fallback: copy index.html to each route path for basic SPA crawling
        for (const route of routes) {
            const outDir = path.resolve(distDir, route.slice(1));
            if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
            fs.writeFileSync(path.resolve(outDir, 'index.html'), template);
            console.log(`  ✓ ${route}`);
        }
        console.log('\n✅ Basic prerender complete. Each route now has its own index.html.');
        fs.writeFileSync(path.resolve(distDir, '404.html'), template);
        writeSitemap();
        return;
    }

    const { render } = await import(pathToFileURL(serverEntryPath).href);

    for (const route of routes) {
        try {
            const { html: appHtml, helmet } = render(route);

            // Inject rendered content + helmet tags into template.
            // Include helmet.script — JSON-LD (<script type="application/ld+json">)
            // lives here and was silently dropped before, so crawlers/AI saw no schema.
            let pageHtml = template
                .replace('<!--app-head-->', helmet ? [
                    helmet.title?.toString() || '',
                    helmet.meta?.toString() || '',
                    helmet.link?.toString() || '',
                    helmet.script?.toString() || '',
                    helmet.style?.toString() || '',
                    helmet.base?.toString() || '',
                    helmet.noscript?.toString() || '',
                ].join('\n') : '')
                .replace('<!--app-html-->', appHtml);

            // Write to dist/<route>/index.html
            const routeDir = route === '/'
                ? distDir
                : path.resolve(distDir, route.slice(1));

            if (!fs.existsSync(routeDir)) fs.mkdirSync(routeDir, { recursive: true });
            fs.writeFileSync(path.resolve(routeDir, 'index.html'), pageHtml);
            console.log(`  ✓ ${route}`);
        } catch (err) {
            console.warn(`  ⚠️  Skipped ${route}: ${err.message}`);
        }
    }

    // Custom 404 for unmatched routes (Cloudflare Pages serves dist/404.html).
    try {
        const { html: nfHtml, helmet } = render('/404');
        const pageHtml = template
            .replace('<!--app-head-->', helmet ? [
                helmet.title?.toString() || '',
                helmet.meta?.toString() || '',
                helmet.link?.toString() || '',
                helmet.script?.toString() || '',
                helmet.style?.toString() || '',
                helmet.base?.toString() || '',
                helmet.noscript?.toString() || '',
            ].join('\n') : '')
            .replace('<!--app-html-->', nfHtml);
        fs.writeFileSync(path.resolve(distDir, '404.html'), pageHtml);
        console.log('  ✓ /404.html');
    } catch (err) {
        console.warn(`  ⚠️  Skipped 404: ${err.message}`);
    }

    console.log('\n✅ Full SSR prerender complete. Site is crawler-readable.');
    writeSitemap();
}

prerender().catch(console.error);
