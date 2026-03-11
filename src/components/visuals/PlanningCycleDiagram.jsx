import React from 'react';
import { motion } from 'framer-motion';

const PlanningCycleDiagram = () => {
    const steps = [
        { id: 1, label: "Where are we today?", sub: "Ground Truth", angle: 0 },
        { id: 2, label: "How did we get here?", sub: "Root Cause", angle: 72 },
        { id: 3, label: "Where could we be?", sub: "Scenarios", angle: 144 },
        { id: 4, label: "How do we get there?", sub: "Strategy", angle: 216 },
        { id: 5, label: "Are we getting there?", sub: "Signal", angle: 288 },
    ];

    return (
        <div className="relative w-full h-[500px] flex items-center justify-center bg-white rounded-xl">
            {/* CENTRAL HUB */}
            <div className="absolute z-10 flex flex-col items-center justify-center w-32 h-32 bg-slate-900 rounded-full shadow-xl text-white">
                <span className="text-xs uppercase tracking-widest text-slate-400">GTM-360</span>
                <span className="font-bold text-lg">CLARITY</span>
            </div>

            {/* ORBITAL PATH */}
            <div className="absolute w-80 h-80 rounded-full border-2 border-dashed border-slate-200 animate-spin-slow" style={{ animationDuration: '60s' }}></div>

            {/* NODES */}
            <div className="relative w-80 h-80">
                {steps.map((step, i) => {
                    // Calculate position on circle
                    const angleRad = (step.angle - 90) * (Math.PI / 180);
                    const radius = 160; // Half of w-80
                    const x = radius + radius * Math.cos(angleRad);
                    const y = radius + radius * Math.sin(angleRad);

                    return (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.2 }}
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-center w-40"
                            style={{ left: x, top: y }}
                        >
                            <div className="w-10 h-10 bg-white border-2 border-slate-900 rounded-full flex items-center justify-center font-bold text-slate-900 shadow-md mb-2 z-20 relative">
                                {step.id}
                                <div className="absolute inset-0 bg-indigo-100 rounded-full animate-ping opacity-20"></div>
                            </div>
                            <h4 className="font-bold text-slate-900 text-sm leading-tight">{step.label}</h4>
                            <p className="text-xs text-slate-500 uppercase tracking-wide mt-1">{step.sub}</p>
                        </motion.div>
                    )
                })}
            </div>
        </div>
    );
};

export default PlanningCycleDiagram;
