import React from 'react';
import { FileText, TrendingDown, EyeOff, Layers } from 'lucide-react';
import SEO from '../components/SEO';

const Insights = () => {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-indigo-100 selection:text-indigo-900">
            <SEO
                title="Insights | GTM-360"
                description="Short, opinionated writing from inside real GTM systems. No content calendar. Only things worth saying."
            />

            {/* v1.0 HEADER */}
            <section className="pt-32 pb-20 bg-slate-50 border-b border-gray-100">
                <div className="container max-w-4xl text-center">
                    <span className="text-[var(--color-primary)] font-mono text-xs tracking-widest uppercase mb-4 block">Field Notes</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                        Patterns we see repeatedly
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
                        Short, opinionated writing from inside real GTM systems. <br />
                        No content calendar. Only things worth saying.
                    </p>
                </div>
            </section>

            {/* PATTERN CARDS */}
            <section className="py-20 bg-white">
                <div className="container max-w-6xl">

                    {/* FLAGSHIP INSIGHT (PINNED) */}
                    <div className="mb-16">
                        <div className="bg-slate-900 text-white p-10 rounded-xl hover:shadow-xl transition-all cursor-pointer flex flex-col md:flex-row gap-8 items-start">
                            <div className="flex-1">
                                <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-4 block">Flagship Insight</span>
                                <h3 className="text-3xl font-bold text-white mb-4">Why growth stalls after early traction</h3>
                                <p className="text-slate-300 mb-6 leading-relaxed text-lg">
                                    A practical breakdown of why optimization stops working — and what has to change instead when you hit the complexity wall.
                                </p>
                                <span className="text-white font-bold underline underline-offset-4 decoration-indigo-500 hover:decoration-white transition-all">Read →</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        {/* CARD 1 */}
                        <div className="bg-white border border-slate-200 p-8 rounded-xl hover:shadow-lg transition-all cursor-pointer group">
                            <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-[var(--color-primary)] transition-colors">When growth stalls quietly</h3>
                            <p className="text-slate-600 mb-4 leading-relaxed text-sm">
                                Most stalls don't happen with a bang. They happen when efficiency degrades 1% a week for a year.
                            </p>
                        </div>

                        {/* CARD 2 */}
                        <div className="bg-white border border-slate-200 p-8 rounded-xl hover:shadow-lg transition-all cursor-pointer group">
                            <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-[var(--color-primary)] transition-colors">Why forecasts decay over time</h3>
                            <p className="text-slate-600 mb-4 leading-relaxed text-sm">
                                Without a shared definition of 'truth', forecasts become a negotiation between Sales and Finance.
                            </p>
                        </div>

                        {/* CARD 3 */}
                        <div className="bg-white border border-slate-200 p-8 rounded-xl hover:shadow-lg transition-all cursor-pointer group">
                            <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-[var(--color-primary)] transition-colors">The hidden cost of over-optimizing</h3>
                            <p className="text-slate-600 mb-4 leading-relaxed text-sm">
                                Optimizing for 'Top of Funnel' often breaks conversion quality silently.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Insights;
