// Per-agent explainer (wiki) content — the canonical "how to read this agent"
// reference. Drives the guide page at /agents/<engine>/<agent>/guide and the
// wiki hub at /learn, and is linked from each runtime output.
//
// Written to match what each runtime ACTUALLY produces — keep in sync if an
// agent's output shape changes.

export const AGENT_GUIDES = {
  'seo-analyzer': {
    reads: [
      { section: 'AEO score', meaning: 'How well your content can be quoted by AI answer engines — not just ranked by Google. Structure, question-answering, and named-entity density drive it.' },
      { section: 'Query map', meaning: 'The questions your buyers actually ask, grouped by intent — the demand you are or are not visible for.' },
      { section: 'Fix plan', meaning: 'Prioritised by impact: fix the top of the list first, not all of it.' },
    ],
    glossary: [
      { term: 'AEO', def: 'Answer Engine Optimisation — being the source an AI assistant quotes, not just a blue link.' },
      { term: 'Query cluster', def: 'A group of related questions that share one intent and should be answered on one page.' },
      { term: 'Whitespace', def: 'Demand you could own that competitors have not covered.' },
    ],
    data: 'A topic cluster, your domain, and competitors.',
    method: { measured: ['Query demand (from search data)', 'Your current coverage', 'AEO structure signals (computed)'], inferred: ['Query clustering', 'Fix priority', 'Impact estimates'] },
    faq: [
      { q: 'Is this just an SEO audit?', a: 'No. It audits whether AI answer engines can quote you — a different game from ranking. Traditional SEO can be green while AEO is red.' },
      { q: 'Can I act on it without an SEO team?', a: 'Yes. The fix plan is ordered, so you can hand the top items to whoever writes your content.' },
    ],
  },

  qualifier: {
    reads: [
      { section: 'Readiness score', meaning: 'How close the deal is to being winnable — from the qualification signals, not from how positive the calls felt.' },
      { section: 'Risk log', meaning: 'What could kill the deal, ordered by severity. The top row is what to resolve first.' },
      { section: 'Next action', meaning: 'The single best next move, stated plainly.' },
    ],
    glossary: [
      { term: 'Economic buyer', def: 'The person who can reallocate budget. No deal is safe until they are engaged.' },
      { term: 'Champion', def: 'Someone inside the account who wants you to win and has the standing to say so.' },
      { term: 'Paper process', def: 'The legal/procurement/security path a contract must pass — a hidden multi-week cycle if unmapped.' },
    ],
    data: 'Deal notes, stakeholders, and any call transcript.',
    method: { measured: ['Deal signals (as provided)', 'Economic-buyer + paper-process gates (computed)'], inferred: ['Readiness score', 'Risk severity', 'Next action'] },
    faq: [
      { q: 'Where does the readiness score come from?', a: 'From the qualification signals in your notes — buyer access, timeline, budget, pain. It is not a vibe.' },
      { q: 'What if I have very little detail?', a: 'It says so. Thin notes produce a cautious read and a flagged gate, not confident fabrication.' },
    ],
  },

  diagnostic: {
    reads: [
      { section: 'Constraint', meaning: 'The one thing most limiting revenue right now. Fixing anything else first is wasted effort.' },
      { section: 'Evidence', meaning: 'Why this is the constraint — grounded in your inputs and public signals, not a framework guess.' },
      { section: 'Sequence', meaning: 'What to do about it, in order.' },
    ],
    glossary: [
      { term: 'Constraint', def: 'The bottleneck that caps the whole system — the Theory-of-Constraints idea applied to revenue.' },
      { term: 'Symptom vs cause', def: 'Missing pipeline is usually a symptom; the cause is often positioning, ICP, or follow-through.' },
    ],
    data: 'Company URL, revenue stage, team size.',
    method: { measured: ['Your inputs', 'Public signals about the company'], inferred: ['Constraint identification', 'Sequenced actions'] },
    faq: [
      { q: 'How is this different from a big consulting assessment?', a: 'It runs in minutes on a URL and stage, and it names ONE constraint with evidence instead of a 90-page matrix.' },
    ],
  },

  listener: {
    reads: [
      { section: 'Routed signals', meaning: 'Signals that passed — real, ICP-relevant, and timely. These are worked.' },
      { section: 'Vetoed signals', meaning: 'What was excluded AND why. The veto log is as valuable as the routed list — it shows the noise you did not chase.' },
      { section: 'Digest', meaning: 'One line on what actually matters from the batch.' },
    ],
    glossary: [
      { term: 'Noise threshold', def: 'A single-source signal with no corroboration does not route. One mention is noise.' },
      { term: 'Trigger', def: 'The event that makes now the right time — funding, hiring, leadership change, tech adoption.' },
    ],
    data: 'A batch of candidate signals plus your ICP.',
    method: { measured: ['Candidate signals (as provided)', 'Evidence quotes', 'Noise-threshold vetoes (computed)'], inferred: ['ICP relevance', 'Trigger classification', 'Confidence'] },
    faq: [
      { q: 'Why show the signals you rejected?', a: 'So you can trust the ones you kept. A filter you cannot inspect is just a black box.' },
    ],
  },

  sniper: {
    reads: [
      { section: 'Draft', meaning: 'A grounded outreach message — every claim traceable to a signal you provided.' },
      { section: 'Self-critique', meaning: 'The message graded against its own signals: what it uses well, what is thin.' },
      { section: 'Signal requirement', meaning: 'If there is no real signal, it refuses to draft rather than manufacture a reason to reach out.' },
    ],
    glossary: [
      { term: 'Untraceable claim', def: 'A factual statement in the draft that no signal supports. The agent strips these.' },
      { term: 'Signal', def: 'A real, specific event about the account that makes the outreach timely and relevant.' },
    ],
    data: 'The account, its signals, and your offer.',
    method: { measured: ['Signals (as provided)', 'Untraceable-claim check (computed)'], inferred: ['Angle', 'Draft language', 'Critique'] },
    faq: [
      { q: 'Will it write without a signal?', a: 'No. With no real signal it refuses and tells you to find one — generic outreach is the thing it is designed to prevent.' },
    ],
  },

  'icp-clarifier': {
    reads: [
      { section: 'Actual ICP', meaning: 'The profile that actually buys — highest win rate at the shortest cycle from your own closed deals.' },
      { section: 'Segment math', meaning: 'Win rate and cycle by segment, from your data. The numbers behind the profile.' },
      { section: 'Drift', meaning: 'Where your pipeline has wandered from the ICP you stated.' },
    ],
    glossary: [
      { term: 'Stated vs actual ICP', def: 'Who you say you sell to versus who your closed-won pattern says you sell to. The gap is the story.' },
      { term: 'Sample gate', def: 'Below 20 closed-won deals the pattern is marked preliminary — a small sample can lie.' },
    ],
    data: 'A CRM deal export and your stated ICP.',
    method: { measured: ['Deal counts + outcomes', 'Per-segment win rates + cycle times (computed)', 'Sample-size gate (computed)'], inferred: ['Segment choice', 'Actual ICP profile', 'Drift interpretation'] },
    faq: [
      { q: 'How many deals do I need?', a: 'More than 20 closed-won for a confident read. Below that it marks the result preliminary instead of overclaiming.' },
    ],
  },

  'deal-room': {
    reads: [
      { section: 'Where it stands', meaning: 'A one-paragraph brief and a readiness read — minutes before the call.' },
      { section: 'Risk log', meaning: 'What could kill the deal, ordered by severity, each with the reason.' },
      { section: 'Gates', meaning: 'Deterministic escalations: a missing economic buyer or an unmapped paper process jumps to the top.' },
    ],
    glossary: [
      { term: 'Escalation gate', def: 'Fires when no budget holder is engaged — the deal can stall without warning.' },
      { term: 'Procurement gate', def: 'Fires when legal/procurement review is not mapped — an unquantified timeline risk.' },
    ],
    data: 'Deal notes, stakeholders, transcript, paper process.',
    method: { measured: ['Notes, stakeholders, transcript', 'Economic-buyer + paper gates (computed)'], inferred: ['Readiness', 'Risk ordering', 'Next action'] },
    faq: [
      { q: 'Does it invent stakeholders?', a: 'No. It only names people who appear in your notes.' },
    ],
  },

  hygiene: {
    reads: [
      { section: 'Findings', meaning: 'Ranked blocker → warning → advisory. Blockers corrupt the forecast; advisory is cleanup.' },
      { section: 'Forecast impact', meaning: 'Raw pipeline value versus the value sitting on dirty rows.' },
      { section: 'Score', meaning: 'Whether you can trust the pipeline for a forecast at all.' },
    ],
    glossary: [
      { term: 'Blocker', def: 'A data problem that directly corrupts the forecast — missing amount, impossible stage, negative value.' },
      { term: 'At-risk value', def: 'The pipeline dollars carried by rows with blockers or warnings.' },
    ],
    data: 'A pipeline export — deals with stage, amount, close date, owner.',
    method: { measured: ['Rows + field values', 'Severity ordering + blocker count (computed)', 'Score (computed)'], inferred: ['Impact per finding', 'At-risk value', 'Verdict'] },
    faq: [
      { q: 'What counts as a blocker?', a: 'Anything that makes the number wrong: missing or negative amounts, no close date, deals with no owner, stage that cannot coexist with the date.' },
    ],
  },

  'forecast-analyser': {
    reads: [
      { section: 'Commit', meaning: 'What you would bet the quarter on — later stage, inside the period, clean data.' },
      { section: 'Best case', meaning: 'Commit plus credible upside. Never counts stalled, ownerless, or amountless deals.' },
      { section: 'The gap', meaning: 'Target minus commit, and whether the current pipeline can actually close it.' },
    ],
    glossary: [
      { term: 'Commit vs best case', def: 'The number you promise versus the realistic ceiling above it. The gap between them is your risk.' },
      { term: 'Coverage gate', def: 'Fires when nothing in the pipeline bridges the gap to target.' },
    ],
    data: 'A pipeline export, plus your target and period.',
    method: { measured: ['Deal rows, stages, amounts, dates, owners', 'Commit/best-case arithmetic', 'Coverage gate (computed)'], inferred: ['Which deals clear the bar', 'Confidence per slice', 'Whether the gap can close'] },
    faq: [
      { q: 'Why two numbers?', a: 'One to promise, one to plan around. A single forecast hides how much is hope.' },
    ],
  },

  'win-loss': {
    reads: [
      { section: 'Patterns', meaning: 'What separates wins from losses, each backed by deals and a sample size.' },
      { section: 'Reasons', meaning: 'The stated loss reasons — and whether the data backs them or they are just rep notes.' },
      { section: 'Do more / stop', meaning: 'Actions that trace to a pattern above, not generic sales advice.' },
    ],
    glossary: [
      { term: 'Evidence-based reason', def: 'A stated reason the data supports. The rest are unverified rep notes.' },
      { term: 'Sample gate', def: 'Below ~15 closed deals, patterns are hypotheses, not conclusions.' },
    ],
    data: 'A closed-deal export — outcome plus the fields you track.',
    method: { measured: ['Closed outcomes + fields', 'Win rate + sample size (computed)', 'Reported reasons'], inferred: ['Pattern extraction', 'Actions', 'Which reasons are evidence-based'] },
    faq: [
      { q: 'Why distrust the recorded loss reason?', a: 'Reps record the polite reason. The data often shows a different pattern — a competitor present, a size band, a cycle length.' },
    ],
  },

  'goal-integrity': {
    reads: [
      { section: 'Coverage', meaning: 'How many objectives are actually measurable and aligned, versus aspiration.' },
      { section: 'Gaming flags', meaning: 'Metrics that can be hit without achieving the real goal — each with the one question that exposes it.' },
      { section: 'Score', meaning: 'Whether the goal set can drive the business or is mostly theater.' },
    ],
    glossary: [
      { term: 'Gaming', def: 'Hitting the number without the outcome — revenue that churns, activity that moves nothing, percentages of tiny bases.' },
      { term: 'Measurability gate', def: 'Fires on objectives with no number-and-threshold key result.' },
    ],
    data: 'Your OKR tree, plus company priorities.',
    method: { measured: ['Objectives + KR structure', 'Measurability + alignment counts (computed)', 'Score (computed)'], inferred: ['Which objectives fail', 'Gaming loopholes + verifier question', 'Verdict'] },
    faq: [
      { q: 'Is it accusing my team of cheating?', a: 'No. It names a metric and asks a question you can verify — it flags the loophole, not a person.' },
    ],
  },

  'churn-predictor': {
    reads: [
      { section: 'Tier', meaning: 'Health per account: critical → at-risk → watch → healthy. Critical means call today.' },
      { section: 'Driver + evidence', meaning: 'The single strongest signal behind the tier, with the numbers behind it.' },
      { section: 'Playbook', meaning: 'The action per tier — grounded, not generic.' },
    ],
    glossary: [
      { term: 'Escalation gate', def: 'Critical accounts jump ahead of any renewal motion.' },
      { term: 'Health driver', def: 'The one signal — usage, support, sentiment, renewal proximity — doing the most work.' },
    ],
    data: 'Account signals: usage, support, sentiment, renewal.',
    method: { measured: ['Account signals (as provided)', 'Tier distribution (computed)'], inferred: ['Tier per account', 'Driver emphasis', 'CSM actions'] },
    faq: [
      { q: 'Can a green average hide a red account?', a: 'Not here. Accounts are tiered individually; a strong portfolio average never masks one collapsing account.' },
    ],
  },

  'expansion-radar': {
    reads: [
      { section: 'Readiness', meaning: 'Ready → warming → not yet. Only accounts with health AND headroom are ready.' },
      { section: 'Signal + offer', meaning: 'The headroom evidence and what to sell into it.' },
      { section: 'Churn gate', meaning: 'Accounts showing churn signals are suppressed — protect before you pitch.' },
    ],
    glossary: [
      { term: 'Headroom', def: 'Room to grow: seats near a limit, multiple teams, a new use case.' },
      { term: 'Suppressed', def: 'Held out of expansion because the account is showing risk signals.' },
    ],
    data: 'Account usage, teams, health, plus your offerings.',
    method: { measured: ['Account signals + usage', 'Readiness distribution (computed)'], inferred: ['Readiness per account', 'Offer fit', 'Timing windows'] },
    faq: [
      { q: 'Why hold back accounts?', a: 'Pitching a shrinking account accelerates the churn. The gate protects the book first.' },
    ],
  },

  'signals-scout': {
    reads: [
      { section: 'ICP fit', meaning: 'How well the account matches your ICP, scored and explained.' },
      { section: 'Live intent', meaning: 'Whether there is a real buying signal right now.' },
      { section: 'Tier', meaning: 'Both axes together: fit alone is "watch", a hot signal without fit is never a target.' },
    ],
    glossary: [
      { term: 'Fit vs intent', def: 'Two independent axes. Hot requires both — a great-fit account with no signal is not a pursuit.' },
      { term: 'Tier', def: 'Hot (both) · watch (fit, no signal) · warm (signal, no fit) · not-a-fit (neither).' },
    ],
    data: 'A company, your ICP, and any signals gathered.',
    method: { measured: ['Signals, dates, evidence quotes', 'Tier rule: fit × intent (computed)'], inferred: ['ICP fit score', 'Intent score', 'Approach + caution'] },
    faq: [
      { q: 'What makes an account "hot"?', a: 'Fit AND a live signal. Either alone does not qualify.' },
    ],
  },

  'competitor-intel': {
    reads: [
      { section: 'Timeline', meaning: "What the competitor has actually done, in order, each with its source." },
      { section: 'Implications', meaning: 'What each move means for you, scored by impact.' },
      { section: 'Claims', meaning: 'Every fact with its attribution — unsourced claims are flagged unverified.' },
    ],
    glossary: [
      { term: 'Attribution gate', def: 'Fires on any claim with no source. Unattributed intelligence is marked, never asserted.' },
      { term: 'Impact rating', def: 'High/medium/low — how much the move changes your position.' },
    ],
    data: 'The competitor and the source material you gathered.',
    method: { measured: ['Moves + attributions', 'Sourced vs unsourced counts (computed)'], inferred: ['Implications', 'Moves to make', 'Impact ratings'] },
    faq: [
      { q: 'What if I only have a rumor?', a: 'It records the claim and flags it unverified rather than dressing it as fact.' },
    ],
  },

  'content-radar': {
    reads: [
      { section: 'Opportunity cards', meaning: 'Ranked content opportunities, each with topic, angle, and the question it answers.' },
      { section: 'Scores', meaning: 'Demand, whitespace, insight density, durability, frontier — why this ranks where it does.' },
      { section: 'Why now', meaning: 'The live signal that makes this timely, with real source URLs.' },
    ],
    glossary: [
      { term: 'Whitespace', def: 'Demand that exists but credible content has not covered.' },
      { term: 'Archetype', def: 'The shape of the piece — quiet shift, signal vs noise, third way, decision framework, how-to.' },
    ],
    data: 'Your profile and a focus area.',
    method: { measured: ['Search + community signal', 'Whitespace vs your existing content map'], inferred: ['Ranking scores', 'Angle', 'Archetype'] },
    faq: [
      { q: 'Is this keyword research?', a: 'No. It finds questions worth answering and the angle that is yours — not a keyword list.' },
    ],
  },

  'planning-cycle': {
    reads: [
      { section: 'Retrospective', meaning: 'Target by target: what was set, what happened, the result, and the lesson.' },
      { section: 'Focus areas', meaning: '2-4 priorities for next quarter — each must trace to a real target.' },
      { section: 'Carry over / drop', meaning: 'What continues and what gets killed.' },
    ],
    glossary: [
      { term: 'Trace gate', def: 'A focus area with no target behind it is a wish, not a plan.' },
      { term: 'Focus cap', def: 'Four priorities maximum. A quarter with eight has none.' },
    ],
    data: "Last quarter's targets and actuals, plus context.",
    method: { measured: ['Targets + actuals', 'Result classification + scorecard (computed)', 'Focus cap (computed)'], inferred: ['Lessons', 'Focus areas', 'Carryover / drop'] },
    faq: [
      { q: 'Why cap the focus areas?', a: 'Because attention is the constraint. The cap forces the hard choice the plan is for.' },
    ],
  },

  'goal-designer': {
    reads: [
      { section: 'Draft', meaning: 'Objectives with measurable key results — baseline, target, and how each is measured.' },
      { section: 'Ambition verdict', meaning: 'Per objective: stretch, realistic, sandbag, or fantasy — with the math.' },
      { section: 'Gates', meaning: 'Sandbags and fantasies both get flagged, not hidden.' },
    ],
    glossary: [
      { term: 'Stretch', def: 'Achievable if you do things differently. The bar a goal should clear.' },
      { term: 'Sandbag', def: 'A target you would beat without changing anything. Too low to matter.' },
    ],
    data: 'Your focus areas, with context and baseline numbers.',
    method: { measured: ['Focus areas + context', 'Measurability count + ambition flags (computed)'], inferred: ['Objective wording', 'KR design', 'Ambition verdicts'] },
    faq: [
      { q: 'What stops it setting easy goals?', a: 'The ambition check compares each target to the baseline and flags both sandbags and unreachable targets.' },
    ],
  },

  'market-research': {
    reads: [
      { section: 'Segments', meaning: 'Each segment with its size, the source behind that size, growth, and fit. A size with no source is flagged as an estimate.' },
      { section: 'Entry priority', meaning: 'Where to aim first, ranked, with the evidence behind the ranking.' },
      { section: 'Whitespace', meaning: 'Where demand exists but credible coverage does not — the openings.' },
    ],
    glossary: [
      { term: 'TAM / segment size', def: 'How much money is in play for a slice of the market. It must come from a source, not a guess dressed as a fact.' },
      { term: 'Evidence gate', def: 'Any size without a cited source is flagged — the map tells you what is known versus assumed.' },
      { term: 'Whitespace', def: 'Demand that exists but nobody credible has covered — room to enter.' },
    ],
    data: 'The segments to size, geography, and any sources (reports, analyst data) you paste in.',
    method: { measured: ['Segment sizes + their sources (as provided)', 'Sourced vs unsourced counts (computed)'], inferred: ['Whitespace areas', 'Entry ranking', 'Fit assessment'] },
    faq: [
      { q: 'Will it just make up market size numbers?', a: 'No. Every size carries its source or is flagged as an estimate. If you gave no sources, it says so up front.' },
    ],
  },

  'roadmap-align': {
    reads: [
      { section: 'Coverage', meaning: 'Required pipeline versus available pipeline, and the ratio between them. Thin coverage is the plan asking the funnel for more than it has.' },
      { section: 'Divergences', meaning: 'Where the goal and the funnel disagree — coverage, capacity, stage concentration — ranked by severity.' },
      { section: 'Adjustment slots', meaning: 'What to change to close the gap, before the quarter starts rather than in week six.' },
    ],
    glossary: [
      { term: 'Coverage ratio', def: 'Available pipeline ÷ the pipeline the goal requires. Low coverage means the plan depends on deals that do not exist yet.' },
      { term: 'Reality gate', def: 'Fires when the pipeline cannot carry the goal — the number gets flagged, not silently accepted.' },
      { term: 'Divergence', def: 'Any place the plan and the funnel tell different stories — usually coverage, capacity, or stage mix.' },
    ],
    data: 'Your goals and the pipeline shape, plus capacity and win rate to quantify coverage.',
    method: { measured: ['Goals, pipeline shape, capacity (as provided)', 'Coverage ratio (computed from your figures)', 'Severity ordering (computed)'], inferred: ['Divergence identification', 'Adjustment slots', 'Verdict'] },
    faq: [
      { q: 'What if I do not know my win rate?', a: 'It says the coverage is unquantified rather than guessing — add the win rate to turn the goal into a required-pipeline number.' },
    ],
  },

  'campaign-builder': {
    reads: [
      { section: 'Narrative arc', meaning: 'The one message told in stages — hook, proof, objection, ask — so the campaign builds rather than repeats.' },
      { section: 'Calendar', meaning: 'Dated entries: when, which channel, which asset, which CTA.' },
      { section: 'Asset list', meaning: 'What to produce, its channel, and when it is due — working back from the calendar.' },
    ],
    glossary: [
      { term: 'Narrative arc', def: 'The sequence a campaign takes a buyer through. One message, told in stages, beats the same message shouted five times.' },
      { term: 'Segment gate', def: 'Fires when the target is not a defined segment. A campaign for everyone reaches no one.' },
      { term: 'CTA', def: 'The single action each touch asks for — one per asset, not a menu.' },
    ],
    data: 'The message, the segment, the campaign window, and any preferred channels.',
    method: { measured: ['Message + segment + window (as provided)', 'Segment-definition gate (computed)'], inferred: ['Narrative arc', 'Calendar dates', 'Asset list'] },
    faq: [
      { q: 'What if I set the segment to "everyone"?', a: 'The segment gate fires and it tells you to narrow before building assets — a campaign aimed at everyone converts nobody.' },
    ],
  },

  'account-planner': {
    reads: [
      { section: 'Tiered list', meaning: 'Each account with its fit score, intent score, tier, and the reason — so you can see why an account ranked where it did.' },
      { section: 'Focus set', meaning: 'The tier-1 accounts worth a play this quarter.' },
      { section: 'Tiers', meaning: 'How the universe split: tier 1 to 3, and how many fell below the fit threshold.' },
    ],
    glossary: [
      { term: 'Fit vs intent', def: 'Fit is how well an account matches your ICP; intent is evidence of a live buying signal. They are scored separately.' },
      { term: 'Fit gate', def: 'Accounts below the fit threshold are not auto-selected into the focus set — poor fit never pads the list.' },
      { term: 'Tiering', def: 'Sorting accounts by combined fit and intent so effort goes to the ones most likely to convert.' },
    ],
    data: 'Your account universe (list or CSV) and your ICP.',
    method: { measured: ['Account rows (as provided)', 'Fit + intent thresholding and tiering (computed)'], inferred: ['Fit score', 'Intent score', 'Reason'] },
    faq: [
      { q: 'What happens to poor-fit accounts?', a: 'They fall below the threshold and are kept out of the focus set — the fit gate stops a big-name-but-wrong-fit account from getting a play.' },
    ],
  },

  'abm-playbook': {
    reads: [
      { section: 'Top summary', meaning: 'How many accounts have a grounded play versus a generic one.' },
      { section: 'Per-account play', meaning: 'The story that account should hear, how you position, and the ordered channel plan — each tied to a signal.' },
      { section: 'Signal gate', meaning: 'Accounts with no grounding signal are flagged — a play without a signal is generic outreach.' },
    ],
    glossary: [
      { term: 'ABM', def: 'Account-based marketing — treating a named account as its own market of one, instead of broadcasting to a segment.' },
      { term: 'Signal gate', def: 'Fires on any account play with no real signal behind it. It will not invent a reason to reach out.' },
      { term: 'Grounded play', def: 'A play tied to a specific, true thing about that account — not a value prop that could be sent to anyone.' },
    ],
    data: 'Your named accounts and the signals you know about each.',
    method: { measured: ['Accounts + context (as provided)', 'Grounded vs ungrounded plays (computed)'], inferred: ['The account story', 'Positioning', 'Channel timing'] },
    faq: [
      { q: 'What if I have no signals for an account?', a: 'It says so and flags the play as generic. The honest move is to find a real trigger before you reach out.' },
    ],
  },

  'video-outreach': {
    reads: [
      { section: 'The script', meaning: 'Hook, proof, ask — the hook must reference the signal in the first 5 seconds or it is not personalised.' },
      { section: 'Shot by shot', meaning: 'Time-stamped beats with what to show on screen, so it records in under a minute.' },
      { section: 'How to send it', meaning: 'The channel and timing recommendation — a video sent at the wrong moment is still spam.' },
    ],
    glossary: [
      { term: 'Signal requirement', def: 'No specific signal means no brief. The agent refuses rather than inventing a reason to send.' },
      { term: 'Hook', def: 'The first 5 seconds — it must prove you know something specific about them.' },
    ],
    data: 'The signal brief (a real trigger) and the persona.',
    method: { measured: ['Signal + persona (as provided)'], inferred: ['Hook framing', 'Proof selection', 'Delivery timing'] },
    faq: [
      { q: 'What if I have no signal?', a: 'It refuses to draft and tells you to find a real trigger first. A personalised video with nothing personal in it converts worse than an email.' },
    ],
  },

  'pricing-strategist': {
    reads: [
      { section: 'The anchor', meaning: 'The opening number and how to frame it — set high enough to leave room, low enough to be credible.' },
      { section: 'Packages', meaning: '2-4 options (good/better/best) rather than one take-it-or-leave-it price.' },
      { section: 'Floor and guardrail', meaning: 'The lowest you should agree to, and the walk-away number below which the deal is not worth doing.' },
    ],
    glossary: [
      { term: 'Anchor', def: 'The first number named — it frames every number after it.' },
      { term: 'Concession floor', def: 'The lowest price you will agree to, and what you must get in exchange for going there.' },
      { term: 'Margin gate', def: 'Flags any recommendation that dips below your margin floor. The guardrail is a limit, not a suggestion.' },
    ],
    data: 'The deal context, plus price history and your margin floor.',
    method: { measured: ['Deal context + price history (as provided)', 'Margin-floor breach check (computed)'], inferred: ['Anchor', 'Packaging', 'Concession floor + guardrail'] },
    faq: [
      { q: 'What if I do not give a margin floor?', a: 'It names the guardrail as unverified judgment rather than a real limit — supply the floor before you negotiate.' },
    ],
  },

  'negotiation-coach': {
    reads: [
      { section: 'The map', meaning: 'For each thing they want: what you can give, what it costs you, and what you must get in exchange.' },
      { section: 'The order to give', meaning: 'Cheapest-to-you first, each with its exchange and the point past which you stop.' },
      { section: 'Call prep', meaning: 'What to hold, what to trade, and the signal that tells you to stop and close.' },
    ],
    glossary: [
      { term: 'Concession', def: 'Something you give up. The rule: never for free — every concession buys something.' },
      { term: 'Guardrail gate', def: 'Blocks any planned concession that breaches the margin floor.' },
      { term: 'Close when', def: 'The moment in the call when further talking only costs you — the signal to ask for the deal.' },
    ],
    data: 'The deal brief, plus known pressures and your margin floor.',
    method: { measured: ['Deal brief + pressures (as provided)', 'Margin-floor breach check (computed)'], inferred: ['Concession map', 'Sequence order', 'Call prep'] },
    faq: [
      { q: 'Why not just give them what they ask for?', a: 'Because an unearned concession tells the buyer the price was never real. Every trade is mapped to something you get back.' },
    ],
  },

  'onboarding-coach': {
    reads: [
      { section: 'First value', meaning: 'The earliest moment the customer gets real value — not "training complete", actual value — and when it lands.' },
      { section: 'The path', meaning: 'Ordered milestones from day one to first value to habit, each with an owner and the proof it happened.' },
      { section: 'Success metrics', meaning: 'What proves value landed — metric, target, and what it proves.' },
    ],
    glossary: [
      { term: 'Time to value', def: 'How long from kickoff until the customer first gets real value. Shorten it or the enthusiasm fades before value arrives.' },
      { term: 'Time-to-value gate', def: 'Fires when first value lands past your window — a plan that is too slow is a plan that churns.' },
    ],
    data: 'The account context and the product surface (workflows they must adopt).',
    method: { measured: ['Account context + product surface (as provided)', 'Time-to-value check vs window (computed)'], inferred: ['Milestone path', 'Owners', 'Success metrics'] },
    faq: [
      { q: 'What counts as "first value"?', a: 'The earliest moment they would be annoyed to lose the product — a real win, not a completed onboarding checklist.' },
    ],
  },

  'renewal-analyst': {
    reads: [
      { section: 'Proof of value', meaning: 'The concrete evidence of value delivered to this customer — each claim with its evidence.' },
      { section: 'The offer', meaning: 'How to frame the renewal: continuity, growth, or a re-shaped package.' },
      { section: 'Risks and timeline', meaning: 'What could derail the renewal, the mitigation, and what happens when — working back from the date.' },
    ],
    glossary: [
      { term: 'Value gate', def: 'A renewal plan must open with evidence of value. No proof, no renewal — you cannot renew what you cannot show.' },
      { term: 'Expansion option', def: 'The natural next step offered alongside the renewal — growth framed as continuity, not an upsell.' },
    ],
    data: 'The health data (usage, outcomes, support) and the renewal date.',
    method: { measured: ['Health data + renewal date (as provided)', 'Value-proof presence (computed)'], inferred: ['Value framing', 'Offer + expansion option', 'Risk plan + timeline'] },
    faq: [
      { q: 'When should the renewal conversation start?', a: 'Long before the contract date — the plan works backwards from the date so proof and conversation are ready, not rushed.' },
    ],
  },

  'cross-sell-scout': {
    reads: [
      { section: 'Readiness', meaning: 'A 1-5 score with the rationale — only high when the signals actually support an adjacent product.' },
      { section: 'The brief', meaning: 'The product to lead with, the evidence this account needs it, and how to frame it as a natural next step.' },
      { section: 'The signals', meaning: 'Each observation (usage pattern, support theme, team growth) and what it means for the cross-sell.' },
    ],
    glossary: [
      { term: 'Cross-sell', def: 'Selling an adjacent product to an existing customer — value they already trust, extended.' },
      { term: 'Health gate', def: 'Only healthy accounts are eligible. A cross-sell to a declining account accelerates the churn.' },
    ],
    data: 'The health score, the usage/support picture, and your available products.',
    method: { measured: ['Health + usage + support (as provided)', 'Health gate + readiness clamp (computed)'], inferred: ['Signals', 'Product fit', 'Framing'] },
    faq: [
      { q: 'What if the account is declining?', a: 'The health gate blocks it and clamps readiness — protect the account first; pitching it now would accelerate the churn.' },
    ],
  },

  'pipeline-auditor': {
    reads: [
      { section: 'Mismatches', meaning: 'Deals whose stage is not backed by engagement evidence — a "Negotiation" with no meeting, a "Proposal" with no buyer response — ranked by severity.' },
      { section: 'Aged deals', meaning: 'Deals stuck in a stage far longer than that stage should take.' },
      { section: 'Forecast risk', meaning: 'What the pipeline actually supports once the unearned stages are removed.' },
    ],
    glossary: [
      { term: 'Stage vs evidence', def: 'Hygiene checks whether the fields are filled; the Auditor checks whether the stage is earned by real buyer engagement.' },
      { term: 'Evidence gate', def: 'Flags every stage that is not backed by engagement. A complete-looking deal is not a clean one.' },
      { term: 'Aged deal', def: 'A deal that has not moved in far longer than its stage should take — usually a soft no.' },
    ],
    data: 'Pipeline data: deals with stage, value, last activity, and activity type.',
    method: { measured: ['Deal rows + stages + activity (as provided)', 'Mismatch + age counts (computed)'], inferred: ['Stage/evidence judgment', 'Severity', 'Forecast risk'] },
    faq: [
      { q: 'How is this different from Hygiene?', a: 'Hygiene finds broken fields (missing amount, impossible stage). This finds stages that are unearned — the deal looks fine but the buyer was never really engaged.' },
    ],
  },

  attribution: {
    reads: [
      { section: 'By engine', meaning: 'Revenue split by engine — which part of the journey actually carried the deal.' },
      { section: 'By touch', meaning: 'Revenue split by individual touch and channel.' },
      { section: 'Spend signal', meaning: 'Where the next dollar earns most, grounded in the attribution.' },
    ],
    glossary: [
      { term: 'Attribution model', def: 'The lens for splitting credit: first touch, last touch, linear across all touches. It is a lens, not a truth.' },
      { term: 'Data gate', def: 'Fires when there is no touch history. Attribution without touch data is a guess, so it is reported as absent.' },
    ],
    data: 'Closed deals with their touch history, and the attribution model to apply.',
    method: { measured: ['Closed deals + touch history (as provided)', 'Touch-data presence (computed)'], inferred: ['Revenue split', 'Engine attribution', 'Spend signal'] },
    faq: [
      { q: 'What if I have no touch data?', a: 'The data gate fires and it attributes only what it can, without inventing a channel mix. Add the touch per deal first.' },
    ],
  },

  'comp-quota': {
    reads: [
      { section: 'Quotas', meaning: 'Per-rep targets with the rationale — capacity, territory, history, and ramp.' },
      { section: 'Reconciliation', meaning: 'Whether the required quota is actually supported by the pipeline coverage that exists.' },
      { section: 'Comp model', meaning: 'The levers (accelerators, spiffs) and the guardrails (caps, floors) — and whether the plan holds.' },
    ],
    glossary: [
      { term: 'Reality gate', def: 'Fires when quotas do not reconcile with coverage — a quota the pipeline cannot carry is a plan for failure.' },
      { term: 'Ramp', def: 'A new rep\'s path to full quota. Setting a full number on a ramping rep sets them up to miss.' },
    ],
    data: 'Territory data (roster, capacity, history), plus pipeline coverage and your comp structure.',
    method: { measured: ['Territory data + coverage (as provided)', 'Coverage reconciliation (computed)'], inferred: ['Per-rep quotas', 'Comp levers + guardrails', 'Rationale'] },
    faq: [
      { q: 'What if the quotas do not reconcile?', a: 'The reality gate flags it and tells you to lower the quota or raise coverage — optimism is not a compensating control.' },
    ],
  },

  'workflow-builder': {
    reads: [
      { section: 'The spec', meaning: 'Trigger, conditions, actions, and edge cases — concrete enough for a RevOps admin to build without asking you anything.' },
      { section: 'Clarifying questions', meaning: 'When the description is ambiguous, the specific questions that must be answered before it is buildable.' },
      { section: 'Ambiguity gate', meaning: 'Surfaces the gaps instead of guessing around them — an ambiguous ask produces questions, not a wrong spec.' },
    ],
    glossary: [
      { term: 'Workflow spec', def: 'An implementation-ready definition: the event that starts it, the if-logic, the actions, and what breaks it.' },
      { term: 'Ambiguity gate', def: 'Fires when the process is unclear — it asks rather than inventing the missing pieces.' },
    ],
    data: 'The process in plain language and the CRM platform (HubSpot / Salesforce).',
    method: { measured: ['Process description + platform (as provided)', 'Ambiguity + readiness (computed)'], inferred: ['Trigger/conditions/actions', 'Edge cases', 'Clarifying questions'] },
    faq: [
      { q: 'What if my description is vague?', a: 'It returns the clarifying questions instead of a guessed spec — building on a guess produces a broken automation.' },
    ],
  },

  'chief-of-staff': {
    reads: [
      { section: 'Decisions you owe', meaning: 'What needs a human decision this week — each with the owner, the engine that raised it, and why now. An item without an owner is dropped, not shown.' },
      { section: 'Cross-engine risks', meaning: 'The risks no single engine owner will catch, because they span lanes — marketing generating demand sales can\'t convert, sales closing deals expansion can\'t retain.' },
      { section: "The week's actions", meaning: 'The operating list — 3-5 concrete actions, each with an owner and the engine it belongs to.' },
    ],
    glossary: [
      { term: 'Command brief', def: 'The weekly rhythm: what changed, what needs a decision, what to do. The chief of staff\'s job, not a dashboard.' },
      { term: 'Cross-engine risk', def: 'A risk that lives between engines. Each engine sees only its own lane, so nobody owns it — that gap is what this catches.' },
      { term: 'Evidence gate', def: 'It orchestrates, it does not invent. Every item traces to an engine output, or it is not surfaced.' },
    ],
    data: 'The latest engine outputs, your priorities, and what happened this week.',
    method: { measured: ['Engine outputs (as provided)', 'Decision-owner check + severity ordering (computed)'], inferred: ['What changed', 'Cross-engine risks + opportunities', "The week's actions"] },
    faq: [
      { q: 'Is this a dashboard?', a: 'No. A dashboard shows you numbers. This runs the weekly rhythm — it tells you what changed, what decision you owe, and what to do, and it refuses to invent any of it.' },
      { q: 'What if an item has no owner?', a: 'It is dropped and the decision gate flags it. An unowned decision is not a decision.' },
    ],
  },

  // ---- The content pipeline (all run inside /create) ------------------------
  'angle-validator': {
    reads: [
      { section: 'Decision', meaning: 'Proceed, pivot, or kill — before anyone spends time writing. The cheapest place to stop is here.' },
      { section: 'Reasoning', meaning: 'Why that call: demand, differentiation, and whether your existing content already owns the angle.' },
      { section: 'Overlap', meaning: 'Where the angle collides with something you have already published — the cannibalization check.' },
    ],
    glossary: [
      { term: 'Whitespace', def: 'A question your buyers ask that credible content has not covered — the gap worth writing into.' },
      { term: 'Cannibalization', def: 'Two pieces competing for the same question, so neither ranks and neither is the definitive answer.' },
      { term: 'Pivot', def: 'The topic is good but the angle is wrong — keep the subject, change the claim.' },
    ],
    data: 'The topic and angle, plus your existing content map.',
    method: { measured: ['Topic + angle (as provided)', 'Overlap with your content map (computed)'], inferred: ['Proceed / pivot / kill', 'Reasoning'] },
    faq: [
      { q: 'Why would it kill an idea I like?', a: 'Because writing an angle you already own, or that nobody is asking about, is the most expensive way to waste a week. It kills early and cheaply.' },
    ],
  },

  researcher: {
    reads: [
      { section: 'Dossier', meaning: 'The organized evidence — what is actually known about the topic, sourced.' },
      { section: 'Evidence table', meaning: 'Each claim with its source, confidence, and recency. This is what the writer is allowed to use.' },
      { section: 'Proof mix / gap report', meaning: 'Whether the required proof types (named examples, expert quotes, statistics) were found — and honestly, what is missing.' },
    ],
    glossary: [
      { term: 'Proof mix', def: 'A required count of named companies, expert quotes, and stats — the proof that earns trust and gets cited.' },
      { term: 'Confidence', def: 'How strong a piece of evidence is: primary source and recent beats a secondhand mention.' },
      { term: 'Frontier', def: 'Forward-looking best practice or prediction — allowed only when sourced, never invented.' },
    ],
    data: 'The topic, angle, and your research rules (including required proof types).',
    method: { measured: ['Sources found + their content', 'Proof counts + recency (computed)'], inferred: ['Synthesis', 'Which proof matters'] },
    faq: [
      { q: 'Does it ever invent a source or quote?', a: 'No. Anti-hallucination is the hard rule — every verifiable claim traces to a real source or it is left out, and gaps are reported honestly.' },
    ],
  },

  'spec-builder': {
    reads: [
      { section: 'The spec', meaning: 'The exact structure the writer must follow — sections, order, and the question each answers.' },
      { section: 'Proof mandates', meaning: 'Which evidence must appear where, so the draft cannot quietly drop the proof.' },
      { section: 'Constraints', meaning: 'Format, length, and voice rules the draft is held to.' },
    ],
    glossary: [
      { term: 'Writer spec', def: 'An unambiguous brief — the difference between a draft that answers the question and a draft that meanders.' },
      { term: 'Hard gate', def: 'A requirement the draft cannot pass without meeting — proof, structure, honesty.' },
    ],
    data: 'Your profile, the dossier, and the target format.',
    method: { measured: ['Profile + dossier + format (as provided)'], inferred: ['Structure', 'Section order', 'Proof placement'] },
    faq: [
      { q: 'Why a spec before writing?', a: 'Because a good draft is a decision made in advance. The spec forces the structure and the proof to be settled before words are written.' },
    ],
  },

  writer: {
    reads: [
      { section: 'Draft', meaning: 'A full draft in your voice, following the spec — with the proprietary POV woven in.' },
      { section: 'Voice', meaning: 'Your register and point of view, drawn from your profile — not a generic assistant voice.' },
      { section: 'POV block', meaning: 'The proprietary observation that changes the interpretation — what you believe that the sources do not say.' },
    ],
    glossary: [
      { term: 'Proprietary POV', def: 'Your experience-based observation — the thing no dossier contains. The moat.' },
      { term: 'Human voice', def: 'Specific, concrete, varied rhythm, a real point of view — it reads like a person with scar tissue, not a model.' },
    ],
    data: 'The writer spec and the dossier.',
    method: { measured: ['Spec + evidence (as provided)'], inferred: ['Prose', 'Voice', 'The POV framing'] },
    faq: [
      { q: 'Does it fabricate anecdotes or stats?', a: 'No. Voice comes from the concrete details in the evidence. When there is no experience-based POV, it writes an honest analytical one instead of inventing one.' },
    ],
  },

  editor: {
    reads: [
      { section: 'Edited draft', meaning: 'The draft after fact-checking — fabricated facts removed, genuine analysis kept.' },
      { section: 'Fact vs analysis', meaning: 'Verifiable claims that trace to evidence versus brand point of view that is allowed to stand unsourced.' },
      { section: 'Composite gate', meaning: 'The quality score. Deterministic checks dominate, so a draft cannot pass by satisfying a rubric alone.' },
    ],
    glossary: [
      { term: 'Composite gate', def: 'A weighted score where grounding, proof, and ban-list checks count for most of it — subjective quality is only a tiebreaker.' },
      { term: 'Deterministic-dominated', def: 'Most of the score comes from checks a machine cannot flatter: evidence grounding, proof counts, pattern bans.' },
      { term: 'Publish gate', def: 'The one test no model can run: would someone who knows you recognize this as your thinking? Only you can answer it.' },
    ],
    data: 'The draft and the evidence table.',
    method: { measured: ['Evidence grounding', 'Proof-mix counts', 'Ban-list patterns (computed)'], inferred: ['Edge quality', 'Voice scoring', 'Rewrite decisions'] },
    faq: [
      { q: 'What is the human publish gate for?', a: 'Anti-slop. An LLM can satisfy every rubric and still produce sophisticated slop. The final call — is this your thinking? — stays with you.' },
    ],
  },

  distribute: {
    reads: [
      { section: 'Channel variants', meaning: 'LinkedIn, X, and Substack versions built from the same fact-checked core — no variant can fabricate.' },
      { section: 'Register', meaning: 'Same point of view, different distance: the article is authority, the feed is a conversation, Substack is a letter.' },
      { section: 'Author stamp', meaning: 'Your name and byline on every variant — AI answer engines cite individuals far more than brands.' },
    ],
    glossary: [
      { term: 'Register', def: 'The voice distance for a channel — authoritative for long-form, interactive for the feed.' },
      { term: 'Hard:soft', def: 'The ratio of assertion to invitation per channel. LinkedIn leans interactive; the article leans authoritative.' },
    ],
    data: 'The edited draft and the target channels.',
    method: { measured: ['Edited draft (as provided)'], inferred: ['Channel framing', 'Hooks', 'Register calibration'] },
    faq: [
      { q: 'Can a channel variant say something the article did not?', a: 'No. Every variant is generated from the same fact-checked draft and evidence — a variant can reframe, never invent.' },
    ],
  },
};

// health-monitor shares the Churn Radar runtime and guide.
AGENT_GUIDES['health-monitor'] = AGENT_GUIDES['churn-predictor'];

export const GUIDE_IDS = Object.keys(AGENT_GUIDES);
