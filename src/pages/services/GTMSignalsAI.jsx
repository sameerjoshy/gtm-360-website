import React from 'react';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';
import { Cpu, CheckCircle, Clock, ArrowRight } from 'lucide-react';

const GTMSignalsAI = () => {
    return (
        <div className="service-detail-page pt-20">
            <SEO
                title="GTM Signals & AI Alignment | GTM-360 Services"
                description="Audit your stack to ensure every tool amplifies a specific decision. Reduce noise, clean data, and align AI to strategy."
                canonical="https://gtm-360.com/services/gtm-signals-and-ai"
            />

            {/* HERO */}
            <section className="bg-slate-900 text-white py-20">
                <div className="container max-w-4xl">
                    <div className="text-indigo-400 font-mono text-sm uppercase tracking-widest mb-4">Service Detail</div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">GTM Signals, Tooling & AI</h1>
                    <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
                        Stop buying tools that just create more noise. We audit your stack, clean your data signals, and deploy AI that actually moves the needle.
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
                                <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" /> <span>Ops leaders drowning in tool fatigue (15+ tools).</span></li>
                                <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" /> <span>Teams with "Dirty Data" that nobody trusts.</span></li>
                                <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" /> <span>Companies trying to "figure out AI" without a strategy.</span></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wide">Symptoms Solved</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start"><span className="text-red-500 mr-2">•</span> <span>Tools bought but not adopted (Shelflove).</span></li>
                                <li className="flex items-start"><span className="text-red-500 mr-2">•</span> <span>Signals (Intent, Usage) exist but don't reach reps.</span></li>
                                <li className="flex items-start"><span className="text-red-500 mr-2">•</span> <span>AI experiments that are cool demos but drive no revenue.</span></li>
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
                            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold text-xl flex-shrink-0">1</div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">The Stack Rationalization</h3>
                                <p className="text-gray-600">We map your capability requirements to your current spend. We identify overlap, waste, and gaps. We usually find 20% savings day one.</p>
                            </div>
                        </div>

                        {/* PHASE 2 */}
                        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 flex gap-6">
                            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold text-xl flex-shrink-0">2</div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Signal Harmonization</h3>
                                <p className="text-gray-600">We unify your data sources. We define a "Golden Record" for Account Health by combining Product Usage, Intent Data, and CRM history.</p>
                            </div>
                        </div>

                        {/* PHASE 3 */}
                        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 flex gap-6">
                            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold text-xl flex-shrink-0">3</div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Agent Workflow Deployment</h3>
                                <p className="text-gray-600">We don't just "enable AI". We deploy specific autonomous workflows (like the ones in our Revenue OS) to handle repetitive tasks (Research, Qualification).</p>
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
                            <p className="text-blue-800 font-medium text-lg">3 Weeks</p>
                            <p className="text-sm text-blue-600 mt-2">Audit & Roadmap Phase.</p>
                        </div>
                        <div className="p-8 bg-emerald-50 rounded-xl border border-emerald-100">
                            <div className="flex items-center mb-4">
                                <CheckCircle className="w-6 h-6 text-emerald-600 mr-2" />
                                <h3 className="text-xl font-bold text-emerald-900">Success Definition</h3>
                            </div>
                            <p className="text-emerald-800 font-medium text-lg">High-Fidelity Action</p>
                            <p className="text-sm text-emerald-600 mt-2">Reps stop toggling tabs and start receiving verified plays.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-[var(--color-primary)] py-20 text-center text-white">
                <div className="container max-w-2xl">
                    <h2 className="text-3xl font-bold mb-6">Clean the noise.</h2>
                    <p className="text-lg text-indigo-100 mb-8">Turn your tech stack from a burden into a weapon.</p>
                    <Link to="/contact" className="inline-flex items-center btn bg-white text-[var(--color-primary)] px-8 py-4 rounded font-bold hover:bg-gray-100 transition-all">
                        Audit Your Signals <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default GTMSignalsAI;
