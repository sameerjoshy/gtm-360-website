import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { LAYERS, getAgentsFor, getToolsFor } from '../../data/wiki/framework'
import { getContent, slugify } from '../../data/wiki/content'
import { getLayerReferences } from '../../data/wiki/references'
import { ProcessDiagram } from '../../components/wiki/ProcessDiagram'
import { OperationalPlaybook } from '../../components/wiki/OperationalPlaybook'
import { OPERATIONAL } from '../../data/wiki/operational'

function findProcess(slug) {
  for (const layer of LAYERS) {
    const p = layer.processes.find((x) => slugify(x.name) === slug)
    if (p) return { layer, process: p }
  }
  return null
}

const statusCls = {
  live: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  demo: 'bg-amber-50 text-amber-700 border-amber-200',
  build: 'bg-slate-100 text-slate-500 border-slate-200',
}

function Block({ title, color, items }) {
  if (!items || items.length === 0) return null
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-card">
      <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color }}>{title}</p>
      <ul className="space-y-2">
        {items.map((it, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-slate-700 leading-snug">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: color }} />
            {it}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Process() {
  const { slug } = useParams()
  const found = findProcess(slug)
  const [deeper, setDeeper] = useState(false)

  if (!found) {
    return (
      <div className="max-w-2xl py-20 text-center">
        <Helmet>
          <title>Process not found | GTM-360 Knowledge Base</title>
          <meta name="robots" content="noindex, follow" />
        </Helmet>
        <p className="text-5xl mb-4">🧭</p>
        <h1 className="text-2xl font-bold mb-2">Process not found</h1>
        <Link to="/wiki/method" className="text-indigo-600 font-semibold hover:underline">Back to the map →</Link>
      </div>
    )
  }

  const { layer, process } = found
  const content = getContent(process.name)
  const agents = getAgentsFor(process)
  const tools = getToolsFor(process)
  const refs = getLayerReferences(layer.id)
  const steps = content?.steps ?? content?.deep?.steps

  return (
    <div>
      <Helmet>
        <title>{`${process.name} — ${layer.name} | GTM-360 Operating Model`}</title>
        <meta name="description" content={content?.tagline || `${process.name}: workflow, best practices, and the agents and tools behind it — in the ${layer.name} layer.`} />
        <link rel="canonical" href={`https://gtm-360.com/wiki/method/process/${slugify(process.name)}`} />
      </Helmet>
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-slate-400 mb-4">
        <Link to="/wiki/method" className="hover:text-slate-600">The Map</Link>
        <span>›</span>
        <span style={{ color: layer.color }} className="font-semibold">{layer.name}</span>
        <span>›</span>
        <span className="text-slate-600 font-semibold">{process.name}</span>
      </div>

      {/* Title */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <span className="w-1.5 h-10 rounded-full" style={{ background: layer.color }} />
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{process.name}</h1>
        </div>
        {content?.tagline ? (
          <p className="text-lg text-slate-500 max-w-2xl">{content.tagline}</p>
        ) : (
          <p className="text-lg text-slate-400 max-w-2xl italic">Primer coming — the workflow, agents, and tools are mapped below.</p>
        )}
      </div>

      {/* The workflow diagram */}
      <section className="mb-8">
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Workflow</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-card">
          <ProcessDiagram workflow={process.workflow} steps={steps} playbook={OPERATIONAL[slug]?.stages} color={layer.color} accent={layer.color} />
        </div>
      </section>

      {/* Operational playbook (Run it) */}
      <OperationalPlaybook slug={slug} color={layer.color} accent={layer.color} />

      {/* Short learning blocks */}
      {content && (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <Block title="Why it matters" color={layer.color} items={[content.why]} />
          <Block title="Best practices" color={layer.color} items={content.best} />
          <Block title="Common mistakes" color={layer.color} items={content.mistakes} />
          <Block title="Key questions" color={layer.color} items={content.questions} />
        </section>
      )}

      {/* Agents + tools */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-card">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Agents that drive this</p>
          {agents.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {agents.map((a) => (
                <span key={a.id} className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold border ${statusCls[a.status] || statusCls.build}`}>
                  {a.name}
                  {a.status === 'build' && <span className="font-normal opacity-70">· to build</span>}
                </span>
              ))}
            </div>
          ) : (
            <p className="text-sm text-slate-400 italic">Advisory — no agent mapped yet.</p>
          )}
        </div>
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-card">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Tools we use <span className="font-normal">· alternates in <span className="font-mono">[ ]</span></span></p>
          {tools.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {tools.map((t) => (
                <span key={t.id} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium bg-slate-50 border border-slate-200 text-slate-600">
                  {t.name}
                  {t.alt?.length > 0 && <span className="text-slate-300">[ {t.alt.join(', ')} ]</span>}
                </span>
              ))}
            </div>
          ) : (
            <p className="text-sm text-slate-400 italic">No tools mapped yet.</p>
          )}
        </div>
      </section>

      {/* Go deeper */}
      {content?.deep && (
        <section className="mb-8">
          <button
            onClick={() => setDeeper(!deeper)}
            className="w-full flex items-center justify-between bg-slate-900 text-white rounded-2xl px-6 py-4 hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <span className="font-bold">Go deeper</span>
            <svg className={`w-4 h-4 transition-transform ${deeper ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 9l6 6 6-6" /></svg>
          </button>
          {deeper && (
            <div className="mt-3 space-y-3">
              {content.deep.overview && (
                <p className="text-sm text-slate-600 leading-relaxed bg-white border border-slate-200 rounded-2xl p-5 shadow-card">{content.deep.overview}</p>
              )}
              {content.deep.example && (
                <div className="bg-indigo-50 border border-indigo-600/20 rounded-2xl p-5">
                  <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-2">In practice</p>
                  <p className="text-sm text-slate-700 leading-relaxed">{content.deep.example}</p>
                </div>
              )}
              {refs.length > 0 && (
                <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-card">
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Read the canon</p>
                  <div className="space-y-2">
                    {refs.map((r) => (
                      <div key={r.title} className="flex items-baseline justify-between gap-4">
                        <span className="text-sm font-semibold text-slate-800">{r.title} <span className="text-slate-400 font-normal">· {r.author}</span></span>
                        <span className="text-xs text-slate-400 shrink-0">{r.why}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </section>
      )}
    </div>
  )
}