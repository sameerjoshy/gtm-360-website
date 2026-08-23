import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import GrowthStallChart from '../components/visuals/GrowthStallChart';
import TechStackMarquee from '../components/social/TechStackMarquee';

const Home = () => {
    return (
        <div className="font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
            <SEO
                title="B2B GTM & Sales Consulting | GTM-360"
                description="B2B GTM consulting for companies at the growth plateau. We find the real revenue constraint and fix the system. Former AWS COO. Series A–C."
                canonical="https://gtm-360.com/"
            />
            <Helmet>
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": ["Organization", "ProfessionalService"],
                            "@id": "https://gtm-360.com/#organization",
                            "name": "GTM-360",
                            "url": "https://gtm-360.com",
                            "logo": "https://gtm-360.com/og-image.png",
                            "description": "B2B GTM consulting firm specialising in revenue system diagnostics and fixes for SaaS companies at the growth plateau.",
                            "founder": { "@type": "Person", "@id": "https://gtm-360.com/about#sameer" },
                            "serviceType": "GTM Consulting",
                            "areaServed": "Worldwide",
                            "sameAs": ["https://www.linkedin.com/company/gtm-360"]
                        },
                        {
                            "@type": "WebSite",
                            "@id": "https://gtm-360.com/#website",
                            "url": "https://gtm-360.com",
                            "name": "GTM-360",
                            "publisher": { "@id": "https://gtm-360.com/#organization" }
                        }
                    ]
                })}</script>
            </Helmet>

            {/* HERO — plain, direct, human */}
            <section className="pt-36 pb-28 bg-white">
                <div className="container max-w-3xl">
                    <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-6">GTM Consulting · B2B SaaS &amp; Technology · Series A–C</p>
                    <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-8 text-slate-900 leading-[1.08]">
                        Growth has slowed.<br />
                        You're not sure why.
                    </h1>
                    <p className="text-xl text-slate-500 mb-10 max-w-2xl font-light leading-relaxed">
                        The pipeline numbers look okay. The team is busy. But close rates are down, forecasts keep moving, and every quarter feels like you're starting from scratch.
                    </p>
                    <p className="text-lg text-slate-800 font-medium mb-12 max-w-xl">
                        We've seen this before. It's not a people problem — it's a revenue system problem. And it's fixable.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 mb-6">
                        <Link to="/start-here"
                            className="inline-flex items-center justify-center bg-slate-900 text-white px-8 py-4 rounded font-bold hover:bg-slate-700 transition-all">
                            Start with the diagnostic →
                        </Link>
                        <Link to="/insights"
                            className="inline-flex items-center justify-center bg-white text-slate-600 border border-slate-200 px-8 py-4 rounded font-medium hover:bg-slate-50 transition-all">
                            See how we think →
                        </Link>
                    </div>
                    <div className="border border-slate-200 rounded-lg p-5 mb-4 bg-slate-50">
                        <p className="text-sm font-semibold text-slate-800">
                            You talk to the person who does the work — not a sales rep, not a CRM queue.
                        </p>
                        <p className="text-xs text-slate-500 mt-1">
                            Operator-led practice. Ran GTM at AWS and Dell. Series A–C, B2B SaaS &amp; technology.
                        </p>
                    </div>
                    <p className="text-xs text-slate-400">Sameer's background is verifiable on <a href="https://www.linkedin.com/in/sameer-joshi1/" target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:underline">LinkedIn</a>.</p>
                </div>
            </section>

            {/* TOOLS MARQUEE */}
            <TechStackMarquee />

            {/* THE SITUATION — mirrors the board conversation */}
            <section className="py-24 bg-slate-50 border-y border-slate-100">
                <div className="container max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                                What the board is asking. What the team is feeling.
                            </h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                You built something that worked. Founder-led sales got you to $5M. You hired a team and got to $10M. Now the same playbook isn't producing the same results — and nobody can quite explain why.
                            </p>
                            <div className="space-y-4 mb-8">
                                {[
                                    "Marketing is generating leads. Sales says they're not quality.",
                                    "Deals are in the pipeline. They're just not closing at the same rate.",
                                    "The forecast changes every week. Nobody fully trusts it.",
                                    "You've added tools, headcount, process. Growth is still flat.",
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2.5 flex-shrink-0"></span>
                                        <span className="text-slate-600">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="p-6 bg-white rounded-lg border-l-4 border-slate-900 shadow-sm">
                                <p className="text-slate-800 font-medium">The team isn't underperforming. The system they're working in hasn't kept up with where the business is now.</p>
                            </div>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
                            <GrowthStallChart />
                            <p className="text-center text-sm text-slate-400 mt-4 italic">Same effort. Different results. The model has hit its ceiling.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* HOW WE WORK — simple, no jargon */}
            <section className="py-24 bg-white">
                <div className="container max-w-5xl">
                    <div className="max-w-2xl mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            What working with us looks like.
                        </h2>
                        <p className="text-lg text-slate-500 font-light leading-relaxed">
                            We work alongside your team — not above it. Think of us as a senior GTM partner who's been in the room before and knows what to look for.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                step: "First",
                                title: "We find what's actually broken",
                                desc: "Not what looks broken on the surface. Most teams are fixing the wrong thing — more pipeline, more tools, more pressure. We diagnose the real constraint before anything else.",
                                link: "/start-here",
                                cta: "Start here →"
                            },
                            {
                                step: "Then",
                                title: "We design the fix",
                                desc: "Once we know the constraint, we redesign the parts of the revenue system that are causing it — pipeline structure, ICP definition, handoffs, how you run your forecast calls.",
                                link: "/how-we-work",
                                cta: "See how →"
                            },
                            {
                                step: "Then",
                                title: "We build it with you",
                                desc: "Our specialists implement the changes — CRM, outbound, automation, reporting. You don't get a slide deck. You get a working system.",
                                link: "/how-we-work",
                                cta: "See services →"
                            }
                        ].map((item, i) => (
                            <div key={i} className="border border-slate-200 rounded-xl p-8 hover:shadow-md transition-all">
                                <p className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-2">{item.step}</p>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed mb-6">{item.desc}</p>
                                <Link to={item.link} className="text-indigo-600 font-bold text-sm hover:underline">{item.cta}</Link>
                            </div>
                        ))}
                    </div>
                    <p className="text-slate-400 text-sm italic mt-8 text-center">
                        Most advisories hand you a roadmap and leave. We stay until it's working.
                    </p>
                </div>
            </section>

            {/* STRATEGY → AI EXECUTION */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="container max-w-5xl">
                    <div className="max-w-2xl mb-14">
                        <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-4">The operator system</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Strategy is the plan. AI is the execution.
                        </h2>
                        <p className="text-lg text-slate-400 font-light leading-relaxed">
                            We develop the strategy with you. Then it runs inside our operator
                            system — agentic AI executes the support work between engagements, so the
                            discipline we set up doesn't stop when we leave the room.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                href: "https://okr.gtm-360.com",
                                name: "Compass",
                                desc: "Set the course. Goals, OKRs, alignment, and confidence — one system for what winning looks like, checked in on weekly.",
                            },
                            {
                                href: "https://brain.gtm-360.com",
                                name: "Cockpit",
                                desc: "Command the execution. The agent swarm does the research, deal work, content, and weekly briefing — and only acts on your confirmation.",
                            },
                            {
                                href: "https://agents.gtm-360.com",
                                name: "Crew",
                                desc: "Specialists on call. Evidence-first agents across strategy, sales, marketing, CS and RevOps, grounded in your data.",
                            },
                        ].map((p) => (
                            <a
                                key={p.name}
                                href={p.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border border-slate-700 rounded-xl p-7 hover:border-indigo-400 hover:bg-slate-800 transition-all"
                            >
                                <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-2">{p.name}</p>
                                <p className="text-slate-300 text-sm leading-relaxed">{p.desc}</p>
                            </a>
                        ))}
                    </div>
                    <p className="text-slate-500 text-sm italic mt-8 text-center">
                        The strategy you approve runs itself. You confirm the moves.
                    </p>
                </div>
            </section>

            {/* AGENT SUITE */}
            <section className="py-24 bg-white">
                <div className="container max-w-5xl">
                    <div className="max-w-xl mb-14">
                        <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-4">The Crew · The method, live</p>
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">
                            The questions we ask before we touch anything.
                        </h2>
                        <p className="text-slate-500 font-light">
                            Six questions. Six answers, with evidence. This is how we diagnose a
                            revenue system — you can run it yourself on a sample workspace.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            ["Which companies are worth pursuing?", "Prospect Researcher — ARR, ICP fit, funding, signals, and the opener that works."],
                            ["Is our pipeline data trustworthy?", "CRM Hygiene — stale deals, missing fields, and the fixes. A score, not a lecture."],
                            ["What's really happening with this deal?", "Deal Intelligence — stakeholders, readiness, risk, and the next move."],
                            ["Do we have anything worth saying?", "Content Studio — raw observation to a QC-scored draft in your voice."],
                            ["Where does the system stand?", "Weekly Briefing — pipeline pulse, OKRs, flags, and the one thing that matters."],
                            ["Who's showing buying intent right now?", "Outbound Engine — signals become a three-step sequence. Evidence first."],
                        ].map(([question, answer], i) => (
                            <div key={i} className="border border-slate-200 rounded-xl p-7 hover:border-indigo-200 hover:shadow-sm transition-all">
                                <p className="text-xs font-mono text-indigo-500 mb-2">"{question}"</p>
                                <p className="text-sm text-slate-500 leading-relaxed">{answer}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-12 flex flex-col sm:flex-row items-start gap-4">
                        <a href="https://brain.gtm-360.com" className="inline-flex items-center justify-center bg-slate-900 text-white px-8 py-4 rounded font-bold hover:bg-slate-700 transition-all">
                            Run them in the Cockpit →
                        </a>
                        <Link to="/agents" className="inline-flex items-center justify-center border border-slate-200 text-slate-600 px-8 py-4 rounded font-medium hover:bg-slate-50 transition-all">
                            See the six questions
                        </Link>
                    </div>
                </div>
            </section>

            {/* CASE STUDIES */}
            <section className="py-24 bg-slate-50 border-y border-slate-100">
                <div className="container max-w-5xl">
                    <div className="max-w-xl mb-14">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">What we've fixed for others.</h2>
                        <p className="text-slate-500 font-light">Companies anonymised by request. Every number is real — context available on a call.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                tag: "Pipeline Quality",
                                metric: "14% → 22%",
                                metricLabel: "Win rate",
                                hook: "The pipeline was full. Revenue was flat. Nobody could explain why.",
                                context: "$14M ARR. 4.1× pipeline coverage. Eighteen months below target. The problem wasn't the team — it was that stage criteria measured rep activity, not buyer commitment.",
                                slug: "/insights/case-studies/pipeline-full-revenue-flat"
                            },
                            {
                                tag: "Forecasting",
                                metric: "58% → 84%",
                                metricLabel: "Forecast accuracy",
                                hook: "The board wanted predictability. The team was guessing every week.",
                                context: "$22M ARR, Series B. Eight reps, eight different definitions of 'Commit.' The forecast was averaging incompatible inputs and calling it a number.",
                                slug: "/insights/case-studies/forecast-board-wanted-predictability"
                            },
                            {
                                tag: "GTM Alignment",
                                metric: "94 → 58 days",
                                metricLabel: "Sales cycle",
                                hook: "Sales cycles had doubled. Nobody had noticed the ICP had quietly changed.",
                                context: "$9M ARR. The product was built for operations buyers. Eighteen months of inbound had filled the pipeline with finance and HR buyers instead. Nobody had looked.",
                                slug: "/insights/case-studies/sales-cycle-doubled-icp-drift"
                            }
                        ].map((cs, i) => (
                            <div key={i} className="bg-white border border-slate-200 rounded-xl p-8 hover:shadow-md hover:border-slate-300 transition-all flex flex-col">
                                <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-5 block">{cs.tag}</span>
                                <div className="mb-5">
                                    <span className="text-3xl font-bold text-slate-900">{cs.metric}</span>
                                    <span className="text-sm text-slate-400 ml-2">{cs.metricLabel}</span>
                                </div>
                                <h3 className="text-base font-bold text-slate-900 mb-3 leading-snug">{cs.hook}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">{cs.context}</p>
                                <Link
                                    to={cs.slug}
                                    className="text-sm font-bold text-slate-900 hover:text-indigo-700 transition-colors pt-4 border-t border-slate-100 inline-flex items-center gap-1"
                                >
                                    Read the full story →
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FINAL CTA — conversational */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="container max-w-2xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Start with the diagnostic.
                    </h2>
                    <p className="text-xl text-slate-400 mb-4 font-light leading-relaxed">
                        A standalone 10–14 day engagement to find the real constraint. Tell us what's happening — we'll tell you honestly whether we can help.
                    </p>
                    <p className="text-slate-500 mb-12 text-sm">Goes directly to a partner. Not a CRM queue.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/start-here"
                            className="inline-flex items-center justify-center bg-white text-slate-900 px-10 py-4 rounded font-bold hover:bg-slate-100 transition-all">
                            Start with the diagnostic →
                        </Link>
                        <Link to="/resources/gtm-diagnostic-checklist"
                            className="inline-flex items-center justify-center bg-transparent text-slate-400 border border-slate-700 px-8 py-4 rounded font-medium hover:border-slate-500 hover:text-slate-300 transition-all">
                            Self-assess first →
                        </Link>
                    </div>
                    <p className="text-slate-600 text-xs mt-4">Not ready to talk? Run the 24-point checklist yourself.</p>
                </div>
            </section>
        </div>
    );
};

export default Home;
