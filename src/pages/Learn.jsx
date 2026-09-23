import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { ENGINES } from '../data/engines';
import { AGENT_GUIDES } from '../data/agentGuides';

/**
 * The wiki hub: gtm-360.com/learn — every agent explained in plain English.
 * The front door to the per-agent guides. Rendered statically at build time.
 */

const Learn = () => {
    return (
        <div className="font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
            <SEO
                title="Guides — every agent, explained in plain English | GTM-360"
                description="What each GTM-360 agent does, how to read its output, the terms it uses, and how it stays honest. A plain-English guide for every specialist agent."
                canonical="https://gtm-360.com/learn"
            />
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "CollectionPage",
                        "name": "GTM-360 Agent Guides",
                        "description": "Plain-English guides for every GTM-360 specialist agent.",
                        "url": "https://gtm-360.com/learn",
                    })}
                </script>
            </Helmet>

            {/* HERO */}
            <section className="pt-36 pb-16 bg-white">
                <div className="container max-w-3xl">
                    <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-6">Guides · the wiki</p>
                    <h1 className="text-5xl font-bold tracking-tight mb-8 text-slate-900 leading-[1.08]">
                        Every agent, in plain English.
                    </h1>
                    <p className="text-xl text-slate-500 max-w-2xl font-light leading-relaxed">
                        Each specialist agent has a written guide: what it produces, how to read it, the terms it uses,
                        and how it separates what it measured from what it guessed. Read it before you run the agent —
                        or after, to check the output.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 mt-10">
                        <Link to="/agents"
                            className="inline-flex items-center justify-center bg-slate-900 text-white px-8 py-4 rounded font-bold hover:bg-slate-700 transition-all">
                            Browse the agents →
                        </Link>
                        <Link to="/engine"
                            className="inline-flex items-center justify-center bg-white text-slate-600 border border-slate-200 px-8 py-4 rounded font-medium hover:bg-slate-50 transition-all">
                            See the engine →
                        </Link>
                    </div>
                </div>
            </section>

            {/* GUIDES BY ENGINE */}
            {ENGINES.map((eng) => {
                const guided = eng.agents.filter((a) => AGENT_GUIDES[a.id]);
                if (!guided.length) return null;
                return (
                    <section key={eng.id} className="py-12 bg-white border-t border-slate-100">
                        <div className="container max-w-4xl">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="w-3 h-3 rounded-full" style={{ background: eng.color }} />
                                <h2 className="text-2xl font-bold text-slate-900">{eng.name}</h2>
                                <span className="text-sm text-slate-400">{eng.what}</span>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {guided.map((a) => (
                                    <Link
                                        key={a.id}
                                        to={`/agents/${eng.id}/${a.id}/guide`}
                                        className="block bg-slate-50 border border-slate-200 rounded-xl p-5 hover:border-slate-300 hover:bg-white transition-all"
                                    >
                                        <p className="font-bold text-slate-900 mb-1">{a.name}</p>
                                        <p className="text-sm text-slate-500 mb-3">{a.role}</p>
                                        <p className="text-xs font-semibold" style={{ color: eng.color }}>
                                            Read the guide → 
                                        </p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>
                );
            })}

            {/* CTA */}
            <section className="py-20 bg-slate-900 text-white">
                <div className="container max-w-3xl text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">Read it, then judge the output.</h2>
                    <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                        The guides tell you exactly what good looks like. Run any agent and hold it to that standard.
                    </p>
                    <Link to="/start-here"
                        className="inline-flex items-center justify-center bg-white text-slate-900 px-10 py-4 rounded font-bold hover:bg-slate-100 transition-all">
                        Start with a conversation →
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Learn;
