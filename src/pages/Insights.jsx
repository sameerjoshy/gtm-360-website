import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const insights = [
    {
        tag: "Growth Inflection",
        title: "Why growth stalls after early traction",
        desc: "A practical breakdown of why the system that built your first $10M creates drag on the next $20M — and what has to change structurally, not just operationally.",
        readTime: "8 min read",
        slug: "/insights/why-growth-stalls",
        featured: true
    },
    {
        tag: "Pipeline",
        title: "The stage definition problem nobody talks about",
        desc: "Most pipeline inflation isn't caused by bad reps. It's caused by stage criteria that measure seller activity instead of buyer commitment.",
        readTime: "5 min read",
        slug: "/insights/stage-definition-problem",
        featured: false
    },
    {
        tag: "Forecasting",
        title: "Why forecasts decay over time",
        desc: "Without a shared definition of what 'evidence' means in a deal, forecasts become a negotiation between sales optimism and finance conservatism. Neither is right.",
        readTime: "6 min read",
        slug: "/insights/forecast-decay",
        featured: false
    },
    {
        tag: "Misdiagnosis",
        title: "The hidden cost of solving the wrong problem",
        desc: "More pipeline, more tools, more headcount. When the underlying constraint is misunderstood, additional effort compounds the problem instead of solving it.",
        readTime: "5 min read",
        slug: "/insights/solving-wrong-problem",
        featured: false
    },
    {
        tag: "AI & Tools",
        title: "When AI makes your GTM worse",
        desc: "AI amplifies the system underneath it. If the system is misaligned, AI makes misalignment faster and more expensive. The diagnosis has to come first.",
        readTime: "4 min read",
        slug: "/insights/when-ai-makes-gtm-worse",
        featured: false
    },
    {
        tag: "ICP",
        title: "ICP drift — the silent revenue killer",
        desc: "ICP drift happens slowly. The accounts you're winning today look different from the accounts your product was built for. By the time it shows in metrics, the damage is done.",
        readTime: "6 min read",
        slug: "/insights/icp-drift",
        featured: false
    }
];

const Insights = () => {
    const featured = insights.find(i => i.featured);
    const rest = insights.filter(i => !i.featured);

    return (
        <div className="min-h-screen bg-white font-sans selection:bg-indigo-100 selection:text-indigo-900">
            <SEO
                title="GTM Insights | Revenue Patterns in B2B Growth | GTM-360"
                description="Short, opinionated writing from inside real GTM systems. Patterns we see repeatedly in B2B companies at the growth plateau."
            />

            {/* HEADER */}
            <section className="pt-32 pb-20 bg-slate-50 border-b border-slate-100">
                <div className="container max-w-4xl text-center">
                    <span className="text-slate-400 font-mono text-xs tracking-widest uppercase mb-4 block">Field Notes</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                        Patterns we see repeatedly.
                    </h1>
                    <p className="text-xl text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">
                        Short, opinionated writing from inside real revenue systems. No content calendar. Only things worth saying.
                    </p>
                </div>
            </section>

            {/* FEATURED */}
            <section className="py-16 bg-white border-b border-slate-100">
                <div className="container max-w-5xl">
                    <div className="bg-slate-900 text-white p-10 md:p-14 rounded-xl">
                        <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-4 block">{featured.tag} · Pinned</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">{featured.title}</h2>
                        <p className="text-slate-300 mb-8 leading-relaxed text-lg max-w-2xl">{featured.desc}</p>
                        <div className="flex items-center gap-6">
                            
                            <span className="text-slate-500 text-sm italic">⚠ Publish article then replace this with real link</span>
                            <span className="text-slate-500 text-sm">{featured.readTime}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* GRID */}
            <section className="py-16 bg-white">
                <div className="container max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {rest.map((insight, i) => (
                            <div key={i} className="border border-slate-200 rounded-xl p-8 hover:shadow-md hover:border-slate-300 transition-all">
                                <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-3 block">{insight.tag}</span>
                                <h3 className="text-lg font-bold text-slate-900 mb-3 leading-snug">{insight.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed mb-6">{insight.desc}</p>
                                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                                    <span className="text-xs text-slate-400">{insight.readTime}</span>
                                    <Link to={insight.slug} className="text-xs font-bold text-indigo-600 hover:text-indigo-800 transition-colors">Read →</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-xs text-slate-300 mt-10 italic">⚠ Replace "Coming soon" tags with real article links as content is published.</p>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-slate-50 border-t border-slate-100 text-center">
                <div className="container max-w-2xl">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Recognise any of these patterns?</h2>
                    <p className="text-slate-500 mb-8">The diagnostic is the fastest way to find out which one is actually limiting your growth.</p>
                    <Link to="/start-here" className="inline-flex items-center justify-center bg-slate-900 text-white px-8 py-4 rounded font-bold hover:bg-slate-700 transition-all">
                        Start with a diagnostic
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Insights;
