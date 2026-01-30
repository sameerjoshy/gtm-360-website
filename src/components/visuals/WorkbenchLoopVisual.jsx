import React from 'react';
import { ArrowRight } from 'lucide-react';

const WorkbenchLoopVisual = () => {
    return (
        <div className="w-full bg-slate-50 rounded-xl border border-slate-200 p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center relative">

                {/* CONNECTING LINE (Desktop) */}
                <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -z-10 transform -translate-y-1/2"></div>

                {/* STEP 1: SIGNALS */}
                <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm text-center relative z-10 h-40 flex flex-col justify-center">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 block">Input</span>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">Signals</h4>
                    <p className="text-sm text-slate-500 leading-tight">Fragmented noise from CRM, calls, and email.</p>
                </div>

                {/* ARROW */}
                <div className="hidden md:flex justify-center text-slate-400">
                    <ArrowRight size={24} />
                </div>

                {/* STEP 2: EVIDENCE */}
                <div className="bg-slate-900 p-6 rounded-lg border border-slate-800 shadow-md text-center relative z-10 h-48 flex flex-col justify-center transform md:-translate-y-4">
                    <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-3 block">GTM-360 Processing</span>
                    <h4 className="text-lg font-bold text-white mb-2">Evidence</h4>
                    <p className="text-sm text-slate-400 leading-tight">Connecting context to accounts and opportunities.</p>
                </div>

                {/* ARROW */}
                <div className="hidden md:flex justify-center text-slate-400">
                    <ArrowRight size={24} />
                </div>

                {/* STEP 3: DECISIONS */}
                <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm text-center relative z-10 h-40 flex flex-col justify-center">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 block">Action</span>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">Decisions</h4>
                    <p className="text-sm text-slate-500 leading-tight">What to do next, backed by proof.</p>
                </div>
            </div>

            {/* OUTCOMES (Bottom Bar) */}
            <div className="mt-8 pt-8 border-t border-slate-200 text-center">
                <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider border border-emerald-100 mb-2">
                    Output
                </span>
                <h4 className="text-xl font-bold text-slate-900">Predictable Outcomes</h4>
            </div>
        </div>
    );
};

export default WorkbenchLoopVisual;
