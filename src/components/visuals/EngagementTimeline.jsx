import React, { useState } from 'react';

const phases = [
    {
        number: '01',
        label: 'Diagnose',
        duration: '10–14 days',
        headline: 'Find the real constraint',
        description: 'Examine how the revenue system actually behaves. Pipeline quality, deal movement, ICP fit, forecast accuracy. Name what\'s actually broken.',
        color: 'emerald',
        output: 'Constraint clearly named'
    },
    {
        number: '02',
        label: 'Design',
        duration: '4–8 weeks',
        headline: 'Redesign the broken parts',
        description: 'Rebuild the pieces causing the constraint — stage definitions, ICP, handoff protocols, governance. Designed with your team, not for them.',
        color: 'indigo',
        output: 'GTM operating model'
    },
    {
        number: '03',
        label: 'Build',
        duration: 'Depends on scope',
        headline: 'Implement end to end',
        description: 'CRM, outbound infrastructure, automation, AI signal layers. We own the build. Your team gets a running system they understand.',
        color: 'violet',
        output: 'Running system + handover'
    },
];

const colorMap = {
    emerald: { dot: 'bg-emerald-500', text: 'text-emerald-600', border: 'border-emerald-200', light: 'bg-emerald-50' },
    indigo:  { dot: 'bg-indigo-500',  text: 'text-indigo-600',  border: 'border-indigo-200',  light: 'bg-indigo-50'  },
    violet:  { dot: 'bg-violet-500',  text: 'text-violet-600',  border: 'border-violet-200',  light: 'bg-violet-50'  },
};

const EngagementTimeline = () => {
    const [active, setActive] = useState(0);

    return (
        <div className="w-full bg-slate-900 rounded-xl p-8 md:p-10">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-8">How an engagement runs</p>

            {/* Timeline track */}
            <div className="relative flex items-start gap-0 mb-10">
                {phases.map((phase, i) => {
                    const c = colorMap[phase.color];
                    const isLast = i === phases.length - 1;
                    return (
                        <React.Fragment key={i}>
                            <button
                                onClick={() => setActive(i)}
                                className="flex flex-col items-center gap-2 group flex-shrink-0"
                            >
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-200
                                    ${active === i ? `${c.dot} text-white shadow-lg scale-110` : 'bg-slate-700 text-slate-400 group-hover:bg-slate-600'}`}>
                                    {phase.number}
                                </div>
                                <span className={`text-xs font-bold uppercase tracking-wider transition-colors
                                    ${active === i ? `${c.text}` : 'text-slate-500 group-hover:text-slate-300'}`}>
                                    {phase.label}
                                </span>
                            </button>
                            {!isLast && (
                                <div className="flex-1 h-[1px] bg-slate-700 mt-5 mx-2" />
                            )}
                        </React.Fragment>
                    );
                })}
            </div>

            {/* Active phase detail */}
            {phases.map((phase, i) => {
                const c = colorMap[phase.color];
                if (i !== active) return null;
                return (
                    <div key={i} className={`rounded-lg border ${c.border} p-6 bg-slate-800`}>
                        <div className="flex items-center justify-between mb-3">
                            <span className={`text-xs font-bold uppercase tracking-widest ${c.text}`}>
                                Phase {phase.number} · {phase.duration}
                            </span>
                        </div>
                        <h4 className="text-white font-bold text-lg mb-2">{phase.headline}</h4>
                        <p className="text-slate-400 text-sm leading-relaxed mb-5">{phase.description}</p>
                        <div className={`inline-flex items-center gap-2 text-xs font-bold ${c.text} bg-slate-900 px-3 py-1.5 rounded`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />
                            Output: {phase.output}
                        </div>
                    </div>
                );
            })}

            <p className="text-slate-600 text-xs mt-6 text-center">Click each phase to explore</p>
        </div>
    );
};

export default EngagementTimeline;
