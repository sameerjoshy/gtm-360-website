```javascript
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Filter, GitMerge } from 'lucide-react';
import SEO from '../components/SEO';
import WorkbenchLoopVisual from '../components/visuals/WorkbenchLoopVisual';

const AgentWorkbench = () => {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-purple-100 selection:text-purple-900">
            <SEO
                title="Agent Workbench | GTM-360"
                description="A practical system for turning GTM signals into decisions. Not a CRM replacement. The layer that makes your CRM usable again."
            />

            {/* HERO */}
            <section className="pt-32 pb-24 bg-slate-900 text-white border-b border-slate-800">
                <div className="container max-w-4xl text-center">
                    <span className="text-purple-400 font-mono text-xs tracking-widest uppercase mb-4 block">Product</span>
                    <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-8 text-white leading-[1.1]">
                        The Agent Workbench
                    </h1>
                    <p className="text-2xl text-slate-300 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
                        A practical system for turning GTM signals into decisions.
                    </p>
                    <div className="flex justify-center">
                        <a href="https://app.gtm-360.com" className="btn bg-purple-600 text-white px-8 py-4 rounded shadow-lg shadow-purple-900/50 hover:bg-purple-500 transition-all font-bold flex items-center">
                            Request Access <ArrowRight className="ml-2 w-5 h-5" />
                        </a>
                    </div>
                </div>
            </section>

            {/* WHAT IT DOES */}
            <section className="py-24 bg-white">
                <div className="container max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">What it actually does</h2>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                The Workbench is built around how growth work actually happens.
                            </p>
                            <p className="text-lg text-slate-600 mb-6">
                                Accounts don’t move because of one signal. Pipelines don’t break in obvious ways. Teams lose clarity gradually, then suddenly.
                            </p>
                            <div className="bg-purple-50 p-6 rounded-lg border border-purple-100 mt-8">
                                <p className="font-bold text-purple-900 mb-2">This isn’t a CRM replacement.</p>
                                <p className="text-slate-700">It’s the layer that makes your CRM usable again.</p>
                            </div>
                        </div>

                        {/* THE LOOP VISUAL */}
                        <div className="w-full">
                            <WorkbenchLoopVisual />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-slate-50 text-center">
                <div className="container max-w-2xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8">Ready to clear the noise?</h2>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <a href="https://app.gtm-360.com" className="btn bg-purple-600 text-white px-8 py-4 rounded hover:bg-purple-500 transition-all font-bold">
                            Request Access
                        </a>
                        <Link to="/how-we-work" className="btn bg-white text-purple-700 border border-purple-200 px-8 py-4 rounded hover:bg-purple-50 transition-all font-bold">
                            See How It Fits
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AgentWorkbench;
