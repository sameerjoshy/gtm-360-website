import { Helmet } from 'react-helmet-async'
import { Logo } from '../../components/wiki/Logo'

export function About() {
  return (
    <div className="max-w-3xl">
      <Helmet>
        <title>About the primer — a deep primer on go-to-market | GTM-360</title>
        <meta name="description" content="A knowledge base on how GTM actually works, process by process — the workflows, best practices, mistakes, and the agents and tools behind each one." />
        <link rel="canonical" href="https://gtm-360.com/wiki/method/about" />
      </Helmet>
      <div className="pt-4 pb-8">
        <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-3">About</p>
        <h1 className="text-3xl font-bold tracking-tight mb-4">A deep primer on go-to-market.</h1>
        <p className="text-slate-500 leading-relaxed mb-6">
          This is a knowledge base: how GTM actually works, process by process — the workflows,
          the best practices, the mistakes, and the agents and tools behind each one. Learn the
          whole game, or refresh a single process before you run it.
        </p>
      </div>

      <div className="space-y-4 mb-8">
        {[
          { q: 'Who is this for?', a: 'Founders building their first motion. Operators running revenue systems. SDRs and AEs who want the map. Anyone learning GTM.' },
          { q: 'How do I use it?', a: 'Start at The Map. Open the layer that matches your moment — planning, demand, sales, CS, pricing. Then a process. Each one is short: why it matters, the workflow, the mistakes.' },
          { q: 'What is the rule underneath everything?', a: 'Every process runs the same loop: identify → collect → prioritize → enrich → personalize → execute → optimize. Learn the loop, and every process is a variation.' },
          { q: 'What about the agents and tools?', a: 'Every process lists the agents that drive it and the tools behind it — with alternates. We advise on strategy and execution, and we build the AI engine.' },
        ].map((f) => (
          <div key={f.q} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-card">
            <h3 className="font-bold text-slate-900 mb-1">{f.q}</h3>
            <p className="text-sm text-slate-600 leading-relaxed">{f.a}</p>
          </div>
        ))}
      </div>

      <div className="bg-slate-900 text-white rounded-2xl p-6">
        <Logo size={40} light />
        <p className="font-bold mb-1 mt-3">Built by GTM-360</p>
        <p className="text-sm text-white/60 leading-relaxed mb-4">
          The same operating model we advise on — with the AI engine we build to run it.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="https://gtm-360.com" className="text-xs font-bold bg-white text-slate-900 px-4 py-2 rounded-lg hover:bg-slate-100">gtm-360.com</a>
          <a href="https://okr.gtm-360.com" className="text-xs font-bold bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20">Compass · goals</a>
          <a href="https://brain.gtm-360.com" className="text-xs font-bold bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20">Cockpit · execution</a>
          <a href="https://agents.gtm-360.com" className="text-xs font-bold bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20">Crew · agents</a>
        </div>
      </div>
    </div>
  )
}