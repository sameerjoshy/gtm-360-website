import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { AGENT_PORTAL_URL, KNOWLEDGE_URL } from '../components/Header';

const challenges = [
    {
        to: "/problems/stalled-growth",
        title: "Growth has stalled",
        desc: "The team is executing. The number still isn't moving. Something in the system is capping it — and it's usually not the thing everyone is arguing about.",
    },
    {
        to: "/problems/pipeline-conversion",
        title: "The pipeline won't convert",
        desc: "It's full. It looks healthy. It just doesn't close — because the stages aren't earned and the qualification isn't real.",
    },
    {
        to: "/problems/forecast-volatility",
        title: "The forecast keeps moving",
        desc: "Every week the number changes and nobody trusts it. The board wants predictability; the team is guessing.",
    },
];

const offerings = [
    { to: "/services/gtm-operating-model", name: "GTM Operating Model", desc: "The full system — strategy to execution, wired to your data." },
    { to: "/services/pipeline-quality", name: "Pipeline Quality", desc: "Stage definitions, qualification, and the integrity that makes the number real." },
    { to: "/services/forecasting-governance", name: "Forecasting & Governance", desc: "One number the board can bet the quarter on." },
    { to: "/services/gtm-signals-and-ai", name: "GTM Signals & AI", desc: "The agentic layer that keeps the method running between engagements." },
];

const Home = () => {
    return (
        <div className="font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
            <SEO
                title="GTM-360 — GTM consulting that builds your revenue system"
                description="GTM consulting that builds your revenue system — then keeps it running. Strategy, playbooks, and an agentic engine grounded in operator experience. Former AWS COO. Series A–C."
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
                            "description": "GTM consulting firm that builds revenue systems — strategy first, then the agentic engine that runs the end-to-end go-to-market process.",
                            "founder": { "@type": "Person", "@id": "https://gtm-360.com/about#sameer" },
                            "serviceType": "GTM Consulting, Revenue Operating System",
                            "areaServed": "Worldwide",
                            "sameAs": ["https://www.linkedin.com/company/gtm-360"]
                        },
                        {
                            "@type": "WebSite",
                            "@id": "https://gtm-360.com/#website",
                            "url": "https://gtm-360.com",
                            "name": "GTM-360",
                            "publisher": { "@id": "https://gtm-360.com/#organization" }
                        },
                        {
                            "@type": "SoftwareApplication",
                            "name": "GTM-360 Agent Portal",
                            "applicationCategory": "BusinessApplication",
                            "operatingSystem": "Web",
                            "url": "https://agents.gtm-360.com",
                            "provider": { "@id": "https://gtm-360.com/#organization" },
                            "description": "Specialist agents that answer revenue questions with evidence — grounded in your data, with defined handoffs. AI is the engine; you confirm the moves."
                        },
                        {
                            "@type": "Person",
                            "@id": "https://gtm-360.com/about#sameer",
                            "name": "Sameer Joshi",
                            "jobTitle": "Founder & GTM Consultant",
                            "worksFor": { "@id": "https://gtm-360.com/#organization" },
                            "description": "20+ years running B2B revenue teams including roles at AWS and Dell. Founder of GTM-360.",
                            "sameAs": ["https://www.linkedin.com/in/sameer-joshi1/"]
                        }
                    ]
                })}</script>
            </Helmet>

            {/* HERO */}
            <section className="pt-36 pb-16 bg-white">
                <div className="container max-w-3xl">
                    <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-6">GTM Strategy · Playbooks · Agentic System · Series A–C</p>
                    <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-8 text-slate-900 leading-[1.08]">
                        Growth has slowed.<br />
                        You're not sure why.
                    </h1>
                    <p className="text-xl text-slate-500 mb-10 max-w-2xl font-light leading-relaxed">
                        The pipeline looks okay. The team is busy. But close rates are down, forecasts
                        keep moving, and every quarter feels like starting from scratch.{" "}
                        <span className="text-slate-800 font-medium">It's not a people problem — it's a
                        revenue system problem. We build the system that fixes it — then it keeps
                        running.</span>
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 mb-6">
                        <Link to="/start-here"
                            className="inline-flex items-center justify-center bg-slate-900 text-white px-8 py-4 rounded font-bold hover:bg-slate-700 transition-all">
                            Start with the diagnostic →
                        </Link>
                        <Link to="/how-we-work"
                            className="inline-flex items-center justify-center bg-white text-slate-600 border border-slate-200 px-8 py-4 rounded font-medium hover:bg-slate-50 transition-all">
                            How we work →
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
                    <p className="text-xs text-slate-400">Sameer's background is verifiable on <a href="https://www.linkedin.com/in/sameer-joshi1/" target="_blank" rel="noopener noreferrer" className="text-indigo-500 underline">LinkedIn</a>.</p>
                </div>
            </section>

            {/* CHALLENGES */}
            <section className="py-20 bg-slate-50 border-y border-slate-100">
                <div className="container max-w-5xl">
                    <div className="max-w-2xl mb-12">
                        <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-3">Challenges</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                            What we're called in for.
                        </h2>
                        <p className="text-lg text-slate-500 font-light leading-relaxed">
                            Three patterns, over and over. If one of these is you, we've seen it before.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {challenges.map((c) => (
                            <Link key={c.to} to={c.to}
                                className="bg-white border border-slate-200 rounded-xl p-7 hover:shadow-md hover:border-slate-300 transition-all flex flex-col">
                                <h3 className="text-lg font-bold text-slate-900 mb-3">{c.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed mb-5 flex-1">{c.desc}</p>
                                <span className="text-sm font-bold text-indigo-600">See how we fix it →</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* OFFERINGS */}
            <section className="py-20 bg-white">
                <div className="container max-w-5xl">
                    <div className="max-w-2xl mb-12">
                        <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-3">Offerings</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                            How we fix it.
                        </h2>
                        <p className="text-lg text-slate-500 font-light leading-relaxed">
                            Four ways in — from the full operating model to a single high-leverage fix.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {offerings.map((o) => (
                            <Link key={o.to} to={o.to}
                                className="border border-slate-200 rounded-xl p-7 hover:shadow-md hover:border-slate-300 transition-all">
                                <h3 className="text-lg font-bold text-slate-900 mb-2">{o.name}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{o.desc}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* HOW WE OPERATE — the funnel */}
            <section className="py-20 bg-slate-50 border-y border-slate-100">
                <div className="container max-w-5xl">
                    <div className="max-w-2xl mb-14">
                        <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-3">How we operate</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            What working with us looks like.
                        </h2>
                        <p className="text-lg text-slate-500 font-light leading-relaxed">
                            We work alongside your team — not above it. The method is simple: find what's
                            actually in the way, fix it, build it, and then keep it running.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {[
                            {
                                step: "1 · Diagnose",
                                title: "Find what's in the way",
                                desc: "Ten to fourteen days of evidence, not opinion. The real constraint — named, with receipts.",
                                link: "/start-here",
                                cta: "Start here →"
                            },
                            {
                                step: "2 · Build",
                                title: "Design and build the system",
                                desc: "Playbooks, process ownership, and the engine wired to your data. You don't get a slide deck. You get a working system.",
                                link: "/how-we-work",
                                cta: "See how →"
                            },
                            {
                                step: "3 · Run",
                                title: "It keeps running",
                                desc: "The loop runs between engagements. AI does the work, you confirm the moves.",
                                link: "/how-we-work",
                                cta: "See how →"
                            },
                            {
                                step: "4 · Grow",
                                title: "It gets better",
                                desc: "Every quarter, the learnings feed back. Better handoffs, better numbers.",
                                link: "/how-we-work",
                                cta: "See how →"
                            }
                        ].map((item, i) => (
                            <div key={i} className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md transition-all">
                                <p className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-2">{item.step}</p>
                                <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed mb-5">{item.desc}</p>
                                <Link to={item.link} className="text-indigo-600 font-bold text-sm hover:underline">{item.cta}</Link>
                            </div>
                        ))}
                    </div>
                    <p className="text-slate-400 text-sm italic mt-8 text-center">
                        Most advisories hand you a roadmap and leave. We build the revenue loop — and it keeps running after we do.
                    </p>
                </div>
            </section>

            {/* THE QUOTE — process before technology */}
            <section className="py-16 bg-white">
                <div className="container max-w-3xl text-center">
                    <blockquote className="text-2xl md:text-3xl font-light text-slate-800 leading-relaxed">
                        "The first rule of any technology used in a business is that automation applied to
                        an efficient operation will magnify the efficiency. The second is that automation
                        applied to an inefficient operation will magnify the inefficiency."
                    </blockquote>
                    <p className="text-sm text-slate-400 mt-4">— Bill Gates, <em>The Road Ahead</em>, 1995</p>
                    <p className="text-slate-500 text-sm mt-6 max-w-xl mx-auto">
                        This is why we start with the system, not the tools. A bad process automated is a
                        bad process, faster. We fix the process first — then the engine runs it.
                    </p>
                </div>
            </section>

            {/* RESULTS — the proof */}
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
                                from: "14%",
                                to: "22%",
                                metricLabel: "Win rate",
                                hook: "The pipeline was full. Revenue was flat. Nobody could explain why.",
                                slug: "/insights/case-studies/pipeline-full-revenue-flat"
                            },
                            {
                                tag: "Forecasting",
                                from: "58%",
                                to: "84%",
                                metricLabel: "Forecast accuracy",
                                hook: "The board wanted predictability. The team was guessing every week.",
                                slug: "/insights/case-studies/forecast-board-wanted-predictability"
                            },
                            {
                                tag: "GTM Alignment",
                                from: "94",
                                to: "58",
                                metricLabel: "Sales cycle (days)",
                                hook: "Sales cycles had doubled. Nobody had noticed the ICP had quietly changed.",
                                slug: "/insights/case-studies/sales-cycle-doubled-icp-drift"
                            }
                        ].map((cs, i) => (
                            <div key={i} className="bg-white border border-slate-200 rounded-xl p-8 hover:shadow-md hover:border-slate-300 transition-all flex flex-col">
                                <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-5 block">{cs.tag}</span>
                                <div className="mb-5 flex items-end gap-3">
                                    <span className="text-2xl font-bold text-slate-300 line-through">{cs.from}</span>
                                    <span className="text-4xl font-bold text-slate-900">{cs.to}</span>
                                    <span className="text-sm text-slate-400 mb-1">{cs.metricLabel}</span>
                                </div>
                                <h3 className="text-base font-bold text-slate-900 mb-3 leading-snug">{cs.hook}</h3>
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

            {/* THE TWO ENTRIES */}
            <section className="py-20 bg-white">
                <div className="container max-w-5xl">
                    <div className="max-w-2xl mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                            Two ways in — the tools and the thinking.
                        </h2>
                        <p className="text-lg text-slate-500 font-light leading-relaxed">
                            Run the specialist agents yourself, or read the whole method behind them.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <a href={AGENT_PORTAL_URL}
                            className="bg-slate-900 text-white rounded-xl p-8 hover:bg-slate-800 transition-all">
                            <p className="text-xs font-bold uppercase tracking-widest mb-3 text-slate-400">The tools</p>
                            <h3 className="text-2xl font-bold mb-3">Agent Portal →</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Specialist agents that answer revenue questions with evidence — grounded in your
                                data, with defined handoffs.
                            </p>
                        </a>
                        <Link to={KNOWLEDGE_URL}
                            className="bg-blue-600 text-white rounded-xl p-8 hover:bg-blue-700 transition-all">
                            <p className="text-xs font-bold uppercase tracking-widest mb-3 text-blue-200">The thinking</p>
                            <h3 className="text-2xl font-bold mb-3">Knowledge →</h3>
                            <p className="text-blue-100 text-sm leading-relaxed">
                                The operating model, playbooks, and a plain-English guide to every agent. The whole
                                method, written down.
                            </p>
                        </Link>
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="container max-w-2xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Start with the diagnostic.
                    </h2>
                    <p className="text-xl text-slate-400 mb-4 font-light leading-relaxed">
                        A standalone 10–14 day engagement to find the real constraint. Tell us what's
                        happening — we'll tell you honestly whether we can help.
                    </p>
                    <p className="text-slate-500 mb-12 text-sm">Goes directly to a partner. Not a CRM queue.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/start-here"
                            className="inline-flex items-center justify-center bg-white text-slate-900 px-10 py-4 rounded font-bold hover:bg-slate-100 transition-all">
                            Talk to us →
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
