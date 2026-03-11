import React from 'react';

const steps = [
    { label: 'Growth stalls',        sub: 'Number misses quarter',        icon: '⚠' },
    { label: 'Team increases effort', sub: 'More pipeline, tools, process', icon: '↑' },
    { label: 'Wrong constraint',      sub: 'Real problem still untouched',  icon: '✗', highlight: true },
    { label: 'Results stay flat',     sub: 'Next quarter, same question',   icon: '→' },
];

const MisdiagnosisCycle = () => (
    <div className="w-full bg-white border border-slate-200 rounded-xl p-8">
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-8 text-center">
            The default response loop
        </p>

        {/* Desktop: horizontal */}
        <div className="hidden md:flex items-center justify-between gap-2">
            {steps.map((step, i) => (
                <React.Fragment key={i}>
                    <div className={`flex-1 text-center p-5 rounded-lg border transition-all
                        ${step.highlight
                            ? 'bg-red-50 border-red-200'
                            : 'bg-slate-50 border-slate-200'}`}>
                        <span className={`text-2xl block mb-2 ${step.highlight ? 'text-red-500' : 'text-slate-400'}`}>
                            {step.icon}
                        </span>
                        <p className={`font-bold text-sm mb-1 ${step.highlight ? 'text-red-700' : 'text-slate-900'}`}>
                            {step.label}
                        </p>
                        <p className={`text-xs leading-snug ${step.highlight ? 'text-red-500' : 'text-slate-400'}`}>
                            {step.sub}
                        </p>
                    </div>
                    {i < steps.length - 1 && (
                        <div className="text-slate-300 font-bold text-lg flex-shrink-0">→</div>
                    )}
                </React.Fragment>
            ))}
        </div>

        {/* Mobile: vertical */}
        <div className="md:hidden space-y-3">
            {steps.map((step, i) => (
                <div key={i} className={`flex items-start gap-4 p-4 rounded-lg border
                    ${step.highlight ? 'bg-red-50 border-red-200' : 'bg-slate-50 border-slate-200'}`}>
                    <span className={`text-xl mt-0.5 ${step.highlight ? 'text-red-500' : 'text-slate-400'}`}>
                        {step.icon}
                    </span>
                    <div>
                        <p className={`font-bold text-sm ${step.highlight ? 'text-red-700' : 'text-slate-900'}`}>
                            {step.label}
                        </p>
                        <p className={`text-xs ${step.highlight ? 'text-red-500' : 'text-slate-400'}`}>
                            {step.sub}
                        </p>
                    </div>
                </div>
            ))}
        </div>

        <p className="text-center text-xs text-slate-400 mt-6">
            The loop repeats until the constraint is correctly identified.
        </p>
    </div>
);

export default MisdiagnosisCycle;
