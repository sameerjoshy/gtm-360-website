import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

/**
 * /offerings — the index of what we sell. Parent of the four service pages,
 * with "How we operate" as the method sibling.
 */

const offerings = [
    {
        to: "/services/gtm-operating-model",
        name: "GTM Operating Model",
        desc: "The full system — strategy, positioning, process, and ownership — designed and built around your data, then run.",
        for: "Teams that need the whole revenue system rebuilt, not one fix.",
    },
    {
        to: "/services/pipeline-quality",
        name: "Pipeline Quality",
        desc: "Stage definitions, qualification criteria, and pipeline integrity so the number means something.",
        for: "Full pipeline, flat revenue — where 'how did that close?' is a real question.",
    },
    {
        to: "/services/forecasting-governance",
        name: "Forecasting & Governance",
        desc: "One number the board can bet the quarter on, with the cadence and the rules that keep it honest.",
        for: "Forecasts that move every week and a board that has stopped trusting them.",
    },
    {
        to: "/services/gtm-signals-and-ai",
        name: "GTM Signals & AI",
        desc: "The agentic layer that keeps the method running between engagements — specialist agents on your data, with human confirmation.",
        for: "Teams that want the discipline to persist after the consultant leaves.",
    },
];

const Offerings = () => {
    return (
        <div className="font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
            <SEO
                title="Offerings — how we fix it | GTM-360"
                description="Four ways in: the full GTM Operating Model, Pipeline Quality, Forecasting & Governance, and GTM Signals & AI. Operator-led GTM consulting for Series A–C."
                canonical="https://gtm-360.com/offerings"
            />
            <Helmet>
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "CollectionPage",
                    "name": "GTM-360 Offerings",
                    "url": "https://gtm-360.com/offerings",
                    "description": "Four ways in: the full GTM Operating Model, Pipeline Quality, Forecasting & Governance, and GTM Signals & AI.",
                })}</script>
            </Helmet>

            {/* HERO */}
            <section className="pt-36 pb-16 bg-white">
                <div className="container max-w-3xl">
                    <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-6">Offerings</p>
                    <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-8 text-slate-900 leading-[1.08]">
                        How we fix it.
                    </h1>
                    <p className="text-xl text-slate-500 max-w-2xl font-light leading-relaxed">
                        Four ways in — from the full operating model to a single high-leverage fix. Every
                        one starts with the same thing: finding what's actually in the way.
                    </p>
                </div>
            </section>

            {/* THE OFFERINGS */}
            <section className="pb-20 bg-white">
                <div className="container max-w-4xl">
                    <div className="space-y-5">
                        {offerings.map((o) => (
                            <Link key={o.to} to={o.to}
                                className="block border border-slate-200 rounded-xl p-8 hover:shadow-md hover:border-slate-300 transition-all">
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                                    <div className="max-w-2xl">
                                        <h2 className="text-xl font-bold text-slate-900 mb-2">{o.name}</h2>
                                        <p className="text-slate-500 leading-relaxed mb-3">{o.desc}</p>
                                        <p className="text-sm text-slate-400"><span className="font-semibold text-slate-500">For:</span> {o.for}</p>
                                    </div>
                                    <span className="text-indigo-600 font-bold text-sm whitespace-nowrap">See the offering →</span>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* How we operate — the method sibling */}
                    <Link to="/how-we-work"
                        className="block mt-5 border border-slate-200 rounded-xl p-8 bg-slate-50 hover:bg-white hover:shadow-md hover:border-slate-300 transition-all">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                            <div className="max-w-2xl">
                                <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-2">The method</p>
                                <h2 className="text-xl font-bold text-slate-900 mb-2">How we operate</h2>
                                <p className="text-slate-500 leading-relaxed">
                                    How every engagement runs — diagnose, build, run, grow. The same method
                                    behind all four offerings.
                                </p>
                            </div>
                            <span className="text-indigo-600 font-bold text-sm whitespace-nowrap">See how we work →</span>
                        </div>
                    </Link>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-slate-900 text-white">
                <div className="container max-w-2xl text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">Not sure which applies?</h2>
                    <p className="text-lg text-slate-400 mb-10 font-light leading-relaxed">
                        Start with the diagnostic. It finds the real constraint and tells you honestly which
                        of these — if any — is the right next step.
                    </p>
                    <Link to="/start-here"
                        className="inline-flex items-center justify-center bg-white text-slate-900 px-10 py-4 rounded font-bold hover:bg-slate-100 transition-all">
                        Talk to us →
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Offerings;
