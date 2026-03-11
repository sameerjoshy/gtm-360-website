import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import SEO from '../../components/SEO';

const checks = [
    {
        category: "ICP & Targeting",
        color: "indigo",
        items: [
            { id: "icp1", text: "Your ICP is documented — not just in people's heads — with firmographic, technographic, and behavioural criteria.", risk: "Without a documented ICP, each rep qualifies deals differently. The pipeline fills with heterogeneous opportunities that average out to poor win rates." },
            { id: "icp2", text: "Your win rate is higher in one segment than others, and you've adjusted targeting to focus on that segment.", risk: "Ignoring win rate by segment means spending the same acquisition cost on deals you close at 8% as deals you close at 28%." },
            { id: "icp3", text: "Your 12-month new customer cohort looks similar to your original ICP — not a different persona that came in through inbound or partnership channels.", risk: "ICP drift is the most common silent revenue killer. It degrades win rate, sales cycle, and NRR simultaneously before any single metric collapses." },
            { id: "icp4", text: "You've reviewed your churned or at-risk accounts from the last 12 months and updated your ICP to exclude that profile.", risk: "Companies that closed poorly-fitting deals rarely update the ICP retroactively. The same profile keeps entering the top of the funnel." }
        ]
    },
    {
        category: "Pipeline Quality & Stage Design",
        color: "violet",
        items: [
            { id: "pipe1", text: "Each pipeline stage has written entry criteria that require documented buyer evidence — not seller activity.", risk: "Stage definitions based on seller activity (sent proposal, had a call) allow reps to advance deals on optimism. Pipeline becomes unreliable." },
            { id: "pipe2", text: "A deal cannot advance from Stage 3+ without a documented economic buyer who has confirmed the business problem.", risk: "Deals advanced without an economic buyer almost always stall or die at legal/procurement, costing time from both sides." },
            { id: "pipe3", text: "Your 4× pipeline coverage is producing at least 25% win rate on entered pipeline. If not, you've diagnosed why.", risk: "High pipeline coverage with low win rates means deals are being created and advanced that shouldn't be. Adding more pipeline compounds the waste." },
            { id: "pipe4", text: "Late-stage deal slippage (deals that push from one quarter to the next) is below 20% of commit-stage pipeline.", risk: "Slippage above 20% typically signals that commit criteria don't require buyer confirmation of timeline and decision process." },
            { id: "pipe5", text: "You can identify which rep or which ICP segment accounts for most of your slippage. It is not randomly distributed.", risk: "Random slippage is a process problem. Concentrated slippage is a coaching or segmentation problem. Both are fixable, but require different interventions." }
        ]
    },
    {
        category: "Forecasting & Revenue Governance",
        color: "blue",
        items: [
            { id: "fc1", text: "All reps use the same written definition of 'Commit', 'Best Case', and 'Pipeline' — and you can verify this by asking them independently.", risk: "Without shared definitions, forecast categories aggregate incompatible inputs. The forecast becomes a conversation about opinions, not a prediction." },
            { id: "fc2", text: "Your forecast accuracy (actual vs. forecast at week 1 of quarter) is consistently above 80%.", risk: "Sub-80% forecast accuracy means the pipeline signal is not reliable. Adding forecasting process without fixing signal quality produces better process on top of bad data." },
            { id: "fc3", text: "You use at least two inputs to triangulate the forecast — e.g., pipeline × historical close rate, plus activity data, plus rep commit.", risk: "Single-input forecasts fail when one variable is wrong. Triangulation provides error correction and surfaces which input is drifting." },
            { id: "fc4", text: "The gap between your Q1 week-1 forecast and your Q1 actual is smaller than it was two years ago.", risk: "Forecast accuracy that isn't improving year over year means the governance system isn't learning. Either the process isn't designed to capture errors, or findings aren't being acted on." }
        ]
    },
    {
        category: "GTM Alignment",
        color: "emerald",
        items: [
            { id: "align1", text: "Marketing and sales agree on the ICP definition — using the same words to describe the same buyer, not parallel definitions that don't intersect.", risk: "When marketing and sales have different ICPs, marketing optimises MQL volume at the cost of MQL quality. Sales says leads are bad. Marketing says sales can't close. Both are partially right." },
            { id: "align2", text: "The metrics marketing is measured on align with what makes sales' job easier — not just volume metrics that create friction downstream.", risk: "Marketing measured purely on MQL volume will consistently deliver volume at the expense of quality. Add sales-cycle length and win rate by marketing source to the marketing scorecard." },
            { id: "align3", text: "Customer success knows which customer profiles expand vs. churn, and this feeds back into marketing's targeting and sales' qualification.", risk: "Without a CS-to-ICP feedback loop, the pipeline keeps filling with profiles that look like customers but behave like churn risks." },
            { id: "align4", text: "You have a defined, documented handoff process from marketing to sales (with criteria) and from sales to CS (with context passed).", risk: "Undocumented handoffs lose context. CS inherits accounts without knowing what was sold, at what price point, with what expectations — and customer relationships suffer for it." }
        ]
    },
    {
        category: "Revenue Metrics & Signals",
        color: "amber",
        items: [
            { id: "met1", text: "You know your win rate by lead source, and at least one source is materially better than others. You're investing proportionally.", risk: "Most B2B companies know their blended win rate. Few know win rate by source. The difference often reveals where CAC is being wasted." },
            { id: "met2", text: "You know your average sales cycle by deal size and segment, and you use this to flag deals that are running significantly over time.", risk: "Without benchmarks, stalled deals stay in the pipeline as 'still active'. With benchmarks, an overdue deal triggers a qualification review — before it slips the quarter." },
            { id: "met3", text: "Your CRM data quality is high enough that you trust it for decision-making — you don't need to 'go around' the CRM to get the real picture.", risk: "CRMs that can't be trusted get worked around. Workarounds produce shadow pipelines, spreadsheet forecasts, and decisions made on partial information." },
            { id: "met4", text: "Your net revenue retention (NRR) is above 100%, or if below, you have diagnosed the specific customer profile responsible and adjusted your ICP.", risk: "Sub-100% NRR means the revenue base is shrinking even without churn. The fix is almost always in the ICP, not in CS headcount or processes." }
        ]
    },
    {
        category: "GTM Tech & AI Readiness",
        color: "rose",
        items: [
            { id: "tech1", text: "Every tool in your GTM stack amplifies a specific decision. You can name the decision and the tool.", risk: "Tools that can't be mapped to a decision add cost and data noise without improving output. Most stacks have 3–5 tools in this category." },
            { id: "tech2", text: "Before deploying AI in your sales motion, you validated that the ICP, messaging, and stage criteria it operates against are correct.", risk: "AI accelerates the underlying motion. If the motion is misaligned, AI produces more volume of a broken process — and is harder to diagnose because the activity metrics look good." },
            { id: "tech3", text: "Your outbound sequences are based on validated messaging — not untested hypotheses amplified by automation.", risk: "Automated sequences with unvalidated messaging burn through target accounts. Prospects who ignore sequence 1 are unlikely to re-engage when the same message is reused six months later." }
        ]
    }
];

const categoryColors = {
    indigo: { badge: 'bg-indigo-50 text-indigo-700 border-indigo-200', check: 'accent-indigo-600' },
    violet: { badge: 'bg-violet-50 text-violet-700 border-violet-200', check: 'accent-violet-600' },
    blue: { badge: 'bg-blue-50 text-blue-700 border-blue-200', check: 'accent-blue-600' },
    emerald: { badge: 'bg-emerald-50 text-emerald-700 border-emerald-200', check: 'accent-emerald-600' },
    amber: { badge: 'bg-amber-50 text-amber-700 border-amber-200', check: 'accent-amber-600' },
    rose: { badge: 'bg-rose-50 text-rose-700 border-rose-200', check: 'accent-rose-600' },
};

const GTMDiagnosticChecklist = () => {
    const allIds = checks.flatMap(c => c.items.map(i => i.id));
    const [checked, setChecked] = useState({});
    const [expanded, setExpanded] = useState({});

    const toggle = (id) => setChecked(prev => ({ ...prev, [id]: !prev[id] }));
    const toggleRisk = (id) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

    const total = allIds.length;
    const done = allIds.filter(id => checked[id]).length;
    const pct = Math.round((done / total) * 100);

    const scoreLabel = pct >= 80 ? { text: 'Strong foundation', color: 'text-emerald-600' }
        : pct >= 55 ? { text: 'Some gaps — worth investigating', color: 'text-amber-600' }
        : pct >= 30 ? { text: 'Multiple constraints likely present', color: 'text-orange-600' }
        : { text: 'Revenue system needs attention', color: 'text-red-600' };

    const uncheckedItems = checks.flatMap(c =>
        c.items.filter(i => !checked[i.id]).map(i => ({ ...i, category: c.category }))
    );

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900">
            <SEO
                title="B2B GTM Diagnostic Checklist | 24-Point Revenue System Assessment | GTM-360"
                description="Free B2B GTM diagnostic checklist. 24 questions across ICP targeting, pipeline quality, forecasting, GTM alignment, and AI readiness. Find where your revenue system is breaking."
                canonical="https://gtm-360.com/resources/gtm-diagnostic-checklist"
            />
            <Helmet>
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "WebPage",
                    "name": "B2B GTM Diagnostic Checklist",
                    "description": "A 24-point interactive checklist to identify gaps in your B2B revenue system — covering ICP targeting, pipeline quality, forecasting governance, GTM alignment, and AI readiness.",
                    "url": "https://gtm-360.com/resources/gtm-diagnostic-checklist",
                    "publisher": { "@type": "Organization", "@id": "https://gtm-360.com/#organization", "name": "GTM-360" }
                })}</script>
            </Helmet>

            {/* HERO */}
            <section className="pt-32 pb-14 bg-white border-b border-slate-100">
                <div className="container max-w-3xl">
                    <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-5">Free Resource · GTM-360</p>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-5 leading-tight">
                        B2B GTM Diagnostic Checklist
                    </h1>
                    <p className="text-xl text-slate-500 font-light leading-relaxed mb-4">
                        24 questions across 6 areas of your revenue system. Check what's true for your business. See where the gaps are.
                    </p>
                    <p className="text-sm text-slate-400">No email required. Works in the browser. Takes about 10 minutes.</p>
                </div>
            </section>

            {/* SCORE BAR */}
            <div className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm py-3">
                <div className="container max-w-3xl flex items-center gap-6">
                    <div className="flex-1">
                        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-indigo-600 rounded-full transition-all duration-300"
                                style={{ width: `${pct}%` }}
                            />
                        </div>
                    </div>
                    <div className="flex items-center gap-3 flex-shrink-0">
                        <span className="text-sm font-bold text-slate-900">{done}/{total}</span>
                        <span className={`text-sm font-medium ${scoreLabel.color}`}>{scoreLabel.text}</span>
                    </div>
                </div>
            </div>

            {/* CHECKLIST */}
            <section className="py-12">
                <div className="container max-w-3xl space-y-12">
                    {checks.map((cat) => {
                        const colors = categoryColors[cat.color];
                        const catDone = cat.items.filter(i => checked[i.id]).length;
                        return (
                            <div key={cat.category}>
                                <div className="flex items-center justify-between mb-5">
                                    <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded border ${colors.badge}`}>
                                        {cat.category}
                                    </span>
                                    <span className="text-xs text-slate-400 font-medium">{catDone}/{cat.items.length} checked</span>
                                </div>
                                <div className="space-y-3">
                                    {cat.items.map((item) => (
                                        <div
                                            key={item.id}
                                            className={`border rounded-xl transition-all ${checked[item.id] ? 'border-slate-200 bg-slate-50' : 'border-slate-200 bg-white hover:border-indigo-200'}`}
                                        >
                                            <div className="p-5">
                                                <div className="flex items-start gap-4">
                                                    <input
                                                        type="checkbox"
                                                        id={item.id}
                                                        checked={!!checked[item.id]}
                                                        onChange={() => toggle(item.id)}
                                                        className={`mt-1 h-4 w-4 rounded flex-shrink-0 cursor-pointer ${colors.check}`}
                                                    />
                                                    <label
                                                        htmlFor={item.id}
                                                        className={`text-sm leading-relaxed cursor-pointer flex-1 ${checked[item.id] ? 'text-slate-400 line-through' : 'text-slate-800 font-medium'}`}
                                                    >
                                                        {item.text}
                                                    </label>
                                                </div>
                                                {!checked[item.id] && (
                                                    <div className="mt-3 ml-8">
                                                        <button
                                                            onClick={() => toggleRisk(item.id)}
                                                            className="text-xs text-indigo-600 font-medium hover:underline"
                                                        >
                                                            {expanded[item.id] ? '▲ Hide risk' : '▼ Why this matters'}
                                                        </button>
                                                        {expanded[item.id] && (
                                                            <p className="mt-2 text-xs text-slate-500 leading-relaxed bg-indigo-50 border border-indigo-100 rounded-lg p-3">
                                                                {item.risk}
                                                            </p>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* RESULTS SECTION */}
            {done > 0 && (
                <section className="py-16 bg-slate-50 border-t border-slate-200">
                    <div className="container max-w-3xl">
                        <h2 className="text-2xl font-bold text-slate-900 mb-2">Your assessment</h2>
                        <p className={`text-lg font-medium mb-6 ${scoreLabel.color}`}>{pct}% — {scoreLabel.text}</p>

                        {uncheckedItems.length > 0 && (
                            <>
                                <p className="text-sm text-slate-600 font-medium mb-4">
                                    {uncheckedItems.length} gap{uncheckedItems.length !== 1 ? 's' : ''} identified:
                                </p>
                                <div className="space-y-2 mb-10">
                                    {uncheckedItems.slice(0, 8).map((item) => (
                                        <div key={item.id} className="flex items-start gap-3 bg-white border border-slate-200 rounded-lg p-4">
                                            <span className="text-red-400 flex-shrink-0 mt-0.5">⚠</span>
                                            <div>
                                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{item.category}</p>
                                                <p className="text-sm text-slate-700">{item.text}</p>
                                            </div>
                                        </div>
                                    ))}
                                    {uncheckedItems.length > 8 && (
                                        <p className="text-xs text-slate-400 pl-4">+ {uncheckedItems.length - 8} more gaps above</p>
                                    )}
                                </div>
                            </>
                        )}

                        {uncheckedItems.length === 0 && (
                            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 mb-10">
                                <p className="text-emerald-800 font-medium">All 24 checks passed. If the system is genuinely running this well, the question is whether it's designed to scale to your next stage — not whether it works today.</p>
                            </div>
                        )}

                        <div className="bg-slate-900 rounded-xl p-8 text-white">
                            <h3 className="text-xl font-bold text-white mb-3">Want a proper diagnosis?</h3>
                            <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                                This checklist surfaces gaps. A diagnostic identifies which gap is the binding constraint — the one that, if fixed, moves the most. GTM-360's 10–14 day diagnostic does exactly that.
                            </p>
                            <Link to="/start-here" className="inline-flex items-center justify-center bg-white text-slate-900 px-7 py-3 rounded font-bold hover:bg-slate-100 transition-all text-sm">
                                Start with the diagnostic →
                            </Link>
                            <p className="text-slate-500 text-xs mt-3">Goes directly to a partner. Not a CRM queue.</p>
                        </div>
                    </div>
                </section>
            )}

            {/* RELATED */}
            <section className="py-16 bg-white border-t border-slate-100">
                <div className="container max-w-4xl">
                    <h2 className="text-2xl font-bold text-slate-900 mb-8">Related reading</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: "Why Growth Stalls After Early Traction", href: "/insights/why-growth-stalls", tag: "Insight" },
                            { title: "The Stage Definition Problem Nobody Talks About", href: "/insights/stage-definition-problem", tag: "Insight" },
                            { title: "ICP Drift — The Silent Revenue Killer", href: "/insights/icp-drift", tag: "Insight" }
                        ].map((a) => (
                            <Link key={a.href} to={a.href} className="border border-slate-200 rounded-xl p-6 hover:shadow-sm hover:border-indigo-200 transition-all group">
                                <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest block mb-3">{a.tag}</span>
                                <h3 className="text-sm font-bold text-slate-900 leading-snug group-hover:text-indigo-700 transition-colors">{a.title}</h3>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GTMDiagnosticChecklist;
