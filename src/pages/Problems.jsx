import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, AlertCircle, BarChart2, Activity, PieChart, Users, MessageSquare, Target, Cpu } from 'lucide-react';
import MisdiagnosisCycle from '../components/visuals/MisdiagnosisCycle';

const Problems = () => {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Common GTM Problems in B2B Growth",
        "about": {
            "@type": "Thing",
            "name": "Go-to-Market failures, revenue predictability, misdiagnosis"
        },
        "description": "The most common B2B revenue problems: pipeline not converting, forecast volatility, stalled growth. We fix the real constraint, not the symptom."
    };

    const symptoms = [
        {
            icon: <Activity className="w-7 h-7 text-slate-900" />,
            title: "Pipeline is growing, but revenue isn't",
            slug: "/problems/stalled-growth",
            desc: "More leads and more activity haven't moved the number. This usually means pipeline is measuring rep activity, not buyer commitment — and coverage is inflated."
        },
        {
            icon: <Target className="w-7 h-7 text-slate-900" />,
            title: "Win rates are falling",
            slug: "/problems/pipeline-conversion",
            desc: "Deals are entering but closing less often. Usually points to ICP drift, messaging that doesn't match the buyer, or no clear owner of the purchase decision."
        },
        {
            icon: <BarChart2 className="w-7 h-7 text-slate-900" />,
            title: "Forecasts keep moving",
            slug: "/problems/forecast-volatility",
            desc: "The number changes every week and nobody fully trusts it. Forecast volatility is almost always downstream of a stage definition problem, not a data problem."
        },
        {
            icon: <PieChart className="w-7 h-7 text-slate-900" />,
            title: "Sales cycles keep getting longer",
            slug: "/problems/pipeline-conversion",
            desc: "Deals move, but slower and less predictably than before. Longer cycles usually mean the wrong person is in the room — not that the deal is complex."
        },
        {
            icon: <Users className="w-7 h-7 text-slate-900" />,
            title: "Marketing and sales disagree on lead quality",
            slug: "/problems/stalled-growth",
            desc: "Leads look fine in dashboards but break down in execution. This is almost never a team alignment issue — it's a system definition issue."
        },
        {
            icon: <MessageSquare className="w-7 h-7 text-slate-900" />,
            title: "Messaging isn't landing in actual deals",
            slug: "/problems/pipeline-conversion",
            desc: "The positioning sounds strong internally. Buyers aren't feeling urgency. Usually a problem-ownership mismatch — your message describes a problem nobody owns."
        },
        {
            icon: <AlertCircle className="w-7 h-7 text-slate-900" />,
            title: "RevOps dashboards don't drive decisions",
            slug: "/problems/forecast-volatility",
            desc: "Metrics are everywhere. Decisions still rely on gut feel. This means signals are being tracked without a governing model — so nobody knows what to act on."
        },
        {
            icon: <Cpu className="w-7 h-7 text-slate-900" />,
            title: "More tools made things noisier, not clearer",
            slug: "/problems/stalled-growth",
            desc: "The stack grew. The clarity didn't. AI and tooling amplify whatever system is underneath — they don't correct a misdiagnosis."
        }
    ];

    return (
        <div className="min-h-screen bg-white font-sans">
            <Helmet>
                <title>Why B2B Growth Stalls Even When Teams Execute | GTM-360</title>
                <meta name="description" content="The patterns we see most often in B2B companies at the growth plateau. Most persist because teams are solving the wrong problem." />
                <link rel="canonical" href="https://gtm-360.com/problems" />
                <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
            </Helmet>

            {/* HERO */}
            <section className="pt-32 pb-20 bg-white border-b border-slate-100">
                <div className="container max-w-3xl">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                        The team is executing.<br />The number still isn't moving.
                    </h1>
                    <p className="text-xl text-slate-500 font-light leading-relaxed mb-8">
                        These are the patterns we see most often in B2B companies between $5M and $40M ARR. In almost every case, the root cause isn't effort. It's that the problem being solved isn't the real one.
                    </p>
                    <div className="p-6 bg-slate-50 border-l-4 border-slate-900 rounded-r">
                        <p className="text-slate-700 leading-relaxed">
                            We're not saying your team is underperforming. We're saying capable teams regularly execute against an incomplete diagnosis — and that's a system problem, not a people problem.
                        </p>
                    </div>
                </div>
            </section>

            {/* SYMPTOM GRID */}
            <section className="py-20 bg-white">
                <div className="container max-w-6xl">
                    <h2 className="text-2xl font-bold text-slate-900 mb-12">What we see most often.</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                        {symptoms.map((symptom, index) => (
                            <Link
                                key={index}
                                to={symptom.slug}
                                className="group block bg-white border border-slate-200 p-7 rounded-xl hover:border-slate-900 hover:shadow-md transition-all duration-200"
                            >
                                <div className="mb-5 group-hover:scale-110 transition-transform duration-200">
                                    {symptom.icon}
                                </div>
                                <h3 className="text-base font-bold text-slate-900 mb-3 leading-snug">
                                    {symptom.title}
                                </h3>
                                <p className="text-slate-500 text-sm leading-relaxed mb-5">
                                    {symptom.desc}
                                </p>
                                <span className="flex items-center text-slate-900 font-bold text-xs uppercase tracking-wider group-hover:underline">
                                    See the pattern <ArrowRight size={13} className="ml-1.5" />
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHY THESE PERSIST */}
            <section className="py-20 bg-slate-50 border-y border-slate-100">
                <div className="container max-w-4xl">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Why these patterns persist.</h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-10">
                        The default response to stalled growth is to increase effort. More pipeline. More tools. More process. More pressure on the team. And when that doesn't work — more of the same.
                    </p>
                    <div className="mb-10">
                        <MisdiagnosisCycle />
                    </div>
                    <p className="text-lg text-slate-800 font-medium leading-relaxed">
                        When the underlying constraint is misunderstood, additional effort compounds the problem. You end up doing more of what isn't working — faster.
                    </p>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-white">
                <div className="container max-w-3xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Start with the right diagnosis.</h2>
                    <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                        Before another hire, tool, or execution push — we find out what's actually in the way. The diagnostic is a short conversation. We tell you honestly what we think is broken and whether it's something we can fix.
                    </p>
                    <p className="text-slate-500 mb-10 text-sm">No proposal until you've asked for one.</p>
                    <Link to="/start-here" className="inline-flex items-center justify-center bg-slate-900 text-white px-8 py-4 rounded font-bold hover:bg-slate-700 transition-all">
                        Talk to us about what you're seeing
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Problems;
