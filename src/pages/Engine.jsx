import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Bowtie from '../components/visuals/Bowtie';
import { ENGINES, AGENT_TOTAL } from '../data/engines';

const Engine = () => {
    const [open, setOpen] = useState(ENGINES[0].id);

    return (
        <div className="font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
            <SEO
                title="The GTM-360 Engine | 5 Engines, 25 Specialist Agents"
                description="Five engines — Strategy, Marketing, Sales, Expansion, Operations — with 25 specialist agents and defined handoffs. One loop that runs the end-to-end go-to-market process."
                canonical="https://gtm-360.com/engine"
            />

            {/* HERO */}
            <section className="pt-36 pb-12 bg-white">
                <div className="container max-w-3xl text-center">
                    <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-6">The Engine</p>
                    <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-slate-900 leading-[1.08]">
                        {ENGINES.length} engines. {AGENT_TOTAL} specialist jobs. One loop.
                    </h1>
                    <p className="text-xl text-slate-500 font-light leading-relaxed max-w-2xl mx-auto">
                        Every engine is one accountable outcome. Every agent inside it is one job. They
                        hand off to each other with defined gates — and every move is approved by you.
                    </p>
                </div>
            </section>

            {/* THE BOWTIE */}
            <section className="py-10 bg-slate-50 border-y border-slate-100">
                <div className="container max-w-5xl">
                    <Bowtie compact />
                </div>
            </section>

            {/* ENGINE DETAILS */}
            <section className="py-20 bg-white">
                <div className="container max-w-5xl">
                    {/* Engine selector */}
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-10">
                        {ENGINES.map((e) => (
                            <button
                                key={e.id}
                                onClick={() => setOpen(e.id)}
                                className={`text-left px-4 py-3 rounded-lg border transition-all ${
                                    open === e.id
                                        ? 'border-transparent text-white shadow-md'
                                        : 'border-slate-200 bg-white hover:border-slate-300'
                                }`}
                                style={open === e.id ? { background: e.color } : undefined}
                            >
                                <span className="text-sm font-bold block">{e.name}</span>
                                <span className={`text-xs ${open === e.id ? 'text-white/80' : 'text-slate-400'}`}>{e.agents.length} agents</span>
                            </button>
                        ))}
                    </div>

                    {/* Active engine */}
                    {ENGINES.filter((e) => e.id === open).map((e) => (
                        <div key={e.id}>
                            <div className="max-w-2xl mb-8">
                                <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: e.color }}>{e.envelope === 'journey' ? `The ${e.journey} journey` : e.envelope === 'top' ? 'The top envelope' : 'The bottom envelope'}</p>
                                <h2 className="text-3xl font-bold text-slate-900 mb-2">{e.name}</h2>
                                <p className="text-lg text-slate-600 font-medium">{e.what}</p>
                                <p className="text-slate-500 mt-2">{e.claim}</p>
                            </div>

                            {/* Agents */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {e.agents.map((a, i) => (
                                    <div key={a.id} className="border border-slate-200 rounded-xl p-5">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold text-white" style={{ background: e.color }}>
                                                {i + 1}
                                            </span>
                                            <h3 className="font-bold text-slate-900">{a.name}</h3>
                                            <span className="text-xs text-slate-400 ml-auto">{a.role}</span>
                                        </div>
                                        <div className="text-xs text-slate-500 space-y-1">
                                            <p><span className="font-semibold text-slate-600">Takes:</span> {a.take}</p>
                                            <p><span className="font-semibold text-slate-600">Gives:</span> {a.give}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Handoff + roadmap */}
                            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">The handoff</p>
                                    <p className="text-slate-700 text-sm">{e.handoff}</p>
                                </div>
                                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Grows next</p>
                                    <div className="flex flex-wrap gap-1.5">
                                        {e.roadmap.map((r) => (
                                            <span key={r} className="text-xs px-2 py-1 rounded bg-white border border-slate-200 text-slate-500">{r}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className="text-center mt-14">
                        <Link to="/start-here"
                            className="inline-flex items-center justify-center bg-slate-900 text-white px-8 py-4 rounded font-bold hover:bg-slate-700 transition-all">
                            Start with the diagnostic →
                        </Link>
                        <p className="mt-3 text-xs text-slate-400">See which engine is actually limiting your growth — the diagnostic finds it.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Engine;