import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import TechStackMarquee from '../components/social/TechStackMarquee';

const Home = () => {
    return (
        <div className="font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
            <SEO
                title="B2B GTM & Sales Consulting | GTM-360"
                description="B2B GTM consulting for companies at the growth plateau. We find the real revenue constraint and fix the system — then the method keeps running. Former AWS COO. Series A–C."
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

            {/* HERO — aha in the first breath: it's a system problem, not a people problem */}
            <section className="pt-36 pb-28 bg-white">
                <div className="container max-w-3xl">
                    <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-6">GTM Consulting · B2B SaaS &amp; Technology · Series A–C</p>
                    <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-8 text-slate-900 leading-[1.08]">
                        Growth has slowed.<br />
                        You're not sure why.
                    </h1>
                    <p className="text-xl text-slate-500 mb-10 max-w-2xl font-light leading-relaxed">
                        The pipeline looks okay. The team is busy. But close rates are down, forecasts
                        keep moving, and every quarter feels like starting from scratch.{" "}
                        <span className="text-slate-800 font-medium">It's not a people problem — it's a
                        revenue system problem. And it's fixable.</span>
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

            {/* THE METHOD — one arc: diagnose, design, build, then it runs */}
            <section className="py-24 bg-white">
                <div className="container max-w-5xl">
                    <div className="max-w-2xl mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            What working with us looks like.
                        </h2>
                        <p className="text-lg text-slate-500 font-light leading-relaxed">
                            We work alongside your team — not above it. The method is simple: find what's
                            actually broken, fix it, build it, and then keep it running.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            {
                                step: "1 · Diagnose",
                                title: "Find what's actually broken",
                                desc: "Ten to fourteen days of evidence, not opinion. Most teams have already tried the obvious fix — the diagnosis is why it didn't work.",
                                link: "/start-here",
                                cta: "Start here →"
                            },
                            {
                                step: "2 · Design",
                                title: "Design the fix",
                                desc: "Redesign the parts of the revenue system causing the stall — ICP, pipeline, forecast, handoffs. Designed with your team, not for them.",
                                link: "/how-we-work",
                                cta: "See how →"
                            },
                            {
                                step: "3 · Build",
                                title: "Build it with you",
                                desc: "Specialists implement the changes — CRM, outbound, automation, reporting. You don't get a slide deck. You get a working system.",
                                link: "/how-we-work",
                                cta: "See services →"
                            },
                            {
                                step: "4 · Run",
                                title: "Then it runs continuously",
                                desc: "The operator system keeps the method working between engagements — the goal is set, the execution runs, specialists answer. You confirm the moves.",
                                link: "/system",
                                cta: "See the system →"
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
                        Most advisories hand you a roadmap and leave. We stay until it's working — then the system keeps it working.
                    </p>
                </div>
            </section>

            {/* THE SYSTEM — the method, running continuously (AI as infrastructure, not headline) */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="container max-w-5xl">
                    <div className="max-w-2xl mb-14">
                        <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-4">The Revenue Operating System</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            The method, running for you — 24/7.
                        </h2>
                        <p className="text-lg text-slate-400 font-light leading-relaxed">
                            AI doesn't run the show. It keeps the method running between engagements —
                            so the discipline we set up doesn't stop when we leave the room.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                href: "https://okr.gtm-360.com",
                                name: "Compass",
                                tagline: "Set the course",
                                desc: "Goals, OKRs, alignment, and confidence — one system for what winning looks like, checked in on weekly.",
                            },
                            {
                                href: "https://brain.gtm-360.com",
                                name: "Cockpit",
                                tagline: "Command the execution",
                                desc: "The agent swarm does the research, deal work, content, and weekly briefing — and only acts on your confirmation.",
                            },
                            {
                                href: "https://agents.gtm-360.com",
                                name: "Crew",
                                tagline: "Specialists on call",
                                desc: "Evidence-first specialist agents across strategy, sales, marketing, CS and RevOps, grounded in your data.",
                            },
                        ].map((p) => (
                            <a
                                key={p.name}
                                href={p.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border border-slate-700 rounded-xl p-7 hover:border-indigo-400 hover:bg-slate-800 transition-all"
                            >
                                <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-2">{p.name} · {p.tagline}</p>
                                <p className="text-slate-300 text-sm leading-relaxed">{p.desc}</p>
                            </a>
                        ))}
                    </div>
                    <p className="text-slate-500 text-sm italic mt-8 text-center">
                        The strategy you approve runs itself. You confirm the moves.
                    </p>
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