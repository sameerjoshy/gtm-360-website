import { useState } from 'react'
import { OPERATIONAL } from '../../data/wiki/operational'

function Chip({ label, children }) {
  return (
    <div className="flex items-start gap-2 text-sm text-slate-700">
      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mt-0.5 shrink-0 w-20">{label}</span>
      <span className="leading-relaxed">{children}</span>
    </div>
  )
}

export function OperationalPlaybook({ slug, color, accent }) {
  const [open, setOpen] = useState(false)
  const op = OPERATIONAL[slug]
  if (!op) return null

  return (
    <section className="mb-8">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between rounded-2xl px-6 py-4 text-white hover:opacity-95 transition-opacity cursor-pointer"
        style={{ background: color }}
      >
        <span className="flex items-center gap-2 font-bold">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M3 9h18M9 21V9" /></svg>
          Run it — the operational playbook
        </span>
        <svg className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 9l6 6 6-6" /></svg>
      </button>

      {open && (
        <div className="mt-3 bg-white border border-slate-200 rounded-2xl p-6 shadow-card space-y-5">
          {/* Objective / Input / Output */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-50 border border-slate-100 rounded-xl p-4">
              <p className="text-[11px] font-bold uppercase tracking-wider mb-1" style={{ color }}>Objective</p>
              <p className="text-sm text-slate-700 leading-relaxed">{op.objective}</p>
            </div>
            <div className="bg-slate-50 border border-slate-100 rounded-xl p-4">
              <p className="text-[11px] font-bold uppercase tracking-wider mb-1" style={{ color }}>Input</p>
              <p className="text-sm text-slate-700 leading-relaxed">{op.input}</p>
            </div>
            <div className="bg-slate-50 border border-slate-100 rounded-xl p-4">
              <p className="text-[11px] font-bold uppercase tracking-wider mb-1" style={{ color }}>Output</p>
              <p className="text-sm text-slate-700 leading-relaxed">{op.output}</p>
            </div>
          </div>

          {/* Activities + Decision points */}
          {op.activities.length > 0 && (
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider mb-2" style={{ color }}>Key activities</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {op.activities.map((a, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: accent }} />
                    {a}
                  </div>
                ))}
              </div>
            </div>
          )}

          {op.decisionPoints.length > 0 && (
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider mb-2" style={{ color }}>Decision points</p>
              <ul className="space-y-1.5">
                {op.decisionPoints.map((d, i) => (
                  <li key={i} className="text-sm text-slate-700 leading-snug">• {d}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Tools · Roles · Automation */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Chip label="Tools">{op.tools}</Chip>
            <Chip label="Roles">{op.roles.join(' · ') || '—'}</Chip>
            <Chip label="Automation">{op.automation}</Chip>
          </div>

          {/* Success metrics */}
          {op.successMetrics.length > 0 && (
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider mb-2" style={{ color }}>Success metrics</p>
              <div className="flex flex-wrap gap-2">
                {op.successMetrics.map((m, i) => (
                  <span key={i} className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 text-sm text-slate-700">{m}</span>
                ))}
              </div>
            </div>
          )}

          {/* Quality gate */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-xl p-4 bg-emerald-50 border border-emerald-200">
              <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 mb-1">Go if</p>
              <p className="text-sm text-emerald-900 leading-relaxed">{op.qualityGate.go || '—'}</p>
            </div>
            <div className="rounded-xl p-4 bg-amber-50 border border-amber-200">
              <p className="text-[11px] font-bold uppercase tracking-wider text-amber-700 mb-1">Loop back if</p>
              <p className="text-sm text-amber-900 leading-relaxed">{op.qualityGate.loopback || '—'}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}