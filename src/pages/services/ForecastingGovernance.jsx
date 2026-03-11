import React from 'react';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';
import { TrendingUp, CheckCircle, Clock, ArrowRight } from 'lucide-react';

const ForecastingGovernance = () => {
    return (
        <div className="service-detail-page pt-20">
            <SEO
                title="Forecasting & Governance | GTM-360 Services"
                description="Replace 'gut feel' with engineering-grade predictability. Build data-driven triangulation models for accurate revenue forecasting."
                canonical="https://gtm-360.com/services/forecasting-governance"
            />

            {/* HERO */}
            <section className="bg-slate-900 text-white py-20">
                <div className="container max-w-4xl">
                    <div className="text-purple-400 font-mono text-sm uppercase tracking-widest mb-4">Service Detail</div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Forecasting & Revenue Governance</h1>
                    <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
                        Turn the weekly forecast call from an interrogation into a strategic session. We replace "gut feel" with engineering-grade triangulation models.
                    </p>
                </div>
            </section>

            {/* WHO THIS IS FOR */}
            <section className="py-16 border-b border-gray-100">
                <div className="container max-w-4xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wide">Who It's For</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" /> <span>CROs/CFOs who can't trust the commit number.</span></li>
                                <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" /> <span>Boards demanding variance {'<'}10%.</span></li>
                                <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" /> <span>RevOps teams stuck running spreadsheets all weekend.</span></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wide">Symptoms Solved</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start"><span className="text-red-500 mr-2">•</span> <span>"Sandbagging" or "Site-saving" heroics at quarter/end.</span></li>
                                <li className="flex items-start"><span className="text-red-500 mr-2">•</span> <span>Massive disconnect between Top-down and Bottom-up view.</span></li>
                                <li className="flex items-start"><span className="text-red-500 mr-2">•</span> <span>Surprise churn that wasn't on the risk radar.</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* DELIVERABLES & PROCESS */}
            <section className="py-16 bg-gray-50">
                <div className="container max-w-4xl">
                    <h2 className="text-3xl font-bold mb-12 text-center">How We Run It</h2>

                    <div className="space-y-8">
                        {/* PHASE 1 */}
                        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 flex gap-6">
                            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold text-xl flex-shrink-0">1</div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Triangulation Model Build</h3>
                                <p className="text-gray-600">We don't rely on one number. We build a dashboard that triangulates: 1) Rep Commit, 2) Weighted Pipe, 3) AI/Run-rate Projection. The truth is in the gap.</p>
                            </div>
                        </div>

                        {/* PHASE 2 */}
                        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 flex gap-6">
                            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold text-xl flex-shrink-0">2</div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">The "Deal Desk" Ritual</h3>
                                <p className="text-gray-600">We redesign your QBRs and Weekly Forecast calls. We institute a standard "Deal Health" scorecard that removes emotion from the conversation.</p>
                            </div>
                        </div>

                        {/* PHASE 3 */}
                        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 flex gap-6">
                            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold text-xl flex-shrink-0">3</div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Manager Enablement</h3>
                                <p className="text-gray-600">We train your frontline managers on how to inspect deals properly—teaching them to coach the "How" and "Why", not just ask "When will it close?".</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* TIMELINE & SUCCESS */}
            <section className="py-16">
                <div className="container max-w-4xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-8 bg-blue-50 rounded-xl border border-blue-100">
                            <div className="flex items-center mb-4">
                                <Clock className="w-6 h-6 text-blue-600 mr-2" />
                                <h3 className="text-xl font-bold text-blue-900">Typical Timeline</h3>
                            </div>
                            <p className="text-blue-800 font-medium text-lg">5 Weeks</p>
                            <p className="text-sm text-blue-600 mt-2">To first reliable forecast cycle.</p>
                        </div>
                        <div className="p-8 bg-emerald-50 rounded-xl border border-emerald-100">
                            <div className="flex items-center mb-4">
                                <CheckCircle className="w-6 h-6 text-emerald-600 mr-2" />
                                <h3 className="text-xl font-bold text-emerald-900">Success Definition</h3>
                            </div>
                            <p className="text-emerald-800 font-medium text-lg">Forecast Variance {'<'} 10%</p>
                            <p className="text-sm text-emerald-600 mt-2">Consistent accuracy that rebuilds board trust.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-slate-900 py-20 text-center text-white">
                <div className="container max-w-2xl">
                    <h2 className="text-3xl font-bold mb-6">No more surprises.</h2>
                    <p className="text-lg text-indigo-100 mb-8">Build a forecast system you can bet the company on.</p>
                    <Link to="/contact" className="inline-flex items-center btn bg-white text-slate-900 px-8 py-4 rounded font-bold hover:bg-gray-100 transition-all">
                        Fix Your Forecast <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default ForecastingGovernance;
