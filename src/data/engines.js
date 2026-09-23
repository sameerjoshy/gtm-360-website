// The GTM-360 engine model — one loop, five engines, twenty-five specialist jobs.
// Mirrors @gtm360/agent-registry (canonical, migrated to the bowtie model 2026-09-20).
// Functional names on the surface; the customer journey (Attract · Convert · Grow)
// is the story. Roadmap lists mirror the registry's planned agents.

export const JOURNEY = {
  attract: 'Attract',
  convert: 'Convert',
  grow: 'Grow',
};

export const ENGINES = [
  {
    id: 'strategy',
    name: 'Strategy',
    envelope: 'top',
    color: '#2563eb',
    what: 'Know who to serve. Decide what to do.',
    claim: 'The revenue system starts here — the right customer, the right goal, the honest plan.',
    agents: [
      { id: 'diagnostic', name: 'Diagnostic', role: 'GTM health assessment', take: 'Company URL + revenue stage + team size', give: 'Constraint map with evidence' },
      { id: 'planning-cycle', name: 'Planning Cycle', role: 'Quarterly operating loop', take: 'Prior targets + actuals + proposed goals', give: 'Retrospective + focus areas' },
      { id: 'goal-designer', name: 'Goal Designer', role: 'OKR & ambition design', take: 'Focus areas + business context', give: 'OKR draft + ambition check' },
      { id: 'goal-integrity', name: 'Goal Integrity', role: 'Alignment & gaming monitor', take: 'OKR tree', give: 'Alignment proof + gaming flags' },
      { id: 'market-research', name: 'Market Research', role: 'Total addressable market analyst', take: 'Target segments + geography + sources', give: 'Market map + ranked entry priority' },
      { id: 'roadmap-align', name: 'Roadmap Align', role: 'Goal-to-pipeline alignment planner', take: 'Goals + pipeline shape + capacity', give: 'Alignment report + adjustment slots' },
    ],
    roadmap: [],
    handoff: 'Hands the plan to Marketing — who we serve and what we promise.',
  },
  {
    id: 'marketing',
    name: 'Marketing',
    envelope: 'journey',
    journey: 'attract',
    color: '#10b981',
    what: 'Attract. Position. ABM. Content.',
    claim: 'Citable content, SEO, and account-level positioning that make you the obvious choice.',
    agents: [
      { id: 'seo-analyzer', name: 'SEO Analyzer', role: 'Search visibility & AEO audit', take: 'Topic cluster + domain + competitors', give: 'Query map + AEO score + prioritized fix plan' },
      { id: 'icp-clarifier', name: 'ICP Clarifier', role: 'Account targeting', take: 'CRM deal export + stated ICP', give: 'Actual ICP profile + drift report' },
      { id: 'competitor-intel', name: 'Competitor Intel', role: 'Competitive monitor', take: 'Competitor name + website', give: 'Intel brief + attribution' },
      { id: 'content-radar', name: 'Content Radar', role: 'Whitespace scanner', take: 'Profile + focus', give: 'Ranked opportunity cards' },
      { id: 'angle-validator', name: 'Angle Validator', role: 'Proceed / pivot / kill', take: 'Topic + angle + existing content', give: 'Decision with reasoning' },
      { id: 'researcher', name: 'Researcher', role: 'Grounded evidence pipeline', take: 'Topic + angle + research rules', give: 'Dossier + evidence table' },
      { id: 'spec-builder', name: 'Spec Builder', role: 'Writer specification', take: 'Profile + dossier + format', give: 'Unambiguous writer spec' },
      { id: 'writer', name: 'Writer', role: 'On-voice first draft', take: 'Spec + dossier', give: 'Full draft in your voice' },
      { id: 'editor', name: 'Editor', role: 'Fact-check & quality gate', take: 'Draft + evidence table', give: 'Edited draft + proof check' },
      { id: 'distribute', name: 'Distribute', role: 'Channel variant builder', take: 'Edited draft + channels', give: 'LinkedIn + YouTube + Substack' },
      { id: 'campaign-builder', name: 'Campaign Builder', role: 'Multi-channel campaign architect', take: 'Message + segment + window', give: 'Campaign calendar + asset list' },
      { id: 'account-planner', name: 'Account Planner', role: 'Target account selection & tiering', take: 'Account universe + ICP', give: 'Tiered accounts + focus set' },
      { id: 'abm-playbook', name: 'ABM Playbook', role: 'Account-based positioning builder', take: 'Named accounts + signals', give: 'Per-account playbook' },
    ],
    roadmap: [],
    handoff: 'Hands the story to Sales — content that opened the door, now backed by a signal.',
  },
  {
    id: 'sales',
    name: 'Sales',
    envelope: 'journey',
    journey: 'convert',
    color: '#d97706',
    what: 'Signal → outreach → qualify → close.',
    claim: 'The pipeline that fills and closes — every step grounded in evidence, approved by a human.',
    agents: [
      { id: 'listener', name: 'Listener', role: 'Market signal monitor', take: 'ICP + watch list + sensitivity', give: 'Signal digest + vetoed signals' },
      { id: 'signals-scout', name: 'Signals Scout', role: 'Signal-to-intent owner', take: 'Target domain + ICP + lookback', give: 'Intent assessment + fit tier' },
      { id: 'sniper', name: 'Sniper', role: 'Precision outreach drafter', take: 'Signal brief + persona + channel', give: 'Draft message + self-critique' },
      { id: 'qualifier', name: 'Qualifier', role: 'Deal qualification engine', take: 'Deal context + stage + framework', give: 'Scorecard + gap list' },
      { id: 'deal-room', name: 'Deal Room', role: 'Live deal intelligence', take: 'Deal notes + stakeholders + transcript', give: 'Deal brief + risk log' },
      { id: 'video-outreach', name: 'Video Outreach', role: 'Personalised video brief drafter', take: 'Signal brief + persona', give: 'Video script + delivery note' },
      { id: 'pricing-strategist', name: 'Pricing Strategist', role: 'Deal pricing & packaging analyst', take: 'Deal context + price history', give: 'Anchor + guardrail' },
      { id: 'negotiation-coach', name: 'Negotiation Coach', role: 'Live negotiation advisor', take: 'Deal brief + known pressures', give: 'Concession map + call prep' },
    ],
    roadmap: [],
    handoff: 'Hands the customer to Expansion — closed, onboarded, and owned.',
  },
  {
    id: 'expansion',
    name: 'Expansion',
    envelope: 'journey',
    journey: 'grow',
    color: '#0d9488',
    what: 'Retain the book. Grow back into the account.',
    claim: 'Customers don\'t just stay — they compound. Land-and-expand, run on evidence.',
    agents: [
      { id: 'health-monitor', name: 'Health Monitor', role: 'Account health scoring', take: 'Account + usage + support history', give: 'Health score + change driver' },
      { id: 'churn-predictor', name: 'Churn Predictor', role: 'Retention risk engine', take: 'Health data + renewal + contract value', give: 'Risk tier + evidence' },
      { id: 'expansion-radar', name: 'Expansion Radar', role: 'Upsell signal detection', take: 'Health score + utilisation + domain', give: 'Readiness score + expansion brief' },
      { id: 'onboarding-coach', name: 'Onboarding Coach', role: 'Time-to-value planner', take: 'Account context + product surface', give: 'Onboarding path + success metrics' },
      { id: 'renewal-analyst', name: 'Renewal Analyst', role: 'Renewal strategy planner', take: 'Health data + renewal date', give: 'Renewal plan + value proof' },
      { id: 'cross-sell-scout', name: 'Cross-Sell Scout', role: 'Cross-sell & multi-product scout', take: 'Health score + usage + support', give: 'Cross-sell brief + readiness score' },
    ],
    roadmap: [],
    handoff: 'Hands the learnings to Operations — what retained, what churned, what grew.',
  },
  {
    id: 'operations',
    name: 'Operations',
    envelope: 'bottom',
    color: '#475569',
    what: 'Validate the numbers. Learn from every deal.',
    claim: 'Trustworthy numbers, validated before you act — and the loop feeds a better next quarter.',
    agents: [
      { id: 'hygiene', name: 'Hygiene', role: 'CRM data integrity', take: 'Pipeline data + audit scope', give: 'Hygiene report + forecast impact' },
      { id: 'forecast-analyser', name: 'Forecast Analyser', role: 'Forecast confidence engine', take: 'Pipeline + hygiene + period', give: 'Two numbers + gap analysis' },
      { id: 'win-loss', name: 'Win/Loss', role: 'Win/loss analyst', take: 'Deal outcomes', give: 'Pattern report' },
      { id: 'pipeline-auditor', name: 'Pipeline Auditor', role: 'Pipeline integrity auditor', take: 'Pipeline data + audit depth', give: 'Integrity report + forecast risk' },
      { id: 'attribution', name: 'Attribution', role: 'Revenue attribution analyst', take: 'Closed deals + touch history', give: 'Revenue by engine + spend signal' },
      { id: 'comp-quota', name: 'Comp & Quota', role: 'Quota & compensation designer', take: 'Territory data + comp structure', give: 'Quota plan + comp model' },
      { id: 'workflow-builder', name: 'Workflow Builder', role: 'RevOps automation architect', take: 'Process description + CRM platform', give: 'Buildable workflow spec' },
      { id: 'chief-of-staff', name: 'Chief of Staff', role: 'Cross-engine orchestrator', take: 'Engine outputs + priorities', give: 'Weekly command brief + risk register' },
    ],
    roadmap: [],
    handoff: 'Enhances Strategy — what the loop learned feeds next quarter\'s plan.',
  },
];

export const ENGINES_BY_ID = Object.fromEntries(ENGINES.map((e) => [e.id, e]));

export const AGENT_TOTAL = ENGINES.reduce((n, e) => n + e.agents.length, 0);

// The journey, mapped to its engines — for the /system explainer table.
export const JOURNEY_TABLE = [
  { moment: 'A customer has a problem you haven\'t found yet', stage: 'Understand', engine: 'Strategy — know who to serve', color: '#2563eb' },
  { moment: 'They search, read, and compare', stage: 'Attract', engine: 'Marketing — content, SEO, ABM', color: '#10b981' },
  { moment: 'They talk, evaluate, and decide', stage: 'Convert', engine: 'Sales — outbound to close', color: '#d97706' },
  { moment: 'They onboard, succeed, and renew', stage: 'Grow', engine: 'Expansion — retain + expand', color: '#0d9488' },
  { moment: 'They trust the numbers enough to bet the quarter', stage: 'Validate', engine: 'Operations — hygiene, forecast, learnings', color: '#475569' },
];