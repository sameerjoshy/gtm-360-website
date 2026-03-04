import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

const PipelineConversion = () => (
    <div className="min-h-screen bg-white font-sans">
        <SEO title="Win Rates Falling | GTM-360" description="Falling win rates are rarely a sales execution problem. They usually reflect ICP drift, messaging misalignment, or a buyer decision structure that isn't being addressed." />
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
