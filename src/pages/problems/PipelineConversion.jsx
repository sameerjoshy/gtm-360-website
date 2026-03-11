import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

const PipelineConversion = () => (
    <div className="min-h-screen bg-white font-sans">
        
        <Helmet>
            <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        { "@type": "Question", "name": "Why are B2B win rates falling?", "acceptedAnswer": { "@type": "Answer", "text": "Falling B2B win rates are rarely a sales execution problem. The most common root causes are ICP drift — the pipeline has filled with buyers outside the ideal profile — messaging misalignment where the value proposition no longer matches buyer priorities, stage criteria that do not require buyer commitment, and sales cycles that stall because the decision-making structure has not been mapped." }},
                        { "@type": "Question", "name": "What is ICP drift in B2B sales?", "acceptedAnswer": { "@type": "Answer", "text": "ICP drift is the gradual shift in a company's actual customer base away from its original ideal customer profile. It typically happens through inbound marketing that attracts adjacent personas, partnerships that bring in different buyer types, or product evolution that opens new use cases. The pipeline fills with buyers who are harder to close, require longer sales cycles, and have higher churn rates — but the drift is slow enough that nobody notices until metrics have quietly deteriorated." }},
                        { "@type": "Question", "name": "How do you improve B2B win rates?", "acceptedAnswer": { "@type": "Answer", "text": "The fix depends on the root cause. If the issue is ICP drift, the solution is to redefine the ICP based on current win rate and retention data and tighten qualification criteria. If the issue is messaging misalignment, the solution is to update the value proposition to match how buyers are currently describing their problems. If the issue is stage criteria, the solution is to rebuild stage definitions around buyer evidence." }},
                        { "@type": "Question", "name": "What is a good B2B win rate?", "acceptedAnswer": { "@type": "Answer", "text": "B2B SaaS win rates vary by deal size and segment. For SMB deals, 20–30% is typical. For mid-market, 15–25%. For enterprise, 10–20%. More important than the absolute number is the trend and the comparison across segments. A declining win rate in a specific deal size or industry segment usually points to a specific, diagnosable problem." }}
                    ]
                })}</script>
        </Helmet>
        <SEO title="Why B2B Win Rates Fall: ICP Drift & Messaging Gaps | GTM-360" description="Falling B2B win rates rarely signal a sales execution problem. They reflect ICP drift, messaging misalignment, or stage criteria not tied to buyer behaviour." canonical="https://gtm-360.com/problems/pipeline-conversion" />
        <section className="pt-32 pb-16 bg-white border-b border-slate-100">
            <div className="container max-w-3xl">
                <Link to="/problems" className="text-xs text-slate-400 hover:text-slate-700 mb-6 block">← All patterns</Link>
                <span className="text-indigo-600 font-mono text-xs tracking-widest uppercase mb-4 block">Conversion</span>
                <h1 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">Win rates are falling.</h1>
                <p className="text-xl text-slate-500 font-light leading-relaxed">Deals are entering the funnel but closing less often. The instinct is to improve sales skills or add enablement. The real cause is usually upstream of the sales conversation.</p>
            </div>
        </section>
        <section className="py-16 bg-white">
            <div className="container max-w-3xl space-y-10">
                <div>
                    <h2 className="text-xl font-bold text-slate-900 mb-3">What's actually happening</h2>
                    <p className="text-slate-600 leading-relaxed">Win rate decline is a downstream signal. By the time it shows up in the metrics, the root cause has been operating for months. It usually reflects one of three things: ICP drift (you're targeting different accounts than those your product was built for), messaging misalignment (the problem you're solving isn't the problem the buyer owns), or a buying process that doesn't match how you're selling.</p>
                </div>
                <div>
                    <h2 className="text-xl font-bold text-slate-900 mb-3">The misdiagnosis</h2>
                    <p className="text-slate-600 leading-relaxed">Sales training, new playbooks, and additional enablement. These can help at the margin but won't fix a structural ICP or messaging problem. The rep can execute perfectly against the wrong buyer with the wrong message.</p>
                </div>
                <div>
                    <h2 className="text-xl font-bold text-slate-900 mb-3">The real constraint</h2>
                    <p className="text-slate-600 leading-relaxed">In most cases, win rate decline traces back to a mismatch between who you're pursuing and what they actually need to decide. Either the ICP has drifted from your original anchor, or the way you're positioning the problem doesn't match the way the buyer owns it internally.</p>
                </div>
                <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
                    <h2 className="text-lg font-bold text-slate-900 mb-3">What changes when this is fixed</h2>
                    <ul className="space-y-2 text-slate-600 text-sm">
                        {["Win rates recover because you're pursuing accounts that actually match your product", "Sales cycles shorten because buyer ownership of the problem is clear", "Messaging lands differently in real conversations", "Pipeline quality improves because qualification is anchored to the right signals"].map((i, idx) => (
                            <li key={idx} className="flex items-start gap-2"><span className="text-emerald-500 font-bold mt-0.5">✓</span>{i}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
        <section className="py-16 bg-white border-t border-slate-100">
            <div className="container max-w-3xl">
                <h2 className="text-2xl font-bold text-slate-900 mb-8">Frequently asked questions</h2>
                <div className="space-y-8">
                    {[
                        { q: "Why are B2B win rates falling?", a: "Falling B2B win rates are rarely a sales execution problem. The most common root causes are ICP drift — the pipeline has filled with buyers outside the ideal profile — messaging misalignment where the value proposition no longer matches buyer priorities, and stage criteria that do not require genuine buyer commitment." },
                        { q: "What is ICP drift in B2B sales?", a: "ICP drift is the gradual shift in a company's actual customer base away from its ideal customer profile. It typically happens through inbound that attracts adjacent personas, or product evolution that opens new use cases. The pipeline fills with buyers who are harder to close and have higher churn — but the drift is slow enough that nobody notices until metrics have deteriorated." },
                        { q: "How do you improve B2B win rates?", a: "The fix depends on root cause. ICP drift: redefine the ICP based on current win rate and retention data, tighten qualification. Messaging misalignment: update the value proposition to match how buyers describe their problems today. Stage criteria: rebuild stage definitions around buyer evidence rather than seller activity." },
                        { q: "What is a good B2B win rate?", a: "B2B SaaS win rates vary by deal size and segment. For SMB deals, 20–30% is typical. For mid-market, 15–25%. For enterprise, 10–20%. More important than the absolute number is the trend and comparison across segments. A declining win rate in a specific segment usually points to a diagnosable problem." }
                    ].map((item, i) => (
                        <div key={i} className="border-b border-slate-100 pb-8 last:border-0">
                            <h3 className="text-base font-bold text-slate-900 mb-3">{item.q}</h3>
                            <p className="text-slate-600 leading-relaxed text-sm">{item.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        <section className="py-16 bg-white border-t border-slate-100">
            <div className="container max-w-4xl">
                <h2 className="text-2xl font-bold text-slate-900 mb-8">Related reading</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[LINKS].map((a, i) => (
                        <Link key={i} to={a.href} className="border border-slate-200 rounded-xl p-6 hover:shadow-sm hover:border-indigo-200 transition-all group">
                            <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest block mb-3">{a.tag}</span>
                            <h3 className="text-sm font-bold text-slate-900 leading-snug group-hover:text-indigo-700 transition-colors">{a.title}</h3>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
        <section className="py-16 bg-slate-50 border-t border-slate-100 text-center">
            <div className="container max-w-2xl">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Is this the pattern you're seeing?</h2>
                <p className="text-slate-500 mb-8">The diagnostic finds the real constraint — not the one that's easiest to act on.</p>
                <Link to="/start-here" className="inline-flex items-center justify-center bg-slate-900 text-white px-8 py-4 rounded font-bold hover:bg-slate-700 transition-all">Start with a diagnostic</Link>
            </div>
        </section>
    </div>
);
export default PipelineConversion;
