import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

const ForecastVolatility = () => (
    <div className="min-h-screen bg-white font-sans">
        <SEO title="Forecasts Are Unreliable | GTM-360" description="Forecast volatility is almost always a signal problem, not a process problem. When stage definitions don't map to buyer behaviour, forecasts become negotiations." />
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
