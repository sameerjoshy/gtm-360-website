import { Helmet } from 'react-helmet-async'
import { TOOL_CATALOG } from '../../data/wiki/framework'

const groups = {
  'Research & Signals': ['tavily', 'exa', 'apify', 'apify-signals', 'parallel'],
  'List Building & Data': ['ai-ark', 'apollo', 'prospeo', 'google-maps', 'linkedin'],
  'Enrichment': ['bitscale', 'clay'],
  'Personalization & Copy': ['claude', 'deepseek', 'gpt'],
  'Sending': ['smartlead', 'instantly', 'lemlist'],
  'Automation': ['n8n', 'zapier', 'make'],
  'CRM & Pipeline': ['hubspot', 'attio'],
  'Analytics & Forecasting': ['metabase', 'ga', 'plausible'],
  'Communication & Knowledge': ['slack', 'notion', 'supabase'],
}

export function Tools() {
  return (
    <div>
      <Helmet>
        <title>The tool index — every tool behind the engine | GTM-360</title>
        <meta name="description" content="Every tool behind the GTM-360 engine, grouped by job — research, list building, enrichment, sequencing, CRM, and analytics — with alternates listed." />
        <link rel="canonical" href="https://gtm-360.com/wiki/method/tools" />
      </Helmet>
      <div className="max-w-3xl pt-4 pb-8">
        <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-3">Reference</p>
        <h1 className="text-3xl font-bold tracking-tight mb-3">The tool index</h1>
        <p className="text-slate-500 leading-relaxed">
          Every tool behind the engine, grouped by job. One rule: <span className="font-semibold text-slate-700">don't
          automate bad GTM — automate a good GTM process.</span> Alternates listed, because the tool matters
          less than the process.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.entries(groups).map(([group, ids]) => (
          <div key={group} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-card">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">{group}</h2>
            <div className="space-y-3">
              {ids.map((id) => {
                const t = TOOL_CATALOG[id]
                if (!t) return null
                return (
                  <div key={id} className="border-b border-slate-100 last:border-0 pb-3 last:pb-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-bold text-slate-900 text-sm">{t.name}</span>
                      <span className="text-[11px] text-slate-400">{t.fn}</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">
                      <span className="font-semibold text-slate-600">Alternates:</span>{' '}
                      {t.alt?.length ? t.alt.join(' · ') : '—'}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}