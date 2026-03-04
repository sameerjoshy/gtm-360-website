import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

const StalledGrowth = () => (
    <div className="min-h-screen bg-white font-sans">
        <SEO title="Pipeline Growing But Revenue Isn't | GTM-360" description="When pipeline volume increases but revenue doesn't follow, the constraint is almost never volume. It's qualification and stage definition." />
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
