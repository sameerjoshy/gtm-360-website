import React from 'react';
import PlanningCycleMinimal from '../../components/visuals/PlanningCycleMinimal';

const HowWeWorkOnePager = () => {
    return (
        <div className="bg-white min-h-screen text-slate-900 font-sans p-12 max-w-[210mm] mx-auto print:max-w-none print:p-0">
            {/* PRINT BUTTON (Hidden in Print) */}
            <div className="print:hidden mb-12 text-center">
                <button onClick={() => window.print()} className="bg-slate-900 text-white px-6 py-2 rounded text-sm font-bold hover:bg-slate-700">
                    Print / Save to PDF
                </button>
            </div>

            {/* HEADER */}
            <header className="mb-12 border-b border-slate-200 pb-6 flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-2">How We Work</h1>
                    <p className="text-slate-500 font-light text-sm">GTM-360 Engagement Models</p>
                </div>
                <div className="text-right">
                    <span className="block text-xs font-mono text-slate-400 uppercase tracking-widest">Revenue Operating System</span>
                </div>
            </header>

            {/* OPENING */}
            <section className="mb-12">
                <p className="text-lg text-slate-700 leading-relaxed font-light max-w-2xl">
                    Every engagement starts from the same place: <br />
                    <strong>Respect for what you’ve already built — and honesty about what’s changing as you scale.</strong>
                </p>
            </section>

            {/* MODES GRID */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {/* MODE 1 */}
                <div>
                    <h3 className="font-bold text-lg text-slate-900 mb-1">01. Diagnostic</h3>
                    <p className="text-xs text-slate-400 uppercase tracking-widest mb-4">The First Conversation</p>
                    <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                        A focused diagnostic to understand where growth is getting constrained. We map where you are, trace how you got here, and identify where the system is straining.
                    </p>
                    <div className="bg-slate-50 p-3 rounded border border-slate-100">
                        <strong className="block text-xs text-slate-900 mb-1">Outcome</strong>
                        <span className="text-xs text-slate-600">A clear articulation of the problem worth solving. No prescribed solution unless earned.</span>
                    </div>
                </div>

                {/* MODE 2 */}
                <div>
                    <h3 className="font-bold text-lg text-slate-900 mb-1">02. Advisory</h3>
                    <p className="text-xs text-slate-400 uppercase tracking-widest mb-4">Ongoing Partnership</p>
                    <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                        A senior operating partner for founders and CROs navigating scale. Includes planning cycles, trade-off discussions, and decision hygiene.
                    </p>
                    <div className="bg-slate-50 p-3 rounded border border-slate-100">
                        <strong className="block text-xs text-slate-900 mb-1">Replaces</strong>
                        <span className="text-xs text-slate-600">Reactive firefighting and endless re-prioritization.</span>
                    </div>
                </div>

                {/* MODE 3 */}
                <div>
                    <h3 className="font-bold text-lg text-slate-900 mb-1">03. Workbench</h3>
                    <p className="text-xs text-slate-400 uppercase tracking-widest mb-4">The Operating System</p>
                    <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                        A productized system that supports the way we think and work. Enables signals over opinions and evidence over anecdotes.
                    </p>
                    <div className="bg-slate-50 p-3 rounded border border-slate-100">
                        <strong className="block text-xs text-slate-900 mb-1">Outcome</strong>
                        <span className="text-xs text-slate-600">Decisions that compound.</span>
                    </div>
                </div>
            </div>

            {/* PLANNING CYCLE */}
            <section className="mb-12 border-t border-slate-200 pt-8 flex items-center gap-12">
                <div className="flex-1">
                    <h4 className="font-bold text-slate-900 mb-2">Our Operating Lens</h4>
                    <p className="text-sm text-slate-600 max-w-sm">
                        We keep coming back to five questions. This isn’t theory. It’s how teams regain signal when noise creeps in.
                    </p>
                </div>
                <div className="w-48">
                    {/* Scale down for print */}
                    <div className="scale-75 origin-right">
                        <PlanningCycleMinimal />
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="text-center text-xs text-slate-400">
                <p>&copy; GTM-360. Different teams engage differently. The operating logic stays the same.</p>
            </footer>

            <style>{`
                @media print {
                    @page { margin: 10mm; }
                    body { -webkit-print-color-adjust: exact; }
                }
             `}</style>
        </div>
    );
};

export default HowWeWorkOnePager;
