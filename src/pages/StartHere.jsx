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

            {/* v1.0 HEADER */}
            <section className="pt-32 pb-20 bg-white border-b border-gray-200">
                <div className="container max-w-3xl text-center">
                    <span className="text-[var(--color-primary)] font-mono text-xs tracking-widest uppercase mb-4 block">Inflection Point</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                        If growth feels harder than it should, <br /> you’re probably at an inflection point.
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed font-light mb-8">
                        Most teams try to optimize their way through this phase. <br />
                        That can take you from 10 to 11. It rarely takes you from 10 to 50.
                    </p>
                    <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                        This page helps you slow down just enough to see what’s really happening.
                    </p>
                </div>
            </section>

            {/* v1.0 5-QUESTION DIAGNOSTIC */}
            <section className="py-20 bg-slate-50">
                <div className="container max-w-3xl">
                    <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg border border-slate-200">
                        <div className="flex items-center gap-4 mb-8 border-b border-slate-100 pb-6">
                            <div className="bg-indigo-100 p-2 rounded-full text-indigo-700">
                                <ClipboardCheck className="w-5 h-5" />
                            </div>
                            <h2 className="text-xl font-bold text-slate-900">Answer these honestly.</h2>
                            <span className="ml-auto text-xs text-slate-400 bg-slate-100 px-2 py-1 rounded">No one else sees this</span>
                        </div>

                        <div className="space-y-8">
                            <div className="group">
                                <h3 className="text-lg font-medium text-slate-800 mb-2 group-hover:text-[var(--color-primary)] transition-colors">1. Where does revenue feel least predictable right now?</h3>
                                <textarea className="w-full bg-slate-50 border border-slate-200 rounded p-3 text-sm focus:outline-none focus:border-indigo-300 transition-colors h-20" placeholder="e.g. Forecasting new logo variance..."></textarea>
                            </div>
                            <div className="group">
                                <h3 className="text-lg font-medium text-slate-800 mb-2 group-hover:text-[var(--color-primary)] transition-colors">2. What assumptions are you still operating on from an earlier stage?</h3>
                                <textarea className="w-full bg-slate-50 border border-slate-200 rounded p-3 text-sm focus:outline-none focus:border-indigo-300 transition-colors h-20" placeholder="e.g. That founder-led sales scales..."></textarea>
                            </div>
                            <div className="group">
                                <h3 className="text-lg font-medium text-slate-800 mb-2 group-hover:text-[var(--color-primary)] transition-colors">3. Where are teams busy, but outcomes unclear?</h3>
                                <textarea className="w-full bg-slate-50 border border-slate-200 rounded p-3 text-sm focus:outline-none focus:border-indigo-300 transition-colors h-20" placeholder="e.g. Marketing activity vs pipeline creation..."></textarea>
                            </div>
                            <div className="group">
                                <h3 className="text-lg font-medium text-slate-800 mb-2 group-hover:text-[var(--color-primary)] transition-colors">4. What decisions keep getting deferred because data isn’t trusted?</h3>
                                <textarea className="w-full bg-slate-50 border border-slate-200 rounded p-3 text-sm focus:outline-none focus:border-indigo-300 transition-colors h-20" placeholder="e.g. Hiring new reps..."></textarea>
                            </div>
                            <div className="group">
                                <h3 className="text-lg font-medium text-slate-800 mb-2 group-hover:text-[var(--color-primary)] transition-colors">5. If nothing changed structurally, where would growth likely stall next?</h3>
                                <textarea className="w-full bg-slate-50 border border-slate-200 rounded p-3 text-sm focus:outline-none focus:border-indigo-300 transition-colors h-20" placeholder="e.g. Retention or upsell..."></textarea>
                            </div>
                        </div>

                        <div className="mt-12 text-center">
                            <button className="btn bg-[var(--color-primary)] text-white px-8 py-3 rounded shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all w-full md:w-auto font-bold">
                                Get a structured view (Email Me)
                            </button>
                            <p className="text-xs text-slate-400 mt-4 italic">
                                If these questions feel uncomfortable, that’s normal. <br />
                                They tend to show up right before the next inflection point.
                            </p>
                        </div>
                    </div>

                    {/* v1.0 NEXT STEPS */}
                    <div className="mt-20">
                        <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">What happens next</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/contact" className="bg-white p-6 rounded-lg text-center border border-slate-200 hover:border-indigo-300 transition-all shadow-sm">
                                <h4 className="font-bold text-slate-900 mb-2">Book a conversation</h4>
                                <p className="text-xs text-slate-500">Discuss your answers.</p>
                            </Link>
                            <Link to="/how-we-work" className="bg-white p-6 rounded-lg text-center border border-slate-200 hover:border-indigo-300 transition-all shadow-sm">
                                <h4 className="font-bold text-slate-900 mb-2">Explore how we work</h4>
                                <p className="text-xs text-slate-500">See our engagement models.</p>
                            </Link>
                            <Link href="https://agents.gtm-360.com" target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-lg text-center border border-slate-200 hover:border-indigo-300 transition-all shadow-sm">
                                <h4 className="font-bold text-slate-900 mb-2">See the Agents</h4>
                                <p className="text-xs text-slate-500">How the system supports this.</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default StartHere;
