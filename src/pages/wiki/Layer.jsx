import { Link, useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { LAYERS, getAgentsFor } from '../../data/wiki/framework'
import { getContent, hasContent, slugify } from '../../data/wiki/content'
import { getLayerReferences } from '../../data/wiki/references'

const statusCls = {
  live: 'bg-emerald-50 text-emerald-700',
  demo: 'bg-amber-50 text-amber-700',
  build: 'bg-slate-100 text-slate-500',
}

export default function Layer() {
  const { id } = useParams()
  const layer = LAYERS.find((l) => l.id === id)

  if (!layer) {
    return (
      <div className="max-w-2xl py-20 text-center">
        <Helmet>
          <title>Layer not found | GTM-360 Knowledge Base</title>
          <meta name="robots" content="noindex, follow" />
        </Helmet>
        <p className="text-5xl mb-4">🧭</p>
        <h1 className="text-2xl font-bold mb-2">Layer not found</h1>
        <Link to="/wiki/method" className="text-indigo-600 font-semibold hover:underline">Back to the map →</Link>
      </div>
    )
  }

  return (
    <div>
      <Helmet>
        <title>{`${layer.name} — layer ${layer.id} | GTM-360 Operating Model`}</title>
        <meta name="description" content={layer.blurb} />
        <link rel="canonical" href={`https://gtm-360.com/wiki/method/layer/${layer.id}`} />
      </Helmet>
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-slate-400 mb-4">
        <Link to="/wiki/method" className="hover:text-slate-600">The Map</Link>
        <span>›</span>
        <span className="font-semibold" style={{ color: layer.color }}>{layer.name}</span>
      </div>

      {/* Header */}
      <div className="flex items-start gap-4 mb-8">
        <span className="w-2 h-14 rounded-full mt-1 shrink-0" style={{ background: layer.color }} />
        <div>
          <p className="text-[10px] font-mono font-bold text-slate-400 mb-1">{layer.id}</p>
          <h1 className="text-3xl font-bold tracking-tight mb-2">{layer.name}</h1>
          <p className="text-slate-500 max-w-2xl">{layer.blurb}</p>
        </div>
      </div>

      {/* Processes — card grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {layer.processes.map((p) => {
          const has = hasContent(p.name)
          const content = getContent(p.name)
          return (
            <Link
              key={p.name}
              to={`/wiki/method/process/${slugify(p.name)}`}
              className="group bg-white border border-slate-200 rounded-2xl p-5 shadow-card hover:border-slate-900 hover:shadow-md transition-all"
            >
              <div className="flex items-start justify-between gap-2 mb-1">
                <h3 className="font-bold text-slate-900 group-hover:text-indigo-700 transition-colors">{p.name}</h3>
                {!has && (
                  <span className="text-[10px] font-semibold text-slate-300 shrink-0">primer soon</span>
                )}
              </div>
              {content?.tagline ? (
                <p className="text-sm text-slate-500 leading-relaxed">{content.tagline}</p>
              ) : (
                <p className="text-sm text-slate-400 italic">
                  {p.workflow.length} steps · mapped
                </p>
              )}
              <div className="mt-3 flex flex-wrap gap-1">
                {getAgentsFor(p).slice(0, 3).map((a) => (
                  <span key={a.id} className={`text-[10px] font-semibold px-1.5 py-0.5 rounded ${statusCls[a.status] || statusCls.build}`}>
                    {a.name}
                  </span>
                ))}
                {getAgentsFor(p).length > 3 && (
                  <span className="text-[10px] font-semibold text-slate-400 px-1">+{getAgentsFor(p).length - 3}</span>
                )}
              </div>
            </Link>
          )
        })}
      </div>

      {/* Canonical refs for the layer */}
      <div className="mt-8 p-6 bg-white border border-slate-200 rounded-2xl shadow-card">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Read the canon · {layer.name}</p>
        <div className="flex flex-wrap gap-3">
          {getLayerReferences(layer.id).map((r) => (
            <span key={r.title} className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm">
              <span className="font-semibold text-slate-800">{r.title}</span>
              <span className="text-slate-400">· {r.author}</span>
              <span className="text-xs text-slate-400">{r.why}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}