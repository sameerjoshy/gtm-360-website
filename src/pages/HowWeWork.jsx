import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import PlanningCycleMinimal from '../components/visuals/PlanningCycleMinimal';
import EngagementTimeline from '../components/visuals/EngagementTimeline';

const HowWeWork = () => {
    return (
        <div className="min-h-screen bg-white font-sans">
            <SEO
                title="GTM Consulting Process: Diagnose, Build, Run, Grow | GTM-360"
                description="How GTM-360 works: diagnose the real constraint, build the revenue system (playbooks + engines wired to your data), run it continuously, and grow. The system keeps working after we leave."
                canonical="https://gtm-360.com/how-we-work"
            />
            <Helmet>
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "HowTo",
                    "name": "How GTM-360 Works: B2B GTM Consulting + Revenue System",
                    "description": "A four-stage model — Diagnose, Build, Run, Grow — that starts with diagnosis, builds the revenue system, and keeps it running after we leave.",
                    "step": [
                        {
                            "@type": "HowToStep",
                            "position": 1,
                            "name": "Diagnose",
                            "text": "A standalone 10–14 day engagement to identify the real revenue constraint. Output: a constraint diagnosis with evidence."
                        },
                        {
                            "@type": "HowToStep",
                            "position": 2,
                            "name": "Build",
                            "text": "Architecture and engineering. We design the fix, develop the playbooks and process ownership, and wire the five engines to your data. Output: a working revenue system."
                        },
                        {
                            "@type": "HowToStep",
                            "position": 3,
                            "name": "Run",
                            "text": "The system keeps running between engagements. AI does the work, you confirm every move. Strategy, marketing, sales, expansion, operations — the loop runs continuously."
                        },
                        {
                            "@type": "HowToStep",
                            "position": 4,
                            "name": "Grow",
                            "text": "Every quarter the learnings feed back. New engines, deeper handoffs, better numbers."
                        }
                    ]
                })}</script>
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        { "@type": "Question", "name": "How long does a GTM consulting engagement take?", "acceptedAnswer": { "@type": "Answer", "text": "The Diagnostic phase is a standalone 10–14 day engagement. Architecture typically runs 3–6 weeks. Engineering runs 6–16 weeks. Most companies start with the Diagnostic only." } },
                        { "@type": "Question", "name": "What does the GTM diagnostic cover?", "acceptedAnswer": { "@type": "Answer", "text": "The diagnostic reviews ICP definition, pipeline stage criteria, forecast governance, GTM alignment between marketing/sales/CS, and any AI or tooling in the motion. Output is a written constraint diagnosis." } },
                        { "@type": "Question", "name": "What is the difference between a GTM consultant and a fractional CRO?", "acceptedAnswer": { "@type": "Answer", "text": "A fractional CRO provides ongoing executive revenue leadership. A GTM consultant runs defined diagnostic and design engagements with specific deliverables and end dates. GTM-360 runs engagements, not ongoing placements." } }
                    ]
                })}</script>
            </Helmet>

            {/* HERO */}
            <section className="pt-32 pb-20 bg-white border-b border-slate-100">
                <div className="container max-w-3xl">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                        We build your revenue system.<br />Then it keeps running.
                    </h1>
                    <p className="text-xl text-slate-500 font-light leading-relaxed">
                        Think of us as a senior GTM partner — someone who's been in these conversations before, knows what to look for, and works with your team to fix what's actually in the way. Diagnose. Build. Run. Grow.
                    </p>
                </div>
            </section>

            {/* THE THREE PHASES */}
            <section className="py-20 bg-white">
                <div className="container max-w-4xl space-y-6">

                    {[
                        {
                            phase: "1 · Diagnose",
                            color: "emerald",
                            title: "Find what's actually in the way",
                            duration: "10–14 days · $15K",
                            body: "Before we touch anything, we find the real constraint — not the obvious one. Most teams have already tried the obvious fix. It hasn't worked because the diagnosis was wrong.\n\nWe spend 10 to 14 days examining how your revenue system actually behaves: pipeline quality, where deals stall, whether your ICP still matches who you're selling to, and whether your forecast reflects reality. Strategy agents (Diagnostic, ICP Clarifier, Planning Cycle) do the evidence work alongside us.\n\nYou get a clear read on what's actually in the way. No obligation to continue.",
                            gets: ["The real constraint, clearly named", "Why previous fixes didn't stick", "What needs to change first — and what can wait"],
                            link: "/start-here",
                            cta: "Start with the diagnostic"
                        },
                        {
                            phase: "2 · Build",
                            color: "indigo",
                            title: "Design and build the system",
                            duration: "$75K core · $150K full",
                            body: "Once we know the constraint, we design the fix and build it. The playbooks and process ownership come first — who owns what, how work hands off. Then the five engines get wired to your data: Marketing attracts, Sales converts, Expansion grows, Operations validates.\n\nYou don't get a slide deck. You get a working revenue system your team understands and can operate — with the agents doing the routine work behind it.",
                            gets: ["Playbooks and process ownership defined", "The five engines wired to your data", "Handoffs with defined gates", "The metrics that actually matter"],
                            link: "/start-here",
                            cta: "Talk about your situation"
                        },
                        {
                            phase: "3 · Run",
                            color: "violet",
                            title: "It keeps running",
                            duration: "$4–8K / month",
                            body: "After the build, the loop runs between engagements. Strategy aims, Marketing attracts, Sales converts, Expansion grows, Operations validates — AI does the work, you confirm every move.\n\nThis is the part most firms can't offer. They hand you a roadmap and leave. We built the system, so it can stay.",
                            gets: ["The loop running on your data", "Weekly agent work, your approval", "Quarterly operator review", "The discipline doesn't stop when we leave"],
                            link: "/system",
                            cta: "See the system"
                        },
                        {
                            phase: "4 · Grow",
                            color: "rose",
                            title: "It gets better",
                            duration: "Expansion",
                            body: "Every quarter, the learnings feed back — what retained, what churned, what grew, what the numbers said. The loop enhances next quarter's strategy.\n\nNew engines, deeper handoffs, better numbers. The system compounds.",
                            gets: ["Quarterly learning loop", "New agents as the roadmap ships", "Deeper automation on proven handoffs", "Numbers that keep getting more trustworthy"],
                            link: "/engine",
                            cta: "Explore the engine"
                        }
                    ].map((phase, i) => (
                        <div key={i} className={`bg-white rounded-xl p-8 md:p-10 border border-slate-200 hover:border-${phase.color}-200 transition-colors`}>
                            <div className="flex flex-wrap items-center gap-3 mb-5">
                                <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">{phase.phase}</span>
                                <span className={`text-xs font-bold text-${phase.color}-600 uppercase tracking-widest`}>·</span>
                                <span className="text-xs text-slate-400">{phase.duration}</span>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-5">{phase.title}</h3>
                            {phase.body.split('\n\n').map((para, j) => (
                                <p key={j} className="text-slate-600 leading-relaxed mb-4">{para}</p>
                            ))}
                            <div className="mt-6 pt-6 border-t border-slate-100">
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">What you get</p>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                    {phase.gets.map((g, j) => (
                                        <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                                            <span className={`text-${phase.color}-500 font-bold mt-0.5`}>✓</span> {g}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-6">
                                <Link to={phase.link} className={`text-${phase.color}-700 font-bold text-sm hover:underline`}>{phase.cta} →</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* HOW WE THINK */}
            <section className="py-20 bg-slate-50 border-y border-slate-100">
                <div className="container max-w-5xl">

                    {/* Timeline visual */}
                    <div className="mb-16">
                        <EngagementTimeline />
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">How we think about every engagement</h2>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                Every conversation we have — whether it's a diagnostic call or a quarterly review — starts from the same five questions. It keeps us honest and stops us from jumping to solutions before we've understood the problem.
                            </p>
                            <div className="space-y-3">
                                {["Where are we, really?", "How did we get here?", "Where could we be?", "How do we get there?", "Are we getting there?"].map((q, i) => (
                                    <div key={i} className="flex items-center gap-4">
                                        <span className="text-sm font-bold text-slate-200 w-5">{i + 1}</span>
                                        <span className="text-slate-700">{q}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 flex justify-center">
                            <PlanningCycleMinimal />
                        </div>
                    </div>
                </div>
            </section>

            {/* SERVICES */}
            <section className="py-20 bg-white border-t border-slate-100">
                <div className="container max-w-5xl">
                    <div className="max-w-xl mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-3">What the Build wires up.</h2>
                        <p className="text-slate-500 leading-relaxed">Each engagement is scoped to the constraint we found in the Diagnostic. These are the four areas we work in.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {[
                            {
                                title: "GTM Operating Model",
                                desc: "Align strategy, roles, handoffs, and KPIs into a single system. Fix the friction between marketing, sales, and customer success that kills velocity.",
                                link: "/services/gtm-operating-model"
                            },
                            {
                                title: "Pipeline & Deal Quality",
                                desc: "Rebuild stage definitions around buyer commitment, not seller activity. Fix the inflated pipeline that produces optimistic forecasts and missed targets.",
                                link: "/services/pipeline-quality"
                            },
                            {
                                title: "Forecasting & Governance",
                                desc: "Replace gut-feel forecasts with a model that reflects how deals actually move. Install the governance that keeps it honest over time.",
                                link: "/services/forecasting-governance"
                            },
                            {
                                title: "GTM Signals & AI",
                                desc: "Audit your stack, reduce noise, and wire AI to actual decisions. Tools should amplify good judgment — not replace it or add confusion.",
                                link: "/services/gtm-signals-and-ai"
                            }
                        ].map((s, i) => (
                            <Link key={i} to={s.link}
                                className="group border border-slate-200 rounded-xl p-7 hover:border-slate-900 hover:shadow-md transition-all block">
                                <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-indigo-700 transition-colors">{s.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed mb-4">{s.desc}</p>
                                <span className="text-xs font-bold text-slate-400 group-hover:text-slate-900 transition-colors">See details →</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>


            {/* FAQ */}
            <section className="py-20 bg-slate-50 border-t border-slate-100">
                <div className="container max-w-3xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-10">How GTM-360 engagements work — common questions</h2>
                    <div className="space-y-8">
                        {[
                            { q: "How long does a GTM engagement take?", a: "The Diagnostic is a standalone 10–14 day engagement. The Build runs 6–16 weeks depending on scope. Most companies start with the Diagnostic only — it produces a findings report and a clear recommendation. After the build, the system runs continuously — that's the Run tier, where the discipline we set up keeps working between engagements." },
                            { q: "What does the GTM diagnostic actually cover?", a: "The diagnostic reviews ICP definition and pipeline fit, stage criteria (buyer evidence vs seller activity), forecast governance and accuracy, alignment between marketing, sales, and CS, and any AI or tooling in the motion. The output is a written constraint diagnosis — what's actually blocking growth and why." },
                            { q: "Do you work with companies that already have a CRO or VP of Sales?", a: "Yes — most of our engagements are with companies that already have a revenue leader. We work alongside existing leadership as an independent diagnostic and design partner, not as a replacement. Many CROs and VPs of Sales use the diagnostic as an independent verification of their own read of the system — particularly when they're new to the role and need an external view before making changes." },
                            { q: "What's the difference between a GTM consultant and a fractional CRO?", a: "A fractional CRO provides ongoing executive revenue leadership. A GTM consultant runs defined diagnostic and design engagements with specific deliverables and end dates. GTM-360 runs engagements that end in a working system — and then the system keeps running. The output is a working revenue loop, not an executive relationship." },
                            { q: "How do you measure whether the engagement worked?", a: "We define success metrics before the engagement starts, tied to the constraint. Pipeline work: win rate and forecast accuracy. Operating model work: cycle length and MQL-to-revenue conversion. Forecasting work: forecast accuracy variance. 'It worked' is always written down." }
                        ].map((item, i) => (
                            <div key={i} className="border-b border-slate-200 pb-8 last:border-0">
                                <h3 className="text-base font-bold text-slate-900 mb-3">{item.q}</h3>
                                <p className="text-slate-600 leading-relaxed text-sm">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* CTA */}
            <section className="py-20 bg-white text-center">
                <div className="container max-w-2xl">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Not sure which phase applies to you?</h2>
                    <p className="text-slate-500 mb-10">Most engagements start with a conversation. Tell us what's happening and we'll tell you what we'd suggest.</p>
                    <Link to="/start-here" className="inline-flex items-center justify-center bg-slate-900 text-white px-8 py-4 rounded font-bold hover:bg-slate-700 transition-all">
                        Start with the diagnostic →
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default HowWeWork;
