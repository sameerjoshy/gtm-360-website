import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Bowtie from '../components/visuals/Bowtie';
import { ENGINES, AGENT_TOTAL } from '../data/engines';

const AgentsPage = () => {
    return (
        <div className="font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
            <SEO
                title="Specialist Agents | GTM-360 — 25 agents, 5 engines, evidence-first"
                description="GTM-360's specialist agents answer revenue questions with evidence, not opinion. Strategy, Marketing, Sales, Expansion, Operations — 25 agents in 5 engines, every answer grounded in your data."
                canonical="https://gtm-360.com/agents"
            />
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "GTM-360 Specialist Agents",
                        "provider": { "@type": "Organization", "name": "GTM-360" },
                        "description": "25 specialist agents across five engines — Strategy, Marketing, Sales, Expansion, Operations. Every agent follows a four-step chain: gather real data, validate quality, synthesise with an LLM, verify output. Evidence-first answers on demand.",
                    })}
                </script>
            </Helmet>

            {/* HERO */}
            <section className="pt-36 pb-20 bg-white">
                <div className="container max-w-3xl">
                    <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-6">
                        GTM-360 · Specialist Agents · Evidence-first
                    </p>
                    <h1 className="text-5xl font-bold tracking-tight mb-8 text-slate-900 leading-[1.08]">
                        {ENGINES.length} engines.
                        <br />
                        {AGENT_TOTAL} specialist jobs. One standard.
                    </h1>
                    <p className="text-xl text-slate-500 mb-10 max-w-2xl font-light leading-relaxed">
                        Every agent answers one question with evidence, not opinion — the way a senior
                        operator works. Each follows a four-step chain: gather real data, validate
                        quality, synthesise, verify output. No AI theater. Signals, judgment, decision
                        support.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link to="/wiki/method"
                            className="inline-flex items-center justify-center bg-slate-900 text-white px-8 py-4 rounded font-bold hover:bg-slate-700 transition-all">
                            Explore the engine →
                        </Link>
                        <a
                            href="https://agents.gtm-360.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center bg-white text-slate-600 border border-slate-200 px-8 py-4 rounded font-medium hover:bg-slate-50 transition-all"
                        >
                            Open Crew — specialists on call →
                        </a>
                    </div>
                    <p className="text-xs text-slate-400 mt-6">Each agent below has its own page — what it does, what it needs, what you get, and how to try it.</p>
                </div>
            </section>

            {/* THE BOWTIE */}
            <section className="py-14 bg-slate-50 border-y border-slate-100">
                <div className="container max-w-5xl">
                    <Bowtie />
                </div>
            </section>

            {/* ENGINE GRID */}
            <section className="py-20 bg-white">
                <div className="container max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-10">
                        {ENGINES.map((e) => (
                            <div key={e.id} className="border border-slate-200 rounded-xl p-5">
                                <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: e.color }}>{e.name}</p>
                                <p className="text-slate-500 text-sm leading-relaxed mb-3">{e.what}</p>
                                <p className="text-xs font-bold text-slate-700">{e.agents.length} agents</p>
                            </div>
                        ))}
                    </div>

                    <div className="space-y-3">
                        {ENGINES.map((e) => (
                            <div key={e.id} className="flex flex-col md:flex-row md:items-center gap-4 bg-slate-50 border border-slate-200 rounded-xl p-5">
                                <span className="w-40 flex-shrink-0 text-sm font-bold" style={{ color: e.color }}>{e.name}</span>
                                <div className="flex-1 flex flex-wrap gap-1.5">
                                    {e.agents.map((a) => (
                                        <Link
                                            key={a.id}
                                            to={`/agents/${e.id}/${a.id}`}
                                            className="text-xs px-2 py-1 rounded bg-white border border-slate-200 text-slate-600 hover:border-slate-400 hover:text-slate-900 transition-all"
                                            title={a.role}
                                        >
                                            {a.name}
                                        </Link>
                                    ))}
                                </div>
                                <p className="text-xs text-slate-400 italic w-full md:w-72 md:text-right">{e.handoff.split('—')[0]}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="container max-w-3xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                        See it work before you talk to us.
                    </h2>
                    <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                        Run the agents on a sample workspace and see the quality of the output yourself.
                        If that's the standard you want on your own data, that's the conversation.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://agents.gtm-360.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center bg-white text-slate-900 px-10 py-4 rounded font-bold hover:bg-slate-100 transition-all"
                        >
                            Open Crew →
                        </a>
                        <Link to="/start-here"
                            className="inline-flex items-center justify-center bg-transparent text-slate-300 border border-slate-600 px-10 py-4 rounded font-medium hover:border-slate-400 transition-all">
                            Start with a conversation →
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AgentsPage;