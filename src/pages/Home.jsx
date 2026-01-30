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
import PlanningCycleDiagram from '../components/visuals/PlanningCycleDiagram';

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
                            {/* CANONICAL HEADLINE */}
                            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-8 text-slate-900 tracking-tight">
                                Helping B2B companies scale their revenue systems — <span className="text-[var(--color-primary)]">without losing clarity, momentum, or control.</span>
                            </h1>

                            {/* CANONICAL SUBHEAD */}
                            <p className="text-xl text-slate-600 mb-8 max-w-2xl font-light leading-relaxed">
                                We work with founders and CROs at growth inflection points. <br className="hidden md:block" />
                                When what got you here still works — but isn’t enough to get you where you want to go.
                            </p>

                            {/* CANONICAL CTAs */}
                            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-10">
                                <Link to="/contact" className="btn bg-[var(--color-primary)] text-white hover:bg-indigo-700 transition-all shadow-lg px-8 py-4 text-lg">
                                    Start with a conversation
                                </Link>
                                <Link to="/start-here" className="px-6 py-4 text-slate-600 font-semibold hover:text-[var(--color-primary)] flex items-center group">
                                    Start here <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>

                        {/* HERO IMAGE: Abstract System Motif */}
                        <div className="flex-1 w-full relative group hidden md:block pl-10">
                            <div className="relative rounded-lg shadow-2xl border border-gray-100 bg-white p-6 overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
                                <div className="grid grid-cols-2 gap-4 opacity-50">
                                    <div className="h-24 bg-slate-50 rounded border border-slate-100"></div>
                                    <div className="h-24 bg-slate-50 rounded border border-slate-100"></div>
                                    <div className="h-24 bg-slate-50 rounded border border-slate-100 col-span-2"></div>
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="bg-white/90 backdrop-blur px-6 py-3 rounded-full border border-slate-200 shadow-lg text-slate-600 font-mono text-sm">
                                        System_State: <span className="text-emerald-600 font-bold">ALIGNED</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION: THE REALITY (Normalizing, Not Blaming) */}
            <section className="section bg-white border-b border-gray-100">
                <div className="container max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-[var(--color-primary)] font-mono text-xs tracking-widest uppercase mb-4 block">The Reality</span>
                            <h2 className="text-3xl font-semibold mb-6">Most teams don’t stall because they’re doing things wrong.</h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                They stall because the system they built to get from 0 → 10 is now being asked to take them from 10 → 50.
                            </p>
                            <p className="text-lg text-gray-600 font-medium mb-8">
                                That’s when familiar patterns show up:
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Pipeline exists, but accuracy drops",
                                    "Leads are coming in, but quality is uneven",
                                    "Teams are busy, but alignment is harder",
                                    "Optimizations help — but progress feels incremental"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start text-gray-700">
                                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 mr-3 flex-shrink-0"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-8 text-slate-500 italic">
                                This happens to capable teams. At predictable moments in growth.
                            </p>
                        </div>

                        {/* VISUAL: Growth Curve with Flattening */}
                        <div className="relative">
                            <GrowthStallChart />
                            <p className="text-center text-xs text-slate-400 mt-4 font-mono">Figure 1.0: The Optimization Plateau</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION: WHY OPTIMIZATION ISN'T ENOUGH */}
            <section className="section bg-[var(--color-secondary)]">
                <div className="container max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold mb-8">Why optimization isn’t enough.</h2>
                    <p className="text-xl text-gray-600 leading-relaxed mb-12 max-w-3xl mx-auto">
                        At early stages, momentum comes from speed and iteration. <br />
                        Later, progress depends on something else: <strong>Clear priorities. Shared signals. A revenue system that scales.</strong>
                    </p>


                    {/* SECTION: HOW WE THINK (The Planning Cycle) */}
                    <section className="section bg-white">
                        <div className="container max-w-6xl">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                                <div className="order-2 lg:order-1 relative">
                                    {/* DIAGRAM PLACEHOLDER (Will import) */}
                                    <PlanningCycleDiagram />
                                </div>
                                <div className="order-1 lg:order-2">
                                    <span className="text-[var(--color-primary)] font-mono text-xs tracking-widest uppercase mb-4 block">How We Think</span>
                                    <h2 className="text-3xl font-semibold mb-6">We don’t start with solutions. <br /> We start with clarity.</h2>
                                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                        When companies reach an inflection point, we slow things down just enough to ask a few fundamental questions.
                                    </p>
                                    <p className="text-lg text-gray-600 mb-8">
                                        These questions shape how we plan, prioritize, and build the revenue engine going forward.
                                    </p>
                                    <div className="p-6 bg-slate-50 border border-slate-100 rounded-lg">
                                        <p className="text-slate-500 text-sm italic">
                                            "Where are we today? How did we get here? Where could we realistically be?"
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* SECTION: WHAT WE DO (No Service Menu) */}
                    <section className="section bg-[var(--color-secondary)] border-y border-gray-200">
                        <div className="container max-w-4xl mx-auto text-center">
                            <span className="text-[var(--color-primary)] font-mono text-xs tracking-widest uppercase mb-4 block">Our Role</span>
                            <h2 className="text-3xl font-semibold mb-12">Partners to founders and revenue leaders.</h2>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                                {[
                                    { title: "Diagnosis", desc: "Finding where the system is misfiring." },
                                    { title: "Alignment", desc: "Getting leadership around clear priorities." },
                                    { title: "Design", desc: "Building a tighter GTM operating rhythm." }
                                ].map((item, i) => (
                                    <div key={i} className="bg-white p-8 rounded shadow-sm border border-gray-100 hover:border-indigo-200 transition-colors">
                                        <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                                        <p className="text-slate-600">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                            <p className="mt-12 text-slate-500">
                                Sometimes that looks like advisory. Sometimes it’s hands-on. Often, it’s a mix.
                            </p>
                        </div>
                    </section>

                    {/* SECTION: WHERE THE PRODUCT FITS (Quietly) */}
                    <section className="section bg-slate-900 text-white overflow-hidden relative">
                        <div className="absolute inset-0 bg-noise opacity-10"></div>
                        <div className="container max-w-5xl relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                                <div>
                                    <h2 className="text-3xl font-bold mb-6">As teams scale, consistency becomes as important as insight.</h2>
                                    <p className="text-lg text-slate-300 leading-relaxed mb-8">
                                        That’s where our agent workbench comes in. It supports planning and execution by making signals visible and creating shared context.
                                    </p>
                                    <p className="text-lg text-emerald-400 font-medium mb-8">
                                        The product doesn’t replace judgment. It reinforces it.
                                    </p>
                                    <Link to="/workbench" className="text-white border-b border-indigo-500 pb-1 hover:text-indigo-400 transition-colors">
                                        See the Agent Workbench →
                                    </Link>
                                </div>
                                <div className="relative h-96 bg-slate-800 rounded-lg border border-slate-700 shadow-2xl skew-y-3 transform hover:skew-y-0 transition-transform duration-700 overflow-hidden group">
                                    {/* Abstract UI Representation */}
                                    <div className="absolute top-0 left-0 w-full h-8 bg-slate-950 border-b border-slate-700 flex items-center px-4 gap-2">
                                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                    </div>
                                    <div className="p-8 space-y-4 opacity-50 group-hover:opacity-100 transition-opacity">
                                        <div className="h-32 bg-slate-700/50 rounded animate-pulse"></div>
                                        <div className="h-4 bg-slate-700/50 rounded w-2/3"></div>
                                        <div className="h-4 bg-slate-700/50 rounded w-1/2"></div>
                                    </div>
                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                        <div className="px-4 py-2 bg-indigo-600 rounded text-xs font-bold uppercase tracking-widest shadow-lg">
                                            Operator Console
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* BLOCK 9: FINAL CTA */}
                    <section className="section bg-white text-center py-24">
                        <div className="container max-w-2xl">
                            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-6">
                                If things mostly work — <br /> but feel harder than they should.
                            </h2>
                            <p className="text-lg text-slate-500 mb-10">
                                It’s usually a good time to talk.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-6">
                                <Link to="/contact" className="btn bg-[var(--color-primary)] text-white hover:bg-indigo-700 px-8 py-4">
                                    Start with a conversation
                                </Link>
                            </div>
                        </div>
                    </section>
                </div >
                );
};

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
