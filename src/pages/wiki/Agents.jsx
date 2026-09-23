import { Helmet } from 'react-helmet-async'
import { AGENT_SLOTS } from '../../data/wiki/framework'

const swarms = [
  { id: 'strategy', label: 'Strategy', color: '#2563eb' },
  { id: 'marketing', label: 'Marketing', color: '#10b981' },
  { id: 'sales', label: 'Sales', color: '#d97706' },
  { id: 'expansion', label: 'Expansion', color: '#0d9488' },
  { id: 'operations', label: 'Operations', color: '#475569' },
]

const statusCls = {
  live: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  demo: 'bg-amber-50 text-amber-700 border-amber-200',
  build: 'bg-slate-100 text-slate-500 border-slate-200',
}

export function Agents() {
  return (
    <div>
      <Helmet>
        <title>The agents — who drives each process | GTM-360</title>
        <meta name="description" content="The specialist agents behind every GTM process — which are live today, and where the engine grows next. Grouped by engine: Strategy, Sales, Marketing, Expansion, Operations." />
        <link rel="canonical" href="https://gtm-360.com/wiki/method/agents" />
      </Helmet>
      <div className="max-w-3xl pt-4 pb-8">
        <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-3">Reference</p>
        <h1 className="text-3xl font-bold tracking-tight mb-3">The agents</h1>
        <p className="text-slate-500 leading-relaxed">
          The agents that drive the sub-processes. <span className="font-semibold text-emerald-700">Live</span>{' '}
          agents run today, <span className="font-semibold text-slate-500">to build</span> slots are where the
          engine grows next. Built by GTM-360 — the AI engine arm.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {swarms.map((sw) => {
          const slots = Object.values(AGENT_SLOTS).filter((a) => a.swarm === sw.id)
          const liveCount = slots.filter((a) => a.status === 'live').length
          return (
            <div key={sw.id} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-card">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-bold" style={{ color: sw.color }}>{sw.label}</h2>
                <span className="text-[11px] text-slate-400">{liveCount}/{slots.length} live</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {slots.map((a) => (
                  <span key={a.id} className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold border ${statusCls[a.status] || statusCls.build}`}>
                    {a.name}
                    {a.status === 'build' && <span className="font-normal opacity-70">· to build</span>}
                  </span>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      <p className="text-xs text-slate-400 mt-6">
        {Object.keys(AGENT_SLOTS).length} agent slots mapped across the framework · {Object.values(AGENT_SLOTS).filter((a) => a.status === 'live').length} live today.
      </p>
    </div>
  )
}