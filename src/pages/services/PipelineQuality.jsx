import React from 'react';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';
import { Filter, CheckCircle, Clock, ArrowRight } from 'lucide-react';

const PipelineQuality = () => {
    return (
        <div className="service-detail-page pt-20">
            <SEO
                title="Pipeline & Deal Quality Repair | GTM-360 Services"
                description="Fix bloated pipelines and late-stage deal loss. Install strict entry/exit criteria and scientific stage definitions."
                canonical="https://gtm-360.com/services/pipeline-quality"
            />

            {/* HERO */}
            <section className="bg-slate-900 text-white py-20">
                <div className="container max-w-4xl">
                    <div className="text-emerald-400 font-mono text-sm uppercase tracking-widest mb-4">Service Detail</div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Pipeline & Deal Quality Repair</h1>
                    <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
                        Stop celebrating "busy work" and start tracking true signal. We fix the broken handoffs and definitions that kill deals late in the funnel.
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
                                <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" /> <span>CROs seeing pipeline coverage >4x but missing targets.</span></li>
                                <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" /> <span>Teams with high "Close Lost - No Decision" rates.</span></li>
                                <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" /> <span>Orgs where "Qualified" means "They took a meeting".</span></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wide">Symptoms Solved</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start"><span className="text-red-500 mr-2">•</span> <span>Massive pipeline flushes (30%+) at end of quarter.</span></li>
                                <li className="flex items-start"><span className="text-red-500 mr-2">•</span> <span>Reps chasing deals that were never real.</span></li>
                                <li className="flex items-start"><span className="text-red-500 mr-2">•</span> <span>Marketing celebrating MQLs that Sales ignores.</span></li>
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
                            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-bold text-xl flex-shrink-0">1</div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Stage Definition Re-write</h3>
                                <p className="text-gray-600">We replace activity-based stages ("Demo Complete") with verification-based stages ("Champion Verified"). Content moves from "Art" to "Science".</p>
                            </div>
                        </div>

                        {/* PHASE 2 */}
                        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 flex gap-6">
                            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-bold text-xl flex-shrink-0">2</div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">The Purge</h3>
                                <p className="text-gray-600">We run a joint workshop to audit current pipeline against the new criteria. We kill the zombies (usually 30-40% of pipe) to reveal the truth.</p>
                            </div>
                        </div>

                        {/* PHASE 3 */}
                        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 flex gap-6">
                            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-bold text-xl flex-shrink-0">3</div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Exit Criteria Installation</h3>
                                <p className="text-gray-600">We configure your CRM (Salesforce/HubSpot) to enforce the new exit criteria, preventing reps from advancing bad deals.</p>
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
                            <p className="text-blue-800 font-medium text-lg">4 Weeks</p>
                            <p className="text-sm text-blue-600 mt-2">Intense, high-impact sprint.</p>
                        </div>
                        <div className="p-8 bg-emerald-50 rounded-xl border border-emerald-100">
                            <div className="flex items-center mb-4">
                                <CheckCircle className="w-6 h-6 text-emerald-600 mr-2" />
                                <h3 className="text-xl font-bold text-emerald-900">Success Definition</h3>
                            </div>
                            <p className="text-emerald-800 font-medium text-lg">Predictable Conversion</p>
                            <p className="text-sm text-emerald-600 mt-2">Pipeline volume may drop, but win rates and velocity increase significantly.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-[var(--color-primary)] py-20 text-center text-white">
                <div className="container max-w-2xl">
                    <h2 className="text-3xl font-bold mb-6">Stop chasing ghost deals.</h2>
                    <p className="text-lg text-indigo-100 mb-8">Let's clean your pipeline and install a system for truth.</p>
                    <Link to="/contact" className="inline-flex items-center btn bg-white text-[var(--color-primary)] px-8 py-4 rounded font-bold hover:bg-gray-100 transition-all">
                        Book a Pipeline Audit <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default PipelineQuality;
