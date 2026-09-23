// GTM Framework — single source of truth for the Crew home page.
// Derived from D:\OKR-planner\gtm_frameworks_all_processes.md.
// Maps: Layer → Sub-process → { workflow stages, agents, tools (with alternates) }

export const TOOL_CATALOG = {
  // Strategy / Research
  'tavily':   { name: 'Tavily',         fn: 'Live web/company research', alt: ['Exa', 'Apify', 'Perplexity'] },
  'exa':      { name: 'Exa',            fn: 'Semantic web search',       alt: ['Tavily', 'Apify', 'Brave Search'] },
  'apify':    { name: 'Apify',          fn: 'Web scraping / data crawling', alt: ['Zyte', 'ScraperAPI', 'Octoparse'] },

  // List building / Data
  'ai-ark':   { name: 'AI Ark',         fn: 'AI-driven list building',   alt: ['Clay', 'ZoomInfo', 'Lusha'] },
  'apollo':   { name: 'Apollo',         fn: 'Contact & company database', alt: ['ZoomInfo', 'Lusha', 'Cognism'] },
  'prospeo':  { name: 'Prospeo',        fn: 'Email finding & verification', alt: ['Hunter', 'Snov.io', 'Dropcontact'] },
  'google-maps': { name: 'Google Maps', fn: 'Local business data',       alt: ['OpenStreetMap', 'Yelp API'] },
  'linkedin': { name: 'LinkedIn (job boards)', fn: 'Firmographic & hiring signals', alt: ['Indeed', 'Apollo', 'SellScale'] },

  // Signals
  'parallel': { name: 'Parallel',       fn: 'Buying-intent signals',     alt: ['Bombora', '6sense', 'Common Room'] },
  'apify-signals': { name: 'Apify (signals)', fn: 'Intent data scraping', alt: ['Exa', 'Zyte'] },

  // Enrichment
  'bitscale': { name: 'Bitscale',       fn: 'Lead enrichment & qualification', alt: ['Clay', 'Clearout', 'Enrow'] },
  'clay':     { name: 'Clay',           fn: 'Enrichment + AI workflows', alt: ['Bitscale', 'Enrow', 'Insycle'] },

  // CRM / Pipeline
  'hubspot':  { name: 'HubSpot',        fn: 'CRM (free tier)',           alt: ['Salesforce', 'Pipedrive', 'Attio'] },
  'attio':    { name: 'Attio',          fn: 'Modern CRM',                alt: ['HubSpot', 'Salesforce'] },

  // Personalization / Copy
  'claude':   { name: 'Claude',         fn: 'Copy & workflow orchestration', alt: ['OpenAI', 'DeepSeek', 'Gemini'] },
  'deepseek': { name: 'DeepSeek',       fn: 'Reasoning + copy',          alt: ['Claude', 'OpenAI'] },
  'gpt':      { name: 'OpenAI (GPT)',   fn: 'Copy & analysis',           alt: ['Claude', 'DeepSeek'] },

  // Sending
  'smartlead':{ name: 'Smartlead',      fn: 'Cold email sending, inbox rotation', alt: ['Instantly', 'Lemlist', 'Woodpecker'] },
  'instantly':{ name: 'Instantly',      fn: 'Cold email sending',        alt: ['Smartlead', 'Lemlist'] },
  'lemlist':  { name: 'Lemlist',        fn: 'Outreach + sequences',      alt: ['Smartlead', 'Instantly'] },

  // Automation
  'n8n':      { name: 'n8n',            fn: 'Workflow automation',       alt: ['Zapier', 'Make', 'Airflow'] },
  'zapier':   { name: 'Zapier',         fn: 'No-code automation',        alt: ['Make', 'n8n', 'Relay'] },
  'make':     { name: 'Make',           fn: 'Visual automation',         alt: ['Zapier', 'n8n'] },

  // Communication
  'slack':    { name: 'Slack',          fn: 'Team communication / agent alerts', alt: ['Teams', 'Discord'] },
  'notion':   { name: 'Notion',         fn: 'Docs / knowledge / brain',  alt: ['Confluence', 'Obsidian'] },
  'supabase': { name: 'Supabase',       fn: 'Data + auth + realtime',    alt: ['Postgres', 'Firebase'] },

  // Analytics / Forecasting
  'metabase': { name: 'Metabase',       fn: 'Dashboarding',              alt: ['Looker Studio', 'Power BI', 'Grafana'] },
  'ga':       { name: 'Google Analytics', fn: 'Web analytics',           alt: ['Plausible', 'Mixpanel'] },
  'plausible':{ name: 'Plausible',      fn: 'Privacy-first analytics',   alt: ['GA', 'Fathom'] },
}

// Agent slots — generated from the canonical registry (single source of truth).
// status: 'live' = exists today, 'demo' = working demo, 'build' = planned.
import { AGENT_SLOTS } from './agentSlots.js'
export { AGENT_SLOTS }

// ── LAYERS ──────────────────────────────────────────────────────────────
export const LAYERS = [
  {
    id: 'L0',
    name: 'Planning & Governance',
    color: '#0A192F',
    blurb: 'Where the strategy is set and kept honest: goals, structure, metrics, reviews.',
    processes: [
      {
        name: 'Annual GTM Strategy',
        workflow: ['Market Research', 'Strategic Options', 'Strategy Selection', 'Resource Allocation', 'Execution Planning', 'Quarterly Reviews', 'Strategy Refinement'],
        agents: ['market-research', 'planning-cycle', 'diagnostic'],
        tools: ['tavily', 'exa', 'notion'],
      },
      {
        name: 'Market & Segment Prioritization',
        workflow: ['Market Scanning', 'Opportunity ID', 'Market Sizing', 'Competitive Assessment', 'Prioritization', 'Segment Definition', 'GTM Planning'],
        agents: ['market-research', 'diagnostic'],
        tools: ['exa', 'tavily', 'apify'],
      },
      {
        name: 'Competitive Positioning',
        workflow: ['Competitive Research', 'Positioning Analysis', 'Message Development', 'Differentiation', 'Messaging Hierarchy', 'Sales/Mktg Alignment', 'Monitoring'],
        agents: ['competitor-intel', 'market-research'],
        tools: ['exa', 'apify', 'notion'],
      },
      {
        name: 'Quarterly GTM Planning',
        workflow: ['Strategy Review', 'Objective Setting', 'Initiative Planning', 'Resource Allocation', 'Team Alignment', 'Execution Kickoff', 'Progress Tracking', 'Results Review'],
        agents: ['planning-cycle', 'diagnostic'],
        tools: ['notion', 'supabase'],
      },
      {
        name: 'Pipeline Planning',
        workflow: ['Revenue Target', 'Conversion Modeling', 'Pipeline Requirements', 'Forecast Build', 'Risk Assessment', 'Mitigation', 'Tracking', 'Adjustment'],
        agents: ['pipeline-auditor', 'forecast-analyser'],
        tools: ['hubspot', 'metabase', 'supabase'],
      },
      {
        name: 'Sales Playbook Development',
        workflow: ['Segment Definition', 'Use Case Mapping', 'Messaging', 'Objection ID', 'Solution Architecture', 'Playbook Creation', 'Enablement', 'Iteration'],
        agents: ['workflow-builder', 'sniper'],
        tools: ['claude', 'notion', 'hubspot'],
      },
      {
        name: 'GTM Metrics Framework',
        workflow: ['Metric Definition', 'Data Source ID', 'Calculation Logic', 'Baseline', 'Target', 'Dashboard', 'Monitoring', 'Optimization'],
        agents: ['pipeline-auditor', 'attribution'],
        tools: ['metabase', 'supabase', 'ga'],
      },
      {
        name: 'Dashboard & Reporting',
        workflow: ['Needs Assessment', 'Metric Selection', 'Dashboard Design', 'Data Integration', 'Automation', 'Distribution', 'Consumption', 'Refinement'],
        agents: ['attribution', 'pipeline-auditor'],
        tools: ['metabase', 'supabase', 'n8n'],
      },
      {
        name: 'Data Integrity & Architecture',
        workflow: ['Data Audit', 'Quality ID', 'Governance Plan', 'Integration', 'Validation', 'Monitoring', 'Audit', 'Improvement'],
        agents: ['hygiene'],
        tools: ['supabase', 'n8n', 'metabase'],
      },
      {
        name: 'Decision-Making Framework',
        workflow: ['Decision Type', 'Authority Mapping', 'Process Docs', 'Training', 'Execution', 'Review', 'Feedback', 'Refinement'],
        agents: ['planning-cycle'],
        tools: ['notion', 'slack'],
      },
      {
        name: 'Weekly / Monthly / Quarterly Reviews',
        workflow: ['Status Collection', 'Trend Analysis', 'Discussion', 'Decision Making', 'Action Items', 'Follow-up', 'Learning Capture'],
        agents: ['planning-cycle', 'diagnostic'],
        tools: ['metabase', 'notion', 'slack'],
      },
      {
        name: 'Cross-Functional Alignment',
        workflow: ['Stakeholder ID', 'Alignment Assessment', 'Meeting Design', 'Facilitation', 'Decision', 'Action Plan', 'Follow-up', 'Feedback'],
        agents: ['planning-cycle'],
        tools: ['notion', 'slack'],
      },
      {
        name: 'Team Training & Onboarding',
        workflow: ['Needs Assessment', 'Curriculum Design', 'Content Dev', 'Delivery', 'Execution', 'Verification', 'Reinforcement', 'Learning'],
        agents: ['workflow-builder'],
        tools: ['notion', 'claude', 'slack'],
      },
      {
        name: 'Product Roadmap Alignment',
        workflow: ['GTM Needs Assessment', 'Product Requirements', 'Release Planning', 'Launch Strategy', 'Go-to-Market Execution', 'Customer Feedback', 'Roadmap Refinement'],
        agents: ['roadmap-align', 'planning-cycle'],
        tools: ['notion', 'supabase'],
      },
      {
        name: 'Revenue Model & Pricing Strategy',
        workflow: ['Customer Research', 'Value Analysis', 'Competitive Benchmarking', 'Pricing Model Design', 'Packaging Architecture', 'Testing', 'Optimization'],
        agents: ['pricing-strategist', 'market-research'],
        tools: ['exa', 'apify', 'notion'],
      },
      {
        name: 'Campaign Planning',
        workflow: ['Campaign Objectives', 'Audience Definition', 'Channel Selection', 'Content & Creative Planning', 'Budget Allocation', 'Execution Setup', 'Performance Tracking', 'Optimization'],
        agents: ['campaign-builder', 'attribution'],
        tools: ['n8n', 'hubspot', 'metabase'],
      },
      {
        name: 'Territory Planning',
        workflow: ['Account Universe Definition', 'Account Segmentation', 'Capacity Planning', 'Territory Design', 'Rep Assignment', 'Quota Setting', 'Performance Tracking', 'Rebalancing'],
        agents: ['comp-quota', 'pipeline-auditor'],
        tools: ['hubspot', 'metabase'],
      },
      {
        name: 'Resource Planning',
        workflow: ['Demand Forecasting', 'Capability Gap Analysis', 'Hiring Plan', 'Budget Allocation', 'Tool Investment', 'Execution', 'Utilization Tracking', 'Optimization'],
        agents: ['planning-cycle'],
        tools: ['notion', 'metabase'],
      },
      {
        name: 'Marketing Calendar Development',
        workflow: ['Annual Theme Definition', 'Campaign Identification', 'Content Planning', 'Channel Allocation', 'Timeline Creation', 'Resource Assignment', 'Publishing Schedule', 'Performance Tracking'],
        agents: ['campaign-builder', 'writer'],
        tools: ['notion', 'n8n'],
      },
      {
        name: 'Weekly / Monthly Execution Plan',
        workflow: ['Priority Setting', 'Task Definition', 'Owner Assignment', 'Deadline Setting', 'Resource Allocation', 'Kickoff', 'Progress Tracking', 'Adjustment'],
        agents: ['planning-cycle'],
        tools: ['notion', 'slack'],
      },
      {
        name: 'Attribution & ROI Tracking',
        workflow: ['Touch Point Definition', 'Attribution Model Design', 'Data Collection Setup', 'Analysis Framework', 'Campaign Attribution', 'ROI Calculation', 'Optimization'],
        agents: ['attribution', 'campaign-builder'],
        tools: ['ga', 'metabase', 'supabase'],
      },
      {
        name: 'Weekly GTM Standup',
        workflow: ['Status Collection', 'Issue Identification', 'Discussion', 'Decision Making', 'Action Items', 'Follow-up', 'Resolution', 'Learning Capture'],
        agents: ['planning-cycle'],
        tools: ['metabase', 'slack', 'notion'],
      },
    ],
  },
  {
    id: 'L1',
    name: 'Demand Generation',
    color: '#0284C7',
    blurb: 'Creating pipeline: outbound, inbound, events, partnerships, PLG, community.',
    processes: [
      {
        name: 'List Building',
        workflow: ['ICP Definition', 'Data Source ID', 'List Sourcing', 'Dedup', 'Validation', 'Quality Check', 'Export'],
        agents: ['signals-scout', 'hygiene'],
        tools: ['ai-ark', 'apollo', 'prospeo', 'google-maps', 'linkedin'],
      },
      {
        name: 'Signal Collection',
        workflow: ['Raw List', 'Signal Source', 'Data Collection', 'Aggregation', 'Recency Scoring', 'Tagging', 'Validation', 'Output'],
        agents: ['signals-scout', 'listener'],
        tools: ['parallel', 'apify-signals', 'exa'],
      },
      {
        name: 'Shortlist / Prioritization',
        workflow: ['Prospects with Signals', 'Scoring Model', 'ICP Fit Scoring', 'Signal Strength', 'Combined Ranking', 'Threshold', 'Segmentation', 'Shortlist'],
        agents: ['signals-scout', 'qualifier'],
        tools: ['parallel', 'clay', 'supabase'],
      },
      {
        name: 'Enrichment',
        workflow: ['Shortlisted', 'Data Provider', 'Enrichment Pulls', 'Company/Contact Data', 'Decision-Maker Mapping', 'Challenge ID', 'Validation', 'Profiles'],
        agents: ['qualifier', 'hygiene'],
        tools: ['bitscale', 'clay', 'apollo'],
      },
      {
        name: 'Personalization',
        workflow: ['Enriched Profiles', 'Signal-to-Angle Mapping', 'Email Copy', 'Subject Lines', 'Sequence Design', 'Template Variation', 'Testing', 'Ready to Send'],
        agents: ['sniper', 'writer'],
        tools: ['claude', 'smartlead', 'deepseek'],
      },
      {
        name: 'Sending',
        workflow: ['Emails Ready', 'Infrastructure Setup', 'Throttling/Rotation', 'Scheduling', 'Delivery', 'Bounce Mgmt', 'Open/Click', 'Monitoring'],
        agents: ['sniper', 'hygiene'],
        tools: ['smartlead', 'instantly', 'n8n'],
      },
      {
        name: 'Follow-up & Reply Handling',
        workflow: ['Emails in Flight', 'Reply Monitoring', 'Reply Qualification', 'Response Templating', 'Sequence Continuation', 'Non-Reply Escalation', 'Objection Handling', 'Handoff'],
        agents: ['sniper', 'qualifier'],
        tools: ['smartlead', 'claude', 'slack'],
      },
      {
        name: 'Content Strategy',
        workflow: ['Audience', 'Topic Research', 'Pillar Selection', 'Content Planning', 'Format Mix', 'Editorial Calendar', 'Creation', 'Distribution', 'Measurement', 'Optimization'],
        agents: ['writer', 'listener'],
        tools: ['claude', 'exa', 'notion'],
      },
      {
        name: 'SEO & Organic Search',
        workflow: ['Keyword Research', 'Technical Audit', 'On-Page', 'Content Strategy', 'Link Building', 'Ranking Monitor', 'Traffic', 'Conversion', 'Improvement'],
        agents: ['seo-analyzer', 'writer'],
        tools: ['exa', 'ga', 'plausible'],
      },
      {
        name: 'Paid Advertising',
        workflow: ['Objectives', 'Audience', 'Channel', 'Budget', 'Creative', 'Landing Page', 'Launch', 'Monitoring', 'Optimization', 'ROI'],
        agents: ['campaign-builder', 'attribution'],
        tools: ['ga', 'metabase', 'make'],
      },
      {
        name: 'Lead Capture & Nurture',
        workflow: ['Form Design', 'Capture Setup', 'Lead Scoring', 'Trigger Def', 'Nurture Sequence', 'Execution', 'Engagement Monitor', 'Scoring Adjust', 'Handoff'],
        agents: ['listener', 'qualifier'],
        tools: ['hubspot', 'n8n', 'smartlead'],
      },
      {
        name: 'Marketing Automation',
        workflow: ['Platform Selection', 'Integration', 'Workflow Design', 'Sequence Creation', 'Trigger Def', 'Monitoring', 'Lead Scoring', 'Insights', 'Optimization'],
        agents: ['campaign-builder', 'listener'],
        tools: ['n8n', 'hubspot', 'make'],
      },
    ],
  },
  {
    id: 'L2',
    name: 'Sales Acceleration',
    color: '#D97706',
    blurb: 'Turning pipeline into revenue: qualification, SDR process, enterprise sales, enablement.',
    processes: [
      {
        name: 'Lead Scoring',
        workflow: ['Behavior Data', 'Firmographic Data', 'Scoring Model', 'Weight Assignment', 'Score Calculation', 'Threshold', 'Prioritization', 'Testing', 'Optimization'],
        agents: ['qualifier', 'hygiene'],
        tools: ['hubspot', 'supabase', 'clay'],
      },
      {
        name: 'Lead Routing',
        workflow: ['Territory Def', 'Assignment Logic', 'Lead Received', 'Scoring', 'Routing Rules', 'Rep Assignment', 'Notification', 'Acceptance', 'Tracking'],
        agents: ['qualifier'],
        tools: ['hubspot', 'n8n'],
      },
      {
        name: 'ICP Validation',
        workflow: ['ICP Definition', 'Lead Assessment', 'Fit Scoring', 'Categorization', 'Qualified Pass', 'Unqualified Flag', 'Nurture', 'Feedback', 'ICP Refinement'],
        agents: ['icp-clarifier', 'qualifier'],
        tools: ['clay', 'hubspot', 'supabase'],
      },
      {
        name: 'Initial Qualification Call',
        workflow: ['Lead Routed', 'Scheduling', 'Preparation', 'Discovery', 'Qualification', 'Decision', 'Handoff / Nurture'],
        agents: ['qualifier', 'deal-room'],
        tools: ['hubspot', 'notion'],
      },
      {
        name: 'Outbound Prospecting',
        workflow: ['Target List', 'Outreach Strategy', 'Message Dev', 'Outreach Execution', 'Response Monitor', 'Follow-up', 'Engagement', 'Meeting Conversion', 'Handoff'],
        agents: ['signals-scout', 'sniper'],
        tools: ['smartlead', 'parallel', 'claude'],
      },
      {
        name: 'Qualification & Discovery',
        workflow: ['Contact Made', 'Qualification Qs', 'Pain ID', 'BANT', 'Use Case Fit', 'Decision', 'Qualified / Disqualified', 'Next Steps'],
        agents: ['qualifier', 'deal-room'],
        tools: ['hubspot', 'notion'],
      },
      {
        name: 'Meeting Setting',
        workflow: ['Qualified', 'Calendar Coord', 'Agenda', 'Stakeholder ID', 'Prep', 'Confirmation', 'AE Briefing', 'Tracking', 'Follow-up'],
        agents: ['sniper'],
        tools: ['hubspot', 'smartlead'],
      },
      {
        name: 'Handoff to AE',
        workflow: ['Meeting Confirmed', 'Context Docs', 'AE Brief', 'Deal Structure', 'Account Assignment', 'Tracking', 'Progress', 'Deal Review'],
        agents: ['deal-room', 'pipeline-auditor'],
        tools: ['hubspot', 'notion'],
      },
      {
        name: 'Forecast & Pipeline Management',
        workflow: ['Leads Generated', 'Pipeline Capture', 'Stage Assignment', 'Forecast Model', 'Pipeline Review', 'Risk Assessment', 'Accuracy Measure', 'Adjustment', 'Reporting'],
        agents: ['forecast-analyser', 'pipeline-auditor'],
        tools: ['hubspot', 'metabase', 'supabase'],
      },
      {
        name: 'Deal Strategy',
        workflow: ['Opportunity ID', 'Deal Analysis', 'Stakeholder Map', 'Competition', 'Win Strategy', 'Pricing', 'Timeline', 'Execution', 'Win/Loss'],
        agents: ['deal-room', 'competitor-intel'],
        tools: ['hubspot', 'notion', 'exa'],
      },
      {
        name: 'Stakeholder Management',
        workflow: ['Stakeholder ID', 'Role Mapping', 'Relationship Assessment', 'Engagement Strategy', 'Outreach', 'Relationship Building', 'Influence Map', 'Engagement'],
        agents: ['deal-room'],
        tools: ['hubspot', 'apollo'],
      },
      {
        name: 'Negotiation & Closing',
        workflow: ['Proposal', 'Objection ID', 'Negotiation', 'Terms', 'Procurement', 'Signature', 'Close', 'CRM Update', 'Handoff to CS'],
        agents: ['deal-room', 'sniper'],
        tools: ['hubspot', 'notion', 'smartlead'],
      },
      {
        name: 'Sales Training',
        workflow: ['Needs Assessment', 'Curriculum Design', 'Content Dev', 'Delivery', 'Execution', 'Verification', 'Certification', 'Reinforcement'],
        agents: ['workflow-builder'],
        tools: ['notion', 'claude'],
      },
      {
        name: 'Manager Coaching & Development',
        workflow: ['Manager Assessment', 'Dev Plan', 'Coaching Curriculum', 'Execution', 'Feedback', 'Practice', 'Reinforcement', 'Monitoring'],
        agents: ['workflow-builder'],
        tools: ['notion', 'claude'],
      },
    ],
  },
  {
    id: 'L3',
    name: 'Customer Success & Retention',
    color: '#059669',
    blurb: 'Protecting and growing revenue after the sale: onboarding, adoption, retention, renewal.',
    processes: [
      {
        name: "Customer Onboarding Strategy",
        workflow: ["Success Planning","Stakeholder Mapping","Timeline & Milestones","Training & Enablement Plan","Success Metrics Definition","Communication & Engagement Plan","Kickoff Preparation"],
        agents: ["onboarding-coach","health-monitor"],
        tools: ["hubspot","notion"],
      },
      {
        name: "Customer Onboarding Implementation",
        workflow: ["Setup & Configuration","User Provisioning","Technical Integration","Training Delivery","Adoption Monitoring","Support & Troubleshooting","Adoption Acceleration"],
        agents: ["onboarding-coach"],
        tools: ["hubspot","n8n","notion"],
      },
      {
        name: "Value Realization & Win Planning",
        workflow: ["Baseline Establishment","Quick Win Identification","Value Tracking Setup","Milestone Planning","Business Review Planning","ROI Documentation"],
        agents: ["onboarding-coach","health-monitor"],
        tools: ["hubspot","metabase"],
      },
      {
        name: "Training & Certification Program",
        workflow: ["Curriculum Design","Role-Based Learning Paths","Training Content Development","Delivery Planning","Training Delivery","Assessment & Certification","Ongoing Education & Updates"],
        agents: ["onboarding-coach","workflow-builder"],
        tools: ["notion","claude"],
      },
      {
        name: "Customer Health Monitoring & Renewal Readiness",
        workflow: ["Health Indicator Selection","Real-Time Monitoring","Risk Assessment","Intervention Planning","Proactive Engagement","Renewal Readiness Assessment"],
        agents: ["health-monitor","renewal-analyst"],
        tools: ["metabase","supabase"],
      },
      {
        name: "Feature Adoption Campaigns",
        workflow: ["Feature Selection & Prioritization","User Segmentation","Campaign Design","Launch & Promotion","Adoption Tracking & Support","Analysis & Reporting"],
        agents: ["expansion-radar","health-monitor"],
        tools: ["metabase","n8n"],
      },
      {
        name: "Usage Monitoring & Proactive Support",
        workflow: ["Baseline Usage Definition","Real-Time Monitoring","Alert Configuration","Proactive Outreach"],
        agents: ["health-monitor"],
        tools: ["metabase","supabase","n8n"],
      },
      {
        name: "Learning & Certification Platform",
        workflow: ["Learning Platform Evaluation & Selection","Learning & Content Strategy","Content Production Pipeline","Content Development & Launch","Learner Enrollment & Progress Tracking","Assessment & Certification","Usage Analytics & Continuous Improvement"],
        agents: ["onboarding-coach","workflow-builder"],
        tools: ["notion","supabase"],
      },
      {
        name: "Community & Peer Learning",
        workflow: ["Community Strategy & Goals","Community Platform Setup","Moderator & Community Manager Preparation","Initial Member Recruitment","Content & Discussion Kickoff","Recognition & Gamification","Analytics & Evolution"],
        agents: ["listener","campaign-builder"],
        tools: ["notion","slack"],
      },
      {
        name: "Churn Prevention & At-Risk Recovery",
        workflow: ["At-Risk Customer Identification","Root Cause Analysis","Intervention Strategy","Executive Engagement","Customer Retention Negotiation","Success Plan Refresh","Follow-up & Engagement"],
        agents: ["churn-predictor","health-monitor"],
        tools: ["hubspot","smartlead","slack"],
      },
      {
        name: "Expansion & Upsell Identification",
        workflow: ["Customer Maturity Assessment","Expansion Opportunity Identification","Business Case Development","Customer Alignment","Executive Sponsorship & Proposal Prep"],
        agents: ["expansion-radar","listener"],
        tools: ["metabase","parallel","supabase"],
      },
      {
        name: "Renewal & Negotiation Process",
        workflow: ["Renewal Planning & Qualification","Value & ROI Documentation","Renewal Negotiation Preparation","Renewal Conversation & Value Review","Negotiation & Terms Refinement","Contract Closure & Signature","Celebration & Next Phase Planning"],
        agents: ["renewal-analyst","deal-room"],
        tools: ["hubspot","smartlead"],
      },
      {
        name: "Customer Health Scoring Model",
        workflow: ["Health Metrics Selection","Data Architecture & Integration","Scoring Model Development","Validation & Testing","Score Deployment & Dashboard","Monitoring & Alert Configuration","Continuous Model Improvement"],
        agents: ["health-monitor","churn-predictor"],
        tools: ["metabase","supabase"],
      },
      {
        name: "Customer Satisfaction & NPS Program",
        workflow: ["NPS Program Strategy & Design","Survey Development & Testing","Survey Deployment & Collection","Response Analysis & Segmentation","Detractor Follow-Up & Voice of Customer","Action Planning & Internal Communication","Results Communication & Celebration"],
        agents: ["listener","health-monitor"],
        tools: ["metabase","supabase"],
      },
      {
        name: "Customer Success Metrics & Dashboard",
        workflow: ["Success Metrics Framework","Data Architecture & Integration","Dashboard Design & Visualization","Dashboard Implementation","Team Training & Adoption","Usage Monitoring & Support","Continuous Improvement & Optimization"],
        agents: ["health-monitor","pipeline-auditor"],
        tools: ["metabase","supabase"],
      },
    ],
  },
  {
    id: 'L4',
    name: 'Account-Based Growth',
    color: '#7C3AED',
    blurb: 'Concentrated expansion: target accounts, land-and-expand, logo growth.',
    processes: [
      {
        name: "Target Account List Development (TAL)",
        workflow: ["TAL Criteria Definition","Account Data Sourcing","Account Scoring & Ranking","Account Qualification","TAL Prioritization & Segmentation","Account Assignment & Team Allocation"],
        agents: ["signals-scout","qualifier"],
        tools: ["parallel","apollo","supabase"],
      },
      {
        name: "Account Profiling & Intelligence Gathering",
        workflow: ["Comprehensive Company Research","Organizational Structure & Stakeholder Mapping","Problem & Pain Point Analysis","Buying Process Understanding","Technology Stack & System Assessment"],
        agents: ["signals-scout","competitor-intel"],
        tools: ["exa","tavily","apollo"],
      },
      {
        name: "Competitive Account Assessment",
        workflow: ["Incumbent & Competitor Identification","Win/Loss Pattern Analysis","Pricing & Offer Comparison","Feature/Capability Comparison","Objection Handling Strategy"],
        agents: ["competitor-intel"],
        tools: ["exa","apify"],
      },
      {
        name: "Expansion Opportunity Identification",
        workflow: ["Current Revenue & Usage Analysis","Expansion Type Identification","Opportunity Sizing & ROI","Go/No-Go Decision"],
        agents: ["expansion-radar","listener"],
        tools: ["metabase","parallel","supabase"],
      },
      {
        name: "Department / Division Expansion Strategy",
        workflow: ["Target Department Analysis","Use Case Development","Business Case Development","Department Stakeholder Identification & Mapping","Pilot Program Design & Execution","Full Department Expansion & Implementation"],
        agents: ["expansion-radar","sniper"],
        tools: ["claude","metabase","notion"],
      },
      {
        name: "Add-On & Module Expansion",
        workflow: ["Feature/Module Expansion Analysis","Adoption & Readiness Assessment","Pricing & Bundling Strategy","Business Justification & Proposal","Sales Team Training & Enablement","Customer Launch & Promotion"],
        agents: ["expansion-radar","pricing-strategist"],
        tools: ["metabase","claude"],
      },
      {
        name: "Expansion Sales Process",
        workflow: ["Opportunity Discovery","Needs Analysis & Assessment","Solution Design & Demo","Proposal & Negotiation","Contract & Implementation Planning","Successful Adoption & Value Realization"],
        agents: ["deal-room","expansion-radar"],
        tools: ["hubspot","claude"],
      },
      {
        name: "Land-and-Expand Execution",
        workflow: ["Land Strategy Development","Expansion Opportunity Mapping","Expansion Trigger Definition","Expansion Acceleration Tactics","Expansion Execution & Monitoring"],
        agents: ["signals-scout","sniper"],
        tools: ["apollo","smartlead","parallel"],
      },
      {
        name: "ABM Program Management",
        workflow: ["High-Value Account Prioritization","Account-Specific Strategy Development","Personalized Content & Messaging Development","Multi-Channel Campaign Execution","Engagement Tracking & Analytics","Continuous Optimization & Results"],
        agents: ["signals-scout","campaign-builder"],
        tools: ["parallel","n8n","supabase"],
      },
      {
        name: "Account Executive Coordination",
        workflow: ["Account Assignment & Territory Planning","AE Strategy Alignment","Opportunity Pipeline Planning","Regular Account Reviews & Coaching","Forecast & Results Management"],
        agents: ["deal-room","pipeline-auditor"],
        tools: ["hubspot","notion"],
      },
      {
        name: "Account-Based Marketing Campaigns",
        workflow: ["ABM Campaign Strategy","Account Segmentation & Personalization","Creative Development & Asset Production","Multi-Channel Campaign Orchestration","Performance Tracking & Measurement","Optimization & Results"],
        agents: ["campaign-builder","writer"],
        tools: ["n8n","hubspot","make"],
      },
      {
        name: "Customer Reference & Advocate Programs",
        workflow: ["Reference Customer Identification","Advocate Recruitment & Program Enrollment","Reference Call Training & Preparation","Success Story & Case Study Development","Reference Call Coordination & Execution","Advocate Recognition & Program Growth"],
        agents: ["listener","writer"],
        tools: ["hubspot","notion"],
      },
    ],
  },
  {
    id: 'L5',
    name: 'Pricing & Packaging',
    color: '#475569',
    blurb: 'Designing how value is captured: strategy, packaging design, optimization.',
    processes: [
      {
        name: "Value-Based Pricing",
        workflow: ["Value Analysis","Willingness-to-Pay Research","Pricing Model Development","Competitive Benchmarking","Test & Validation"],
        agents: ["pricing-strategist","market-research"],
        tools: ["exa","apify","notion"],
      },
      {
        name: "Product Tiers & Edition Strategy",
        workflow: ["Customer Segmentation for Packaging","Feature Mapping & Tier Definition","Pricing Structure & Tier Economics","Messaging & Positioning"],
        agents: ["pricing-strategist","roadmap-align"],
        tools: ["notion","metabase"],
      },
      {
        name: "Add-On & Module Pricing",
        workflow: ["Add-On & Module Identification","Value Assessment & Willingness to Pay","Add-On Packaging & Bundling","Pricing Model Development","Sales & Marketing Enablement","Add-On Launch & Go-to-Market"],
        agents: ["pricing-strategist"],
        tools: ["metabase","notion"],
      },
      {
        name: "A/B Testing for Pricing & Packaging",
        workflow: ["Hypothesis Development","Test Design & Setup","Test Implementation & Launch","Data Collection & Monitoring","Results Analysis & Statistical Testing","Recommendation & Decision","Rollout & Impact Monitoring"],
        agents: ["pricing-strategist","attribution"],
        tools: ["metabase","supabase"],
      },
      {
        name: "Price Increase Management",
        workflow: ["Pricing Increase Justification","Customer Impact Analysis","Tiered Implementation Strategy","Communication Planning","Price Increase Implementation","Renewal & Negotiation Management","Results Monitoring & Optimization"],
        agents: ["pricing-strategist"],
        tools: ["hubspot","notion","metabase"],
      },
      {
        name: "Renewal Pricing & Escalation",
        workflow: ["Renewal Pricing Analysis","Escalation Strategy Development","Segment-Specific Escalation Plans","Communication & Sales Preparation","Renewal Pricing Negotiation","Results Monitoring & Analysis","Continuous Optimization"],
        agents: ["pricing-strategist","renewal-analyst"],
        tools: ["hubspot","metabase"],
      },
      {
        name: "Competitive Pricing",
        workflow: ["Competitor Research","Pricing Tracking","Feature Comparison","Positioning","Differentiation","Messaging","Sales Training","Monitoring","Analysis"],
        agents: ["pricing-strategist","competitor-intel"],
        tools: ["exa","apify"],
      },
      {
        name: "Enterprise / Custom Pricing",
        workflow: ["Deal Identified","Complexity Assessment","Approval Process","Proposal","Negotiation Authority","Deal Structure","Signature","CRM Track","Learning"],
        agents: ["pricing-strategist","deal-room"],
        tools: ["hubspot","notion"],
      },
    ],
  },
  {
    id: 'L6',
    name: 'Operations & Intelligence',
    color: '#334155',
    blurb: 'The engine room: market intelligence, personas, territories, analytics, sales ops.',
    processes: [
      {
        name: 'Competitive Analysis',
        workflow: ['Competitor List', 'Info Gathering', 'Feature Comparison', 'Pricing', 'Messaging', 'Win/Loss', 'Insight Summary', 'Sharing', 'Monitoring'],
        agents: ['competitor-intel', 'market-research'],
        tools: ['exa', 'apify', 'tavily'],
      },
      {
        name: 'Market Research',
        workflow: ['Research Questions', 'Methodology', 'Primary/Secondary', 'Data Collection', 'Analysis', 'Insight Dev', 'Presentation', 'Recommendations', 'Monitoring'],
        agents: ['market-research', 'diagnostic'],
        tools: ['exa', 'tavily', 'apify'],
      },
      {
        name: 'Trend Analysis',
        workflow: ['Info Gathering', 'Trend ID', 'Impact Assessment', 'Opportunity/Threat', 'Implications', 'Recommendations', 'Strategic Planning', 'Monitoring'],
        agents: ['market-research', 'listener'],
        tools: ['exa', 'apify', 'parallel'],
      },
      {
        name: 'Persona Research & Definition',
        workflow: ['Stakeholder Interviews', 'Surveys', 'Data Collection', 'Analysis', 'Pattern ID', 'Persona Def', 'Validation', 'Refinement', 'Activation'],
        agents: ['listener', 'icp-clarifier'],
        tools: ['clay', 'metabase', 'notion'],
      },
      {
        name: 'Territory Design',
        workflow: ['Account Universe', 'Segmentation', 'Capacity Planning', 'Territory Creation', 'Quota Allocation', 'Rep Assignment', 'Baseline', 'Tracking', 'Annual Review'],
        agents: ['comp-quota', 'pipeline-auditor'],
        tools: ['hubspot', 'metabase'],
      },
      {
        name: 'Territory Forecast',
        workflow: ['Territory Assigned', 'Historical Analysis', 'Market Analysis', 'Pipeline Opportunity', 'Forecast Model', 'Scenario Planning', 'Submission', 'Tracking', 'Accuracy'],
        agents: ['forecast-analyser', 'comp-quota'],
        tools: ['metabase', 'hubspot'],
      },
      {
        name: 'Funnel Analytics',
        workflow: ['Funnel Def', 'Metrics ID', 'Data Collection', 'Conversion Rate', 'Stage Analysis', 'Bottleneck', 'Recommendations', 'Testing', 'Optimization'],
        agents: ['pipeline-auditor', 'attribution'],
        tools: ['metabase', 'ga', 'supabase'],
      },
      {
        name: 'Pipeline Analytics',
        workflow: ['Pipeline Metrics', 'Data Collection', 'Stage Duration', 'Win Rate', 'Health Assessment', 'Risk ID', 'Forecast', 'Monitoring', 'Optimization'],
        agents: ['pipeline-auditor', 'forecast-analyser'],
        tools: ['metabase', 'hubspot'],
      },
      {
        name: 'CAC & LTV Analysis',
        workflow: ['Acquisition Cost', 'LTV Calc', 'Payback Period', 'Profitability', 'By Channel/Segment', 'Recommendations', 'Testing', 'Monitoring'],
        agents: ['attribution', 'pipeline-auditor'],
        tools: ['metabase', 'supabase'],
      },
      {
        name: 'Channel Attribution',
        workflow: ['Touch Point Def', 'Attribution Model', 'Data Integration', 'Analysis', 'Channel Contribution', 'ROI by Channel', 'Recommendations', 'Budget Reallocation'],
        agents: ['attribution', 'campaign-builder'],
        tools: ['ga', 'metabase', 'supabase'],
      },
      {
        name: 'CRM Management',
        workflow: ['CRM Selection', 'Implementation', 'Data Migration', 'Process Config', 'Workflow Automation', 'Integration', 'Training', 'Adoption', 'Data Quality'],
        agents: ['hygiene', 'pipeline-auditor'],
        tools: ['hubspot', 'attio', 'n8n'],
      },
      {
        name: 'Lead Management',
        workflow: ['Source Integration', 'Scoring Config', 'Routing Setup', 'Capture Optimization', 'Nurture', 'CRM Sync', 'Data Quality', 'Reporting'],
        agents: ['hygiene', 'qualifier'],
        tools: ['hubspot', 'n8n', 'supabase'],
      },
      {
        name: 'Sales Forecasting',
        workflow: ['Historical Analysis', 'Forecast Model', 'Rep Submission', 'Consolidation', 'Scenario Planning', 'Review', 'Approval', 'Tracking', 'Accuracy'],
        agents: ['forecast-analyser', 'pipeline-auditor'],
        tools: ['metabase', 'hubspot'],
      },
      {
        name: 'Compensation & Quota',
        workflow: ['Revenue Target', 'Rep Capacity', 'Quota Setting', 'Comp Plan', 'Commission Calc', 'Tracking', 'Review', 'Adjustment', 'Transparency'],
        agents: ['comp-quota'],
        tools: ['metabase', 'notion', 'hubspot'],
      },
      {
        name: 'Sales Tools & Stack',
        workflow: ['Needs Assessment', 'Tool Evaluation', 'Selection', 'Implementation', 'Integration', 'Training', 'Adoption', 'Monitoring', 'Optimization'],
        agents: ['hygiene'],
        tools: ['notion', 'n8n', 'slack'],
      },
      {
        name: 'Win/Loss Analysis Program',
        workflow: ["Deal Selection for Analysis","Interview Coordination & Scheduling","Interview Execution","Analysis & Insight Synthesis","Insight Communication & Action Items"],
        agents: ['deal-room', 'competitor-intel'],
        tools: ['hubspot', 'notion', 'exa'],
      },
    ],
  },
  {
    id: 'L7',
    name: 'Channel & Ecosystem',
    color: '#0E7490',
    blurb: 'Leveraging partners, resellers, integrations, and affiliates to scale.',
    processes: [
      {
        name: 'Partner Selection & Recruitment',
        workflow: ['Market Research', 'Partner ID', 'Fit Assessment', 'Approach', 'Relationship', 'Agreement', 'Onboarding', 'Activation', 'Performance Monitor'],
        agents: ['signals-scout', 'deal-room'],
        tools: ['exa', 'apollo', 'notion'],
      },
      {
        name: 'Partner Program Design',
        workflow: ['Program Objectives', 'Partner Model', 'Commission Structure', 'Co-Marketing', 'Incentives', 'Resources', 'Training', 'Execution', 'Performance'],
        agents: ['comp-quota', 'campaign-builder'],
        tools: ['notion', 'metabase'],
      },
      {
        name: 'Partner Training & Enablement',
        workflow: ['Training Needs', 'Curriculum', 'Content Creation', 'Delivery', 'Execution', 'Certification', 'Reinforcement', 'Resource Updates'],
        agents: ['workflow-builder', 'campaign-builder'],
        tools: ['notion', 'claude'],
      },
      {
        name: 'Co-Marketing Campaign',
        workflow: ['Opportunity ID', 'Joint Planning', 'Campaign Dev', 'Execution', 'Lead Sharing', 'ROI', 'Optimization', 'Feedback', 'Renewal'],
        agents: ['campaign-builder', 'attribution'],
        tools: ['n8n', 'hubspot', 'metabase'],
      },
      {
        name: 'Deal Registration',
        workflow: ['Partner Deal Activity', 'Registration', 'Approval', 'Territory Mgmt', 'Conflict Resolution', 'Support', 'Close', 'Commission', 'Maintenance'],
        agents: ['deal-room', 'hygiene'],
        tools: ['hubspot', 'notion'],
      },
      {
        name: 'Reseller Program',
        workflow: ['Reseller Selection', 'Agreement', 'Margin Setup', 'Portal Access', 'Product Training', 'Sales Training', 'Territory', 'Kickoff', 'Performance'],
        agents: ['onboarding-coach', 'workflow-builder'],
        tools: ['hubspot', 'notion'],
      },
      {
        name: 'Partner Integration',
        workflow: ['Opportunity', 'Technical Requirements', 'Dev Plan', 'Testing', 'Documentation', 'Launch', 'Promotion', 'Training', 'Education'],
        agents: ['hygiene', 'pipeline-auditor'],
        tools: ['supabase', 'n8n', 'metabase'],
      },
      {
        name: 'Referral Program Design',
        workflow: ['Objectives', 'Incentive Structure', 'Process Def', 'Platform Selection', 'Launch Prep', 'Communication', 'Execution', 'Tracking', 'Optimization'],
        agents: ['campaign-builder', 'attribution'],
        tools: ['notion', 'metabase', 'hubspot'],
      },
      {
        name: 'Affiliate Marketing',
        workflow: ['Affiliate Activated', 'Campaign Strategy', 'Promotion', 'Traffic', 'Conversion Track', 'Commission', 'Payment', 'Reporting', 'Optimization'],
        agents: ['attribution', 'campaign-builder'],
        tools: ['metabase', 'ga', 'hubspot'],
      },
    ],
  },
  {
    id: 'L8',
    name: 'Marketing Operations',
    color: '#B45309',
    blurb: 'Executing marketing at scale: campaigns, lead management, messaging, brand.',
    processes: [
      {
        name: 'Campaign Strategy',
        workflow: ['Business Objective', 'Audience', 'Positioning', 'Channel', 'Timeline', 'Budget', 'Content Strategy', 'Execution Plan', 'Launch', 'Tracking'],
        agents: ['campaign-builder', 'writer'],
        tools: ['n8n', 'hubspot', 'metabase'],
      },
      {
        name: 'Multi-Channel Campaign',
        workflow: ['Objectives', 'Channel Planning', 'Message Tailoring', 'Content Creation', 'Schedule Coord', 'Launch Sync', 'Cross-Channel Track', 'Analysis', 'Optimization'],
        agents: ['campaign-builder', 'writer'],
        tools: ['n8n', 'hubspot', 'make'],
      },
      {
        name: 'Campaign Execution',
        workflow: ['Campaign Ready', 'Resource Alignment', 'Launch', 'Real-Time Monitor', 'Issue Resolution', 'Optimization', 'Pace', 'Close-out', 'Learning'],
        agents: ['campaign-builder', 'hygiene'],
        tools: ['n8n', 'hubspot', 'slack'],
      },
      {
        name: 'Campaign Analytics',
        workflow: ['Active', 'Metric Track', 'Daily Monitor', 'Trend Analysis', 'Conversion', 'ROI', 'Performance Report', 'Recommendations', 'Learning'],
        agents: ['attribution', 'campaign-builder'],
        tools: ['ga', 'metabase'],
      },
      {
        name: 'Lead Scoring Model',
        workflow: ['Metric Def', 'Data Gathering', 'Model Design', 'Weight Assignment', 'Testing', 'Calibration', 'Deployment', 'Monitoring', 'Refinement'],
        agents: ['qualifier', 'hygiene'],
        tools: ['hubspot', 'supabase'],
      },
      {
        name: 'Lead Nurture Sequences',
        workflow: ['Segmentation', 'Message Dev', 'Email Design', 'Sequence Flow', 'Timing', 'Execution', 'Engagement Monitor', 'Analysis', 'Personalization'],
        agents: ['listener', 'sniper'],
        tools: ['smartlead', 'n8n', 'hubspot'],
      },
      {
        name: 'Value Proposition',
        workflow: ['Market Research', 'Competitive Analysis', 'Customer Research', 'Value Def', 'Articulation', 'Testing', 'Refinement', 'Sales Training', 'Consistency'],
        agents: ['writer', 'market-research'],
        tools: ['exa', 'claude', 'notion'],
      },
      {
        name: 'Messaging Hierarchy',
        workflow: ['Value Prop', 'Primary Messages', 'Secondary', 'Tertiary', 'Segment Tailoring', 'Alignment', 'Documentation', 'Training', 'Monitoring'],
        agents: ['writer', 'listener'],
        tools: ['claude', 'notion'],
      },
      {
        name: 'Customer Success Stories',
        workflow: ['Customer Selection', 'Interview', 'Story Dev', 'Case Study', 'Design', 'Publishing', 'Promotion', 'Sales Integration', 'ROI Docs'],
        agents: ['writer', 'listener'],
        tools: ['claude', 'notion', 'hubspot'],
      },
      {
        name: 'Brand Strategy',
        workflow: ['Market Position', 'Brand Personality', 'Visual Identity', 'Messaging Tone', 'Guidelines', 'Stakeholder Alignment', 'Implementation', 'Monitoring', 'Consistency'],
        agents: ['writer'],
        tools: ['notion', 'claude'],
      },
      {
        name: 'Industry Presence',
        workflow: ['Strategy Def', 'Target ID', 'Sponsorship', 'Speaking', 'Awards', 'Partnerships', 'Execution', 'Brand Leverage', 'ROI'],
        agents: ['campaign-builder', 'writer'],
        tools: ['notion', 'exa'],
      },
    ],
  },
  {
    id: 'L9',
    name: 'Customer Advocacy',
    color: '#15803D',
    blurb: 'Turning customers into proof: case studies, testimonials, advocacy programs, communities.',
    processes: [
      {
        name: 'Customer Selection',
        workflow: ['Prospect Def', 'ICP', 'Outreach', 'Interest Confirm', 'Timeline', 'Agreement', 'Scheduling', 'Kickoff', 'Data Collection'],
        agents: ['listener', 'writer'],
        tools: ['hubspot', 'notion'],
      },
      {
        name: 'Case Study Development',
        workflow: ['Discovery', 'Interview Prep', 'Interview', 'Story Dev', 'ROI Calc', 'Writing', 'Design', 'Review', 'Approval', 'Publishing'],
        agents: ['writer'],
        tools: ['claude', 'notion', 'metabase'],
      },
      {
        name: 'Case Study Distribution',
        workflow: ['Published', 'Website', 'Sales Collateral', 'Marketing Integration', 'Event Use', 'Repurposing', 'Social', 'Tracking', 'Analysis'],
        agents: ['writer', 'campaign-builder'],
        tools: ['notion', 'hubspot', 'plausible'],
      },
      {
        name: 'Reference Program',
        workflow: ['Candidate ID', 'Outreach', 'Agreement', 'Scheduling', 'Briefing', 'Call Support', 'Feedback', 'Maintenance', 'Engagement'],
        agents: ['listener', 'writer'],
        tools: ['hubspot', 'notion'],
      },
      {
        name: 'Review Management',
        workflow: ['Review Site Monitor', 'Response', 'Positive Promotion', 'Negative Mgmt', 'Incentive', 'Review Collection', 'Update Monitor', 'Trend Analysis'],
        agents: ['listener'],
        tools: ['apify', 'slack', 'notion'],
      },
      {
        name: 'Social Proof',
        workflow: ['Testimonial Opportunity', 'Collection', 'Video/Quote', 'Publishing', 'Promotion', 'Website', 'Sales Use', 'Ad Use', 'Monitoring'],
        agents: ['writer', 'listener'],
        tools: ['claude', 'notion', 'hubspot'],
      },
      {
        name: 'Advisory Board',
        workflow: ['Candidate ID', 'Outreach', 'Selection', 'Formalizing', 'Scheduling', 'Preparation', 'Facilitation', 'Feedback', 'Relationship'],
        agents: ['planning-cycle', 'listener'],
        tools: ['notion', 'slack'],
      },
      {
        name: 'User Groups',
        workflow: ['Community Interest', 'Group Launch', 'Recruitment', 'Agenda', 'Meetup Planning', 'Facilitation', 'Networking', 'Engagement', 'Growth'],
        agents: ['campaign-builder', 'listener'],
        tools: ['notion', 'slack', 'hubspot'],
      },
      {
        name: 'Community Management',
        workflow: ['Platform Active', 'Member Onboarding', 'Content Moderation', 'Facilitation', 'Question Resolution', 'Expert ID', 'Recognition', 'Engagement', 'Growth'],
        agents: ['listener'],
        tools: ['notion', 'slack', 'supabase'],
      },
    ],
  },
]

// Helpers
export function getToolsFor(process) {
  return process.tools.map((id) => TOOL_CATALOG[id]).filter(Boolean)
}
export function getAgentsFor(process) {
  return process.agents.map((id) => AGENT_SLOTS[id]).filter(Boolean)
}
export function getTotalProcessCount() {
  return LAYERS.reduce((sum, l) => sum + l.processes.length, 0)
}