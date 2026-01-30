import React from 'react';
import { motion } from 'framer-motion';

const GrowthStallChart = () => {
    return (
        <div className="relative w-full h-[400px] bg-slate-900 rounded-xl overflow-hidden shadow-2xl border border-slate-800 p-8 flex flex-col items-center justify-center">

            {/* GRID LINES */}
            <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 pointer-events-none opacity-10">
                {[...Array(24)].map((_, i) => (
                    <div key={i} className="border-r border-b border-indigo-500/30"></div>
                ))}
            </div>

            {/* HOVER TITLE */}
            <div className="absolute top-6 left-8 z-10">
                <h3 className="text-white font-bold text-lg flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
                    The Growth Stall
                </h3>
                <p className="text-slate-400 text-xs uppercase tracking-widest mt-1">Revenue vs. Complexity</p>
            </div>

            {/* CHART CONTAINER */}
            <div className="relative w-full max-w-2xl h-64 mt-8">
                {/* Y-AXIS LABEL */}
                <div className="absolute -left-6 top-1/2 -translate-y-1/2 -rotate-90 text-slate-500 text-xs font-mono tracking-widest">REVENUE IMPACT</div>

                {/* X-AXIS LABEL */}
                <div className="absolute bottom-[-2rem] left-1/2 -translate-x-1/2 text-slate-500 text-xs font-mono tracking-widest">ORGANIZATIONAL COMPLEXITY →</div>

                {/* CURVE 1: THE OLD WAY (STAGNATION) */}
                <svg className="absolute inset-0 w-full h-full overflow-visible">
                    <defs>
                        <linearGradient id="gradientStall" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="#94a3b8" stopOpacity="0.5" />
                            <stop offset="100%" stopColor="#ef4444" stopOpacity="1" />
                        </linearGradient>
                        <linearGradient id="gradientGrowth" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.5" />
                            <stop offset="100%" stopColor="#10b981" stopOpacity="1" />
                        </linearGradient>
                    </defs>

                    {/* PATH 1: Stagnation Pattern */}
                    <motion.path
                        d="M 0 250 C 100 250, 200 200, 300 150 C 350 120, 400 120, 600 140"
                        fill="none"
                        stroke="url(#gradientStall)"
                        strokeWidth="3"
                        strokeDasharray="10 5"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                    />
                    <motion.circle cx="300" cy="150" r="4" fill="#ef4444"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                    />

                    {/* PATH 2: The Inflection (System Upgrade) */}
                    <motion.path
                        d="M 300 150 C 350 120, 350 80, 600 20"
                        fill="none"
                        stroke="url(#gradientGrowth)"
                        strokeWidth="4"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ delay: 2, duration: 2, ease: "easeOut" }}
                    />
                    <motion.circle cx="600" cy="20" r="6" fill="#10b981"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 3.8, type: "spring" }}
                    />

                </svg>

                {/* ANNOTATIONS */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.6 }}
                    className="absolute top-[160px] left-[280px] bg-slate-800/90 text-red-200 text-xs px-3 py-1 rounded border border-red-500/30 backdrop-blur-sm"
                >
                    Complexity Wall
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 4 }}
                    className="absolute top-[20px] right-[-20px] bg-emerald-900/90 text-emerald-200 text-xs px-3 py-1 rounded border border-emerald-500/30 backdrop-blur-sm shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                >
                    System Inflection
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5 }}
                    className="absolute top-[60px] left-[350px] text-[10px] text-indigo-400 font-mono tracking-wide"
                >
                    + GTM-360 INSTALLED
                </motion.div>

            </div>

            <div className="absolute bottom-4 right-6 flex items-center gap-4 text-[10px] text-slate-500 font-mono uppercase">
                <div className="flex items-center gap-1"><span className="w-2 h-2 bg-red-500 rounded-full"></span> Default Drift</div>
                <div className="flex items-center gap-1"><span className="w-2 h-2 bg-emerald-500 rounded-full"></span> Engineered Growth</div>
            </div>
        </div>
    );
};

export default GrowthStallChart;
