import React from 'react';

const PlanningCycleMinimal = () => {
    return (
        <div className="relative w-full max-w-lg mx-auto aspect-square flex items-center justify-center p-8">
            {/* MAIN RING */}
            <div className="absolute inset-4 rounded-full border-[3px] border-slate-900 opacity-10"></div>

            {/* INNER RING (Dashed) */}
            <div className="absolute inset-16 rounded-full border-2 border-dashed border-slate-300"></div>

            {/* CENTER LABEL */}
            <div className="absolute flex flex-col items-center justify-center">
                <span className="font-mono text-xs tracking-widest uppercase text-slate-400 mb-1">Methodology</span>
                <span className="font-bold text-2xl text-slate-900 tracking-tight">CLARITY CYCLE</span>
            </div>

            {/* NODE 1: TOP (Where are we?) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 flex flex-col items-center text-center w-48">
                <div className="w-4 h-4 bg-slate-900 rounded-full border-4 border-white shadow-sm mb-3"></div>
                <h4 className="font-bold text-slate-900 text-sm">Where are we?</h4>
                <p className="text-xs text-slate-500 mt-1 font-medium">GROUND TRUTH</p>
            </div>

            {/* NODE 2: RIGHT-TOP (How did we get here?) */}
            <div className="absolute top-[30%] right-[-20px] translate-x-0 flex flex-col items-start text-left w-40">
                <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 bg-white border-2 border-slate-400 rounded-full"></div>
                    <h4 className="font-bold text-slate-900 text-sm">How did we get here?</h4>
                </div>
                <p className="text-xs text-slate-500 pl-6">ROOT CAUSE</p>
            </div>

            {/* NODE 3: RIGHT-BOTTOM (Where could we be?) */}
            <div className="absolute bottom-[20%] right-[-20px] translate-x-0 flex flex-col items-start text-left w-40">
                <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 bg-white border-2 border-slate-400 rounded-full"></div>
                    <h4 className="font-bold text-slate-900 text-sm">Where could we be?</h4>
                </div>
                <p className="text-xs text-slate-500 pl-6">CREDIBLE SCENARIOS</p>
            </div>

            {/* NODE 4: LEFT-BOTTOM (How do we get there?) */}
            <div className="absolute bottom-[20%] left-[-20px] flex flex-col items-end text-right w-40">
                <div className="flex items-center gap-3 mb-2 flex-row-reverse">
                    <div className="w-3 h-3 bg-white border-2 border-slate-400 rounded-full"></div>
                    <h4 className="font-bold text-slate-900 text-sm">How do we get there?</h4>
                </div>
                <p className="text-xs text-slate-500 pr-6">STRATEGY</p>
            </div>

            {/* NODE 5: LEFT-TOP (Are we getting there?) */}
            <div className="absolute top-[30%] left-[-20px] flex flex-col items-end text-right w-40">
                <div className="flex items-center gap-3 mb-2 flex-row-reverse">
                    <div className="w-3 h-3 bg-white border-2 border-slate-400 rounded-full"></div>
                    <h4 className="font-bold text-slate-900 text-sm">Are we getting there?</h4>
                </div>
                <p className="text-xs text-slate-500 pr-6">SIGNAL</p>
            </div>

        </div>
    );
};

export default PlanningCycleMinimal;
