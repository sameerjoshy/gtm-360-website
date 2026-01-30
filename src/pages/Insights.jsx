import React from 'react';
import { FileText, TrendingDown, EyeOff, Layers } from 'lucide-react';
import SEO from '../components/SEO';

const Insights = () => {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-indigo-100 selection:text-indigo-900">
            <SEO
                title="Insights | GTM-360"
                description="Patterns we see repeatedly. These are not thought pieces. They’re patterns observed across real teams."
            />

            {/* HEADER */}
            <section className="pt-32 pb-20 bg-slate-50 border-b border-gray-100">
                <div className="container max-w-4xl text-center">
                    <span className="text-[var(--color-primary)] font-mono text-xs tracking-widest uppercase mb-4 block">Reference Library</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                        Patterns we see repeatedly
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
                        These are not thought pieces. <br />
                        They’re patterns observed across real teams.
                    </p>
                </div>
            </section>

            {/* PATTERN CARDS */}
            <section className="py-20 bg-white">
                <div className="container max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        {/* CARD 1 */}
                        <div className="bg-white border border-slate-200 p-8 rounded-xl hover:shadow-lg transition-all cursor-default">
                            <TrendingDown className="w-8 h-8 text-red-500 mb-6" />
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">When growth stalls quietly</h3>
                            <p className="text-slate-600 mb-4 leading-relaxed">
                                Most stalls don't happen with a bang. They happen when efficiency degrades 1% a week for a year.
                            </p>
                            <span className="text-sm font-bold text-slate-400 uppercase tracking-wide">Pattern #01</span>
                        </div>

                        {/* CARD 2 */}
                        <div className="bg-white border border-slate-200 p-8 rounded-xl hover:shadow-lg transition-all cursor-default">
                            <EyeOff className="w-8 h-8 text-slate-500 mb-6" />
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Why forecasts decay over time</h3>
                            <p className="text-slate-600 mb-4 leading-relaxed">
                                Without a shared definition of 'truth', forecasts become a negotiation between Sales and Finance, rather than a prediction.
                            </p>
                            <span className="text-sm font-bold text-slate-400 uppercase tracking-wide">Pattern #02</span>
                        </div>

                        {/* CARD 3 */}
                        <div className="bg-white border border-slate-200 p-8 rounded-xl hover:shadow-lg transition-all cursor-default">
                            <Layers className="w-8 h-8 text-indigo-500 mb-6" />
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">The hidden cost of over-optimizing funnels</h3>
                            <p className="text-slate-600 mb-4 leading-relaxed">
                                Optimizing for 'Top of Funnel' often breaks 'Middle of Funnel' context. Volume goes up, but conversion quality silently drops.
                            </p>
                            <span className="text-sm font-bold text-slate-400 uppercase tracking-wide">Pattern #03</span>
                        </div>

                        {/* CARD 4 */}
                        <div className="bg-white border border-slate-200 p-8 rounded-xl hover:shadow-lg transition-all cursor-default">
                            <FileText className="w-8 h-8 text-emerald-500 mb-6" />
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Why RevOps gets stuck in the middle</h3>
                            <p className="text-slate-600 mb-4 leading-relaxed">
                                When RevOps is treated as 'Ticket Takers' instead of 'System Architects', they lose the ability to impact strategy.
                            </p>
                            <span className="text-sm font-bold text-slate-400 uppercase tracking-wide">Pattern #04</span>
                        </div>

                    </div>

                    <div className="text-center mt-16">
                        <p className="text-slate-500 italic">Each insight ties back to the planning cycle.</p>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Insights;
