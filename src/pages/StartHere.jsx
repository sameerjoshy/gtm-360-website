import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { ClipboardCheck } from 'lucide-react';

const StartHere = () => {
    return (
        <div className="min-h-screen bg-slate-50 font-sans selection:bg-indigo-100 selection:text-indigo-900">
            <SEO
                title="Start Here | GTM-360"
                description="If growth feels harder than it should, you’re probably not wrong. Orient yourself before you buy."
            />

            {/* HEADER */}
            <section className="pt-32 pb-20 bg-white border-b border-gray-200">
                <div className="container max-w-3xl text-center">
                    <span className="text-[var(--color-primary)] font-mono text-xs tracking-widest uppercase mb-4 block">Manifesto</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                        If growth feels harder than it should, <br /> you’re probably not wrong.
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed font-light mb-8">
                        Most founders and CROs reach a point where effort keeps going up, but clarity doesn’t. <br /><br />
                        This page exists to help you orient — not to sell you something.
                    </p>
                </div>
            </section>

            {/* RECOGNITION */}
            <section className="py-20 bg-slate-50">
                <div className="container max-w-3xl">
                    <h2 className="text-2xl font-bold text-slate-900 mb-8">You might be here because:</h2>
                    <ul className="space-y-6 bg-white p-8 rounded-xl shadow-sm border border-slate-200">
                        <li className="flex items-start text-lg text-slate-700">
                            <span className="text-red-400 mr-4 mt-1 font-bold">×</span>
                            Pipeline reviews feel noisy instead of useful.
                        </li>
                        <li className="flex items-start text-lg text-slate-700">
                            <span className="text-red-400 mr-4 mt-1 font-bold">×</span>
                            Forecasts require more explanation than confidence.
                        </li>
                        <li className="flex items-start text-lg text-slate-700">
                            <span className="text-red-400 mr-4 mt-1 font-bold">×</span>
                            Sales, marketing, and CS are “aligned” — but outcomes still lag.
                        </li>
                        <li className="flex items-start text-lg text-slate-700">
                            <span className="text-red-400 mr-4 mt-1 font-bold">×</span>
                            Everyone is busy, but fewer decisions feel decisive.
                        </li>
                    </ul>
                    <div className="mt-8 text-center">
                        <p className="text-lg text-slate-600 italic">
                            None of this means your team is weak. <br />
                            It usually means the operating model hasn’t caught up to scale.
                        </p>
                    </div>
                </div>
            </section>

            {/* 5 QUESTION CHECK */}
            <section className="py-20 bg-white">
                <div className="container max-w-3xl">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="bg-indigo-100 p-3 rounded-full text-indigo-700">
                            <ClipboardCheck className="w-6 h-6" />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900">Ask yourself:</h2>
                    </div>

                    <div className="space-y-8 pl-4 border-l-2 border-indigo-100">
                        <div>
                            <h3 className="text-lg font-bold text-slate-800 mb-2">1. Do we agree on which growth decisions actually matter right now?</h3>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-800 mb-2">2. Are we reacting to signals — or just reporting them?</h3>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-800 mb-2">3. Can we explain why deals move or stall, not just that they did?</h3>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-800 mb-2">4. Is RevOps shaping decisions — or just cleaning up after them?</h3>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-800 mb-2">5. If we doubled volume, would clarity improve or collapse?</h3>
                        </div>
                    </div>

                    <div className="mt-12 p-6 bg-slate-50 border-l-4 border-indigo-500 rounded-r">
                        <p className="text-slate-700">
                            If these questions feel uncomfortable, that’s normal. <br />
                            They usually show up right before the next inflection point.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-center gap-6 mt-16">
                        <Link to="/how-we-work" className="btn bg-[var(--color-primary)] text-white px-8 py-4 shadow-lg hover:bg-indigo-700 font-bold">
                            See How We Work
                        </Link>
                        <Link to="/workbench" className="btn bg-white text-[var(--color-primary)] px-8 py-4 shadow-sm border border-indigo-100 hover:bg-indigo-50 font-bold">
                            Explore the Workbench
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default StartHere;
