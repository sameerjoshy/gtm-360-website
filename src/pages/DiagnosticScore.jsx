import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Bowtie from '../components/visuals/Bowtie';
import useSubmitLead from '../hooks/useSubmitLead';
import { ENGINES } from '../data/engines';

const questions = [
    {
        q: "When growth stalled, what did the team blame first?",
        engine: "Strategy",
        options: [
            { label: "The market or the product — not the way we decide", engine: "Strategy" },
            { label: "Marketing and content aren't producing the interest we expected", engine: "Marketing" },
            { label: "Sales execution — pipeline is there but deals keep slipping", engine: "Sales" },
            { label: "Existing customers churn or don't grow", engine: "Expansion" },
            { label: "We can't trust the forecast or the data", engine: "Operations" },
        ],
    },
    {
        q: "Where does the weakest part of your revenue system show up?",
        engine: "Strategy",
        options: [
            { label: "We're not sure who the right customer is anymore", engine: "Strategy" },
            { label: "Content and outreach aren't landing — awareness is thin", engine: "Marketing" },
            { label: "Deals stall in late stage — qualification or decision structure", engine: "Sales" },
            { label: "The book doesn't grow — renewals are flat or leaking", engine: "Expansion" },
            { label: "Forecasts keep moving; the numbers don't add up", engine: "Operations" },
        ],
    },
    {
        q: "What would your CRO say is the single biggest lever right now?",
        engine: "Sales",
        options: [
            { label: "Sharper ICP and a clearer plan for where we play", engine: "Strategy" },
            { label: "More pipeline from demand and content", engine: "Marketing" },
            { label: "Higher win rate on the pipeline we already have", engine: "Sales" },
            { label: "More expansion from the accounts we already own", engine: "Expansion" },
            { label: "A forecast the board can actually trust", engine: "Operations" },
        ],
    },
    {
        q: "If you had to bet money on one fix this quarter, what would it be?",
        engine: "Strategy",
        options: [
            { label: "Fix who we target and what we promise", engine: "Strategy" },
            { label: "Produce content and positioning that makes us the obvious choice", engine: "Marketing" },
            { label: "Requalify the pipeline and fix deal stage discipline", engine: "Sales" },
            { label: "Land-and-expand — grow the accounts we already have", engine: "Expansion" },
            { label: "Fix the data, the forecast, and the governance", engine: "Operations" },
        ],
    },
];

const engineIds = { Strategy: 'strategy', Marketing: 'marketing', Sales: 'sales', Expansion: 'expansion', Operations: 'operations' };

const DiagnosticScore = () => {
    const [answers, setAnswers] = useState({});
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle');
    const { submit } = useSubmitLead();

    const answered = Object.keys(answers).length;
    const done = answered === questions.length;

    const tally = Object.entries(engineIds).reduce((acc, [name, id]) => {
        const n = Object.values(answers).filter((a) => a === name).length;
        acc[id] = { name, n };
        return acc;
    }, {});
    const top = Object.entries(tally).sort((a, b) => b[1].n - a[1].n)[0];
    const topEngine = ENGINES.find((e) => e.id === top?.[0]);

    const handleEmail = async (e) => {
        e.preventDefault();
        if (!email) return;
        setStatus('submitting');
        const ok = await submit('diagnostic_score', [
            { name: 'email', value: email },
            { name: 'message', value: `Constraint engine: ${topEngine?.name} (${top?.[1].n}/${questions.length}). Score by engine: ${Object.entries(tally).map(([, t]) => `${t.name}: ${t.n}`).join(', ')}` },
        ]);
        setStatus(ok ? 'success' : 'error');
        if (typeof window !== 'undefined' && window.plausible) {
            window.plausible('Constraint engine scored', { props: { engine: topEngine?.name, score: top?.[1].n } });
        }
    };

    return (
        <div className="font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
            <SEO
                title="Which Engine Is Limiting Your Growth? | Free GTM Constraint Check | GTM-360"
                description="A 4-question self-assessment that identifies which of your five GTM engines — Strategy, Marketing, Sales, Expansion, or Operations — is most likely limiting growth. Free, takes 2 minutes."
                canonical="https://gtm-360.com/diagnostic-score"
            />

            {/* HERO */}
            <section className="pt-36 pb-14 bg-white border-b border-slate-100">
                <div className="container max-w-3xl">
                    <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-6">Free · 2 minutes · No email required to see the result</p>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-slate-900 leading-[1.1]">
                        Which engine is limiting your growth?
                    </h1>
                    <p className="text-xl text-slate-500 font-light leading-relaxed">
                        Four questions. Each maps to one of the five engines. Answer honestly and you'll
                        see where the constraint most likely sits — before you spend a dollar fixing the
                        wrong thing.
                    </p>
                </div>
            </section>

            {/* QUESTIONS */}
            <section className="py-16 bg-white">
                <div className="container max-w-3xl space-y-10">
                    {questions.map((question, qi) => {
                        const chosen = answers[qi];
                        return (
                            <div key={qi}>
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Question {qi + 1} of {questions.length}</p>
                                <h2 className="text-xl font-bold text-slate-900 mb-4">{question.q}</h2>
                                <div className="space-y-2.5">
                                    {question.options.map((opt) => {
                                        const isChosen = chosen === opt.label;
                                        return (
                                            <button
                                                key={opt.label}
                                                onClick={() => setAnswers((p) => ({ ...p, [qi]: opt.label }))}
                                                className={`w-full text-left px-5 py-4 rounded-xl border transition-all ${isChosen ? 'border-indigo-500 bg-indigo-50 shadow-sm' : 'border-slate-200 hover:border-slate-300 bg-white'}`}
                                            >
                                                <span className="flex items-center gap-3">
                                                    <span className={`w-4 h-4 rounded-full border flex-shrink-0 ${isChosen ? 'border-indigo-600' : 'border-slate-300'}`}>
                                                        {isChosen && <span className="block w-2.5 h-2.5 rounded-full bg-indigo-600 m-auto mt-[3px]" />}
                                                    </span>
                                                    <span className={`text-sm ${isChosen ? 'text-slate-900 font-medium' : 'text-slate-600'}`}>{opt.label}</span>
                                                </span>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* RESULT */}
            {done && (
                <section className="py-16 bg-slate-50 border-t border-slate-100">
                    <div className="container max-w-3xl">
                        <div className="bg-white border border-slate-200 rounded-2xl p-8 mb-8">
                            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: topEngine?.color }}>
                                The likely constraint
                            </p>
                            <h2 className="text-3xl font-bold text-slate-900 mb-2">{topEngine?.name}</h2>
                            <p className="text-slate-600 mb-6">{topEngine?.what} {topEngine?.claim}</p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {Object.entries(tally).filter(([, t]) => t.n > 0).sort((a, b) => b[1].n - a[1].n).map(([id, t]) => (
                                    <span key={id} className="text-xs px-3 py-1.5 rounded-full bg-slate-100 text-slate-600">
                                        {t.name} · {t.n}/{questions.length}
                                    </span>
                                ))}
                            </div>
                            <Link to="/wiki/method" className="text-sm font-bold text-indigo-600 hover:underline">
                                See what's inside this engine →
                            </Link>
                        </div>

                        {status === 'success' ? (
                            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-8 text-center">
                                <p className="text-emerald-800 font-medium mb-1">Check your inbox.</p>
                                <p className="text-emerald-700 text-sm">Your constraint read is on its way. If it lines up with a real gap, that's the conversation worth having.</p>
                            </div>
                        ) : (
                            <div className="bg-white border border-slate-200 rounded-xl p-8">
                                <h3 className="text-lg font-bold text-slate-900 mb-1">Send me my constraint read.</h3>
                                <p className="text-slate-500 text-sm mb-4">The engine, the score, and what to look at first — in your inbox, free. We won't add you to a nurture sequence without asking.</p>
                                <form onSubmit={handleEmail} className="flex flex-col sm:flex-row gap-3">
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Work email"
                                        className="flex-1 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:border-indigo-400 outline-none"
                                    />
                                    <button
                                        type="submit"
                                        disabled={status === 'submitting'}
                                        className="bg-slate-900 text-white px-6 py-3 rounded-lg text-sm font-bold hover:bg-slate-700 transition-all disabled:opacity-50"
                                    >
                                        {status === 'submitting' ? 'Sending…' : 'Send my result →'}
                                    </button>
                                </form>
                                {status === 'error' && <p className="text-red-600 text-xs mt-2">Something went wrong. Email us at hello@gtm-360.com</p>}
                                <p className="text-xs text-slate-400 mt-3">Goes to a partner, not a CRM queue.</p>
                            </div>
                        )}
                    </div>
                </section>
            )}

            {/* BOWTIE + CTA */}
            <section className="py-20 bg-white">
                <div className="container max-w-5xl">
                    <Bowtie />
                    <div className="text-center mt-10">
                        <Link to="/start-here"
                            className="inline-flex items-center justify-center bg-slate-900 text-white px-8 py-4 rounded font-bold hover:bg-slate-700 transition-all">
                            Want the real diagnosis? →
                        </Link>
                        <p className="mt-3 text-xs text-slate-400">A 10–14 day diagnostic names the binding constraint with evidence — not a 4-question guess.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DiagnosticScore;