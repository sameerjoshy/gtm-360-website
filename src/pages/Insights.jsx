import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowUpRight } from 'lucide-react';
import SEO from '../components/SEO';

const Insights = () => {
    const insights = [
        {
            title: "Growth Doesn’t Stall. Systems Do.",
            desc: "Why momentum fades even when teams are doing the right things.",
            slug: "/insights/growth-stall"
        },
        {
            title: "Why Optimization Fails at Inflection Points",
            desc: "When efficiency helps — and when it quietly holds you back.",
            slug: "/insights/optimization-trap"
        },
        {
            title: "Forecasts Decay as Complexity Grows",
            desc: "Why confidence drops as scale increases — and what actually helps.",
            slug: "/insights/forecast-decay"
        },
        {
            title: "The Hidden Cost of GTM Fragmentation",
            desc: "When teams are aligned in intent, but not in reality.",
            slug: "/insights/fragmentation"
        },
        {
            title: "Why AI Helps After Clarity Exists",
            desc: "Where automation fits — and where it doesn’t.",
            slug: "/insights/ai-role"
        }
    ];

    return (
        <div className="min-h-screen bg-white font-sans">
            <SEO
                title="Insights | GTM-360"
                description="A few ideas we keep coming back to. Canonical insights on revenue systems, growth stalls, and forecast decay."
            />

            <div className="container max-w-4xl pt-32 pb-24">
                {/* HEADER */}
                <div className="mb-20 text-center">
                    <span className="text-[var(--color-primary)] font-mono text-xs tracking-widest uppercase mb-4 block">Insights</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-serif">
                        A few ideas we keep coming back to.
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
                        We don’t publish frequently. We write when there’s something worth clarifying — usually after seeing the same pattern play out across different companies.
                    </p>
                    <p className="text-sm text-slate-400 mt-4 uppercase tracking-wider">
                        THESE ARE NOT POSTS. THEY’RE REFERENCE POINTS.
                    </p>
                </div>

                {/* INSIGHT CARDS */}
                <div className="grid grid-cols-1 gap-8">
                    {insights.map((item, i) => (
                        <Link key={i} to="/contact" className="group block bg-white border border-gray-100 p-10 rounded-xl hover:border-gray-300 hover:shadow-xl transition-all duration-300">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-[var(--color-primary)] transition-colors font-serif">
                                        {item.title}
                                    </h2>
                                    <p className="text-lg text-slate-600 leading-relaxed group-hover:text-slate-800">
                                        {item.desc}
                                    </p>
                                </div>
                                <ArrowUpRight className="w-5 h-5 text-gray-300 group-hover:text-[var(--color-primary)] transition-colors opacity-0 group-hover:opacity-100" />
                            </div>
                        </Link>
                    ))}
                </div>

                {/* FOOTER NOTE */}
                <div className="mt-20 text-center border-t border-gray-100 pt-10">
                    <p className="text-slate-500">
                        Want to discuss these patterns in your own system?
                    </p>
                    <Link to="/contact" className="text-[var(--color-primary)] font-bold mt-2 inline-block hover:underline">
                        Start a conversation →
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Insights;
