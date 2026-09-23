import { Helmet } from 'react-helmet-async';
import { forText } from '../../lib/color';
import { Link, useParams } from 'react-router-dom';
import SEO from '../../components/SEO';
import AgentVideo from '../../components/media/AgentVideo';
import { ENGINES } from '../../data/engines';
import { AGENT_GUIDES } from '../../data/agentGuides';
import videoRegistry from '../../data/videoRegistry.json';

/**
 * The canonical agent EXPLAINER (wiki) page: gtm-360.com/agents/<engine>/<agent>/guide
 * The "how to read this agent" reference — the plain-English guide that each
 * runtime output links to. Explains the output sections, the terms in them, how
 * the agent stays honest, and answers the questions buyers ask. Rendered
 * statically at build time with FAQPage JSON-LD for AI answer engines.
 */

const AGENT_SURFACE = {
  'seo-analyzer': 'https://agents.gtm-360.com/seo',
  qualifier: 'https://agents.gtm-360.com/qualify',
  diagnostic: 'https://agents.gtm-360.com/diagnostic',
  listener: 'https://agents.gtm-360.com/listen',
  sniper: 'https://agents.gtm-360.com/snipe',
  'content-radar': 'https://agents.gtm-360.com/radar',
  'goal-designer': 'https://agents.gtm-360.com/goal-designer',
  'goal-integrity': 'https://agents.gtm-360.com/goal-integrity',
  'signals-scout': 'https://agents.gtm-360.com/scout',
  'deal-room': 'https://agents.gtm-360.com/deal-room',
  'health-monitor': 'https://agents.gtm-360.com/churn',
  'churn-predictor': 'https://agents.gtm-360.com/churn',
  'expansion-radar': 'https://agents.gtm-360.com/expansion',
  'win-loss': 'https://agents.gtm-360.com/win-loss',
  hygiene: 'https://agents.gtm-360.com/hygiene',
  'forecast-analyser': 'https://agents.gtm-360.com/forecast',
  'planning-cycle': 'https://agents.gtm-360.com/planning',
  'icp-clarifier': 'https://agents.gtm-360.com/icp',
  'competitor-intel': 'https://agents.gtm-360.com/competitor',
};

const AgentGuide = () => {
    const { engine, agent } = useParams();
    const eng = ENGINES.find((e) => e.id === engine);
    const ag = eng?.agents.find((a) => a.id === agent);
    const guide = agent ? AGENT_GUIDES[agent] : null;

    if (!eng || !ag) {
        return (
            <div className="pt-36 pb-24 bg-white font-sans text-slate-900 min-h-screen">
                <div className="container max-w-3xl text-center">
                    <h1 className="text-4xl font-bold mb-6">Guide not found</h1>
                    <Link to="/learn" className="text-indigo-600 font-bold hover:underline">← Back to all guides</Link>
                </div>
            </div>
        );
    }

    const surface = AGENT_SURFACE[ag.id] ?? 'https://agents.gtm-360.com';
    const videoSrc = videoRegistry[ag.id]?.videoUrl ?? null;
    const faqs = guide?.faq ?? [];

    return (
        <div className="font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
            <SEO
                title={`How to read ${ag.name} — a plain-English guide | GTM-360`}
                description={`What ${ag.name} does, how to read its output, the terms it uses, and how it stays honest. ${ag.role} — takes ${ag.take}; gives ${ag.give}.`}
                canonical={`https://gtm-360.com/agents/${eng.id}/${ag.id}/guide`}
            />
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": faqs.map((f) => ({
                            "@type": "Question",
                            "name": f.q,
                            "acceptedAnswer": { "@type": "Answer", "text": f.a },
                        })),
                    })}
                </script>
            </Helmet>

            {/* BREADCRUMB */}
            <section className="pt-28 pb-2 bg-white">
                <div className="container max-w-4xl">
                    <nav className="text-xs text-slate-400 mb-4" aria-label="Breadcrumb">
                        <Link to="/" className="hover:text-indigo-600">GTM-360</Link>
                        <span className="mx-1.5">/</span>
                        <Link to="/learn" className="hover:text-indigo-600">Guides</Link>
                        <span className="mx-1.5">/</span>
                        <Link to={`/agents/${eng.id}/${ag.id}`} className="hover:text-indigo-600">{ag.name}</Link>
                        <span className="mx-1.5">/</span>
                        <span className="text-slate-600 font-medium">Guide</span>
                    </nav>
                </div>
            </section>

            {/* HERO */}
            <section className="pb-12 bg-white">
                <div className="container max-w-4xl">
                    <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: forText(eng.color) }}>
                        {eng.name} Engine · plain-English guide
                    </p>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-slate-900 leading-[1.1]">
                        How to read {ag.name}
                    </h1>
                    <p className="text-xl text-slate-500 max-w-2xl font-light leading-relaxed">
                        {ag.name} {ag.role.toLowerCase()}. This guide explains what it produces, what each part means,
                        and how it stays honest — so you can act on the output with confidence.
                    </p>
                </div>
            </section>

            {/* THE CONTRACT + VIDEO */}
            <section className="pb-14 bg-white">
                <div className="container max-w-4xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Takes</p>
                            <p className="text-slate-700 font-medium">{ag.take}</p>
                        </div>
                        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Gives</p>
                            <p className="text-slate-700 font-medium">{ag.give}</p>
                        </div>
                    </div>
                    {guide?.data ? (
                        <p className="text-sm text-slate-500 mt-4">
                            <span className="font-semibold text-slate-700">The data it uses:</span> {guide.data}
                        </p>
                    ) : null}
                    {videoSrc ? (
                        <div className="mt-8 max-w-2xl">
                            <AgentVideo src={videoSrc} label={`How ${ag.name} works`} />
                        </div>
                    ) : null}
                </div>
            </section>

            {guide ? (
                <>
                    {/* HOW TO READ IT */}
                    {guide.reads?.length ? (
                        <section className="py-14 bg-slate-50 border-y border-slate-100">
                            <div className="container max-w-4xl">
                                <h2 className="text-2xl font-bold text-slate-900 mb-8">How to read the output</h2>
                                <div className="space-y-5">
                                    {guide.reads.map((r, i) => (
                                        <div key={i} className="bg-white border border-slate-200 rounded-xl p-6">
                                            <p className="font-bold text-slate-900 mb-2">{r.section}</p>
                                            <p className="text-slate-500 leading-relaxed">{r.meaning}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    ) : null}

                    {/* GLOSSARY */}
                    {guide.glossary?.length ? (
                        <section className="py-14 bg-white">
                            <div className="container max-w-4xl">
                                <h2 className="text-2xl font-bold text-slate-900 mb-8">The terms it uses</h2>
                                <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {guide.glossary.map((g, i) => (
                                        <div key={i} className="border border-slate-200 rounded-xl p-5">
                                            <dt className="font-bold text-slate-900 mb-1">{g.term}</dt>
                                            <dd className="text-sm text-slate-500 leading-relaxed">{g.def}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </section>
                    ) : null}

                    {/* HOW IT STAYS HONEST */}
                    {guide.method ? (
                        <section className="py-14 bg-slate-50 border-y border-slate-100">
                            <div className="container max-w-4xl">
                                <h2 className="text-2xl font-bold text-slate-900 mb-3">How it stays honest</h2>
                                <p className="text-slate-500 max-w-2xl mb-8">
                                    Every agent separates what it <span className="font-semibold text-slate-700">measured</span> from
                                    your data from what it <span className="font-semibold text-slate-700">inferred</span>. You always
                                    know which is which.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <p className="text-xs font-bold text-emerald-700 uppercase tracking-widest mb-3">Measured</p>
                                        <ul className="space-y-2">
                                            {guide.method.measured.map((m, i) => (
                                                <li key={i} className="text-slate-600 text-sm flex gap-2"><span className="text-emerald-500">✓</span>{m}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-amber-700 uppercase tracking-widest mb-3">Inferred</p>
                                        <ul className="space-y-2">
                                            {guide.method.inferred.map((m, i) => (
                                                <li key={i} className="text-slate-600 text-sm flex gap-2"><span className="text-amber-500">~</span>{m}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>
                    ) : null}

                    {/* FAQ */}
                    {faqs.length ? (
                        <section className="py-14 bg-white">
                            <div className="container max-w-4xl">
                                <h2 className="text-2xl font-bold text-slate-900 mb-8">Questions people ask</h2>
                                <div className="space-y-3">
                                    {faqs.map((f, i) => (
                                        <details key={i} className="group border border-slate-200 rounded-xl p-5 open:bg-slate-50">
                                            <summary className="font-semibold text-slate-900 cursor-pointer list-none flex justify-between items-center">
                                                {f.q}
                                                <span className="text-slate-400 group-open:rotate-45 transition-transform">+</span>
                                            </summary>
                                            <p className="text-slate-500 leading-relaxed mt-3">{f.a}</p>
                                        </details>
                                    ))}
                                </div>
                            </div>
                        </section>
                    ) : null}
                </>
            ) : (
                <section className="py-14 bg-white">
                    <div className="container max-w-4xl">
                        <p className="text-slate-500">A written guide for {ag.name} is coming. In the meantime, the full
                            contract and a video are on the <Link to={`/agents/${eng.id}/${ag.id}`} className="text-indigo-600 font-semibold hover:underline">agent page</Link>.</p>
                    </div>
                </section>
            )}

            {/* CTA — try it */}
            <section className="py-20 bg-slate-900 text-white">
                <div className="container max-w-3xl text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">Now read the real thing.</h2>
                    <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                        Run {ag.name} on your own data and compare the output to this guide. If it matches, you can trust it.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href={surface} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center justify-center bg-white text-slate-900 px-10 py-4 rounded font-bold hover:bg-slate-100 transition-all">
                            Try {ag.name} →
                        </a>
                        <Link to="/learn"
                            className="inline-flex items-center justify-center bg-transparent text-slate-300 border border-slate-600 px-10 py-4 rounded font-medium hover:border-slate-400 transition-all">
                            All guides →
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AgentGuide;
