import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Cpu, Layers, Layout } from 'lucide-react';
import SEO from '../components/SEO';

const AgentWorkbench = () => {
    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            <SEO
                title="Agent Workbench | GTM-360"
                description="Execution support for complex GTM systems. Reduce cognitive load and maintain shared context across your revenue team."
            />

            {/* HERO */}
            <section className="pt-32 pb-20 bg-white border-b border-gray-100">
                <div className="container max-w-5xl text-center">
                    <span className="text-[var(--color-primary)] font-mono text-xs tracking-widest uppercase mb-4 block">Product</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                        Execution support for <br /> <span className="text-[var(--color-primary)]">complex GTM systems.</span>
                    </h1>
                    <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                        As teams scale, coordination becomes harder. <br />
                        The Workbench exists to support signal visibility, repeatable execution, and lower cognitive load.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a href="https://app.gtm-360.com" className="btn bg-[var(--color-primary)] text-white hover:bg-indigo-700 px-8 py-4 shadow-lg flex items-center justify-center">
                            Enter the Workbench <ArrowRight className="ml-2 w-4 h-4" />
                        </a>
                        <Link to="/how-we-work" className="px-6 py-4 text-slate-600 font-semibold hover:text-[var(--color-primary)] flex items-center justify-center">
                            See how it’s used in practice
                        </Link>
                    </div>
                </div>
            </section>

            {/* PRODUCT VALUE */}
            <section className="py-24">
                <div className="container max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-semibold mb-6">Designed for orientation.</h2>
                            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                Most tools try to do the work for you. The Workbench helps you think through the work.
                                It creates a shared space for:
                            </p>
                            <ul className="space-y-6">
                                <li className="flex items-start">
                                    <div className="w-10 h-10 bg-indigo-50 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                        <Layers className="w-5 h-5 text-indigo-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900">Signal Visibility</h3>
                                        <p className="text-slate-600 text-sm mt-1">Seeing what's actually happening, not just what the plan says.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                        <Cpu className="w-5 h-5 text-emerald-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900">Repeatable Execution</h3>
                                        <p className="text-slate-600 text-sm mt-1">Turning "heroics" into standard operating procedures.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-10 h-10 bg-purple-50 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                        <Layout className="w-5 h-5 text-purple-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900">Shared Context</h3>
                                        <p className="text-slate-600 text-sm mt-1">Aligning leadership around the same reality.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* ABSTRACT UI VISUAL */}
                        <div className="relative">
                            <div className="absolute -inset-4 bg-indigo-50 rounded-xl transform rotate-2"></div>
                            <div className="relative bg-white rounded-xl shadow-2xl overflow-hidden border border-slate-200">
                                <div className="h-10 bg-slate-50 border-b border-slate-100 flex items-center px-4 gap-2">
                                    <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                                    <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                                </div>
                                <div className="p-8 space-y-6">
                                    <div className="flex gap-4">
                                        <div className="w-1/3 h-32 bg-slate-50 rounded animate-pulse"></div>
                                        <div className="w-2/3 h-32 bg-slate-50 rounded"></div>
                                    </div>
                                    <div className="h-4 bg-slate-50 rounded w-3/4"></div>
                                    <div className="h-4 bg-slate-50 rounded w-1/2"></div>
                                    <div className="h-4 bg-slate-50 rounded w-2/3"></div>
                                </div>
                                {/* LABEL */}
                                <div className="absolute bottom-6 right-6 px-4 py-2 bg-slate-900 text-white text-xs font-mono rounded shadow-lg opacity-90">
                                    STATUS: SYSTEM_ACTIVE
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PHILOSOPHY */}
            <section className="py-20 bg-[var(--color-secondary)] text-center">
                <div className="container max-w-3xl">
                    <p className="text-2xl font-serif italic text-slate-800 mb-6">
                        "The product doesn’t replace judgment. It reinforces it."
                    </p>
                    <p className="text-slate-600">
                        This is infrastructure, not magic.
                    </p>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 text-center">
                <div className="container">
                    <h2 className="text-3xl font-bold mb-8">Ready to orient your team?</h2>
                    <a href="https://app.gtm-360.com" className="btn bg-[var(--color-primary)] text-white hover:bg-indigo-700 px-8 py-4 shadow-lg inline-flex items-center">
                        Enter the Workbench <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                </div>
            </section>

        </div>
    );
};

export default AgentWorkbench;
