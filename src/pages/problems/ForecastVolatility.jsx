import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

const ForecastVolatility = () => (
    <div className="min-h-screen bg-white font-sans">
        
        <Helmet>
            <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        { "@type": "Question", "name": "Why is B2B sales forecast accuracy so low?", "acceptedAnswer": { "@type": "Answer", "text": "B2B forecast inaccuracy is almost always a signal problem, not a process problem. The root cause is that CRM stage definitions do not map to genuine buyer behaviour — each rep advances deals based on their own interpretation of the stage criteria. When eight reps have eight different definitions of what Commit means, the forecast becomes an aggregation of incompatible inputs, not a prediction." }},
                        { "@type": "Question", "name": "How do you improve B2B sales forecast accuracy?", "acceptedAnswer": { "@type": "Answer", "text": "Improving forecast accuracy requires two changes: first, rebuild pipeline stage criteria to require buyer evidence at each stage so that stage position actually reflects deal health; second, implement a structured forecast call cadence with standardised commit criteria so that all reps are using the same definitions. A triangulation model — combining pipeline data, activity data, and historical close rates — then produces a number the board can trust." }},
                        { "@type": "Question", "name": "What is revenue governance in B2B sales?", "acceptedAnswer": { "@type": "Answer", "text": "Revenue governance is the operating system for how a company produces, reviews, and commits to its revenue forecast. It includes: defined stage criteria, a structured forecast call cadence, standardised commit language, triangulation models for deal scoring, and escalation processes for at-risk deals. Companies with strong revenue governance can predict revenue within 5–10% accuracy; companies without it are often off by 20–40%." }},
                        { "@type": "Question", "name": "What does forecast volatility mean in sales?", "acceptedAnswer": { "@type": "Answer", "text": "Forecast volatility means the revenue forecast changes significantly week to week or month to month — deals move from commit to upside to push in rapid sequence. It signals that the pipeline data is not a reliable indicator of actual buyer intent, typically because stage criteria are loose, commit definitions vary by rep, and deals are advancing on seller optimism rather than buyer evidence." }}
                    ]
                })}</script>
        </Helmet>
        <SEO title="Why B2B Sales Forecasts Are Unreliable — and How to Fix Them | GTM-360" description="B2B forecast volatility is a signal problem, not a process problem. When CRM stages don't map to buyer behaviour, forecast accuracy collapses — here's the fix." />
        <section className="pt-32 pb-16 bg-white border-b border-slate-100">
            <div className="container max-w-3xl">
                <Link to="/problems" className="text-xs text-slate-400 hover:text-slate-700 mb-6 block">← All patterns</Link>
                <span className="text-indigo-600 font-mono text-xs tracking-widest uppercase mb-4 block">Forecasting</span>
                <h1 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">Forecasts need more explanation than confidence.</h1>
                <p className="text-xl text-slate-500 font-light leading-relaxed">When every forecast call requires a narrative to justify the number, the problem isn't the forecast — it's the signal system underneath it.</p>
            </div>
        </section>
        <section className="py-16 bg-white">
            <div className="container max-w-3xl space-y-10">
                <div>
                    <h2 className="text-xl font-bold text-slate-900 mb-3">What's actually happening</h2>
                    <p className="text-slate-600 leading-relaxed">Forecasts are built on stage progression, which is built on stage definitions, which are often disconnected from actual buyer behaviour. When a deal can advance to "Commit" based on rep judgment rather than buyer evidence, the forecast inherits that uncertainty. The number changes because the underlying signal was never reliable.</p>
                </div>
                <div>
                    <h2 className="text-xl font-bold text-slate-900 mb-3">The misdiagnosis</h2>
                    <p className="text-slate-600 leading-relaxed">Better forecasting process, more frequent pipeline reviews, new CRM fields. These add overhead without fixing the underlying signal problem. You can review bad data more often — it's still bad data.</p>
                </div>
                <div>
                    <h2 className="text-xl font-bold text-slate-900 mb-3">The real constraint</h2>
                    <p className="text-slate-600 leading-relaxed">Stage definitions that allow subjective advancement, and a lack of a shared evidence standard across the team. When different reps have different mental models for what "late stage" means, the forecast is an aggregation of different opinions — not a system output.</p>
                </div>
                <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
                    <h2 className="text-lg font-bold text-slate-900 mb-3">What changes when this is fixed</h2>
                    <ul className="space-y-2 text-slate-600 text-sm">
                        {["Forecast accuracy improves because stages reflect buyer reality", "Board conversations shift from explaining variance to discussing strategy", "Pipeline reviews become faster because the evidence standard is shared", "Commit calls become defensible — not negotiable"].map((i, idx) => (
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
                        { q: "Why is B2B sales forecast accuracy so low?", a: "Forecast inaccuracy is almost always a signal problem, not a process problem. CRM stage definitions do not map to genuine buyer behaviour — each rep advances deals based on their own interpretation of stage criteria. When eight reps have eight different definitions of Commit, the forecast becomes an aggregation of incompatible inputs, not a prediction." },
                        { q: "How do you improve B2B sales forecast accuracy?", a: "Two changes: rebuild pipeline stage criteria to require buyer evidence at each stage, so stage position reflects deal health; and implement a structured forecast call cadence with standardised commit criteria so all reps use the same definitions. A triangulation model combining pipeline, activity, and historical close rate data then produces a number the board can trust." },
                        { q: "What is revenue governance in B2B sales?", a: "Revenue governance is the operating system for how a company produces, reviews, and commits to its forecast. It includes defined stage criteria, a structured forecast call cadence, standardised commit language, deal scoring models, and escalation processes for at-risk deals. Companies with strong revenue governance predict revenue within 5–10% accuracy." },
                        { q: "What does forecast volatility mean?", a: "Forecast volatility means the revenue forecast changes significantly week to week — deals move from commit to upside to push in rapid sequence. It signals that pipeline data is not a reliable indicator of buyer intent, typically because stage criteria are loose, commit definitions vary by rep, and deals are advancing on seller optimism rather than buyer evidence." }
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
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Recognise this pattern?</h2>
                <p className="text-slate-500 mb-8">The diagnostic identifies the specific signal gap — and what it will take to close it.</p>
                <Link to="/start-here" className="inline-flex items-center justify-center bg-slate-900 text-white px-8 py-4 rounded font-bold hover:bg-slate-700 transition-all">Start with a diagnostic</Link>
            </div>
        </section>
    </div>
);
export default ForecastVolatility;
