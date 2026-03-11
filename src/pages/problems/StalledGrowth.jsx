import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

const StalledGrowth = () => (
    <div className="min-h-screen bg-white font-sans">
        
        <Helmet>
            <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        { "@type": "Question", "name": "Why is my B2B pipeline growing but revenue is not?", "acceptedAnswer": { "@type": "Answer", "text": "When B2B pipeline grows but revenue stays flat, the constraint is almost always qualification and stage definition — not volume. Deals are advancing through the CRM based on seller activity rather than genuine buyer commitment. The pipeline looks healthy because stages are being ticked, but the underlying deal quality has quietly deteriorated. Adding more pipeline at the top makes the problem worse, not better." }},
                        { "@type": "Question", "name": "What is pipeline quality in B2B sales?", "acceptedAnswer": { "@type": "Answer", "text": "Pipeline quality refers to the degree to which deals in the pipeline represent genuine buyer intent and commitment at each stage, rather than seller-driven progression. A high-quality pipeline has stage criteria that require buyer evidence — a documented problem, an identified decision maker, a confirmed budget process — not just a follow-up call completed." }},
                        { "@type": "Question", "name": "How do you fix a B2B pipeline quality problem?", "acceptedAnswer": { "@type": "Answer", "text": "The fix has two parts: redefine stage entry and exit criteria to require buyer evidence rather than seller activity, and implement a pipeline review cadence that enforces those criteria. This typically causes the pipeline to shrink initially as low-quality deals are removed — but win rates, forecast accuracy, and revenue predictability all improve within one to two quarters." }},
                        { "@type": "Question", "name": "What are B2B pipeline stage definitions?", "acceptedAnswer": { "@type": "Answer", "text": "Pipeline stage definitions are the criteria a deal must meet to enter and exit each stage in the sales process. Effective stage definitions map to buyer behaviour — what the buyer has done or committed to — rather than seller activity. For example, a deal should only enter Proposal stage when the buyer has confirmed the problem, the decision maker, the timeline, and the evaluation process — not when the seller has sent a proposal." }}
                    ]
                })}</script>
        </Helmet>
        <SEO title="Why B2B Pipeline Growth Doesn't Fix Revenue — B2B GTM | GTM-360" description="When B2B pipeline grows but revenue stays flat, the constraint is qualification — not volume. Here's what's actually happening and how to fix it." canonical="https://gtm-360.com/problems/stalled-growth" />
        <section className="pt-32 pb-16 bg-white border-b border-slate-100">
            <div className="container max-w-3xl">
                <Link to="/problems" className="text-xs text-slate-400 hover:text-slate-700 mb-6 block">← All patterns</Link>
                <span className="text-indigo-600 font-mono text-xs tracking-widest uppercase mb-4 block">Pipeline Quality</span>
                <h1 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">Pipeline is growing but revenue isn't.</h1>
                <p className="text-xl text-slate-500 font-light leading-relaxed">This is one of the most common misdiagnoses in B2B GTM. The instinct is to add more pipeline. The constraint is almost never volume.</p>
            </div>
        </section>
        <section className="py-16 bg-white">
            <div className="container max-w-3xl space-y-10">
                <div>
                    <h2 className="text-xl font-bold text-slate-900 mb-3">What's actually happening</h2>
                    <p className="text-slate-600 leading-relaxed">Opportunities are entering the pipeline and advancing through stages — but the advancement is based on seller activity, not buyer commitment. Deals look active. Forecasts look healthy. But when they reach late stage, the commitment that was assumed never materialises.</p>
                </div>
                <div>
                    <h2 className="text-xl font-bold text-slate-900 mb-3">The misdiagnosis</h2>
                    <p className="text-slate-600 leading-relaxed">Most teams respond by generating more pipeline, hiring more SDRs, or increasing outbound volume. This increases the number of deals in the same broken state. It doesn't fix the conversion problem — it scales it.</p>
                </div>
                <div>
                    <h2 className="text-xl font-bold text-slate-900 mb-3">The real constraint</h2>
                    <p className="text-slate-600 leading-relaxed">Stage definitions that allow deals to advance without genuine buyer evidence. When a stage can be moved by a seller action rather than a buyer action, pipeline quality degrades silently over time. The forecast looks fine until it doesn't.</p>
                </div>
                <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
                    <h2 className="text-lg font-bold text-slate-900 mb-3">What changes when this is fixed</h2>
                    <ul className="space-y-2 text-slate-600 text-sm">
                        {["Pipeline shrinks initially — but quality improves significantly", "Close rates recover because only real opportunities advance", "Forecasts become more accurate because stage definitions mean something", "Sales team focuses time on deals with genuine buyer momentum"].map((i, idx) => (
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
                        { q: "Why is my B2B pipeline growing but revenue is not?", a: "When B2B pipeline grows but revenue stays flat, the constraint is almost always qualification and stage definition — not volume. Deals are advancing through the CRM based on seller activity rather than genuine buyer commitment. The pipeline looks healthy because stages are being ticked, but the underlying deal quality has quietly deteriorated. Adding more pipeline at the top makes the problem worse, not better." },
                        { q: "What is pipeline quality in B2B sales?", a: "Pipeline quality refers to the degree to which deals represent genuine buyer intent at each stage, rather than seller-driven progression. A high-quality pipeline has stage criteria that require buyer evidence — a documented problem, an identified decision maker, a confirmed budget process — not just a follow-up call completed." },
                        { q: "How do you fix a B2B pipeline quality problem?", a: "Redefine stage entry and exit criteria to require buyer evidence rather than seller activity, and implement a pipeline review cadence that enforces those criteria. The pipeline typically shrinks initially as low-quality deals are removed — but win rates, forecast accuracy, and revenue predictability all improve within one to two quarters." },
                        { q: "What are B2B pipeline stage definitions?", a: "Stage definitions are the criteria a deal must meet to enter and exit each stage. Effective definitions map to buyer behaviour — what the buyer has done or committed to — not what the seller has done. A deal should only enter Proposal stage when the buyer has confirmed the problem, decision maker, timeline, and evaluation process." }
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
                <p className="text-slate-500 mb-8">The diagnostic is designed to confirm or rule it out — and find what's actually in the way.</p>
                <Link to="/start-here" className="inline-flex items-center justify-center bg-slate-900 text-white px-8 py-4 rounded font-bold hover:bg-slate-700 transition-all">Start with a diagnostic</Link>
            </div>
        </section>
    </div>
);
export default StalledGrowth;
