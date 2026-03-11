import React from 'react';
import { Helmet } from 'react-helmet-async';
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
                title="B2B GTM Insights & Case Studies | Revenue Patterns | GTM-360"
                description="GTM consulting insights from real B2B engagements. Patterns in pipeline quality, forecast volatility, ICP drift, and revenue stalls."
canonical="https://gtm-360.com/insights"
            />
            <Helmet>
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "CollectionPage",
                    "name": "B2B GTM Insights & Case Studies",
                    "description": "GTM consulting insights from real B2B revenue engagements. Patterns in pipeline quality, forecast accuracy, ICP drift, and GTM misdiagnosis.",
                    "url": "https://gtm-360.com/insights",
                    "publisher": { "@type": "Organization", "@id": "https://gtm-360.com/#organization", "name": "GTM-360" }
                })}</script>
            </Helmet>


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
                            <Link to={featured.slug} className="text-sm font-bold text-white border-b border-indigo-400 pb-0.5 hover:border-white transition-colors">
                                Read article →
                            </Link>
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
                </div>
            </section>

            {/* CASE STUDIES SECTION */}
            <section className="py-16 bg-slate-50 border-t border-slate-100">
                <div className="container max-w-5xl">
                    <div className="max-w-xl mb-10">
                        <span className="text-slate-400 font-mono text-xs tracking-widest uppercase mb-3 block">Case Studies</span>
                        <h2 className="text-2xl font-bold text-slate-900 mb-3">What these patterns look like in practice.</h2>
                        <p className="text-slate-500 font-light">Narrative accounts of real engagements. Names and details anonymised.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {[
                            {
                                tag: "Pipeline Quality",
                                metric: "14% → 22% win rate",
                                title: "The pipeline was full. Revenue was flat.",
                                slug: "/insights/case-studies/pipeline-full-revenue-flat"
                            },
                            {
                                tag: "Forecasting",
                                metric: "58% → 84% forecast accuracy",
                                title: "The board wanted predictability. The team was guessing.",
                                slug: "/insights/case-studies/forecast-board-wanted-predictability"
                            },
                            {
                                tag: "GTM Alignment",
                                metric: "94 → 58 day sales cycle",
                                title: "Sales cycles had doubled. The ICP had quietly changed.",
                                slug: "/insights/case-studies/sales-cycle-doubled-icp-drift"
                            },
                            {
                                tag: "Misdiagnosis",
                                metric: "Execution pressure → clarity",
                                title: "Fixing the 'obvious' problem made growth worse.",
                                slug: "/insights/case-studies/fixing-the-wrong-problem"
                            },
                            {
                                tag: "AI & Tools",
                                metric: "More signals → less clarity",
                                title: "AI increased activity but reduced GTM clarity.",
                                slug: "/insights/case-studies/when-ai-created-noise-not-clarity"
                            }
                        ].map((cs, i) => (
                            <Link key={i} to={cs.slug} className="bg-white border border-slate-200 rounded-xl p-7 hover:shadow-md hover:border-slate-300 transition-all group block">
                                <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-3 block">{cs.tag}</span>
                                <p className="text-sm font-mono text-slate-400 mb-3">{cs.metric}</p>
                                <h3 className="text-base font-bold text-slate-900 leading-snug group-hover:text-indigo-700 transition-colors">{cs.title}</h3>
                                <span className="text-xs text-slate-400 mt-4 block">Read full case study →</span>
                            </Link>
                        ))}
                    </div>
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
