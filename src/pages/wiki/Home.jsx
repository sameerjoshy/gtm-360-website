import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { LAYERS, AGENT_SLOTS, getAgentsFor, getTotalProcessCount } from '../../data/wiki/framework'
import { TOOL_CATALOG } from '../../data/wiki/framework'
import { hasContent } from '../../data/wiki/content'

function LayerGrid() {
  const [hover, setHover] = useState(null)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {LAYERS.map((layer) => {
        const rich = layer.processes.filter((p) => hasContent(p.name)).length
        const agentCount = layer.processes.reduce((n, p) => n + getAgentsFor(p).length, 0)
        return (
          <Link
            key={layer.id}
            to={`/wiki/method/layer/${layer.id}`}
            onMouseEnter={() => setHover(layer.id)}
            onMouseLeave={() => setHover(null)}
            className={`group bg-white border rounded-2xl p-6 shadow-card transition-all ${
              hover === layer.id ? 'border-slate-900 shadow-md -translate-y-0.5' : 'border-slate-200'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="w-2 h-10 rounded-full" style={{ background: layer.color }} />
              <span className="text-[10px] font-mono font-bold text-slate-300">{layer.id}</span>
            </div>
            <h2 className="font-bold text-lg text-slate-900 leading-snug group-hover:text-indigo-700 transition-colors">
              {layer.name}
            </h2>
            <p className="text-sm text-slate-500 mt-2 leading-relaxed">{layer.blurb}</p>
            <div className="mt-5 flex items-center justify-between text-xs text-slate-400">
              <span className="font-semibold">{layer.processes.length} processes</span>
              <span className="inline-flex items-center gap-1 text-indigo-600 font-semibold">
                Open
                <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </span>
            </div>
            <div className="mt-3 flex items-center justify-between text-[11px] text-slate-300">
              <span>{agentCount} agent links</span>
              <span>{rich}/{layer.processes.length} primers written</span>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export function Home() {
  const total = getTotalProcessCount()
  const liveAgents = Object.values(AGENT_SLOTS).filter((a) => a.status === 'live').length
  const tools = Object.keys(TOOL_CATALOG).length

  return (
    <div>
      <Helmet>
        <title>The GTM Operating Model — how go-to-market works | GTM-360</title>
        <meta name="description" content="Ten layers, forty-plus processes — every one mapped to its workflow, the agents that drive it, and the tools behind it. The GTM-360 operating model, end to end." />
        <link rel="canonical" href="https://gtm-360.com/wiki/method" />
      </Helmet>
      {/* Hero — short */}
      <section className="max-w-4xl pt-6 pb-10">
        <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-3">The GTM Operating Model</p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.08] mb-4">
          How go-to-market actually works.
        </h1>
        <p className="text-lg text-slate-500 max-w-2xl leading-relaxed">
          Ten layers. Forty-plus processes. Every one mapped to its workflow, the agents that
          drive it, and the tools behind it. Learn the whole game — or refresh one process
          before you run it.
        </p>
        <div className="mt-6 flex flex-wrap gap-6">
          {[
            { v: LAYERS.length, l: 'Layers' },
            { v: total, l: 'Processes' },
            { v: liveAgents, l: 'Live agents' },
            { v: tools, l: 'Tools' },
          ].map((s) => (
            <div key={s.l}>
              <div className="text-2xl font-bold text-slate-900">{s.v}</div>
              <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* The Map — card grid */}
      <LayerGrid />

      {/* One-line rule */}
      <div className="mt-8 p-5 bg-white border border-slate-200 rounded-2xl flex items-start gap-3">
        <span className="text-indigo-600 mt-0.5 shrink-0">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l2.5 5.5L20 10l-5.5 2.5L12 18l-2.5-5.5L4 10l5.5-2.5L12 2z" /></svg>
        </span>
        <p className="text-sm text-slate-600">
          <span className="font-bold text-slate-800">The rule under everything:</span> every process runs the
          same loop — identify → collect → prioritize → enrich → personalize → execute → optimize.
          Learn the loop, and every process becomes a variation.
        </p>
      </div>
    </div>
  )
}