import { useState } from 'react'

// PowerPoint-style process flow: chevron steps. Clicking a step shows its
// operational playbook (objective, activities, decision points, metrics, gates)
// when available, else a short note.
export function ProcessDiagram({ workflow, steps, playbook, color, accent }) {
  const [active, setActive] = useState(0)
  const note = steps?.[active] || null
  const stage = workflow[active] || workflow[0]
  const p = playbook?.[active] || null

  const arr = (v) => (Array.isArray(v) ? v : v ? [v] : [])

  return (
    <div className="w-full">
      {/* Chevron rail */}
      <div className="flex items-stretch overflow-x-auto pb-3">
        {workflow.map((s, i) => {
          const on = i === active
          return (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`relative shrink-0 transition-transform duration-200 ${
                on ? '-translate-y-1' : 'hover:-translate-y-0.5'
              } ${i > 0 ? '-ml-4' : ''}`}
              style={{ zIndex: on ? 5 : 1 }}
              title={s}
            >
              <div
                className="flex items-center gap-2.5 h-16 px-7 pr-9 text-left"
                style={{
                  clipPath: 'polygon(0 0, calc(100% - 18px) 0, 100% 50%, calc(100% - 18px) 100%, 0 100%, 18px 50%)',
                  background: on ? color : '#FFFFFF',
                  border: on ? 'none' : '1px solid #E2E8F0',
                  color: on ? '#FFFFFF' : '#475569',
                  boxShadow: on ? `0 10px 30px -10px ${color}` : '0 1px 3px rgba(15,23,42,0.08)',
                }}
              >
                <span
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                    on ? 'bg-white/25 text-white' : 'bg-slate-100 text-slate-500'
                  }`}
                >
                  {i + 1}
                </span>
                <span className="text-[13px] font-semibold whitespace-nowrap">{s}</span>
              </div>
            </button>
          )
        })}
      </div>

      {/* Step detail — operational playbook / slide-note */}
      <div
        className="mt-4 rounded-xl p-5 border"
        style={{ background: `${accent}0D`, borderColor: `${accent}2E` }}
      >
        <div className="flex items-center gap-2 mb-3">
          <span
            className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider px-2 py-1 rounded-md text-white"
            style={{ background: color }}
          >
            Step {active + 1}
          </span>
          <span className="text-sm font-bold text-slate-800">{stage}</span>
        </div>

        {p ? (
          <div className="space-y-3">
            {(p.objective || p.output) && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                {p.objective && (
                  <div className="bg-white/70 rounded-lg px-3 py-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider block" style={{ color }}>Objective</span>
                    <span className="text-xs text-slate-700 leading-snug">{p.objective}</span>
                  </div>
                )}
                {p.input && (
                  <div className="bg-white/70 rounded-lg px-3 py-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider block" style={{ color }}>Input</span>
                    <span className="text-xs text-slate-700 leading-snug">{p.input}</span>
                  </div>
                )}
                {p.output && (
                  <div className="bg-white/70 rounded-lg px-3 py-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider block" style={{ color }}>Output</span>
                    <span className="text-xs text-slate-700 leading-snug">{p.output}</span>
                  </div>
                )}
              </div>
            )}

            {arr(p.activities).length > 0 && (
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color }}>Key activities</p>
                <div className="flex flex-wrap gap-x-3 gap-y-1">
                  {arr(p.activities).map((a, i) => (
                    <span key={i} className="text-xs text-slate-600 inline-flex items-center gap-1">
                      <span className="w-1 h-1 rounded-full" style={{ background: accent }} /> {a}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {arr(p.decisionPoints).length > 0 && (
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color }}>Decision points</p>
                <div className="flex flex-wrap gap-x-3 gap-y-1">
                  {arr(p.decisionPoints).map((d, i) => (
                    <span key={i} className="text-xs text-slate-600 inline-flex items-center gap-1">
                      <span className="w-1 h-1 rounded-full" style={{ background: accent }} /> {d}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {(p.tools || arr(p.roles).length > 0) && (
              <div className="flex flex-wrap gap-2 text-xs">
                {p.tools && (
                  <span className="bg-white/70 rounded-md px-2.5 py-1 text-slate-600">
                    <span className="font-bold text-slate-700">Tools:</span> {p.tools}
                  </span>
                )}
                {arr(p.roles).length > 0 && (
                  <span className="bg-white/70 rounded-md px-2.5 py-1 text-slate-600">
                    <span className="font-bold text-slate-700">Roles:</span> {arr(p.roles).join(' · ')}
                  </span>
                )}
              </div>
            )}

            {p.successMetric && (
              <p className="text-xs text-slate-600">
                <span className="font-bold text-slate-700" style={{ color }}>Success:</span> {p.successMetric}
              </p>
            )}

            {(typeof p.qualityGate === 'string' ? p.qualityGate : p.qualityGate?.go || p.qualityGate?.loopback) && (
              typeof p.qualityGate === 'string' ? (
                <p className="text-xs text-slate-600">
                  <span className="font-bold text-slate-700" style={{ color }}>Quality gate:</span> {p.qualityGate}
                </p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {p.qualityGate.go && (
                    <span className="text-xs rounded-md px-2.5 py-1.5 bg-emerald-50 border border-emerald-200 text-emerald-800">
                      <span className="font-bold">Go:</span> {p.qualityGate.go}
                    </span>
                  )}
                  {p.qualityGate.loopback && (
                    <span className="text-xs rounded-md px-2.5 py-1.5 bg-amber-50 border border-amber-200 text-amber-800">
                      <span className="font-bold">Loop back:</span> {p.qualityGate.loopback}
                    </span>
                  )}
                </div>
              )
            )}
          </div>
        ) : (
          <p className="text-sm text-slate-600 leading-relaxed">
            {note || 'No playbook note for this step yet — the workflow stands on its own.'}
          </p>
        )}
      </div>
    </div>
  )
}