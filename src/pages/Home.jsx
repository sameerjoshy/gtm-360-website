import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, TrendingDown, HelpCircle, Activity, Users, Cpu, User, ArrowRight, BookOpen } from 'lucide-react';
import SEO from '../components/SEO';
import heroWarRoom from '../assets/hero_war_room.png';
import operatingBlueprint from '../assets/operating_model_blueprint.png';
import RevenueCalculator from '../components/tools/RevenueCalculator';
import TestimonialMarquee from '../components/social/TestimonialMarquee';
import VideoEmbed from '../components/media/VideoEmbed';

import TechStackMarquee from '../components/social/TechStackMarquee';
import LeadMagnet from '../components/marketing/LeadMagnet';
import GrowthStallChart from '../components/visuals/GrowthStallChart';

const Home = () => {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "GTM-360",
        "url": "https://gtm-360.com",
        "logo": "https://gtm-360.com/logo.png",
        "sameAs": [
            "https://www.linkedin.com/company/gtm-360"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "sales",
            "url": "https://gtm-360.com/contact"
        }
    };

    return (
        <div className="home-page">
            <SEO
                title="The Revenue Operating System for B2B Growth"
                description="We fix the decision systems that cause stalled growth—without adding more tools, headcount, or complexity."
                canonical="https://gtm-360.com"
            >
                <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
            </SEO>
            {/* BLOCK 1: HERO */}
            <section className="section !pt-0 pb-24 md:pb-32 aurora-bg relative overflow-hidden" style={{ paddingTop: '0px' }}>
                <div className="container max-w-6xl relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-12 mt-20">
                        <div className="flex-1">
                            {/* RECOGNITION (They are already successful) */}
                            <div className="inline-block px-3 py-1 bg-indigo-50 border border-indigo-100 rounded-full mb-6">
                                <span className="text-xs font-bold text-indigo-900 uppercase tracking-widest">Built for $5M - $50M ARR Teams</span>
                            </div>

                            {/* TENSION (The new constraint) */}
                            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-slate-900 tracking-tight">
                                Scale breaks everything. <br />
                                <span className="text-[var(--color-primary)]">We fix the engine.</span>
                            </h1>

                            {/* REFRAME & SUPPORT (How we help) */}
                            <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-2xl font-light">
                                GTM-360 helps leadership teams rethink how revenue runs when the old way stops scaling — without losing what already works.
                            </p>

                            {/* 3 BULLETS (Operator Language) */}
                            <ul className="space-y-4 mb-10">
                                <li className="flex items-start">
                                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                                        <Activity className="w-4 h-4 text-emerald-600" />
                                    </div>
                                    <div>
                                        <span className="font-bold text-slate-900">Signal Clarity:</span> <span className="text-slate-600">Identify the few deals that actually matter. Ignore the noise.</span>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                                        <TrendingDown className="w-4 h-4 text-indigo-600" />
                                    </div>
                                    <div>
                                        <span className="font-bold text-slate-900">System Drag:</span> <span className="text-slate-600">Remove the friction between stages that kills velocity.</span>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                                        <Users className="w-4 h-4 text-purple-600" />
                                    </div>
                                    <div>
                                        <span className="font-bold text-slate-900">Predictability:</span> <span className="text-slate-600">Move from "heroics and hope" to engineering controls.</span>
                                    </div>
                                </li>
                            </ul>

                            {/* DUAL CTAs */}
                            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-10">
                                <Link to="/contact" className="btn bg-[var(--color-primary)] text-white hover:bg-indigo-700 transition-all shadow-lg px-8 py-4 text-lg">
                                    Book a Diagnostic
                                </Link>
                                <Link to="/insights" className="px-6 py-4 text-slate-600 font-semibold hover:text-[var(--color-primary)] flex items-center group">
                                    Read the Operating Manual <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>

                            {/* PROVEN IMPACT (Mini Case Studies - Concise) */}
                            <div className="border-t border-slate-200 pt-6">
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Typical Outcomes</p>
                                <div className="flex gap-8">
                                    <div>
                                        <div className="text-2xl font-bold text-slate-900">Explicit</div>
                                        <div className="text-xs text-slate-500">Revenue Engine</div>
                                    </div>
                                    <div className="w-px bg-slate-200 h-10"></div>
                                    <div>
                                        <div className="text-2xl font-bold text-slate-900">High Trust</div>
                                        <div className="text-xs text-slate-500">Forecast Models</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* HERO IMAGE (Keep existing visual for now) */}
                        <div className="flex-1 w-full relative group hidden md:block">
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                            <img
                                src={heroWarRoom}
                                alt="GTM360 War Room: Operators solving system problems"
                                className="relative rounded-lg shadow-2xl border border-gray-100 transform group-hover:scale-[1.01] transition duration-500"
                            />
                            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded shadow-sm border border-indigo-50">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                    <span className="text-xs font-mono text-indigo-900 font-bold">SYSTEM_STABILIZED</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BLOCK 1.5: TECH STACK MARQUEE */}
            <TechStackMarquee />

            {/* BLOCK 1.6: ICP RECOGNITION (Replaces "Is This You" with Narrative Arc) */}
            <section className="section bg-white border-b border-gray-100">
                <div className="container max-w-4xl">
                    <div className="text-center mb-12">
                        <span className="text-[var(--color-primary)] font-mono text-xs tracking-widest uppercase">The Growth Paradox</span>
                        <h2 className="text-3xl font-semibold mt-4 mb-6">Why "what worked before" stops working.</h2>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            At your stage, the problem isn't lack of effort. It's usually that the organization has outgrown its own operating system.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-slate-50 p-8 rounded-lg border border-slate-100">
                            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                <TrendingDown className="w-5 h-5 text-slate-400" />
                                The Symptom
                            </h3>
                            <p className="text-slate-600 mb-4">
                                You add more SDRs, but pipeline stays flat. You buy more tools, but visibility gets worse. You push harder on forecast calls, but accuracy drops.
                            </p>
                        </div>
                        <div className="bg-indigo-50 p-8 rounded-lg border border-indigo-100">
                            <h3 className="font-bold text-indigo-900 mb-4 flex items-center gap-2">
                                <Activity className="w-5 h-5 text-indigo-500" />
                                The Reality
                            </h3>
                            <p className="text-slate-700 mb-4">
                                This is a structural issue, not a performance issue. Your revenue engine has become too complex to be run on "tribal knowledge" alone.
                            </p>
                        </div>
                    </div>

                    <p className="text-center text-lg font-medium text-gray-800 mt-12 italic">
                        "We help you build the engineering controls to run revenue like a system, not a series of heroics."
                    </p>
                </div>
            </section>

            {/* BLOCK 2: MISDIAGNOSIS */}
            <section className="section bg-[var(--color-secondary)]">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-[var(--color-primary)] font-mono text-xs tracking-widest uppercase mb-4 block">The Hidden Mechanic</span>
                            <h2 className="text-3xl font-semibold text-[var(--color-primary)] mb-6">Most stalled growth is misdiagnosed.</h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                When growth slows, companies respond predictably: more pipeline, more tools, more activity, more inspection.
                            </p>
                            <p className="text-lg text-gray-600 font-medium mb-8">
                                But usually, the issue isn't talent or effort. It's the "Complexity Wall."
                            </p>
                            <div className="bg-white p-6 rounded border-l-4 border-[var(--color-primary)] shadow-sm">
                                <p className="text-gray-800 italic">
                                    "What worked at $5M often breaks at $20M. The system quietly starts enforcing the wrong behaviors."
                                </p>
                            </div>
                        </div>

                        {/* CHART COMPONENT */}
                        <div className="relative">
                            <GrowthStallChart />
                            <p className="text-center text-xs text-slate-500 mt-4 font-mono">Figure 1.1: The Complexity Inflection Point</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* BLOCK 2.5: SOCIAL PROOF */}
            <TestimonialMarquee />

            {/* BLOCK 2.6: FOUNDER MEMO (VIDEO) */}
            <section className="section bg-white border-b border-gray-100">
                <div className="container max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-[var(--color-primary)] font-mono text-xs tracking-widest uppercase mb-4 block">
                                Founder's Memo
                            </span>
                            <h2 className="text-3xl font-semibold mb-6">
                                Why I left traditional consulting to build a Revenue OS.
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                "I watched too many smart leadership teams burn out trying to fix revenue problems with more calls, more pressure, and more dashboards.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed mb-8">
                                The truth is, most growth problems aren't people problems. They are system problems. I built GTM-360 to give leaders the engineering controls they need to actually fix the engine."
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 bg-gradient-to-br from-slate-200 to-slate-300 rounded-full flex items-center justify-center border-2 border-white shadow-md text-slate-500">
                                    <User className="w-7 h-7" />
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900 text-lg">Sameer</p>
                                    <p className="text-sm text-gray-500">Founder, GTM-360</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            {/* VIDEO EMBED */}
                            <VideoEmbed
                                videoId="M7lc1UVf-VE"
                                title="Why GTM-360 Exists"
                            />
                            {/* Decorative Elements */}
                            <div className="absolute -z-10 top-6 -right-6 w-full h-full border-2 border-[var(--color-secondary)] rounded-sm"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BLOCK 3: FAILURE PATTERNS */}
            <section className="section">
                <div className="container">
                    <h2 className="text-3xl font-semibold mb-12">What this looks like inside real companies</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { text: "Busy everywhere, breakthrough nowhere", icon: <Activity className="w-6 h-6 text-orange-500" />, color: "bg-orange-50 border-orange-200" },
                            { text: "Pipeline exists, conversion weakens", icon: <TrendingDown className="w-6 h-6 text-red-500" />, color: "bg-red-50 border-red-200" },
                            { text: "Deals stall late “without a clear reason”", icon: <HelpCircle className="w-6 h-6 text-purple-500" />, color: "bg-purple-50 border-purple-200" },
                            { text: "Forecasts explain the past, not guide action", icon: <AlertTriangle className="w-6 h-6 text-yellow-500" />, color: "bg-yellow-50 border-yellow-200" },
                            { text: "Leaders disagree on what’s actually wrong", icon: <Users className="w-6 h-6 text-blue-500" />, color: "bg-blue-50 border-blue-200" },
                            { text: "AI and tools add noise, not leverage", icon: <Cpu className="w-6 h-6 text-indigo-500" />, color: "bg-indigo-50 border-indigo-200" }
                        ].map((item, i) => (
                            <div key={i} className={`p-6 rounded-lg border ${item.color} transition-all hover:-translate-y-1 hover:shadow-md`}>
                                <div className="mb-4">{item.icon}</div>
                                <p className="text-lg font-medium text-gray-800">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* BLOCK 3.5: ECOSYSTEM TOOLS */}
            <section className="section bg-gradient-to-b from-white to-gray-50 border-b border-gray-200">
                <div className="container">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <span className="text-[var(--color-primary)] font-mono text-xs tracking-widest uppercase block mb-3">
                            Revenue Architecture Tools
                        </span>
                        <h2 className="text-3xl font-semibold mb-4">
                            Engineering resources for GTM Leaders.
                        </h2>
                        <p className="text-lg text-gray-600">
                            Stop guessing. Start building with standard definitions and proven plays.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* TOOL 1: GLOSSARY */}
                        <Link to="/glossary" className="group relative overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 p-8 flex flex-col items-start">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <BookOpen className="w-32 h-32 text-indigo-600" />
                            </div>
                            <div className="bg-indigo-50 p-3 rounded-xl mb-6 group-hover:bg-indigo-100 transition-colors">
                                <BookOpen className="w-8 h-8 text-indigo-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                                The GTM Dictionary
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                The official lexicon of Revenue Engineering. Learn the difference between "Shadow Funnel" and "Dark Social".
                            </p>
                            <div className="mt-auto flex items-center font-semibold text-indigo-600">
                                Browse 50+ Terms <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>

                        {/* TOOL 2: PLAYBOOKS */}
                        <Link to="/playbooks" className="group relative overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 p-8 flex flex-col items-start">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Activity className="w-32 h-32 text-emerald-600" />
                            </div>
                            <div className="bg-emerald-50 p-3 rounded-xl mb-6 group-hover:bg-emerald-100 transition-colors">
                                <Activity className="w-8 h-8 text-emerald-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                                The Playbook Repo
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Battle-tested systems for Audit, Strategy, and Execution. Deploy atomic plays to fix your funnel.
                            </p>
                            <div className="mt-auto flex items-center font-semibold text-emerald-600">
                                Explore the Repo <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* MICRO-CONVERSION: CALCULATOR */}
            <section className="section py-20 bg-gray-50">
                <div className="container max-w-4xl">
                    <RevenueCalculator />
                </div>
            </section>

            {/* BLOCK 4: GTM OPERATING MODEL */}
            <section className="section bg-[var(--color-secondary)]">
                <div className="container">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-primary)] mb-8">
                            Go-to-market is an operating model — not a set of functions.
                        </h2>
                        <p className="text-lg text-gray-700 mb-6">
                            Growth is governed by a system: how focus is set, how decisions propagate, how execution flows, and how leaders see what matters in time to act.
                        </p>
                        <p className="text-lg text-gray-700 mb-8">
                            When that system degrades, effort stops converting into outcomes — no matter how hard teams push. <br />
                            GTM360 exists to fix that layer.
                        </p>
                        <Link to="/problems" className="text-[var(--color-primary)] font-semibold text-lg hover:underline inline-flex items-center">
                            Understand the GTM Operating Model →
                        </Link>
                    </div>

                    {/* MODEL VISUAL: System Blueprint */}
                    <div className="mt-16 flex justify-center">
                        <div className="relative max-w-4xl shadow-2xl rounded-sm overflow-hidden border border-gray-200">
                            <img src={operatingBlueprint} alt="GTM System Architecture Blueprint" className="w-full" />
                            <div className="absolute inset-0 border-4 border-white/10 pointer-events-none"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BLOCK 5: WHAT CHANGES */}
            <section className="section">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-3xl font-semibold mb-6">What changes when the system is fixed</h2>
                            <ul className="space-y-4">
                                {[
                                    "Clearer priorities and fewer competing initiatives",
                                    "Stronger decision quality across the funnel",
                                    "Faster execution with fewer late-stage surprises",
                                    "Improved predictability in revenue outcomes",
                                    "Leadership confidence and control restored"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start">
                                        <span className="mr-3 text-[var(--color-primary)]">•</span>
                                        <span className="text-lg text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-6 text-sm text-gray-500 italic">Not overnight. Not all at once. But measurably.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* BLOCK 6: CASE HIGHLIGHTS */}
            <section className="section bg-[var(--color-secondary)]">
                <div className="container">
                    <div className="flex justify-between items-end mb-12">
                        <h2 className="text-3xl font-semibold max-w-xl">Seen this before. Fixed it without breaking what worked.</h2>
                        <Link to="/insights" className="hidden md:inline-block text-[var(--color-primary)] font-medium hover:underline">
                            Explore insights →
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                symptom: "Growth slowed despite rising activity",
                                reality: "Decision decay across the GTM system",
                                outcome: "Restored focus, improved conversion, regained confidence"
                            },
                            {
                                symptom: "Lead generation problem that wasn't",
                                reality: "Weak customer cohorting and generic value",
                                outcome: "Fewer campaigns, higher signal quality"
                            },
                            {
                                symptom: "Forecast volatility in scaled org",
                                reality: "Inspection was backward-looking",
                                outcome: "Earlier risk surfacing, improved predictability"
                            }
                        ].map((card, i) => (
                            <div key={i} className="glass-card p-8 rounded-sm flex flex-col h-full border-t-4 border-transparent hover:border-[var(--color-primary)] transition-all">
                                <div className="mb-4">
                                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">Symptom</span>
                                    <p className="font-medium text-gray-900 mt-1">{card.symptom}</p>
                                </div>
                                <div className="mb-4">
                                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">Reality</span>
                                    <p className="font-medium text-[var(--color-primary)] mt-1">{card.reality}</p>
                                </div>
                                <div className="mt-auto pt-4 border-t border-gray-100">
                                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">Outcome</span>
                                    <p className="text-sm text-gray-600 mt-1">{card.outcome}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 md:hidden">
                        <Link to="/insights" className="text-[var(--color-primary)] font-medium hover:underline">
                            Explore insights →
                        </Link>
                    </div>
                </div>
            </section>

            {/* BLOCK 7: WHO THIS IS FOR */}
            <section className="section">
                <div className="container">
                    <h2 className="text-3xl font-semibold mb-12 text-center">Who we work with</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-16 border-t md:border-t-0 border-gray-200">
                        <div className="py-8 border-b md:border-b-0 md:border-r border-gray-200 pr-8">
                            <h3 className="text-xl font-semibold text-gray-900 mb-6">This is for you if</h3>
                            <ul className="space-y-3">
                                {['Growth has slowed for structural reasons', 'You suspect the system, not the people', 'You want clarity before adding more effort'].map(i => (
                                    <li key={i} className="flex items-start text-gray-700">
                                        <span className="text-green-600 mr-2">✓</span> {i}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="py-8 pl-0 md:pl-8">
                            <h3 className="text-xl font-semibold text-gray-500 mb-6">This is not for you if</h3>
                            <ul className="space-y-3">
                                {['You’re looking for a lead-gen vendor', 'You want a quick tool rollout', 'You’re seeking a transformation program'].map(i => (
                                    <li key={i} className="flex items-start text-gray-500">
                                        <span className="text-gray-400 mr-2">×</span> {i}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* BLOCK 8: LEAD MAGNET */}
            <section className="section bg-gray-50 border-t border-gray-200">
                <div className="container max-w-5xl">
                    <LeadMagnet />
                </div>
            </section>

            {/* BLOCK 9: FINAL CTA */}
            <section className="section bg-[var(--color-primary)] text-white text-center py-24">
                <div className="container max-w-2xl">
                    <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">Fix the system before adding more force.</h2>
                    <p className="text-lg text-indigo-100 mb-10">
                        The first conversation is diagnostic. No pitch. No framework. No obligation.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Link to="/contact" className="btn bg-white text-[var(--color-primary)] hover:bg-gray-100">
                            Start a conversation →
                        </Link>
                        <Link to="/how-we-work" className="btn border border-white text-white hover:bg-indigo-900">
                            How we work →
                        </Link>
                    </div>
                </div>
            </section>
        </div >
    );
};

export default Home;
