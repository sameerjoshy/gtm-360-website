import React from 'react';
import { Link } from 'react-router-dom';

const LeadMagnet = () => {
    return (
        <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800 relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="relative p-8 md:p-12 flex flex-col md:flex-row gap-10 items-center">
                <div className="flex-1">
                    <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-5">Free Resource · GTM-360</p>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                        Is your revenue system actually working?
                    </h3>
                    <p className="text-slate-400 leading-relaxed mb-6">
                        24 diagnostic checks across ICP targeting, pipeline quality, forecasting, GTM alignment, and AI readiness. Takes 10 minutes. No email required.
                    </p>
                    <ul className="space-y-2">
                        {[
                            "Are your pipeline stages measuring buyer commitment or seller activity?",
                            "Is your ICP still the same as when you hit your first $5M?",
                            "Does your forecast mean the same thing to every rep on the team?"
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                                <span className="text-indigo-400 font-bold flex-shrink-0 mt-0.5">→</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="w-full md:w-64 flex-shrink-0 flex flex-col items-center text-center">
                    <Link
                        to="/resources/gtm-diagnostic-checklist"
                        className="w-full inline-flex items-center justify-center bg-white text-slate-900 px-6 py-4 rounded-lg font-bold hover:bg-slate-100 transition-all mb-3"
                    >
                        Run the checklist →
                    </Link>
                    <p className="text-xs text-slate-500">No email. Works in your browser.</p>
                </div>
            </div>
        </div>
    );
};

export default LeadMagnet;
