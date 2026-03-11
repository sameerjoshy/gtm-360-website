import React from 'react';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';
import { Settings, CheckCircle, Clock, ArrowRight } from 'lucide-react';

const GTMOperatingModel = () => {
    return (
        <div className="service-detail-page pt-20">
            <SEO
                title="GTM Operating Model Realignment | GTM-360 Services"
                description="Align strategy, roles, and KPIs into a unified engine. Eliminate silos and increase execution velocity."
                canonical="https://gtm-360.com/services/gtm-operating-model"
            />

            {/* HERO */}
            <section className="bg-slate-900 text-white py-20">
                <div className="container max-w-4xl">
                    <div className="text-blue-400 font-mono text-sm uppercase tracking-widest mb-4">Service Detail</div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">GTM Operating Model Realignment</h1>
                    <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
                        Turn a collection of departments into a single revenue engine. We align your strategy, roles, and KPIs to eliminate friction and compound growth.
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
                                <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" /> <span>Series B+ companies scaling headcount but slowing velocity.</span></li>
                                <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" /> <span>Teams with "hero culture" where success depends on individual effort.</span></li>
                                <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" /> <span>Leaders who feel they are "pushing on a string".</span></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wide">Symptoms Solved</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start"><span className="text-red-500 mr-2">•</span> <span>Marketing hits MQL goals but Sales misses revenue.</span></li>
                                <li className="flex items-start"><span className="text-red-500 mr-2">•</span> <span>CS serves customers that Sales shouldn't have closed.</span></li>
                                <li className="flex items-start"><span className="text-red-500 mr-2">•</span> <span>Strategic pivots take quarters to reach the front line.</span></li>
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
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl flex-shrink-0">1</div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">The Friction Audit</h3>
                                <p className="text-gray-600">We map your current decision flow vs. your org chart. We identify exactly where information dies and where conflict originates.</p>
                            </div>
                        </div>

                        {/* PHASE 2 */}
                        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 flex gap-6">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl flex-shrink-0">2</div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">The Blueprint Redesign</h3>
                                <p className="text-gray-600">We deliver a new Operating Model: redefined meeting cadences, clear decision rights (RACI), and shared KPI definitions that force alignment.</p>
                            </div>
                        </div>

                        {/* PHASE 3 */}
                        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 flex gap-6">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl flex-shrink-0">3</div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Adoption Sprint</h3>
                                <p className="text-gray-600">We don't just send slides. We facilitate the first month of the new cadence to ensure the new habits stick.</p>
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
                            <p className="text-blue-800 font-medium text-lg">6–8 Weeks</p>
                            <p className="text-sm text-blue-600 mt-2">From Audit to Full Rollout</p>
                        </div>
                        <div className="p-8 bg-emerald-50 rounded-xl border border-emerald-100">
                            <div className="flex items-center mb-4">
                                <CheckCircle className="w-6 h-6 text-emerald-600 mr-2" />
                                <h3 className="text-xl font-bold text-emerald-900">Success Definition</h3>
                            </div>
                            <p className="text-emerald-800 font-medium text-lg">100% Decision Alignment</p>
                            <p className="text-sm text-emerald-600 mt-2">Leadership stops adjudicating conflicts; the system solves them.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-slate-900 py-20 text-center text-white">
                <div className="container max-w-2xl">
                    <h2 className="text-3xl font-bold mb-6">Stop pushing on a string.</h2>
                    <p className="text-lg text-indigo-100 mb-8">Let's discuss if your operating model is the bottleneck.</p>
                    <Link to="/contact" className="inline-flex items-center btn bg-white text-slate-900 px-8 py-4 rounded font-bold hover:bg-gray-100 transition-all">
                        Book a Model Audit <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default GTMOperatingModel;
