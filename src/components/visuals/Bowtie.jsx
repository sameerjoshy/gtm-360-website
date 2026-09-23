import { motion } from 'framer-motion';
import { ENGINES, AGENT_TOTAL } from '../../data/engines';

/**
 * The GTM-360 bowtie — the signature graphic.
 * Strategy (top envelope) · Attract → Convert → Grow (the journey) · Operations (bottom envelope)
 * with the loop closing back to Strategy (Enhance).
 */
export default function Bowtie({ compact = false }) {
    const strategy = ENGINES.find((e) => e.id === 'strategy');
    const operations = ENGINES.find((e) => e.id === 'operations');
    const journey = ENGINES.filter((e) => e.envelope === 'journey');

    return (
        <div className={`bowtie ${compact ? 'bowtie-compact' : ''}`} role="img" aria-label="The GTM-360 revenue engine: Strategy on top, Attract · Convert · Grow in the middle, Operations on the bottom, the loop closing back to Strategy">
            <svg viewBox="0 0 720 460" className="bowtie-svg" aria-hidden="true">
                {/* the loop — two arcs closing the system */}
                <motion.path
                    d="M 90 120 C 30 220 30 260 90 360"
                    fill="none" stroke="#94a3b8" strokeWidth="2" strokeDasharray="6 6"
                    initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 1.2, delay: 0.8 }}
                />
                <motion.path
                    d="M 630 120 C 690 220 690 260 630 360"
                    fill="none" stroke="#94a3b8" strokeWidth="2" strokeDasharray="6 6"
                    initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 1.2, delay: 1.0 }}
                />
                {/* feedback arrow (Enhance) */}
                <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }}>
                    <path d="M 360 398 L 360 118" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4 4" />
                    <path d="M 355 128 L 360 114 L 365 128" fill="none" stroke="#94a3b8" strokeWidth="1.5" />
                    <text x="372" y="255" fill="#94a3b8" fontSize="13" fontWeight="600" letterSpacing="0.06em">Enhance</text>
                </motion.g>

                {/* Strategy — top envelope */}
                <motion.g initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                    <rect x="170" y="40" width="380" height="64" rx="12" fill={strategy.color} fillOpacity="0.12" stroke={strategy.color} strokeWidth="1.5" />
                    <text x="360" y="70" textAnchor="middle" fill={strategy.color} fontSize="20" fontWeight="800" letterSpacing="0.04em">STRATEGY</text>
                    <text x="360" y="90" textAnchor="middle" fill="#64748b" fontSize="13">know who to serve · decide what to do</text>
                </motion.g>

                {/* Journey — three engines in the middle */}
                {journey.map((e, i) => {
                    const x = 80 + i * 200;
                    return (
                        <motion.g key={e.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}>
                            <rect x={x} y="170" width="160" height="140" rx="14" fill={e.color} fillOpacity="0.10" stroke={e.color} strokeWidth="1.5" />
                            <text x={x + 80} y="200" textAnchor="middle" fill={e.color} fontSize="16" fontWeight="800" letterSpacing="0.05em">{e.name.toUpperCase()}</text>
                            <text x={x + 80} y="224" textAnchor="middle" fill="#475569" fontSize="14" fontWeight="700">{e.journey}</text>
                            <text x={x + 80} y="252" textAnchor="middle" fill="#64748b" fontSize="12">{e.what}</text>
                            <text x={x + 80} y="288" textAnchor="middle" fill={e.color} fontSize="13" fontWeight="700">{e.agents.length} agents</text>
                        </motion.g>
                    );
                })}

                {/* Operations — bottom envelope */}
                <motion.g initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }}>
                    <rect x="170" y="360" width="380" height="64" rx="12" fill={operations.color} fillOpacity="0.12" stroke={operations.color} strokeWidth="1.5" />
                    <text x="360" y="390" textAnchor="middle" fill={operations.color} fontSize="20" fontWeight="800" letterSpacing="0.04em">OPERATIONS</text>
                    <text x="360" y="410" textAnchor="middle" fill="#64748b" fontSize="13">validate the numbers · learn from every deal</text>
                </motion.g>
            </svg>

            <div className="bowtie-foot" style={{ display: 'flex', gap: 12, justifyContent: 'center', alignItems: 'center', marginTop: 14 }}>
                <span style={{ fontSize: 13, color: '#475569', fontWeight: 600 }}>
                    One loop · {ENGINES.length} engines · {AGENT_TOTAL} specialist jobs
                </span>
            </div>
        </div>
    );
}