// Operational playbook (process-level + per-step stages). source tag internal only.

export const OPERATIONAL = {
  "list-building": {
    "objective": "Identify total addressable target universe for your ICP",
    "input": "ICP definition, market segment, geography, company size parameters",
    "output": "Raw prospect list (unfiltered, unscored)",
    "activities": [
      "Source from multiple data providers (AI Ark, Apollo, Prospeo)",
      "Scrape job boards, Google Maps, LinkedIn for vertical-specific lists",
      "Consolidate and deduplicate",
      "Basic validation (email exists, company exists, not churned)"
    ],
    "decisionPoints": [
      "Does the list match our ICP parameters? (If no → refine ICP or data source)",
      "Is data quality acceptable? (Email validation >85%, company data complete)",
      "List size aligned with campaign capacity? (If too large → apply geographic/vertical filter)"
    ],
    "tools": "AI Ark, Apollo, Prospeo, Clearbit (validation), custom scraping",
    "roles": [
      "Data ops: execution and validation",
      "GTM lead: quality approval"
    ],
    "automation": "API pulls from data providers, deduplication scripts, email validation",
    "successMetrics": [
      "List size: X prospects",
      "Data completeness: >90% required fields",
      "Bounce rate: <5%"
    ],
    "qualityGate": {
      "go": "Go if: List ≥500 prospects, >90% data quality, ICP alignment confirmed",
      "loopback": "Loop back if: <500 prospects (expand geography/vertical) OR data quality <90%"
    }
  },
  "signal-collection": {
    "objective": "Identify intent/urgency indicators for each prospect",
    "input": "Raw prospect list with company/contact data",
    "output": "Prospect list with signal annotations (intent tags, recency, event data)",
    "activities": [
      "Collect signals from multiple sources:"
    ],
    "decisionPoints": [
      "Are signals recent enough to act on? (Last 30 days preferred)",
      "Do we have ≥2 signal types per prospect? (If no → mark as low-intent)",
      "Is signal data accurate? (Spot-check 5% sample manually)"
    ],
    "tools": "Parallel, Exa, Apify, LinkedIn APIs, job board scraping, custom signal feeds",
    "roles": [
      "Data ops: execution",
      "GTM lead: signal validation and tagging",
      "Research (optional): deep-dive on high-value prospects"
    ],
    "automation": "API pulls, signal aggregation, recency scoring, automated tagging",
    "successMetrics": [
      "Signal coverage: ≥80% of list has ≥1 signal",
      "Signal freshness: ≥75% of signals <30 days old",
      "Signal diversity: Average 2+ signal types per prospect"
    ],
    "qualityGate": {
      "go": "Go if: ≥80% signal coverage, ≥75% freshness",
      "loopback": "Loop back if: Low signal coverage (expand signal sources) OR stale signals (check API freshness)"
    }
  },
  "shortlist-prioritization": {
    "objective": "Rank prospects by signal strength and ICP fit; identify high-intent subset",
    "input": "Prospect list with signals",
    "output": "Shortlisted prospects (scored, ranked, segmented by signal type)",
    "activities": [
      "Develop scoring model:",
      "ICP fit score (company size, industry, role, geography)",
      "Signal strength score (recency, type, magnitude)",
      "Combined priority rank (ICP × Signal)",
      "Define threshold: Which signal combinations = \"high intent\"?",
      "Segment by signal type (hiring, funding, tech change, etc.)",
      "Identify best opportunities (top 20-30% of list)"
    ],
    "decisionPoints": [
      "What's our signal-to-action threshold? (Example: A prospect needs hiring signal OR funding signal to qualify)",
      "Do we have capacity to enrich/personalize everyone shortlisted? (If no → tighten threshold)",
      "Are there vertical/segment variations? (If yes → create multiple shortlists with different thresholds)"
    ],
    "tools": "Spreadsheet/CSV for scoring, Airtable for ranking, Claude for automation",
    "roles": [
      "GTM lead: scoring model design, threshold setting",
      "Data ops: execution, ranking",
      "Sales leadership: review top prospects, validate logic"
    ],
    "automation": "Scoring formula (ICP + signals), automated ranking, segmentation rules",
    "successMetrics": [
      "Shortlist size: 20-30% of original list (efficient subset)",
      "Score distribution: Clear separation between high/medium/low intent",
      "Validation: Sales team agrees top 20 prospects are worth reaching out to"
    ],
    "qualityGate": {
      "go": "Go if: Shortlist ≥100 prospects, scoring model validated by sales, capacity confirmed for next stage",
      "loopback": "Loop back if: Shortlist too small (relax scoring) OR too large (tighten scoring) OR sales questions logic"
    }
  },
  "enrichment": {
    "objective": "Gather detailed prospect data needed for personalization",
    "input": "Shortlisted prospects",
    "output": "Enriched prospect profiles (demographics, company data, decision-makers, role details)",
    "activities": [
      "Pull enriched data from Bitscale:",
      "Company: revenue, funding, headcount, growth",
      "Contact: title, department, tenure, LinkedIn profile",
      "Intent: What problem are they likely solving?",
      "Identify decision-makers and influencers (not just the list target)",
      "Note company challenges based on signals (Example: If hiring signal, likely scaling eng team)",
      "Validate against recent LinkedIn updates"
    ],
    "decisionPoints": [
      "Is enrichment data recent/accurate? (Spot-check against LinkedIn)",
      "Do we have contact info for alternative decision-makers? (If no → flag for research)",
      "Is there enough data to build an angle? (If no → mark for manual research)"
    ],
    "tools": "Bitscale, LinkedIn Sales Navigator, Clearbit, manual research (Claude or internal)",
    "roles": [
      "Data ops: Bitscale pulls, data validation",
      "GTM lead: data quality review",
      "Research: manual deep-dives on gaps"
    ],
    "automation": "Bitscale API integration, data validation scripts",
    "successMetrics": [
      "Enrichment rate: ≥90% of shortlist completed",
      "Data freshness: LinkedIn sync ≤7 days old",
      "Alternative contact rate: ≥50% have 2+ contacts mapped"
    ],
    "qualityGate": {
      "go": "Go if: ≥90% enriched, data freshness confirmed, team satisfied with depth",
      "loopback": "Loop back if: Data quality issues (re-validate source) OR missing critical fields"
    }
  },
  "personalization": {
    "objective": "Create tailored messaging aligned to prospect's signals and pain points",
    "input": "Enriched prospect profiles with signals",
    "output": "Personalized cold email copy, subject line, sequence framework",
    "activities": [
      "Map signal → angle:",
      "Hiring signal → \"Building your X team?\"",
      "Funding signal → \"Congrats on funding, scaling strategy?\"",
      "Tech change signal → \"Using X now?\"",
      "Growth signal → \"Expanding to Y market?\"",
      "Create email copy:",
      "Template-based (not random AI)",
      "Signal-driven angle in first line",
      "Credibility/social proof relevant to their context",
      "Single, clear ask",
      "Design sequence:",
      "Email 1: Main hook (signal-driven angle)",
      "Email 2: Value prop (if no reply)",
      "Email 3: Breakup or softer ask",
      "Personalize subject line to prospect/company"
    ],
    "decisionPoints": [
      "Does the angle match their actual signal? (Avoid generic angles)",
      "Is the copy tested? (A/B tested on similar segments?)",
      "Do we have reply handling mapped? (Who responds to what?)"
    ],
    "tools": "Claude (template generation), in-house copywriting, A/B testing framework",
    "roles": [
      "Copywriter: angle creation, email copy",
      "GTM lead: angle validation, sequence approval",
      "Claude/automation: Template expansion, subject line generation"
    ],
    "automation": "Claude templates parameterized by signal type, subject line generation, sequence scheduling",
    "successMetrics": [
      "Copy variance: Each segment has distinct angle (not copy-pasted)",
      "Open rate: ≥20% on first send (varies by list quality)",
      "Reply rate: ≥5% (varies by angle relevance)"
    ],
    "qualityGate": {
      "go": "Go if: All copy written, angles validated by GTM lead, sequences approved",
      "loopback": "Loop back if: Angles feel generic OR copy doesn't match signal"
    }
  },
  "sending": {
    "objective": "Deliver emails at scale with optimal deliverability and inbox placement",
    "input": "Personalized emails, prospect contact list, sequence framework",
    "output": "Emails sent, tracking data active, follow-ups scheduled",
    "activities": [
      "Set up sending infrastructure:",
      "Inbox rotation (don't send from same domain repeatedly)",
      "Warm-up sequences for new domains",
      "Throttling (avoid spam filters)",
      "Schedule sends:",
      "Timing: Prospect timezone, day-of-week optimization",
      "Cadence: Email 1 → wait 3 days → Email 2 → wait 5 days → Email 3",
      "Track opens, clicks, replies in real-time",
      "Flag bounces/unsubscribes for list cleanup"
    ],
    "decisionPoints": [
      "Is deliverability healthy? (If bounce rate >2%, pause and investigate)",
      "Are reply rates meeting targets? (If <3%, consider angle/copy pivot)",
      "Do we have capacity for follow-ups? (If not, slow sends)"
    ],
    "tools": "Smartlead, Outreach, or equivalent (sequences, tracking, inbox rotation)",
    "roles": [
      "GTM ops: campaign setup, sending execution",
      "GTM lead: performance monitoring",
      "Sales: reply handling (if applicable)"
    ],
    "automation": "Smartlead handles throttling, inbox rotation, sequence timing, tracking",
    "successMetrics": [
      "Send rate: 100% of personalized emails sent",
      "Bounce rate: <2%",
      "Open rate: ≥20%",
      "Click rate: ≥5%"
    ],
    "qualityGate": {
      "go": "Go if: 100% sent, bounce rate <2%, infrastructure healthy",
      "loopback": "Loop back if: Delivery issues OR angles underperforming (pause, test new angle, resume)"
    }
  },
  "follow-up-reply-handling": {
    "objective": "Nurture replies, schedule meetings, escalate to sales",
    "input": "Inbound replies, non-replies, engagement data",
    "output": "Qualified meetings booked, sales handoff, disqualified prospects archived",
    "activities": [],
    "decisionPoints": [
      "Is the reply qualified? (Is it someone who can actually buy?)",
      "What's the next step? (Meeting, nurture sequence, disqualify)",
      "Should we pivot angle for non-responders? (Different segment = different angle)"
    ],
    "tools": "Smartlead (sequences), CRM (HubSpot/Salesforce), calendaring, Claude (response generation)",
    "roles": [
      "Sales development: reply handling, meeting qualification",
      "Sales: meeting execution",
      "GTM ops: sequence monitoring, non-response handling",
      "Claude/automation: Template responses, objection handling"
    ],
    "automation": "Sequence automation (follow-ups on timer), template responses, CRM updates, meeting scheduling",
    "successMetrics": [
      "Reply rate: ≥5% of sends",
      "Meeting booked rate: ≥0.5% of sends (varies heavily by ICP quality)",
      "Sales-accepted lead (SAL) rate: ≥30% of meetings (if sales is filtering)"
    ],
    "qualityGate": {
      "go": "Go if: Campaign complete, replies being handled, meetings booked, CRM updated",
      "loopback": "Loop back if: No replies after 3 emails → pause, audit angle quality, test new angle before resume"
    }
  },
  "annual-gtm-strategy": {
    "stages": [
      {
        "name": "Market Research",
        "objective": "Understand market opportunity, competitive landscape, and trends to inform strategy",
        "input": "Industry data, competitor information, market reports, customer feedback",
        "output": "Market analysis document with opportunity assessment",
        "activities": [
          "Competitive research (feature comparison, pricing analysis, messaging study)",
          "TAM/SAM/SOM analysis (total addressable market, serviceable market, obtainable market)",
          "Industry trend identification (emerging technologies, buyer behavior shifts)",
          "Customer research (pain points, buying criteria, success metrics)",
          "Win/loss analysis from sales team"
        ],
        "tools": "Competitive intelligence platforms, market research databases, industry reports, analyst firms, sales team interviews",
        "roles": [
          "GTM lead: coordination and synthesis",
          "Product/sales: competitive and customer insights",
          "Finance: market sizing"
        ],
        "successMetric": "Comprehensive market understanding documented with data sources cited",
        "decisionPoints": [
          "Is the market opportunity large enough to pursue?",
          "What are the top 3-5 competitive threats?",
          "Where are market trends moving?"
        ],
        "qualityGate": {
          "go": "Go if: Market TAM >$1B (or company-specific threshold), competitive landscape clear, trends identified",
          "loopback": "Loop back if: Incomplete data, conflicting sources, need primary research"
        }
      },
      {
        "name": "Strategic Options Development",
        "objective": "Develop 2-3 potential go-to-market approaches with pros/cons",
        "input": "Market analysis, company capabilities, product roadmap, financial constraints",
        "output": "2-3 strategic options document with evaluation matrix",
        "activities": [
          "Brainstorm go-to-market approaches (inbound-first, outbound-first, land-and-expand, enterprise vs. SMB)",
          "Assess company capabilities (sales team size, marketing budget, product maturity)",
          "Model financial implications (CAC, LTV, payback period for each option)",
          "Scenario planning (best case, base case, worst case for each option)",
          "Risk assessment (competitive response, execution risk, market timing)"
        ],
        "tools": "Strategy brainstorming tools, financial modeling spreadsheets, scenario planning templates",
        "roles": [
          "Executive leadership: strategy guidance",
          "GTM lead: option development",
          "Finance: financial modeling",
          "Product: capability assessment"
        ],
        "successMetric": "2-3 options documented with pros/cons analysis and financial modeling",
        "decisionPoints": [
          "Which options are realistic given company resources?",
          "Which option has highest ROI potential?",
          "What are the key assumptions underlying each option?"
        ],
        "qualityGate": {
          "go": "Go if: Options are distinct, financial models completed, leadership agreement on viability",
          "loopback": "Loop back if: Options are too similar, financial assumptions questioned, need more analysis"
        }
      },
      {
        "name": "Strategy Selection",
        "objective": "Choose primary GTM strategy and get executive commitment",
        "input": "Strategic options, financial modeling, risk assessment, board/leadership input",
        "output": "Approved annual GTM strategy document",
        "activities": [
          "Executive decision-making session (present options, discuss trade-offs)",
          "Final risk/benefit analysis",
          "Commitment to resource levels and timeline",
          "Documentation of strategy rationale",
          "Communication of decision to extended leadership team"
        ],
        "tools": "Decision frameworks, executive alignment tools",
        "roles": [
          "CEO/Chief Revenue Officer: final decision",
          "Executive team: input and commitment",
          "GTM lead: presentation and rationale"
        ],
        "successMetric": "Strategy approved by leadership and formally documented",
        "decisionPoints": [
          "Which strategy option wins and why?",
          "What resource commitment is required?",
          "When do we reevaluate if conditions change?"
        ],
        "qualityGate": {
          "go": "Go if: Strategy chosen, leadership committed, go/no-go criteria documented",
          "loopback": "Loop back if: Leadership unable to decide, need more data, strategic conflict"
        }
      },
      {
        "name": "Resource Allocation",
        "objective": "Allocate budget, headcount, and tools to execute chosen strategy",
        "input": "Approved strategy, financial plan, hiring plan, tool requirements",
        "output": "Resource allocation plan with budget locked and hiring initiated",
        "activities": [
          "Budget allocation by channel (demand gen, sales, customer success, operations)",
          "Headcount planning (SDRs, AEs, marketers, CSMs, ops roles)",
          "Tool investment planning (CRM, marketing automation, analytics, etc.)",
          "Infrastructure planning (offices, workspace, technology)",
          "Timeline and phasing (Q1-Q4 hiring, budget spend schedule)"
        ],
        "tools": "Budget tracking spreadsheets, headcount planning tools, HRIS systems",
        "roles": [
          "Finance: budget approval and tracking",
          "GTM lead: resource planning",
          "HR: headcount planning",
          "Operations: tool and infrastructure planning"
        ],
        "successMetric": "Resource plan approved, budget locked, hiring plan initiated",
        "decisionPoints": [
          "Are resources sufficient to execute strategy?",
          "What hiring order optimizes ramp?",
          "Which tools are critical vs. nice-to-have?"
        ],
        "qualityGate": {
          "go": "Go if: Budget approved by finance, hiring plan submitted to HR, tools contracted",
          "loopback": "Loop back if: Budget constraints, resource unavailable, need to adjust plan"
        }
      },
      {
        "name": "Execution Planning",
        "objective": "Translate annual strategy into Q1 tactical plan",
        "input": "Annual strategy, resources allocated, market priorities",
        "output": "Q1 strategic plan with initiatives, OKRs, and team assignments",
        "activities": [
          "Quarterly initiative identification (which campaigns, processes, launches in Q1?)",
          "OKR setting (what do we want to achieve in Q1?)",
          "Team assignment (who owns what initiatives?)",
          "Timeline and milestones",
          "Success metrics and tracking setup"
        ],
        "tools": "OKR frameworks, project management tools, roadmap templates",
        "roles": [
          "GTM leadership: initiative and OKR definition",
          "Team leads: estimation and planning",
          "Finance: forecast prep"
        ],
        "successMetric": "Q1 plan documented, OKRs set, team aligned and ready to execute",
        "decisionPoints": [
          "Which initiatives should launch in Q1?",
          "What are our stretch vs. committed OKRs?",
          "Do we have dependencies between initiatives?"
        ],
        "qualityGate": {
          "go": "Go if: Plan shared with teams, OKRs approved, kickoff scheduled",
          "loopback": "Loop back if: Unclear priorities, resource conflicts, need to adjust plan"
        }
      },
      {
        "name": "Quarterly Reviews & Adjustments",
        "objective": "Track execution against plan and make strategic adjustments",
        "input": "Quarterly results, market changes, competitive updates, learnings",
        "output": "Quarterly review with strategy/plan adjustments as needed",
        "activities": [
          "Results review (did we hit our OKRs? Why or why not?)",
          "Market monitoring (competitive moves, customer needs shifts)",
          "Learnings extraction (what worked? what didn't? why?)",
          "Resource rebalancing if needed (shift budget/headcount to winning initiatives)",
          "Next quarter planning based on learnings"
        ],
        "tools": "OKR tracking systems, analytics dashboards, qualitative feedback collection",
        "roles": [
          "GTM leadership: review facilitation",
          "Team leads: results presentation",
          "Finance: budget and forecast updates"
        ],
        "successMetric": "Quarterly review completed, decisions documented, next quarter plan updated",
        "decisionPoints": [
          "Should we continue the annual strategy or pivot?",
          "Which initiatives should we double down on?",
          "Where should we shift resources?"
        ],
        "qualityGate": {
          "go": "Go if: Review published to company, learning captured, Q+1 plan started",
          "loopback": "Loop back if: Results unclear, need more time for analysis, dependencies unclear"
        }
      },
      {
        "name": "Strategy Refinement",
        "objective": "Update strategy based on year results and prepare for next year",
        "input": "Year results, quarterly reviews, market changes, competitive updates",
        "output": "Refined strategy document for next year",
        "activities": [
          "Annual strategy review (did our strategy work as planned?)",
          "Market reassessment (market opportunity changed?)",
          "Competitive reassessment (competitive landscape shifted?)",
          "Learning application (what did we learn that changes strategy?)",
          "Next year strategy refinement and documentation"
        ],
        "tools": "Strategy review frameworks, historical data analysis",
        "roles": [
          "Executive leadership: strategy refinement",
          "GTM leadership: analysis and recommendations",
          "Extended team: feedback on what worked/didn't"
        ],
        "successMetric": "Strategy refined, documented, and approved for next year",
        "decisionPoints": [
          "Should we continue the same strategic approach next year?",
          "What did we learn that should change our strategy?",
          "Where should we shift strategic focus?"
        ],
        "qualityGate": {
          "go": "Go if: Next year strategy documented, board approved, budget planning started",
          "loopback": "Loop back if: Results need more analysis, strategic consensus unclear"
        }
      }
    ]
  },
  "market-segment-prioritization": {
    "stages": [
      {
        "name": "Market Scanning",
        "objective": "Identify all potential markets and segments company could serve",
        "input": "Product capabilities, competitor analysis, market research",
        "output": "Comprehensive list of potential markets/segments",
        "activities": [
          "Identify potential market segments (by industry, company size, geography, use case)",
          "Research each segment (size, growth, customer profile)",
          "Document current market presence by segment",
          "Identify emerging or underserved segments"
        ],
        "tools": "Market research platforms, industry databases, analyst reports",
        "roles": [
          "Product marketing: segment identification",
          "Market research: sizing and analysis",
          "Sales leadership: current market feedback"
        ],
        "successMetric": "Comprehensive market/segment list documented",
        "decisionPoints": [
          "Which segments are we not currently serving?",
          "Are there emerging segments with growth potential?"
        ],
        "qualityGate": {
          "go": "Go if: 10+ segments identified and researched",
          "loopback": "Loop back if: Incomplete research, missing key segments"
        }
      },
      {
        "name": "Opportunity Identification",
        "objective": "Assess opportunity level for each potential market",
        "input": "Segment list, market sizing data, competitive data",
        "output": "Scored opportunity list with high/medium/low potential",
        "activities": [
          "Score each segment on: size, growth, customer fit, competitive intensity",
          "Identify adjacent segments (different customer profile, same use case)",
          "Assess customer pain points in each segment",
          "Identify customer buying journey for each segment"
        ],
        "tools": "Scoring frameworks, market analysis tools",
        "roles": [
          "Product marketing: opportunity assessment",
          "Sales: customer fit feedback"
        ],
        "successMetric": "Opportunity scored for each segment, ranked by potential",
        "decisionPoints": [
          "Which segments have the best fit with our product?",
          "Which segments are growing fastest?",
          "Which segments have least competition?"
        ],
        "qualityGate": {
          "go": "Go if: All segments scored consistently, ranking agreed upon",
          "loopback": "Loop back if: Scoring criteria unclear, need more data"
        }
      },
      {
        "name": "Market Sizing",
        "objective": "Calculate market size and addressable market for prioritized segments",
        "input": "Opportunity-ranked segments, market research data",
        "output": "Market sizing for top segments (TAM, SAM, SOM)",
        "activities": [
          "Calculate TAM (Total Addressable Market) - all customers who could buy",
          "Calculate SAM (Serviceable Available Market) - customers we can realistically reach",
          "Calculate SOM (Serviceable Obtainable Market) - what we can capture in year 1-3",
          "Identify market growth rate and trends",
          "Assess market maturity (emerging, growth, mature, decline)"
        ],
        "tools": "Market research databases, analyst reports, spreadsheet modeling",
        "roles": [
          "Finance: market sizing modeling",
          "Product marketing: segment definition",
          "Market research: data gathering"
        ],
        "successMetric": "Market sizes calculated for top 3-5 segments with growth rates",
        "decisionPoints": [
          "Which segments have large enough markets?",
          "Is the market growing or contracting?",
          "Can we realistically capture meaningful market share?"
        ],
        "qualityGate": {
          "go": "Go if: TAM/SAM/SOM calculated, growth rates verified, methodology documented",
          "loopback": "Loop back if: Data insufficient, methodology questioned"
        }
      },
      {
        "name": "Competitive Assessment",
        "objective": "Assess competitive landscape within each target segment",
        "input": "Top-ranked segments, competitor data",
        "output": "Competitive analysis by segment with positioning recommendations",
        "activities": [
          "Identify competitors in each segment",
          "Assess competitor strength, positioning, and market share",
          "Identify competitive gaps and weaknesses",
          "Assess barriers to entry and how defensible competitive position is"
        ],
        "tools": "Competitive intelligence tools, sales win/loss data",
        "roles": [
          "Competitive intelligence: competitor research",
          "Sales: real competitive feedback",
          "Product: competitive product comparison"
        ],
        "successMetric": "Competitive analysis completed for each target segment",
        "decisionPoints": [
          "Which segments have less competitive intensity?",
          "Where can we build defensible competitive advantage?",
          "Which competitors are strongest in each segment?"
        ],
        "qualityGate": {
          "go": "Go if: Competitors identified, positioning clear, gaps documented",
          "loopback": "Loop back if: Incomplete competitor research, need more depth"
        }
      },
      {
        "name": "Prioritization",
        "objective": "Rank segments by overall attractiveness and fit",
        "input": "Opportunity scores, market sizes, competitive analysis",
        "output": "Prioritized segment list (Tier 1, Tier 2, Tier 3)",
        "activities": [
          "Score segments on: TAM size, growth rate, competitive intensity, product fit, customer fit",
          "Weight scoring factors based on company strategy",
          "Rank segments overall",
          "Define Tier 1 (focus), Tier 2 (build), Tier 3 (monitor)",
          "Get leadership alignment on prioritization"
        ],
        "tools": "Scoring matrices, priority frameworks",
        "roles": [
          "Executive leadership: approval of prioritization",
          "Product marketing: scoring and analysis"
        ],
        "successMetric": "Prioritized segment list with clear Tier 1/2/3 definition",
        "decisionPoints": [
          "What's our top segment to focus on?",
          "What's our secondary/tertiary focus?",
          "Should we specialize in 1-2 segments or go broad?"
        ],
        "qualityGate": {
          "go": "Go if: Prioritization agreed by leadership, rationale documented",
          "loopback": "Loop back if: Conflict on prioritization, need more consensus"
        }
      },
      {
        "name": "Segment Definition",
        "objective": "Deeply define target customer profile for each prioritized segment",
        "input": "Prioritized segments, customer research data",
        "output": "Detailed segment/ICP definition with customer profile, pain points, buying criteria",
        "activities": [
          "Define ideal customer profile (company size, industry, use cases, geography)",
          "Document customer pain points and success metrics",
          "Map customer buying journey (who are decision-makers, what's their process?)",
          "Identify customer motivations and objections",
          "Create segment-specific messaging and positioning"
        ],
        "tools": "Customer research tools, persona development frameworks",
        "roles": [
          "Product marketing: ICP definition",
          "Sales: customer profile feedback",
          "Customer success: customer pain points and success metrics"
        ],
        "successMetric": "Detailed ICP documented for each Tier 1 segment",
        "decisionPoints": [
          "Who is our ideal customer in each segment?",
          "What's their buying process?",
          "What are their key decision criteria?"
        ],
        "qualityGate": {
          "go": "Go if: ICP definition complete, buying journey mapped, messaging started",
          "loopback": "Loop back if: Customer understanding insufficient, need more research"
        }
      },
      {
        "name": "Go-to-Market Planning",
        "objective": "Develop segment-specific GTM strategy and tactics",
        "input": "Segment definition, competitive positioning, resource availability",
        "output": "Segment-specific GTM plan with channel strategy, messaging, and tactics",
        "activities": [
          "Define channel strategy (inbound, outbound, partnerships, events for each segment)",
          "Develop segment-specific messaging and positioning",
          "Plan customer acquisition approach (how do we reach this segment?)",
          "Identify customer advocates or reference customers",
          "Set segment-specific targets and forecasts"
        ],
        "tools": "GTM planning templates, channel strategy frameworks",
        "roles": [
          "GTM leadership: GTM strategy development",
          "Product marketing: messaging and positioning",
          "Sales/marketing: channel and tactic planning"
        ],
        "successMetric": "Segment-specific GTM plan documented with targets",
        "decisionPoints": [
          "Which channels are most effective for this segment?",
          "What's our customer acquisition strategy?",
          "What do we need to succeed in this segment?"
        ],
        "qualityGate": {
          "go": "Go if: GTM plan complete, channels selected, targets set, execution plan ready",
          "loopback": "Loop back if: Unclear strategy, resource gaps, need clarification"
        }
      }
    ]
  },
  "competitive-positioning": {
    "stages": [
      {
        "name": "Competitive Research",
        "objective": "Understand competitive landscape, product features, and positioning",
        "input": "Competitor list, industry data, customer feedback",
        "output": "Competitive analysis document with feature/pricing/messaging comparison",
        "activities": [
          "Research competitor products (features, capabilities, limitations)",
          "Research competitor pricing (tiers, pricing strategy, value positioning)",
          "Research competitor messaging (value prop, positioning, target market)",
          "Research competitor go-to-market (channels, customer acquisition, sales process)",
          "Analyze win/loss data to understand why customers choose competitors"
        ],
        "tools": "Competitive intelligence platforms, competitor websites, sales win/loss database",
        "roles": [
          "Competitive intelligence: research execution",
          "Sales: win/loss analysis",
          "Product: product comparison"
        ],
        "successMetric": "Competitive analysis documented with detailed comparison",
        "decisionPoints": [
          "Who are our top 3-5 competitors?",
          "What features do they have that we don't?",
          "How do they position differently than us?"
        ],
        "qualityGate": {
          "go": "Go if: Top competitors analyzed, features compared, messaging documented",
          "loopback": "Loop back if: Incomplete research, missing key competitors"
        }
      },
      {
        "name": "Positioning Analysis",
        "objective": "Analyze where competitors position and identify gaps",
        "input": "Competitive analysis, market research, customer research",
        "output": "Positioning gap analysis with opportunity identification",
        "activities": [
          "Map competitor positioning on a 2D matrix (e.g., enterprise vs. SMB, price vs. features)",
          "Identify positioning gaps (where no competitor is strong)",
          "Assess defensibility of gaps (can we own this space?)",
          "Identify adjacent positioning moves (if we move here, can we win?)",
          "Assess customer perception of our current positioning vs. competitors"
        ],
        "tools": "Positioning matrices, customer research",
        "roles": [
          "Product marketing: positioning analysis",
          "Sales: customer perception feedback"
        ],
        "successMetric": "Positioning gaps identified with feasibility analysis",
        "decisionPoints": [
          "Where can we own a unique position?",
          "What position is defensible and valuable?",
          "Should we move our positioning or stay put?"
        ],
        "qualityGate": {
          "go": "Go if: Gaps mapped, opportunities identified, customer validation started",
          "loopback": "Loop back if: Gaps unclear, feasibility questioned"
        }
      },
      {
        "name": "Message Development",
        "objective": "Develop core differentiating messages",
        "input": "Positioning analysis, company capabilities, market research",
        "output": "Key messages and value propositions validated by customers",
        "activities": [
          "Develop core value proposition (what we do differently and better)",
          "Develop supporting messages (specific benefits, use cases)",
          "Develop anti-messages (what we're NOT)",
          "Test messages with target customers",
          "Refine based on feedback",
          "Develop messaging variants for different personas/segments"
        ],
        "tools": "Messaging frameworks, customer research, A/B testing",
        "roles": [
          "Product marketing: message development",
          "Sales: customer validation",
          "Product: capability validation"
        ],
        "successMetric": "Core messages developed and tested with customers",
        "decisionPoints": [
          "What message resonates most with customers?",
          "Is our differentiation compelling and believable?",
          "Do we need different messages for different segments?"
        ],
        "qualityGate": {
          "go": "Go if: Messages tested and validated, customer feedback positive, ready for sales training",
          "loopback": "Loop back if: Messages not resonating, need to adjust"
        }
      },
      {
        "name": "Differentiation Strategy",
        "objective": "Define how we're different and better than competitors",
        "input": "Messages, positioning, competitive positioning, product capabilities",
        "output": "Differentiation strategy document linking features to benefits to value",
        "activities": [
          "Map company features to customer benefits",
          "Map benefits to customer value/ROI",
          "Compare differentiation vs. competitors",
          "Develop ROI arguments for differentiation",
          "Identify which differentiators matter most to customers"
        ],
        "tools": "Feature-benefit mapping, ROI calculators",
        "roles": [
          "Product marketing: differentiation strategy",
          "Product: feature/capability input",
          "Sales: customer value feedback"
        ],
        "successMetric": "Differentiation strategy documented with feature/benefit/value linkage",
        "decisionPoints": [
          "What are our top 3-5 differentiators?",
          "Which differentiators drive customer buying decisions?",
          "Can we prove our differentiation claims?"
        ],
        "qualityGate": {
          "go": "Go if: Differentiation clear and defensible, ROI quantified, customer validated",
          "loopback": "Loop back if: Differentiation questionable, can't prove claims"
        }
      },
      {
        "name": "Messaging Hierarchy",
        "objective": "Organize messages from primary to tertiary by priority",
        "input": "Differentiation strategy, customer research, persona segmentation",
        "output": "Messaging hierarchy by persona and customer journey stage",
        "activities": [
          "Rank messages by importance (primary, secondary, tertiary)",
          "Develop persona-specific messaging (what messages matter to each buyer persona?)",
          "Develop journey-specific messaging (what messages matter at awareness vs. consideration vs. decision?)",
          "Create messaging frameworks for different scenarios (objection handling, comparison, value prop)",
          "Document messaging guidelines for sales and marketing"
        ],
        "tools": "Messaging hierarchy templates, persona frameworks",
        "roles": [
          "Product marketing: hierarchy development",
          "Sales: persona/journey input",
          "Customer success: customer lifecycle insights"
        ],
        "successMetric": "Messaging hierarchy documented by persona/journey with clear priority",
        "decisionPoints": [
          "Which message should we lead with?",
          "Do we need different messages for different personas?",
          "How do we simplify without losing important nuance?"
        ],
        "qualityGate": {
          "go": "Go if: Hierarchy documented, sales/marketing aligned, training materials ready",
          "loopback": "Loop back if: Hierarchy unclear, personas need refinement"
        }
      },
      {
        "name": "Sales/Marketing Alignment",
        "objective": "Ensure sales and marketing use consistent messaging",
        "input": "Messaging hierarchy, sales playbooks, marketing materials",
        "output": "Aligned sales and marketing materials with consistent messaging",
        "activities": [
          "Audit current sales materials (presentations, battle cards, emails)",
          "Audit current marketing materials (website, ads, content, emails)",
          "Update materials to align with new messaging hierarchy",
          "Train sales team on new messaging",
          "Train marketing team on messaging guidelines",
          "Create collateral (one-pagers, pitch decks, battle cards) with aligned messaging",
          "Establish feedback loop for messaging updates"
        ],
        "tools": "Sales training platforms, marketing asset management",
        "roles": [
          "Sales enablement: sales training",
          "Product marketing: message alignment",
          "Sales leadership: adoption accountability"
        ],
        "successMetric": "All sales and marketing materials updated and aligned, sales trained",
        "decisionPoints": [
          "Are sales and marketing using the same messages?",
          "Do materials reflect the messaging hierarchy?",
          "Is the sales team adopting the new messaging?"
        ],
        "qualityGate": {
          "go": "Go if: Materials audited and updated, sales trained and adopting, customer feedback positive",
          "loopback": "Loop back if: Adoption low, materials need more updates"
        }
      },
      {
        "name": "Continuous Monitoring",
        "objective": "Track competitive changes and messaging effectiveness",
        "input": "Win/loss data, customer feedback, competitive updates, marketing metrics",
        "output": "Monthly/quarterly positioning updates as needed",
        "activities": [
          "Track win/loss data (are we winning or losing to competitors? Why?)",
          "Monitor customer feedback (is our messaging resonating?)",
          "Monitor competitor moves (are they changing their positioning?)",
          "Monitor marketing metrics (are messages driving engagement and conversions?)",
          "Quarterly positioning review (should we adjust?)"
        ],
        "tools": "Win/loss database, customer feedback tools, competitive intelligence, analytics",
        "roles": [
          "Competitive intelligence: competitor monitoring",
          "Sales: win/loss analysis",
          "Marketing: messaging effectiveness metrics",
          "Product marketing: quarterly positioning review"
        ],
        "successMetric": "Positioning reviewed quarterly, updates made as needed, stays competitive",
        "decisionPoints": [
          "Should we adjust our positioning?",
          "Are competitors gaining ground in any area?",
          "Is our messaging still relevant and resonating?"
        ],
        "qualityGate": {
          "go": "Go if: Monitoring system in place, quarterly reviews happening, responsive to changes",
          "loopback": "Loop back if: Not monitoring effectively, missed competitive moves"
        }
      }
    ]
  },
  "product-roadmap-alignment": {
    "stages": [
      {
        "name": "GTM Needs Assessment",
        "objective": "Identify what GTM needs from product roadmap",
        "input": "Market priorities, customer feedback, competitive gaps, sales feedback",
        "output": "GTM feature priorities and timing requirements",
        "activities": "Gather GTM feedback on customer needs, competitive gaps, sales wins/losses, market requirements",
        "tools": "Feedback collection tools, market research",
        "roles": "GTM leadership (coordination), Sales/Marketing (feedback), Product (input)",
        "successMetric": "Clear GTM feature priorities documented with timing",
        "decisionPoints": "What features most impact GTM success? Timeline critical?",
        "qualityGate": "GTM priorities documented and validated"
      },
      {
        "name": "Product Requirements",
        "objective": "Translate GTM needs into product requirements",
        "input": "GTM priorities, product capabilities, technical constraints",
        "output": "Product requirements document for roadmap features",
        "activities": "Define requirements detail, assess technical feasibility, identify dependencies, estimate effort",
        "tools": "Requirements documentation, product management tools",
        "roles": "Product management (requirements), GTM (validation), Engineering (feasibility)",
        "successMetric": "Product requirements clear and feasible",
        "decisionPoints": "Requirements address GTM needs? Technical feasible? Timeline realistic?",
        "qualityGate": "Requirements documented, engineering feasibility confirmed, timeline agreed"
      },
      {
        "name": "Release Planning",
        "objective": "Plan release cadence and feature sequencing",
        "input": "Product requirements, engineering capacity, market timing",
        "output": "Release roadmap with feature timing",
        "activities": "Sequence features by priority/timing, plan releases (quarterly, monthly, etc.), identify dependencies, confirm capacity",
        "tools": "Product roadmap tools, project planning",
        "roles": "Product management (planning), Engineering (capacity), GTM (timing input)",
        "successMetric": "Release roadmap documented with feature timing",
        "decisionPoints": "Release cadence? Feature sequencing? Market timing critical?",
        "qualityGate": "Roadmap approved, GTM and engineering aligned, timeline confirmed"
      },
      {
        "name": "Launch Strategy",
        "objective": "Develop go-to-market strategy for new features/releases",
        "input": "Release roadmap, market priorities, competitive positioning",
        "output": "Launch plan with messaging, targeting, channels",
        "activities": "Define launch timing, develop launch messaging, plan target audience, identify launch channels, plan customer communication",
        "tools": "Launch planning templates, messaging frameworks",
        "roles": "GTM leadership (strategy), Product marketing (messaging), Product (details)",
        "successMetric": "Launch plan documented with messaging and channels",
        "decisionPoints": "Launch timing optimal? Messaging compelling? Channels selected?",
        "qualityGate": "Launch plan complete, messaging approved, channels aligned"
      },
      {
        "name": "Go-to-Market Execution",
        "objective": "Execute launch and drive feature adoption",
        "input": "Launch plan approved, launch messaging ready",
        "output": "Live launch with adoption metrics tracked",
        "activities": "Execute launch campaigns, drive awareness, support sales, track adoption, monitor customer feedback",
        "tools": "Marketing automation, analytics, sales tools",
        "roles": "Marketing (campaigns), Sales (customer), Product (support), Analytics (tracking)",
        "successMetric": "Launch executed, adoption metrics tracked, customer feedback positive",
        "decisionPoints": "Launch timing optimal? Adoption tracking? Customer response?",
        "qualityGate": "Launch complete, adoption metrics tracked, feedback collected"
      },
      {
        "name": "Customer Feedback",
        "objective": "Gather customer feedback on new features",
        "input": "Feature live, customer usage data",
        "output": "Customer feedback and learning documentation",
        "activities": "Collect customer feedback, analyze usage data, identify feature issues, identify adoption barriers",
        "tools": "Customer feedback, analytics, support tickets",
        "roles": "Product (analysis), Customer success (feedback), Sales (usage feedback)",
        "successMetric": "Customer feedback documented, adoption patterns clear",
        "decisionPoints": "Feature resonating? Adoption as expected? Issues identified?",
        "qualityGate": "Feedback collected, usage analyzed, learning documented"
      },
      {
        "name": "Roadmap Refinement",
        "objective": "Update roadmap based on feature performance and feedback",
        "input": "Customer feedback, adoption data, market response",
        "output": "Refined roadmap with adjustments",
        "activities": "Assess feature performance, update priorities based on impact, identify next features, adjust roadmap",
        "tools": "Product roadmap tools, analytics",
        "roles": "Product management (refinement), GTM (impact), Customer success (feedback)",
        "successMetric": "Roadmap refined based on learning, priorities updated",
        "decisionPoints": "Features underperforming? Should we adjust priorities? Next focus?",
        "qualityGate": "Roadmap updated, GTM aligned on next priorities"
      }
    ]
  },
  "revenue-model-pricing-strategy": {
    "stages": [
      {
        "name": "Customer Research",
        "objective": "Understand customer willingness to pay and value perception",
        "input": "Customer data, market research, sales feedback",
        "output": "Customer willingness to pay analysis",
        "activities": "Interview customers on pricing, survey willingness to pay, analyze customer value perception, research customer buying criteria",
        "tools": "Customer research, survey tools, pricing research",
        "roles": "Pricing strategy lead, Customer success (feedback), Sales (data)",
        "successMetric": "Willingness to pay understood for each segment",
        "decisionPoints": "How much would customers pay? Value drivers? Segment variations?",
        "qualityGate": "Customer research complete, willingness to pay clear"
      },
      {
        "name": "Value Analysis",
        "objective": "Quantify value delivered by product to customers",
        "input": "Customer success data, ROI calculations, competitive benchmarking",
        "output": "Value quantification document",
        "activities": "Calculate customer ROI, identify value drivers, estimate time to value, assess value by segment",
        "tools": "ROI calculators, financial models",
        "roles": "Pricing strategy lead, Finance, Customer success",
        "successMetric": "Value quantified for each segment/customer type",
        "decisionPoints": "How to measure value? ROI by customer? Value drivers?",
        "qualityGate": "Value quantified and validated with customers"
      },
      {
        "name": "Competitive Benchmarking",
        "objective": "Understand competitive pricing and positioning",
        "input": "Competitor pricing data, market research, sales competitive feedback",
        "output": "Competitive pricing benchmark analysis",
        "activities": "Research competitor pricing, assess competitive positioning, identify pricing gaps, understand pricing strategies",
        "tools": "Competitive intelligence, pricing databases, sales win/loss",
        "roles": "Competitive intelligence, Sales (feedback), Pricing strategy",
        "successMetric": "Competitive pricing landscape understood",
        "decisionPoints": "How do we position vs. competitors? Pricing gap opportunities? Premium or value?",
        "qualityGate": "Competitive pricing documented, positioning clear"
      },
      {
        "name": "Pricing Model Design",
        "objective": "Design optimal pricing model for business",
        "input": "Value analysis, willingness to pay, competitive benchmarking",
        "output": "Recommended pricing model",
        "activities": "Model different pricing approaches (value-based, cost-plus, competitive, freemium, usage-based), compare financial impact, select optimal model",
        "tools": "Financial models, pricing strategy tools",
        "roles": "Pricing strategy lead, Finance, Executive team",
        "successMetric": "Pricing model designed with financial modeling",
        "decisionPoints": "Value-based or cost-based? Per-seat or usage? Premium or discount vs. competitors?",
        "qualityGate": "Pricing model selected, financial modeling complete, leadership agreement"
      },
      {
        "name": "Packaging Architecture",
        "objective": "Design pricing tiers and feature bundling",
        "input": "Pricing model, feature set, customer segmentation",
        "output": "Packaging architecture with tiers and features",
        "activities": "Define tiers (starter/professional/enterprise), allocate features by tier, set price points, plan add-ons",
        "tools": "Packaging templates, financial models",
        "roles": "Pricing strategy lead, Product, Finance",
        "successMetric": "Packaging architecture defined with price points",
        "decisionPoints": "How many tiers? Which features per tier? Add-ons for revenue?",
        "qualityGate": "Packaging approved, price points set, feature allocation clear"
      },
      {
        "name": "Testing",
        "objective": "Test pricing approach with customers and market",
        "input": "Packaging architecture, customer sample",
        "output": "Validated pricing approach with feedback",
        "activities": "Test pricing with customer sample, gather feedback on perceived value, refine based on feedback, test pricing page conversions",
        "tools": "A/B testing, customer research",
        "roles": "Pricing strategy lead, Sales (feedback), Marketing (landing pages)",
        "successMetric": "Pricing tested and validated with customers",
        "decisionPoints": "Price points resonating? Feature allocation make sense? Add-ons valuable?",
        "qualityGate": "Pricing tested, customer feedback positive, ready to implement"
      },
      {
        "name": "Optimization",
        "objective": "Continuously optimize pricing strategy",
        "input": "Pricing live, customer data, competitive updates",
        "output": "Pricing optimization recommendations",
        "activities": "Monitor pricing conversion, analyze customer value realization, track competitive pricing, gather customer feedback, recommend optimizations",
        "tools": "Analytics, customer feedback, competitive intelligence",
        "roles": "Pricing strategy lead, Analytics, Sales",
        "successMetric": "Pricing monitored and optimized regularly",
        "decisionPoints": "Are price points optimal? Should we adjust? Competitive moves to counter?",
        "qualityGate": "Pricing optimization cadence established, improvements made based on data"
      }
    ]
  },
  "territory-planning": {
    "stages": [
      {
        "name": "Account Universe Definition",
        "objective": "Identify all accounts that could be assigned to territories",
        "input": "ICP definition, market data, current customer list",
        "output": "Comprehensive account universe with fit scoring",
        "activities": "Identify potential accounts, score fit to ICP, estimate account value, segment by size/type",
        "tools": "Account databases, CRM, fit scoring tools",
        "roles": "Sales operations (coordination), Sales leadership (feedback), Analytics (scoring)",
        "successMetric": "Complete account universe with fit scoring",
        "decisionPoints": "How many accounts total? What's our total addressable?",
        "qualityGate": "Account universe documented with scoring"
      },
      {
        "name": "Account Segmentation",
        "objective": "Segment accounts by opportunity and coverage strategy",
        "input": "Account universe, fit scoring, revenue potential",
        "output": "Account segmentation with coverage strategy",
        "activities": "Segment by size/opportunity, identify tier 1/2/3 accounts, plan coverage model (1:1, 1:many, digital), identify expansion opportunities",
        "tools": "Segmentation models, CRM",
        "roles": "Sales operations, Sales leadership",
        "successMetric": "Accounts segmented with coverage strategy",
        "decisionPoints": "How many tiers? Coverage approach? Expansion strategy?",
        "qualityGate": "Segmentation complete, coverage model clear"
      },
      {
        "name": "Capacity Planning",
        "objective": "Assess sales team capacity and plan hiring",
        "input": "Account universe, target revenue, current headcount",
        "output": "Capacity model with hiring recommendations",
        "activities": "Calculate accounts per rep, assess current capacity, model hiring needed, plan onboarding timeline",
        "tools": "Capacity models, headcount planning",
        "roles": "Sales operations, Finance, Sales leadership",
        "successMetric": "Capacity model complete with hiring plan",
        "decisionPoints": "Accounts per rep sustainable? Hiring needed? Timeline?",
        "qualityGate": "Capacity assessment complete, hiring plan aligned"
      },
      {
        "name": "Territory Design",
        "objective": "Design territories that are balanced and achievable",
        "input": "Segmentation, capacity plan, account locations",
        "output": "Territory design with account assignments",
        "activities": "Create territories (geographic, account-based, vertical-based), balance across reps, account assignment, document territory rules",
        "tools": "Territory mapping tools, CRM",
        "roles": "Sales operations (design), Sales leadership (review)",
        "successMetric": "Territories designed and balanced",
        "decisionPoints": "Geographic or account-based territories? How balanced? Clear rules?",
        "qualityGate": "Territory design approved, account assignments clear"
      },
      {
        "name": "Rep Assignment",
        "objective": "Assign reps to territories matching capability",
        "input": "Territory design, rep profiles, capabilities",
        "output": "Territory rep assignments",
        "activities": "Assess rep capabilities, match to territories, plan onboarding, document assignments",
        "tools": "CRM, HRIS",
        "roles": "Sales leadership (assignment), HR (onboarding)",
        "successMetric": "All territories assigned with aligned reps",
        "decisionPoints": "Right rep for right territory? Capability gaps? Onboarding plan?",
        "qualityGate": "Assignments complete, reps notified, onboarding planned"
      },
      {
        "name": "Quota Setting",
        "objective": "Set revenue quotas for each rep and territory",
        "input": "Territory accounts, historical data, revenue targets",
        "output": "Rep quotas with clear expectations",
        "activities": "Analyze historical performance by territory, estimate revenue potential per territory, set quotas, plan for new reps/territories",
        "tools": "Quota modeling, financial tools",
        "roles": "Sales leadership (setting), Finance (validation)",
        "successMetric": "Quotas set for all reps, aligned to company revenue goals",
        "decisionPoints": "Quotas realistic? Aligned to historical performance? Fair distribution?",
        "qualityGate": "Quotas approved by leadership, communicated to reps"
      },
      {
        "name": "Performance Tracking",
        "objective": "Track territory and rep performance throughout year",
        "input": "Quotas, performance data, account data",
        "output": "Monthly/quarterly performance reports and coaching",
        "activities": "Track quota attainment, identify high/low performers, provide coaching, adjust resources as needed",
        "tools": "CRM dashboards, pipeline analytics, coaching tools",
        "roles": "Sales leadership (coaching), Sales ops (tracking)",
        "successMetric": "Performance tracked monthly, coaching provided",
        "decisionPoints": "Who's on track? Who needs support? Resource shifts needed?",
        "qualityGate": "Performance tracked consistently, coaching happening"
      },
      {
        "name": "Rebalancing",
        "objective": "Rebalance territories if needed based on performance/changes",
        "input": "Performance data, headcount changes, market changes",
        "output": "Territory adjustments or new territory design",
        "activities": "Assess territory balance, identify underperforming territories, make adjustments, communicate changes",
        "tools": "Territory tools, CRM",
        "roles": "Sales leadership (decision), Sales ops (execution)",
        "successMetric": "Territories rebalanced when needed, adjustments communicated",
        "decisionPoints": "Rebalance needed? Account shifts? New assignments?",
        "qualityGate": "Rebalancing done annually or when major changes occur"
      }
    ]
  },
  "resource-planning": {
    "stages": [
      {
        "name": "Demand Forecasting",
        "objective": "Forecast GTM resource needs for year",
        "input": "Annual strategy, growth targets, initiatives planned",
        "output": "Resource demand forecast",
        "activities": "Forecast leads needed by channel, forecast sales capacity needed, forecast marketing capacity, forecast customer success capacity",
        "tools": "Demand modeling, financial forecasts",
        "roles": "GTM leadership (coordination), Channel leads (input), Finance (validation)",
        "successMetric": "Resource demand forecast completed",
        "decisionPoints": "How many leads do we need? Sales capacity? Support capacity?",
        "qualityGate": "Demand forecast complete, assumptions documented"
      },
      {
        "name": "Capability Gap Analysis",
        "objective": "Identify gaps between current capabilities and forecasted demand",
        "input": "Current headcount, demand forecast, capability requirements",
        "output": "Capability gap analysis",
        "activities": "Compare current vs. needed capabilities, identify skill gaps, identify headcount gaps, assess team strengths/weaknesses",
        "tools": "Skills assessment, headcount analysis",
        "roles": "GTM leadership, Team leads, HR",
        "successMetric": "Capability gaps identified and quantified",
        "decisionPoints": "Headcount gaps? Skill gaps? Build vs. buy?",
        "qualityGate": "Gaps clearly identified and documented"
      },
      {
        "name": "Hiring Plan",
        "objective": "Plan hiring to close capability gaps",
        "input": "Capability gaps, budget available, hiring timeline",
        "output": "Annual hiring plan with roles, timing, budget",
        "activities": "Define roles needed, plan hiring sequence, estimate hiring costs, plan onboarding, communicate hiring plan",
        "tools": "Hiring planning, budgeting tools, HRIS",
        "roles": "GTM leadership (planning), HR (execution), Finance (budget)",
        "successMetric": "Hiring plan documented with roles and timeline",
        "decisionPoints": "Roles to hire? Hiring order? Budget sufficient?",
        "qualityGate": "Hiring plan approved by leadership and finance, HR alignment"
      },
      {
        "name": "Budget Allocation",
        "objective": "Allocate budget to GTM functions and initiatives",
        "input": "Demand forecast, hiring plan, tool requirements, initiative budgets",
        "output": "GTM budget allocation by function and initiative",
        "activities": "Allocate budget by function (demand gen, sales, success, ops), allocate contingency, plan spend timeline",
        "tools": "Budget models, financial systems",
        "roles": "GTM leadership (planning), Finance (approval)",
        "successMetric": "Budget allocated and approved",
        "decisionPoints": "Budget distribution? Contingency allocation? Flexibility?",
        "qualityGate": "Budget approved by finance, spend plan documented"
      },
      {
        "name": "Tool Investment",
        "objective": "Plan tool/technology investments needed",
        "input": "Initiative requirements, current tool stack, budget available",
        "output": "Tool investment plan with priorities and budget",
        "activities": "Assess current tools, identify gaps, evaluate new tools, plan implementation, allocate budget",
        "tools": "Tool evaluation frameworks, budget tools",
        "roles": "GTM leadership (planning), Operations (evaluation), Finance (budget)",
        "successMetric": "Tool investment plan documented with budget",
        "decisionPoints": "Which tools critical? Implementation timeline? Vendor selection?",
        "qualityGate": "Tool investment approved, vendors identified, implementation planned"
      },
      {
        "name": "Execution",
        "objective": "Execute hiring and resource allocation throughout year",
        "input": "Hiring plan, budget allocation, resource plan",
        "output": "New hires onboarded, resources deployed",
        "activities": "Recruit and hire, onboard new employees, allocate to projects, deploy resources",
        "tools": "Recruiting tools, onboarding tools, HRIS",
        "roles": "HR (hiring), GTM leadership (allocation), Team leads (integration)",
        "successMetric": "Hiring on track, resources deployed, onboarding complete",
        "decisionPoints": "Hiring pace on track? Resources deployed effectively? Ramp curves expected?",
        "qualityGate": "Hiring and deployment on track, no critical staffing gaps"
      },
      {
        "name": "Utilization Tracking",
        "objective": "Track resource utilization and efficiency",
        "input": "Resource deployed, project hours tracked, productivity data",
        "output": "Monthly/quarterly utilization reports",
        "activities": "Track time allocation, measure productivity, identify over/under-utilization, gather feedback",
        "tools": "Time tracking, utilization analytics",
        "roles": "Operations (tracking), Team leads (input), Finance (analysis)",
        "successMetric": "Utilization tracked monthly, trends visible",
        "decisionPoints": "Utilization optimal? Productivity up to expectation? Rebalancing needed?",
        "qualityGate": "Utilization tracking in place, regular reviews happening"
      },
      {
        "name": "Optimization",
        "objective": "Optimize resource allocation based on performance",
        "input": "Utilization data, performance metrics, team feedback",
        "output": "Resource optimization recommendations",
        "activities": "Analyze utilization vs. results, identify inefficiencies, recommend optimizations, adjust allocation",
        "tools": "Analytics, feedback tools",
        "roles": "GTM leadership (optimization), Finance (analysis)",
        "successMetric": "Resource optimization recommendations documented",
        "decisionPoints": "Resource allocation optimal? Capability gaps closed? Team effective?",
        "qualityGate": "Quarterly optimization review, adjustments made as needed"
      }
    ]
  },
  "pipeline-planning": {
    "stages": [
      {
        "name": "Revenue Target Definition",
        "objective": "Define revenue targets for year",
        "input": "Company growth goals, market opportunity, historical performance",
        "output": "Annual and quarterly revenue targets",
        "activities": "Set annual revenue target, break into quarterly targets, set targets by segment/product, document rationale",
        "tools": "Financial planning tools, historical data",
        "roles": "Executive leadership (targets), Finance (validation), GTM leadership (feasibility assessment)",
        "successMetric": "Revenue targets set for year and quarters",
        "decisionPoints": "Revenue target achievable? Aligned to market opportunity? By segment breakdown?",
        "qualityGate": "Revenue targets approved by leadership and board"
      },
      {
        "name": "Conversion Rate Modeling",
        "objective": "Model conversion rates by sales stage",
        "input": "Historical conversion data, sales process, pipeline behavior",
        "output": "Conversion rate model by stage",
        "activities": "Analyze historical conversion rates by stage, identify benchmarks, model forward, assess assumptions",
        "tools": "Analytics tools, historical data, pipeline tools",
        "roles": "Analytics (analysis), Sales leadership (feedback), Finance (validation)",
        "successMetric": "Conversion rates modeled for each stage",
        "decisionPoints": "Conversion rates realistic? Any improvements expected?",
        "qualityGate": "Conversion rates documented, assumptions validated"
      },
      {
        "name": "Pipeline Requirements",
        "objective": "Calculate pipeline needed to hit revenue targets",
        "input": "Revenue targets, conversion rates",
        "output": "Pipeline requirements calculation",
        "activities": "Calculate pipeline needed at each stage, work backwards from revenue target, assess current vs. needed",
        "tools": "Pipeline calculators, financial models",
        "roles": "Analytics (calculation), Sales leadership (reality check)",
        "successMetric": "Pipeline requirements calculated",
        "decisionPoints": "Current pipeline sufficient? New pipeline needed? By how much?",
        "qualityGate": "Pipeline requirements clear and documented"
      },
      {
        "name": "Forecast Build",
        "objective": "Build revenue forecast based on current pipeline",
        "input": "Current pipeline, pipeline requirements, conversion rates",
        "output": "Revenue forecast for year",
        "activities": "Model current pipeline through conversion rates, identify forecast gap, build pipeline addition needed",
        "tools": "Forecasting models, CRM",
        "roles": "Analytics (forecast), Sales (pipeline review), Finance (validation)",
        "successMetric": "Revenue forecast documented",
        "decisionPoints": "Forecast to hit targets? Gap identified? Risks?",
        "qualityGate": "Forecast built, reviewed by leadership"
      },
      {
        "name": "Risk Assessment",
        "objective": "Identify risks to revenue forecast",
        "input": "Revenue forecast, pipeline data, market factors",
        "output": "Risk assessment document",
        "activities": "Identify pipeline risks (loss rates, stage time), identify competitive risks, identify market risks, quantify impact",
        "tools": "Risk assessment frameworks",
        "roles": "Sales leadership (pipeline risk), GTM (market risk), Finance (impact)",
        "successMetric": "Risks identified and quantified",
        "decisionPoints": "What's our biggest forecast risk? Impact if realized? Mitigation possible?",
        "qualityGate": "Major risks identified and documented"
      },
      {
        "name": "Mitigation Planning",
        "objective": "Plan mitigation for identified risks",
        "input": "Risk assessment, pipeline, resources available",
        "output": "Risk mitigation plan",
        "activities": "Plan mitigations for top risks, plan contingencies, ensure resource availability",
        "tools": "Risk management templates",
        "roles": "Sales leadership (mitigation), GTM (support), Finance (tracking)",
        "successMetric": "Mitigation plan for top risks documented",
        "decisionPoints": "Mitigations sufficient? Additional resources needed?",
        "qualityGate": "Mitigation plan approved, resources committed"
      },
      {
        "name": "Tracking",
        "objective": "Track pipeline and forecast performance throughout year",
        "input": "Revenue forecast, current pipeline, monthly results",
        "output": "Monthly/quarterly forecast tracking and updates",
        "activities": "Monitor pipeline health, compare actual to forecast, update forecast monthly, assess forecast accuracy",
        "tools": "CRM dashboards, forecasting tools, pipeline analytics",
        "roles": "Sales leadership (pipeline), Analytics (tracking), Finance (forecasting)",
        "successMetric": "Pipeline and forecast tracked monthly with visibility",
        "decisionPoints": "On track to forecast? Variance from plan? Forecast adjusted?",
        "qualityGate": "Monthly tracking happening, forecast updates communicated"
      },
      {
        "name": "Adjustment",
        "objective": "Adjust pipeline and forecast based on performance",
        "input": "Tracking data, market changes, pipeline changes",
        "output": "Adjusted forecast and pipeline strategy",
        "activities": "Analyze variances, adjust forecast as needed, adjust pipeline strategy, rebalance resources",
        "tools": "Forecasting tools, resource planning",
        "roles": "Sales leadership (strategy), GTM (support), Finance (forecasting)",
        "successMetric": "Forecast adjusted, strategy updated",
        "decisionPoints": "Major adjustments needed? Strategy shift? Resource rebalancing?",
        "qualityGate": "Adjustments documented, communicated to stakeholders"
      }
    ]
  },
  "sales-playbook-development": {
    "stages": [
      {
        "name": "Segment Definition",
        "objective": "Define which segment/persona the playbook targets",
        "input": "ICP definition, segment analysis, customer data",
        "output": "Clear segment/persona definition for playbook",
        "activities": "Define target segment, customer profile, pain points, success criteria, buying journey",
        "tools": "Persona frameworks, customer research",
        "roles": "Product marketing (definition), Sales (validation)",
        "successMetric": "Clear segment/persona defined",
        "decisionPoints": "One playbook or multiple by segment? Level of detail?",
        "qualityGate": "Segment clearly defined, sales aligned"
      },
      {
        "name": "Use Case Mapping",
        "objective": "Identify how our product solves customer problems in this segment",
        "input": "Segment definition, product capabilities, customer pain points",
        "output": "Use case mapping for segment",
        "activities": "Map customer pain points to our solutions, identify key use cases, quantify value/ROI, identify competitive alternatives",
        "tools": "Use case templates, value modeling",
        "roles": "Product marketing (mapping), Product (capabilities), Sales (customer context)",
        "successMetric": "Use cases mapped with value quantified",
        "decisionPoints": "What are top 3 use cases? ROI clear? Differentiated?",
        "qualityGate": "Use cases documented, value clear"
      },
      {
        "name": "Messaging Development",
        "objective": "Develop segment-specific messaging and positioning",
        "input": "Use cases, competitive positioning, segment needs",
        "output": "Segment messaging with primary, secondary, supporting messages",
        "activities": "Develop value propositions, develop supporting messages, develop objection handling messages",
        "tools": "Messaging frameworks",
        "roles": "Product marketing (development), Sales (validation)",
        "successMetric": "Segment messaging developed and validated",
        "decisionPoints": "Messaging resonates? Differentiated from competitors?",
        "qualityGate": "Messaging approved by sales and marketing leadership"
      },
      {
        "name": "Objection Identification",
        "objective": "Identify and plan for common objections in this segment",
        "input": "Win/loss analysis, sales feedback, competitive data",
        "output": "Objection handling framework",
        "activities": "Identify top objections, develop handling responses, plan for competitive objections, develop proof points",
        "tools": "Win/loss database, objection handling templates",
        "roles": "Sales (input), Product marketing (documentation)",
        "successMetric": "Top objections identified with responses documented",
        "decisionPoints": "Most common objections? Best responses? Case studies to support?",
        "qualityGate": "Objection handling documented, sales trained"
      },
      {
        "name": "Solution Architecture",
        "objective": "Map product to customer solution architecture",
        "input": "Use cases, customer technical context, product capabilities",
        "output": "Solution architecture for segment",
        "activities": "Define typical customer architecture, map product into it, identify integrations, plan technical positioning",
        "tools": "Architecture frameworks, technical documentation",
        "roles": "Product (architecture), Sales engineers (input), Product marketing (positioning)",
        "successMetric": "Solution architecture clear for segment",
        "decisionPoints": "How does product fit customer tech stack? Key integrations?",
        "qualityGate": "Architecture documented, sales eng aligned"
      },
      {
        "name": "Playbook Creation",
        "objective": "Create comprehensive playbook for sales to follow",
        "input": "Messaging, use cases, objections, solution architecture, sales process",
        "output": "Complete sales playbook for segment",
        "activities": "Document segment strategy, document sales process by stage, document key messages/talking points, document case studies/proof points, document tools/resources",
        "tools": "Playbook templates, documentation tools",
        "roles": "Product marketing (creation), Sales leadership (review)",
        "successMetric": "Comprehensive playbook documented",
        "decisionPoints": "Enough detail without being overwhelming? Organized clearly?",
        "qualityGate": "Playbook complete, reviewed by sales leadership"
      },
      {
        "name": "Sales Enablement",
        "objective": "Train sales team on playbook and get adoption",
        "input": "Completed playbook",
        "output": "Trained sales team with playbook adoption",
        "activities": "Conduct training session, role-play scenarios, provide feedback, establish usage expectations, create accountability",
        "tools": "Training tools, role-play materials",
        "roles": "Sales enablement (training), Product marketing (content expertise)",
        "successMetric": "Sales team trained, adoption beginning",
        "decisionPoints": "Adoption level? Gaps in understanding? Additional support needed?",
        "qualityGate": "Training complete, initial adoption confirmed"
      },
      {
        "name": "Iteration",
        "objective": "Update playbook based on sales feedback and results",
        "input": "Sales feedback, win/loss data, usage data",
        "output": "Updated playbook with improvements",
        "activities": "Gather sales feedback on playbook, analyze results, identify gaps/improvements, update playbook, retrain",
        "tools": "Feedback tools, analytics",
        "roles": "Product marketing (iteration), Sales (feedback)",
        "successMetric": "Playbook updated quarterly based on learning",
        "decisionPoints": "What's working? What needs improvement? Major changes or tweaks?",
        "qualityGate": "Regular playbook reviews happening, improvements implemented"
      }
    ]
  },
  "marketing-calendar-development": {
    "stages": [
      {
        "name": "Annual Theme Definition",
        "objective": "Define overarching marketing theme/strategy for year",
        "input": "Annual GTM strategy, market positioning, customer needs",
        "output": "Annual marketing theme and pillars",
        "activities": "Define annual theme, define 3-5 marketing pillars/topics, identify key moments/events, plan messaging flow",
        "tools": "Strategy templates, content planning",
        "roles": "Marketing leadership (theme), Product marketing (positioning)",
        "successMetric": "Clear annual theme with 3-5 pillars",
        "decisionPoints": "Compelling theme? Aligned to strategy? Flexible enough for changes?",
        "qualityGate": "Theme approved by leadership"
      },
      {
        "name": "Campaign Identification",
        "objective": "Identify specific campaigns for the year",
        "input": "Annual theme, quarterly OKRs, customer calendar, industry calendar",
        "output": "Campaign calendar with campaigns identified",
        "activities": "Identify demand gen campaigns, identify engagement campaigns, identify thought leadership campaigns, identify event tie-ins",
        "tools": "Campaign planning templates",
        "roles": "Marketing leadership (planning), Team leads (input)",
        "successMetric": "Campaign calendar with campaigns identified",
        "decisionPoints": "Right number of campaigns? Good distribution throughout year? Aligned to OKRs?",
        "qualityGate": "Campaign calendar approved"
      },
      {
        "name": "Content Planning",
        "objective": "Plan content needed to support campaigns and pillars",
        "input": "Campaign calendar, marketing pillars, content inventory",
        "output": "Content calendar with content pieces identified",
        "activities": "Identify content pieces by type (blog, whitepaper, case study, video, etc.), plan content creation, identify repurposing opportunities",
        "tools": "Content calendars, content management systems",
        "roles": "Content marketing (planning), Team leads (input)",
        "successMetric": "Content calendar with all campaigns and content mapped",
        "decisionPoints": "Right content mix? Creation vs. repurposing? Enough resources?",
        "qualityGate": "Content calendar complete"
      },
      {
        "name": "Channel Allocation",
        "objective": "Allocate campaigns and content to channels",
        "input": "Campaign calendar, content calendar, channel capabilities",
        "output": "Channel-specific campaign and content plan",
        "activities": "Map campaigns to channels, identify channel owners, plan channel strategy for each campaign",
        "tools": "Channel strategy templates",
        "roles": "Channel leads (input), Marketing leadership (coordination)",
        "successMetric": "Campaigns and content allocated to channels",
        "decisionPoints": "Right channels for each campaign? Resource available? Conflicts?",
        "qualityGate": "Channel allocation complete, channel leads aligned"
      },
      {
        "name": "Timeline Creation",
        "objective": "Create detailed timeline for campaign execution",
        "input": "Campaign calendar, content calendar, channel allocation",
        "output": "Detailed timeline with milestones and deadlines",
        "activities": "Define campaign start/end dates, identify key milestones, identify content creation deadlines, identify publishing dates",
        "tools": "Project management tools, calendars",
        "roles": "Marketing operations (timeline), Team leads (input)",
        "successMetric": "Detailed timeline with all milestones",
        "decisionPoints": "Timeline realistic? Enough lead time? Dependencies clear?",
        "qualityGate": "Timeline created and resource-loaded"
      },
      {
        "name": "Resource Assignment",
        "objective": "Assign resources to each campaign and content piece",
        "input": "Timeline, campaigns, content, available resources",
        "output": "Resource allocation with owners and team assignments",
        "activities": "Assign campaign owners, assign content creators, assign budget, plan resource timeline",
        "tools": "Resource planning, project management",
        "roles": "Marketing leadership (assignment), Team leads (confirmation)",
        "successMetric": "All campaigns and content assigned owners with resources confirmed",
        "decisionPoints": "Resources sufficient? Right skills assigned? Capacity conflicts?",
        "qualityGate": "Resource allocation complete, owners confirmed"
      },
      {
        "name": "Publishing Schedule",
        "objective": "Create detailed publishing schedule for content",
        "input": "Content calendar, channel allocation, timeline",
        "output": "Content publishing calendar",
        "activities": "Define publishing dates and frequency, identify publishing channel per content, set up automation where possible",
        "tools": "Content management systems, publishing tools",
        "roles": "Content marketing (schedule), Channel leads (channel input)",
        "successMetric": "Publishing schedule defined for all content",
        "decisionPoints": "Publishing frequency optimal? Timezone considerations? Promotion timing?",
        "qualityGate": "Publishing schedule confirmed, automation set up"
      },
      {
        "name": "Performance Tracking",
        "objective": "Track marketing calendar execution and performance",
        "input": "Publishing schedule, campaigns active",
        "output": "Monthly/quarterly performance reports",
        "activities": "Monitor campaign performance, track content engagement, track channel performance, identify optimizations needed",
        "tools": "Analytics dashboards, campaign tracking",
        "roles": "Analytics (reporting), Marketing leadership (analysis)",
        "successMetric": "Performance tracked monthly, reporting consistent",
        "decisionPoints": "Campaigns on track? Content performing? Optimizations needed?",
        "qualityGate": "Performance tracking in place, regular reviews happening"
      }
    ]
  },
  "weekly-monthly-execution-plan": {
    "stages": [
      {
        "name": "Priority Setting",
        "objective": "Identify top priorities for week/month",
        "input": "OKRs, initiatives, customer needs, blockers",
        "output": "Clear list of top priorities",
        "activities": "Review OKRs and initiatives, identify top 3-5 priorities for week, identify urgent issues, plan priority order",
        "tools": "Priority management tools",
        "roles": "GTM leadership (setting), Team leads (input)",
        "successMetric": "Clear top priorities identified",
        "decisionPoints": "What's most important this week? Any urgent items? Dependencies?",
        "qualityGate": "Priorities clear and communicated"
      },
      {
        "name": "Task Definition",
        "objective": "Break priorities into specific tasks",
        "input": "Priorities identified",
        "output": "Detailed task list with descriptions",
        "activities": "Define specific tasks for each priority, break into subtasks, define success criteria",
        "tools": "Task management tools",
        "roles": "Team leads (definition), Individual contributors (input)",
        "successMetric": "All priorities broken into specific tasks",
        "decisionPoints": "Tasks clear and actionable? Right level of detail?",
        "qualityGate": "Task list finalized"
      },
      {
        "name": "Owner Assignment",
        "objective": "Assign owners to each task",
        "input": "Task list, team capabilities",
        "output": "Tasks with assigned owners",
        "activities": "Identify task owners, confirm capacity, establish accountability",
        "tools": "Task management, HRIS",
        "roles": "Team leads (assignment), Individuals (confirmation)",
        "successMetric": "All tasks assigned with confirmed owners",
        "decisionPoints": "Right person for each task? Capacity okay? Too many on one person?",
        "qualityGate": "All owners assigned and confirmed"
      },
      {
        "name": "Deadline Setting",
        "objective": "Set realistic deadlines for each task",
        "input": "Task list, owner assignments",
        "output": "Tasks with deadlines",
        "activities": "Set deadlines, sequence tasks, identify dependencies, plan buffer time",
        "tools": "Calendars, project management tools",
        "roles": "Team leads (setting), Owners (confirmation)",
        "successMetric": "All tasks have deadlines",
        "decisionPoints": "Deadlines realistic? Dependencies sequenced? Buffers adequate?",
        "qualityGate": "Deadlines set and agreed"
      },
      {
        "name": "Resource Allocation",
        "objective": "Allocate resources needed for task execution",
        "input": "Task list, deadlines, available resources",
        "output": "Resource allocation plan",
        "activities": "Identify resource needs, allocate budget, allocate tools/access, plan support",
        "tools": "Resource planning tools",
        "roles": "Operations (allocation), Team leads (input)",
        "successMetric": "Resource needs identified and allocated",
        "decisionPoints": "Resources sufficient? Conflicts? Contingencies needed?",
        "qualityGate": "Resources allocated and confirmed available"
      },
      {
        "name": "Kickoff",
        "objective": "Kick off week/month with team alignment",
        "input": "Tasks, assignments, resources, deadlines",
        "output": "Aligned team ready to execute",
        "activities": "Hold kickoff meeting, review priorities, clarify tasks, address questions, establish communication cadence",
        "tools": "Meeting tools, task management",
        "roles": "GTM leadership (facilitation), Team leads (participation)",
        "successMetric": "Team aligned and ready to execute",
        "decisionPoints": "Everyone clear on priorities? Any blockers before start?",
        "qualityGate": "Kickoff complete, team ready"
      },
      {
        "name": "Progress Tracking",
        "objective": "Track daily/weekly progress throughout period",
        "input": "Tasks assigned, deadlines set",
        "output": "Daily/weekly progress updates and issue escalation",
        "activities": "Daily standup (15 min), track progress, identify blockers, escalate issues, adjust plan as needed",
        "tools": "Standup tools, task management, issue tracking",
        "roles": "Team leads (facilitation), Team (updates)",
        "successMetric": "Daily progress tracked, blockers visible",
        "decisionPoints": "On track? Blockers identified? Plan adjustments needed?",
        "qualityGate": "Daily tracking happening, issues escalated quickly"
      },
      {
        "name": "Adjustment",
        "objective": "Adjust execution plan based on real-time learning",
        "input": "Progress data, blockers, changes",
        "output": "Adjusted plan for remainder of week/month",
        "activities": "Assess progress vs. plan, identify adjustments needed, rebalance resources, communicate changes, keep momentum",
        "tools": "Task management, resource planning",
        "roles": "GTM leadership (adjustment), Team leads (input)",
        "successMetric": "Plan adjusted as needed, team kept on track",
        "decisionPoints": "Major adjustments needed? Resource rebalancing? Timeline changes?",
        "qualityGate": "Adjustments made quickly, minimal plan disruption"
      }
    ]
  },
  "gtm-metrics-framework": {
    "stages": [
      {
        "name": "Metric Definition",
        "objective": "Define which metrics matter for GTM success",
        "input": "OKRs, strategy, business goals, customer needs",
        "output": "Comprehensive metric definition",
        "activities": "Identify leading and lagging indicators, define metric names/descriptions, identify owners",
        "tools": "Metric framework templates",
        "roles": "Analytics (definition), GTM leadership (strategy input), Finance (business input)",
        "successMetric": "15-20 key metrics defined with descriptions",
        "decisionPoints": "Which metrics truly matter? Leading vs. lagging? Actionable?",
        "qualityGate": "Metrics defined and agreed as key indicators"
      },
      {
        "name": "Data Source Identification",
        "objective": "Identify where data comes from for each metric",
        "input": "Metric definitions, data systems available",
        "output": "Data source mapping for each metric",
        "activities": "Identify system where each metric lives (CRM, marketing automation, analytics), confirm data availability, plan data integration",
        "tools": "Data inventory, integration tools",
        "roles": "Analytics (identification), Operations (integration planning)",
        "successMetric": "Data sources identified for all metrics",
        "decisionPoints": "Data available? Clean? Integration needed?",
        "qualityGate": "Data sources confirmed and accessible"
      },
      {
        "name": "Calculation Logic",
        "objective": "Define exactly how each metric is calculated",
        "input": "Metrics, data sources",
        "output": "Calculation logic documentation",
        "activities": "Define calculation formula, define data filters/segments, define time periods, document edge cases",
        "tools": "Calculation documentation, data tools",
        "roles": "Analytics (definition), Data (validation)",
        "successMetric": "Calculation logic documented for all metrics",
        "decisionPoints": "Logic clear and unambiguous? Consistent across reports?",
        "qualityGate": "Calculation logic documented and validated"
      },
      {
        "name": "Baseline Setting",
        "objective": "Establish baseline for each metric",
        "input": "Historical data, calculation logic",
        "output": "Baseline values established",
        "activities": "Pull historical data, calculate baseline, document baseline assumptions",
        "tools": "Analytics, historical data",
        "roles": "Analytics (calculation)",
        "successMetric": "Baselines calculated and documented",
        "decisionPoints": "Baseline realistic? Comparable periods?",
        "qualityGate": "Baselines established and documented"
      },
      {
        "name": "Target Setting",
        "objective": "Set targets for each metric",
        "input": "Baselines, OKRs, strategy",
        "output": "Metric targets for year/quarter",
        "activities": "Set targets based on OKRs and strategy, set committed vs. stretch targets, document rationale",
        "tools": "Target setting frameworks",
        "roles": "GTM leadership (targets), Finance (validation)",
        "successMetric": "Targets set for all metrics for year and quarters",
        "decisionPoints": "Targets ambitious but achievable? Aligned to OKRs?",
        "qualityGate": "Targets approved by leadership"
      },
      {
        "name": "Dashboard Creation",
        "objective": "Create dashboards to track metrics",
        "input": "Metrics, targets, data sources, calculation logic",
        "output": "Live metric dashboards",
        "activities": "Design dashboard layout, configure data pulls, set up automated reporting, establish refresh cadence",
        "tools": "Dashboard tools (Tableau, Looker, etc.), data integration",
        "roles": "Analytics/BI (creation), Operations (automation)",
        "successMetric": "Dashboards live and updated regularly",
        "decisionPoints": "Accessible to right people? Refresh frequency adequate?",
        "qualityGate": "Dashboards live and showing accurate data"
      },
      {
        "name": "Monitoring",
        "objective": "Monitor metrics against targets throughout period",
        "input": "Live dashboards, targets",
        "output": "Monthly/weekly metric reports",
        "activities": "Review metrics vs. targets, identify variances, investigate root causes, communicate results",
        "tools": "Dashboards, reporting tools",
        "roles": "Analytics (monitoring), GTM leadership (analysis)",
        "successMetric": "Metrics monitored weekly/monthly with results communicated",
        "decisionPoints": "On track to targets? Variances explained? Actions taken?",
        "qualityGate": "Regular monitoring happening, results communicated"
      },
      {
        "name": "Optimization",
        "objective": "Optimize metrics based on performance data",
        "input": "Performance data, variance analysis, team feedback",
        "output": "Metric optimizations and target adjustments",
        "activities": "Analyze what's driving underperformance, plan optimizations, adjust targets if needed, implement improvements",
        "tools": "Analytics, improvement tracking",
        "roles": "GTM leadership (optimization), Analytics (analysis)",
        "successMetric": "Metrics reviewed quarterly, optimizations planned",
        "decisionPoints": "Targets still realistic? Metrics still relevant? Optimizations possible?",
        "qualityGate": "Quarterly metric review and optimization happening"
      }
    ]
  },
  "dashboard-reporting": {
    "stages": [
      {
        "name": "Reporting Needs Assessment",
        "objective": "Identify who needs what reporting",
        "input": "Stakeholder list, decision-making needs",
        "output": "Reporting requirements by audience",
        "activities": "Identify stakeholders (executives, managers, ICs), identify their questions/needs, identify required frequency",
        "tools": "Stakeholder analysis",
        "roles": "GTM leadership (assessment), Analytics (input)",
        "successMetric": "Reporting requirements documented for each stakeholder group",
        "decisionPoints": "Who needs what information? Frequency? Detail level?",
        "qualityGate": "Requirements clear and documented"
      },
      {
        "name": "Metric Selection",
        "objective": "Select metrics to include in dashboards/reports",
        "input": "Available metrics, stakeholder needs",
        "output": "Metrics selected for each audience",
        "activities": "Select relevant metrics per audience, prioritize by importance, plan data sources",
        "tools": "Metric framework, data inventory",
        "roles": "Analytics (selection), Stakeholders (validation)",
        "successMetric": "Metrics selected for each reporting audience",
        "decisionPoints": "Right metrics for audience? Actionable? Too many or too few?",
        "qualityGate": "Metrics selected and stakeholders agree relevant"
      },
      {
        "name": "Dashboard Design",
        "objective": "Design dashboards for each reporting audience",
        "input": "Metrics selected, visualization needs, brand guidelines",
        "output": "Dashboard designs and layouts",
        "activities": "Design dashboard layout, identify visualizations, design for accessibility, balance comprehensiveness and simplicity",
        "tools": "Dashboard design tools, design guidelines",
        "roles": "Analytics/BI (design), UX (guidance)",
        "successMetric": "Dashboard designs created for each audience",
        "decisionPoints": "Layouts intuitive? Visualizations clear? Data hierarchy right?",
        "qualityGate": "Dashboard designs reviewed and approved"
      },
      {
        "name": "Data Integration",
        "objective": "Integrate data sources to populate dashboards",
        "input": "Dashboard designs, metric definitions, data sources",
        "output": "Dashboards connected to live data",
        "activities": "Build data queries, configure data pulls, set up transformations, validate data accuracy",
        "tools": "BI tools, data integration tools",
        "roles": "Analytics/BI (integration), Data (support)",
        "successMetric": "Dashboards connected to live data",
        "decisionPoints": "Data accurate? Refresh frequency sufficient? Data quality good?",
        "qualityGate": "Data integration complete and validated"
      },
      {
        "name": "Automation Setup",
        "objective": "Automate dashboard updates and report generation",
        "input": "Dashboards live, reporting frequency defined",
        "output": "Automated dashboard updates and report generation",
        "activities": "Set up automated data refresh, set up automated report generation, schedule deliveries, configure alerts",
        "tools": "BI tools, automation tools",
        "roles": "Analytics/BI (setup), Operations (monitoring)",
        "successMetric": "Dashboards auto-update, reports auto-generate",
        "decisionPoints": "Refresh frequency adequate? Distribution timing right? Alerts useful?",
        "qualityGate": "Automation working, no manual intervention needed"
      },
      {
        "name": "Distribution",
        "objective": "Get dashboards/reports to stakeholders",
        "input": "Automated reports/dashboards",
        "output": "Reports/dashboards distributed regularly",
        "activities": "Set up report distribution, provide access to dashboards, communicate cadence, establish access controls",
        "tools": "Email, dashboard access, distribution tools",
        "roles": "Operations (distribution), Analytics (access)",
        "successMetric": "Reports distributed on schedule, dashboard access available",
        "decisionPoints": "Distribution working? Access correct? Format right?",
        "qualityGate": "All stakeholders receiving reports/dashboards regularly"
      },
      {
        "name": "Consumption Tracking",
        "objective": "Track whether stakeholders are using reports/dashboards",
        "input": "Distributed reports, dashboards available",
        "output": "Usage tracking and insights",
        "activities": "Track report opens, track dashboard views, identify usage patterns, gather feedback",
        "tools": "Email tracking, analytics, feedback tools",
        "roles": "Analytics (tracking), Operations (feedback)",
        "successMetric": "Usage data collected and analyzed",
        "decisionPoints": "Usage levels adequate? Engagement high? Gaps in consumption?",
        "qualityGate": "Usage tracking in place, patterns visible"
      },
      {
        "name": "Refinement",
        "objective": "Refine reports and dashboards based on usage and feedback",
        "input": "Usage data, stakeholder feedback",
        "output": "Refined reports and dashboards",
        "activities": "Analyze feedback, identify improvements, adjust metrics/visualizations, update dashboards, communicate changes",
        "tools": "Dashboard tools, feedback collection",
        "roles": "Analytics (refinement), Stakeholders (input)",
        "successMetric": "Reports/dashboards refined quarterly based on feedback",
        "decisionPoints": "Major changes needed? Metrics still relevant? Format working?",
        "qualityGate": "Regular refinement happening, stakeholder satisfaction high"
      }
    ]
  },
  "data-integrity-architecture": {
    "stages": [
      {
        "name": "Data Audit",
        "objective": "Audit current data landscape and quality",
        "input": "Data systems in use, current data",
        "output": "Data audit report with quality assessment",
        "activities": "Inventory data systems, assess data completeness, assess data accuracy, identify quality issues, identify gaps",
        "tools": "Data auditing tools, data quality tools",
        "roles": "Data ops (audit), Analytics (assessment), IT (systems)",
        "successMetric": "Comprehensive data audit completed",
        "decisionPoints": "Data quality issues identified? Extent of problems? Priority fixes?",
        "qualityGate": "Data audit completed and issues documented"
      },
      {
        "name": "Quality Issues Identification",
        "objective": "Identify specific data quality problems",
        "input": "Data audit, quality assessment",
        "output": "Prioritized list of data quality issues",
        "activities": "Categorize issues (duplicates, missing data, incorrect data), prioritize by impact, estimate effort to fix",
        "tools": "Issue tracking, data quality tools",
        "roles": "Data ops (identification), Analytics (impact assessment)",
        "successMetric": "Quality issues identified and prioritized",
        "decisionPoints": "Which issues most important? Quick wins available? Root causes?",
        "qualityGate": "Issues documented with prioritization"
      },
      {
        "name": "Data Governance Plan",
        "objective": "Create plan for managing data quality going forward",
        "input": "Quality issues identified, organizational structure",
        "output": "Data governance plan with policies and responsibilities",
        "activities": "Define data governance policies, assign data owners, define data quality standards, define escalation process",
        "tools": "Governance templates, policy documents",
        "roles": "Data leadership (planning), IT (input), GTM (input)",
        "successMetric": "Comprehensive data governance plan documented",
        "decisionPoints": "Roles clear? Standards realistic? Enforcement mechanisms?",
        "qualityGate": "Governance plan approved and communicated"
      },
      {
        "name": "Integration Setup",
        "objective": "Integrate data systems to ensure consistency",
        "input": "Data systems inventory, integration needs",
        "output": "Data integrations configured",
        "activities": "Map data across systems, build data pipelines, configure automated syncs, test integrations",
        "tools": "Data integration tools (Zapier, make.com, etc.), APIs",
        "roles": "Data ops (setup), IT (infrastructure), Analytics (validation)",
        "successMetric": "Key data integrations configured and working",
        "decisionPoints": "Integration coverage sufficient? Sync frequency adequate? Error handling?",
        "qualityGate": "Integrations tested and working reliably"
      },
      {
        "name": "Validation Rules",
        "objective": "Implement validation rules to prevent bad data",
        "input": "Data quality standards, data entry points",
        "output": "Validation rules in place",
        "activities": "Define validation rules, configure in systems, test rules, provide feedback to users",
        "tools": "Data validation tools, CRM configuration, automation",
        "roles": "Data ops (configuration), IT (setup), GTM (testing)",
        "successMetric": "Validation rules implemented across key systems",
        "decisionPoints": "Rules comprehensive? Too restrictive? User experience?",
        "qualityGate": "Validation rules working and preventing bad data"
      },
      {
        "name": "Ongoing Monitoring",
        "objective": "Monitor data quality on ongoing basis",
        "input": "Data systems with validation, metrics defined",
        "output": "Monthly data quality reports",
        "activities": "Monitor data quality metrics, identify new issues early, escalate problems, provide feedback to data owners",
        "tools": "Data quality dashboards, monitoring tools",
        "roles": "Data ops (monitoring), Analytics (reporting)",
        "successMetric": "Data quality monitored monthly with visibility",
        "decisionPoints": "Quality improving? New issues appearing? Root causes?",
        "qualityGate": "Monitoring system in place, monthly reports generated"
      },
      {
        "name": "Regular Audits",
        "objective": "Conduct regular audits of data quality and governance",
        "input": "Data quality metrics, governance policies",
        "output": "Quarterly/annual audit reports",
        "activities": "Conduct data quality audits, assess governance compliance, identify improvement areas",
        "tools": "Audit templates, data quality tools",
        "roles": "Data leadership (audit), Data ops (execution)",
        "successMetric": "Quarterly audits conducted, results documented",
        "decisionPoints": "Quality improving? Governance being followed? Major issues?",
        "qualityGate": "Regular audit cadence established"
      },
      {
        "name": "Improvement",
        "objective": "Continuously improve data quality and governance",
        "input": "Audit results, monitoring data, issue feedback",
        "output": "Data quality improvements implemented",
        "activities": "Plan improvements, execute fixes, retrain users, document learnings",
        "tools": "Issue tracking, improvement templates",
        "roles": "Data leadership (planning), Data ops (execution), IT (support)",
        "successMetric": "Data quality improving over time, governance compliance high",
        "decisionPoints": "Most important improvements? Quick wins? Training needed?",
        "qualityGate": "Improvement plan executed, quality metrics show improvement"
      }
    ]
  },
  "attribution-roi-tracking": {
    "stages": [
      {
        "name": "Touch Point Definition",
        "objective": "Define all customer touch points to track",
        "input": "Customer journey, marketing channels, sales activities",
        "output": "Comprehensive list of touch points",
        "activities": "Map customer journey, identify all touch points (ads, content, sales calls, events, etc.), plan tracking for each",
        "tools": "Customer journey mapping, analytics tools",
        "roles": "Marketing (mapping), Analytics (tracking plan)",
        "successMetric": "All major touch points identified",
        "decisionPoints": "Which touch points matter? Tracking feasible? Data available?",
        "qualityGate": "Touch point list comprehensive and tracking feasible"
      },
      {
        "name": "Attribution Model Design",
        "objective": "Design attribution model (how credit gets assigned to touch points)",
        "input": "Touch points, customer data, business goals",
        "output": "Attribution model specification",
        "activities": "Choose model type (first-touch, last-touch, linear, time-decay, custom), specify model rules, get stakeholder agreement",
        "tools": "Attribution model templates, analytics tools",
        "roles": "Analytics (design), Finance (financial input), GTM (business logic)",
        "successMetric": "Attribution model designed and documented",
        "decisionPoints": "Which model best reflects business? Stakeholder agreement? Custom needed?",
        "qualityGate": "Model specified, stakeholders agree on approach"
      },
      {
        "name": "Data Collection Setup",
        "objective": "Set up systems to collect attribution data",
        "input": "Attribution model, touch points, data systems",
        "output": "Data collection infrastructure in place",
        "activities": "Implement tracking code, configure analytics, set up CRM tracking, set up integration between systems",
        "tools": "Analytics platforms, UTM tracking, CRM, data integration",
        "roles": "Analytics (setup), IT (infrastructure), Marketing (implementation)",
        "successMetric": "Data collection working for all touch points",
        "decisionPoints": "Tracking complete? Data flowing correctly? Quality good?",
        "qualityGate": "Data collection tested and working"
      },
      {
        "name": "Analysis Framework",
        "objective": "Define framework for analyzing attribution data",
        "input": "Attribution model, business questions, available tools",
        "output": "Analysis framework and reporting approach",
        "activities": "Define key questions to answer (which channels drive revenue, what's CAC by channel, etc.), plan analysis approach",
        "tools": "Analysis templates, reporting tools",
        "roles": "Analytics (framework), GTM (questions)",
        "successMetric": "Analysis framework documented",
        "decisionPoints": "Right questions? Feasible to analyze? Tools adequate?",
        "qualityGate": "Framework defined, analysis approach clear"
      },
      {
        "name": "Campaign Attribution",
        "objective": "Calculate attribution for each marketing campaign",
        "input": "Attribution model, campaign data, touch point data",
        "output": "Campaign-level attribution reports",
        "activities": "Analyze which touch points contributed to conversions, calculate credit per campaign, identify highest-impact campaigns",
        "tools": "Analytics platforms, attribution tools, BI tools",
        "roles": "Analytics (analysis), Marketing (validation)",
        "successMetric": "Campaign attribution reports generated",
        "decisionPoints": "Which campaigns most impactful? Surprising results? Actionable insights?",
        "qualityGate": "Attribution calculated for all campaigns"
      },
      {
        "name": "ROI Calculation",
        "objective": "Calculate ROI by campaign/channel",
        "input": "Campaign attribution, campaign spend, customer value",
        "output": "ROI reports by campaign/channel",
        "activities": "Calculate revenue influenced by campaign, compare to campaign spend, calculate ROI, identify most efficient channels",
        "tools": "Financial tools, ROI calculators, BI tools",
        "roles": "Analytics (calculation), Finance (validation)",
        "successMetric": "ROI calculated for all major campaigns/channels",
        "decisionPoints": "Which channels most efficient? ROI meeting targets? Budget allocation optimal?",
        "qualityGate": "ROI calculated and validated"
      },
      {
        "name": "Optimization",
        "objective": "Optimize marketing spend based on attribution and ROI",
        "input": "Attribution and ROI data, campaign performance",
        "output": "Optimization recommendations and budget reallocation",
        "activities": "Identify highest-ROI channels, identify lowest-ROI channels, plan budget shifts, plan performance improvements",
        "tools": "Analytics, budget planning tools",
        "roles": "Analytics (analysis), Marketing (strategy), Finance (approval)",
        "successMetric": "Attribution insights used to optimize spending",
        "decisionPoints": "Which channels shift budget to? Should we stop underperformers? Invest in winners?",
        "qualityGate": "Attribution insights regularly used to optimize spending"
      }
    ]
  },
  "decision-making-framework": {
    "stages": [
      {
        "name": "Decision Type Definition",
        "objective": "Identify types of decisions that get made in GTM",
        "input": "Strategy, organizational structure, common decisions",
        "output": "Decision type categories",
        "activities": "Identify strategic decisions, identify tactical decisions, identify operational decisions, categorize decisions",
        "tools": "Decision frameworks",
        "roles": "GTM leadership (definition)",
        "successMetric": "Decision types categorized",
        "decisionPoints": "Right categories? Overlaps? Mutually exclusive?",
        "qualityGate": "Decision types clearly defined"
      },
      {
        "name": "Authority Mapping",
        "objective": "Map authority to make decisions to roles/individuals",
        "input": "Decision types, organizational structure, decision value/impact",
        "output": "Authority matrix (who decides what)",
        "activities": "Assign decision authority by type, define escalation thresholds, identify veto power, document exceptions",
        "tools": "Authority matrices, organizational charts",
        "roles": "Executive leadership (mapping)",
        "successMetric": "Clear authority matrix documented",
        "decisionPoints": "Authority clear? Aligned to organizational structure? Fair distribution?",
        "qualityGate": "Authority matrix approved by leadership"
      },
      {
        "name": "Process Documentation",
        "objective": "Document decision-making process",
        "input": "Authority matrix, decision types",
        "output": "Decision process documentation",
        "activities": "Document process for each decision type, identify inputs/stakeholders, identify timeline, document documentation requirements",
        "tools": "Process documentation, playbook templates",
        "roles": "GTM operations (documentation), Leadership (input)",
        "successMetric": "Decision process documented for all decision types",
        "decisionPoints": "Processes clear? Efficiently designed? Properly documented?",
        "qualityGate": "Process documentation complete and reviewed"
      },
      {
        "name": "Training",
        "objective": "Train team on decision-making framework",
        "input": "Authority matrix, process documentation",
        "output": "Trained team on decision framework",
        "activities": "Hold training session, review authority matrix, review decision processes, answer questions, test understanding",
        "tools": "Training materials, training tools",
        "roles": "Operations (training delivery), Leadership (participation)",
        "successMetric": "Team trained on decision framework",
        "decisionPoints": "Team understanding? Questions resolved? Adoption likely?",
        "qualityGate": "Training complete, team ready to use framework"
      },
      {
        "name": "Execution",
        "objective": "Execute decisions following the framework",
        "input": "Decision type identified, framework in place",
        "output": "Decisions made following process",
        "activities": "Identify decision type, gather inputs, get appropriate approval, document decision, communicate",
        "tools": "Decision templates, documentation tools",
        "roles": "Decision-maker (execution), Stakeholders (input)",
        "successMetric": "Decisions made and documented systematically",
        "decisionPoints": "Process being followed? Decisions efficient? Stakeholder buy-in?",
        "qualityGate": "Decision process being followed consistently"
      },
      {
        "name": "Review",
        "objective": "Review decision outcomes",
        "input": "Decision made, results over time",
        "output": "Decision outcome assessment",
        "activities": "Review decision against objectives, assess if it achieved intended outcome, document learnings",
        "tools": "Review templates, outcome tracking",
        "roles": "GTM leadership (review), Decision-maker (input)",
        "successMetric": "Decisions reviewed for outcome",
        "decisionPoints": "Decision effective? What worked? What didn't?",
        "qualityGate": "Regular decision reviews happening"
      },
      {
        "name": "Feedback Loop",
        "objective": "Gather feedback on decision-making process",
        "input": "Decision outcomes, process execution",
        "output": "Feedback on decision framework",
        "activities": "Gather feedback from decision-makers, gather feedback from stakeholders, identify process improvements",
        "tools": "Feedback surveys, interview tools",
        "roles": "Operations (feedback collection), Leadership (participation)",
        "successMetric": "Feedback collected regularly",
        "decisionPoints": "Process working well? Improvements needed? Changes to framework?",
        "qualityGate": "Feedback being collected systematically"
      },
      {
        "name": "Refinement",
        "objective": "Refine decision framework based on learning",
        "input": "Feedback, outcome assessments",
        "output": "Refined decision framework",
        "activities": "Identify framework improvements, update authority/process as needed, retrain team, communicate changes",
        "tools": "Process improvement templates",
        "roles": "Leadership (refinement), Operations (execution)",
        "successMetric": "Framework refined regularly, improvements implemented",
        "decisionPoints": "Framework improvements clear? Should we change authority? Process refinements?",
        "qualityGate": "Annual framework review and refinement happening"
      }
    ]
  },
  "weekly-gtm-standup": {
    "stages": [
      {
        "name": "Status Collection",
        "objective": "Gather status updates from all teams",
        "input": "Initiative progress, team accomplishments, blockers",
        "output": "Status summary from all teams",
        "activities": "Have team leads provide updates (what we accomplished, what we're working on, blockers), consolidate status",
        "tools": "Status templates, meeting tools",
        "roles": "Team leads (updates), Operations (consolidation)",
        "successMetric": "Status received from all teams",
        "decisionPoints": "What was accomplished? What's on track?",
        "qualityGate": "Comprehensive status collected"
      },
      {
        "name": "Issue Identification",
        "objective": "Identify issues that need discussion/resolution",
        "input": "Status updates, team feedback",
        "output": "List of issues to discuss",
        "activities": "Identify blockers, identify risks, identify decisions needed, prioritize issues",
        "tools": "Issue tracking, meeting tools",
        "roles": "Operations (identification), Team leads (input)",
        "successMetric": "Issues identified and prioritized",
        "decisionPoints": "Which issues most urgent? What can be resolved quickly?",
        "qualityGate": "Issues clearly identified"
      },
      {
        "name": "Discussion",
        "objective": "Discuss issues and get team input",
        "input": "Issue list, team input",
        "output": "Issue discussion and perspectives",
        "activities": "Facilitate discussion, get diverse perspectives, understand root causes, explore solutions",
        "tools": "Meeting tools, collaboration tools",
        "roles": "GTM leadership (facilitation), Team (input)",
        "successMetric": "Issues discussed thoroughly",
        "decisionPoints": "Root causes clear? Possible solutions identified?",
        "qualityGate": "Discussion happening, multiple perspectives heard"
      },
      {
        "name": "Decision Making",
        "objective": "Make decisions to resolve issues",
        "input": "Issue discussion, authority matrix",
        "output": "Decisions and action plans",
        "activities": "Make decisions on issues, assign accountability, set timelines",
        "tools": "Decision templates",
        "roles": "Decision authority (making), Team (input)",
        "successMetric": "Decisions made on all critical issues",
        "decisionPoints": "Decision clear? Owner assigned? Timeline realistic?",
        "qualityGate": "Decisions made and communicated"
      },
      {
        "name": "Action Items",
        "objective": "Document action items from standup",
        "input": "Decisions made, discussion outcomes",
        "output": "Documented action items with owners and deadlines",
        "activities": "Capture action items, assign owners, set deadlines, document in issue tracking system",
        "tools": "Action item tracking, issue system",
        "roles": "Operations (documentation), Team (confirmation)",
        "successMetric": "All action items documented and assigned",
        "decisionPoints": "All items captured? Owners confirmed? Deadlines realistic?",
        "qualityGate": "Action items in tracking system"
      },
      {
        "name": "Follow-up",
        "objective": "Follow up on action items during the week",
        "input": "Action items assigned",
        "output": "Action item progress through the week",
        "activities": "Check in on action items mid-week, escalate anything at risk, provide support to owners",
        "tools": "Action tracking, communication tools",
        "roles": "Operations (follow-up), Owners (updates)",
        "successMetric": "Action items tracked to completion",
        "decisionPoints": "On track to deadline? Support needed? Blockers?",
        "qualityGate": "Proactive follow-up happening"
      },
      {
        "name": "Resolution",
        "objective": "Close out action items when complete",
        "input": "Completed action items",
        "output": "Resolved issues and action items",
        "activities": "Confirm completion, document resolution, communicate outcomes",
        "tools": "Action tracking, communication",
        "roles": "Owners (completion), Operations (confirmation)",
        "successMetric": "Action items closed when complete",
        "decisionPoints": "Completion acceptable? Learning captured?",
        "qualityGate": "Action items closed systematically"
      },
      {
        "name": "Learning Capture",
        "objective": "Capture learnings for improvement",
        "input": "Issues discussed, resolutions, outcomes",
        "output": "Learning documentation",
        "activities": "Identify patterns in issues, document root causes, capture best practices",
        "tools": "Learning docs, issue tracking",
        "roles": "Operations (documentation), Leadership (input)",
        "successMetric": "Learnings documented monthly",
        "decisionPoints": "Patterns in issues? Systemic problems? Improvement opportunities?",
        "qualityGate": "Learning captured and shared"
      }
    ]
  },
  "quarterly-gtm-planning": {
    "stages": [
      {
        "name": "Strategy Review",
        "objective": "Review annual strategy and assess relevance to current quarter",
        "input": "Annual GTM strategy, prior quarter results, market changes, competitive updates",
        "output": "Confirmed/adjusted strategy for coming quarter",
        "activities": [
          "Review annual strategy and strategic pillars",
          "Assess if strategy still applies given market/competitive changes",
          "Review last quarter results and learnings",
          "Identify if strategic adjustments needed",
          "Document any strategic pivots or adjustments"
        ],
        "tools": "Strategy documents, quarterly results dashboards",
        "roles": [
          "Executive leadership: strategy review",
          "GTM lead: assessment and recommendations",
          "Extended team: feedback on execution"
        ],
        "successMetric": "Strategy confirmed or adjusted, documented for quarter planning",
        "decisionPoints": [
          "Does our annual strategy still make sense?",
          "Should we pivot based on last quarter learnings?",
          "Are market conditions changing our strategy?"
        ],
        "qualityGate": {
          "go": "Go if: Strategy reviewed and confirmed, any pivots documented and approved",
          "loopback": "Loop back if: Major strategy questions, need executive alignment"
        }
      },
      {
        "name": "Objective Setting",
        "objective": "Define quarterly objectives and key results (OKRs)",
        "input": "Strategy confirmed, budget available, team capacity",
        "output": "Quarterly OKRs (3-5 objectives with 3-4 key results each)",
        "activities": [
          "Define quarterly objectives (what do we want to achieve?)",
          "Set key results for each objective (how do we measure success?)",
          "Balance committed vs. stretch goals",
          "Set targets that are ambitious but achievable",
          "Get alignment from all teams on OKRs"
        ],
        "tools": "OKR frameworks, planning templates",
        "roles": [
          "Executive leadership: OKR approval",
          "GTM lead: OKR definition",
          "Team leads: input on ambitious-but-achievable targets"
        ],
        "successMetric": "3-5 quarterly OKRs with clear key results defined and approved",
        "decisionPoints": [
          "What are our top 3-5 priorities for the quarter?",
          "Are our targets stretching but realistic?",
          "Do we have dependencies between OKRs?"
        ],
        "qualityGate": {
          "go": "Go if: OKRs approved by leadership, teams understand and committed",
          "loopback": "Loop back if: OKRs too ambitious/conservative, need recalibration"
        }
      },
      {
        "name": "Initiative Planning",
        "objective": "Identify specific initiatives needed to achieve OKRs",
        "input": "Quarterly OKRs, team capacity, available budget",
        "output": "List of initiatives with owners, timelines, budgets",
        "activities": [
          "Identify initiatives needed to achieve each OKR",
          "Define initiative scope, timeline, and success criteria",
          "Estimate resource requirements (headcount, budget, tools)",
          "Identify dependencies between initiatives",
          "Assign owners and executive sponsors",
          "Sequence initiatives throughout quarter"
        ],
        "tools": "Project management tools, initiative planning templates",
        "roles": [
          "Team leads: initiative identification and planning",
          "GTM lead: coordination and prioritization",
          "Finance: budget validation"
        ],
        "successMetric": "List of initiatives defined with owners, timelines, budgets",
        "decisionPoints": [
          "Which initiatives are most critical?",
          "Do we have capacity to execute all initiatives?",
          "Should we prioritize or parallelize?"
        ],
        "qualityGate": {
          "go": "Go if: All initiatives assigned owners, budgets approved, sequencing clear",
          "loopback": "Loop back if: Too many initiatives, resource constraints, need to prioritize"
        }
      },
      {
        "name": "Resource Allocation",
        "objective": "Allocate budget and headcount to initiatives",
        "input": "Initiatives list, available budget, headcount available",
        "output": "Resource allocation plan with budget by initiative",
        "activities": [
          "Allocate budget by initiative (how much can we spend on each?)",
          "Allocate headcount by initiative (who is working on what?)",
          "Identify any resource gaps (what do we need vs. what do we have?)",
          "Plan for new hiring if needed",
          "Document resource constraints and trade-offs"
        ],
        "tools": "Budget tracking, HRIS, resource planning tools",
        "roles": [
          "Finance: budget allocation and approval",
          "GTM operations: resource planning",
          "HR: headcount coordination"
        ],
        "successMetric": "Budget allocated by initiative, resource plan documented",
        "decisionPoints": [
          "Are we over-resourced on any initiatives?",
          "Are we under-resourced on critical initiatives?",
          "Should we hire or redirect existing resources?"
        ],
        "qualityGate": {
          "go": "Go if: Budget approved, resource plan clear, no critical gaps",
          "loopback": "Loop back if: Budget constraints force priority changes, need executive decision"
        }
      },
      {
        "name": "Team Alignment",
        "objective": "Ensure all teams understand quarterly priorities and plan",
        "input": "OKRs, initiatives, resource allocation",
        "output": "Aligned teams ready to execute",
        "activities": [
          "Hold kickoff meeting with extended team",
          "Present OKRs and explain rationale",
          "Present initiatives and resource allocations",
          "Address questions and concerns",
          "Establish communication cadence for quarter",
          "Distribute planning documents to all teams"
        ],
        "tools": "Presentation tools, planning documents",
        "roles": [
          "GTM leadership: kickoff facilitation and communication",
          "Team leads: team communications"
        ],
        "successMetric": "Team kickoff completed, plan communicated, teams aligned and committed",
        "decisionPoints": [
          "Do teams understand the quarterly priorities?",
          "Are there any unresolved concerns or questions?",
          "Is everyone committed to the plan?"
        ],
        "qualityGate": {
          "go": "Go if: Kickoff completed, Q&A addressed, teams ready to execute",
          "loopback": "Loop back if: Significant resistance or unclear understanding, need more alignment"
        }
      },
      {
        "name": "Execution Kickoff",
        "objective": "Launch initiatives and establish execution cadence",
        "input": "Teams aligned, budgets approved, resource allocated",
        "output": "Initiatives kicked off with tracking and governance in place",
        "activities": [
          "Kick off each initiative (project planning, team assignment)",
          "Establish initiative governance (weekly/bi-weekly check-ins)",
          "Set up tracking and dashboards (progress, milestones, blockers)",
          "Establish escalation path for issues",
          "Set up weekly GTM standup to sync across initiatives"
        ],
        "tools": "Project management tools, progress tracking dashboards",
        "roles": [
          "Team leads: initiative kickoff",
          "GTM lead: cross-initiative coordination"
        ],
        "successMetric": "All initiatives kicked off, tracking in place, weekly sync established",
        "decisionPoints": [
          "Are all teams executing against plan?",
          "Are there early blockers or issues?",
          "Do we need to adjust plan based on execution reality?"
        ],
        "qualityGate": {
          "go": "Go if: Initiatives actively executing, tracking updated, no critical blockers",
          "loopback": "Loop back if: Initiatives stalled, tracking incomplete"
        }
      },
      {
        "name": "Progress Tracking & Adjustments",
        "objective": "Track progress throughout quarter and make real-time adjustments",
        "input": "Weekly updates from initiatives, metrics dashboards, team feedback",
        "output": "Quarterly review of progress with in-quarter adjustments",
        "activities": [
          "Weekly standup to review progress on all initiatives",
          "Monthly review of OKR progress",
          "Identify blockers and resolve quickly",
          "Rebalance resources if needed based on execution reality",
          "Adjust plan if market changes warrant",
          "Celebrate wins and learnings",
          "Document issues for post-quarter review"
        ],
        "tools": "Dashboards, weekly update templates, issue tracking",
        "roles": [
          "GTM lead: progress tracking and coordination",
          "Team leads: initiative updates and issue escalation"
        ],
        "successMetric": "Weekly tracking complete, OKR progress clear, issues escalated and resolved",
        "decisionPoints": [
          "Are we tracking to OKRs?",
          "Should we accelerate or slow any initiatives?",
          "Do we need to resource anything differently?"
        ],
        "qualityGate": {
          "go": "Go if: Tracking system working, blockers being resolved, progress on track",
          "loopback": "Loop back if: Tracking incomplete, too many unresolved blockers"
        }
      },
      {
        "name": "Results Review",
        "objective": "Review quarter results and assess achievement against OKRs",
        "input": "Final quarter metrics, completed initiatives, team feedback",
        "output": "Quarterly business review with results, learnings, and next quarter implications",
        "activities": [
          "Review OKR achievement (did we hit our targets? Why or why not?)",
          "Analyze initiative results (what worked? what didn't?)",
          "Extract learnings (what should we do differently?)",
          "Identify wins to celebrate and share",
          "Assess impact on annual strategy (are we on track?)",
          "Plan implications for next quarter",
          "Share results broadly across company"
        ],
        "tools": "Results dashboards, qualitative feedback collection, retrospective templates",
        "roles": [
          "GTM lead: results analysis and synthesis",
          "Team leads: team feedback and contribution",
          "Executive leadership: review and strategic implications"
        ],
        "successMetric": "Quarterly review completed, results communicated, learnings documented",
        "decisionPoints": [
          "Did we achieve our OKRs?",
          "What should we do differently next quarter?",
          "Should we adjust annual strategy based on results?"
        ],
        "qualityGate": {
          "go": "Go if: Results reviewed, learnings captured, next quarter informed by results",
          "loopback": "Loop back if: Results analysis incomplete, unclear implications for next quarter"
        }
      }
    ]
  },
  "campaign-planning": {
    "stages": [
      {
        "name": "Campaign Objectives",
        "objective": "Define campaign goals and success criteria",
        "input": "Quarterly OKRs, business priorities, customer data",
        "output": "Campaign objectives and success metrics",
        "activities": [
          "Define campaign purpose (awareness, demand gen, engagement, conversion)",
          "Set campaign targets (# leads, pipeline value, qualified meetings, conversions)",
          "Define success metrics and KPIs",
          "Set campaign timeline (start date, end date, key milestones)",
          "Identify campaign theme or message focus"
        ],
        "tools": "Campaign planning templates, goal-setting frameworks",
        "roles": [
          "Campaign manager: campaign planning",
          "Marketing leadership: objective approval",
          "Sales: target/pipeline input"
        ],
        "successMetric": "Campaign objectives defined with clear success metrics",
        "decisionPoints": [
          "What's the primary goal of this campaign?",
          "What targets are realistic and ambitious?",
          "What timeframe do we need?"
        ],
        "qualityGate": {
          "go": "Go if: Objectives approved, targets set, timeline clear",
          "loopback": "Loop back if: Objectives unclear, targets disputed"
        }
      },
      {
        "name": "Audience Definition",
        "objective": "Define target audience for campaign",
        "input": "Campaign objectives, customer data, ICP definition",
        "output": "Detailed audience profile with segments and personas",
        "activities": [
          "Define primary audience (who is this campaign for?)",
          "Define secondary audience (who else might benefit?)",
          "Segment audience (are there sub-segments with different messages?)",
          "Define persona(s) (role, responsibilities, pain points, buying criteria)",
          "Estimate audience size and reachability",
          "Identify audience characteristics (demographics, firmographics, psychographics)"
        ],
        "tools": "Audience research tools, CRM data, persona frameworks",
        "roles": [
          "Campaign manager: audience definition",
          "Product marketing: persona input",
          "Analytics: audience sizing"
        ],
        "successMetric": "Audience profile defined with detailed persona(s)",
        "decisionPoints": [
          "Who is our core target for this campaign?",
          "Are there important sub-segments?",
          "How big is the addressable audience?"
        ],
        "qualityGate": {
          "go": "Go if: Audience clearly defined, persona(s) documented, size estimated",
          "loopback": "Loop back if: Audience definition unclear, persona needs refinement"
        }
      },
      {
        "name": "Channel Selection",
        "objective": "Choose channels to reach target audience",
        "input": "Audience definition, budget available, channel capabilities",
        "output": "Multi-channel plan with audience by channel",
        "activities": [
          "Identify potential channels (email, ads, content, events, partnerships, etc.)",
          "Assess channel effectiveness for this audience (which channels reach them best?)",
          "Assess channel capacity (can we execute at our scale?)",
          "Estimate cost per channel",
          "Select primary and supporting channels",
          "Allocate target audience by channel"
        ],
        "tools": "Channel capability assessments, audience research, budget models",
        "roles": [
          "Campaign manager: channel selection",
          "Channel teams: capability and capacity input",
          "Analytics: effectiveness data"
        ],
        "successMetric": "Multi-channel plan defined with audience/budget by channel",
        "decisionPoints": [
          "Which channels will reach our audience most effectively?",
          "Should we do single-channel or multi-channel?",
          "What's our channel budget allocation?"
        ],
        "qualityGate": {
          "go": "Go if: Channels selected, rationale clear, channel teams aligned",
          "loopback": "Loop back if: Channel selection questioned, capacity concerns"
        }
      },
      {
        "name": "Content & Creative Planning",
        "objective": "Plan content and creative assets for campaign",
        "input": "Campaign theme, audience, channel selection",
        "output": "Content calendar and creative asset list",
        "activities": [
          "Define campaign message and positioning",
          "Plan content pieces needed (blogs, emails, ads, landing pages, social, etc.)",
          "Define creative requirements (copy, design, imagery)",
          "Assign content ownership (who creates what?)",
          "Create content calendar (when does each piece publish?)",
          "Plan A/B testing (which variations will we test?)"
        ],
        "tools": "Content management systems, creative brief templates",
        "roles": [
          "Campaign manager: content planning",
          "Copywriters: copy content",
          "Designers: visual creative",
          "Content creators: blog, social, video content"
        ],
        "successMetric": "Content calendar created with all assets assigned and dated",
        "decisionPoints": [
          "What's the core message for this campaign?",
          "What content pieces are essential?",
          "Should we create new content or repurpose existing?",
          "What A/B tests should we run?"
        ],
        "qualityGate": {
          "go": "Go if: Content calendar complete, assignments clear, creative briefs approved",
          "loopback": "Loop back if: Content gaps, creative direction unclear"
        }
      },
      {
        "name": "Budget Allocation",
        "objective": "Allocate campaign budget across channels and activities",
        "input": "Channel plan, content plan, creative requirements",
        "output": "Campaign budget with cost by channel and activity",
        "activities": [
          "Estimate cost by channel (ad spend, sponsorships, events, etc.)",
          "Estimate content creation costs",
          "Estimate tools and technology costs",
          "Allocate contingency budget",
          "Get budget approval",
          "Track budget vs. spend"
        ],
        "tools": "Budget tracking spreadsheets, finance systems",
        "roles": [
          "Campaign manager: budget planning",
          "Finance: budget approval and tracking",
          "Channel teams: cost estimation"
        ],
        "successMetric": "Campaign budget approved with detailed allocation",
        "decisionPoints": [
          "What's our total campaign budget?",
          "How should we allocate across channels?",
          "Is our budget sufficient to hit targets?"
        ],
        "qualityGate": {
          "go": "Go if: Budget approved by finance, allocations clear, tracking set up",
          "loopback": "Loop back if: Budget constraints force strategy changes"
        }
      },
      {
        "name": "Execution Setup",
        "objective": "Set up all systems and assets needed to launch campaign",
        "input": "Approved content, budget, channel plans",
        "output": "Campaign ready to launch with all systems configured",
        "activities": [
          "Create all content assets (copy, design, landing pages, ads, emails)",
          "Set up tracking (UTM codes, conversion tracking, lead scoring)",
          "Configure tools (email platform, ad accounts, landing pages)",
          "Test all systems (emails send, ads deploy, landing pages load)",
          "Brief all teams (who's doing what, when?)",
          "Plan launch sequence (when does each channel go live?)"
        ],
        "tools": "Marketing automation, ad platforms, landing page builders, testing tools",
        "roles": [
          "Campaign manager: execution coordination",
          "Content team: asset creation",
          "Ops/analytics: tracking setup",
          "Channel teams: platform configuration"
        ],
        "successMetric": "All campaign systems configured, assets created, launch ready",
        "decisionPoints": [
          "Are all assets ready?",
          "Is tracking configured correctly?",
          "Do we need to sequence launches?"
        ],
        "qualityGate": {
          "go": "Go if: All systems tested and ready, launch plan clear, team briefed",
          "loopback": "Loop back if: Assets incomplete, systems not working, need fixes"
        }
      },
      {
        "name": "Performance Tracking",
        "objective": "Monitor campaign performance in real-time",
        "input": "Campaign launched, metrics dashboard",
        "output": "Daily/weekly performance reporting and optimization adjustments",
        "activities": [
          "Set up performance dashboards (impressions, clicks, conversions, CAC, etc.)",
          "Monitor daily performance",
          "Alert on underperforming channels or tactics",
          "Identify opportunities for optimization",
          "Make real-time adjustments (pause underperforming ads, adjust targeting, etc.)",
          "Document performance for post-campaign analysis"
        ],
        "tools": "Analytics dashboards, ad platform dashboards, metrics tracking",
        "roles": [
          "Campaign manager: daily monitoring",
          "Paid media specialist: ad optimization",
          "Analytics: metrics and insights"
        ],
        "successMetric": "Performance tracked daily, optimizations made, on-track to targets",
        "decisionPoints": [
          "Are we tracking to targets?",
          "Which channels/tactics are performing best?",
          "Should we shift budget to winning channels?",
          "Are we hitting CAC targets?"
        ],
        "qualityGate": {
          "go": "Go if: Tracking system active, performance visible, optimizations being made",
          "loopback": "Loop back if: Tracking incomplete, no visibility into performance"
        }
      },
      {
        "name": "Optimization",
        "objective": "Improve campaign performance throughout campaign",
        "input": "Performance data, A/B test results, team feedback",
        "output": "Campaign performance improvements and learnings",
        "activities": [
          "Analyze A/B test results (winning variations)",
          "Double down on high-performing tactics",
          "Pause or reduce underperforming tactics",
          "Adjust targeting or messaging based on performance",
          "Optimize landing page conversions",
          "Optimize email open and click rates",
          "Optimize ad creative and copy",
          "Document optimizations and results"
        ],
        "tools": "A/B testing platforms, analytics, optimization tools",
        "roles": [
          "Campaign manager: optimization coordination",
          "Analytics: performance analysis",
          "Specialists: tactic-specific optimization"
        ],
        "successMetric": "Campaign optimized with improved performance, learnings documented",
        "decisionPoints": [
          "Which tactics should we double down on?",
          "Which tactics should we pause?",
          "What was our most successful messaging?",
          "What did we learn for next campaign?"
        ],
        "qualityGate": {
          "go": "Go if: Campaign complete, results analyzed, learnings documented for next campaign",
          "loopback": "Loop back if: Final performance unclear, need more analysis"
        }
      }
    ]
  },
  "customer-onboarding-strategy": {
    "stages": [
      {
        "name": "Success Planning",
        "objective": "Define customer success outcomes and alignment with customer goals",
        "input": "Customer contract, product roadmap, customer's business objectives",
        "output": "Customer success plan documenting goals and outcomes",
        "activities": "Discovery meeting with customer, document business goals, identify success criteria, map to product capabilities, define success metrics",
        "tools": "Success planning templates, customer data platforms, CRM",
        "roles": "Customer success manager (coordination), Sales (context), Product (capabilities)",
        "successMetric": "Success plan documented and approved by customer",
        "decisionPoints": "Success criteria clear? Aligned to business outcomes? Realistic timeline?",
        "qualityGate": "Success plan approved, metrics agreed, customer aligned"
      },
      {
        "name": "Stakeholder Mapping",
        "objective": "Identify all customer stakeholders and their roles",
        "input": "Customer org chart, success plan, buying committee",
        "output": "Stakeholder map with roles, influence, support needs",
        "activities": "Identify executive sponsor, identify end users, identify technical stakeholders, map influence/power, identify objection handlers",
        "tools": "Stakeholder mapping templates",
        "roles": "CSM (mapping), Sales (buying committee knowledge)",
        "successMetric": "Stakeholder map with 5+ stakeholders identified and profiled",
        "decisionPoints": "Right stakeholders identified? Executive support secured? Influencers identified?",
        "qualityGate": "Stakeholder map complete, executive sponsor identified, communication plan drafted"
      },
      {
        "name": "Timeline & Milestones",
        "objective": "Create realistic onboarding timeline with key milestones",
        "input": "Customer context, product setup complexity, resource availability",
        "output": "Detailed onboarding timeline with milestones (30/60/90 day plan)",
        "activities": "Map onboarding phases, identify key milestones, identify critical path, plan resource allocation, build buffer time",
        "tools": "Project management, timeline templates",
        "roles": "CSM (lead), Technical services (input), Customer (constraints)",
        "successMetric": "Timeline with all milestones and dependencies mapped",
        "decisionPoints": "Timeline realistic? Dependencies clear? Customer constraints understood?",
        "qualityGate": "Timeline approved by customer and internal team"
      },
      {
        "name": "Training & Enablement Plan",
        "objective": "Design training curriculum specific to customer's needs and users",
        "input": "Customer user profiles, product capabilities, success plan",
        "output": "Training curriculum with delivery method and schedule",
        "activities": "Assess user skill levels, design role-specific training paths, create training materials, plan delivery method (live/video/docs), schedule training sessions",
        "tools": "Learning management systems, training templates",
        "roles": "Enablement team (design), CSM (coordination), Product team (expertise)",
        "successMetric": "Training curriculum documented with user groups and schedules",
        "decisionPoints": "Right training depth? Appropriate delivery method? Enough time allocated?",
        "qualityGate": "Training plan approved, materials ready, delivery scheduled"
      },
      {
        "name": "Success Metrics Definition",
        "objective": "Quantify success with measurable outcomes and tracking plan",
        "input": "Success plan, customer goals, product metrics available",
        "output": "Dashboard with KPIs, success metrics, and tracking approach",
        "activities": "Map customer goals to product metrics, identify leading/lagging indicators, set success thresholds, design tracking/reporting, identify data sources",
        "tools": "Analytics platforms, dashboard tools, data warehouse",
        "roles": "CSM (definition), Analytics (implementation), Customer (validation)",
        "successMetric": "Success dashboard designed with 3-5 key metrics and tracking plan",
        "decisionPoints": "Metrics aligned to business goals? Data available? Achievable targets?",
        "qualityGate": "Success metrics agreed, dashboard built, reporting cadence set"
      },
      {
        "name": "Communication & Engagement Plan",
        "objective": "Design communication cadence and engagement model with customer",
        "input": "Stakeholder map, timeline, success plan",
        "output": "Communication plan with cadence, channels, owners",
        "activities": "Define communication cadence (weekly/bi-weekly/monthly), identify channels per stakeholder, assign owners, plan check-in agendas, plan escalation path",
        "tools": "Communication templates, calendar management",
        "roles": "CSM (lead), Marketing (engagement content), Sales (ongoing relationship)",
        "successMetric": "Communication plan with cadence, channels, and owners documented",
        "decisionPoints": "Right frequency? Stakeholder preferences understood? Engagement ownership clear?",
        "qualityGate": "Communication plan approved by customer, calendar locked"
      },
      {
        "name": "Kickoff Preparation",
        "objective": "Prepare materials and team for customer kickoff",
        "input": "All prior stages, team assignments, customer context",
        "output": "Kickoff meeting materials and prepared team",
        "activities": "Prepare kickoff presentation, assign team roles, brief internal team, prepare customer materials, confirm attendees, test technology",
        "tools": "Presentation tools, meeting software, communication systems",
        "roles": "CSM (lead), Executive sponsor (input), Technical team (setup), Product (demo)",
        "successMetric": "Kickoff materials ready, team briefed, customer confirmed",
        "decisionPoints": "Team ready? Materials clear? Customer expectations set? Technology working?",
        "qualityGate": "Kickoff scheduled, materials approved, team prepared, customer confirmed"
      }
    ]
  },
  "customer-onboarding-implementation": {
    "stages": [
      {
        "name": "Setup & Configuration",
        "objective": "Configure product instance for customer's specific needs",
        "input": "Success plan, customer requirements, integration needs",
        "output": "Configured product instance ready for training",
        "activities": "Provision account/workspace, configure settings per customer needs, set up custom fields, configure workflows, set up integrations, test configuration",
        "tools": "Product admin console, integration platform, CRM, data platforms",
        "roles": "Onboarding specialist (execution), Product experts (complex configs), Customer (requirements)",
        "successMetric": "Product configured and tested, ready for user training",
        "decisionPoints": "Configuration accurate? All integrations working? User permissions set correctly?",
        "qualityGate": "Configuration complete and tested, customer approved"
      },
      {
        "name": "User Provisioning",
        "objective": "Create user accounts and set up access for all customer users",
        "input": "Stakeholder map, user profiles, access requirements",
        "output": "All users provisioned with correct permissions and access",
        "activities": "Create user accounts per user list, assign role-based permissions, configure authentication/SSO if needed, test access, send credential information",
        "tools": "User management systems, SSO platforms, identity management",
        "roles": "Onboarding tech (execution), IT support (if SSO), Customer IT (requirements)",
        "successMetric": "All users provisioned and able to log in",
        "decisionPoints": "Permissions correct per role? SSO configured? Access tested?",
        "qualityGate": "All users active, permissions verified, login confirmed"
      },
      {
        "name": "Technical Integration",
        "objective": "Connect product to customer's existing systems and workflows",
        "input": "Integration requirements, existing system details, API documentation",
        "output": "Active integrations with all required systems",
        "activities": "Map integration requirements, configure API connections, build/configure middleware if needed, test data flows, monitor for issues",
        "tools": "Integration platforms, APIs, middleware solutions, monitoring tools",
        "roles": "Integration specialist (setup), Technical team (execution), Customer IT (requirements)",
        "successMetric": "All planned integrations live and syncing",
        "decisionPoints": "Data flows working correctly? No data loss? Monitoring in place? Error handling configured?",
        "qualityGate": "Integrations tested and stable, monitoring active"
      },
      {
        "name": "Training Delivery",
        "objective": "Execute training curriculum with all user groups",
        "input": "Training curriculum, user groups, materials",
        "output": "Trained users ready to use product",
        "activities": "Conduct live training sessions, answer questions, provide hands-on practice, capture attendance, assess understanding, provide recordings",
        "tools": "Training platform, video conferencing, recording tools",
        "roles": "Training specialist (delivery), Product expert (complex topics), CSM (coordination)",
        "successMetric": "Training sessions delivered, 80%+ attendance, participants rated ready",
        "decisionPoints": "Training effective? Users asking right questions? Pace appropriate? Hands-on practice sufficient?",
        "qualityGate": "All training sessions completed, attendance tracked, feedback positive"
      },
      {
        "name": "Adoption Monitoring",
        "objective": "Track user adoption and identify gaps during early usage",
        "input": "Success metrics, product usage data, training completed",
        "output": "Adoption report with usage patterns and identified blockers",
        "activities": "Monitor daily/weekly usage, identify inactive users, identify feature adoption gaps, reach out to struggling users, provide targeted help",
        "tools": "Product analytics, usage dashboards, communication tools",
        "roles": "CSM (monitoring), Adoption specialist (outreach), Product team (troubleshooting)",
        "successMetric": "Adoption metrics tracked, 60%+ active users, key features adopted by 40%+",
        "decisionPoints": "Adoption on track? Blockers identified? Training gaps? Engagement needed?",
        "qualityGate": "Adoption baseline established, intervention plan for underperformers"
      },
      {
        "name": "Support & Troubleshooting",
        "objective": "Provide rapid support for issues encountered during onboarding",
        "input": "Customer questions, technical issues, usage blockers",
        "output": "Resolved issues, engaged support team, updated documentation",
        "activities": "Triage support requests, resolve common issues quickly, escalate complex issues, document solutions, update FAQs, track resolution time",
        "tools": "Support ticketing, knowledge base, live chat, communication",
        "roles": "Support team (frontline), Product experts (escalation), CSM (follow-up)",
        "successMetric": "Support tickets resolved <24hrs, 90%+ first-contact resolution",
        "decisionPoints": "Resolution time acceptable? Escalation paths working? Pattern identification?",
        "qualityGate": "Support SLA met, issue resolution tracked, common issues documented"
      },
      {
        "name": "Adoption Acceleration",
        "objective": "Drive feature adoption and increase usage to success metrics",
        "input": "Adoption monitoring data, usage gaps, user feedback",
        "output": "Adoption acceleration plan with targeted interventions",
        "activities": "Identify power users for peer learning, conduct feature adoption campaigns, provide use-case specific training, celebrate milestones, remove friction points",
        "tools": "Adoption campaigns, user communication, in-app messaging",
        "roles": "CSM (strategy), Adoption specialist (execution), Product (enablement)",
        "successMetric": "Feature adoption increasing, usage trending toward success metrics",
        "decisionPoints": "Adoption accelerating? Right features prioritized? User engagement increasing?",
        "qualityGate": "Adoption plan working, metrics trending up, engagement consistent"
      }
    ]
  },
  "value-realization-win-planning": {
    "stages": [
      {
        "name": "Baseline Establishment",
        "objective": "Establish customer's current state before product use",
        "input": "Customer success plan, metrics defined, customer's current operations",
        "output": "Documented baseline for comparison",
        "activities": "Understand current process/metrics, quantify current state, identify measurement methodology, establish historical data, document assumptions",
        "tools": "Customer data, analytics, interview notes",
        "roles": "CSM (coordination), Customer finance/ops (data), Analytics (measurement)",
        "successMetric": "Baseline documented with current state and methodology",
        "decisionPoints": "Baseline clear? Measurement method agreed? Historical data available?",
        "qualityGate": "Baseline approved by customer, documented in success plan"
      },
      {
        "name": "Quick Win Identification",
        "objective": "Identify early wins to build momentum and demonstrate value",
        "input": "Success metrics, customer use case, product capabilities",
        "output": "2-3 identified quick wins with implementation plan",
        "activities": "Analyze success metrics for highest-impact targets, identify shortest-time-to-value initiatives, design quick win implementation, plan communication",
        "tools": "Impact/effort matrix, planning templates",
        "roles": "CSM (identification), Product expert (feasibility), Customer (validation)",
        "successMetric": "2-3 quick wins identified and prioritized",
        "decisionPoints": "Quick wins realistic? High-impact? Visible to customer? Communication planned?",
        "qualityGate": "Quick wins approved by customer, implementation plan started"
      },
      {
        "name": "Value Tracking Setup",
        "objective": "Set up system to track and demonstrate value realization",
        "input": "Success metrics, baseline, data sources",
        "output": "Dashboard/report showing value tracking",
        "activities": "Connect data sources, configure metric calculations, set up automated reporting, establish reporting cadence, plan communication approach",
        "tools": "Business intelligence, dashboards, reporting automation",
        "roles": "Analytics (setup), CSM (design), Customer (validation)",
        "successMetric": "Value dashboard live and auto-updating",
        "decisionPoints": "Data sources accurate? Calculations correct? Reporting frequency right? Accessible to customer?",
        "qualityGate": "Dashboard deployed, first report generated, customer trained"
      },
      {
        "name": "Milestone Planning",
        "objective": "Plan value-focused milestones through engagement lifecycle",
        "input": "Success plan, timeline, value realization targets",
        "output": "Milestone calendar with targets and celebration plan",
        "activities": "Map major milestones (30/60/90 days, 6mo, 1yr), assign targets for each, plan communications, plan celebrations/reviews, track progress",
        "tools": "Project management, milestone templates",
        "roles": "CSM (planning), Customer stakeholders (validation)",
        "successMetric": "Milestone calendar with targets and celebration plan documented",
        "decisionPoints": "Milestones motivating? Targets achievable? Celebration plan resonant?",
        "qualityGate": "Milestones agreed, targets locked, communication plan ready"
      },
      {
        "name": "Business Review Planning",
        "objective": "Plan cadence and structure for business value reviews",
        "input": "Milestones, success metrics, stakeholder needs",
        "output": "Business review calendar with agenda templates",
        "activities": "Define review frequency (30/60/90 days, quarterly), design agenda structure, identify attendees, plan communication, create presentation templates",
        "tools": "Meeting templates, agenda structures",
        "roles": "CSM (planning), Executive sponsor (input), Customer (requirements)",
        "successMetric": "Business review calendar and templates ready",
        "decisionPoints": "Review frequency right? Stakeholders identified? Agenda structure clear? Presentation templates useful?",
        "qualityGate": "Business review schedule locked, templates created, first review scheduled"
      },
      {
        "name": "ROI Documentation",
        "objective": "Document and communicate ROI to customer stakeholders",
        "input": "Value realization data, cost information, customer context",
        "output": "ROI report with financial and business impact",
        "activities": "Calculate financial ROI, document non-financial benefits, create executive summary, prepare presentation, identify cost avoidance, project forward",
        "tools": "ROI calculators, presentation tools, financial models",
        "roles": "CSM (narrative), Finance/ops (calculations), Executive sponsor (delivery)",
        "successMetric": "ROI documentation complete with financial and operational impact",
        "decisionPoints": "ROI credible? Methodology transparent? Communicated effectively?",
        "qualityGate": "ROI approved by customer, ready for stakeholder communication"
      }
    ]
  },
  "training-certification-program": {
    "stages": [
      {
        "name": "Curriculum Design",
        "objective": "Design comprehensive training program covering all product areas",
        "input": "Product features, customer use cases, skill levels needed",
        "output": "Complete training curriculum with modules and progression",
        "activities": "Define learning objectives per module, create module structure, design learning paths, identify prerequisite knowledge, scope content depth",
        "tools": "Instructional design tools, learning management systems",
        "roles": "Training specialist (lead), Product expert (content), Customer (validation)",
        "successMetric": "Curriculum designed with 5-10 modules covering key use cases",
        "decisionPoints": "Comprehensive? Appropriately scoped? Role-based paths clear?",
        "qualityGate": "Curriculum reviewed by product/customer, modules defined"
      },
      {
        "name": "Role-Based Learning Paths",
        "objective": "Create customized learning paths for different user roles",
        "input": "User personas, job functions, product capabilities",
        "output": "Learning paths mapped to roles with sequencing",
        "activities": "Analyze user roles, design path for each role, identify prerequisite modules, sequence modules, estimate completion time",
        "tools": "Learning path templates",
        "roles": "Training specialist (design), CSM (user context), Product (capabilities)",
        "successMetric": "Learning paths defined for 4-6 key user roles",
        "decisionPoints": "Paths comprehensive? Prerequisites clear? Time realistic?",
        "qualityGate": "Role-based paths defined and sequenced"
      },
      {
        "name": "Training Content Development",
        "objective": "Create high-quality training materials in multiple formats",
        "input": "Curriculum, learning paths, product documentation",
        "output": "Complete training materials (video, docs, interactive)",
        "activities": "Create video modules, write training documentation, develop practice scenarios, design interactive exercises, create reference guides",
        "tools": "Video production, documentation tools, interactive platforms",
        "roles": "Training specialist (project), Subject matter experts (content), Video producer (production)",
        "successMetric": "Training materials completed for all curriculum modules",
        "decisionPoints": "Content quality high? Engaging? Comprehensive? Accessible?",
        "qualityGate": "Materials reviewed and approved by product/SMEs"
      },
      {
        "name": "Delivery Planning",
        "objective": "Plan training delivery schedule and logistics",
        "input": "Training materials, customer organization, resource availability",
        "output": "Training delivery calendar with logistics",
        "activities": "Schedule training sessions, identify trainer assignments, plan registration process, arrange technology/facilities, prepare trainer materials",
        "tools": "Calendar management, event planning, trainer prep templates",
        "roles": "Training specialist (coordination), Trainers (logistics)",
        "successMetric": "Training schedule published with all logistics planned",
        "decisionPoints": "Scheduling accessible to customer? Trainer capacity? Technology confirmed?",
        "qualityGate": "Training calendar locked, trainers prepared, logistics confirmed"
      },
      {
        "name": "Training Delivery",
        "objective": "Conduct live training sessions with tracking and support",
        "input": "Training materials, scheduled sessions, registered users",
        "output": "Trained participants with tracked completion",
        "activities": "Deliver live training, answer questions, manage Q&A, track attendance, provide recordings, send follow-up materials",
        "tools": "Video conferencing, recording, learning management systems",
        "roles": "Trainers (delivery), CSM (support), Product (expert Q&A)",
        "successMetric": "All training sessions delivered, 80%+ attendance",
        "decisionPoints": "Engagement level? Question quality? Pace appropriate? Recording quality?",
        "qualityGate": "Sessions delivered, attendance tracked, recordings available"
      },
      {
        "name": "Assessment & Certification",
        "objective": "Assess user competency and issue certifications",
        "input": "Training completion, assessment requirements, skill levels",
        "output": "Certifications issued, competency documented",
        "activities": "Design assessment approach (quiz/practical/both), administer assessments, score results, issue certificates, track by user role",
        "tools": "Assessment platforms, certification systems",
        "roles": "Training specialist (administration), Product experts (grading), CSM (tracking)",
        "successMetric": "70%+ of users complete and pass assessments",
        "decisionPoints": "Assessment level appropriate? Passing threshold clear? Certificates valuable?",
        "qualityGate": "Assessment process complete, certifications issued, records maintained"
      },
      {
        "name": "Ongoing Education & Updates",
        "objective": "Maintain training as product evolves and users develop",
        "input": "Product updates, user feedback, new use cases",
        "output": "Updated curriculum and continued learning opportunities",
        "activities": "Monitor product changes, update relevant modules, create refresher content, plan advanced training, identify super users for peer learning",
        "tools": "Learning management systems, feedback systems",
        "roles": "Training specialist (updates), Product team (change awareness), Super users (peer learning)",
        "successMetric": "Curriculum updated quarterly, 40%+ of users engage in ongoing learning",
        "decisionPoints": "Updates timely? Advanced training valuable? Peer learning scalable?",
        "qualityGate": "Update process established, advanced curriculum ready"
      }
    ]
  },
  "customer-health-monitoring-renewal-readiness": {
    "stages": [
      {
        "name": "Health Indicator Selection",
        "objective": "Define metrics that predict customer health and renewal likelihood",
        "input": "Success metrics, historical data, customer feedback, product usage",
        "output": "Health score model with leading and lagging indicators",
        "activities": "Define health dimensions (adoption, engagement, value realization, sentiment), identify predictive metrics, determine weighting, establish health score calculation",
        "tools": "Analytics platform, health scoring models",
        "roles": "Analytics (model), CSM (validation), Product (metrics)",
        "successMetric": "Health score model defined with 5-10 indicators",
        "decisionPoints": "Indicators predictive? Data available? Model accurate? Actionable?",
        "qualityGate": "Health score model validated, baseline established for all customers"
      },
      {
        "name": "Real-Time Monitoring",
        "objective": "Monitor customer health continuously in real-time",
        "input": "Health score model, customer data, product usage",
        "output": "Health dashboard with current status for all customers",
        "activities": "Integrate data sources, automate health calculations, create dashboards, set up alerts for red flags, establish monitoring rhythm",
        "tools": "Business intelligence, dashboards, alerting systems",
        "roles": "Analytics (automation), CSM (monitoring), Product (data accuracy)",
        "successMetric": "Health dashboard live, updating daily, alerts active",
        "decisionPoints": "Data feeds reliable? Calculations accurate? Alerts actionable? Visibility complete?",
        "qualityGate": "Monitoring system live, first alerts reviewed"
      },
      {
        "name": "Risk Assessment",
        "objective": "Identify at-risk customers and assess churn probability",
        "input": "Health scores, customer data, historical churn patterns",
        "output": "At-risk customer list with churn probability and risk factors",
        "activities": "Identify customers with low health scores, assess multiple risk factors, rate churn probability, identify root causes, prioritize by revenue risk",
        "tools": "Risk scoring, probability models",
        "roles": "Analytics (scoring), CSM (context), Management (prioritization)",
        "successMetric": "At-risk customers identified with risk factors and probability",
        "decisionPoints": "Risk factors clear? Probability accurate? Actionable interventions identified?",
        "qualityGate": "At-risk list reviewed, intervention plans ready"
      },
      {
        "name": "Intervention Planning",
        "objective": "Plan targeted interventions for at-risk customers",
        "input": "At-risk customer list, risk factors, customer context",
        "output": "Intervention playbook with actions per risk type",
        "activities": "Analyze root causes for each at-risk customer, design targeted interventions, assign ownership, plan escalation path, track intervention effectiveness",
        "tools": "Intervention templates, project management",
        "roles": "CSM (leadership), Executive sponsor (escalation), Product (technical solutions)",
        "successMetric": "Intervention plan for each at-risk customer",
        "decisionPoints": "Interventions targeted to root cause? Ownership clear? Escalation appropriate?",
        "qualityGate": "Intervention plans documented, assigned, tracking started"
      },
      {
        "name": "Proactive Engagement",
        "objective": "Execute proactive outreach to maintain and improve customer health",
        "input": "Health scores, customer preferences, use case opportunities",
        "output": "Engagement activities scheduled and tracked",
        "activities": "Schedule proactive check-ins, identify expansion opportunities, provide training on underused features, introduce new features, celebrate milestones",
        "tools": "Communication platforms, engagement tracking",
        "roles": "CSM (strategy), Marketing (content), Product (training)",
        "successMetric": "Proactive outreach to 50%+ of customers, engagement rates increasing",
        "decisionPoints": "Outreach well-timed? Valuable to customer? Adoption increasing?",
        "qualityGate": "Proactive engagement plan executed, metrics improving"
      },
      {
        "name": "Renewal Readiness Assessment",
        "objective": "Assess readiness for renewal conversations 90 days before expiration",
        "input": "Renewal date, health score, value realization, expansion potential",
        "output": "Renewal readiness report with strategy",
        "activities": "Assess value delivery and ROI achievement, gather customer testimonials, identify expansion opportunities, prepare renewal economics, plan renewal conversation",
        "tools": "Renewal templates, ROI documentation",
        "roles": "CSM (lead), Finance (renewal economics), Sales (expansion)",
        "successMetric": "Renewal strategy documented for each customer",
        "decisionPoints": "ROI clear? Expansion valuable? Negotiation strategy right? Executive alignment?",
        "qualityGate": "Renewal conversations started 90+ days before expiration"
      }
    ]
  },
  "feature-adoption-campaigns": {
    "stages": [
      {
        "name": "Feature Selection & Prioritization",
        "objective": "Identify features to drive adoption based on business impact",
        "input": "Feature roadmap, customer usage data, business objectives",
        "output": "Prioritized feature list with adoption target",
        "activities": "Identify underadopted features, assess business impact of adoption, identify target user segments, set adoption targets, prioritize features",
        "tools": "Product analytics, feature adoption tracking",
        "roles": "Product (feature expertise), Analytics (adoption data), CSM (customer context)",
        "successMetric": "Prioritized feature list with adoption targets",
        "decisionPoints": "Features high-impact? Adoption realistic? User interest?",
        "qualityGate": "Features prioritized, adoption targets set, campaign approved"
      },
      {
        "name": "User Segmentation",
        "objective": "Segment users by adoption readiness and learning style",
        "input": "User profiles, adoption history, learning preferences",
        "output": "User segments with tailored campaign approaches",
        "activities": "Segment by adoption readiness (early adopters/mainstream/laggards), segment by learning style, segment by department/use case, identify champions per segment",
        "tools": "User segmentation tools, profiling",
        "roles": "Analytics (segmentation), CSM (learning styles), Product (use case)",
        "successMetric": "User segments defined with 80%+ of users classified",
        "decisionPoints": "Segments meaningful? Tailored approaches different? Champions identified?",
        "qualityGate": "Segments validated, champion identification complete"
      },
      {
        "name": "Campaign Design",
        "objective": "Design targeted adoption campaign for each user segment",
        "input": "Feature details, user segments, adoption barriers",
        "output": "Campaign strategy with messaging, content, timeline",
        "activities": "Design segment-specific messaging, create educational content, design in-app prompts, plan email outreach, plan webinars, create quick-start guides",
        "tools": "Content creation, campaign templates, in-app messaging",
        "roles": "Product marketing (messaging), Content team (materials), CSM (tailoring)",
        "successMetric": "Campaign strategy documented for each segment",
        "decisionPoints": "Messaging resonant? Content comprehensive? Timeline realistic? Multi-channel?",
        "qualityGate": "Campaign strategy approved, content ready, messaging tested"
      },
      {
        "name": "Launch & Promotion",
        "objective": "Launch adoption campaign and drive awareness",
        "input": "Campaign strategy, content, user segments, launch plan",
        "output": "Campaign live with promotional activities",
        "activities": "Deploy in-app messaging, send campaign emails, host webinars, share content via channels, activate champions for peer promotion",
        "tools": "Email platform, in-app messaging, webinar tools, communication systems",
        "roles": "Marketing (execution), CSM (coordination), Product (expertise), Champions (promotion)",
        "successMetric": "Campaign launched, 60%+ of target users exposed",
        "decisionPoints": "Launch smooth? Message clarity? Channel mix effective? Champion engagement?",
        "qualityGate": "Campaign fully launched, tracking active, first week metrics reviewed"
      },
      {
        "name": "Adoption Tracking & Support",
        "objective": "Monitor adoption progress and provide targeted support",
        "input": "Campaign live, adoption data, user feedback",
        "output": "Adoption metrics and support insights",
        "activities": "Track daily adoption, identify struggling users, provide targeted help, respond to questions, celebrate early adopters, refine messaging based on feedback",
        "tools": "Analytics dashboards, support chat, feedback collection",
        "roles": "CSM (monitoring), Support (help), Analytics (tracking)",
        "successMetric": "Adoption metrics showing 30%+ of target segment using feature",
        "decisionPoints": "Adoption trending up? Early adopters engaged? Support needs identified?",
        "qualityGate": "Adoption tracking active, support processes working"
      },
      {
        "name": "Analysis & Reporting",
        "objective": "Analyze campaign effectiveness and identify learning",
        "input": "Adoption metrics, campaign data, user feedback",
        "output": "Campaign analysis report with ROI and learning",
        "activities": "Calculate adoption rate and ROI, analyze by segment, identify barriers/accelerators, gather qualitative feedback, document learning",
        "tools": "Analytics, feedback analysis",
        "roles": "Analytics (analysis), CSM (interpretation), Product (learning)",
        "successMetric": "Campaign analysis completed with ROI calculated",
        "decisionPoints": "ROI clear? Learning captured? Barriers understood? Next iteration clear?",
        "qualityGate": "Analysis approved, learning documented, next campaign ready"
      }
    ]
  },
  "usage-monitoring-proactive-support": {
    "stages": [
      {
        "name": "Baseline Usage Definition",
        "objective": "Establish expected usage patterns by user type and company size",
        "input": "Product telemetry, customer data, industry benchmarks",
        "output": "Usage baseline by customer segment",
        "activities": "Define usage metrics (logins, features used, actions per session), establish benchmarks by segment, identify normal variation, document baseline methodology",
        "tools": "Product analytics, benchmarking data",
        "roles": "Analytics (definition), CSM (validation), Product (metrics)",
        "successMetric": "Usage baseline defined for 3-5 customer segments",
        "decisionPoints": "Metrics meaningful? Benchmarks accurate? Variation understood?",
        "qualityGate": "Usage baseline approved, documented"
      },
      {
        "name": "Real-Time Monitoring",
        "objective": "Set up continuous monitoring of customer usage",
        "input": "Usage baseline, customer data, telemetry system",
        "output": "Live usage dashboard by customer",
        "activities": "Integrate customer usage data, create usage dashboards, set up automated alerts, establish monitoring cadence, track usage trends",
        "tools": "Business intelligence, dashboards, alerting systems",
        "roles": "Analytics (setup), CSM (monitoring), Product (data accuracy)",
        "successMetric": "Usage dashboard live with real-time data for all customers",
        "decisionPoints": "Data accurate? Dashboard useful? Alert timing right? Accessible to team?",
        "qualityGate": "Monitoring system live, baseline comparison visible"
      },
      {
        "name": "Alert Configuration",
        "objective": "Set up alerts for usage patterns indicating risk or opportunity",
        "input": "Usage baseline, churn risk factors, expansion signals",
        "output": "Alert system configured with thresholds",
        "activities": "Define alert triggers (sudden drop-off, feature non-adoption, increasing usage), set thresholds, assign owners, test alerts, plan response workflow",
        "tools": "Alerting platforms, workflow automation",
        "roles": "Analytics (configuration), CSM (response), Product (interpretation)",
        "successMetric": "Alert system configured with 5-10 meaningful triggers",
        "decisionPoints": "Triggers predictive? Alert volume manageable? Response process clear?",
        "qualityGate": "Alerts tested, response processes defined, team trained"
      },
      {
        "name": "Proactive Outreach",
        "objective": "Reach out proactively based on usage signals",
        "input": "Alert triggers, customer context, usage data",
        "output": "Proactive outreach activities logged and tracked",
        "activities": "Contact at-risk customers about usage decline, reach out with feature tips based on low adoption, celebrate usage milestones, provide targeted training",
        "tools": "Communication platforms, CRM",
        "roles": "CSM (outreach), Support (assistance), Product (expertise)",
        "successMetric": "80%+ of alert triggers result in proactive outreach",
        "decisionPoints": "Outreach well-timed? Valuable to customer? Response positive?",
        "qualityGate": "Proactive outreach process working, engagement rates positive"
      }
    ]
  },
  "learning-certification-platform": {
    "stages": [
      {
        "name": "Learning Platform Evaluation & Selection",
        "objective": "Evaluate and select learning management system (LMS) for customer education",
        "input": "Learning requirements, budget, integration needs, user volume",
        "output": "Selected LMS platform with implementation plan",
        "activities": "Define LMS requirements, evaluate platforms (Thought Industries, Docebo, Lessonly), assess integration capabilities, pilot with team, negotiate contracts",
        "tools": "LMS evaluation matrix, vendor demos",
        "roles": "Operations (lead), IT (integration), Product marketing (content)",
        "successMetric": "LMS selected, contract signed, implementation roadmap ready",
        "decisionPoints": "Right feature set? Scalable? Integration feasible? Cost acceptable?",
        "qualityGate": "Platform selected and contracted, vendor kickoff scheduled"
      },
      {
        "name": "Learning & Content Strategy",
        "objective": "Define what to teach and learning paths",
        "input": "Customer use cases, skill levels, product roadmap",
        "output": "Learning strategy with curriculum roadmap",
        "activities": "Map learning objectives, design learning paths by role, define curriculum scope, plan content types, identify prerequisite learning",
        "tools": "Curriculum templates",
        "roles": "Training specialist (strategy), Product (expertise)",
        "successMetric": "Learning strategy documented with curriculum roadmap",
        "decisionPoints": "Comprehensive? Role-based paths? Content appropriate depth?",
        "qualityGate": "Learning strategy approved, curriculum plan finalized"
      },
      {
        "name": "Content Production Pipeline",
        "objective": "Build content production process for continuous curriculum development",
        "input": "Curriculum plan, content types, production team",
        "output": "Content production workflow and templates",
        "activities": "Design content production workflow, create content templates, assign producers, establish review process, plan technology stack",
        "tools": "Production templates, video/content tools",
        "roles": "Content producers (workflow), Training (oversight)",
        "successMetric": "Production pipeline live with first content in progress",
        "decisionPoints": "Workflow efficient? Quality standards clear? Resources adequate?",
        "qualityGate": "Production process established, content pipeline active"
      },
      {
        "name": "Content Development & Launch",
        "objective": "Develop and launch initial content library",
        "input": "Curriculum plan, content templates, production pipeline",
        "output": "Live content library on LMS with core courses",
        "activities": "Produce video modules, write documentation, create interactive exercises, design assessments, upload to LMS, test access",
        "tools": "Video production, LMS platform",
        "roles": "Content producers (creation), Quality assurance (testing)",
        "successMetric": "10-15 core courses live on LMS",
        "decisionPoints": "Content quality high? Engaging? Technically sound? User experience smooth?",
        "qualityGate": "Content library live, user testing positive"
      },
      {
        "name": "Learner Enrollment & Progress Tracking",
        "objective": "Manage learner enrollments and track progress",
        "input": "User list, learning paths, LMS platform",
        "output": "Enrollment system with progress tracking dashboard",
        "activities": "Configure enrollment rules by role, set up progress tracking, create learner dashboards, establish completion tracking, integrate with CRM",
        "tools": "LMS configuration, dashboard tools",
        "roles": "Operations (setup), Analytics (tracking)",
        "successMetric": "All users enrolled in appropriate paths, progress tracked",
        "decisionPoints": "Enrollment automated? Progress visible? Mobile accessible?",
        "qualityGate": "Enrollment complete, progress dashboard live"
      },
      {
        "name": "Assessment & Certification",
        "objective": "Assess learner competency and issue certifications",
        "input": "Assessment requirements, competency standards",
        "output": "Assessment system with certification issuance",
        "activities": "Design assessments (quizzes/practical/projects), set passing scores, create certification criteria, automate certificate generation, track completions",
        "tools": "Assessment tools, certificate generation",
        "roles": "Training specialist (design), LMS admin (setup)",
        "successMetric": "Assessment system live, first certifications issued",
        "decisionPoints": "Assessments aligned to learning? Certification valuable? Passing standards fair?",
        "qualityGate": "Assessment system tested, certificates being issued"
      },
      {
        "name": "Usage Analytics & Continuous Improvement",
        "objective": "Monitor platform usage and continuously improve content",
        "input": "Usage data, learner feedback, completion metrics",
        "output": "Analytics dashboard with improvement roadmap",
        "activities": "Track completion rates by course, identify struggling courses, gather learner feedback, analyze time-to-completion, plan content updates",
        "tools": "Analytics dashboards, feedback collection",
        "roles": "Analytics (tracking), Training (improvement)",
        "successMetric": "Usage analytics live, quarterly improvement cycles active",
        "decisionPoints": "Insights actionable? Improvements resonating? Adoption increasing?",
        "qualityGate": "Analytics active, continuous improvement cycle established"
      }
    ]
  },
  "community-peer-learning": {
    "stages": [
      {
        "name": "Community Strategy & Goals",
        "objective": "Define community objectives and success metrics",
        "input": "Customer engagement goals, business objectives, customer feedback",
        "output": "Community strategy with goals and success metrics",
        "activities": "Define community purpose and value proposition, set engagement targets, identify key discussions, define moderation approach, plan evolution",
        "tools": "Strategy templates",
        "roles": "Customer success (strategy), Marketing (engagement)",
        "successMetric": "Community strategy documented with clear goals",
        "decisionPoints": "Purpose compelling? Targets realistic? Moderation plan clear?",
        "qualityGate": "Strategy approved, success metrics defined"
      },
      {
        "name": "Community Platform Setup",
        "objective": "Select and configure community platform",
        "input": "Community strategy, platform requirements, budget",
        "output": "Live community platform ready for members",
        "activities": "Evaluate platforms (Mighty Networks, Slack communities, Discord), configure platform structure, set up channels/groups, configure user roles, design user experience",
        "tools": "Platform demos, configuration tools",
        "roles": "Operations (setup), Design (UX)",
        "successMetric": "Platform live with structure designed and tested",
        "decisionPoints": "Platform chosen fits strategy? Configuration intuitive? Scalable?",
        "qualityGate": "Platform live, team trained, ready for member launch"
      },
      {
        "name": "Moderator & Community Manager Preparation",
        "objective": "Train moderators and community managers",
        "input": "Moderation guidelines, platform training, community strategy",
        "output": "Prepared moderation team ready to support community",
        "activities": "Hire/assign community managers, train on platform, establish moderation guidelines, create response templates, plan escalation paths",
        "tools": "Training materials, guidelines",
        "roles": "Community managers (training), HR (hiring)",
        "successMetric": "Moderation team trained and equipped",
        "decisionPoints": "Team capacity adequate? Guidelines clear? Response templates helpful?",
        "qualityGate": "Moderators trained, ready to launch"
      },
      {
        "name": "Initial Member Recruitment",
        "objective": "Recruit founding members and build critical mass",
        "input": "Customer list, invitation strategy, community value prop",
        "output": "Initial member base of 50-100+ engaged members",
        "activities": "Invite high-engagement customers, send invitation with value prop, onboard in waves, encourage peer invites, monitor early adoption",
        "tools": "Email campaigns, community platform",
        "roles": "Customer success (recruitment), Marketing (promotion)",
        "successMetric": "50-100 members joined, activity visible",
        "decisionPoints": "Right member mix? Value evident? Early adoption positive?",
        "qualityGate": "Founding members active, momentum building"
      },
      {
        "name": "Content & Discussion Kickoff",
        "objective": "Seed community with valuable initial content and discussions",
        "input": "Content strategy, moderators trained, early members",
        "output": "Active discussions and valued content flowing",
        "activities": "Post initial content pieces, ask thoughtful questions to start discussions, highlight early contributions, encourage peer-to-peer answers, recognize early contributors",
        "tools": "Community platform, content calendar",
        "roles": "Community managers (facilitation), Product experts (answers)",
        "successMetric": "Active discussions daily, peer engagement visible",
        "decisionPoints": "Participation encouraged? Quality high? Conversations authentic?",
        "qualityGate": "Community showing signs of natural engagement"
      },
      {
        "name": "Recognition & Gamification",
        "objective": "Recognize contributions and drive ongoing engagement",
        "input": "Engagement data, member contributions, recognition budget",
        "output": "Recognition program with incentives",
        "activities": "Create badges for contributions, recognize top contributors monthly, highlight member stories, create leaderboards, plan rewards/incentives",
        "tools": "Gamification tools, recognition platforms",
        "roles": "Community managers (program), Marketing (rewards)",
        "successMetric": "Recognition program active, engagement increasing",
        "decisionPoints": "Recognition meaningful? Gamification motivating? Rewards valuable?",
        "qualityGate": "Recognition program running, members responding"
      },
      {
        "name": "Analytics & Evolution",
        "objective": "Measure community health and plan evolution",
        "input": "Engagement metrics, member feedback, community data",
        "output": "Community analytics dashboard with growth plan",
        "activities": "Track member growth, monitor engagement patterns, analyze top discussions, gather feedback, plan expansion, identify power users",
        "tools": "Analytics dashboards",
        "roles": "Analytics (measurement), Community managers (feedback)",
        "successMetric": "Analytics dashboard live, growth trajectory positive",
        "decisionPoints": "Growth metrics on track? Member satisfaction high? New initiatives clear?",
        "qualityGate": "Analytics active, evolution roadmap created"
      }
    ]
  },
  "churn-prevention-at-risk-recovery": {
    "stages": [
      {
        "name": "At-Risk Customer Identification",
        "objective": "Identify customers at highest risk of churn",
        "input": "Health scores, usage data, engagement metrics",
        "output": "At-risk customer list with churn probability",
        "activities": "Identify customers with declining health scores, analyze leading churn indicators, segment by risk level, assess revenue impact, prioritize by strategic value",
        "tools": "Health monitoring dashboards, churn prediction models",
        "roles": "Analytics (identification), CSM (context), Management (prioritization)",
        "successMetric": "At-risk customers identified with churn probability >50%",
        "decisionPoints": "Churn prediction accurate? Risk factors understood? Intervention options clear?",
        "qualityGate": "At-risk list approved, intervention plan started"
      },
      {
        "name": "Root Cause Analysis",
        "objective": "Understand why customer is at risk",
        "input": "At-risk customer list, customer interactions, usage data",
        "output": "Root cause analysis per customer with intervention recommendations",
        "activities": "Conduct customer interviews, analyze usage patterns, review customer issues, identify unmet needs, document satisfaction gaps",
        "tools": "Interview templates, feedback analysis",
        "roles": "CSM (lead), Support (issue history), Customer (perspective)",
        "successMetric": "Root cause documented for 90%+ of at-risk customers",
        "decisionPoints": "Root cause clear? Multiple factors or single issue? Fixable or customer changing?",
        "qualityGate": "Root cause analysis complete, intervention strategy developed"
      },
      {
        "name": "Intervention Strategy",
        "objective": "Develop targeted retention strategy for each at-risk customer",
        "input": "Root cause analysis, customer context, product capabilities",
        "output": "Retention strategy with specific actions",
        "activities": "Identify intervention approach (product, process, pricing, relationship), assign ownership, define success criteria, plan timeline, identify escalation path",
        "tools": "Retention strategy templates",
        "roles": "CSM (strategy), Executive sponsor (escalation), Product (solutions)",
        "successMetric": "Retention strategy documented for each at-risk customer",
        "decisionPoints": "Strategy addresses root cause? Ownership clear? Timeline realistic? Success criteria measurable?",
        "qualityGate": "Retention strategies approved, owner assignments confirmed"
      },
      {
        "name": "Executive Engagement",
        "objective": "Secure executive attention for critical retention accounts",
        "input": "At-risk accounts, revenue impact, retention strategy",
        "output": "Executive sponsor assigned, intervention plan approved",
        "activities": "Brief executive on customer situation, secure commitment to intervention, align on approach, establish communication cadence, plan executive outreach",
        "tools": "Executive briefing templates",
        "roles": "Management (engagement), CSM (background), Executive sponsor (relationship)",
        "successMetric": "Executive sponsor assigned to 100% of high-revenue at-risk accounts",
        "decisionPoints": "Executive committed? Approach aligned? Frequency appropriate?",
        "qualityGate": "Executive engagement secured, communication plan active"
      },
      {
        "name": "Customer Retention Negotiation",
        "objective": "Negotiate retention and resolve customer concerns",
        "input": "Retention strategy, customer needs, product/pricing options",
        "output": "Negotiated agreement to retain customer",
        "activities": "Schedule retention conversation, present solutions/options, negotiate terms, document agreement, confirm next steps",
        "tools": "Contract management, negotiation frameworks",
        "roles": "CSM (conversation), Sales (negotiation), Product (solutions)",
        "successMetric": "Agreement reached with 70%+ of at-risk customers",
        "decisionPoints": "Customer willing to stay? Terms acceptable? Concerns addressed? Follow-up clear?",
        "qualityGate": "Retention agreement signed, implementation plan active"
      },
      {
        "name": "Success Plan Refresh",
        "objective": "Refresh customer success plan based on retention negotiation",
        "input": "Retention agreement, customer commitments, new initiatives",
        "output": "Updated success plan addressing retention concerns",
        "activities": "Update success metrics based on issues, add new initiatives to address concerns, adjust timeline if needed, reset engagement cadence, communicate changes",
        "tools": "Success plan templates",
        "roles": "CSM (update), Customer (validation), Product (capabilities)",
        "successMetric": "Updated success plan approved by customer",
        "decisionPoints": "New plan credible? Concerns addressed? Resources committed? Customer engaged?",
        "qualityGate": "Success plan updated, new engagement calendar active"
      },
      {
        "name": "Follow-up & Engagement",
        "objective": "Follow through on retention commitments and rebuild relationship",
        "input": "Retention agreement, updated success plan",
        "output": "Sustained engagement and positive trajectory",
        "activities": "Execute on retention commitments, maintain heightened engagement, celebrate early wins, provide regular updates, monitor health improvement",
        "tools": "Communication platforms, project tracking",
        "roles": "CSM (leadership), Extended team (execution)",
        "successMetric": "Retention commitments delivered, health scores improving",
        "decisionPoints": "Commitments delivered on time? Customer satisfaction improving? Churn risk decreasing?",
        "qualityGate": "Retention trajectory positive, health improving, relationship stable"
      }
    ]
  },
  "expansion-upsell-identification": {
    "stages": [
      {
        "name": "Customer Maturity Assessment",
        "objective": "Assess customer's maturity level and readiness for expansion",
        "input": "Customer tenure, usage data, success metrics, organization",
        "output": "Maturity assessment with expansion readiness score",
        "activities": "Evaluate product adoption, assess value realization, analyze organizational commitment, evaluate technical maturity, assess financial health",
        "tools": "Maturity assessment frameworks",
        "roles": "CSM (assessment), Finance (financial analysis), Product (technical assessment)",
        "successMetric": "Maturity score calculated for all customers",
        "decisionPoints": "Customer ready for expansion? What's their appetite? Budget available?",
        "qualityGate": "Maturity assessment complete, expansion readiness scoring methodology validated"
      },
      {
        "name": "Expansion Opportunity Identification",
        "objective": "Identify specific expansion opportunities for each customer",
        "input": "Customer maturity, product roadmap, use cases, business outcomes",
        "output": "List of potential expansion opportunities with ROI estimates",
        "activities": "Identify underadopted features for expansion, identify new use cases, identify departments for horizontal expansion, identify add-on products, estimate impact/ROI",
        "tools": "Opportunity templates, ROI calculators",
        "roles": "CSM (identification), Product (capabilities), Sales (expansion experience)",
        "successMetric": "2-3 expansion opportunities identified per mature customer",
        "decisionPoints": "Opportunities high-value? Aligned to customer needs? Realistic? Customer interested?",
        "qualityGate": "Expansion opportunities documented with initial ROI estimates"
      },
      {
        "name": "Business Case Development",
        "objective": "Develop compelling business case for expansion opportunity",
        "input": "Expansion opportunity, customer context, ROI data",
        "output": "Business case document with financial and strategic justification",
        "activities": "Quantify opportunity impact, identify target department/persona, calculate ROI, identify implementation timeline, document strategic benefits",
        "tools": "Business case templates, financial models",
        "roles": "CSM (narrative), Finance (calculations), Product (capabilities)",
        "successMetric": "Business case developed for each opportunity",
        "decisionPoints": "ROI compelling? Timeline realistic? Impact clear? Customer context reflected?",
        "qualityGate": "Business case approved by CSM/sales, ready for customer presentation"
      },
      {
        "name": "Customer Alignment",
        "objective": "Gain internal alignment on expansion approach",
        "input": "Business case, customer context, organizational priorities",
        "output": "Aligned expansion strategy with customer stakeholder buy-in",
        "activities": "Present opportunity to customer stakeholders, assess interest level, gather feedback, refine approach based on input, confirm willingness to proceed",
        "tools": "Presentation templates, stakeholder management",
        "roles": "CSM (discovery), Sales (engagement), Product (expertise)",
        "successMetric": "Customer stakeholders engaged, interest confirmed",
        "decisionPoints": "Stakeholder interest high? Budget owner interested? Timeline acceptable?",
        "qualityGate": "Customer interest confirmed, champion identified, next steps discussed"
      },
      {
        "name": "Executive Sponsorship & Proposal Prep",
        "objective": "Secure internal executive sponsorship and prepare proposal",
        "input": "Customer interest, business case, expansion opportunity",
        "output": "Executive-approved proposal ready for customer",
        "activities": "Brief sales executive on opportunity, secure sponsorship, prepare formal proposal, coordinate internal resources, brief delivery team",
        "tools": "Proposal templates, executive briefing",
        "roles": "Sales (sponsorship), CSM (customer context), Product (delivery)",
        "successMetric": "Executive sponsor assigned, proposal drafted",
        "decisionPoints": "Executive committed? Proposal strong? Resources identified? Timeline confirmed?",
        "qualityGate": "Executive approved, proposal ready for presentation"
      }
    ]
  },
  "renewal-negotiation-process": {
    "stages": [
      {
        "name": "Renewal Planning & Qualification",
        "objective": "Plan renewal process for all customers approaching expiration",
        "input": "Renewal date, customer health, contract terms",
        "output": "Renewal plan for all expiring customers",
        "activities": "Identify all renewals 6+ months out, assess renewal health, plan renewal strategy by customer, assign renewal owners, identify potential churn risk",
        "tools": "Renewal calendar, CRM, health scoring",
        "roles": "CSM (planning), Sales leadership (ownership)",
        "successMetric": "100% of renewals planned with owners assigned",
        "decisionPoints": "Renewal likely? Strategy clear? Ownership clear?",
        "qualityGate": "Renewal plans complete, owners briefed"
      },
      {
        "name": "Value & ROI Documentation",
        "objective": "Document value delivered and ROI achieved",
        "input": "Health metrics, usage data, customer outcomes, contract value",
        "output": "ROI and value documentation ready for renewal conversation",
        "activities": "Calculate realized ROI, document value delivered, quantify business impact, identify expansion value, prepare executive summary",
        "tools": "ROI calculator, value templates",
        "roles": "CSM (narrative), Analytics (calculations)",
        "successMetric": "ROI documentation complete for all customers",
        "decisionPoints": "ROI credible? Value clear? Documentation compelling?",
        "qualityGate": "ROI documentation approved, ready for customer"
      },
      {
        "name": "Renewal Negotiation Preparation",
        "objective": "Prepare strategy and materials for renewal conversation",
        "input": "Renewal plan, value documentation, contract terms",
        "output": "Renewal strategy with conversation plan and pricing options",
        "activities": "Develop renewal strategy (auto-renewal vs. negotiation), prepare pricing scenarios, identify expansion opportunities, prepare negotiation position, brief internal team",
        "tools": "Negotiation templates, pricing models",
        "roles": "CSM (strategy), Sales (negotiation), Finance (pricing)",
        "successMetric": "Renewal strategy and materials prepared",
        "decisionPoints": "Strategy strong? Pricing options clear? Expansion opportunities identified?",
        "qualityGate": "Renewal strategy approved, team briefed"
      },
      {
        "name": "Renewal Conversation & Value Review",
        "objective": "Conduct renewal conversation and review value delivered",
        "input": "Renewal strategy, value documentation, customer",
        "output": "Renewal discussion documented with customer interest",
        "activities": "Schedule renewal meeting, present value and ROI, review year highlights, discuss expansion opportunities, address concerns",
        "tools": "CRM, presentation materials",
        "roles": "CSM (lead), Account executive (if expansion), Customer (discussion)",
        "successMetric": "Renewal conversation conducted, customer interest assessed",
        "decisionPoints": "Customer enthusiastic? Churn risk? Expansion interest? Next steps clear?",
        "qualityGate": "Conversation documented, customer interest confirmed"
      },
      {
        "name": "Negotiation & Terms Refinement",
        "objective": "Negotiate renewal terms and finalize agreement",
        "input": "Renewal conversation, customer interests, pricing models",
        "output": "Agreed renewal terms and pricing",
        "activities": "Present renewal proposal with pricing, negotiate terms, address objections, finalize pricing/term, prepare contract",
        "tools": "Contracts, pricing models, negotiation framework",
        "roles": "Sales (negotiation), Finance (pricing), Legal (contracts)",
        "successMetric": "Renewal terms agreed and documented",
        "decisionPoints": "Terms acceptable? Pricing competitive? Customer committed? Expansion included?",
        "qualityGate": "Renewal terms finalized, contract ready for signature"
      },
      {
        "name": "Contract Closure & Signature",
        "objective": "Execute renewal contract",
        "input": "Agreed renewal terms, contract template",
        "output": "Signed renewal contract",
        "activities": "Prepare final contract, send to customer for signature, execute e-signature process, finalize contract, update CRM and billing",
        "tools": "Contract management, e-signature tools, CRM",
        "roles": "Legal (documents), Sales (signature), Finance (billing)",
        "successMetric": "Contract signed, billing updated",
        "decisionPoints": "Contract clear? Customer ready? Billing aligned?",
        "qualityGate": "Contract signed, renewal locked, billing activated"
      },
      {
        "name": "Celebration & Next Phase Planning",
        "objective": "Celebrate renewal and plan next phase of engagement",
        "input": "Signed contract, renewed relationship",
        "output": "Celebration communication and next phase plan",
        "activities": "Thank customer, celebrate renewal, share success internally, plan next year initiatives, schedule kickoff for new phase",
        "tools": "Communication templates, planning tools",
        "roles": "CSM (planning), Account executive (celebration)",
        "successMetric": "Renewal celebrated, next year plan initiated",
        "decisionPoints": "Celebration resonant? Next year strategy clear?",
        "qualityGate": "Renewal celebrated, next year engagement underway"
      }
    ]
  },
  "customer-health-scoring-model": {
    "stages": [
      {
        "name": "Health Metrics Selection",
        "objective": "Identify metrics that predict customer health and renewal",
        "input": "Historical data, customer feedback, usage patterns",
        "output": "Selected health metrics with definitions",
        "activities": "Analyze historical churn patterns, identify leading indicators, define health dimensions (adoption, engagement, support, sentiment), establish metric definitions",
        "tools": "Data analysis, historical CRM data",
        "roles": "Analytics (lead), CSM (validation)",
        "successMetric": "5-10 health metrics selected and defined",
        "decisionPoints": "Metrics predictive? Data available? Actionable?",
        "qualityGate": "Metrics approved, data sources identified"
      },
      {
        "name": "Data Architecture & Integration",
        "objective": "Build data infrastructure to calculate health scores",
        "input": "Selected metrics, data sources, technical requirements",
        "output": "Data pipeline delivering health score inputs",
        "activities": "Map data sources (product, CRM, support, billing), design data architecture, build data connections, establish data quality checks, plan refresh frequency",
        "tools": "Data platforms, ETL tools, APIs",
        "roles": "Data engineering (lead), Analytics (oversight)",
        "successMetric": "Data architecture built, pipelines active",
        "decisionPoints": "Data accurate? Latency acceptable? Quality consistent?",
        "qualityGate": "Data flowing reliably, quality verified"
      },
      {
        "name": "Scoring Model Development",
        "objective": "Build health scoring algorithm",
        "input": "Selected metrics, historical data, model requirements",
        "output": "Health score model with weighting",
        "activities": "Define scoring methodology, weight metrics by impact, calibrate thresholds, build scoring algorithm, test on historical data",
        "tools": "Statistical analysis, modeling tools",
        "roles": "Analytics (lead), Data science (if needed)",
        "successMetric": "Scoring model developed and tested",
        "decisionPoints": "Model predicts well? Weights appropriate? Thresholds meaningful?",
        "qualityGate": "Model performs well on test data (>70% accuracy)"
      },
      {
        "name": "Validation & Testing",
        "objective": "Validate model accuracy and applicability",
        "input": "Scoring model, historical churn data, validation set",
        "output": "Validated model with performance metrics",
        "activities": "Test model against historical churn, assess false positive/negative rates, validate with CSM team, refine thresholds based on feedback",
        "tools": "Validation datasets, performance metrics",
        "roles": "Analytics (testing), CSM (feedback)",
        "successMetric": "Model validated with <10% false positive rate",
        "decisionPoints": "Model accurate? CSM confident? Thresholds realistic?",
        "qualityGate": "Model approved for deployment"
      },
      {
        "name": "Score Deployment & Dashboard",
        "objective": "Deploy health scores and create monitoring dashboard",
        "input": "Validated model, dashboard requirements",
        "output": "Live health scores for all customers in dashboard",
        "activities": "Deploy scoring model to production, create health dashboards, set up auto-refresh, configure alerts, train team on interpretation",
        "tools": "Dashboard tools, alerting systems",
        "roles": "Analytics (deployment), Operations (training)",
        "successMetric": "Health scores live for 100% of customers",
        "decisionPoints": "Scores accurate? Dashboard clear? Alerts appropriate?",
        "qualityGate": "Scores live, dashboard adopted by team"
      },
      {
        "name": "Monitoring & Alert Configuration",
        "objective": "Set up real-time monitoring and alerts for at-risk customers",
        "input": "Health scores, alert thresholds, escalation process",
        "output": "Active monitoring and alert system",
        "activities": "Define alert thresholds (red/yellow/green), configure automated alerts, establish escalation process, test alerts, train team on response",
        "tools": "Alerting systems, ticketing",
        "roles": "Operations (setup), CSM (response)",
        "successMetric": "Alert system active, team responding to alerts",
        "decisionPoints": "Alert frequency appropriate? Response process working?",
        "qualityGate": "Alerts sent and acted upon consistently"
      },
      {
        "name": "Continuous Model Improvement",
        "objective": "Continuously improve model based on performance",
        "input": "Score accuracy, churn data, feedback",
        "output": "Updated model with improved accuracy",
        "activities": "Quarterly review of model performance, analyze misses, identify new signals, update model, retrain team",
        "tools": "Analysis tools, model versioning",
        "roles": "Analytics (improvement), CSM (feedback)",
        "successMetric": "Model accuracy improving each quarter",
        "decisionPoints": "New signals identified? Thresholds optimized? Predictability increasing?",
        "qualityGate": "Continuous improvement cycle established"
      }
    ]
  },
  "customer-satisfaction-nps-program": {
    "stages": [
      {
        "name": "NPS Program Strategy & Design",
        "objective": "Design NPS program and measurement approach",
        "input": "Business objectives, customer feedback needs, competitive benchmarks",
        "output": "NPS program strategy with measurement plan",
        "activities": "Define program objectives, design survey cadence (quarterly/annual), identify target respondents, design segmentation approach, establish benchmark targets",
        "tools": "Program templates",
        "roles": "Customer success (design), Operations (execution)",
        "successMetric": "NPS program strategy documented",
        "decisionPoints": "Cadence appropriate? Segments meaningful? Targets realistic?",
        "qualityGate": "Program strategy approved, benchmark established"
      },
      {
        "name": "Survey Development & Testing",
        "objective": "Create NPS survey and supporting questions",
        "input": "Program strategy, customer context, benchmark surveys",
        "output": "Finalized NPS survey ready for deployment",
        "activities": "Design core NPS question and scale, create follow-up questions (segmentation, satisfaction, recommendation), add open feedback questions, test with sample customers, refine wording",
        "tools": "Survey platforms, testing tools",
        "roles": "Customer success (content), Operations (deployment)",
        "successMetric": "Survey tested and refined",
        "decisionPoints": "Questions clear? Segmentation helpful? Response rate expected high?",
        "qualityGate": "Survey approved, ready for launch"
      },
      {
        "name": "Survey Deployment & Collection",
        "objective": "Distribute survey and collect responses",
        "input": "Finalized survey, customer list, distribution method",
        "output": "NPS responses from target customers",
        "activities": "Deploy survey via email/in-app/platform, track response rates, send reminders, extend deadline if needed, document response data",
        "tools": "Survey platforms, email, CRM",
        "roles": "Operations (deployment), Marketing (promotion)",
        "successMetric": "30%+ response rate, 100+ responses collected",
        "decisionPoints": "Response rate adequate? Sample representative? Data quality good?",
        "qualityGate": "Sufficient responses collected for analysis"
      },
      {
        "name": "Response Analysis & Segmentation",
        "objective": "Analyze NPS responses and segment by customer groups",
        "input": "NPS responses, customer data",
        "output": "NPS analysis with segments and insights",
        "activities": "Calculate overall NPS and by segment, analyze promoter/detractor/passive split, identify trends, segment by company size/industry/tenure, identify correlation with usage/health",
        "tools": "Analytics tools, segmentation analysis",
        "roles": "Analytics (lead), Customer success (interpretation)",
        "successMetric": "NPS calculated and segmented, insights identified",
        "decisionPoints": "Insights actionable? Segments clear? Trends significant?",
        "qualityGate": "Analysis complete, key findings documented"
      },
      {
        "name": "Detractor Follow-Up & Voice of Customer",
        "objective": "Understand feedback from detractors and low satisfaction customers",
        "input": "NPS feedback, detractor list, open-ended responses",
        "output": "Detractor insights and recommended actions",
        "activities": "Review open-ended feedback, categorize feedback themes, interview sample detractors, identify systemic issues, develop improvement plan",
        "tools": "Feedback analysis, survey platform",
        "roles": "Customer success (lead), Product (consideration)",
        "successMetric": "Detractor feedback analyzed, themes identified",
        "decisionPoints": "Issues fixable? Patterns clear? Product vs. service issue?",
        "qualityGate": "Detractor themes documented, action plan created"
      },
      {
        "name": "Action Planning & Internal Communication",
        "objective": "Develop actions to improve satisfaction and NPS",
        "input": "Analysis findings, detractor feedback, resource availability",
        "output": "Action plan to address gaps",
        "activities": "Prioritize top issues, assign ownership, develop action plan, communicate results to team, celebrate improvements, set targets for next survey",
        "tools": "Action tracking, communication templates",
        "roles": "Leadership (ownership), Customer success (execution)",
        "successMetric": "Action plan created with owners assigned",
        "decisionPoints": "Actions address root causes? Timelines realistic? Resources available?",
        "qualityGate": "Actions assigned and tracked"
      },
      {
        "name": "Results Communication & Celebration",
        "objective": "Communicate NPS results and improvements to team",
        "input": "NPS analysis, action plan, improvements made",
        "output": "Team communication and celebration",
        "activities": "Share NPS results with full team, communicate improvements made since last survey, celebrate improvements, recognize top performers, share customer quotes",
        "tools": "Communication platforms, internal newsletters",
        "roles": "Leadership (communication), Customer success (celebration)",
        "successMetric": "Results communicated, team engaged",
        "decisionPoints": "Communication clear? Team motivated? Ownership clear?",
        "qualityGate": "NPS program visible to team, continuous improvement culture evident"
      }
    ]
  },
  "customer-success-metrics-dashboard": {
    "stages": [
      {
        "name": "Success Metrics Framework",
        "objective": "Define comprehensive metrics for customer success health",
        "input": "Business objectives, CSM responsibilities, customer health indicators",
        "output": "Success metrics framework with KPIs",
        "activities": "Define health metrics (adoption, usage, satisfaction), define pipeline metrics (renewals, expansion), define operational metrics (cost, efficiency), establish targets",
        "tools": "Metrics frameworks",
        "roles": "Customer success leadership (design), Analytics (validation)",
        "successMetric": "Comprehensive metrics framework with 15-20 KPIs",
        "decisionPoints": "Metrics comprehensive? Aligned to business? Actionable?",
        "qualityGate": "Metrics approved by leadership"
      },
      {
        "name": "Data Architecture & Integration",
        "objective": "Build data infrastructure for success metrics",
        "input": "Metrics framework, data sources, technical requirements",
        "output": "Data pipelines feeding success dashboard",
        "activities": "Identify data sources (product, CRM, billing, surveys), design data model, build data connectors, establish data quality, test data accuracy",
        "tools": "Data platforms, ETL, APIs",
        "roles": "Data engineering (lead), Analytics (oversight)",
        "successMetric": "Data architecture complete, pipelines active",
        "decisionPoints": "Data accurate? Refresh frequency adequate? Latency acceptable?",
        "qualityGate": "Data flowing reliably, quality verified"
      },
      {
        "name": "Dashboard Design & Visualization",
        "objective": "Design intuitive dashboard for success metrics",
        "input": "Metrics framework, audience needs, design requirements",
        "output": "Dashboard design mockups ready for implementation",
        "activities": "Design dashboard layout for different users (CSM, leadership, executive), select visualizations for each metric, define drill-down capabilities, design mobile view",
        "tools": "Design tools, dashboard software",
        "roles": "Design (UX), Analytics (logic)",
        "successMetric": "Dashboard designs created and reviewed",
        "decisionPoints": "Design intuitive? Drill-downs helpful? Mobile ready?",
        "qualityGate": "Designs approved, ready for build"
      },
      {
        "name": "Dashboard Implementation",
        "objective": "Build and deploy success dashboard",
        "input": "Dashboard designs, data pipelines, platform",
        "output": "Live dashboard with real-time metrics",
        "activities": "Build dashboard in platform, configure metrics and visualizations, set up auto-refresh, configure alerts, test all features",
        "tools": "Dashboard platform",
        "roles": "Analytics (build), QA (testing)",
        "successMetric": "Dashboard live with all metrics displaying correctly",
        "decisionPoints": "Performance adequate? Data accurate? User experience smooth?",
        "qualityGate": "Dashboard tested and approved for release"
      },
      {
        "name": "Team Training & Adoption",
        "objective": "Train team on dashboard usage and interpretation",
        "input": "Live dashboard, training materials",
        "output": "Trained team using dashboard",
        "activities": "Create dashboard user guide, train CSMs on how to use, train leadership on insights, establish dashboard review cadence, create help resources",
        "tools": "Training materials, help documentation",
        "roles": "Analytics (training), Leadership (adoption)",
        "successMetric": "100% of team trained, usage visible",
        "decisionPoints": "Training clear? Team confident? Usage adoption high?",
        "qualityGate": "Team trained and actively using dashboard"
      },
      {
        "name": "Usage Monitoring & Support",
        "objective": "Monitor dashboard usage and provide support",
        "input": "Dashboard usage data, team feedback",
        "output": "Active dashboard adoption with support",
        "activities": "Track dashboard login and usage, provide support for questions, monitor for feedback, identify common issues, provide refresher training",
        "tools": "Usage analytics, support channels",
        "roles": "Analytics (monitoring), Support (helpdesk)",
        "successMetric": "80%+ of team using dashboard regularly",
        "decisionPoints": "Adoption growing? Support questions declining? Usefulness evident?",
        "qualityGate": "Dashboard becoming integral to CSM workflow"
      },
      {
        "name": "Continuous Improvement & Optimization",
        "objective": "Optimize dashboard based on usage and feedback",
        "input": "Dashboard usage data, team feedback, new metrics needed",
        "output": "Improved dashboard with optimizations",
        "activities": "Quarterly review of usage, gather feedback on improvements, add new metrics as needed, optimize visualizations, remove unused metrics",
        "tools": "Dashboard platform, feedback collection",
        "roles": "Analytics (optimization), Leadership (feedback)",
        "successMetric": "Dashboard evolving based on feedback",
        "decisionPoints": "New metrics valuable? Optimizations improving usage?",
        "qualityGate": "Continuous improvement process established"
      }
    ]
  },
  "target-account-list-development-tal": {
    "stages": [
      {
        "name": "TAL Criteria Definition",
        "objective": "Define characteristics of ideal target accounts",
        "input": "Customer profiles, revenue data, market research, product fit data",
        "output": "Documented TAL criteria with scoring methodology",
        "activities": "Define company size criteria, define industry/vertical criteria, define growth criteria, define budget/spend criteria, define technographic criteria, weight criteria by importance",
        "tools": "Scoring frameworks, ICP definition",
        "roles": "Sales leadership (criteria), Marketing (market data), Product (fit assessment)",
        "successMetric": "TAL criteria documented with 8-12 weighted factors",
        "decisionPoints": "Criteria comprehensive? Weighted appropriately? Data available?",
        "qualityGate": "TAL criteria approved by leadership, scoring model built"
      },
      {
        "name": "Account Data Sourcing",
        "objective": "Gather data on potential target accounts",
        "input": "TAL criteria, market data sources, customer data",
        "output": "Database of accounts with required attributes",
        "activities": "Source account list from data providers, pull company data, gather technology data, pull funding/growth data, validate data quality",
        "tools": "Data providers (Apollo, Prospeo), business databases, technology trackers",
        "roles": "Data ops (sourcing), Marketing (enrichment), Sales (validation)",
        "successMetric": "Account database with 5000+ accounts and required attributes",
        "decisionPoints": "Account list comprehensive? Data quality acceptable? Duplicates removed? Relevant geographically?",
        "qualityGate": "Account database cleaned and validated"
      },
      {
        "name": "Account Scoring & Ranking",
        "objective": "Score all accounts against TAL criteria and rank by fit",
        "input": "Account database, TAL criteria, scoring model",
        "output": "Ranked account list with fit scores",
        "activities": "Apply scoring model to all accounts, calculate composite scores, rank accounts, identify tiers (high/medium/low), validate sample manually",
        "tools": "Scoring platform, ranking tools",
        "roles": "Analytics (scoring), Sales (validation)",
        "successMetric": "All accounts scored and ranked, 500+ high-fit accounts identified",
        "decisionPoints": "Scores accurate? Validation confirms quality? Tiers meaningful? Top accounts known?",
        "qualityGate": "Scoring complete, top 500 accounts identified and validated"
      },
      {
        "name": "Account Qualification",
        "objective": "Deeply qualify top accounts and assess enterprise potential",
        "input": "Ranked account list, top accounts",
        "output": "Qualified account list with opportunity assessment",
        "activities": "Research top accounts, identify decision-makers, assess buying patterns, evaluate fit with sales process, identify red flags",
        "tools": "Sales research tools, LinkedIn, news sources",
        "roles": "Sales research (qualification), Sales leadership (assessment)",
        "successMetric": "Top 500 accounts manually qualified",
        "decisionPoints": "Truly target accounts? Decision-maker identifiable? Budget expected? Buying timeline?",
        "qualityGate": "Accounts qualified, opportunity summary created"
      },
      {
        "name": "TAL Prioritization & Segmentation",
        "objective": "Prioritize TAL and create go-to-market segments",
        "input": "Qualified account list, revenue potential, strategic fit",
        "output": "Segmented TAL with 3-4 priority tiers and segments",
        "activities": "Prioritize by revenue potential, segment by industry/size/geography, identify strategic accounts, create segment-specific strategies",
        "tools": "Segmentation templates",
        "roles": "Sales leadership (prioritization), Marketing (segmentation)",
        "successMetric": "TAL segmented with Tier 1 (50 accounts), Tier 2 (200), Tier 3 (500)",
        "decisionPoints": "Right number in each tier? Segments meaningful? Strategy clear?",
        "qualityGate": "TAL finalized and segmented, go-to-market strategy ready"
      },
      {
        "name": "Account Assignment & Team Allocation",
        "objective": "Assign accounts to sales team members and plan resource allocation",
        "input": "Segmented TAL, sales team, account characteristics",
        "output": "Account assignment plan with owner and resource allocation",
        "activities": "Assign Tier 1 accounts to enterprise AEs, assign Tier 2 to SDRs for routing, assign Tier 3 to automated outreach, allocate support resources, plan enablement",
        "tools": "Assignment templates, resource planning",
        "roles": "Sales leadership (assignment), Finance (resource allocation)",
        "successMetric": "100% of accounts assigned with clear ownership",
        "decisionPoints": "Right account owner? Capacity matched? Coverage complete?",
        "qualityGate": "Assignments finalized, owners briefed, resources allocated"
      }
    ]
  },
  "account-profiling-intelligence-gathering": {
    "stages": [
      {
        "name": "Comprehensive Company Research",
        "objective": "Gather company-level intelligence on target account",
        "input": "Account data, research sources",
        "output": "Company profile with overview and opportunity assessment",
        "activities": "Research company background, assess growth trajectory, identify revenue sources, research competitors, research strategy/direction, assess leadership",
        "tools": "News aggregators, LinkedIn, company websites, industry reports",
        "roles": "Sales research (lead), Marketing (competitive data)",
        "successMetric": "Comprehensive company profile documented",
        "decisionPoints": "Key info gathered? Company direction clear? Competitive position understood? Growth trajectory identifiable?",
        "qualityGate": "Company profile complete, shared with sales team"
      },
      {
        "name": "Organizational Structure & Stakeholder Mapping",
        "objective": "Map customer organization and identify all stakeholders",
        "input": "Company profile, organizational data, LinkedIn data",
        "output": "Org chart with stakeholder map",
        "activities": "Map organizational structure, identify C-suite, identify relevant department heads, identify budget owners, identify influencers/blockers",
        "tools": "Org mapping tools, LinkedIn Sales Navigator",
        "roles": "Sales research (mapping), Sales (validation)",
        "successMetric": "Org chart with 5-10+ stakeholders identified",
        "decisionPoints": "Structure clear? Budget owner identified? Coach/champion identified? Blockers identified?",
        "qualityGate": "Org chart validated, stakeholder roles understood"
      },
      {
        "name": "Problem & Pain Point Analysis",
        "objective": "Identify company's business challenges and pain points",
        "input": "Company research, industry analysis, press releases, job postings",
        "output": "Pain point summary with relevance to product",
        "activities": "Analyze company financials for challenges, review industry trends affecting company, research news for strategic challenges, identify hiring patterns indicating growth areas, assess competitive threats",
        "tools": "Financial research, news tracking, job board analysis",
        "roles": "Sales research (analysis), Product (fit assessment)",
        "successMetric": "3-5 key pain points identified and linked to product solution",
        "decisionPoints": "Pain points real? Company actively addressing? Solution relevant? Urgency?",
        "qualityGate": "Pain point analysis complete and validated"
      },
      {
        "name": "Buying Process Understanding",
        "objective": "Understand how account evaluates and purchases solutions",
        "input": "Company research, comparable accounts, sales history",
        "output": "Buying process summary with decision criteria",
        "activities": "Analyze comparable accounts for buying patterns, research decision criteria from industry/analyst reports, assess approval complexity, identify budget cycle",
        "tools": "Win/loss analysis, industry research",
        "roles": "Sales (patterns), Sales leadership (validation)",
        "successMetric": "Buying process documented with timeline",
        "decisionPoints": "Buying process clear? Timeline understood? Budget cycle identified? Approval levels?",
        "qualityGate": "Buying process understood, timeline mapped"
      },
      {
        "name": "Technology Stack & System Assessment",
        "objective": "Understand account's current technology and integration needs",
        "input": "Company research, technology tracking data",
        "output": "Technology assessment with integration opportunities",
        "activities": "Identify current systems using technology trackers, assess current solutions for replacement opportunity, identify integration points, assess technology maturity",
        "tools": "Technographic data, technology tracking platforms",
        "roles": "Sales engineering (assessment), Product (capabilities)",
        "successMetric": "Technology stack documented with integration points",
        "decisionPoints": "Current solution adequate? Replacement opportunity? Integration needed? Timeline for change?",
        "qualityGate": "Technology stack mapped, integration strategy identified"
      }
    ]
  },
  "competitive-account-assessment": {
    "stages": [
      {
        "name": "Incumbent & Competitor Identification",
        "objective": "Identify current solutions and competitors at target account",
        "input": "Account research, company data, technology tracking",
        "output": "Competitor list with installed base",
        "activities": "Research current solutions using technology trackers, identify incumbent vendors, assess competitive threats, document version/implementation details",
        "tools": "Technographic data, news tracking",
        "roles": "Sales research (lead), Sales (validation)",
        "successMetric": "Current solutions identified for target account",
        "decisionPoints": "Incumbents clear? Switching likelihood? Competitive threat?",
        "qualityGate": "Competitive landscape documented"
      },
      {
        "name": "Win/Loss Pattern Analysis",
        "objective": "Understand competitive win/loss patterns at this account type",
        "input": "Historical win/loss data, account industry/size",
        "output": "Competitive intelligence by segment",
        "activities": "Analyze historical wins vs. competitors, identify competitive patterns, assess pricing impact, identify typical objections, document competitive strengths/weaknesses",
        "tools": "Win/loss database, CRM",
        "roles": "Sales (patterns), Competitive intelligence (analysis)",
        "successMetric": "Win/loss patterns documented",
        "decisionPoints": "Patterns clear? Competitive threats identified?",
        "qualityGate": "Competitive patterns understood"
      },
      {
        "name": "Pricing & Offer Comparison",
        "objective": "Assess competitive pricing and offers",
        "input": "Competitor pricing intelligence, deal economics",
        "output": "Pricing comparison and positioning strategy",
        "activities": "Research competitor pricing, assess value positioning, identify price differentiators, model win probability at different prices",
        "tools": "Pricing intelligence, competitive databases",
        "roles": "Sales (deal context), Finance (economics)",
        "successMetric": "Pricing comparison analyzed",
        "decisionPoints": "Pricing competitive? Value justifiable? Discount strategy?",
        "qualityGate": "Pricing strategy developed"
      },
      {
        "name": "Feature/Capability Comparison",
        "objective": "Compare product capabilities vs. competitors",
        "input": "Product roadmap, competitor products",
        "output": "Feature comparison matrix with positioning",
        "activities": "Document competitor features, compare against product, identify gaps/advantages, assess importance to account, plan messaging",
        "tools": "Feature comparison templates",
        "roles": "Product (comparison), Sales (account relevance)",
        "successMetric": "Feature comparison completed",
        "decisionPoints": "Differentiation clear? Gaps acceptable? Advantages clear?",
        "qualityGate": "Feature positioning developed"
      },
      {
        "name": "Objection Handling Strategy",
        "objective": "Prepare responses to anticipated competitive objections",
        "input": "Competitive analysis, common objections, positioning strategy",
        "output": "Objection handling playbook for this account",
        "activities": "Identify likely objections, develop responses, identify proof points, prepare ROI comparisons, document competitive neutralizers",
        "tools": "Objection handling templates, battle cards",
        "roles": "Sales (preparation), Product (technical responses)",
        "successMetric": "Objection responses documented",
        "decisionPoints": "Responses credible? Proof points available? ROI clear?",
        "qualityGate": "Objection handling guide ready for sales"
      }
    ]
  },
  "expansion-opportunity-identification": {
    "stages": [
      {
        "name": "Current Revenue & Usage Analysis",
        "objective": "Understand current account revenue and expansion potential",
        "input": "Customer data, usage patterns, contract terms",
        "output": "Current state analysis with expansion potential",
        "activities": "Analyze current ACV/MRR, assess usage by department, identify power users, quantify unutilized features, project growth trajectory",
        "tools": "Usage analytics, CRM",
        "roles": "CSM (analysis), Analytics (data)",
        "successMetric": "Current state analysis documented",
        "decisionPoints": "Expansion potential clear? Utilization levels? Growth trajectory?",
        "qualityGate": "Current state understood"
      },
      {
        "name": "Expansion Type Identification",
        "objective": "Identify types of expansion opportunities",
        "input": "Current state analysis, product capabilities, customer organization",
        "output": "Expansion opportunity types with examples",
        "activities": "Identify horizontal expansion (other departments), identify vertical expansion (other geographies), identify product expansion (add-ons/upgrades), identify deeper penetration",
        "tools": "Expansion frameworks",
        "roles": "CSM (identification), Product (capabilities)",
        "successMetric": "Multiple expansion types identified",
        "decisionPoints": "Opportunities realistic? Customer interest likely? ROI positive?",
        "qualityGate": "Expansion opportunities characterized"
      },
      {
        "name": "Opportunity Sizing & ROI",
        "objective": "Size expansion opportunities and calculate potential ROI",
        "input": "Expansion opportunities, pricing, customer financials",
        "output": "Sized opportunities with ROI models",
        "activities": "Estimate number of additional users/seats, calculate incremental revenue, model implementation costs, calculate ROI/payback, rank by impact",
        "tools": "ROI models, financial spreadsheets",
        "roles": "CSM (narrative), Finance (modeling)",
        "successMetric": "Opportunities sized with ROI calculated",
        "decisionPoints": "Sizing realistic? ROI compelling? Payback acceptable?",
        "qualityGate": "Opportunity sizing approved"
      },
      {
        "name": "Go/No-Go Decision",
        "objective": "Decide which expansion opportunities to pursue",
        "input": "Sized opportunities, ROI analysis, resource availability",
        "output": "Prioritized expansion opportunities",
        "activities": "Prioritize opportunities by ROI and timeline, assess customer readiness, identify resource requirements, make go/no-go decision, plan next steps",
        "tools": "Priority matrices",
        "roles": "Sales leadership (decision), CSM (input)",
        "successMetric": "Expansion opportunities prioritized",
        "decisionPoints": "Opportunities worth pursuing? Timing right? Resources available?",
        "qualityGate": "Expansion plan approved, initiatives assigned"
      }
    ]
  },
  "department-division-expansion-strategy": {
    "stages": [
      {
        "name": "Target Department Analysis",
        "objective": "Analyze target department for expansion",
        "input": "Company structure, department data, usage analysis",
        "output": "Target department profile with expansion potential",
        "activities": "Identify department needs and pain points, assess headcount, analyze current process, identify key stakeholders, assess adoption likelihood",
        "tools": "Organizational analysis, research",
        "roles": "CSM (analysis), Sales (stakeholder context)",
        "successMetric": "Target department profiled",
        "decisionPoints": "Needs clear? Pain points addressable? Adoption likely?",
        "qualityGate": "Department profile documented"
      },
      {
        "name": "Use Case Development",
        "objective": "Develop compelling use case for target department",
        "input": "Department analysis, product capabilities, department needs",
        "output": "Use case document with business justification",
        "activities": "Define business problem for department, map product solution, quantify impact specific to department, identify measurable success criteria",
        "tools": "Use case templates",
        "roles": "CSM (development), Product (fit)",
        "successMetric": "Use case documented",
        "decisionPoints": "Use case compelling? Relevant to department needs?",
        "qualityGate": "Use case validated"
      },
      {
        "name": "Business Case Development",
        "objective": "Develop financial business case for department expansion",
        "input": "Use case, department sizing, ROI model",
        "output": "Business case with financial projections",
        "activities": "Quantify department impact, calculate ROI for department, identify implementation costs, calculate payback, compare to alternatives",
        "tools": "Financial modeling, business case templates",
        "roles": "CSM (narrative), Finance (modeling)",
        "successMetric": "Business case completed",
        "decisionPoints": "ROI compelling? Payback acceptable? Presentation ready?",
        "qualityGate": "Business case approved"
      },
      {
        "name": "Department Stakeholder Identification & Mapping",
        "objective": "Identify and map all stakeholders in target department",
        "input": "Department profile, organizational structure",
        "output": "Stakeholder map with influence/power assessment",
        "activities": "Identify department head, identify budget owner, identify influencers/power users, identify potential objectors, develop influence strategy",
        "tools": "Stakeholder mapping templates",
        "roles": "Sales (mapping), CSM (department knowledge)",
        "successMetric": "Stakeholders mapped with influence levels",
        "decisionPoints": "Right stakeholders identified? Power structure clear?",
        "qualityGate": "Stakeholder map complete"
      },
      {
        "name": "Pilot Program Design & Execution",
        "objective": "Plan and execute pilot with target department",
        "input": "Business case, stakeholder map, pilot structure",
        "output": "Successful pilot with positive results",
        "activities": "Define pilot scope and success criteria, recruit pilot participants, provide training, monitor pilot closely, document results, celebrate early wins",
        "tools": "Pilot program framework, monitoring",
        "roles": "CSM (leadership), Product (support)",
        "successMetric": "Pilot completed with positive results",
        "decisionPoints": "Pilot successful? ROI realized? Department enthusiastic?",
        "qualityGate": "Pilot results documented, expansion decision clear"
      },
      {
        "name": "Full Department Expansion & Implementation",
        "objective": "Roll out to full department",
        "input": "Pilot results, expansion plan, resource plan",
        "output": "Full department adoption",
        "activities": "Expand to full department user base, provide comprehensive training, manage implementation, monitor adoption, adjust based on feedback",
        "tools": "Implementation management",
        "roles": "CSM (leadership), Implementation team (execution)",
        "successMetric": "Full department adoption with usage similar to pilot",
        "decisionPoints": "Adoption on track? Support adequate? Champion engaged?",
        "qualityGate": "Full expansion complete, success metrics tracked"
      }
    ]
  },
  "add-on-module-expansion": {
    "stages": [
      {
        "name": "Feature/Module Expansion Analysis",
        "objective": "Identify add-on products or modules for expansion",
        "input": "Product roadmap, customer usage data, expansion strategy",
        "output": "List of expansion candidates by customer",
        "activities": "Analyze current feature adoption, identify underadopted features, identify complementary products, assess expansion fit for account type",
        "tools": "Product analytics, roadmap analysis",
        "roles": "Product (feature expertise), CSM (customer context)",
        "successMetric": "Expansion candidates identified",
        "decisionPoints": "Candidates align to customer strategy? Value clear?",
        "qualityGate": "Expansion candidates prioritized"
      },
      {
        "name": "Adoption & Readiness Assessment",
        "objective": "Assess customer readiness for expansion",
        "input": "Customer health, current adoption, organization readiness",
        "output": "Readiness assessment and timing recommendation",
        "activities": "Assess current product adoption depth, analyze training readiness, evaluate budget availability, assess organizational bandwidth",
        "tools": "Readiness assessment frameworks",
        "roles": "CSM (assessment)",
        "successMetric": "Readiness documented",
        "decisionPoints": "Customer ready now or later? Barriers to adoption?",
        "qualityGate": "Timing recommendation made"
      },
      {
        "name": "Pricing & Bundling Strategy",
        "objective": "Develop pricing and packaging for add-on expansion",
        "input": "Add-on product, customer metrics, pricing models",
        "output": "Pricing and bundling strategy for this customer",
        "activities": "Develop pricing options (standalone, bundled, tiered), model revenue impact, assess willingness to pay, prepare pricing justification",
        "tools": "Pricing models",
        "roles": "Finance (pricing), Sales (customer fit)",
        "successMetric": "Pricing strategy developed",
        "decisionPoints": "Pricing competitive? Value justified?",
        "qualityGate": "Pricing approved"
      },
      {
        "name": "Business Justification & Proposal",
        "objective": "Develop compelling business case and proposal",
        "input": "Add-on product, pricing, customer value",
        "output": "Proposal ready for customer",
        "activities": "Develop customer-specific ROI, create proposal, prepare presentation, identify success criteria",
        "tools": "Proposal templates, ROI calculators",
        "roles": "CSM (customer fit), Sales (proposal)",
        "successMetric": "Proposal completed",
        "decisionPoints": "Proposal compelling? Customized to customer?",
        "qualityGate": "Proposal approved"
      },
      {
        "name": "Sales Team Training & Enablement",
        "objective": "Train sales team on new add-on product",
        "input": "Product details, customer use cases, pricing",
        "output": "Trained sales team ready to sell",
        "activities": "Product training on features/benefits, training on customer use cases, pricing training, competitive positioning, objection handling",
        "tools": "Training materials, battle cards",
        "roles": "Product marketing (training), Sales leadership (enforcement)",
        "successMetric": "Sales team trained and tested",
        "decisionPoints": "Team confident? Can articulate value?",
        "qualityGate": "Training complete, team ready"
      },
      {
        "name": "Customer Launch & Promotion",
        "objective": "Launch add-on to customer with promotional support",
        "input": "Proposal, pricing, customer contacts",
        "output": "Add-on launched with customer adoption",
        "activities": "Present to customer, drive adoption, provide training, monitor usage, celebrate success",
        "tools": "Communication platforms, training",
        "roles": "CSM (customer), Sales (closure)",
        "successMetric": "Add-on purchased, initial adoption visible",
        "decisionPoints": "Customer purchased? Usage adopted? Satisfaction high?",
        "qualityGate": "Add-on successful with customer"
      }
    ]
  },
  "expansion-sales-process": {
    "stages": [
      {
        "name": "Opportunity Discovery",
        "objective": "Discover and qualify expansion opportunity",
        "input": "Expansion opportunities identified, customer interest",
        "output": "Qualified expansion opportunity",
        "activities": "Conduct discovery meeting, understand business drivers, assess budget, identify timeline, evaluate priority",
        "tools": "Discovery frameworks, CRM",
        "roles": "Sales (discovery), CSM (customer knowledge)",
        "successMetric": "Opportunity qualified with clear timeline",
        "decisionPoints": "Real opportunity? Budget available? Timeline realistic?",
        "qualityGate": "Opportunity entered in pipeline"
      },
      {
        "name": "Needs Analysis & Assessment",
        "objective": "Deeply understand customer needs for expansion",
        "input": "Opportunity, customer business context",
        "output": "Needs assessment with requirements",
        "activities": "Conduct detailed needs analysis, map requirements to product capabilities, identify success criteria, identify constraints/concerns",
        "tools": "Needs analysis templates",
        "roles": "Sales/CSM (analysis), Product (fit assessment)",
        "successMetric": "Needs documented clearly",
        "decisionPoints": "Requirements clear? Product fit? Any gaps?",
        "qualityGate": "Needs assessment complete"
      },
      {
        "name": "Solution Design & Demo",
        "objective": "Design solution and demonstrate to customer",
        "input": "Needs assessment, product capabilities, pricing",
        "output": "Customized solution proposal and demo",
        "activities": "Design solution for customer's specific needs, prepare demo, conduct live demo, gather feedback, iterate design",
        "tools": "Demo software, presentation tools",
        "roles": "Sales engineer (demo), Sales (management)",
        "successMetric": "Demo completed, customer engaged",
        "decisionPoints": "Solution addresses needs? Customer interested? Questions addressed?",
        "qualityGate": "Solution approved by customer"
      },
      {
        "name": "Proposal & Negotiation",
        "objective": "Present proposal and negotiate terms",
        "input": "Solution design, pricing, customer requirements",
        "output": "Negotiated proposal accepted",
        "activities": "Present formal proposal, discuss pricing, address objections, negotiate terms, finalize economics",
        "tools": "Contracts, proposal templates",
        "roles": "Sales (negotiation), Finance (pricing)",
        "successMetric": "Proposal accepted, terms agreed",
        "decisionPoints": "Customer accepting? Pricing acceptable? Timeline confirmed?",
        "qualityGate": "Proposal signed"
      },
      {
        "name": "Contract & Implementation Planning",
        "objective": "Execute contract and plan implementation",
        "input": "Agreed proposal, implementation requirements",
        "output": "Signed contract with implementation plan",
        "activities": "Prepare contract, execute signature, develop implementation plan, identify implementation owner, schedule kickoff",
        "tools": "Contract management, implementation planning",
        "roles": "Legal (contracts), Implementation team (planning)",
        "successMetric": "Contract signed, implementation plan ready",
        "decisionPoints": "Contract clear? Implementation timeline realistic?",
        "qualityGate": "Implementation underway"
      },
      {
        "name": "Successful Adoption & Value Realization",
        "objective": "Ensure successful adoption and value realization",
        "input": "Implementation plan, success metrics",
        "output": "Achieved value with satisfied customer",
        "activities": "Execute implementation, provide training, monitor adoption, support challenges, measure value realization",
        "tools": "Implementation management, success tracking",
        "roles": "CSM (adoption support)",
        "successMetric": "Value metrics met, customer satisfied",
        "decisionPoints": "Adoption on track? Value realized? Customer happy?",
        "qualityGate": "Value realization confirmed"
      }
    ]
  },
  "land-and-expand-execution": {
    "stages": [
      {
        "name": "Land Strategy Development",
        "objective": "Develop land strategy to enter account at scale",
        "input": "Land ICP, market sizing, go-to-market strategy",
        "output": "Land strategy with target profile",
        "activities": "Define landing product/solution, identify target buyer persona, define landing price point, outline success criteria for land phase",
        "tools": "Strategy frameworks",
        "roles": "Product marketing (strategy), Sales leadership (validation)",
        "successMetric": "Land strategy documented",
        "decisionPoints": "Landing product right? Target persona clear? Price point accessible?",
        "qualityGate": "Land strategy approved"
      },
      {
        "name": "Expansion Opportunity Mapping",
        "objective": "Map expansion opportunities for target accounts",
        "input": "Land strategy, product portfolio, customer segments",
        "output": "Expansion roadmap for typical land account",
        "activities": "Map expansion opportunities by department, map expansion by geography, map expansion by use case, identify typical expansion sequence",
        "tools": "Expansion roadmaps",
        "roles": "CSM (sequences), Product (opportunities)",
        "successMetric": "Typical expansion path mapped",
        "decisionPoints": "Expansion opportunities realistic? Sequence make sense? Timing clear?",
        "qualityGate": "Expansion roadmap documented"
      },
      {
        "name": "Expansion Trigger Definition",
        "objective": "Define signals/metrics triggering expansion conversations",
        "input": "Customer lifecycle, expansion opportunities, timing",
        "output": "Expansion trigger framework",
        "activities": "Define usage triggers (adoption levels), define business triggers (growth indicators), define timeline triggers (post-implementation), create trigger monitoring process",
        "tools": "Trigger frameworks, monitoring tools",
        "roles": "CSM (triggers), Analytics (monitoring)",
        "successMetric": "Expansion triggers defined and monitored",
        "decisionPoints": "Triggers predictive? Monitoring automated? Response process clear?",
        "qualityGate": "Trigger monitoring active"
      },
      {
        "name": "Expansion Acceleration Tactics",
        "objective": "Develop tactics to accelerate expansion",
        "input": "Expansion roadmap, customer success plan",
        "output": "Expansion acceleration plan",
        "activities": "Develop training on new features, plan user group events, create expansion-focused communications, identify expansion champions, plan executive engagement",
        "tools": "Acceleration playbooks",
        "roles": "CSM (tactics), Marketing (execution)",
        "successMetric": "Acceleration tactics documented",
        "decisionPoints": "Tactics compelling? Resource available? Timeline realistic?",
        "qualityGate": "Acceleration plan ready"
      },
      {
        "name": "Expansion Execution & Monitoring",
        "objective": "Execute expansion and monitor success",
        "input": "Expansion triggers, expansion tactics",
        "output": "Successful expansions executed",
        "activities": "Monitor expansion triggers, execute expansion conversations when triggered, measure expansion success, iterate based on results",
        "tools": "CRM, success tracking",
        "roles": "CSM (execution), Sales (support)",
        "successMetric": "Expansion rate tracking metrics achieved",
        "decisionPoints": "Expansion timing right? Conversion rates acceptable? Customer satisfaction?",
        "qualityGate": "Land-and-expand model working at scale"
      }
    ]
  },
  "abm-program-management": {
    "stages": [
      {
        "name": "High-Value Account Prioritization",
        "objective": "Identify and prioritize key accounts for ABM investment",
        "input": "Account list, revenue potential, strategic fit",
        "output": "ABM target account list with prioritization",
        "activities": "Score accounts by revenue potential, score by strategic fit, identify must-win accounts, segment into tier levels",
        "tools": "Scoring frameworks, account databases",
        "roles": "Sales leadership (prioritization), Marketing (scoring)",
        "successMetric": "ABM account list with 50-200 accounts prioritized",
        "decisionPoints": "Right mix of accounts? Tier distribution appropriate?",
        "qualityGate": "ABM account list finalized"
      },
      {
        "name": "Account-Specific Strategy Development",
        "objective": "Develop customized strategy for each ABM account",
        "input": "Account research, company strategy, competitive positioning",
        "output": "Account strategy document per account",
        "activities": "Research account goals/challenges, develop value hypothesis, identify key stakeholders, plan stakeholder-specific messaging",
        "tools": "Strategy templates",
        "roles": "Sales (account knowledge), Marketing (strategy)",
        "successMetric": "Strategy developed for all ABM accounts",
        "decisionPoints": "Strategy realistic? Stakeholder-specific? Value clear?",
        "qualityGate": "Account strategies documented"
      },
      {
        "name": "Personalized Content & Messaging Development",
        "objective": "Create account-specific content and messaging",
        "input": "Account strategy, company position, content assets",
        "output": "Personalized content package for each account",
        "activities": "Develop account-specific case studies, create stakeholder-specific messaging, personalize ads/emails, develop custom thought leadership",
        "tools": "Content creation, personalization platforms",
        "roles": "Content marketing (creation), Design (assets)",
        "successMetric": "Personalized content created for all accounts",
        "decisionPoints": "Content compelling? Stakeholder-relevant? Production feasible?",
        "qualityGate": "Content library built"
      },
      {
        "name": "Multi-Channel Campaign Execution",
        "objective": "Execute coordinated multi-channel campaigns",
        "input": "Personalized content, account strategy, channel mix",
        "output": "Active campaigns across channels",
        "activities": "Deploy account-based advertising, send personalized emails, execute account events, coordinate sales outreach, orchestrate messaging",
        "tools": "Marketing automation, advertising, event platforms",
        "roles": "Marketing (execution), Sales (coordination)",
        "successMetric": "Multi-channel campaigns active for all accounts",
        "decisionPoints": "Campaigns coordinated? Messaging consistent? Frequency appropriate?",
        "qualityGate": "Campaigns live and coordinated"
      },
      {
        "name": "Engagement Tracking & Analytics",
        "objective": "Track engagement and measure campaign effectiveness",
        "input": "Campaign data, engagement metrics",
        "output": "Engagement tracking with ROI analysis",
        "activities": "Track engagement by channel, measure account-level response rates, analyze decision-maker engagement, calculate ABM ROI",
        "tools": "Analytics platforms, account engagement tracking",
        "roles": "Analytics (measurement), Marketing (optimization)",
        "successMetric": "Engagement tracked for all ABM accounts with ROI calculated",
        "decisionPoints": "Engagement rates healthy? ROI positive? Insights actionable?",
        "qualityGate": "Analytics driving decision-making"
      },
      {
        "name": "Continuous Optimization & Results",
        "objective": "Optimize campaigns based on performance",
        "input": "Engagement data, results, team feedback",
        "output": "Optimized campaigns and improved results",
        "activities": "Analyze underperforming accounts, adjust messaging/tactics, test new approaches, celebrate wins, iterate based on learning",
        "tools": "Optimization frameworks",
        "roles": "Marketing (optimization), Sales (feedback)",
        "successMetric": "ABM pipeline increasing, win rates improving",
        "decisionPoints": "Results improving? Tactics resonating? ROI positive?",
        "qualityGate": "ABM program showing measurable results"
      }
    ]
  },
  "account-executive-coordination": {
    "stages": [
      {
        "name": "Account Assignment & Territory Planning",
        "objective": "Assign accounts to account executives and plan territories",
        "input": "Account list, AE team, territory criteria",
        "output": "Account assignments with territory maps",
        "activities": "Assign accounts to AEs based on territory/specialization, balance account load, identify gaps, plan coverage for unassigned accounts",
        "tools": "Territory mapping, account assignment tools",
        "roles": "Sales leadership (assignment)",
        "successMetric": "All strategic accounts assigned, territories balanced",
        "decisionPoints": "Coverage complete? Load balanced? Specialization matched?",
        "qualityGate": "Account assignments finalized and communicated"
      },
      {
        "name": "AE Strategy Alignment",
        "objective": "Align AE strategy with corporate strategy",
        "input": "Corporate strategy, account strategy, AE team",
        "output": "Aligned AE strategies and quarterly plans",
        "activities": "Brief AE on corporate strategy, review account strategies, develop AE-specific approach, set team-level targets",
        "tools": "Strategy templates, planning tools",
        "roles": "Sales leadership (alignment), AEs (input)",
        "successMetric": "Strategies aligned, team plans documented",
        "decisionPoints": "Team understands strategy? Approach clear? Targets realistic?",
        "qualityGate": "Team aligned and prepared"
      },
      {
        "name": "Opportunity Pipeline Planning",
        "objective": "Plan opportunity pipeline for assigned accounts",
        "input": "Account expansion opportunities, sales cycle, capacity",
        "output": "Pipeline plan with opportunity targets",
        "activities": "Identify realistic opportunities per account, set opportunity targets, plan discovery timing, forecast closure dates",
        "tools": "Pipeline planning, forecasting",
        "roles": "AEs (planning), Sales leadership (review)",
        "successMetric": "Pipeline planned for all accounts",
        "decisionPoints": "Pipeline realistic? Targets achievable? Opportunities qualified?",
        "qualityGate": "Pipeline targets set"
      },
      {
        "name": "Regular Account Reviews & Coaching",
        "objective": "Conduct regular reviews and coach AEs",
        "input": "Opportunity pipeline, account results, team feedback",
        "output": "Account reviews with coaching and adjustments",
        "activities": "Conduct monthly account reviews, assess progress vs. targets, identify blocked deals, provide coaching, adjust strategy as needed",
        "tools": "Review templates, coaching frameworks",
        "roles": "Sales leadership (reviews), AEs (participation)",
        "successMetric": "Monthly reviews conducted, coaching provided",
        "decisionPoints": "Progress on track? Coaching effective? Deals advancing?",
        "qualityGate": "Review process institutionalized"
      },
      {
        "name": "Forecast & Results Management",
        "objective": "Manage forecasts and track results",
        "input": "Opportunity pipeline, closed deals, forecast models",
        "output": "Accurate forecasts and results tracking",
        "activities": "Manage monthly forecasts, track results vs. targets, analyze variances, adjust pipeline, celebrate wins",
        "tools": "CRM, forecasting tools",
        "roles": "Sales leadership (forecasting), Finance (validation)",
        "successMetric": "Forecasts accurate, results tracked",
        "decisionPoints": "Forecast accuracy improving? Results on track?",
        "qualityGate": "Forecasting and results tracking working well"
      }
    ]
  },
  "account-based-marketing-campaigns": {
    "stages": [
      {
        "name": "ABM Campaign Strategy",
        "objective": "Define strategy for account-based marketing campaigns",
        "input": "ABM account list, marketing objectives, budget",
        "output": "Campaign strategy with goals and targets",
        "activities": "Define campaign objectives, identify campaign themes, plan campaign timeline, set engagement targets, plan budget allocation",
        "tools": "Campaign planning templates",
        "roles": "Marketing leadership (strategy), Sales (account input)",
        "successMetric": "Campaign strategy documented",
        "decisionPoints": "Strategy aligned to sales? Targets achievable? Timeline realistic?",
        "qualityGate": "Strategy approved"
      },
      {
        "name": "Account Segmentation & Personalization",
        "objective": "Segment accounts and develop personalization approach",
        "input": "ABM account list, campaign strategy",
        "output": "Segmented accounts with personalization plan",
        "activities": "Segment accounts by industry/size/profile, develop segment-specific messaging, plan account-specific creative, design engagement sequence",
        "tools": "Segmentation tools",
        "roles": "Marketing (segmentation), Content (personalization)",
        "successMetric": "Accounts segmented with personalized approach",
        "decisionPoints": "Segmentation meaningful? Personalization feasible? Resources adequate?",
        "qualityGate": "Segmentation and personalization planned"
      },
      {
        "name": "Creative Development & Asset Production",
        "objective": "Develop creative assets for campaigns",
        "input": "Campaign strategy, personalization requirements, creative themes",
        "output": "Complete creative library ready for campaigns",
        "activities": "Develop account-based ads, create personalized landing pages, develop email sequences, create account-specific case studies",
        "tools": "Creative tools, design, marketing automation",
        "roles": "Creative team (development)",
        "successMetric": "Comprehensive creative library developed",
        "decisionPoints": "Creative quality high? Personalization evident? On-brand?",
        "qualityGate": "Creatives tested and approved"
      },
      {
        "name": "Multi-Channel Campaign Orchestration",
        "objective": "Orchestrate campaigns across channels",
        "input": "Creative assets, account list, channel mix",
        "output": "Coordinated campaigns running across channels",
        "activities": "Deploy ads to target accounts, execute email sequences, create account-based content, coordinate sales outreach, manage timing across channels",
        "tools": "Marketing automation, ad platforms, CRM",
        "roles": "Campaign operations (orchestration)",
        "successMetric": "All channels coordinated, campaigns live",
        "decisionPoints": "Orchestration smooth? Messaging consistent? Frequency right?",
        "qualityGate": "Campaigns active and coordinated"
      },
      {
        "name": "Performance Tracking & Measurement",
        "objective": "Track campaign performance and ROI",
        "input": "Campaign data, engagement metrics, pipeline impact",
        "output": "Performance dashboard with ROI analysis",
        "activities": "Track impressions/clicks/engagement by account, measure pipeline impact, calculate campaign ROI, analyze by segment",
        "tools": "Analytics platforms, attribution",
        "roles": "Analytics (measurement), Marketing (analysis)",
        "successMetric": "Dashboard live with key metrics tracked",
        "decisionPoints": "ROI positive? Engagement rates healthy? Insights clear?",
        "qualityGate": "Performance dashboard driving decisions"
      },
      {
        "name": "Optimization & Results",
        "objective": "Optimize campaigns and demonstrate results",
        "input": "Performance data, engagement insights",
        "output": "Optimized campaigns with improved results",
        "activities": "Analyze underperforming segments, test messaging variations, adjust targeting, scale winning approaches, document learning",
        "tools": "Optimization frameworks",
        "roles": "Marketing (optimization)",
        "successMetric": "Campaign performance improving quarter-over-quarter",
        "decisionPoints": "Results positive? Learning captured? Strategy evolving?",
        "qualityGate": "Continuous improvement cycle active"
      }
    ]
  },
  "customer-reference-advocate-programs": {
    "stages": [
      {
        "name": "Reference Customer Identification",
        "objective": "Identify ideal reference customers",
        "input": "Customer data, success metrics, account value",
        "output": "Reference customer list with profile",
        "activities": "Identify highly satisfied customers, assess willingness to reference, profile reference customers (industry, company size, use case), segment for targeting",
        "tools": "CRM, customer success data",
        "roles": "Customer success (identification)",
        "successMetric": "Reference customer list with 20+ identified",
        "decisionPoints": "Customers truly happy? Believable referrals? Diverse profiles?",
        "qualityGate": "Reference list built"
      },
      {
        "name": "Advocate Recruitment & Program Enrollment",
        "objective": "Recruit customers into reference/advocate program",
        "input": "Reference customer list, program benefits",
        "output": "Enrolled advocates committed to participation",
        "activities": "Recruit advocates by highlighting benefits (thought leadership, exclusive events), create advocate agreements, secure executive commitment, establish escalation path",
        "tools": "Recruitment templates, agreements",
        "roles": "Customer success (recruitment), Marketing (benefits)",
        "successMetric": "10-20 advocates enrolled",
        "decisionPoints": "Advocates committed? Benefits attractive? Agreements clear?",
        "qualityGate": "Advocates formally enrolled"
      },
      {
        "name": "Reference Call Training & Preparation",
        "objective": "Train advocates on effective reference call process",
        "input": "Advocate list, reference call frameworks, messaging",
        "output": "Trained advocates ready for calls",
        "activities": "Train on reference call formats, provide talking points, create reference call scripts, establish time commitments, test call process",
        "tools": "Training materials, call frameworks",
        "roles": "Sales (training)",
        "successMetric": "Advocates trained and ready",
        "decisionPoints": "Training comprehensive? Advocates confident? Process clear?",
        "qualityGate": "Advocates ready for calls"
      },
      {
        "name": "Success Story & Case Study Development",
        "objective": "Document advocate stories for marketing use",
        "input": "Customer success stories, advocate context",
        "output": "Case studies and customer stories",
        "activities": "Conduct customer interviews, document success stories, create case studies, develop video testimonials, get approval from customers",
        "tools": "Storytelling templates, video tools",
        "roles": "Content marketing (development)",
        "successMetric": "3-5 case studies and customer stories documented",
        "decisionPoints": "Stories compelling? Approval secured? Assets sharable?",
        "qualityGate": "Stories documented and approved"
      },
      {
        "name": "Reference Call Coordination & Execution",
        "objective": "Coordinate and execute reference calls with prospects",
        "input": "Reference requests, advocate list",
        "output": "Completed reference calls with prospect feedback",
        "activities": "Match reference with prospect needs, schedule calls, prepare both parties, debrief after calls, document feedback",
        "tools": "CRM, scheduling, tracking",
        "roles": "Sales (coordination)",
        "successMetric": "100+ reference calls completed annually",
        "decisionPoints": "Calls valuable to prospects? Advocates engaged? Outcomes tracked?",
        "qualityGate": "Reference call process working smoothly"
      },
      {
        "name": "Advocate Recognition & Program Growth",
        "objective": "Recognize advocates and grow program",
        "input": "Call participation, advocate engagement data",
        "output": "Recognition program and advocate retention",
        "activities": "Recognize active advocates, share customer stories internally, highlight advocates in communications, plan exclusive advocate events",
        "tools": "Recognition programs, event planning",
        "roles": "Customer success (recognition), Marketing (promotion)",
        "successMetric": "Advocates engaged and growing program",
        "decisionPoints": "Recognition meaningful? Program growing? Advocacy sustainable?",
        "qualityGate": "Advocate program thriving"
      }
    ]
  },
  "value-based-pricing": {
    "stages": [
      {
        "name": "Value Analysis",
        "objective": "Quantify value delivered by product to customers",
        "input": "Customer data, ROI studies, industry benchmarks",
        "output": "Value assessment framework with value drivers",
        "activities": "Analyze customer financial outcomes, identify value drivers by segment, quantify time savings, quantify cost reductions, quantify revenue increases",
        "tools": "Financial analysis, ROI models, value frameworks",
        "roles": "Product marketing (lead), Finance (modeling), Sales (validation)",
        "successMetric": "Value framework with 3-5 value drivers documented",
        "decisionPoints": "Value drivers clear? Quantifiable? Customer-validated? Segment variations?",
        "qualityGate": "Value analysis complete, drivers validated by sales/customers",
        "source": "doc"
      },
      {
        "name": "Willingness-to-Pay Research",
        "objective": "Understand what customers will pay for product",
        "input": "Value analysis, customer segments, competitive offerings",
        "output": "Willingness-to-pay curves by segment",
        "activities": "Conduct customer interviews, analyze historical pricing responses, test pricing elasticity, segment by value perception, identify price sensitivity",
        "tools": "Research methodologies, pricing analysis tools",
        "roles": "Market research (lead), Sales (interviews), Analytics (analysis)",
        "successMetric": "Willingness-to-pay curves defined for 3+ segments",
        "decisionPoints": "Price sensitivity understood? Willingness clear? Variations by segment? Optimal price identified?",
        "qualityGate": "Willingness-to-pay research complete, price ranges identified",
        "source": "doc"
      },
      {
        "name": "Pricing Model Development",
        "objective": "Design pricing model reflecting value delivered",
        "input": "Value analysis, willingness-to-pay, business model",
        "output": "Proposed pricing model with economics",
        "activities": "Design pricing approach (value-based, usage-based, tiering), model financial impact, assess competitive positioning, model revenue impact, document assumptions",
        "tools": "Pricing models, financial modeling",
        "roles": "Finance (modeling), Product marketing (positioning), Sales (feasibility)",
        "successMetric": "Pricing model designed with financial modeling complete",
        "decisionPoints": "Model reflects value? Financial impact acceptable? Competitive positioning? Sales willing to sell?",
        "qualityGate": "Pricing model approved, economic model validated",
        "source": "doc"
      },
      {
        "name": "Competitive Benchmarking",
        "objective": "Validate pricing against competitive offerings",
        "input": "Competitor pricing, competitor features, value positioning",
        "output": "Competitive price positioning analysis",
        "activities": "Research competitor pricing, assess feature/value comparison, identify price positioning (premium/parity/discount), assess customer perception",
        "tools": "Competitive intelligence, pricing databases",
        "roles": "Competitive intelligence (research), Product (comparison)",
        "successMetric": "Competitive positioning analyzed and documented",
        "decisionPoints": "Pricing premium justified? Value perception clear? Competitive differentiation evident?",
        "qualityGate": "Competitive analysis complete, positioning validated",
        "source": "doc"
      },
      {
        "name": "Test & Validation",
        "objective": "Test pricing model before full launch",
        "input": "Proposed pricing model, test customers, sales process",
        "output": "Validated pricing model with customer feedback",
        "activities": "Test with select customers, measure price acceptance, measure sales cycle impact, gather qualitative feedback, refine model based on learning",
        "tools": "A/B testing, pilot programs",
        "roles": "Sales (testing), Product (measurement)",
        "successMetric": "Pricing tested with 10-20 customers, acceptance validated",
        "decisionPoints": "Customers accept pricing? Sales adoption? Messaging clear? Objections identified?",
        "qualityGate": "Pricing validated, sales team confident, launch ready",
        "source": "doc"
      }
    ],
    "source": "doc"
  },
  "product-tiers-edition-strategy": {
    "stages": [
      {
        "name": "Customer Segmentation for Packaging",
        "objective": "Identify distinct customer segments for separate product tiers",
        "input": "Customer data, use case analysis, revenue data",
        "output": "Segment definition with tier recommendations",
        "activities": "Segment customers by use case, segment by company size, segment by value perception, assess willingness to pay variations, identify tier boundaries",
        "tools": "Segmentation analysis",
        "roles": "Product marketing (segmentation), Sales (validation)",
        "successMetric": "3-4 distinct segments identified with tier potential",
        "decisionPoints": "Segments distinct? Separate use cases? Pricing variations justified?",
        "qualityGate": "Segment definition finalized, tier structure proposed",
        "source": "doc"
      },
      {
        "name": "Feature Mapping & Tier Definition",
        "objective": "Map features to tiers and define each tier clearly",
        "input": "Feature roadmap, segment use cases, competitive tiers",
        "output": "Tier definitions with feature allocations",
        "activities": "Map features to each tier, define differentiators between tiers, establish feature upgrade paths, ensure tier appeal for each segment",
        "tools": "Feature mapping, tier templates",
        "roles": "Product (feature prioritization), Product marketing (tier design)",
        "successMetric": "3-4 tiers defined with clear feature differentiation",
        "decisionPoints": "Tiers distinct? Feature allocation optimal? Upgrade paths clear? Pricing justified?",
        "qualityGate": "Tier definitions approved, feature mapping validated",
        "source": "doc"
      },
      {
        "name": "Pricing Structure & Tier Economics",
        "objective": "Price each tier and model economics",
        "input": "Tier definitions, value analysis, competitive pricing",
        "output": "Pricing structure with financial modeling",
        "activities": "Price each tier based on value, model revenue impact by tier, assess cannibalization risk, model growth trajectory, identify margin implications",
        "tools": "Pricing models, financial modeling",
        "roles": "Finance (modeling), Product marketing (strategy)",
        "successMetric": "Pricing structure with financial model complete",
        "decisionPoints": "Price gaps appropriate? Revenue modeling realistic? Margins acceptable?",
        "qualityGate": "Tier pricing approved, financial model validated",
        "source": "doc"
      },
      {
        "name": "Messaging & Positioning",
        "objective": "Create compelling messaging for each tier",
        "input": "Tier definitions, value propositions, segment needs",
        "output": "Messaging framework for each tier",
        "activities": "Develop tier naming, create tier value props, develop comparison messaging, create upgrade paths narrative, identify target buyers per tier",
        "tools": "Messaging templates",
        "roles": "Product marketing (messaging), Sales (validation)",
        "successMetric": "Tier messaging developed for all tiers",
        "decisionPoints": "Messaging clear? Differentiation evident? Customer-resonant? Upgrade paths enticing?",
        "qualityGate": "Messaging approved, ready for sales/marketing",
        "source": "doc"
      }
    ],
    "source": "doc"
  },
  "add-on-module-pricing": {
    "stages": [
      {
        "name": "Add-On & Module Identification",
        "objective": "Identify potential add-on products and modules",
        "input": "Product roadmap, customer requests, competitive offerings",
        "output": "Prioritized add-on/module list",
        "activities": "Analyze customer expansion requests, identify product gaps, research competitor add-ons, assess technical feasibility, prioritize by demand",
        "tools": "Product research, customer feedback",
        "roles": "Product (identification), Sales (customer feedback)",
        "successMetric": "5-10 add-on candidates identified",
        "decisionPoints": "Add-ons valuable? Technical feasible? Market demand?",
        "qualityGate": "Add-on candidates prioritized",
        "source": "doc"
      },
      {
        "name": "Value Assessment & Willingness to Pay",
        "objective": "Quantify value and price sensitivity for add-ons",
        "input": "Add-on descriptions, customer data, use cases",
        "output": "Value assessment with pricing recommendations",
        "activities": "Analyze customer willingness to pay, quantify value per segment, assess price sensitivity, estimate addressable market",
        "tools": "Pricing research, customer interviews",
        "roles": "Product marketing (assessment), Finance (modeling)",
        "successMetric": "Value and pricing assessed for all add-ons",
        "decisionPoints": "Value clear? WTP realistic? Pricing opportunities?",
        "qualityGate": "Value assessment complete",
        "source": "doc"
      },
      {
        "name": "Add-On Packaging & Bundling",
        "objective": "Design packaging and bundling strategies",
        "input": "Add-ons identified, pricing data, customer segments",
        "output": "Packaging and bundling recommendations",
        "activities": "Design standalone vs. bundled options, identify bundling themes, assess bundling ROI, plan upgrade paths",
        "tools": "Packaging templates",
        "roles": "Product marketing (design)",
        "successMetric": "Packaging strategy documented",
        "decisionPoints": "Packaging resonant? Bundling opportunities? Cannibalization risk?",
        "qualityGate": "Packaging strategy approved",
        "source": "doc"
      },
      {
        "name": "Pricing Model Development",
        "objective": "Develop pricing for add-on products",
        "input": "Packaging strategy, value assessment, competitive pricing",
        "output": "Approved add-on pricing",
        "activities": "Price standalone options, price bundled options, model revenue impact, set discount policies, model margin impact",
        "tools": "Pricing models, financial modeling",
        "roles": "Finance (lead), Product marketing (input)",
        "successMetric": "Add-on pricing established",
        "decisionPoints": "Pricing competitive? Revenue modeling realistic? Margins acceptable?",
        "qualityGate": "Pricing approved and ready for launch",
        "source": "doc"
      },
      {
        "name": "Sales & Marketing Enablement",
        "objective": "Enable sales and marketing to sell add-ons",
        "input": "Add-on pricing, packaging, business case",
        "output": "Sales and marketing teams ready",
        "activities": "Train sales on add-ons, create marketing materials, develop add-on positioning, identify target buyers, create bundling recommendations",
        "tools": "Training materials, sales enablement",
        "roles": "Sales enablement (training), Marketing (materials)",
        "successMetric": "Sales and marketing trained and equipped",
        "decisionPoints": "Team confident? Materials compelling? Positioning clear?",
        "qualityGate": "Teams ready to sell",
        "source": "doc"
      },
      {
        "name": "Add-On Launch & Go-to-Market",
        "objective": "Launch add-ons to market",
        "input": "Pricing, sales enablement, marketing plan",
        "output": "Add-ons launched and being sold",
        "activities": "Announce add-ons, execute marketing campaign, support sales efforts, track adoption, gather feedback",
        "tools": "Marketing platforms, CRM",
        "roles": "Marketing (campaign), Sales (selling)",
        "successMetric": "Add-ons launched, initial adoption visible",
        "decisionPoints": "Launch smooth? Adoption rates healthy? Customer reaction positive?",
        "qualityGate": "Add-ons in market with tracking active",
        "source": "doc"
      }
    ],
    "source": "doc"
  },
  "a-b-testing-for-pricing-packaging": {
    "stages": [
      {
        "name": "Hypothesis Development",
        "objective": "Define what pricing hypothesis to test",
        "input": "Pricing concerns, customer feedback, competitive data",
        "output": "Clear test hypothesis with success metrics",
        "activities": "Identify pricing question to answer, develop hypothesis, define primary metric, define success threshold, estimate sample size needed",
        "tools": "Hypothesis templates, statistical calculators",
        "roles": "Analytics (design), Product marketing (hypothesis)",
        "successMetric": "Hypothesis documented and approved",
        "decisionPoints": "Hypothesis clear? Metric meaningful? Sample size adequate?",
        "qualityGate": "Hypothesis approved",
        "source": "doc"
      },
      {
        "name": "Test Design & Setup",
        "objective": "Design pricing test",
        "input": "Hypothesis, pricing options, customer segments",
        "output": "Test design with implementation plan",
        "activities": "Design test structure (A/B, multivariate), select test variables, identify test audience, plan control group, design randomization",
        "tools": "A/B testing platforms",
        "roles": "Analytics (design), Marketing (logistics)",
        "successMetric": "Test design complete",
        "decisionPoints": "Test design rigorous? Control group appropriate? Randomization sound?",
        "qualityGate": "Test ready to launch",
        "source": "doc"
      },
      {
        "name": "Test Implementation & Launch",
        "objective": "Launch pricing test",
        "input": "Test design, pricing options",
        "output": "Test active with control and test groups",
        "activities": "Set up test in platform, configure pricing variations, randomize customer assignments, track implementation",
        "tools": "A/B testing platform, pricing system",
        "roles": "Engineering (setup), Analytics (monitoring)",
        "successMetric": "Test live with proper randomization",
        "decisionPoints": "Randomization working? Groups balanced? Tracking accurate?",
        "qualityGate": "Test live and tracking properly",
        "source": "doc"
      },
      {
        "name": "Data Collection & Monitoring",
        "objective": "Collect test data and monitor progress",
        "input": "Test active, customer interactions",
        "output": "Sufficient data for statistical analysis",
        "activities": "Monitor test progress, check for issues, collect response data, monitor for bias, track statistical power",
        "tools": "Analytics dashboards, monitoring",
        "roles": "Analytics (monitoring)",
        "successMetric": "Sufficient data collected (90%+ power)",
        "decisionPoints": "Data quality good? Sufficient sample? Time to run test?",
        "qualityGate": "Data collection complete",
        "source": "doc"
      },
      {
        "name": "Results Analysis & Statistical Testing",
        "objective": "Analyze test results statistically",
        "input": "Test data, control and test groups",
        "output": "Statistical analysis with findings",
        "activities": "Run statistical tests, calculate effect sizes, assess significance, analyze by segment, identify learnings",
        "tools": "Statistical analysis software",
        "roles": "Analytics (analysis)",
        "successMetric": "Analysis complete with clear results",
        "decisionPoints": "Results significant? Effect size meaningful? Learnings clear?",
        "qualityGate": "Analysis approved",
        "source": "doc"
      },
      {
        "name": "Recommendation & Decision",
        "objective": "Develop recommendation based on results",
        "input": "Analysis results, business implications",
        "output": "Recommendation to leadership",
        "activities": "Develop recommendation (change, don't change, test more), model business impact, assess risk, present to leadership",
        "tools": "Recommendation templates",
        "roles": "Analytics (recommendation), Product marketing (business impact)",
        "successMetric": "Recommendation presented",
        "decisionPoints": "Recommendation clear? Business impact quantified? Risk assessed?",
        "qualityGate": "Leadership decision made",
        "source": "doc"
      },
      {
        "name": "Rollout & Impact Monitoring",
        "objective": "Implement decision and monitor impact",
        "input": "Leadership decision, implementation plan",
        "output": "Successfully implemented with results tracked",
        "activities": "Implement pricing change or run next test, monitor impact on revenue, monitor customer satisfaction, track adoption",
        "tools": "Analytics, CRM",
        "roles": "Product (implementation), Analytics (monitoring)",
        "successMetric": "Decision implemented, impact tracked",
        "decisionPoints": "Implementation smooth? Impact as expected?",
        "qualityGate": "Results being monitored and communicated",
        "source": "doc"
      }
    ],
    "source": "doc"
  },
  "price-increase-management": {
    "stages": [
      {
        "name": "Pricing Increase Justification",
        "objective": "Develop business justification for price increase",
        "input": "Cost structure, market conditions, competitor pricing, value delivered",
        "output": "Documented justification for increase",
        "activities": "Analyze cost inflation, assess value delivered, benchmark against competitors, quantify justification, identify timing",
        "tools": "Financial analysis",
        "roles": "Finance (justification), Product (value)",
        "successMetric": "Justification documented",
        "decisionPoints": "Justification compelling? Timing right? Value clear?",
        "qualityGate": "Justification approved by leadership",
        "source": "doc"
      },
      {
        "name": "Customer Impact Analysis",
        "objective": "Assess impact of increase on customer segments",
        "input": "Pricing increase, customer list, contract terms",
        "output": "Segmented impact analysis with risk assessment",
        "activities": "Segment customers by renewal date, assess increase impact per segment, identify churn risk, calculate revenue impact, identify negotiation cases",
        "tools": "Customer analytics, financial modeling",
        "roles": "Analytics (impact), Sales (risk assessment)",
        "successMetric": "Impact analyzed by segment with risk identified",
        "decisionPoints": "Impact manageable? Churn risk acceptable? Revenue impact positive?",
        "qualityGate": "Impact assessment approved",
        "source": "doc"
      },
      {
        "name": "Tiered Implementation Strategy",
        "objective": "Develop strategy for phased price increase",
        "input": "Impact analysis, customer risk tiers",
        "output": "Implementation strategy with timing",
        "activities": "Define increase amount by segment, plan effective date, identify negotiation strategy for at-risk accounts, plan communication timeline",
        "tools": "Implementation planning",
        "roles": "Sales leadership (strategy), Finance (timing)",
        "successMetric": "Tiered strategy documented",
        "decisionPoints": "Tiers meaningful? Timing logical? Negotiation approach clear?",
        "qualityGate": "Implementation strategy approved",
        "source": "doc"
      },
      {
        "name": "Communication Planning",
        "objective": "Plan communication strategy for price increase",
        "input": "Tiered strategy, messaging approach",
        "output": "Communication plan and materials",
        "activities": "Draft customer communication, prepare sales talking points, prepare customer success messaging, develop Q&A, plan escalation path",
        "tools": "Communication templates",
        "roles": "Marketing (comms), Sales (talking points)",
        "successMetric": "Communication plan and materials ready",
        "decisionPoints": "Messaging positive? Justification clear? Support adequate?",
        "qualityGate": "Communications approved",
        "source": "doc"
      },
      {
        "name": "Price Increase Implementation",
        "objective": "Execute price increase across customer base",
        "input": "Communication plan, tiered strategy",
        "output": "Price increase implemented with customer communication",
        "activities": "Send customer communications, support sales/CSM conversations, process negotiated deals, update billing systems, monitor customer reaction",
        "tools": "Email, CRM, billing system",
        "roles": "Marketing (communication), Sales (conversations), Operations (billing)",
        "successMetric": "Increase communicated, billing updated for all customers",
        "decisionPoints": "Communication received well? Churn risk realized? Negotiated deals within tolerance?",
        "qualityGate": "Increase fully implemented",
        "source": "doc"
      },
      {
        "name": "Renewal & Negotiation Management",
        "objective": "Manage renewals post-price increase",
        "input": "Customer communication, negotiation strategy",
        "output": "Renewals closed at new pricing",
        "activities": "Handle price increase objections, negotiate with at-risk accounts, close renewals, document learnings",
        "tools": "CRM, negotiation templates",
        "roles": "Sales (negotiation), CSM (relationships)",
        "successMetric": "Renewals processed, churn tracked",
        "decisionPoints": "Churn rate acceptable? Negotiated discounts within budget?",
        "qualityGate": "Renewals complete with results analyzed",
        "source": "doc"
      },
      {
        "name": "Results Monitoring & Optimization",
        "objective": "Monitor impact and optimize approach",
        "input": "Renewal results, churn data, revenue impact",
        "output": "Results analyzed with recommendations",
        "activities": "Track actual churn vs. projection, calculate revenue impact, gather customer feedback, identify learnings for future increases",
        "tools": "Analytics, customer feedback",
        "roles": "Analytics (analysis), Sales (feedback)",
        "successMetric": "Results analyzed, learnings documented",
        "decisionPoints": "Impact as expected? Learnings captured? Strategy improved?",
        "qualityGate": "Learnings applied to future pricing decisions",
        "source": "doc"
      }
    ],
    "source": "doc"
  },
  "renewal-pricing-escalation": {
    "stages": [
      {
        "name": "Renewal Pricing Analysis",
        "objective": "Analyze historical renewal pricing patterns",
        "input": "Renewal data, customer history, pricing by segment",
        "output": "Renewal pricing analysis with patterns",
        "activities": "Analyze historical renewal price changes, segment by customer type, identify escalation patterns, assess elasticity, identify opportunities",
        "tools": "Customer data, pricing analysis",
        "roles": "Analytics (analysis), Finance (pricing)",
        "successMetric": "Pricing analysis documented",
        "decisionPoints": "Patterns clear? Escalation opportunities? Risk identified?",
        "qualityGate": "Analysis complete",
        "source": "doc"
      },
      {
        "name": "Escalation Strategy Development",
        "objective": "Develop renewal escalation strategy",
        "input": "Pricing analysis, competitive pricing, market conditions",
        "output": "Escalation strategy with approach",
        "activities": "Define escalation approach (annual increases, usage-based, market-based), set escalation rates by segment, identify negotiation boundaries",
        "tools": "Strategy templates",
        "roles": "Finance (strategy), Sales (reality check)",
        "successMetric": "Escalation strategy documented",
        "decisionPoints": "Strategy realistic? Competitive? Acceptable to customers?",
        "qualityGate": "Strategy approved",
        "source": "doc"
      },
      {
        "name": "Segment-Specific Escalation Plans",
        "objective": "Develop customized escalation for each customer segment",
        "input": "Escalation strategy, customer segments",
        "output": "Segment-specific pricing plans",
        "activities": "Develop tiered pricing by segment, identify at-risk customers, plan negotiation thresholds, prepare sales guidance",
        "tools": "Pricing templates",
        "roles": "Sales leadership (segmentation), Finance (pricing)",
        "successMetric": "Pricing plans for all segments",
        "decisionPoints": "Differentiation meaningful? Fair pricing? Competitive?",
        "qualityGate": "Segment plans approved",
        "source": "doc"
      },
      {
        "name": "Communication & Sales Preparation",
        "objective": "Prepare sales team for renewal pricing conversations",
        "input": "Escalation strategy, customer-specific pricing",
        "output": "Trained sales team ready for conversations",
        "activities": "Train sales on escalation rationale, provide customer talking points, provide negotiation guidance, distribute pricing sheets, practice objection handling",
        "tools": "Training materials, talking points, negotiation guides",
        "roles": "Sales enablement (training)",
        "successMetric": "Sales team trained and prepared",
        "decisionPoints": "Team confident? Messaging clear? Objection handling ready?",
        "qualityGate": "Sales ready for conversations",
        "source": "doc"
      },
      {
        "name": "Renewal Pricing Negotiation",
        "objective": "Negotiate renewal pricing with customers",
        "input": "Escalation strategy, customer-specific pricing, negotiation guidance",
        "output": "Negotiated renewal pricing agreed",
        "activities": "Present pricing, explain rationale, address objections, negotiate within guidelines, close renewals",
        "tools": "CRM, negotiation templates",
        "roles": "Sales (negotiation), CSM (relationship)",
        "successMetric": "Renewals closed at target pricing or better",
        "decisionPoints": "Pricing accepted? Negotiations within tolerance? Customer satisfied?",
        "qualityGate": "Renewals complete",
        "source": "doc"
      },
      {
        "name": "Results Monitoring & Analysis",
        "objective": "Monitor renewal pricing results",
        "input": "Renewal agreements, pricing achieved",
        "output": "Results analysis with impact assessment",
        "activities": "Track average pricing achieved vs. target, segment performance, analyze negotiated discounts, calculate revenue impact",
        "tools": "Analytics, CRM data",
        "roles": "Analytics (analysis), Finance (impact)",
        "successMetric": "Results analyzed and reported",
        "decisionPoints": "Targets met? Discount rates acceptable? Revenue impact positive?",
        "qualityGate": "Results documented and learnings captured",
        "source": "doc"
      },
      {
        "name": "Continuous Optimization",
        "objective": "Optimize renewal pricing strategy",
        "input": "Results data, customer feedback, market changes",
        "output": "Refined strategy for next cycle",
        "activities": "Analyze what worked, identify improvements, adjust escalation rates, update customer communication, plan next cycle",
        "tools": "Optimization frameworks",
        "roles": "Finance (optimization)",
        "successMetric": "Strategy refined and documented",
        "decisionPoints": "Learnings captured? Strategy improved? Prepared for next cycle?",
        "qualityGate": "Next cycle strategy ready",
        "source": "doc"
      }
    ],
    "source": "doc"
  },
  "competitive-pricing": {
    "stages": [
      {
        "name": "Competitor Research",
        "objective": "Map competitor price and positioning.",
        "input": "Competitor list, market data",
        "output": "Competitive pricing landscape",
        "activities": "Identify competitors, gather price points, capture positioning",
        "tools": "Exa, Apify, win/loss data",
        "roles": "Pricing lead · marketing",
        "successMetric": "Pricing landscape documented",
        "decisionPoints": "Who are we really compared against?",
        "qualityGate": "Go: landscape clear. Loop back: missing competitors.",
        "source": "authored"
      },
      {
        "name": "Pricing Tracking",
        "objective": "Keep competitor pricing current.",
        "input": "Pricing landscape, monitoring cadence",
        "output": "Updated competitive price data",
        "activities": "Monitor changes, log updates, flag shifts",
        "tools": "Exa, price-monitoring",
        "roles": "Pricing analyst",
        "successMetric": "Prices tracked on a cadence",
        "decisionPoints": "Has anyone moved materially?",
        "qualityGate": "Go: data current. Loop back: stale pricing.",
        "source": "authored"
      },
      {
        "name": "Feature Comparison",
        "objective": "Compare offers on the dimensions that matter.",
        "input": "Competitor pricing, feature sets",
        "output": "Feature-by-feature comparison",
        "activities": "Compare features, map value, find gaps",
        "tools": "Comparison matrix",
        "roles": "Pricing · product",
        "successMetric": "Honest comparison built",
        "decisionPoints": "Where do we lead, where do we lag?",
        "qualityGate": "Go: comparison complete. Loop back: gaps unknown.",
        "source": "authored"
      },
      {
        "name": "Positioning",
        "objective": "Set price relative to value and competition.",
        "input": "Comparison, cost, value data",
        "output": "Price positioning decision",
        "activities": "Decide where to sit in the market, set the anchor",
        "tools": "Pricing framework",
        "roles": "Pricing lead · leadership",
        "successMetric": "Positioning decided",
        "decisionPoints": "Do we lead on value or compete on price?",
        "qualityGate": "Go: positioning agreed. Loop back: unclear.",
        "source": "authored"
      },
      {
        "name": "Differentiation",
        "objective": "Justify the price with a difference.",
        "input": "Positioning, product capabilities",
        "output": "Differentiation story",
        "activities": "Articulate the difference, tie to price",
        "tools": "Messaging framework",
        "roles": "Marketing · pricing",
        "successMetric": "Differentiation articulated",
        "decisionPoints": "Is the difference real to the buyer?",
        "qualityGate": "Go: difference defensible. Loop back: price vs value gap.",
        "source": "authored"
      },
      {
        "name": "Messaging",
        "objective": "Put the price-value story into words.",
        "input": "Differentiation, buyer personas",
        "output": "Pricing messaging",
        "activities": "Write price-value messaging, train the narrative",
        "tools": "Claude, messaging library",
        "roles": "Marketing · sales",
        "successMetric": "Messaging in use",
        "decisionPoints": "Does the story hold against competitors?",
        "qualityGate": "Go: story tested. Loop back: doesn't land.",
        "source": "authored"
      },
      {
        "name": "Sales Training",
        "objective": "Equip sales to defend the price.",
        "input": "Messaging, objection data",
        "output": "Trained sales team",
        "activities": "Train on price-value story, objections, trade-offs",
        "tools": "Playbook, training",
        "roles": "Enablement",
        "successMetric": "Sales can defend price",
        "decisionPoints": "Can reps hold price in the field?",
        "qualityGate": "Go: reps ready. Loop back: objections unanswered.",
        "source": "authored"
      },
      {
        "name": "Monitoring",
        "objective": "Watch the market and react.",
        "input": "Competitor moves, deal feedback",
        "output": "Signal of shifts",
        "activities": "Monitor wins/losses and competitor changes",
        "tools": "Dashboards, win/loss",
        "roles": "Pricing analyst",
        "successMetric": "Shifts detected early",
        "decisionPoints": "Is the market moving against us?",
        "qualityGate": "Go: monitoring active. Loop back: blind to moves.",
        "source": "authored"
      },
      {
        "name": "Analysis",
        "objective": "Learn and adjust pricing.",
        "input": "Performance, win/loss, competitor data",
        "output": "Pricing adjustments",
        "activities": "Review what works, adjust price or positioning",
        "tools": "Analytics",
        "roles": "Pricing lead",
        "successMetric": "Pricing improved",
        "decisionPoints": "What should change?",
        "qualityGate": "Go: adjustments made. Loop back: no learning.",
        "source": "authored"
      }
    ],
    "source": "authored"
  },
  "enterprise-custom-pricing": {
    "stages": [
      {
        "name": "Deal Identified",
        "objective": "Spot the deal that needs custom pricing.",
        "input": "Pipeline, deal signals",
        "output": "Flagged custom deal",
        "activities": "Identify complexity signals, flag for pricing",
        "tools": "CRM",
        "roles": "AE · pricing",
        "successMetric": "Deal flagged early",
        "decisionPoints": "Is this deal beyond standard pricing?",
        "qualityGate": "Go: flagged. Loop back: missed.",
        "source": "authored"
      },
      {
        "name": "Complexity Assessment",
        "objective": "Understand what makes this deal hard.",
        "input": "Deal context, requirements",
        "output": "Complexity profile",
        "activities": "Assess scope, stakeholders, custom needs",
        "tools": "Deal analysis",
        "roles": "Pricing · sales",
        "successMetric": "Complexity documented",
        "decisionPoints": "What drives the price?",
        "qualityGate": "Go: complexity clear. Loop back: unknowns.",
        "source": "authored"
      },
      {
        "name": "Approval Process",
        "objective": "Route pricing decisions through the right authority.",
        "input": "Complexity profile, price request",
        "output": "Approved pricing authority",
        "activities": "Apply approval thresholds, get sign-off",
        "tools": "Governance process",
        "roles": "Pricing · leadership",
        "successMetric": "Authority exercised",
        "decisionPoints": "Who approves this discount level?",
        "qualityGate": "Go: approved. Loop back: no authority.",
        "source": "authored"
      },
      {
        "name": "Proposal",
        "objective": "Price the solution, then the package.",
        "input": "Approved pricing, solution scope",
        "output": "Custom proposal",
        "activities": "Build the proposal, justify the price on value",
        "tools": "Proposal tools, ROI",
        "roles": "AE · pricing",
        "successMetric": "Proposal delivered",
        "decisionPoints": "Does the price reflect the value?",
        "qualityGate": "Go: proposal strong. Loop back: price unjustified.",
        "source": "authored"
      },
      {
        "name": "Negotiation Authority",
        "objective": "Define who can concede what.",
        "input": "Proposal, deal economics",
        "output": "Negotiation guardrails",
        "activities": "Set discount authority, define tradeables",
        "tools": "Pricing policy",
        "roles": "Pricing · leadership",
        "successMetric": "Guardrails clear",
        "decisionPoints": "What are we willing to trade?",
        "qualityGate": "Go: authority defined. Loop back: ad hoc discounts.",
        "source": "authored"
      },
      {
        "name": "Deal Structure",
        "objective": "Shape the deal that protects margin.",
        "input": "Negotiation outcome, terms",
        "output": "Structured deal",
        "activities": "Finalize structure, phasing, terms",
        "tools": "Deal desk",
        "roles": "Sales · pricing",
        "successMetric": "Deal structured",
        "decisionPoints": "Is the structure fair and firm?",
        "qualityGate": "Go: structured. Loop back: margin eroding.",
        "source": "authored"
      },
      {
        "name": "Signature",
        "objective": "Close the deal.",
        "input": "Final terms",
        "output": "Signed contract",
        "activities": "Get signature, hand off to CS",
        "tools": "E-sign, CRM",
        "roles": "AE",
        "successMetric": "Closed and handed off",
        "decisionPoints": "Is everything captured?",
        "qualityGate": "Go: signed. Loop back: stalls.",
        "source": "authored"
      },
      {
        "name": "CRM Track",
        "objective": "Record the deal and its pricing.",
        "input": "Signed deal",
        "output": "Accurate CRM record",
        "activities": "Log pricing, terms, learnings",
        "tools": "CRM",
        "roles": "Sales ops",
        "successMetric": "Deal recorded",
        "decisionPoints": "Is the record clean?",
        "qualityGate": "Go: tracked. Loop back: missing data.",
        "source": "authored"
      },
      {
        "name": "Learning",
        "objective": "Improve the next custom deal.",
        "input": "Deal outcomes, negotiation history",
        "output": "Pricing learnings",
        "activities": "Review what worked, update policy",
        "tools": "Review cadence",
        "roles": "Pricing lead",
        "successMetric": "Policy improved",
        "decisionPoints": "What should change next time?",
        "qualityGate": "Go: learnings applied. Loop back: repeat mistakes.",
        "source": "authored"
      }
    ],
    "source": "authored"
  },
  "competitive-analysis": {
    "stages": [
      {
        "name": "Competitor List",
        "objective": "Define the field you compete with.",
        "input": "Market knowledge",
        "output": "Prioritized competitor set",
        "activities": "List competitors, prioritize by relevance",
        "tools": "Exa, Apify, win/loss data",
        "roles": "RevOps · marketing",
        "successMetric": "Competitor set defined",
        "decisionPoints": "Who do we actually lose to?",
        "qualityGate": "Go: list complete. Loop back: blind spots.",
        "source": "doc"
      },
      {
        "name": "Info Gathering",
        "objective": "Collect current intel on each competitor.",
        "input": "Competitor list",
        "output": "Intel pack per competitor",
        "activities": "Gather features, pricing, messaging, positioning",
        "tools": "Exa, Apify, Tavily",
        "roles": "Market intelligence",
        "successMetric": "Intel current on all",
        "decisionPoints": "Is the intel current?",
        "qualityGate": "Go: intel fresh. Loop back: stale data.",
        "source": "doc"
      },
      {
        "name": "Feature Comparison",
        "objective": "Compare offers feature by feature.",
        "input": "Intel packs",
        "output": "Feature comparison",
        "activities": "Map features, find gaps, note trade-offs",
        "tools": "Comparison matrix",
        "roles": "Product · marketing",
        "successMetric": "Honest comparison",
        "decisionPoints": "Where do we lead and lag?",
        "qualityGate": "Go: comparison built. Loop back: gaps unknown.",
        "source": "doc"
      },
      {
        "name": "Pricing",
        "objective": "Compare pricing and positioning.",
        "input": "Feature comparison, market data",
        "output": "Pricing comparison",
        "activities": "Compare price points, packaging, tiers",
        "tools": "Exa, pricing data",
        "roles": "Pricing",
        "successMetric": "Pricing landscape clear",
        "decisionPoints": "Are we priced competitively?",
        "qualityGate": "Go: pricing mapped. Loop back: surprises.",
        "source": "doc"
      },
      {
        "name": "Messaging",
        "objective": "Compare how each competitor sells.",
        "input": "Positioning, messaging samples",
        "output": "Messaging comparison",
        "activities": "Compare value props, angles, proof",
        "tools": "Messaging library",
        "roles": "Marketing",
        "successMetric": "Messaging mapped",
        "decisionPoints": "What story are they telling?",
        "qualityGate": "Go: messaging understood. Loop back: unclear.",
        "source": "doc"
      },
      {
        "name": "Win/Loss",
        "objective": "Learn from deals won and lost.",
        "input": "Deal outcomes",
        "output": "Win/loss patterns",
        "activities": "Analyze why we win and lose vs each",
        "tools": "Win/loss database",
        "roles": "Sales · analytics",
        "successMetric": "Patterns identified",
        "decisionPoints": "What actually decides deals?",
        "qualityGate": "Go: patterns clear. Loop back: no data.",
        "source": "doc"
      },
      {
        "name": "Insight Summary",
        "objective": "Synthesize into actionable insight.",
        "input": "All analysis",
        "output": "Insight brief",
        "activities": "Combine findings, prioritize implications",
        "tools": "Synthesis",
        "roles": "Analytics lead",
        "successMetric": "Insight documented",
        "decisionPoints": "What matters most?",
        "qualityGate": "Go: insight sharp. Loop back: vague.",
        "source": "doc"
      },
      {
        "name": "Sharing",
        "objective": "Put intel in the hands of the team.",
        "input": "Insight brief",
        "output": "Shared competitive intel",
        "activities": "Distribute, train, embed in sales motion",
        "tools": "Notion, Slack",
        "roles": "Marketing · sales enablement",
        "successMetric": "Intel adopted",
        "decisionPoints": "Do reps use it?",
        "qualityGate": "Go: shared and used. Loop back: buried.",
        "source": "doc"
      },
      {
        "name": "Monitoring",
        "objective": "Keep the intel current.",
        "input": "Ongoing signals",
        "output": "Updated intel",
        "activities": "Monitor changes on a cadence, refresh",
        "tools": "Dashboards",
        "roles": "Market intelligence",
        "successMetric": "Intel stays fresh",
        "decisionPoints": "What changed this month?",
        "qualityGate": "Go: monitoring active. Loop back: stale again.",
        "source": "doc"
      }
    ],
    "source": "doc"
  },
  "market-research": {
    "stages": [
      {
        "name": "Research Questions",
        "objective": "Decide what the research must answer.",
        "input": "Business question",
        "output": "Research brief",
        "activities": "Define questions, scope, success criteria",
        "tools": "Notion",
        "roles": "Founder · strategy",
        "successMetric": "Clear research brief",
        "decisionPoints": "What decision does this inform?",
        "qualityGate": "Go: questions sharp. Loop back: vague.",
        "source": "authored"
      },
      {
        "name": "Methodology",
        "objective": "Choose how you will find out.",
        "input": "Research brief",
        "output": "Methodology plan",
        "activities": "Pick primary/secondary mix, samples, tools",
        "tools": "Research toolkit",
        "roles": "Analytics · strategy",
        "successMetric": "Methodology chosen",
        "decisionPoints": "Is the method sound?",
        "qualityGate": "Go: method defensible. Loop back: weak.",
        "source": "authored"
      },
      {
        "name": "Primary/Secondary",
        "objective": "Run the research.",
        "input": "Methodology plan",
        "output": "Raw research data",
        "activities": "Interviews, surveys, desk research",
        "tools": "Survey tools, Exa",
        "roles": "Analytics",
        "successMetric": "Data collected",
        "decisionPoints": "Are we hearing the market or the echo?",
        "qualityGate": "Go: data gathered. Loop back: gaps.",
        "source": "authored"
      },
      {
        "name": "Data Collection",
        "objective": "Organize what you gathered.",
        "input": "Raw data",
        "output": "Clean dataset",
        "activities": "Clean, dedupe, structure the data",
        "tools": "Sheets, warehouse",
        "roles": "Data ops",
        "successMetric": "Clean dataset",
        "decisionPoints": "Is the data trustworthy?",
        "qualityGate": "Go: clean. Loop back: dirty.",
        "source": "authored"
      },
      {
        "name": "Analysis",
        "objective": "Turn data into findings.",
        "input": "Clean dataset",
        "output": "Findings",
        "activities": "Analyze patterns, test assumptions",
        "tools": "Analytics",
        "roles": "Analytics",
        "successMetric": "Findings documented",
        "decisionPoints": "What does the data actually say?",
        "qualityGate": "Go: findings clear. Loop back: noise.",
        "source": "authored"
      },
      {
        "name": "Insight Dev",
        "objective": "Turn findings into insight.",
        "input": "Findings",
        "output": "Insights",
        "activities": "Synthesize into what it means for strategy",
        "tools": "Synthesis",
        "roles": "Strategy",
        "successMetric": "Insights articulated",
        "decisionPoints": "So what?",
        "qualityGate": "Go: insight real. Loop back: observation.",
        "source": "authored"
      },
      {
        "name": "Presentation",
        "objective": "Put the insight in front of decision-makers.",
        "input": "Insights",
        "output": "Delivered research",
        "activities": "Present clearly, field questions",
        "tools": "Slides, Notion",
        "roles": "Analytics lead",
        "successMetric": "Presented and understood",
        "decisionPoints": "Did it land?",
        "qualityGate": "Go: received. Loop back: ignored.",
        "source": "authored"
      },
      {
        "name": "Recommendations",
        "objective": "Convert insight into action.",
        "input": "Insights, decisions",
        "output": "Recommendations",
        "activities": "Propose what to do, prioritize",
        "tools": "Strategy framework",
        "roles": "Leadership",
        "successMetric": "Recommendations adopted",
        "decisionPoints": "What do we change?",
        "qualityGate": "Go: action taken. Loop back: no follow-through.",
        "source": "authored"
      },
      {
        "name": "Monitoring",
        "objective": "Keep the research relevant.",
        "input": "Market changes",
        "output": "Updated research",
        "activities": "Refresh on a cadence, revisit assumptions",
        "tools": "Dashboards",
        "roles": "Strategy",
        "successMetric": "Research stays current",
        "decisionPoints": "Has the market moved?",
        "qualityGate": "Go: fresh. Loop back: stale.",
        "source": "authored"
      }
    ],
    "source": "authored"
  },
  "trend-analysis": {
    "stages": [
      {
        "name": "Info Gathering",
        "objective": "Collect the signals.",
        "input": "Sources, feeds",
        "output": "Signal pool",
        "activities": "Gather news, data, market signals",
        "tools": "Exa, Apify, feeds",
        "roles": "Market intelligence",
        "successMetric": "Signals collected",
        "decisionPoints": "Is it signal or noise?",
        "qualityGate": "Go: rich pool. Loop back: thin.",
        "source": "authored"
      },
      {
        "name": "Trend ID",
        "objective": "Spot the real trends.",
        "input": "Signal pool",
        "output": "Trend candidates",
        "activities": "Cluster signals into candidate trends",
        "tools": "Analysis",
        "roles": "Analytics",
        "successMetric": "Trends identified",
        "decisionPoints": "What is actually emerging?",
        "qualityGate": "Go: trends clear. Loop back: noise.",
        "source": "authored"
      },
      {
        "name": "Impact Assessment",
        "objective": "Judge what each trend means.",
        "input": "Trend candidates",
        "output": "Impact rating",
        "activities": "Assess likelihood and magnitude",
        "tools": "Assessment framework",
        "roles": "Strategy",
        "successMetric": "Impact scored",
        "decisionPoints": "Does it matter?",
        "qualityGate": "Go: impact clear. Loop back: unknown.",
        "source": "authored"
      },
      {
        "name": "Opportunity/Threat",
        "objective": "Sort into opportunities and threats.",
        "input": "Impact ratings",
        "output": "Opportunity/threat map",
        "activities": "Categorize, rank, assign owners",
        "tools": "Framework",
        "roles": "Strategy",
        "successMetric": "Map built",
        "decisionPoints": "Win or risk?",
        "qualityGate": "Go: mapped. Loop back: vague.",
        "source": "authored"
      },
      {
        "name": "Implications",
        "objective": "Work out what it means for us.",
        "input": "Opportunity/threat map",
        "output": "Implications",
        "activities": "Translate each trend into strategy impact",
        "tools": "Synthesis",
        "roles": "Leadership",
        "successMetric": "Implications clear",
        "decisionPoints": "So what changes?",
        "qualityGate": "Go: implications sharp. Loop back: abstract.",
        "source": "authored"
      },
      {
        "name": "Recommendations",
        "objective": "Turn implications into actions.",
        "input": "Implications",
        "output": "Recommendations",
        "activities": "Propose responses, prioritize",
        "tools": "Strategy",
        "roles": "Leadership",
        "successMetric": "Actions agreed",
        "decisionPoints": "What do we do?",
        "qualityGate": "Go: actions set. Loop back: no decisions.",
        "source": "authored"
      },
      {
        "name": "Strategic Planning",
        "objective": "Fold trends into the plan.",
        "input": "Recommendations",
        "output": "Updated strategy",
        "activities": "Weave into plans and roadmaps",
        "tools": "Planning",
        "roles": "Leadership",
        "successMetric": "Strategy updated",
        "decisionPoints": "Did it change the plan?",
        "qualityGate": "Go: integrated. Loop back: ignored.",
        "source": "authored"
      },
      {
        "name": "Monitoring",
        "objective": "Watch for the next shift.",
        "input": "Ongoing signals",
        "output": "Updated view",
        "activities": "Keep monitoring, revisit quarterly",
        "tools": "Dashboards",
        "roles": "Market intelligence",
        "successMetric": "View stays current",
        "decisionPoints": "Has the trend matured?",
        "qualityGate": "Go: watching. Loop back: blind.",
        "source": "authored"
      }
    ],
    "source": "authored"
  },
  "persona-research-definition": {
    "stages": [
      {
        "name": "Research Planning",
        "objective": "Plan how to learn about buyers.",
        "input": "Buyer segments",
        "output": "Research plan",
        "activities": "Define who to study, what to learn",
        "tools": "Planning",
        "roles": "Marketing · research",
        "successMetric": "Plan ready",
        "decisionPoints": "Which buyers matter?",
        "qualityGate": "Go: plan clear. Loop back: fuzzy.",
        "source": "doc"
      },
      {
        "name": "Data Collection",
        "objective": "Gather evidence on real buyers.",
        "input": "Research plan",
        "output": "Buyer data",
        "activities": "Interviews, surveys, CRM patterns, win/loss",
        "tools": "Survey tools, CRM",
        "roles": "Research",
        "successMetric": "Data collected",
        "decisionPoints": "Are we hearing buyers or stereotypes?",
        "qualityGate": "Go: rich data. Loop back: thin.",
        "source": "doc"
      },
      {
        "name": "Pattern Analysis",
        "objective": "Find the recurring themes.",
        "input": "Buyer data",
        "output": "Patterns",
        "activities": "Cluster pains, roles, criteria, triggers",
        "tools": "Analytics",
        "roles": "Analytics",
        "successMetric": "Patterns found",
        "decisionPoints": "What repeats across buyers?",
        "qualityGate": "Go: patterns clear. Loop back: noise.",
        "source": "doc"
      },
      {
        "name": "Persona Definition",
        "objective": "Write the personas.",
        "input": "Patterns",
        "output": "Persona docs",
        "activities": "Define roles, responsibilities, pains, buying criteria",
        "tools": "Docs",
        "roles": "Marketing",
        "successMetric": "Personas documented",
        "decisionPoints": "Is each persona distinct?",
        "qualityGate": "Go: personas real. Loop back: generic.",
        "source": "doc"
      },
      {
        "name": "Validation",
        "objective": "Check personas against reality.",
        "input": "Persona docs",
        "output": "Validated personas",
        "activities": "Validate with sales, interviews, data",
        "tools": "Feedback",
        "roles": "Marketing · sales",
        "successMetric": "Personas validated",
        "decisionPoints": "Do they hold up?",
        "qualityGate": "Go: validated. Loop back: wrong.",
        "source": "doc"
      },
      {
        "name": "Refinement",
        "objective": "Sharpen as you learn.",
        "input": "Feedback",
        "output": "Refined personas",
        "activities": "Iterate based on new evidence",
        "tools": "Docs",
        "roles": "Marketing",
        "successMetric": "Personas current",
        "decisionPoints": "What changed?",
        "qualityGate": "Go: refined. Loop back: static.",
        "source": "doc"
      },
      {
        "name": "Activation",
        "objective": "Put personas to work.",
        "input": "Personas",
        "output": "Personas in use",
        "activities": "Align targeting, messaging, content, sales",
        "tools": "Messaging, content",
        "roles": "Marketing · sales",
        "successMetric": "Personas adopted",
        "decisionPoints": "Are they used everywhere?",
        "qualityGate": "Go: activated. Loop back: shelf.",
        "source": "doc"
      }
    ],
    "source": "doc"
  },
  "territory-design": {
    "stages": [
      {
        "name": "Account Universe",
        "objective": "Define the full addressable set.",
        "input": "Market, ICP",
        "output": "Account universe",
        "activities": "List accounts, apply ICP filters",
        "tools": "CRM, Apollo",
        "roles": "Sales ops",
        "successMetric": "Universe defined",
        "decisionPoints": "Who is in scope?",
        "qualityGate": "Go: universe clear. Loop back: gaps.",
        "source": "authored"
      },
      {
        "name": "Segmentation",
        "objective": "Group accounts by opportunity.",
        "input": "Account universe",
        "output": "Segments",
        "activities": "Segment by fit, size, opportunity, geo",
        "tools": "Analytics",
        "roles": "Sales ops",
        "successMetric": "Segments built",
        "decisionPoints": "Are segments meaningful?",
        "qualityGate": "Go: segments useful. Loop back: arbitrary.",
        "source": "authored"
      },
      {
        "name": "Capacity Planning",
        "objective": "Match capacity to the work.",
        "input": "Segments, headcount",
        "output": "Capacity model",
        "activities": "Model coverage needed per segment",
        "tools": "Modeling",
        "roles": "Sales ops · finance",
        "successMetric": "Capacity sized",
        "decisionPoints": "Can we cover it?",
        "qualityGate": "Go: capacity clear. Loop back: overload.",
        "source": "authored"
      },
      {
        "name": "Territory Creation",
        "objective": "Build the patches.",
        "input": "Capacity model, segments",
        "output": "Territories",
        "activities": "Design balanced territories",
        "tools": "Territory tool",
        "roles": "Sales ops",
        "successMetric": "Territories created",
        "decisionPoints": "Is each patch fair?",
        "qualityGate": "Go: balanced. Loop back: unequal.",
        "source": "authored"
      },
      {
        "name": "Quota Allocation",
        "objective": "Set quota per territory.",
        "input": "Territories, targets",
        "output": "Quotas",
        "activities": "Set quota from potential and capacity",
        "tools": "Quota model",
        "roles": "Sales leadership",
        "successMetric": "Quotas set",
        "decisionPoints": "Is quota achievable?",
        "qualityGate": "Go: fair and motivating. Loop back: gamed.",
        "source": "authored"
      },
      {
        "name": "Rep Assignment",
        "objective": "Match reps to patches.",
        "input": "Territories, reps",
        "output": "Assignment",
        "activities": "Assign the right rep to each patch",
        "tools": "CRM",
        "roles": "Sales leadership",
        "successMetric": "Reps assigned",
        "decisionPoints": "Right person, right patch?",
        "qualityGate": "Go: good fit. Loop back: mismatch.",
        "source": "authored"
      },
      {
        "name": "Baseline",
        "objective": "Set the starting point.",
        "input": "Assignment, history",
        "output": "Baseline",
        "activities": "Record current performance per patch",
        "tools": "Dashboards",
        "roles": "Sales ops",
        "successMetric": "Baseline recorded",
        "decisionPoints": "Where do we start?",
        "qualityGate": "Go: baseline set. Loop back: no data.",
        "source": "authored"
      },
      {
        "name": "Tracking",
        "objective": "Monitor performance.",
        "input": "Baseline, results",
        "output": "Performance view",
        "activities": "Track attainment, spot imbalance",
        "tools": "Dashboards",
        "roles": "Sales ops",
        "successMetric": "Performance tracked",
        "decisionPoints": "Who is winning their patch?",
        "qualityGate": "Go: visibility. Loop back: blind.",
        "source": "authored"
      },
      {
        "name": "Annual Review",
        "objective": "Rebalance for next year.",
        "input": "Performance, market changes",
        "output": "Next territories",
        "activities": "Review, adjust, rebalance",
        "tools": "Review process",
        "roles": "Sales leadership",
        "successMetric": "Territories refreshed",
        "decisionPoints": "What changed?",
        "qualityGate": "Go: rebalanced. Loop back: stale.",
        "source": "authored"
      }
    ],
    "source": "authored"
  },
  "territory-forecast": {
    "stages": [
      {
        "name": "Territory Assigned",
        "objective": "Start from a defined patch.",
        "input": "Territories",
        "output": "Active territories",
        "activities": "Confirm the patch and its owners",
        "tools": "CRM",
        "roles": "Sales ops",
        "successMetric": "Patch confirmed",
        "decisionPoints": "Is the patch clear?",
        "qualityGate": "Go: assigned. Loop back: unclear.",
        "source": "authored"
      },
      {
        "name": "Historical Analysis",
        "objective": "Learn from the patch history.",
        "input": "History, results",
        "output": "Historical baseline",
        "activities": "Analyze past conversion and cycles",
        "tools": "Analytics",
        "roles": "Analytics",
        "successMetric": "Baseline known",
        "decisionPoints": "What has this patch produced?",
        "qualityGate": "Go: history clear. Loop back: no data.",
        "source": "authored"
      },
      {
        "name": "Market Analysis",
        "objective": "Factor the market into the patch.",
        "input": "Market data",
        "output": "Market view",
        "activities": "Assess market conditions, changes",
        "tools": "Market intel",
        "roles": "Analytics",
        "successMetric": "Market understood",
        "decisionPoints": "Is the market moving?",
        "qualityGate": "Go: market clear. Loop back: guess.",
        "source": "authored"
      },
      {
        "name": "Pipeline Opportunity",
        "objective": "Read the pipeline in the patch.",
        "input": "Pipeline",
        "output": "Pipeline view",
        "activities": "Assess current pipeline and stage health",
        "tools": "CRM, dashboards",
        "roles": "Sales · analytics",
        "successMetric": "Pipeline read",
        "decisionPoints": "What is realistically closing?",
        "qualityGate": "Go: pipeline clear. Loop back: inflated.",
        "source": "authored"
      },
      {
        "name": "Forecast Model",
        "objective": "Build the forecast.",
        "input": "History, market, pipeline",
        "output": "Forecast model",
        "activities": "Model by evidence, not optimism",
        "tools": "Modeling",
        "roles": "Analytics",
        "successMetric": "Model built",
        "decisionPoints": "Is the number defensible?",
        "qualityGate": "Go: model sound. Loop back: hope.",
        "source": "authored"
      },
      {
        "name": "Scenario Planning",
        "objective": "Stress the forecast.",
        "input": "Forecast model",
        "output": "Scenarios",
        "activities": "Build base, best, worst cases",
        "tools": "Scenario tools",
        "roles": "Analytics · sales",
        "successMetric": "Scenarios set",
        "decisionPoints": "What would break it?",
        "qualityGate": "Go: scenarios clear. Loop back: single number.",
        "source": "authored"
      },
      {
        "name": "Submission",
        "objective": "Commit the forecast.",
        "input": "Scenarios",
        "output": "Submitted forecast",
        "activities": "Submit with assumptions and risks",
        "tools": "Forecast process",
        "roles": "Sales leadership",
        "successMetric": "Forecast submitted",
        "decisionPoints": "Is leadership aligned?",
        "qualityGate": "Go: committed. Loop back: sandbagged.",
        "source": "authored"
      },
      {
        "name": "Tracking",
        "objective": "Track against the forecast.",
        "input": "Actuals",
        "output": "Accuracy view",
        "activities": "Compare forecast to actual",
        "tools": "Dashboards",
        "roles": "Sales ops",
        "successMetric": "Accuracy tracked",
        "decisionPoints": "How close were we?",
        "qualityGate": "Go: tracked. Loop back: ignored.",
        "source": "authored"
      },
      {
        "name": "Accuracy",
        "objective": "Feed accuracy back into the model.",
        "input": "Accuracy data",
        "output": "Refined model",
        "activities": "Refine parameters from accuracy",
        "tools": "Analytics",
        "roles": "Analytics",
        "successMetric": "Model improved",
        "decisionPoints": "What do we adjust?",
        "qualityGate": "Go: improving. Loop back: repeat misses.",
        "source": "authored"
      }
    ],
    "source": "authored"
  },
  "funnel-analytics": {
    "stages": [
      {
        "name": "Funnel Def",
        "objective": "Map the funnel.",
        "input": "Business model, journey",
        "output": "Funnel map",
        "activities": "Define stages and transitions",
        "tools": "Mapping",
        "roles": "Analytics · marketing",
        "successMetric": "Funnel mapped",
        "decisionPoints": "Are stages real?",
        "qualityGate": "Go: stages clear. Loop back: fuzzy.",
        "source": "authored"
      },
      {
        "name": "Metrics ID",
        "objective": "Pick the conversion metrics.",
        "input": "Funnel map",
        "output": "Metric set",
        "activities": "Define conversion rates to measure",
        "tools": "Metrics framework",
        "roles": "Analytics",
        "successMetric": "Metrics defined",
        "decisionPoints": "Do metrics show the truth?",
        "qualityGate": "Go: metrics right. Loop back: vanity.",
        "source": "authored"
      },
      {
        "name": "Data Collection",
        "objective": "Wire up the tracking.",
        "input": "Metric set, sources",
        "output": "Tracking live",
        "activities": "Implement tracking, integrate data",
        "tools": "Analytics platform, CRM",
        "roles": "Data engineering",
        "successMetric": "Tracking live",
        "decisionPoints": "Is the data accurate?",
        "qualityGate": "Go: data flows. Loop back: gaps.",
        "source": "authored"
      },
      {
        "name": "Conversion Rate",
        "objective": "Calculate conversion between stages.",
        "input": "Tracking data",
        "output": "Conversion view",
        "activities": "Compute rates, set baselines",
        "tools": "Analytics",
        "roles": "Analytics",
        "successMetric": "Rates computed",
        "decisionPoints": "Where do people drop?",
        "qualityGate": "Go: rates clear. Loop back: incomplete.",
        "source": "authored"
      },
      {
        "name": "Stage Analysis",
        "objective": "Find the weak stages.",
        "input": "Conversion view",
        "output": "Stage insights",
        "activities": "Analyze each stage, segment",
        "tools": "Analytics",
        "roles": "Analytics",
        "successMetric": "Weak stages identified",
        "decisionPoints": "Which stage is sick?",
        "qualityGate": "Go: bottlenecks found. Loop back: hidden.",
        "source": "authored"
      },
      {
        "name": "Bottleneck",
        "objective": "Diagnose the biggest leak.",
        "input": "Stage insights",
        "output": "Bottleneck diagnosis",
        "activities": "Find root cause of the top drop-off",
        "tools": "Analysis",
        "roles": "Analytics · product",
        "successMetric": "Bottleneck understood",
        "decisionPoints": "Why do they leave here?",
        "qualityGate": "Go: cause known. Loop back: guessing.",
        "source": "authored"
      },
      {
        "name": "Recommendations",
        "objective": "Propose the fix.",
        "input": "Bottleneck diagnosis",
        "output": "Fix plan",
        "activities": "Prioritize fixes, build hypotheses",
        "tools": "Prioritization",
        "roles": "Analytics",
        "successMetric": "Fixes prioritized",
        "decisionPoints": "What moves the number?",
        "qualityGate": "Go: plan clear. Loop back: no ideas.",
        "source": "authored"
      },
      {
        "name": "Testing",
        "objective": "Prove the fix.",
        "input": "Fix plan",
        "output": "Test results",
        "activities": "Run tests, measure impact",
        "tools": "Testing tools",
        "roles": "Product · marketing",
        "successMetric": "Tests run",
        "decisionPoints": "Did it work?",
        "qualityGate": "Go: proven. Loop back: failed.",
        "source": "authored"
      },
      {
        "name": "Optimization",
        "objective": "Institutionalize the improvement.",
        "input": "Test results",
        "output": "Improved funnel",
        "activities": "Roll out winners, keep the cycle running",
        "tools": "Rollout",
        "roles": "Analytics",
        "successMetric": "Funnel improving",
        "decisionPoints": "Is the funnel improving?",
        "qualityGate": "Go: compounding. Loop back: stalled.",
        "source": "authored"
      }
    ],
    "source": "authored"
  },
  "pipeline-analytics": {
    "stages": [
      {
        "name": "Pipeline Metrics",
        "objective": "Define what you track.",
        "input": "Sales process",
        "output": "Metric set",
        "activities": "Define ACV, velocity, conversion, stage criteria",
        "tools": "Metrics framework",
        "roles": "Analytics · sales",
        "successMetric": "Metrics defined",
        "decisionPoints": "Do metrics reflect reality?",
        "qualityGate": "Go: metrics right. Loop back: vanity.",
        "source": "authored"
      },
      {
        "name": "Data Collection",
        "objective": "Wire the pipeline data.",
        "input": "Metric set, CRM",
        "output": "Pipeline data flow",
        "activities": "Connect CRM, set quality rules",
        "tools": "CRM, warehouse",
        "roles": "Data engineering",
        "successMetric": "Data flowing",
        "decisionPoints": "Is the data clean?",
        "qualityGate": "Go: clean. Loop back: dirty.",
        "source": "authored"
      },
      {
        "name": "Stage Duration",
        "objective": "Measure time in stage.",
        "input": "Pipeline data",
        "output": "Duration view",
        "activities": "Compute time per stage, spot stalls",
        "tools": "Analytics",
        "roles": "Analytics",
        "successMetric": "Durations known",
        "decisionPoints": "Where do deals stall?",
        "qualityGate": "Go: clear. Loop back: hidden.",
        "source": "authored"
      },
      {
        "name": "Win Rate",
        "objective": "Measure conversion by stage and source.",
        "input": "Pipeline data",
        "output": "Win rate view",
        "activities": "Compute win rates, segment",
        "tools": "Analytics",
        "roles": "Analytics",
        "successMetric": "Win rates known",
        "decisionPoints": "Where do we win and lose?",
        "qualityGate": "Go: clear. Loop back: no data.",
        "source": "authored"
      },
      {
        "name": "Health Assessment",
        "objective": "Read overall pipeline health.",
        "input": "All metrics",
        "output": "Health view",
        "activities": "Score pipeline health, flag risks",
        "tools": "Health model",
        "roles": "Analytics · sales",
        "successMetric": "Health assessed",
        "decisionPoints": "Is the pipeline trustworthy?",
        "qualityGate": "Go: healthy or flagged. Loop back: blind.",
        "source": "authored"
      },
      {
        "name": "Risk ID",
        "objective": "Find the risks in the pipeline.",
        "input": "Health view",
        "output": "Risk list",
        "activities": "Identify at-risk deals and patterns",
        "tools": "Risk analysis",
        "roles": "Sales leadership",
        "successMetric": "Risks identified",
        "decisionPoints": "What could miss?",
        "qualityGate": "Go: risks known. Loop back: surprises.",
        "source": "authored"
      },
      {
        "name": "Forecast",
        "objective": "Turn the view into a forecast.",
        "input": "Risks, metrics",
        "output": "Forecast",
        "activities": "Build forecast from evidence",
        "tools": "Modeling",
        "roles": "Analytics",
        "successMetric": "Forecast built",
        "decisionPoints": "Is the number defensible?",
        "qualityGate": "Go: sound. Loop back: hope.",
        "source": "authored"
      },
      {
        "name": "Monitoring",
        "objective": "Keep watching.",
        "input": "Forecast, results",
        "output": "Updated view",
        "activities": "Monitor weekly, reconcile",
        "tools": "Dashboards",
        "roles": "Analytics",
        "successMetric": "Monitoring active",
        "decisionPoints": "Are we tracking reality?",
        "qualityGate": "Go: watched. Loop back: ignored.",
        "source": "authored"
      },
      {
        "name": "Optimization",
        "objective": "Improve pipeline health.",
        "input": "Learnings",
        "output": "Improvements",
        "activities": "Fix process issues, feed back",
        "tools": "Improvement",
        "roles": "Sales ops",
        "successMetric": "Pipeline improving",
        "decisionPoints": "Is the pipeline getting healthier?",
        "qualityGate": "Go: improving. Loop back: stagnant.",
        "source": "authored"
      }
    ],
    "source": "authored"
  },
  "cac-ltv-analysis": {
    "stages": [
      {
        "name": "Acquisition Cost",
        "objective": "Define CAC precisely.",
        "input": "Spend, sales data",
        "output": "CAC definition",
        "activities": "Define CAC components, attribution",
        "tools": "Financial data",
        "roles": "Finance · analytics",
        "successMetric": "CAC defined",
        "decisionPoints": "What really costs a customer?",
        "qualityGate": "Go: definition clear. Loop back: fuzzy.",
        "source": "authored"
      },
      {
        "name": "LTV Calc",
        "objective": "Define lifetime value.",
        "input": "Customer data, revenue",
        "output": "LTV definition",
        "activities": "Define LTV methodology, horizon",
        "tools": "Financial model",
        "roles": "Finance",
        "successMetric": "LTV defined",
        "decisionPoints": "What is a customer worth?",
        "qualityGate": "Go: LTV sound. Loop back: assumed.",
        "source": "authored"
      },
      {
        "name": "Payback Period",
        "objective": "Model cash recovery.",
        "input": "CAC, LTV, tenure",
        "output": "Payback view",
        "activities": "Compute payback by channel and segment",
        "tools": "Modeling",
        "roles": "Finance",
        "successMetric": "Payback known",
        "decisionPoints": "How fast do we recover?",
        "qualityGate": "Go: clear. Loop back: cash trap.",
        "source": "authored"
      },
      {
        "name": "Profitability",
        "objective": "Check unit economics.",
        "input": "CAC, LTV, payback",
        "output": "Economics view",
        "activities": "Assess LTV:CAC, margins, cohort health",
        "tools": "Modeling",
        "roles": "Finance",
        "successMetric": "Economics clear",
        "decisionPoints": "Is the model profitable?",
        "qualityGate": "Go: healthy. Loop back: leaking.",
        "source": "authored"
      },
      {
        "name": "By Channel/Segment",
        "objective": "Break economics down.",
        "input": "Economics, channel data",
        "output": "Segment view",
        "activities": "Compare CAC/LTV across channels, segments",
        "tools": "Analytics",
        "roles": "Analytics",
        "successMetric": "Segments compared",
        "decisionPoints": "Where is the money made?",
        "qualityGate": "Go: clear. Loop back: blended.",
        "source": "authored"
      },
      {
        "name": "Recommendations",
        "objective": "Propose where to invest.",
        "input": "Segment view",
        "output": "Recommendations",
        "activities": "Reallocate budget, fix bad economics",
        "tools": "Strategy",
        "roles": "Finance · growth",
        "successMetric": "Actions agreed",
        "decisionPoints": "What do we change?",
        "qualityGate": "Go: acted. Loop back: ignored.",
        "source": "authored"
      },
      {
        "name": "Testing",
        "objective": "Validate the moves.",
        "input": "Recommendations, results",
        "output": "Test results",
        "activities": "Test changes, measure impact",
        "tools": "Testing",
        "roles": "Growth",
        "successMetric": "Validated",
        "decisionPoints": "Did it improve?",
        "qualityGate": "Go: improved. Loop back: failed.",
        "source": "authored"
      },
      {
        "name": "Monitoring",
        "objective": "Keep economics healthy.",
        "input": "Ongoing data",
        "output": "Updated view",
        "activities": "Track on a cadence, revisit definitions",
        "tools": "Dashboards",
        "roles": "Finance",
        "successMetric": "Economics watched",
        "decisionPoints": "Has the model drifted?",
        "qualityGate": "Go: watched. Loop back: stale.",
        "source": "authored"
      }
    ],
    "source": "authored"
  },
  "channel-attribution": {
    "stages": [
      {
        "name": "Touch Point Def",
        "objective": "Define every touchpoint.",
        "input": "Customer journey",
        "output": "Touchpoint map",
        "activities": "Map all channels and interactions",
        "tools": "Mapping",
        "roles": "Analytics · marketing",
        "successMetric": "Touchpoints mapped",
        "decisionPoints": "Do we see the whole journey?",
        "qualityGate": "Go: complete. Loop back: blind.",
        "source": "authored"
      },
      {
        "name": "Attribution Model",
        "objective": "Choose how credit is assigned.",
        "input": "Journey, business model",
        "output": "Model choice",
        "activities": "Pick first/last/linear/time-decay/custom",
        "tools": "Attribution framework",
        "roles": "Analytics · finance",
        "successMetric": "Model chosen",
        "decisionPoints": "Is the model defensible?",
        "qualityGate": "Go: chosen. Loop back: arbitrary.",
        "source": "authored"
      },
      {
        "name": "Data Integration",
        "objective": "Wire the journey data.",
        "input": "Model, sources",
        "output": "Journey data",
        "activities": "Connect marketing, CRM, web analytics, UTMs",
        "tools": "Data platform",
        "roles": "Data engineering",
        "successMetric": "Journey data flows",
        "decisionPoints": "Is the data complete?",
        "qualityGate": "Go: complete. Loop back: gaps.",
        "source": "authored"
      },
      {
        "name": "Analysis",
        "objective": "Run the attribution.",
        "input": "Journey data",
        "output": "Attribution results",
        "activities": "Compute channel contribution",
        "tools": "Analytics",
        "roles": "Analytics",
        "successMetric": "Results computed",
        "decisionPoints": "Who really drives revenue?",
        "qualityGate": "Go: clear. Loop back: noise.",
        "source": "authored"
      },
      {
        "name": "Channel Contribution",
        "objective": "Attribute revenue to channels.",
        "input": "Attribution results",
        "output": "Contribution view",
        "activities": "Calculate revenue per channel",
        "tools": "Analytics",
        "roles": "Analytics",
        "successMetric": "Contribution known",
        "decisionPoints": "Which channels pay?",
        "qualityGate": "Go: clear. Loop back: distorted.",
        "source": "authored"
      },
      {
        "name": "ROI by Channel",
        "objective": "Compute channel ROI.",
        "input": "Contribution, spend",
        "output": "ROI view",
        "activities": "Compare ROI across channels",
        "tools": "Financial model",
        "roles": "Finance",
        "successMetric": "ROI known",
        "decisionPoints": "Where does budget earn?",
        "qualityGate": "Go: clear. Loop back: unprofitable.",
        "source": "authored"
      },
      {
        "name": "Recommendations",
        "objective": "Propose budget moves.",
        "input": "ROI view",
        "output": "Recommendations",
        "activities": "Reallocate budget to winners",
        "tools": "Strategy",
        "roles": "Marketing · finance",
        "successMetric": "Actions agreed",
        "decisionPoints": "What do we change?",
        "qualityGate": "Go: acted. Loop back: inertia.",
        "source": "authored"
      },
      {
        "name": "Budget Reallocation",
        "objective": "Move the money.",
        "input": "Recommendations",
        "output": "New budget mix",
        "activities": "Shift spend, monitor impact",
        "tools": "Budget process",
        "roles": "Marketing",
        "successMetric": "Budget reallocated",
        "decisionPoints": "Did it work?",
        "qualityGate": "Go: improved. Loop back: unchanged.",
        "source": "authored"
      }
    ],
    "source": "authored"
  },
  "crm-management": {
    "stages": [
      {
        "name": "CRM Selection",
        "objective": "Choose the system of record.",
        "input": "Needs, budget",
        "output": "CRM chosen",
        "activities": "Evaluate platforms, decide",
        "tools": "Evaluation",
        "roles": "RevOps · ops",
        "successMetric": "CRM chosen",
        "decisionPoints": "Does it fit the process?",
        "qualityGate": "Go: chosen. Loop back: mismatch.",
        "source": "authored"
      },
      {
        "name": "Implementation",
        "objective": "Stand it up.",
        "input": "CRM choice, config plan",
        "output": "Working CRM",
        "activities": "Configure, set up objects and fields",
        "tools": "CRM platform",
        "roles": "CRM admin",
        "successMetric": "Implemented",
        "decisionPoints": "Is it configured to the process?",
        "qualityGate": "Go: working. Loop back: broken.",
        "source": "authored"
      },
      {
        "name": "Data Migration",
        "objective": "Move the data in clean.",
        "input": "Legacy data, mapping",
        "output": "Cleansed data",
        "activities": "Extract, clean, map, migrate, validate",
        "tools": "Migration tools",
        "roles": "Data team",
        "successMetric": "Data migrated",
        "decisionPoints": "Is the data clean?",
        "qualityGate": "Go: clean. Loop back: polluted.",
        "source": "authored"
      },
      {
        "name": "Process Config",
        "objective": "Configure around the process.",
        "input": "CRM, process docs",
        "output": "Configured process",
        "activities": "Set up stages, workflows, automations",
        "tools": "CRM admin",
        "roles": "RevOps",
        "successMetric": "Process configured",
        "decisionPoints": "Does the CRM match how we sell?",
        "qualityGate": "Go: aligned. Loop back: mismatch.",
        "source": "authored"
      },
      {
        "name": "Workflow Automation",
        "objective": "Automate the routine.",
        "input": "Configured process",
        "output": "Automations live",
        "activities": "Build automations, rules, alerts",
        "tools": "CRM automations",
        "roles": "RevOps",
        "successMetric": "Automations live",
        "decisionPoints": "What can run itself?",
        "qualityGate": "Go: automated. Loop back: manual.",
        "source": "authored"
      },
      {
        "name": "Integration",
        "objective": "Connect the stack.",
        "input": "CRM, tools",
        "output": "Integrated stack",
        "activities": "Integrate marketing, data, tools",
        "tools": "Integrations",
        "roles": "Data engineering",
        "successMetric": "Integrated",
        "decisionPoints": "Does it all sync?",
        "qualityGate": "Go: synced. Loop back: silos.",
        "source": "authored"
      },
      {
        "name": "Training",
        "objective": "Get users fluent.",
        "input": "CRM, training materials",
        "output": "Trained users",
        "activities": "Train, certify, support",
        "tools": "Training",
        "roles": "Enablement",
        "successMetric": "Users trained",
        "decisionPoints": "Do reps use it?",
        "qualityGate": "Go: adopted. Loop back: resisted.",
        "source": "authored"
      },
      {
        "name": "Adoption",
        "objective": "Drive daily use.",
        "input": "Usage data",
        "output": "Adoption",
        "activities": "Track usage, address resistance",
        "tools": "Dashboards",
        "roles": "RevOps",
        "successMetric": "High adoption",
        "decisionPoints": "Is it the system of record?",
        "qualityGate": "Go: used. Loop back: shadow systems.",
        "source": "authored"
      },
      {
        "name": "Data Quality",
        "objective": "Keep the data honest.",
        "input": "Usage, data audit",
        "output": "Clean data",
        "activities": "Monitor quality, fix root causes",
        "tools": "Data quality",
        "roles": "RevOps",
        "successMetric": "Clean data",
        "decisionPoints": "Can we trust the numbers?",
        "qualityGate": "Go: trustworthy. Loop back: garbage.",
        "source": "authored"
      }
    ],
    "source": "authored"
  },
  "lead-management": {
    "stages": [
      {
        "name": "Source Integration",
        "objective": "Connect every lead source.",
        "input": "Lead sources",
        "output": "Integrated sources",
        "activities": "Integrate all channels into one system",
        "tools": "Integrations",
        "roles": "RevOps",
        "successMetric": "All sources connected",
        "decisionPoints": "Do we capture everything?",
        "qualityGate": "Go: complete. Loop back: leaks.",
        "source": "authored"
      },
      {
        "name": "Scoring Config",
        "objective": "Set the scoring model.",
        "input": "Lead data, ICP",
        "output": "Scoring live",
        "activities": "Configure scoring, calibrate",
        "tools": "Scoring tools",
        "roles": "RevOps",
        "successMetric": "Scoring live",
        "decisionPoints": "Does the score predict?",
        "qualityGate": "Go: calibrated. Loop back: noisy.",
        "source": "authored"
      },
      {
        "name": "Routing Setup",
        "objective": "Route leads to owners.",
        "input": "Scoring, territories",
        "output": "Routing live",
        "activities": "Set routing rules, assignment logic",
        "tools": "Routing",
        "roles": "RevOps",
        "successMetric": "Routing live",
        "decisionPoints": "Do the right leads reach the right reps?",
        "qualityGate": "Go: routed. Loop back: misrouted.",
        "source": "authored"
      },
      {
        "name": "Capture Optimization",
        "objective": "Improve how leads are captured.",
        "input": "Form data, drop-offs",
        "output": "Optimized capture",
        "activities": "Improve forms, tracking, capture points",
        "tools": "Forms, analytics",
        "roles": "Marketing",
        "successMetric": "Capture improved",
        "decisionPoints": "Are we losing leads at capture?",
        "qualityGate": "Go: captured. Loop back: leaks.",
        "source": "authored"
      },
      {
        "name": "Nurture",
        "objective": "Keep the not-ready leads warm.",
        "input": "Scored leads",
        "output": "Nurture active",
        "activities": "Run nurture sequences, educate",
        "tools": "Marketing automation",
        "roles": "Marketing",
        "successMetric": "Nurture working",
        "decisionPoints": "Do leads progress?",
        "qualityGate": "Go: progressing. Loop back: decaying.",
        "source": "authored"
      },
      {
        "name": "CRM Sync",
        "objective": "Keep the record clean.",
        "input": "Nurture, CRM",
        "output": "Synced data",
        "activities": "Sync leads, dedupe, update",
        "tools": "Sync tools",
        "roles": "RevOps",
        "successMetric": "Data synced",
        "decisionPoints": "Is the CRM current?",
        "qualityGate": "Go: clean. Loop back: drift.",
        "source": "authored"
      },
      {
        "name": "Data Quality",
        "objective": "Protect lead data integrity.",
        "input": "Data audit",
        "output": "Clean data",
        "activities": "Monitor quality at the source",
        "tools": "Data quality",
        "roles": "RevOps",
        "successMetric": "Quality maintained",
        "decisionPoints": "Can we trust it?",
        "qualityGate": "Go: trustworthy. Loop back: garbage.",
        "source": "authored"
      },
      {
        "name": "Reporting",
        "objective": "Report lead-to-revenue.",
        "input": "Data, outcomes",
        "output": "Lead reports",
        "activities": "Report on conversion, not just volume",
        "tools": "Dashboards",
        "roles": "RevOps",
        "successMetric": "Reporting live",
        "decisionPoints": "Are leads becoming revenue?",
        "qualityGate": "Go: clear. Loop back: vanity.",
        "source": "authored"
      }
    ],
    "source": "authored"
  },
  "sales-forecasting": {
    "stages": [
      {
        "name": "Historical Analysis",
        "objective": "Learn from the past.",
        "input": "History, results",
        "output": "Baseline",
        "activities": "Analyze conversion, cycles, accuracy",
        "tools": "Analytics",
        "roles": "Analytics",
        "successMetric": "Baseline known",
        "decisionPoints": "What has happened before?",
        "qualityGate": "Go: history clear. Loop back: no data.",
        "source": "authored"
      },
      {
        "name": "Forecast Model",
        "objective": "Build the model.",
        "input": "Baseline, pipeline",
        "output": "Forecast model",
        "activities": "Model by stage evidence, not optimism",
        "tools": "Modeling",
        "roles": "Analytics",
        "successMetric": "Model built",
        "decisionPoints": "Is the model sound?",
        "qualityGate": "Go: sound. Loop back: hope.",
        "source": "authored"
      },
      {
        "name": "Rep Submission",
        "objective": "Collect rep forecasts.",
        "input": "Model, reps",
        "output": "Rep forecasts",
        "activities": "Gather submissions, challenge optimism",
        "tools": "Forecast process",
        "roles": "Sales leadership",
        "successMetric": "Submissions in",
        "decisionPoints": "Are reps being honest?",
        "qualityGate": "Go: honest. Loop back: sandbagging.",
        "source": "authored"
      },
      {
        "name": "Consolidation",
        "objective": "Roll up into one number.",
        "input": "Rep forecasts",
        "output": "Consolidated forecast",
        "activities": "Combine, reconcile, normalize",
        "tools": "Modeling",
        "roles": "Analytics",
        "successMetric": "Consolidated",
        "decisionPoints": "Is the total real?",
        "qualityGate": "Go: coherent. Loop back: incompatible.",
        "source": "authored"
      },
      {
        "name": "Scenario Planning",
        "objective": "Stress the number.",
        "input": "Consolidated forecast",
        "output": "Scenarios",
        "activities": "Build base, best, worst",
        "tools": "Scenario tools",
        "roles": "Analytics · sales",
        "successMetric": "Scenarios set",
        "decisionPoints": "What would break it?",
        "qualityGate": "Go: clear. Loop back: single number.",
        "source": "authored"
      },
      {
        "name": "Review",
        "objective": "Challenge the forecast.",
        "input": "Scenarios, pipeline",
        "output": "Reviewed forecast",
        "activities": "Review with leadership, pressure-test",
        "tools": "Review process",
        "roles": "Leadership",
        "successMetric": "Reviewed",
        "decisionPoints": "Do we believe it?",
        "qualityGate": "Go: committed. Loop back: challenged.",
        "source": "authored"
      },
      {
        "name": "Approval",
        "objective": "Commit the number.",
        "input": "Reviewed forecast",
        "output": "Approved forecast",
        "activities": "Get approval, communicate",
        "tools": "Process",
        "roles": "Leadership",
        "successMetric": "Approved",
        "decisionPoints": "Is it locked?",
        "qualityGate": "Go: locked. Loop back: wandering.",
        "source": "authored"
      },
      {
        "name": "Tracking",
        "objective": "Track against it.",
        "input": "Actuals",
        "output": "Accuracy view",
        "activities": "Compare to actual, reconcile",
        "tools": "Dashboards",
        "roles": "Sales ops",
        "successMetric": "Tracked",
        "decisionPoints": "How close were we?",
        "qualityGate": "Go: tracked. Loop back: ignored.",
        "source": "authored"
      },
      {
        "name": "Accuracy",
        "objective": "Feed accuracy back.",
        "input": "Accuracy data",
        "output": "Refined model",
        "activities": "Refine from accuracy, adjust",
        "tools": "Analytics",
        "roles": "Analytics",
        "successMetric": "Model improving",
        "decisionPoints": "What do we fix?",
        "qualityGate": "Go: improving. Loop back: repeat misses.",
        "source": "authored"
      }
    ],
    "source": "authored"
  },
  "compensation-quota": {
    "stages": [
      {
        "name": "Revenue Target",
        "objective": "Start from the number.",
        "input": "Business plan",
        "output": "Target",
        "activities": "Define the revenue target",
        "tools": "Plan",
        "roles": "Leadership",
        "successMetric": "Target set",
        "decisionPoints": "What must we hit?",
        "qualityGate": "Go: clear. Loop back: vague.",
        "source": "authored"
      },
      {
        "name": "Rep Capacity",
        "objective": "Know what reps can carry.",
        "input": "History, territories",
        "output": "Capacity view",
        "activities": "Assess per-rep capacity and potential",
        "tools": "Modeling",
        "roles": "Sales leadership",
        "successMetric": "Capacity known",
        "decisionPoints": "Can they hit it?",
        "qualityGate": "Go: clear. Loop back: guess.",
        "source": "authored"
      },
      {
        "name": "Quota Setting",
        "objective": "Set fair, motivating quotas.",
        "input": "Target, capacity",
        "output": "Quotas",
        "activities": "Set quotas per rep and territory",
        "tools": "Quota model",
        "roles": "Sales leadership",
        "successMetric": "Quotas set",
        "decisionPoints": "Are quotas fair?",
        "qualityGate": "Go: fair. Loop back: gamed.",
        "source": "authored"
      },
      {
        "name": "Comp Plan",
        "objective": "Align comp to the targets.",
        "input": "Quotas, budget",
        "output": "Comp plan",
        "activities": "Design base/variable, incentive levers",
        "tools": "Comp design",
        "roles": "Finance · HR",
        "successMetric": "Comp plan designed",
        "decisionPoints": "Does comp reward the right behavior?",
        "qualityGate": "Go: aligned. Loop back: misaligned.",
        "source": "authored"
      },
      {
        "name": "Commission Calc",
        "objective": "Model the payout.",
        "input": "Comp plan, quota",
        "output": "Commission model",
        "activities": "Model commissions, validate cost",
        "tools": "Modeling",
        "roles": "Finance",
        "successMetric": "Commission modeled",
        "decisionPoints": "Is it affordable?",
        "qualityGate": "Go: sound. Loop back: blowing budget.",
        "source": "authored"
      },
      {
        "name": "Tracking",
        "objective": "Track earnings vs quota.",
        "input": "Actuals",
        "output": "Earnings view",
        "activities": "Monitor attainment and payout",
        "tools": "Dashboards",
        "roles": "Finance",
        "successMetric": "Tracked",
        "decisionPoints": "Is it motivating?",
        "qualityGate": "Go: working. Loop back: broken.",
        "source": "authored"
      },
      {
        "name": "Review",
        "objective": "Review effectiveness.",
        "input": "Tracking, feedback",
        "output": "Review findings",
        "activities": "Assess whether comp drives behavior",
        "tools": "Review",
        "roles": "Finance · sales",
        "successMetric": "Reviewed",
        "decisionPoints": "Is it working?",
        "qualityGate": "Go: effective. Loop back: gaming.",
        "source": "authored"
      },
      {
        "name": "Adjustment",
        "objective": "Fix what's wrong.",
        "input": "Review findings",
        "output": "Adjustments",
        "activities": "Adjust plan or quotas mid-year",
        "tools": "Process",
        "roles": "Finance",
        "successMetric": "Adjusted",
        "decisionPoints": "What changes?",
        "qualityGate": "Go: adjusted. Loop back: static.",
        "source": "authored"
      },
      {
        "name": "Transparency",
        "objective": "Keep it clear.",
        "input": "Plan, adjustments",
        "output": "Communicated plan",
        "activities": "Communicate clearly, no surprises",
        "tools": "Communication",
        "roles": "Sales leadership",
        "successMetric": "Transparent",
        "decisionPoints": "Does the team trust it?",
        "qualityGate": "Go: trusted. Loop back: distrust.",
        "source": "authored"
      }
    ],
    "source": "authored"
  },
  "sales-tools-stack": {
    "stages": [
      {
        "name": "Needs Assessment",
        "objective": "Define the real need.",
        "input": "Process, pain points",
        "output": "Needs brief",
        "activities": "Map what the process actually needs",
        "tools": "Assessment",
        "roles": "RevOps",
        "successMetric": "Needs clear",
        "decisionPoints": "Is there a process problem to fix?",
        "qualityGate": "Go: needs defined. Loop back: tool-first.",
        "source": "authored"
      },
      {
        "name": "Tool Evaluation",
        "objective": "Evaluate against the process.",
        "input": "Needs brief, candidates",
        "output": "Evaluation",
        "activities": "Shortlist, test, compare tools",
        "tools": "Evaluation",
        "roles": "RevOps",
        "successMetric": "Evaluated",
        "decisionPoints": "Does it serve the process?",
        "qualityGate": "Go: fit. Loop back: demo dazzle.",
        "source": "authored"
      },
      {
        "name": "Selection",
        "objective": "Choose the tool.",
        "input": "Evaluation, budget",
        "output": "Selected tool",
        "activities": "Decide, justify, get budget",
        "tools": "Decision",
        "roles": "Leadership",
        "successMetric": "Selected",
        "decisionPoints": "Is it worth it?",
        "qualityGate": "Go: chosen. Loop back: sprawl.",
        "source": "authored"
      },
      {
        "name": "Implementation",
        "objective": "Stand it up.",
        "input": "Selected tool, plan",
        "output": "Working tool",
        "activities": "Configure, integrate, test",
        "tools": "Implementation",
        "roles": "RevOps",
        "successMetric": "Implemented",
        "decisionPoints": "Is it live and correct?",
        "qualityGate": "Go: working. Loop back: broken.",
        "source": "authored"
      },
      {
        "name": "Integration",
        "objective": "Connect it to the stack.",
        "input": "Tool, stack",
        "output": "Integrated",
        "activities": "Integrate with other tools and data",
        "tools": "Integrations",
        "roles": "Data engineering",
        "successMetric": "Integrated",
        "decisionPoints": "Does it sync?",
        "qualityGate": "Go: synced. Loop back: silo.",
        "source": "authored"
      },
      {
        "name": "Training",
        "objective": "Get users fluent.",
        "input": "Tool, materials",
        "output": "Trained users",
        "activities": "Train, onboard, support",
        "tools": "Training",
        "roles": "Enablement",
        "successMetric": "Trained",
        "decisionPoints": "Do people use it?",
        "qualityGate": "Go: adopted. Loop back: ignored.",
        "source": "authored"
      },
      {
        "name": "Adoption",
        "objective": "Drive real usage.",
        "input": "Usage data",
        "output": "Adoption",
        "activities": "Track usage, remove friction",
        "tools": "Dashboards",
        "roles": "RevOps",
        "successMetric": "Adopted",
        "decisionPoints": "Is it used daily?",
        "qualityGate": "Go: used. Loop back: shelf.",
        "source": "authored"
      },
      {
        "name": "Monitoring",
        "objective": "Watch value and cost.",
        "input": "Usage, spend",
        "output": "Value view",
        "activities": "Track ROI, cost, renewal",
        "tools": "Dashboards",
        "roles": "RevOps",
        "successMetric": "Monitored",
        "decisionPoints": "Is it earning its keep?",
        "qualityGate": "Go: valued. Loop back: waste.",
        "source": "authored"
      },
      {
        "name": "Optimization",
        "objective": "Prune and refresh.",
        "input": "Monitoring, feedback",
        "output": "Lean stack",
        "activities": "Kill redundancy, refresh as needed",
        "tools": "Review",
        "roles": "RevOps",
        "successMetric": "Stack lean",
        "decisionPoints": "Is the stack lean?",
        "qualityGate": "Go: lean. Loop back: sprawl.",
        "source": "authored"
      }
    ],
    "source": "authored"
  },
  "win-loss-analysis-program": {
    "stages": [
      {
        "name": "Deal Selection for Analysis",
        "objective": "Identify deals for win/loss interviews",
        "input": "CRM data, closed deals, deal outcomes",
        "output": "Deal list for interview with contact information",
        "activities": "Identify recent wins for customer interviews, identify recent losses for customer/competitor interviews, ensure geographic/vertical balance, prioritize strategic deals",
        "tools": "CRM, deal tracking",
        "roles": "Sales (identification), Operations (coordination)",
        "successMetric": "Deal list with 40-50 deals identified quarterly",
        "decisionPoints": "Mix of wins/losses? Representative sample? Contact information quality?",
        "qualityGate": "Deal list finalized, interview plan created",
        "source": "doc"
      },
      {
        "name": "Interview Coordination & Scheduling",
        "objective": "Coordinate and schedule win/loss interviews",
        "input": "Deal list, contact information, interview guides",
        "output": "Scheduled interviews with prepared teams",
        "activities": "Contact customers/prospects, schedule interviews, brief interview team, prepare questions, organize logistics",
        "tools": "Calendar management, interview templates",
        "roles": "Operations (scheduling), Sales/product (interviews)",
        "successMetric": "40-50 interviews scheduled (70%+ acceptance rate)",
        "decisionPoints": "Interview availability? Team prepared? Guide comprehensive? Incentives working?",
        "qualityGate": "Interviews scheduled, team briefed, recordings planned",
        "source": "doc"
      },
      {
        "name": "Interview Execution",
        "objective": "Conduct win/loss interviews",
        "input": "Scheduled interviews, interview guides, recording setup",
        "output": "Interview recordings and notes",
        "activities": "Conduct interviews, take detailed notes, record for reference, stay neutral and curious, explore decision drivers",
        "tools": "Video conferencing, recording tools",
        "roles": "Sales/product leaders (interviews)",
        "successMetric": "Interviews conducted with recordings captured",
        "decisionPoints": "Candid responses? Key insights gathered? Notes comprehensive? Recording quality?",
        "qualityGate": "Interviews complete, recordings and notes organized",
        "source": "doc"
      },
      {
        "name": "Analysis & Insight Synthesis",
        "objective": "Analyze interview data and identify patterns",
        "input": "Interview recordings, notes, CRM data",
        "output": "Win/loss analysis report with insights",
        "activities": "Transcribe interviews, code responses by theme, identify patterns, analyze wins vs. losses, identify competitive differentiators, identify product gaps, identify messaging gaps",
        "tools": "Analysis software, transcription services",
        "roles": "Competitive intelligence (analysis), Product (interpretation)",
        "successMetric": "Analysis report with 5-10 key insights",
        "decisionPoints": "Patterns clear? Insights actionable? Product gaps real? Sales process issues?",
        "qualityGate": "Analysis complete, insights validated",
        "source": "doc"
      },
      {
        "name": "Insight Communication & Action Items",
        "objective": "Share insights and drive action across organization",
        "input": "Analysis report, insights, recommendations",
        "output": "Communicated insights with documented action items",
        "activities": "Brief leadership, create executive summary, brief sales team, brief product team, identify action items, assign owners, track actions",
        "tools": "Briefing templates, action tracking",
        "roles": "Operations (communication), Leadership (action items)",
        "successMetric": "Insights communicated to 3+ departments, action items assigned",
        "decisionPoints": "Communication effective? Actions clear? Ownership assigned? Timeline reasonable?",
        "qualityGate": "Insights communicated, action items assigned and tracked",
        "source": "doc"
      }
    ],
    "source": "doc"
  },
  "partner-selection-recruitment": {
    "stages": [
      {
        "name": "Market Research",
        "objective": "Understand the partner landscape.",
        "input": "Market knowledge",
        "output": "Partner landscape map",
        "activities": "Research potential partners, segment by fit",
        "tools": "Exa, Apollo",
        "roles": "Channel lead",
        "successMetric": "Landscape mapped",
        "decisionPoints": "Who extends our reach?",
        "qualityGate": "Go: field clear. Loop back: blind.",
        "source": "authored"
      },
      {
        "name": "Partner ID",
        "objective": "Shortlist potential partners.",
        "input": "Landscape map",
        "output": "Partner shortlist",
        "activities": "Identify candidates, prioritize by fit",
        "tools": "Exa, CRM",
        "roles": "Channel lead",
        "successMetric": "Shortlist built",
        "decisionPoints": "Which partners matter most?",
        "qualityGate": "Go: shortlist strong. Loop back: weak.",
        "source": "authored"
      },
      {
        "name": "Fit Assessment",
        "objective": "Check mutual fit.",
        "input": "Shortlist, criteria",
        "output": "Fit scores",
        "activities": "Assess market, motion, and commitment fit",
        "tools": "Assessment",
        "roles": "Channel · leadership",
        "successMetric": "Fit assessed",
        "decisionPoints": "Do incentives align?",
        "qualityGate": "Go: aligned. Loop back: mismatch.",
        "source": "authored"
      },
      {
        "name": "Approach",
        "objective": "Start the conversation.",
        "input": "Fit scores",
        "output": "Open dialogue",
        "activities": "Reach out, build rapport, gauge interest",
        "tools": "Email, LinkedIn",
        "roles": "Channel lead",
        "successMetric": "Dialogue open",
        "decisionPoints": "Are they interested?",
        "qualityGate": "Go: engaged. Loop back: cold.",
        "source": "authored"
      },
      {
        "name": "Relationship",
        "objective": "Build the relationship.",
        "input": "Open dialogue",
        "output": "Strong relationship",
        "activities": "Meet, share value, find the joint win",
        "tools": "Meetings",
        "roles": "Channel lead",
        "successMetric": "Relationship built",
        "decisionPoints": "Is there a real win together?",
        "qualityGate": "Go: genuine. Loop back: superficial.",
        "source": "authored"
      },
      {
        "name": "Agreement",
        "objective": "Negotiate the terms.",
        "input": "Relationship, terms",
        "output": "Signed agreement",
        "activities": "Negotiate terms, align incentives, sign",
        "tools": "Contracts",
        "roles": "Channel · legal",
        "successMetric": "Agreement signed",
        "decisionPoints": "Is the deal fair?",
        "qualityGate": "Go: signed. Loop back: stalled.",
        "source": "authored"
      },
      {
        "name": "Onboarding",
        "objective": "Bring them in properly.",
        "input": "Agreement",
        "output": "Onboarded partner",
        "activities": "Set up access, train, align on launch",
        "tools": "Onboarding",
        "roles": "Channel · enablement",
        "successMetric": "Partner onboarded",
        "decisionPoints": "Can they sell us?",
        "qualityGate": "Go: ready. Loop back: lost.",
        "source": "authored"
      },
      {
        "name": "Activation",
        "objective": "Get them producing.",
        "input": "Onboarded partner",
        "output": "Active partner",
        "activities": "Co-launch, support early deals, remove friction",
        "tools": "Support",
        "roles": "Channel",
        "successMetric": "Partner active",
        "decisionPoints": "Are they selling?",
        "qualityGate": "Go: producing. Loop back: dormant.",
        "source": "authored"
      },
      {
        "name": "Performance Monitor",
        "objective": "Manage the relationship.",
        "input": "Results, feedback",
        "output": "Performance view",
        "activities": "Track performance, review quarterly, support",
        "tools": "Dashboards",
        "roles": "Channel",
        "successMetric": "Performance tracked",
        "decisionPoints": "Is the partnership paying?",
        "qualityGate": "Go: healthy. Loop back: declining.",
        "source": "authored"
      }
    ],
    "source": "authored"
  },
  "partner-program-design": {
    "stages": [
      {
        "name": "Program Objectives",
        "objective": "Define what the program must do.",
        "input": "Business goals",
        "output": "Program goals",
        "activities": "Set objectives for the partner motion",
        "tools": "Planning",
        "roles": "Channel · leadership",
        "successMetric": "Objectives set",
        "decisionPoints": "What must partners deliver?",
        "qualityGate": "Go: clear. Loop back: vague.",
        "source": "authored"
      },
      {
        "name": "Partner Model",
        "objective": "Choose the model.",
        "input": "Objectives",
        "output": "Model chosen",
        "activities": "Pick reseller, referral, integration, or hybrid",
        "tools": "Strategy",
        "roles": "Channel",
        "successMetric": "Model chosen",
        "decisionPoints": "What model fits?",
        "qualityGate": "Go: chosen. Loop back: unclear.",
        "source": "authored"
      },
      {
        "name": "Commission Structure",
        "objective": "Align incentives.",
        "input": "Model, economics",
        "output": "Commission plan",
        "activities": "Design commission and revenue share",
        "tools": "Modeling",
        "roles": "Channel · finance",
        "successMetric": "Commission set",
        "decisionPoints": "Does it reward what we want?",
        "qualityGate": "Go: aligned. Loop back: misaligned.",
        "source": "authored"
      },
      {
        "name": "Co-Marketing",
        "objective": "Design joint marketing.",
        "input": "Program, budget",
        "output": "Co-marketing plan",
        "activities": "Plan joint campaigns, resources, leads",
        "tools": "Planning",
        "roles": "Channel · marketing",
        "successMetric": "Co-marketing designed",
        "decisionPoints": "Do both sides win?",
        "qualityGate": "Go: mutually valuable. Loop back: one-sided.",
        "source": "authored"
      },
      {
        "name": "Incentives",
        "objective": "Add the right incentives.",
        "input": "Program",
        "output": "Incentive plan",
        "activities": "Add bonuses, tiers, recognition",
        "tools": "Design",
        "roles": "Channel",
        "successMetric": "Incentives set",
        "decisionPoints": "Are partners motivated?",
        "qualityGate": "Go: motivating. Loop back: flat.",
        "source": "authored"
      },
      {
        "name": "Resources",
        "objective": "Give partners what they need.",
        "input": "Program",
        "output": "Resource pack",
        "activities": "Build collateral, training, support",
        "tools": "Enablement",
        "roles": "Channel · enablement",
        "successMetric": "Resources ready",
        "decisionPoints": "Can they sell well?",
        "qualityGate": "Go: equipped. Loop back: under-equipped.",
        "source": "authored"
      },
      {
        "name": "Training",
        "objective": "Make partners competent.",
        "input": "Resources",
        "output": "Trained partners",
        "activities": "Deliver training, certify",
        "tools": "Training",
        "roles": "Enablement",
        "successMetric": "Trained",
        "decisionPoints": "Do they know the motion?",
        "qualityGate": "Go: competent. Loop back: lost.",
        "source": "authored"
      },
      {
        "name": "Execution",
        "objective": "Run the program.",
        "input": "Program live",
        "output": "Active program",
        "activities": "Launch, support, manage day to day",
        "tools": "Ops",
        "roles": "Channel",
        "successMetric": "Program running",
        "decisionPoints": "Is it running?",
        "qualityGate": "Go: live. Loop back: stalled.",
        "source": "authored"
      },
      {
        "name": "Performance",
        "objective": "Measure and improve.",
        "input": "Results",
        "output": "Program view",
        "activities": "Track performance, iterate the program",
        "tools": "Dashboards",
        "roles": "Channel",
        "successMetric": "Program improving",
        "decisionPoints": "Is it working?",
        "qualityGate": "Go: compounding. Loop back: stagnant.",
        "source": "authored"
      }
    ],
    "source": "authored"
  },
  "partner-training-enablement": {
    "stages": [
      {
        "name": "Training Needs",
        "objective": "Find what partners must learn.",
        "input": "Partner feedback",
        "output": "Needs brief",
        "activities": "Assess gaps in product and motion knowledge",
        "tools": "Assessment",
        "roles": "Enablement",
        "successMetric": "Needs defined",
        "decisionPoints": "What blocks them?",
        "qualityGate": "Go: clear. Loop back: guessed.",
        "source": "authored"
      },
      {
        "name": "Curriculum",
        "objective": "Design the learning path.",
        "input": "Needs brief",
        "output": "Curriculum",
        "activities": "Design role-based curriculum",
        "tools": "Design",
        "roles": "Enablement",
        "successMetric": "Curriculum built",
        "decisionPoints": "What order teaches best?",
        "qualityGate": "Go: coherent. Loop back: random.",
        "source": "authored"
      },
      {
        "name": "Content Creation",
        "objective": "Build the material.",
        "input": "Curriculum",
        "output": "Content",
        "activities": "Create training, demos, certification",
        "tools": "Claude, Notion",
        "roles": "Enablement",
        "successMetric": "Content ready",
        "decisionPoints": "Is it usable?",
        "qualityGate": "Go: sharp. Loop back: stale.",
        "source": "authored"
      },
      {
        "name": "Delivery",
        "objective": "Plan the delivery.",
        "input": "Content",
        "output": "Delivery plan",
        "activities": "Schedule, assign, prepare",
        "tools": "Calendar",
        "roles": "Enablement",
        "successMetric": "Delivery planned",
        "decisionPoints": "When do they learn?",
        "qualityGate": "Go: scheduled. Loop back: chaos.",
        "source": "authored"
      },
      {
        "name": "Execution",
        "objective": "Run the training.",
        "input": "Delivery plan",
        "output": "Trained partners",
        "activities": "Deliver sessions, labs, certifications",
        "tools": "LMS",
        "roles": "Enablement",
        "successMetric": "Training delivered",
        "decisionPoints": "Did it land?",
        "qualityGate": "Go: learned. Loop back: skipped.",
        "source": "authored"
      },
      {
        "name": "Certification",
        "objective": "Verify competence.",
        "input": "Training",
        "output": "Certified partners",
        "activities": "Test and certify on real skills",
        "tools": "Assessments",
        "roles": "Enablement",
        "successMetric": "Certified",
        "decisionPoints": "Can they actually do it?",
        "qualityGate": "Go: proven. Loop back: unproven.",
        "source": "authored"
      },
      {
        "name": "Reinforcement",
        "objective": "Keep it fresh.",
        "input": "Usage, feedback",
        "output": "Refreshed partners",
        "activities": "Reinforce, update, re-engage",
        "tools": "Updates",
        "roles": "Enablement",
        "successMetric": "Knowledge current",
        "decisionPoints": "Is it sticking?",
        "qualityGate": "Go: retained. Loop back: decayed.",
        "source": "authored"
      },
      {
        "name": "Resource Updates",
        "objective": "Keep the library current.",
        "input": "Product changes",
        "output": "Updated resources",
        "activities": "Update as product and motion evolve",
        "tools": "Docs",
        "roles": "Enablement",
        "successMetric": "Resources current",
        "decisionPoints": "Is it current?",
        "qualityGate": "Go: fresh. Loop back: stale.",
        "source": "authored"
      }
    ],
    "source": "authored"
  },
  "co-marketing-campaign": {
    "stages": [
      {
        "name": "Opportunity ID",
        "objective": "Find the joint campaign.",
        "input": "Partner alignment",
        "output": "Campaign opportunity",
        "activities": "Identify a campaign both sides can win",
        "tools": "Planning",
        "roles": "Channel · marketing",
        "successMetric": "Opportunity found",
        "decisionPoints": "Is there shared value?",
        "qualityGate": "Go: real. Loop back: forced.",
        "source": "authored"
      },
      {
        "name": "Joint Planning",
        "objective": "Plan together.",
        "input": "Opportunity",
        "output": "Joint plan",
        "activities": "Agree objectives, budget, roles, timeline",
        "tools": "Planning",
        "roles": "Channel · marketing",
        "successMetric": "Plan agreed",
        "decisionPoints": "Are both committed?",
        "qualityGate": "Go: aligned. Loop back: one-sided.",
        "source": "authored"
      },
      {
        "name": "Campaign Dev",
        "objective": "Build the campaign.",
        "input": "Joint plan",
        "output": "Campaign assets",
        "activities": "Create content, creative, offers together",
        "tools": "Claude, design",
        "roles": "Marketing",
        "successMetric": "Assets ready",
        "decisionPoints": "Does it serve both audiences?",
        "qualityGate": "Go: strong. Loop back: weak.",
        "source": "authored"
      },
      {
        "name": "Execution",
        "objective": "Run it.",
        "input": "Campaign assets",
        "output": "Campaign live",
        "activities": "Launch, coordinate, manage",
        "tools": "Ops",
        "roles": "Marketing",
        "successMetric": "Campaign live",
        "decisionPoints": "Is it running well?",
        "qualityGate": "Go: on track. Loop back: drifting.",
        "source": "authored"
      },
      {
        "name": "Lead Sharing",
        "objective": "Split the leads fairly.",
        "input": "Campaign results",
        "output": "Shared leads",
        "activities": "Distribute leads per agreement",
        "tools": "CRM",
        "roles": "Channel · marketing",
        "successMetric": "Leads shared",
        "decisionPoints": "Is the split fair?",
        "qualityGate": "Go: fair. Loop back: contested.",
        "source": "authored"
      },
      {
        "name": "ROI",
        "objective": "Measure both sides.",
        "input": "Results, spend",
        "output": "ROI view",
        "activities": "Attribute and report ROI to both",
        "tools": "Analytics",
        "roles": "Channel · marketing",
        "successMetric": "ROI clear",
        "decisionPoints": "Did both win?",
        "qualityGate": "Go: proven. Loop back: unclear.",
        "source": "authored"
      },
      {
        "name": "Optimization",
        "objective": "Improve the model.",
        "input": "Learnings",
        "output": "Better campaigns",
        "activities": "Feed learnings into the next",
        "tools": "Review",
        "roles": "Marketing",
        "successMetric": "Model improving",
        "decisionPoints": "What do we repeat?",
        "qualityGate": "Go: compounding. Loop back: repeating mistakes.",
        "source": "authored"
      },
      {
        "name": "Feedback",
        "objective": "Close the loop.",
        "input": "Partner feedback",
        "output": "Relationship notes",
        "activities": "Review with the partner, strengthen ties",
        "tools": "Meetings",
        "roles": "Channel",
        "successMetric": "Feedback captured",
        "decisionPoints": "Is the relationship growing?",
        "qualityGate": "Go: strong. Loop back: strained.",
        "source": "authored"
      },
      {
        "name": "Renewal",
        "objective": "Decide the next one.",
        "input": "Feedback, ROI",
        "output": "Next campaign",
        "activities": "Plan renewal or expansion of the partnership",
        "tools": "Planning",
        "roles": "Channel",
        "successMetric": "Renewed or ended",
        "decisionPoints": "Do we do it again?",
        "qualityGate": "Go: renewed. Loop back: ended cleanly.",
        "source": "authored"
      }
    ],
    "source": "authored"
  },
  "deal-registration": {
    "stages": [
      {
        "name": "Partner Deal Activity",
        "objective": "Capture partner deals.",
        "input": "Partner pipeline",
        "output": "Registered activity",
        "activities": "Track partner deal activity in the system",
        "tools": "CRM",
        "roles": "Channel",
        "successMetric": "Activity captured",
        "decisionPoints": "What are partners selling?",
        "qualityGate": "Go: visible. Loop back: hidden.",
        "source": "authored"
      },
      {
        "name": "Registration",
        "objective": "Formalize the claim.",
        "input": "Activity",
        "output": "Registered deal",
        "activities": "Process the registration quickly",
        "tools": "CRM",
        "roles": "Channel",
        "successMetric": "Deal registered",
        "decisionPoints": "Is it easy?",
        "qualityGate": "Go: easy. Loop back: friction.",
        "source": "authored"
      },
      {
        "name": "Approval",
        "objective": "Approve the registration.",
        "input": "Registered deal",
        "output": "Approved registration",
        "activities": "Validate, approve, protect territory",
        "tools": "Process",
        "roles": "Channel",
        "successMetric": "Approved",
        "decisionPoints": "Is it legitimate?",
        "qualityGate": "Go: approved. Loop back: rejected.",
        "source": "authored"
      },
      {
        "name": "Territory Mgmt",
        "objective": "Protect the territory.",
        "input": "Registrations",
        "output": "Territory view",
        "activities": "Manage overlaps and ownership",
        "tools": "CRM",
        "roles": "Channel",
        "successMetric": "Territory clear",
        "decisionPoints": "Any conflicts?",
        "qualityGate": "Go: clean. Loop back: conflict.",
        "source": "authored"
      },
      {
        "name": "Conflict Resolution",
        "objective": "Resolve conflicts fairly.",
        "input": "Disputes",
        "output": "Resolved conflicts",
        "activities": "Mediate competing claims",
        "tools": "Process",
        "roles": "Channel",
        "successMetric": "Resolved",
        "decisionPoints": "Fair outcome?",
        "qualityGate": "Go: fair. Loop back: escalation.",
        "source": "authored"
      },
      {
        "name": "Support",
        "objective": "Back the registered deal.",
        "input": "Approved deal",
        "output": "Supported deal",
        "activities": "Provide pricing, demos, deal support",
        "tools": "Support",
        "roles": "Channel · sales",
        "successMetric": "Deal supported",
        "decisionPoints": "Are partners equipped?",
        "qualityGate": "Go: equipped. Loop back: unsupported.",
        "source": "authored"
      },
      {
        "name": "Close",
        "objective": "Help it close.",
        "input": "Supported deal",
        "output": "Closed deal",
        "activities": "Assist through to signature",
        "tools": "Sales",
        "roles": "Channel",
        "successMetric": "Closed",
        "decisionPoints": "Did it close?",
        "qualityGate": "Go: won. Loop back: lost.",
        "source": "authored"
      },
      {
        "name": "Commission",
        "objective": "Pay it right.",
        "input": "Closed deal",
        "output": "Commission paid",
        "activities": "Calculate and pay commission on time",
        "tools": "Finance",
        "roles": "Channel · finance",
        "successMetric": "Commission paid",
        "decisionPoints": "Is the payout trusted?",
        "qualityGate": "Go: trusted. Loop back: dispute.",
        "source": "authored"
      },
      {
        "name": "Maintenance",
        "objective": "Keep the relationship.",
        "input": "Deal history",
        "output": "Strong partnership",
        "activities": "Follow up, learn, maintain",
        "tools": "CRM",
        "roles": "Channel",
        "successMetric": "Relationship healthy",
        "decisionPoints": "Is the partner motivated?",
        "qualityGate": "Go: strong. Loop back: strained.",
        "source": "authored"
      }
    ],
    "source": "authored"
  },
  "reseller-program": {
    "stages": [
      {
        "name": "Reseller Selection",
        "objective": "Pick who resells.",
        "input": "Market, criteria",
        "output": "Reseller shortlist",
        "activities": "Qualify resellers by reach and fit",
        "tools": "Assessment",
        "roles": "Channel",
        "successMetric": "Shortlist built",
        "decisionPoints": "Who can sell us well?",
        "qualityGate": "Go: strong. Loop back: weak.",
        "source": "authored"
      },
      {
        "name": "Agreement",
        "objective": "Sign the reseller agreement.",
        "input": "Shortlist, terms",
        "output": "Signed agreement",
        "activities": "Negotiate terms, margins, territory",
        "tools": "Contracts",
        "roles": "Channel · legal",
        "successMetric": "Agreement signed",
        "decisionPoints": "Is the deal clear?",
        "qualityGate": "Go: signed. Loop back: stalled.",
        "source": "authored"
      },
      {
        "name": "Margin Setup",
        "objective": "Set the economics.",
        "input": "Agreement",
        "output": "Margin plan",
        "activities": "Set margins, commissions, tiers",
        "tools": "Modeling",
        "roles": "Channel · finance",
        "successMetric": "Margins set",
        "decisionPoints": "Does it motivate?",
        "qualityGate": "Go: aligned. Loop back: misaligned.",
        "source": "authored"
      },
      {
        "name": "Portal Access",
        "objective": "Give them the tools.",
        "input": "Agreement",
        "output": "Access ready",
        "activities": "Provision portal, collateral, systems",
        "tools": "Access",
        "roles": "Channel",
        "successMetric": "Access live",
        "decisionPoints": "Can they operate?",
        "qualityGate": "Go: equipped. Loop back: locked out.",
        "source": "authored"
      },
      {
        "name": "Product Training",
        "objective": "Teach the product.",
        "input": "Materials",
        "output": "Trained resellers",
        "activities": "Train on product and value",
        "tools": "Training",
        "roles": "Enablement",
        "successMetric": "Trained",
        "decisionPoints": "Do they know it?",
        "qualityGate": "Go: competent. Loop back: lost.",
        "source": "authored"
      },
      {
        "name": "Sales Training",
        "objective": "Teach the motion.",
        "input": "Playbook",
        "output": "Sales-ready resellers",
        "activities": "Train on selling, objections, positioning",
        "tools": "Training",
        "roles": "Enablement",
        "successMetric": "Sales-ready",
        "decisionPoints": "Can they close?",
        "qualityGate": "Go: ready. Loop back: struggling.",
        "source": "authored"
      },
      {
        "name": "Territory",
        "objective": "Assign coverage.",
        "input": "Agreement, market",
        "output": "Territory plan",
        "activities": "Assign territory, set targets",
        "tools": "Planning",
        "roles": "Channel",
        "successMetric": "Territory assigned",
        "decisionPoints": "Is coverage balanced?",
        "qualityGate": "Go: clear. Loop back: overlap.",
        "source": "authored"
      },
      {
        "name": "Kickoff",
        "objective": "Launch the reseller.",
        "input": "Territory, training",
        "output": "Active reseller",
        "activities": "Formally launch, set expectations, start",
        "tools": "Ops",
        "roles": "Channel",
        "successMetric": "Kickoff complete",
        "decisionPoints": "Are they live?",
        "qualityGate": "Go: active. Loop back: stalled.",
        "source": "authored"
      },
      {
        "name": "Performance",
        "objective": "Manage and prune.",
        "input": "Results",
        "output": "Performance view",
        "activities": "Track performance, coach, prune underperformers",
        "tools": "Dashboards",
        "roles": "Channel",
        "successMetric": "Performance managed",
        "decisionPoints": "Are they producing?",
        "qualityGate": "Go: healthy. Loop back: dragging.",
        "source": "authored"
      }
    ],
    "source": "authored"
  },
  "partner-integration": {
    "stages": [
      {
        "name": "Opportunity",
        "objective": "Pick the integration worth building.",
        "input": "Partner, customers",
        "output": "Integration opportunity",
        "activities": "Identify integrations customers value",
        "tools": "Assessment",
        "roles": "Product · channel",
        "successMetric": "Opportunity chosen",
        "decisionPoints": "Will customers use it?",
        "qualityGate": "Go: real demand. Loop back: guess.",
        "source": "authored"
      },
      {
        "name": "Technical Requirements",
        "objective": "Define the build.",
        "input": "Opportunity",
        "output": "Requirements",
        "activities": "Scope API, data, workflows, security",
        "tools": "Spec",
        "roles": "Engineering",
        "successMetric": "Requirements set",
        "decisionPoints": "Is it well-defined?",
        "qualityGate": "Go: clear. Loop back: vague.",
        "source": "authored"
      },
      {
        "name": "Dev Plan",
        "objective": "Plan the build.",
        "input": "Requirements",
        "output": "Plan",
        "activities": "Plan milestones, owners, timeline",
        "tools": "Planning",
        "roles": "Engineering",
        "successMetric": "Plan ready",
        "decisionPoints": "Is the plan realistic?",
        "qualityGate": "Go: solid. Loop back: optimistic.",
        "source": "authored"
      },
      {
        "name": "Testing",
        "objective": "Make it reliable.",
        "input": "Build",
        "output": "Tested integration",
        "activities": "Test scenarios, edge cases, security",
        "tools": "QA",
        "roles": "Engineering",
        "successMetric": "Tested",
        "decisionPoints": "Does it work?",
        "qualityGate": "Go: solid. Loop back: broken.",
        "source": "authored"
      },
      {
        "name": "Documentation",
        "objective": "Document it.",
        "input": "Integration",
        "output": "Docs",
        "activities": "Write setup, troubleshooting, API docs",
        "tools": "Docs",
        "roles": "Engineering · enablement",
        "successMetric": "Documented",
        "decisionPoints": "Can partners adopt it?",
        "qualityGate": "Go: usable. Loop back: opaque.",
        "source": "authored"
      },
      {
        "name": "Launch",
        "objective": "Release it.",
        "input": "Tested integration",
        "output": "Live integration",
        "activities": "Deploy, announce, enable",
        "tools": "Launch",
        "roles": "Product · marketing",
        "successMetric": "Launched",
        "decisionPoints": "Is it live?",
        "qualityGate": "Go: live. Loop back: delayed.",
        "source": "authored"
      },
      {
        "name": "Promotion",
        "objective": "Promote it.",
        "input": "Live integration",
        "output": "Promoted integration",
        "activities": "Co-promote, marketplace, content",
        "tools": "Marketing",
        "roles": "Marketing · channel",
        "successMetric": "Promoted",
        "decisionPoints": "Do customers know?",
        "qualityGate": "Go: visible. Loop back: invisible.",
        "source": "authored"
      },
      {
        "name": "Training",
        "objective": "Teach adoption.",
        "input": "Integration, docs",
        "output": "Trained teams",
        "activities": "Train partners and internal teams",
        "tools": "Training",
        "roles": "Enablement",
        "successMetric": "Trained",
        "decisionPoints": "Can they use it?",
        "qualityGate": "Go: competent. Loop back: confused.",
        "source": "authored"
      },
      {
        "name": "Education",
        "objective": "Educate customers.",
        "input": "Integration",
        "output": "Informed customers",
        "activities": "Guide customers through value",
        "tools": "Content",
        "roles": "CS · marketing",
        "successMetric": "Customers educated",
        "decisionPoints": "Do they adopt it?",
        "qualityGate": "Go: adopted. Loop back: unused.",
        "source": "authored"
      }
    ],
    "source": "authored"
  },
  "referral-program-design": {
    "stages": [
      {
        "name": "Objectives",
        "objective": "Define the referral program's goal.",
        "input": "Business goals",
        "output": "Program goals",
        "activities": "Set what the program must deliver",
        "tools": "Planning",
        "roles": "Marketing",
        "successMetric": "Goals set",
        "decisionPoints": "What do we want?",
        "qualityGate": "Go: clear. Loop back: vague.",
        "source": "authored"
      },
      {
        "name": "Incentive Structure",
        "objective": "Design the reward.",
        "input": "Goals, economics",
        "output": "Incentive plan",
        "activities": "Set referral and referee incentives",
        "tools": "Modeling",
        "roles": "Marketing · finance",
        "successMetric": "Incentives set",
        "decisionPoints": "Is it worth referring?",
        "qualityGate": "Go: motivating. Loop back: weak.",
        "source": "authored"
      },
      {
        "name": "Process Def",
        "objective": "Define the flow.",
        "input": "Incentives",
        "output": "Process",
        "activities": "Map refer → track → reward → onboard",
        "tools": "Process design",
        "roles": "Marketing",
        "successMetric": "Process clear",
        "decisionPoints": "Is it frictionless?",
        "qualityGate": "Go: simple. Loop back: clunky.",
        "source": "authored"
      },
      {
        "name": "Platform Selection",
        "objective": "Pick the tool.",
        "input": "Process, budget",
        "output": "Platform",
        "activities": "Choose referral tracking platform",
        "tools": "Evaluation",
        "roles": "Marketing",
        "successMetric": "Platform chosen",
        "decisionPoints": "Does it fit?",
        "qualityGate": "Go: fits. Loop back: mismatch.",
        "source": "authored"
      },
      {
        "name": "Launch Prep",
        "objective": "Get ready to launch.",
        "input": "Platform, creative",
        "output": "Launch ready",
        "activities": "Build landing, creative, comms, tracking",
        "tools": "Marketing",
        "roles": "Marketing",
        "successMetric": "Ready to launch",
        "decisionPoints": "Is everything ready?",
        "qualityGate": "Go: ready. Loop back: gaps.",
        "source": "authored"
      },
      {
        "name": "Communication",
        "objective": "Tell customers.",
        "input": "Launch",
        "output": "Informed customers",
        "activities": "Announce, ask at the right moments",
        "tools": "Email, in-app",
        "roles": "Marketing · CS",
        "successMetric": "Communicated",
        "decisionPoints": "Do customers know?",
        "qualityGate": "Go: aware. Loop back: silent.",
        "source": "authored"
      },
      {
        "name": "Execution",
        "objective": "Run the program.",
        "input": "Program live",
        "output": "Active program",
        "activities": "Manage referrals, payouts, support",
        "tools": "Ops",
        "roles": "Marketing",
        "successMetric": "Program running",
        "decisionPoints": "Is it running?",
        "qualityGate": "Go: live. Loop back: stalled.",
        "source": "authored"
      },
      {
        "name": "Tracking",
        "objective": "Measure it.",
        "input": "Referral data",
        "output": "Performance view",
        "activities": "Track referrals, conversion, payout, ROI",
        "tools": "Analytics",
        "roles": "Marketing",
        "successMetric": "Tracked",
        "decisionPoints": "Is it working?",
        "qualityGate": "Go: clear. Loop back: blind.",
        "source": "authored"
      },
      {
        "name": "Optimization",
        "objective": "Improve it.",
        "input": "Learnings",
        "output": "Better program",
        "activities": "Test incentives, moments, messaging",
        "tools": "Testing",
        "roles": "Marketing",
        "successMetric": "Program improving",
        "decisionPoints": "What raises referrals?",
        "qualityGate": "Go: compounding. Loop back: flat.",
        "source": "authored"
      }
    ],
    "source": "authored"
  },
  "affiliate-marketing": {
    "stages": [
      {
        "name": "Affiliate Activated",
        "objective": "Get affiliates live.",
        "input": "Affiliate agreements",
        "output": "Active affiliates",
        "activities": "Onboard, set tracking, provide creative",
        "tools": "Platform",
        "roles": "Marketing",
        "successMetric": "Affiliates active",
        "decisionPoints": "Are they set up?",
        "qualityGate": "Go: live. Loop back: stuck.",
        "source": "authored"
      },
      {
        "name": "Campaign Strategy",
        "objective": "Plan the affiliate motion.",
        "input": "Affiliates, goals",
        "output": "Strategy",
        "activities": "Define campaigns, offers, targeting",
        "tools": "Planning",
        "roles": "Marketing",
        "successMetric": "Strategy set",
        "decisionPoints": "What drives conversions?",
        "qualityGate": "Go: clear. Loop back: vague.",
        "source": "authored"
      },
      {
        "name": "Promotion",
        "objective": "Help them promote.",
        "input": "Campaign assets",
        "output": "Promoted offers",
        "activities": "Provide creative, offers, support",
        "tools": "Assets",
        "roles": "Marketing",
        "successMetric": "Promotion active",
        "decisionPoints": "Are they promoting well?",
        "qualityGate": "Go: pushing. Loop back: idle.",
        "source": "authored"
      },
      {
        "name": "Traffic",
        "objective": "Drive the volume.",
        "input": "Promotion",
        "output": "Traffic",
        "activities": "Support with co-marketing, boost winners",
        "tools": "Analytics",
        "roles": "Marketing",
        "successMetric": "Traffic flowing",
        "decisionPoints": "Is traffic growing?",
        "qualityGate": "Go: scaling. Loop back: flat.",
        "source": "authored"
      },
      {
        "name": "Conversion Track",
        "objective": "Measure conversions.",
        "input": "Traffic",
        "output": "Conversion data",
        "activities": "Track conversions per affiliate",
        "tools": "Tracking",
        "roles": "Marketing",
        "successMetric": "Conversions tracked",
        "decisionPoints": "Is it converting?",
        "qualityGate": "Go: clear. Loop back: lost.",
        "source": "authored"
      },
      {
        "name": "Commission",
        "objective": "Pay on results.",
        "input": "Conversions",
        "output": "Commission paid",
        "activities": "Calculate and pay commissions reliably",
        "tools": "Finance",
        "roles": "Marketing · finance",
        "successMetric": "Commissions paid",
        "decisionPoints": "Is payment trusted?",
        "qualityGate": "Go: trusted. Loop back: dispute.",
        "source": "authored"
      },
      {
        "name": "Payment",
        "objective": "Pay on time.",
        "input": "Commissions",
        "output": "Paid affiliates",
        "activities": "Process payouts on schedule",
        "tools": "Finance",
        "roles": "Marketing",
        "successMetric": "Paid on time",
        "decisionPoints": "Are affiliates happy?",
        "qualityGate": "Go: reliable. Loop back: late.",
        "source": "authored"
      },
      {
        "name": "Reporting",
        "objective": "Report performance.",
        "input": "Data",
        "output": "Reports",
        "activities": "Report ROI, top affiliates, learnings",
        "tools": "Analytics",
        "roles": "Marketing",
        "successMetric": "Reported",
        "decisionPoints": "Is it clear?",
        "qualityGate": "Go: clear. Loop back: opaque.",
        "source": "authored"
      },
      {
        "name": "Optimization",
        "objective": "Improve the channel.",
        "input": "Learnings",
        "output": "Better affiliates",
        "activities": "Scale winners, prune losers, refine offers",
        "tools": "Review",
        "roles": "Marketing",
        "successMetric": "Channel improving",
        "decisionPoints": "Is the channel earning?",
        "qualityGate": "Go: compounding. Loop back: stagnant.",
        "source": "authored"
      }
    ],
    "source": "authored"
  },
  "campaign-strategy": {
    "stages": [
      {
        "name": "Business Objective",
        "objective": "Anchor the campaign to a number.",
        "input": "Business goals",
        "output": "Campaign objective",
        "activities": "Define what the campaign must move",
        "tools": "Planning",
        "roles": "Marketing · leadership",
        "successMetric": "Objective set",
        "decisionPoints": "What metric does it move?",
        "qualityGate": "Go: tied to a number. Loop back: vague.",
        "source": "authored"
      },
      {
        "name": "Audience",
        "objective": "Define who we reach.",
        "input": "Objective",
        "output": "Audience definition",
        "activities": "Segment precisely, build targeting",
        "tools": "Segmentation",
        "roles": "Marketing",
        "successMetric": "Audience defined",
        "decisionPoints": "Who exactly?",
        "qualityGate": "Go: sharp. Loop back: broad.",
        "source": "authored"
      },
      {
        "name": "Positioning",
        "objective": "Set the message angle.",
        "input": "Audience",
        "output": "Positioning",
        "activities": "Choose the message that resonates",
        "tools": "Messaging",
        "roles": "Marketing",
        "successMetric": "Positioning set",
        "decisionPoints": "What do they need to hear?",
        "qualityGate": "Go: distinct. Loop back: generic.",
        "source": "authored"
      },
      {
        "name": "Channel",
        "objective": "Pick where to reach them.",
        "input": "Audience, budget",
        "output": "Channel plan",
        "activities": "Select channels, prioritize",
        "tools": "Channel planning",
        "roles": "Marketing",
        "successMetric": "Channels chosen",
        "decisionPoints": "Where are they?",
        "qualityGate": "Go: right. Loop back: wrong.",
        "source": "authored"
      },
      {
        "name": "Timeline",
        "objective": "Set the schedule.",
        "input": "Campaign scope",
        "output": "Timeline",
        "activities": "Plan phases, milestones, dates",
        "tools": "Planning",
        "roles": "Marketing",
        "successMetric": "Timeline set",
        "decisionPoints": "When does it run?",
        "qualityGate": "Go: clear. Loop back: tight.",
        "source": "authored"
      },
      {
        "name": "Budget",
        "objective": "Allocate spend.",
        "input": "Timeline, channels",
        "output": "Budget plan",
        "activities": "Allocate budget to channels and phases",
        "tools": "Finance",
        "roles": "Marketing · finance",
        "successMetric": "Budget locked",
        "decisionPoints": "Is it enough?",
        "qualityGate": "Go: funded. Loop back: underfunded.",
        "source": "authored"
      },
      {
        "name": "Content Strategy",
        "objective": "Plan the creative.",
        "input": "Budget, positioning",
        "output": "Content plan",
        "activities": "Plan assets, formats, messaging",
        "tools": "Planning",
        "roles": "Marketing",
        "successMetric": "Content planned",
        "decisionPoints": "What do we make?",
        "qualityGate": "Go: ready. Loop back: empty.",
        "source": "authored"
      },
      {
        "name": "Execution Plan",
        "objective": "Prepare to run.",
        "input": "All plans",
        "output": "Execution plan",
        "activities": "Assign owners, resources, dependencies",
        "tools": "Ops",
        "roles": "Marketing",
        "successMetric": "Execution planned",
        "decisionPoints": "Who does what?",
        "qualityGate": "Go: resourced. Loop back: unowned.",
        "source": "authored"
      },
      {
        "name": "Launch",
        "objective": "Run the campaign.",
        "input": "Execution plan",
        "output": "Campaign live",
        "activities": "Launch, monitor, adjust",
        "tools": "Ops",
        "roles": "Marketing",
        "successMetric": "Launched",
        "decisionPoints": "Is it running?",
        "qualityGate": "Go: live. Loop back: delayed.",
        "source": "authored"
      },
      {
        "name": "Tracking",
        "objective": "Measure and learn.",
        "input": "Results",
        "output": "Campaign view",
        "activities": "Track performance, report, feed next",
        "tools": "Analytics",
        "roles": "Marketing",
        "successMetric": "Measured",
        "decisionPoints": "What worked?",
        "qualityGate": "Go: learned. Loop back: repeated.",
        "source": "authored"
      }
    ],
    "source": "authored"
  },
  "multi-channel-campaign": {
    "stages": [
      {
        "name": "Objectives",
        "objective": "Define what the campaign must do.",
        "input": "Business goals",
        "output": "Objectives",
        "activities": "Set shared objectives across channels",
        "tools": "Planning",
        "roles": "Marketing",
        "successMetric": "Objectives set",
        "decisionPoints": "One number?",
        "qualityGate": "Go: one target. Loop back: scattered.",
        "source": "authored"
      },
      {
        "name": "Channel Planning",
        "objective": "Plan the channel mix.",
        "input": "Objectives, audience",
        "output": "Channel plan",
        "activities": "Select channels, roles, sequencing",
        "tools": "Planning",
        "roles": "Marketing",
        "successMetric": "Channel plan built",
        "decisionPoints": "Which channels, in what order?",
        "qualityGate": "Go: coherent. Loop back: random.",
        "source": "authored"
      },
      {
        "name": "Message Tailoring",
        "objective": "Adapt per channel.",
        "input": "Channel plan",
        "output": "Tailored messages",
        "activities": "Tailor message to each channel's context",
        "tools": "Messaging",
        "roles": "Marketing",
        "successMetric": "Messages tailored",
        "decisionPoints": "Consistent but native?",
        "qualityGate": "Go: adapted. Loop back: pasted.",
        "source": "authored"
      },
      {
        "name": "Content Creation",
        "objective": "Build the assets.",
        "input": "Tailored messages",
        "output": "Campaign assets",
        "activities": "Create assets for each channel",
        "tools": "Claude, design",
        "roles": "Marketing",
        "successMetric": "Assets ready",
        "decisionPoints": "Is everything made?",
        "qualityGate": "Go: complete. Loop back: gaps.",
        "source": "authored"
      },
      {
        "name": "Schedule Coord",
        "objective": "Synchronize timing.",
        "input": "Assets, channel plan",
        "output": "Synchronized schedule",
        "activities": "Coordinate timing so channels reinforce",
        "tools": "Calendar",
        "roles": "Marketing",
        "successMetric": "Synchronized",
        "decisionPoints": "Do they reinforce?",
        "qualityGate": "Go: reinforcing. Loop back: out of sync.",
        "source": "authored"
      },
      {
        "name": "Launch Sync",
        "objective": "Launch together.",
        "input": "Schedule",
        "output": "Campaign live",
        "activities": "Launch all channels in sync",
        "tools": "Ops",
        "roles": "Marketing",
        "successMetric": "Launched in sync",
        "decisionPoints": "Are they live together?",
        "qualityGate": "Go: aligned. Loop back: staggered.",
        "source": "authored"
      },
      {
        "name": "Cross-Channel Track",
        "objective": "Track across channels.",
        "input": "Live campaign",
        "output": "Cross-channel data",
        "activities": "Track attribution across channels",
        "tools": "Analytics",
        "roles": "Marketing",
        "successMetric": "Tracked",
        "decisionPoints": "Which channel drove it?",
        "qualityGate": "Go: clear. Loop back: fragmented.",
        "source": "authored"
      },
      {
        "name": "Analysis",
        "objective": "Analyze the results.",
        "input": "Data",
        "output": "Insights",
        "activities": "Analyze what worked per channel",
        "tools": "Analytics",
        "roles": "Marketing",
        "successMetric": "Insights clear",
        "decisionPoints": "What do we double down on?",
        "qualityGate": "Go: actionable. Loop back: noise.",
        "source": "authored"
      },
      {
        "name": "Optimization",
        "objective": "Improve the next run.",
        "input": "Learnings",
        "output": "Better campaign",
        "activities": "Feed learnings into the next campaign",
        "tools": "Review",
        "roles": "Marketing",
        "successMetric": "Optimized",
        "decisionPoints": "Did we learn?",
        "qualityGate": "Go: compounding. Loop back: repeating.",
        "source": "authored"
      }
    ],
    "source": "authored"
  },
  "campaign-execution": {
    "stages": [
      {
        "name": "Campaign Ready",
        "objective": "Confirm readiness.",
        "input": "Plans, assets",
        "output": "Ready campaign",
        "activities": "Verify assets, budget, owners, timeline",
        "tools": "Checklist",
        "roles": "Marketing",
        "successMetric": "Confirmed ready",
        "decisionPoints": "Is everything ready?",
        "qualityGate": "Go: ready. Loop back: gaps.",
        "source": "authored"
      },
      {
        "name": "Resource Alignment",
        "objective": "Make sure people are set.",
        "input": "Ready campaign",
        "output": "Aligned resources",
        "activities": "Assign owners, coverage, support",
        "tools": "Ops",
        "roles": "Marketing",
        "successMetric": "Resources aligned",
        "decisionPoints": "Who runs it?",
        "qualityGate": "Go: resourced. Loop back: thin.",
        "source": "authored"
      },
      {
        "name": "Launch",
        "objective": "Go live.",
        "input": "Aligned resources",
        "output": "Campaign live",
        "activities": "Launch across channels",
        "tools": "Ops",
        "roles": "Marketing",
        "successMetric": "Launched",
        "decisionPoints": "Is it live?",
        "qualityGate": "Go: live. Loop back: delayed.",
        "source": "authored"
      },
      {
        "name": "Real-Time Monitor",
        "objective": "Watch it run.",
        "input": "Live campaign",
        "output": "Monitoring",
        "activities": "Monitor metrics and spend in real time",
        "tools": "Dashboards",
        "roles": "Marketing",
        "successMetric": "Monitored",
        "decisionPoints": "Is it on track?",
        "qualityGate": "Go: watched. Loop back: blind.",
        "source": "authored"
      },
      {
        "name": "Issue Resolution",
        "objective": "Fix problems fast.",
        "input": "Monitoring",
        "output": "Resolved issues",
        "activities": "Resolve breakdowns, creative fatigue, spend issues",
        "tools": "Ops",
        "roles": "Marketing",
        "successMetric": "Issues resolved",
        "decisionPoints": "Is anything breaking?",
        "qualityGate": "Go: smooth. Loop back: bleeding.",
        "source": "authored"
      },
      {
        "name": "Optimization",
        "objective": "Adjust mid-flight.",
        "input": "Monitoring",
        "output": "Optimized campaign",
        "activities": "Shift budget, creative, targeting",
        "tools": "Optimization",
        "roles": "Marketing",
        "successMetric": "Optimized",
        "decisionPoints": "Can we do better?",
        "qualityGate": "Go: improving. Loop back: static.",
        "source": "authored"
      },
      {
        "name": "Pace",
        "objective": "Keep the pace.",
        "input": "Optimization",
        "output": "On-pace campaign",
        "activities": "Manage spend and pace to plan",
        "tools": "Dashboards",
        "roles": "Marketing",
        "successMetric": "On pace",
        "decisionPoints": "Are we on pace?",
        "qualityGate": "Go: paced. Loop back: front/back-loaded.",
        "source": "authored"
      },
      {
        "name": "Close-out",
        "objective": "Wrap it cleanly.",
        "input": "Campaign results",
        "output": "Closed campaign",
        "activities": "Stop, clean data, finalize",
        "tools": "Ops",
        "roles": "Marketing",
        "successMetric": "Closed",
        "decisionPoints": "Is it closed?",
        "qualityGate": "Go: clean. Loop back: messy.",
        "source": "authored"
      },
      {
        "name": "Learning",
        "objective": "Capture the lessons.",
        "input": "Close-out",
        "output": "Learnings",
        "activities": "Document what worked, share",
        "tools": "Review",
        "roles": "Marketing",
        "successMetric": "Learnings captured",
        "decisionPoints": "What do we carry forward?",
        "qualityGate": "Go: learning. Loop back: repeating.",
        "source": "authored"
      }
    ],
    "source": "authored"
  },
  "campaign-analytics": {
    "stages": [
      {
        "name": "Active",
        "objective": "Define what to measure.",
        "input": "Campaign, goals",
        "output": "Metric set",
        "activities": "Define metrics tied to the objective",
        "tools": "Metrics framework",
        "roles": "Marketing",
        "successMetric": "Metrics defined",
        "decisionPoints": "What proves success?",
        "qualityGate": "Go: right metrics. Loop back: vanity.",
        "source": "authored"
      },
      {
        "name": "Metric Track",
        "objective": "Wire the tracking.",
        "input": "Metric set",
        "output": "Tracking live",
        "activities": "Implement tracking, integrate data",
        "tools": "Analytics",
        "roles": "Marketing · data",
        "successMetric": "Tracking live",
        "decisionPoints": "Is data flowing?",
        "qualityGate": "Go: flowing. Loop back: gaps.",
        "source": "authored"
      },
      {
        "name": "Daily Monitor",
        "objective": "Watch daily.",
        "input": "Tracking",
        "output": "Daily view",
        "activities": "Monitor metrics daily, flag anomalies",
        "tools": "Dashboards",
        "roles": "Marketing",
        "successMetric": "Monitored daily",
        "decisionPoints": "Is it healthy?",
        "qualityGate": "Go: watched. Loop back: blind.",
        "source": "authored"
      },
      {
        "name": "Trend Analysis",
        "objective": "Read the trends.",
        "input": "Daily data",
        "output": "Trends",
        "activities": "Analyze direction and inflection",
        "tools": "Analytics",
        "roles": "Marketing",
        "successMetric": "Trends clear",
        "decisionPoints": "What is shifting?",
        "qualityGate": "Go: understood. Loop back: noise.",
        "source": "authored"
      },
      {
        "name": "Conversion",
        "objective": "Track conversion to outcome.",
        "input": "Campaign data",
        "output": "Conversion view",
        "activities": "Measure conversions, not just clicks",
        "tools": "Analytics",
        "roles": "Marketing",
        "successMetric": "Conversion clear",
        "decisionPoints": "Did it convert?",
        "qualityGate": "Go: converting. Loop back: leaking.",
        "source": "authored"
      },
      {
        "name": "ROI",
        "objective": "Compute the return.",
        "input": "Spend, conversion",
        "output": "ROI view",
        "activities": "Calculate ROI, compare to targets",
        "tools": "Finance",
        "roles": "Marketing · finance",
        "successMetric": "ROI known",
        "decisionPoints": "Did it pay?",
        "qualityGate": "Go: profitable. Loop back: burning.",
        "source": "authored"
      },
      {
        "name": "Performance Report",
        "objective": "Report it.",
        "input": "ROI view",
        "output": "Report",
        "activities": "Report performance to stakeholders",
        "tools": "Reporting",
        "roles": "Marketing",
        "successMetric": "Reported",
        "decisionPoints": "Is it communicated?",
        "qualityGate": "Go: visible. Loop back: silent.",
        "source": "authored"
      },
      {
        "name": "Recommendations",
        "objective": "Propose next moves.",
        "input": "Report",
        "output": "Recommendations",
        "activities": "Recommend budget and strategy moves",
        "tools": "Strategy",
        "roles": "Marketing",
        "successMetric": "Recommendations made",
        "decisionPoints": "What next?",
        "qualityGate": "Go: acted. Loop back: ignored.",
        "source": "authored"
      },
      {
        "name": "Learning",
        "objective": "Feed the next campaign.",
        "input": "Learnings",
        "output": "Better campaigns",
        "activities": "Carry learnings forward",
        "tools": "Review",
        "roles": "Marketing",
        "successMetric": "Learning captured",
        "decisionPoints": "Did we learn?",
        "qualityGate": "Go: improving. Loop back: repeating.",
        "source": "authored"
      }
    ],
    "source": "authored"
  },
  "lead-scoring-model": {
    "stages": [
      {
        "name": "Metric Def",
        "objective": "Define what scores.",
        "input": "Lead data, ICP",
        "output": "Scoring metrics",
        "activities": "Define behavior and fit signals",
        "tools": "Metrics framework",
        "roles": "RevOps · marketing",
        "successMetric": "Metrics defined",
        "decisionPoints": "What predicts purchase?",
        "qualityGate": "Go: predictive. Loop back: guessed.",
        "source": "authored"
      },
      {
        "name": "Data Gathering",
        "objective": "Collect the scoring data.",
        "input": "Metrics, sources",
        "output": "Scoring data",
        "activities": "Gather behavior, firmographic, intent data",
        "tools": "Data pipeline",
        "roles": "RevOps",
        "successMetric": "Data flowing",
        "decisionPoints": "Is data available?",
        "qualityGate": "Go: complete. Loop back: gaps.",
        "source": "authored"
      },
      {
        "name": "Model Design",
        "objective": "Build the model.",
        "input": "Data, metrics",
        "output": "Scoring model",
        "activities": "Design weights, thresholds, logic",
        "tools": "Modeling",
        "roles": "RevOps",
        "successMetric": "Model built",
        "decisionPoints": "Is the logic sound?",
        "qualityGate": "Go: explainable. Loop back: black box.",
        "source": "authored"
      },
      {
        "name": "Weight Assignment",
        "objective": "Set the weights.",
        "input": "Model",
        "output": "Weighted model",
        "activities": "Assign weights by predictive value",
        "tools": "Modeling",
        "roles": "RevOps · sales",
        "successMetric": "Weights set",
        "decisionPoints": "Do weights reflect reality?",
        "qualityGate": "Go: calibrated. Loop back: arbitrary.",
        "source": "authored"
      },
      {
        "name": "Testing",
        "objective": "Prove the model.",
        "input": "Weighted model",
        "output": "Test results",
        "activities": "Back-test against outcomes",
        "tools": "Testing",
        "roles": "RevOps",
        "successMetric": "Validated",
        "decisionPoints": "Does it predict?",
        "qualityGate": "Go: predictive. Loop back: noise.",
        "source": "authored"
      },
      {
        "name": "Calibration",
        "objective": "Tune it.",
        "input": "Test results",
        "output": "Calibrated model",
        "activities": "Adjust thresholds and weights",
        "tools": "Analysis",
        "roles": "RevOps",
        "successMetric": "Calibrated",
        "decisionPoints": "Is it accurate?",
        "qualityGate": "Go: tuned. Loop back: off.",
        "source": "authored"
      },
      {
        "name": "Deployment",
        "objective": "Put it in production.",
        "input": "Calibrated model",
        "output": "Live scoring",
        "activities": "Deploy into routing and automation",
        "tools": "Deployment",
        "roles": "RevOps",
        "successMetric": "Deployed",
        "decisionPoints": "Is it live?",
        "qualityGate": "Go: live. Loop back: stuck.",
        "source": "authored"
      },
      {
        "name": "Monitoring",
        "objective": "Watch performance.",
        "input": "Live scoring",
        "output": "Performance view",
        "activities": "Monitor score-to-outcome accuracy",
        "tools": "Dashboards",
        "roles": "RevOps",
        "successMetric": "Monitored",
        "decisionPoints": "Is it holding?",
        "qualityGate": "Go: healthy. Loop back: drifting.",
        "source": "authored"
      },
      {
        "name": "Refinement",
        "objective": "Keep it improving.",
        "input": "Learnings",
        "output": "Better model",
        "activities": "Refine as the market and ICP evolve",
        "tools": "Review",
        "roles": "RevOps",
        "successMetric": "Model improving",
        "decisionPoints": "What changed?",
        "qualityGate": "Go: compounding. Loop back: stale.",
        "source": "authored"
      }
    ],
    "source": "authored"
  },
  "lead-nurture-sequences": {
    "stages": [
      {
        "name": "Segmentation",
        "objective": "Segment before you sequence.",
        "input": "Lead data",
        "output": "Segments",
        "activities": "Group leads by fit and stage",
        "tools": "Segmentation",
        "roles": "Marketing",
        "successMetric": "Segments built",
        "decisionPoints": "Who gets what?",
        "qualityGate": "Go: meaningful. Loop back: broad.",
        "source": "authored"
      },
      {
        "name": "Message Dev",
        "objective": "Write the messages.",
        "input": "Segments, personas",
        "output": "Messages",
        "activities": "Craft relevant messages per segment",
        "tools": "Claude, copy",
        "roles": "Marketing",
        "successMetric": "Messages ready",
        "decisionPoints": "Is it relevant?",
        "qualityGate": "Go: relevant. Loop back: generic.",
        "source": "authored"
      },
      {
        "name": "Email Design",
        "objective": "Design the emails.",
        "input": "Messages",
        "output": "Email assets",
        "activities": "Design templates, layout, CTA",
        "tools": "Design",
        "roles": "Marketing",
        "successMetric": "Designed",
        "decisionPoints": "Are they clean?",
        "qualityGate": "Go: clean. Loop back: cluttered.",
        "source": "authored"
      },
      {
        "name": "Sequence Flow",
        "objective": "Build the flow.",
        "input": "Emails, strategy",
        "output": "Sequence",
        "activities": "Design sequence steps, branches, timing",
        "tools": "Automation",
        "roles": "Marketing",
        "successMetric": "Flow built",
        "decisionPoints": "Does the flow make sense?",
        "qualityGate": "Go: logical. Loop back: tangled.",
        "source": "authored"
      },
      {
        "name": "Timing",
        "objective": "Set the cadence.",
        "input": "Sequence",
        "output": "Timed sequence",
        "activities": "Set send timing and intervals",
        "tools": "Planning",
        "roles": "Marketing",
        "successMetric": "Timing set",
        "decisionPoints": "Is the cadence right?",
        "qualityGate": "Go: paced. Loop back: spammy.",
        "source": "authored"
      },
      {
        "name": "Execution",
        "objective": "Run it.",
        "input": "Sequence",
        "output": "Nurture active",
        "activities": "Launch and manage the sequence",
        "tools": "Automation",
        "roles": "Marketing",
        "successMetric": "Running",
        "decisionPoints": "Is it running?",
        "qualityGate": "Go: live. Loop back: stopped.",
        "source": "authored"
      },
      {
        "name": "Engagement Monitor",
        "objective": "Watch engagement.",
        "input": "Nurture data",
        "output": "Engagement view",
        "activities": "Track opens, clicks, replies, handoffs",
        "tools": "Analytics",
        "roles": "Marketing",
        "successMetric": "Monitored",
        "decisionPoints": "Is it working?",
        "qualityGate": "Go: engaged. Loop back: ignored.",
        "source": "authored"
      },
      {
        "name": "Analysis",
        "objective": "Analyze performance.",
        "input": "Engagement data",
        "output": "Insights",
        "activities": "Find what works per segment",
        "tools": "Analytics",
        "roles": "Marketing",
        "successMetric": "Insights clear",
        "decisionPoints": "What do we improve?",
        "qualityGate": "Go: actionable. Loop back: noise.",
        "source": "authored"
      },
      {
        "name": "Personalization",
        "objective": "Make it personal.",
        "input": "Insights, data",
        "output": "Personalized nurture",
        "activities": "Add personalization at scale",
        "tools": "Claude",
        "roles": "Marketing",
        "successMetric": "Personalized",
        "decisionPoints": "Does it feel human?",
        "qualityGate": "Go: human. Loop back: robotic.",
        "source": "authored"
      }
    ],
    "source": "authored"
  },
  "value-proposition": {
    "stages": [
      {
        "name": "Market Research",
        "objective": "Understand the market.",
        "input": "Market data",
        "output": "Market view",
        "activities": "Research the market and alternatives",
        "tools": "Exa",
        "roles": "Marketing · founder",
        "successMetric": "Market clear",
        "decisionPoints": "Who else plays here?",
        "qualityGate": "Go: clear. Loop back: fog.",
        "source": "authored"
      },
      {
        "name": "Competitive Analysis",
        "objective": "Know the competition.",
        "input": "Market view",
        "output": "Competitive view",
        "activities": "Map competitors and alternatives",
        "tools": "Exa, apify",
        "roles": "Marketing",
        "successMetric": "Competitive clear",
        "decisionPoints": "What do they offer?",
        "qualityGate": "Go: mapped. Loop back: blind.",
        "source": "authored"
      },
      {
        "name": "Customer Research",
        "objective": "Hear the customers.",
        "input": "Segments",
        "output": "Customer insight",
        "activities": "Interview customers, capture their words",
        "tools": "Interviews",
        "roles": "Marketing · founder",
        "successMetric": "Customer insight",
        "decisionPoints": "What do they say?",
        "qualityGate": "Go: real. Loop back: assumed.",
        "source": "authored"
      },
      {
        "name": "Value Def",
        "objective": "Define the value.",
        "input": "Insight",
        "output": "Value statement",
        "activities": "Define the outcome and the value",
        "tools": "Synthesis",
        "roles": "Marketing",
        "successMetric": "Value defined",
        "decisionPoints": "What do we deliver?",
        "qualityGate": "Go: specific. Loop back: vague.",
        "source": "authored"
      },
      {
        "name": "Articulation",
        "objective": "Write it.",
        "input": "Value statement",
        "output": "Value prop",
        "activities": "Articulate in one line that lands",
        "tools": "Copywriting",
        "roles": "Marketing",
        "successMetric": "Articulated",
        "decisionPoints": "Can they repeat it?",
        "qualityGate": "Go: sharp. Loop back: forgettable.",
        "source": "authored"
      },
      {
        "name": "Testing",
        "objective": "Prove it with buyers.",
        "input": "Value prop",
        "output": "Test results",
        "activities": "Test against real buyers",
        "tools": "Testing",
        "roles": "Marketing",
        "successMetric": "Validated",
        "decisionPoints": "Does it land?",
        "qualityGate": "Go: resonates. Loop back: falls flat.",
        "source": "authored"
      },
      {
        "name": "Refinement",
        "objective": "Sharpen it.",
        "input": "Test results",
        "output": "Refined value prop",
        "activities": "Refine from feedback",
        "tools": "Iteration",
        "roles": "Marketing",
        "successMetric": "Refined",
        "decisionPoints": "What changes?",
        "qualityGate": "Go: stronger. Loop back: muddy.",
        "source": "authored"
      },
      {
        "name": "Sales Training",
        "objective": "Make it theirs.",
        "input": "Value prop",
        "output": "Trained sales",
        "activities": "Train sales to use it in their own words",
        "tools": "Training",
        "roles": "Enablement",
        "successMetric": "Adopted",
        "decisionPoints": "Do reps own it?",
        "qualityGate": "Go: used. Loop back: ignored.",
        "source": "authored"
      },
      {
        "name": "Consistency",
        "objective": "Keep it consistent.",
        "input": "Value prop, usage",
        "output": "Consistent message",
        "activities": "Keep it consistent across every touch",
        "tools": "Audit",
        "roles": "Marketing",
        "successMetric": "Consistent",
        "decisionPoints": "Is it everywhere?",
        "qualityGate": "Go: uniform. Loop back: scattered.",
        "source": "authored"
      }
    ],
    "source": "authored"
  },
  "messaging-hierarchy": {
    "stages": [
      {
        "name": "Value Prop",
        "objective": "Start from the core.",
        "input": "Value proposition",
        "output": "Core message",
        "activities": "Anchor the hierarchy in the value prop",
        "tools": "Strategy",
        "roles": "Marketing",
        "successMetric": "Core set",
        "decisionPoints": "What is the base?",
        "qualityGate": "Go: clear. Loop back: vague.",
        "source": "authored"
      },
      {
        "name": "Primary Messages",
        "objective": "Set the primary lines.",
        "input": "Core message",
        "output": "Primary messages",
        "activities": "Define the main message per audience",
        "tools": "Messaging",
        "roles": "Marketing",
        "successMetric": "Primary set",
        "decisionPoints": "What do they hear first?",
        "qualityGate": "Go: distinct. Loop back: muddled.",
        "source": "authored"
      },
      {
        "name": "Secondary",
        "objective": "Add supporting messages.",
        "input": "Primary",
        "output": "Secondary messages",
        "activities": "Define supporting proof and detail",
        "tools": "Messaging",
        "roles": "Marketing",
        "successMetric": "Secondary set",
        "decisionPoints": "What backs it up?",
        "qualityGate": "Go: supporting. Loop back: thin.",
        "source": "authored"
      },
      {
        "name": "Tertiary",
        "objective": "Add the detail.",
        "input": "Secondary",
        "output": "Tertiary messages",
        "activities": "Define niche and technical messages",
        "tools": "Messaging",
        "roles": "Marketing",
        "successMetric": "Tertiary set",
        "decisionPoints": "What's the depth?",
        "qualityGate": "Go: complete. Loop back: missing.",
        "source": "authored"
      },
      {
        "name": "Segment Tailoring",
        "objective": "Tailor per segment.",
        "input": "Hierarchy, segments",
        "output": "Tailored messages",
        "activities": "Adapt messages to each segment",
        "tools": "Messaging",
        "roles": "Marketing",
        "successMetric": "Tailored",
        "decisionPoints": "Does it fit each?",
        "qualityGate": "Go: relevant. Loop back: generic.",
        "source": "authored"
      },
      {
        "name": "Alignment",
        "objective": "Align sales and marketing.",
        "input": "Tailored messages",
        "output": "Aligned messaging",
        "activities": "Get sales on the same lines",
        "tools": "Alignment",
        "roles": "Marketing · sales",
        "successMetric": "Aligned",
        "decisionPoints": "Do they use it?",
        "qualityGate": "Go: one voice. Loop back: two voices.",
        "source": "authored"
      },
      {
        "name": "Documentation",
        "objective": "Write it down.",
        "input": "Aligned messaging",
        "output": "Messaging doc",
        "activities": "Document the hierarchy for reference",
        "tools": "Docs",
        "roles": "Marketing",
        "successMetric": "Documented",
        "decisionPoints": "Is it recorded?",
        "qualityGate": "Go: accessible. Loop back: tribal.",
        "source": "authored"
      },
      {
        "name": "Training",
        "objective": "Train the team.",
        "input": "Messaging doc",
        "output": "Trained team",
        "activities": "Train everyone on the hierarchy",
        "tools": "Training",
        "roles": "Enablement",
        "successMetric": "Trained",
        "decisionPoints": "Do they know it?",
        "qualityGate": "Go: fluent. Loop back: unaware.",
        "source": "authored"
      },
      {
        "name": "Monitoring",
        "objective": "Keep it current.",
        "input": "Usage, feedback",
        "output": "Updated messaging",
        "activities": "Monitor usage and refresh as needed",
        "tools": "Audit",
        "roles": "Marketing",
        "successMetric": "Current",
        "decisionPoints": "Is it still right?",
        "qualityGate": "Go: fresh. Loop back: stale.",
        "source": "authored"
      }
    ],
    "source": "authored"
  },
  "customer-success-stories": {
    "stages": [
      {
        "name": "Customer Selection",
        "objective": "Pick a story worth telling.",
        "input": "Customer base",
        "output": "Selected customer",
        "activities": "Choose a customer whose win matches the ICP",
        "tools": "Selection",
        "roles": "Marketing · CS",
        "successMetric": "Customer chosen",
        "decisionPoints": "Will this convince?",
        "qualityGate": "Go: compelling. Loop back: weak.",
        "source": "authored"
      },
      {
        "name": "Interview",
        "objective": "Capture the story.",
        "input": "Selected customer",
        "output": "Interview notes",
        "activities": "Interview the customer, capture verbatim",
        "tools": "Interview",
        "roles": "Marketing",
        "successMetric": "Story captured",
        "decisionPoints": "What really happened?",
        "qualityGate": "Go: real. Loop back: thin.",
        "source": "authored"
      },
      {
        "name": "Story Dev",
        "objective": "Shape the narrative.",
        "input": "Interview notes",
        "output": "Story arc",
        "activities": "Build the before → after → how arc",
        "tools": "Writing",
        "roles": "Marketing",
        "successMetric": "Story shaped",
        "decisionPoints": "Is there a clear arc?",
        "qualityGate": "Go: compelling. Loop back: flat.",
        "source": "authored"
      },
      {
        "name": "Case Study",
        "objective": "Write it.",
        "input": "Story arc, data",
        "output": "Case study",
        "activities": "Write the case study with real numbers",
        "tools": "Writing",
        "roles": "Marketing",
        "successMetric": "Written",
        "decisionPoints": "Are the numbers real?",
        "qualityGate": "Go: credible. Loop back: fluffy.",
        "source": "authored"
      },
      {
        "name": "Design",
        "objective": "Make it look great.",
        "input": "Case study",
        "output": "Designed case study",
        "activities": "Design layout, visuals, pull-quotes",
        "tools": "Design",
        "roles": "Marketing",
        "successMetric": "Designed",
        "decisionPoints": "Is it beautiful?",
        "qualityGate": "Go: polished. Loop back: plain.",
        "source": "authored"
      },
      {
        "name": "Publishing",
        "objective": "Publish it.",
        "input": "Designed case study",
        "output": "Published story",
        "activities": "Publish on site and channels",
        "tools": "Publishing",
        "roles": "Marketing",
        "successMetric": "Published",
        "decisionPoints": "Is it live?",
        "qualityGate": "Go: live. Loop back: delayed.",
        "source": "authored"
      },
      {
        "name": "Promotion",
        "objective": "Promote it.",
        "input": "Published story",
        "output": "Promoted story",
        "activities": "Promote via content, email, social",
        "tools": "Marketing",
        "roles": "Marketing",
        "successMetric": "Promoted",
        "decisionPoints": "Is it seen?",
        "qualityGate": "Go: visible. Loop back: hidden.",
        "source": "authored"
      },
      {
        "name": "Sales Integration",
        "objective": "Put it in the sales motion.",
        "input": "Story",
        "output": "Sales-ready story",
        "activities": "Integrate into collateral and decks",
        "tools": "Enablement",
        "roles": "Sales",
        "successMetric": "Integrated",
        "decisionPoints": "Do reps use it?",
        "qualityGate": "Go: used. Loop back: unused.",
        "source": "authored"
      },
      {
        "name": "ROI Docs",
        "objective": "Document the ROI.",
        "input": "Story, data",
        "output": "ROI proof",
        "activities": "Quantify ROI for credibility",
        "tools": "Analysis",
        "roles": "Marketing",
        "successMetric": "ROI documented",
        "decisionPoints": "Is it quantified?",
        "qualityGate": "Go: proven. Loop back: asserted.",
        "source": "authored"
      }
    ],
    "source": "authored"
  },
  "brand-strategy": {
    "stages": [
      {
        "name": "Market Position",
        "objective": "Define where you stand.",
        "input": "Market, competitors",
        "output": "Position",
        "activities": "Define the position you own in the market",
        "tools": "Strategy",
        "roles": "Founder · marketing",
        "successMetric": "Position defined",
        "decisionPoints": "Where do we win?",
        "qualityGate": "Go: clear. Loop back: generic.",
        "source": "authored"
      },
      {
        "name": "Brand Personality",
        "objective": "Define the voice.",
        "input": "Position",
        "output": "Personality",
        "activities": "Define character, tone, values",
        "tools": "Strategy",
        "roles": "Marketing",
        "successMetric": "Personality set",
        "decisionPoints": "Who are we?",
        "qualityGate": "Go: distinct. Loop back: bland.",
        "source": "authored"
      },
      {
        "name": "Visual Identity",
        "objective": "Build the look.",
        "input": "Personality",
        "output": "Identity system",
        "activities": "Design logo, colors, type, assets",
        "tools": "Design",
        "roles": "Marketing",
        "successMetric": "Identity built",
        "decisionPoints": "Does it match?",
        "qualityGate": "Go: cohesive. Loop back: inconsistent.",
        "source": "authored"
      },
      {
        "name": "Messaging Tone",
        "objective": "Lock the tone.",
        "input": "Personality",
        "output": "Tone guide",
        "activities": "Define tone of voice across contexts",
        "tools": "Writing",
        "roles": "Marketing",
        "successMetric": "Tone defined",
        "decisionPoints": "How do we speak?",
        "qualityGate": "Go: consistent. Loop back: varied.",
        "source": "authored"
      },
      {
        "name": "Guidelines",
        "objective": "Document the rules.",
        "input": "All brand assets",
        "output": "Brand guidelines",
        "activities": "Write guidelines for consistency",
        "tools": "Docs",
        "roles": "Marketing",
        "successMetric": "Guidelines written",
        "decisionPoints": "Is it documented?",
        "qualityGate": "Go: usable. Loop back: tribal.",
        "source": "authored"
      },
      {
        "name": "Stakeholder Alignment",
        "objective": "Align the org.",
        "input": "Guidelines",
        "output": "Aligned org",
        "activities": "Get the team on the same brand",
        "tools": "Alignment",
        "roles": "Leadership",
        "successMetric": "Aligned",
        "decisionPoints": "Do they live it?",
        "qualityGate": "Go: one brand. Loop back: fragmented.",
        "source": "authored"
      },
      {
        "name": "Implementation",
        "objective": "Roll it out.",
        "input": "Guidelines",
        "output": "Live brand",
        "activities": "Apply brand across every surface",
        "tools": "Rollout",
        "roles": "Marketing",
        "successMetric": "Implemented",
        "decisionPoints": "Is it applied?",
        "qualityGate": "Go: everywhere. Loop back: patchy.",
        "source": "authored"
      },
      {
        "name": "Monitoring",
        "objective": "Protect consistency.",
        "input": "Brand usage",
        "output": "Consistency view",
        "activities": "Audit consistency, correct drift",
        "tools": "Audit",
        "roles": "Marketing",
        "successMetric": "Consistent",
        "decisionPoints": "Is it consistent?",
        "qualityGate": "Go: uniform. Loop back: drifting.",
        "source": "authored"
      },
      {
        "name": "Consistency",
        "objective": "Keep it alive.",
        "input": "Feedback, usage",
        "output": "Evolving brand",
        "activities": "Refresh as the market and company evolve",
        "tools": "Review",
        "roles": "Marketing",
        "successMetric": "Current",
        "decisionPoints": "Is it current?",
        "qualityGate": "Go: relevant. Loop back: dated.",
        "source": "authored"
      }
    ],
    "source": "authored"
  },
  "industry-presence": {
    "stages": [
      {
        "name": "Strategy Def",
        "objective": "Define the presence goal.",
        "input": "Business goals",
        "output": "Presence strategy",
        "activities": "Decide where you must be seen",
        "tools": "Strategy",
        "roles": "Marketing · founder",
        "successMetric": "Strategy set",
        "decisionPoints": "Where do we need to be?",
        "qualityGate": "Go: clear. Loop back: vague.",
        "source": "authored"
      },
      {
        "name": "Target ID",
        "objective": "Identify the targets.",
        "input": "Strategy",
        "output": "Targets",
        "activities": "List events, outlets, communities that matter",
        "tools": "Research",
        "roles": "Marketing",
        "successMetric": "Targets identified",
        "decisionPoints": "Who must see us?",
        "qualityGate": "Go: right. Loop back: wrong.",
        "source": "authored"
      },
      {
        "name": "Sponsorship",
        "objective": "Pick sponsorships.",
        "input": "Targets, budget",
        "output": "Sponsorships",
        "activities": "Choose sponsorships that reach the ICP",
        "tools": "Evaluation",
        "roles": "Marketing",
        "successMetric": "Sponsorships chosen",
        "decisionPoints": "Is it worth it?",
        "qualityGate": "Go: reach. Loop back: vanity.",
        "source": "authored"
      },
      {
        "name": "Speaking",
        "objective": "Get on stages.",
        "input": "Targets, expertise",
        "output": "Speaking slots",
        "activities": "Secure talks, panels, keynotes",
        "tools": "Outreach",
        "roles": "Marketing · founder",
        "successMetric": "Speaking booked",
        "decisionPoints": "Where do we speak?",
        "qualityGate": "Go: on stage. Loop back: silent.",
        "source": "authored"
      },
      {
        "name": "Awards",
        "objective": "Chase the proof.",
        "input": "Targets, results",
        "output": "Awards",
        "activities": "Apply for relevant awards and listings",
        "tools": "Applications",
        "roles": "Marketing",
        "successMetric": "Awards pursued",
        "decisionPoints": "Is it credible?",
        "qualityGate": "Go: honored. Loop back: ignored.",
        "source": "authored"
      },
      {
        "name": "Partnerships",
        "objective": "Extend the reach.",
        "input": "Targets",
        "output": "Partnerships",
        "activities": "Build presence partnerships and cross-promotion",
        "tools": "Outreach",
        "roles": "Marketing · channel",
        "successMetric": "Partnerships built",
        "decisionPoints": "Who amplifies us?",
        "qualityGate": "Go: amplifying. Loop back: idle.",
        "source": "authored"
      },
      {
        "name": "Execution",
        "objective": "Run the presence.",
        "input": "All plans",
        "output": "Live presence",
        "activities": "Execute talks, sponsorships, content",
        "tools": "Ops",
        "roles": "Marketing",
        "successMetric": "Executing",
        "decisionPoints": "Is it happening?",
        "qualityGate": "Go: live. Loop back: stalled.",
        "source": "authored"
      },
      {
        "name": "Brand Leverage",
        "objective": "Turn presence into brand.",
        "input": "Presence results",
        "output": "Leveraged brand",
        "activities": "Convert appearances into content and pipeline",
        "tools": "Repurposing",
        "roles": "Marketing",
        "successMetric": "Leveraged",
        "decisionPoints": "Is it paying?",
        "qualityGate": "Go: compounding. Loop back: wasted.",
        "source": "authored"
      },
      {
        "name": "ROI",
        "objective": "Measure the return.",
        "input": "Results",
        "output": "ROI view",
        "activities": "Measure pipeline and brand impact",
        "tools": "Analytics",
        "roles": "Marketing",
        "successMetric": "ROI known",
        "decisionPoints": "Did it pay?",
        "qualityGate": "Go: clear. Loop back: vanity.",
        "source": "authored"
      }
    ],
    "source": "authored"
  },
  "customer-selection": {
    "stages": [
      {
        "name": "Prospect Def",
        "objective": "Define who the story must convince.",
        "input": "Target segments",
        "output": "Prospect definition",
        "activities": "Define the buyer the story should persuade",
        "tools": "Strategy",
        "roles": "Marketing",
        "successMetric": "Prospect defined",
        "decisionPoints": "Who are we convincing?",
        "qualityGate": "Go: sharp. Loop back: broad.",
        "source": "authored"
      },
      {
        "name": "ICP",
        "objective": "Match to the ICP.",
        "input": "Prospect definition, customers",
        "output": "Matching customers",
        "activities": "Find customers whose win mirrors the ICP",
        "tools": "CRM",
        "roles": "Marketing · CS",
        "successMetric": "Candidates found",
        "decisionPoints": "Whose story fits?",
        "qualityGate": "Go: strong. Loop back: weak.",
        "source": "authored"
      },
      {
        "name": "Outreach",
        "objective": "Ask them.",
        "input": "Candidates",
        "output": "Interested customers",
        "activities": "Reach out, gauge willingness",
        "tools": "Email",
        "roles": "Marketing",
        "successMetric": "Interested",
        "decisionPoints": "Are they willing?",
        "qualityGate": "Go: willing. Loop back: silent.",
        "source": "authored"
      },
      {
        "name": "Interest Confirm",
        "objective": "Confirm the commitment.",
        "input": "Interested customers",
        "output": "Confirmed customer",
        "activities": "Confirm scope, timing, enthusiasm",
        "tools": "Conversation",
        "roles": "Marketing",
        "successMetric": "Confirmed",
        "decisionPoints": "Is it real?",
        "qualityGate": "Go: committed. Loop back: lukewarm.",
        "source": "authored"
      },
      {
        "name": "Timeline",
        "objective": "Agree the timeline.",
        "input": "Confirmed customer",
        "output": "Timeline",
        "activities": "Agree dates for interview and delivery",
        "tools": "Planning",
        "roles": "Marketing",
        "successMetric": "Timeline set",
        "decisionPoints": "When?",
        "qualityGate": "Go: clear. Loop back: vague.",
        "source": "authored"
      },
      {
        "name": "Agreement",
        "objective": "Set expectations.",
        "input": "Timeline, scope",
        "output": "Agreement",
        "activities": "Agree on usage, approval, reciprocity",
        "tools": "Agreement",
        "roles": "Marketing",
        "successMetric": "Agreed",
        "decisionPoints": "Is the deal clear?",
        "qualityGate": "Go: aligned. Loop back: unclear.",
        "source": "authored"
      },
      {
        "name": "Scheduling",
        "objective": "Book it.",
        "input": "Agreement",
        "output": "Scheduled interview",
        "activities": "Schedule the interview and milestones",
        "tools": "Calendar",
        "roles": "Marketing",
        "successMetric": "Scheduled",
        "decisionPoints": "Is it booked?",
        "qualityGate": "Go: booked. Loop back: missed.",
        "source": "authored"
      },
      {
        "name": "Kickoff",
        "objective": "Start the engagement.",
        "input": "Scheduled interview",
        "output": "Engagement started",
        "activities": "Run the kickoff, brief the customer",
        "tools": "Meeting",
        "roles": "Marketing",
        "successMetric": "Kickoff done",
        "decisionPoints": "Are we started?",
        "qualityGate": "Go: rolling. Loop back: stalled.",
        "source": "authored"
      },
      {
        "name": "Data Collection",
        "objective": "Gather the story.",
        "input": "Engagement",
        "output": "Story data",
        "activities": "Collect the narrative, numbers, proof",
        "tools": "Interview",
        "roles": "Marketing",
        "successMetric": "Data collected",
        "decisionPoints": "Do we have the goods?",
        "qualityGate": "Go: rich. Loop back: thin.",
        "source": "authored"
      }
    ],
    "source": "authored"
  },
  "case-study-development": {
    "stages": [
      {
        "name": "Discovery",
        "objective": "Understand the win.",
        "input": "Customer engagement",
        "output": "Discovery notes",
        "activities": "Gather the problem, journey, results",
        "tools": "Interview",
        "roles": "Marketing",
        "successMetric": "Discovered",
        "decisionPoints": "What happened?",
        "qualityGate": "Go: clear. Loop back: vague.",
        "source": "authored"
      },
      {
        "name": "Interview Prep",
        "objective": "Prepare the interview.",
        "input": "Discovery notes",
        "output": "Interview plan",
        "activities": "Plan questions, evidence, quotes",
        "tools": "Planning",
        "roles": "Marketing",
        "successMetric": "Prepared",
        "decisionPoints": "Are we ready?",
        "qualityGate": "Go: ready. Loop back: ad hoc.",
        "source": "authored"
      },
      {
        "name": "Interview",
        "objective": "Run the interview.",
        "input": "Interview plan",
        "output": "Verbatim notes",
        "activities": "Capture the customer's words and numbers",
        "tools": "Interview",
        "roles": "Marketing",
        "successMetric": "Captured",
        "decisionPoints": "Did we capture it?",
        "qualityGate": "Go: rich. Loop back: thin.",
        "source": "authored"
      },
      {
        "name": "Story Dev",
        "objective": "Build the arc.",
        "input": "Verbatim notes",
        "output": "Story arc",
        "activities": "Shape problem → solution → result",
        "tools": "Writing",
        "roles": "Marketing",
        "successMetric": "Story built",
        "decisionPoints": "Is there an arc?",
        "qualityGate": "Go: compelling. Loop back: flat.",
        "source": "authored"
      },
      {
        "name": "ROI Calc",
        "objective": "Quantify the value.",
        "input": "Story, data",
        "output": "ROI figures",
        "activities": "Calculate ROI with real numbers",
        "tools": "Analysis",
        "roles": "Marketing",
        "successMetric": "ROI proven",
        "decisionPoints": "Can we prove it?",
        "qualityGate": "Go: quantified. Loop back: asserted.",
        "source": "authored"
      },
      {
        "name": "Writing",
        "objective": "Write it.",
        "input": "Story, ROI",
        "output": "Draft",
        "activities": "Write the case study in the buyer's voice",
        "tools": "Writing",
        "roles": "Marketing",
        "successMetric": "Drafted",
        "decisionPoints": "Is it readable?",
        "qualityGate": "Go: sharp. Loop back: dull.",
        "source": "authored"
      },
      {
        "name": "Design",
        "objective": "Make it beautiful.",
        "input": "Draft",
        "output": "Designed case study",
        "activities": "Design layout, visuals, pull-quotes",
        "tools": "Design",
        "roles": "Marketing",
        "successMetric": "Designed",
        "decisionPoints": "Does it look pro?",
        "qualityGate": "Go: polished. Loop back: plain.",
        "source": "authored"
      },
      {
        "name": "Review",
        "objective": "Get approvals.",
        "input": "Designed case study",
        "output": "Approved case study",
        "activities": "Review internally and with the customer",
        "tools": "Review",
        "roles": "Marketing · customer",
        "successMetric": "Approved",
        "decisionPoints": "Is it approved?",
        "qualityGate": "Go: signed off. Loop back: revisions.",
        "source": "authored"
      },
      {
        "name": "Approval",
        "objective": "Final sign-off.",
        "input": "Approved draft",
        "output": "Final case study",
        "activities": "Lock the final version",
        "tools": "Approval",
        "roles": "Marketing",
        "successMetric": "Finalized",
        "decisionPoints": "Is it final?",
        "qualityGate": "Go: locked. Loop back: endless edits.",
        "source": "authored"
      },
      {
        "name": "Publishing",
        "objective": "Publish it.",
        "input": "Final case study",
        "output": "Published",
        "activities": "Publish on site and channels",
        "tools": "Publishing",
        "roles": "Marketing",
        "successMetric": "Published",
        "decisionPoints": "Is it live?",
        "qualityGate": "Go: live. Loop back: delayed.",
        "source": "authored"
      }
    ],
    "source": "authored"
  },
  "case-study-distribution": {
    "stages": [
      {
        "name": "Published",
        "objective": "Have a study to distribute.",
        "input": "Final case study",
        "output": "Ready asset",
        "activities": "Confirm the asset is final",
        "tools": "Check",
        "roles": "Marketing",
        "successMetric": "Ready",
        "decisionPoints": "Is it ready?",
        "qualityGate": "Go: ready. Loop back: missing.",
        "source": "authored"
      },
      {
        "name": "Website",
        "objective": "Put it on the site.",
        "input": "Asset",
        "output": "Published on site",
        "activities": "Add to site at the point of consideration",
        "tools": "Web",
        "roles": "Marketing",
        "successMetric": "On site",
        "decisionPoints": "Is it findable?",
        "qualityGate": "Go: live. Loop back: hidden.",
        "source": "authored"
      },
      {
        "name": "Sales Collateral",
        "objective": "Give sales the proof.",
        "input": "Asset",
        "output": "Sales one-pager",
        "activities": "Build a sales-ready version",
        "tools": "Design",
        "roles": "Sales enablement",
        "successMetric": "Collateral ready",
        "decisionPoints": "Will reps use it?",
        "qualityGate": "Go: used. Loop back: ignored.",
        "source": "authored"
      },
      {
        "name": "Marketing Integration",
        "objective": "Use it in campaigns.",
        "input": "Asset",
        "output": "Integrated asset",
        "activities": "Weave into email, ads, nurture",
        "tools": "Marketing",
        "roles": "Marketing",
        "successMetric": "Integrated",
        "decisionPoints": "Is it in the funnel?",
        "qualityGate": "Go: deployed. Loop back: siloed.",
        "source": "authored"
      },
      {
        "name": "Event Use",
        "objective": "Use it on stage.",
        "input": "Asset",
        "output": "Event-ready story",
        "activities": "Use in talks, webinars, booths",
        "tools": "Events",
        "roles": "Marketing",
        "successMetric": "Used at events",
        "decisionPoints": "Is it on stage?",
        "qualityGate": "Go: leveraged. Loop back: unused.",
        "source": "authored"
      },
      {
        "name": "Repurposing",
        "objective": "Extract more from it.",
        "input": "Asset",
        "output": "Repurposed content",
        "activities": "Turn into posts, snippets, decks, videos",
        "tools": "Content",
        "roles": "Marketing",
        "successMetric": "Repurposed",
        "decisionPoints": "Did we squeeze it?",
        "qualityGate": "Go: compounding. Loop back: one-off.",
        "source": "authored"
      },
      {
        "name": "Social",
        "objective": "Promote it.",
        "input": "Repurposed content",
        "output": "Social promotion",
        "activities": "Share across social channels",
        "tools": "Social",
        "roles": "Marketing",
        "successMetric": "Promoted",
        "decisionPoints": "Is it seen?",
        "qualityGate": "Go: visible. Loop back: silent.",
        "source": "authored"
      },
      {
        "name": "Tracking",
        "objective": "Measure the use.",
        "input": "Distribution data",
        "output": "Usage view",
        "activities": "Track views, downloads, influence",
        "tools": "Analytics",
        "roles": "Marketing",
        "successMetric": "Tracked",
        "decisionPoints": "Is it working?",
        "qualityGate": "Go: clear. Loop back: blind.",
        "source": "authored"
      },
      {
        "name": "Analysis",
        "objective": "Learn what converts.",
        "input": "Usage data",
        "output": "Insights",
        "activities": "See which stories convert best",
        "tools": "Analysis",
        "roles": "Marketing",
        "successMetric": "Insights clear",
        "decisionPoints": "What do we do more of?",
        "qualityGate": "Go: learning. Loop back: guessing.",
        "source": "authored"
      }
    ],
    "source": "authored"
  },
  "reference-program": {
    "stages": [
      {
        "name": "Candidate ID",
        "objective": "Find willing references.",
        "input": "Customer base",
        "output": "Candidates",
        "activities": "Identify happy customers for references",
        "tools": "CRM",
        "roles": "Marketing · CS",
        "successMetric": "Candidates found",
        "decisionPoints": "Who would say yes?",
        "qualityGate": "Go: strong. Loop back: thin.",
        "source": "authored"
      },
      {
        "name": "Outreach",
        "objective": "Ask them.",
        "input": "Candidates",
        "output": "Willing references",
        "activities": "Reach out, gauge willingness",
        "tools": "Email",
        "roles": "Marketing",
        "successMetric": "Willing",
        "decisionPoints": "Are they in?",
        "qualityGate": "Go: in. Loop back: silent.",
        "source": "authored"
      },
      {
        "name": "Agreement",
        "objective": "Set the terms.",
        "input": "Willing references",
        "output": "Agreement",
        "activities": "Agree on scope, usage, reciprocity",
        "tools": "Agreement",
        "roles": "Marketing",
        "successMetric": "Agreed",
        "decisionPoints": "Is it clear?",
        "qualityGate": "Go: aligned. Loop back: unclear.",
        "source": "authored"
      },
      {
        "name": "Scheduling",
        "objective": "Book the call.",
        "input": "Agreement",
        "output": "Scheduled call",
        "activities": "Schedule reference calls",
        "tools": "Calendar",
        "roles": "Marketing",
        "successMetric": "Scheduled",
        "decisionPoints": "When?",
        "qualityGate": "Go: booked. Loop back: missed.",
        "source": "authored"
      },
      {
        "name": "Briefing",
        "objective": "Prepare them.",
        "input": "Scheduled call, context",
        "output": "Briefed reference",
        "activities": "Brief the reference on the prospect",
        "tools": "Briefing",
        "roles": "Marketing",
        "successMetric": "Briefed",
        "decisionPoints": "Are they ready?",
        "qualityGate": "Go: ready. Loop back: cold.",
        "source": "authored"
      },
      {
        "name": "Call Support",
        "objective": "Run the call.",
        "input": "Briefed reference",
        "output": "Successful call",
        "activities": "Support the reference call",
        "tools": "Ops",
        "roles": "Marketing · sales",
        "successMetric": "Call done",
        "decisionPoints": "Did it go well?",
        "qualityGate": "Go: successful. Loop back: rough.",
        "source": "authored"
      },
      {
        "name": "Feedback",
        "objective": "Collect the signal.",
        "input": "Call outcome",
        "output": "Feedback",
        "activities": "Gather feedback from both sides",
        "tools": "Feedback",
        "roles": "Marketing",
        "successMetric": "Feedback captured",
        "decisionPoints": "What did we learn?",
        "qualityGate": "Go: learned. Loop back: ignored.",
        "source": "authored"
      },
      {
        "name": "Maintenance",
        "objective": "Keep the relationship.",
        "input": "Feedback",
        "output": "Warm reference",
        "activities": "Stay in touch, recognize, reciprocate",
        "tools": "CRM",
        "roles": "Marketing · CS",
        "successMetric": "Relationship warm",
        "decisionPoints": "Are they still willing?",
        "qualityGate": "Go: strong. Loop back: burning out.",
        "source": "authored"
      },
      {
        "name": "Engagement",
        "objective": "Keep them engaged.",
        "input": "Maintenance",
        "output": "Engaged advocates",
        "activities": "Keep references engaged and active",
        "tools": "Outreach",
        "roles": "Marketing",
        "successMetric": "Engaged",
        "decisionPoints": "Are they advocates?",
        "qualityGate": "Go: advocating. Loop back: drifting.",
        "source": "authored"
      }
    ],
    "source": "authored"
  },
  "review-management": {
    "stages": [
      {
        "name": "Review Site Monitor",
        "objective": "Watch the platforms.",
        "input": "Review platforms",
        "output": "Review feed",
        "activities": "Monitor reviews across sites",
        "tools": "Apify, dashboards",
        "roles": "Marketing",
        "successMetric": "Monitored",
        "decisionPoints": "What are people saying?",
        "qualityGate": "Go: watching. Loop back: blind.",
        "source": "authored"
      },
      {
        "name": "Response",
        "objective": "Respond fast.",
        "input": "Review feed",
        "output": "Responses sent",
        "activities": "Respond to reviews, especially negatives",
        "tools": "Process",
        "roles": "Marketing · CS",
        "successMetric": "Responded",
        "decisionPoints": "Did we respond?",
        "qualityGate": "Go: responsive. Loop back: silent.",
        "source": "authored"
      },
      {
        "name": "Positive Promotion",
        "objective": "Amplify the good.",
        "input": "Positive reviews",
        "output": "Promoted reviews",
        "activities": "Promote positive reviews and quotes",
        "tools": "Marketing",
        "roles": "Marketing",
        "successMetric": "Promoted",
        "decisionPoints": "Are we using them?",
        "qualityGate": "Go: leveraged. Loop back: wasted.",
        "source": "authored"
      },
      {
        "name": "Negative Mgmt",
        "objective": "Handle the bad.",
        "input": "Negative reviews",
        "output": "Managed negatives",
        "activities": "Resolve the issue, not just the comment",
        "tools": "CS · process",
        "roles": "CS · marketing",
        "successMetric": "Managed",
        "decisionPoints": "Did we fix it?",
        "qualityGate": "Go: resolved. Loop back: festering.",
        "source": "authored"
      },
      {
        "name": "Incentive",
        "objective": "Encourage more reviews.",
        "input": "Review program",
        "output": "More reviews",
        "activities": "Run a review collection incentive",
        "tools": "Program",
        "roles": "Marketing",
        "successMetric": "Collecting",
        "decisionPoints": "Are we collecting?",
        "qualityGate": "Go: growing. Loop back: static.",
        "source": "authored"
      },
      {
        "name": "Review Collection",
        "objective": "Gather the reviews.",
        "input": "Incentive",
        "output": "Review flow",
        "activities": "Ask happy customers at the right moment",
        "tools": "Process",
        "roles": "Marketing · CS",
        "successMetric": "Collecting",
        "decisionPoints": "Are we asking?",
        "qualityGate": "Go: flowing. Loop back: empty.",
        "source": "authored"
      },
      {
        "name": "Update Monitor",
        "objective": "Keep watching trends.",
        "input": "Review data",
        "output": "Trend view",
        "activities": "Monitor the trend in scores and themes",
        "tools": "Analytics",
        "roles": "Marketing",
        "successMetric": "Trends clear",
        "decisionPoints": "What is shifting?",
        "qualityGate": "Go: understood. Loop back: noise.",
        "source": "authored"
      },
      {
        "name": "Trend Analysis",
        "objective": "Read the signals.",
        "input": "Trend view",
        "output": "Insights",
        "activities": "Turn review patterns into action",
        "tools": "Analysis",
        "roles": "Marketing",
        "successMetric": "Insights clear",
        "decisionPoints": "What do we change?",
        "qualityGate": "Go: acted. Loop back: ignored.",
        "source": "authored"
      }
    ],
    "source": "authored"
  },
  "social-proof": {
    "stages": [
      {
        "name": "Testimonial Opportunity",
        "objective": "Find the moment.",
        "input": "Customer engagement",
        "output": "Opportunities",
        "activities": "Spot moments of peak satisfaction",
        "tools": "CS signals",
        "roles": "Marketing · CS",
        "successMetric": "Opportunities found",
        "decisionPoints": "When are they happiest?",
        "qualityGate": "Go: timed. Loop back: missed.",
        "source": "authored"
      },
      {
        "name": "Collection",
        "objective": "Capture the proof.",
        "input": "Opportunities",
        "output": "Testimonials",
        "activities": "Collect quotes, videos, names, results",
        "tools": "Collection",
        "roles": "Marketing",
        "successMetric": "Collected",
        "decisionPoints": "Did we capture it?",
        "qualityGate": "Go: real. Loop back: fake.",
        "source": "authored"
      },
      {
        "name": "Video/Quote",
        "objective": "Package the proof.",
        "input": "Testimonials",
        "output": "Proof assets",
        "activities": "Turn into video or quote assets",
        "tools": "Production",
        "roles": "Marketing",
        "successMetric": "Packaged",
        "decisionPoints": "Is it usable?",
        "qualityGate": "Go: compelling. Loop back: flat.",
        "source": "authored"
      },
      {
        "name": "Publishing",
        "objective": "Publish it.",
        "input": "Proof assets",
        "output": "Published proof",
        "activities": "Publish on site and channels",
        "tools": "Publishing",
        "roles": "Marketing",
        "successMetric": "Published",
        "decisionPoints": "Is it live?",
        "qualityGate": "Go: live. Loop back: delayed.",
        "source": "authored"
      },
      {
        "name": "Promotion",
        "objective": "Promote it.",
        "input": "Published proof",
        "output": "Promoted proof",
        "activities": "Share across channels",
        "tools": "Marketing",
        "roles": "Marketing",
        "successMetric": "Promoted",
        "decisionPoints": "Is it seen?",
        "qualityGate": "Go: visible. Loop back: hidden.",
        "source": "authored"
      },
      {
        "name": "Website",
        "objective": "Put it where buyers look.",
        "input": "Proof",
        "output": "On-site proof",
        "activities": "Place proof at decision points",
        "tools": "Web",
        "roles": "Marketing",
        "successMetric": "On site",
        "decisionPoints": "Is it in the funnel?",
        "qualityGate": "Go: placed. Loop back: buried.",
        "source": "authored"
      },
      {
        "name": "Sales Use",
        "objective": "Put it in the motion.",
        "input": "Proof",
        "output": "Sales-ready proof",
        "activities": "Give reps proof to deploy",
        "tools": "Enablement",
        "roles": "Sales",
        "successMetric": "In the motion",
        "decisionPoints": "Do reps use it?",
        "qualityGate": "Go: used. Loop back: unused.",
        "source": "authored"
      },
      {
        "name": "Ad Use",
        "objective": "Use it in ads.",
        "input": "Proof",
        "output": "Ad-ready proof",
        "activities": "Weave into ad creative",
        "tools": "Ads",
        "roles": "Marketing",
        "successMetric": "In ads",
        "decisionPoints": "Is it in ads?",
        "qualityGate": "Go: converting. Loop back: absent.",
        "source": "authored"
      },
      {
        "name": "Monitoring",
        "objective": "Keep it fresh.",
        "input": "Proof usage",
        "output": "Fresh proof",
        "activities": "Refresh proof, retire stale",
        "tools": "Audit",
        "roles": "Marketing",
        "successMetric": "Fresh",
        "decisionPoints": "Is it current?",
        "qualityGate": "Go: current. Loop back: stale.",
        "source": "authored"
      }
    ],
    "source": "authored"
  },
  "advisory-board": {
    "stages": [
      {
        "name": "Candidate ID",
        "objective": "Find the right advisors.",
        "input": "Customer base",
        "output": "Candidates",
        "activities": "Identify customers who can challenge and shape",
        "tools": "Selection",
        "roles": "Founder · CS",
        "successMetric": "Candidates found",
        "decisionPoints": "Who would add value?",
        "qualityGate": "Go: strong. Loop back: yes-men.",
        "source": "authored"
      },
      {
        "name": "Outreach",
        "objective": "Invite them.",
        "input": "Candidates",
        "output": "Interested advisors",
        "activities": "Invite and gauge interest",
        "tools": "Email",
        "roles": "Founder",
        "successMetric": "Interested",
        "decisionPoints": "Are they in?",
        "qualityGate": "Go: willing. Loop back: silent.",
        "source": "authored"
      },
      {
        "name": "Selection",
        "objective": "Pick the board.",
        "input": "Interested advisors",
        "output": "Board chosen",
        "activities": "Select for diversity of perspective",
        "tools": "Selection",
        "roles": "Founder",
        "successMetric": "Board chosen",
        "decisionPoints": "Is the mix right?",
        "qualityGate": "Go: balanced. Loop back: one-sided.",
        "source": "authored"
      },
      {
        "name": "Formalizing",
        "objective": "Set the terms.",
        "input": "Board chosen",
        "output": "Formal board",
        "activities": "Agree on cadence, expectations, reciprocity",
        "tools": "Agreement",
        "roles": "Founder",
        "successMetric": "Formalized",
        "decisionPoints": "Is it clear?",
        "qualityGate": "Go: agreed. Loop back: vague.",
        "source": "authored"
      },
      {
        "name": "Scheduling",
        "objective": "Book the meetings.",
        "input": "Formal board",
        "output": "Scheduled meetings",
        "activities": "Schedule the cadence",
        "tools": "Calendar",
        "roles": "Founder",
        "successMetric": "Scheduled",
        "decisionPoints": "When do we meet?",
        "qualityGate": "Go: booked. Loop back: missed.",
        "source": "authored"
      },
      {
        "name": "Preparation",
        "objective": "Prepare well.",
        "input": "Agenda, materials",
        "output": "Prepared meeting",
        "activities": "Prepare agenda and materials",
        "tools": "Planning",
        "roles": "Founder",
        "successMetric": "Prepared",
        "decisionPoints": "Is it worth their time?",
        "qualityGate": "Go: sharp. Loop back: wasted.",
        "source": "authored"
      },
      {
        "name": "Facilitation",
        "objective": "Run the meeting.",
        "input": "Prepared meeting",
        "output": "Productive session",
        "activities": "Facilitate real discussion, not updates",
        "tools": "Facilitation",
        "roles": "Founder",
        "successMetric": "Productive",
        "decisionPoints": "Did we get insight?",
        "qualityGate": "Go: valuable. Loop back: performance.",
        "source": "authored"
      },
      {
        "name": "Feedback",
        "objective": "Capture the input.",
        "input": "Session outcomes",
        "output": "Feedback",
        "activities": "Collect and record the advice",
        "tools": "Notes",
        "roles": "Founder",
        "successMetric": "Captured",
        "decisionPoints": "Did we capture it?",
        "qualityGate": "Go: recorded. Loop back: lost.",
        "source": "authored"
      },
      {
        "name": "Relationship",
        "objective": "Keep them engaged.",
        "input": "Feedback",
        "output": "Strong board",
        "activities": "Act on advice, report back, maintain",
        "tools": "Outreach",
        "roles": "Founder",
        "successMetric": "Engaged",
        "decisionPoints": "Are they still invested?",
        "qualityGate": "Go: invested. Loop back: drifting.",
        "source": "authored"
      }
    ],
    "source": "authored"
  },
  "user-groups": {
    "stages": [
      {
        "name": "Community Interest",
        "objective": "Gauge the demand.",
        "input": "Customer base",
        "output": "Interest signal",
        "activities": "Test whether customers want a user group",
        "tools": "Research",
        "roles": "Marketing · CS",
        "successMetric": "Interest confirmed",
        "decisionPoints": "Is there demand?",
        "qualityGate": "Go: real. Loop back: forced.",
        "source": "authored"
      },
      {
        "name": "Group Launch",
        "objective": "Start the group.",
        "input": "Interest",
        "output": "Launched group",
        "activities": "Launch the group with purpose",
        "tools": "Ops",
        "roles": "Marketing",
        "successMetric": "Launched",
        "decisionPoints": "Is it live?",
        "qualityGate": "Go: live. Loop back: stalled.",
        "source": "authored"
      },
      {
        "name": "Recruitment",
        "objective": "Grow the membership.",
        "input": "Group",
        "output": "Members",
        "activities": "Recruit members from the base",
        "tools": "Outreach",
        "roles": "Marketing",
        "successMetric": "Growing",
        "decisionPoints": "Are members joining?",
        "qualityGate": "Go: growing. Loop back: empty.",
        "source": "authored"
      },
      {
        "name": "Agenda",
        "objective": "Plan the value.",
        "input": "Member needs",
        "output": "Agenda",
        "activities": "Set agendas that deliver value",
        "tools": "Planning",
        "roles": "Marketing · CS",
        "successMetric": "Agenda set",
        "decisionPoints": "Is it worth attending?",
        "qualityGate": "Go: valuable. Loop back: filler.",
        "source": "authored"
      },
      {
        "name": "Meetup Planning",
        "objective": "Plan the sessions.",
        "input": "Agenda",
        "output": "Sessions planned",
        "activities": "Plan meetups, content, speakers",
        "tools": "Planning",
        "roles": "Marketing",
        "successMetric": "Planned",
        "decisionPoints": "Is it ready?",
        "qualityGate": "Go: ready. Loop back: ad hoc.",
        "source": "authored"
      },
      {
        "name": "Facilitation",
        "objective": "Run the sessions.",
        "input": "Planned sessions",
        "output": "Great sessions",
        "activities": "Facilitate, engage, capture",
        "tools": "Facilitation",
        "roles": "Marketing · CS",
        "successMetric": "Sessions delivered",
        "decisionPoints": "Did it land?",
        "qualityGate": "Go: engaged. Loop back: flat.",
        "source": "authored"
      },
      {
        "name": "Networking",
        "objective": "Enable the connections.",
        "input": "Sessions",
        "output": "Connected members",
        "activities": "Foster peer connections and sharing",
        "tools": "Facilitation",
        "roles": "Marketing",
        "successMetric": "Connecting",
        "decisionPoints": "Are they connecting?",
        "qualityGate": "Go: bonding. Loop back: isolated.",
        "source": "authored"
      },
      {
        "name": "Engagement",
        "objective": "Keep it alive.",
        "input": "Group activity",
        "output": "Active group",
        "activities": "Sustain engagement between sessions",
        "tools": "Community",
        "roles": "Marketing",
        "successMetric": "Active",
        "decisionPoints": "Is it alive?",
        "qualityGate": "Go: thriving. Loop back: dormant.",
        "source": "authored"
      },
      {
        "name": "Growth",
        "objective": "Grow the group.",
        "input": "Engagement",
        "output": "Growing group",
        "activities": "Recruit, retain, expand",
        "tools": "Analytics",
        "roles": "Marketing",
        "successMetric": "Growing",
        "decisionPoints": "Is it growing?",
        "qualityGate": "Go: scaling. Loop back: plateau.",
        "source": "authored"
      }
    ],
    "source": "authored"
  },
  "community-management": {
    "stages": [
      {
        "name": "Platform Active",
        "objective": "Have a live platform.",
        "input": "Community platform",
        "output": "Active platform",
        "activities": "Confirm the platform is running",
        "tools": "Ops",
        "roles": "Marketing",
        "successMetric": "Active",
        "decisionPoints": "Is it up?",
        "qualityGate": "Go: live. Loop back: down.",
        "source": "authored"
      },
      {
        "name": "Member Onboarding",
        "objective": "Welcome new members.",
        "input": "New members",
        "output": "Onboarded members",
        "activities": "Onboard and orient new members",
        "tools": "Process",
        "roles": "Marketing",
        "successMetric": "Onboarded",
        "decisionPoints": "Are they settled?",
        "qualityGate": "Go: welcomed. Loop back: lost.",
        "source": "authored"
      },
      {
        "name": "Content Moderation",
        "objective": "Keep it healthy.",
        "input": "Community content",
        "output": "Healthy community",
        "activities": "Moderate, enforce standards",
        "tools": "Moderation",
        "roles": "Marketing",
        "successMetric": "Healthy",
        "decisionPoints": "Is it safe and useful?",
        "qualityGate": "Go: healthy. Loop back: toxic.",
        "source": "authored"
      },
      {
        "name": "Facilitation",
        "objective": "Drive the discussion.",
        "input": "Community",
        "output": "Active discussions",
        "activities": "Facilitate, prompt, connect",
        "tools": "Facilitation",
        "roles": "Marketing",
        "successMetric": "Active",
        "decisionPoints": "Is it lively?",
        "qualityGate": "Go: engaging. Loop back: silent.",
        "source": "authored"
      },
      {
        "name": "Question Resolution",
        "objective": "Answer fast.",
        "input": "Questions",
        "output": "Resolved questions",
        "activities": "Resolve questions, surface experts",
        "tools": "Support",
        "roles": "Marketing · CS",
        "successMetric": "Resolved",
        "decisionPoints": "Are they answered?",
        "qualityGate": "Go: helpful. Loop back: unanswered.",
        "source": "authored"
      },
      {
        "name": "Expert ID",
        "objective": "Find the experts.",
        "input": "Community activity",
        "output": "Recognized experts",
        "activities": "Identify and elevate contributors",
        "tools": "Analysis",
        "roles": "Marketing",
        "successMetric": "Experts known",
        "decisionPoints": "Who carries it?",
        "qualityGate": "Go: recognized. Loop back: anonymous.",
        "source": "authored"
      },
      {
        "name": "Recognition",
        "objective": "Reward contributors.",
        "input": "Expert ID",
        "output": "Recognized members",
        "activities": "Recognize and reward contributions",
        "tools": "Recognition",
        "roles": "Marketing",
        "successMetric": "Recognized",
        "decisionPoints": "Do they feel valued?",
        "qualityGate": "Go: motivated. Loop back: unappreciated.",
        "source": "authored"
      },
      {
        "name": "Engagement",
        "objective": "Keep the energy.",
        "input": "Community metrics",
        "output": "Engaged community",
        "activities": "Sustain engagement, measure it",
        "tools": "Analytics",
        "roles": "Marketing",
        "successMetric": "Engaged",
        "decisionPoints": "Is it healthy?",
        "qualityGate": "Go: thriving. Loop back: decaying.",
        "source": "authored"
      },
      {
        "name": "Growth",
        "objective": "Grow the community.",
        "input": "Engagement",
        "output": "Growing community",
        "activities": "Recruit and expand",
        "tools": "Analytics",
        "roles": "Marketing",
        "successMetric": "Growing",
        "decisionPoints": "Is it growing?",
        "qualityGate": "Go: scaling. Loop back: flat.",
        "source": "authored"
      }
    ],
    "source": "authored"
  },
  "content-strategy": {
    "stages": [
      {
        "name": "Audience",
        "objective": "Define who you serve.",
        "input": "Segments, personas",
        "output": "Audience definition",
        "activities": "Define the audience and their problems",
        "tools": "Personas",
        "roles": "Marketing",
        "successMetric": "Audience defined",
        "decisionPoints": "Who are we writing for?",
        "qualityGate": "Go: sharp. Loop back: broad.",
        "source": "authored"
      },
      {
        "name": "Topic Research",
        "objective": "Find what they search.",
        "input": "Audience, market",
        "output": "Topic map",
        "activities": "Research topics that match buyer problems",
        "tools": "Exa, SEO tools",
        "roles": "Marketing",
        "successMetric": "Topics found",
        "decisionPoints": "What do they search?",
        "qualityGate": "Go: relevant. Loop back: vanity.",
        "source": "authored"
      },
      {
        "name": "Pillar Selection",
        "objective": "Pick the pillars.",
        "input": "Topic map",
        "output": "Pillars",
        "activities": "Choose pillar topics that ladder to strategy",
        "tools": "Strategy",
        "roles": "Marketing",
        "successMetric": "Pillars chosen",
        "decisionPoints": "What is the spine?",
        "qualityGate": "Go: strategic. Loop back: random.",
        "source": "authored"
      },
      {
        "name": "Content Planning",
        "objective": "Plan the content.",
        "input": "Pillars",
        "output": "Content plan",
        "activities": "Plan pieces, formats, funnel role",
        "tools": "Planning",
        "roles": "Marketing",
        "successMetric": "Planned",
        "decisionPoints": "What do we make?",
        "qualityGate": "Go: purposeful. Loop back: scattered.",
        "source": "authored"
      },
      {
        "name": "Format Mix",
        "objective": "Choose the formats.",
        "input": "Content plan",
        "output": "Format mix",
        "activities": "Mix blogs, video, ebooks, posts",
        "tools": "Planning",
        "roles": "Marketing",
        "successMetric": "Mix set",
        "decisionPoints": "What formats work?",
        "qualityGate": "Go: varied. Loop back: one-note.",
        "source": "authored"
      },
      {
        "name": "Editorial Calendar",
        "objective": "Build the calendar.",
        "input": "Format mix",
        "output": "Calendar",
        "activities": "Schedule production and publishing",
        "tools": "Calendar",
        "roles": "Marketing",
        "successMetric": "Calendar set",
        "decisionPoints": "When does it publish?",
        "qualityGate": "Go: scheduled. Loop back: chaotic.",
        "source": "authored"
      },
      {
        "name": "Creation",
        "objective": "Make the content.",
        "input": "Calendar",
        "output": "Created content",
        "activities": "Produce quality content",
        "tools": "Claude, writers",
        "roles": "Marketing",
        "successMetric": "Created",
        "decisionPoints": "Is it good?",
        "qualityGate": "Go: strong. Loop back: filler.",
        "source": "authored"
      },
      {
        "name": "Distribution",
        "objective": "Publish and promote.",
        "input": "Created content",
        "output": "Distributed content",
        "activities": "Publish, promote, syndicate",
        "tools": "Channels",
        "roles": "Marketing",
        "successMetric": "Distributed",
        "decisionPoints": "Is it seen?",
        "qualityGate": "Go: visible. Loop back: hidden.",
        "source": "authored"
      },
      {
        "name": "Measurement",
        "objective": "Measure the impact.",
        "input": "Content data",
        "output": "Performance view",
        "activities": "Track to pipeline contribution",
        "tools": "Analytics",
        "roles": "Marketing",
        "successMetric": "Measured",
        "decisionPoints": "Does it produce pipeline?",
        "qualityGate": "Go: contributing. Loop back: vanity.",
        "source": "authored"
      },
      {
        "name": "Optimization",
        "objective": "Double down on winners.",
        "input": "Learnings",
        "output": "Better content",
        "activities": "Scale what works, kill what doesn't",
        "tools": "Review",
        "roles": "Marketing",
        "successMetric": "Optimized",
        "decisionPoints": "Did we learn?",
        "qualityGate": "Go: compounding. Loop back: repeating.",
        "source": "authored"
      }
    ],
    "source": "authored"
  },
  "seo-organic-search": {
    "stages": [
      {
        "name": "Keyword Research",
        "objective": "Find the searches that matter.",
        "input": "Market, personas",
        "output": "Keyword map",
        "activities": "Research intent-driven keywords",
        "tools": "SEO tools, Exa",
        "roles": "Marketing",
        "successMetric": "Keywords mapped",
        "decisionPoints": "What do buyers search?",
        "qualityGate": "Go: intent-based. Loop back: vanity.",
        "source": "authored"
      },
      {
        "name": "Technical Audit",
        "objective": "Fix the site health.",
        "input": "Site",
        "output": "Technical fixes",
        "activities": "Audit and fix crawl, speed, structure",
        "tools": "SEO tools",
        "roles": "Marketing · dev",
        "successMetric": "Technical clean",
        "decisionPoints": "Is the site healthy?",
        "qualityGate": "Go: healthy. Loop back: broken.",
        "source": "authored"
      },
      {
        "name": "On-Page",
        "objective": "Optimize the pages.",
        "input": "Keywords, pages",
        "output": "Optimized pages",
        "activities": "Optimize titles, content, structure",
        "tools": "SEO",
        "roles": "Marketing",
        "successMetric": "Optimized",
        "decisionPoints": "Are pages optimized?",
        "qualityGate": "Go: strong. Loop back: weak.",
        "source": "authored"
      },
      {
        "name": "Content Strategy",
        "objective": "Plan for topical authority.",
        "input": "Keywords, pillars",
        "output": "Content plan",
        "activities": "Build pillar and cluster content",
        "tools": "Planning",
        "roles": "Marketing",
        "successMetric": "Planned",
        "decisionPoints": "Do we own topics?",
        "qualityGate": "Go: authoritative. Loop back: scattered.",
        "source": "authored"
      },
      {
        "name": "Link Building",
        "objective": "Earn authority.",
        "input": "Content, outreach",
        "output": "Links",
        "activities": "Earn quality backlinks",
        "tools": "Outreach",
        "roles": "Marketing",
        "successMetric": "Links earned",
        "decisionPoints": "Are we building authority?",
        "qualityGate": "Go: growing. Loop back: stalled.",
        "source": "authored"
      },
      {
        "name": "Ranking Monitor",
        "objective": "Watch the rankings.",
        "input": "SEO data",
        "output": "Ranking view",
        "activities": "Monitor rankings and visibility",
        "tools": "SEO tools",
        "roles": "Marketing",
        "successMetric": "Tracked",
        "decisionPoints": "Are we moving up?",
        "qualityGate": "Go: climbing. Loop back: flat.",
        "source": "authored"
      },
      {
        "name": "Traffic",
        "objective": "Grow the traffic.",
        "input": "Rankings, analytics",
        "output": "Traffic view",
        "activities": "Measure organic traffic growth",
        "tools": "Analytics",
        "roles": "Marketing",
        "successMetric": "Growing",
        "decisionPoints": "Is traffic growing?",
        "qualityGate": "Go: compounding. Loop back: flat.",
        "source": "authored"
      },
      {
        "name": "Conversion",
        "objective": "Turn traffic into pipeline.",
        "input": "Traffic, funnel",
        "output": "Conversion view",
        "activities": "Track organic conversion",
        "tools": "Analytics",
        "roles": "Marketing",
        "successMetric": "Converting",
        "decisionPoints": "Does it convert?",
        "qualityGate": "Go: producing. Loop back: leaking.",
        "source": "authored"
      },
      {
        "name": "Improvement",
        "objective": "Keep optimizing.",
        "input": "Learnings",
        "output": "Better SEO",
        "activities": "Iterate on what works",
        "tools": "Review",
        "roles": "Marketing",
        "successMetric": "Improving",
        "decisionPoints": "Did we learn?",
        "qualityGate": "Go: compounding. Loop back: static.",
        "source": "authored"
      }
    ],
    "source": "authored"
  },
  "paid-advertising": {
    "stages": [
      {
        "name": "Objectives",
        "objective": "Define what ads must do.",
        "input": "Business goals",
        "output": "Campaign objectives",
        "activities": "Set the number ads must move",
        "tools": "Planning",
        "roles": "Marketing",
        "successMetric": "Objectives set",
        "decisionPoints": "What do ads drive?",
        "qualityGate": "Go: one number. Loop back: vague.",
        "source": "authored"
      },
      {
        "name": "Audience",
        "objective": "Target precisely.",
        "input": "Objectives, personas",
        "output": "Audience",
        "activities": "Define targeting and exclusions",
        "tools": "Ads platform",
        "roles": "Marketing",
        "successMetric": "Audience defined",
        "decisionPoints": "Who do we reach?",
        "qualityGate": "Go: sharp. Loop back: broad.",
        "source": "authored"
      },
      {
        "name": "Channel",
        "objective": "Pick the platform.",
        "input": "Audience, budget",
        "output": "Channels",
        "activities": "Choose platforms where the buyer is",
        "tools": "Research",
        "roles": "Marketing",
        "successMetric": "Channels chosen",
        "decisionPoints": "Where are they?",
        "qualityGate": "Go: right. Loop back: wrong.",
        "source": "authored"
      },
      {
        "name": "Budget",
        "objective": "Allocate spend.",
        "input": "Channels, plan",
        "output": "Budget plan",
        "activities": "Set budget, bids, pacing",
        "tools": "Finance",
        "roles": "Marketing · finance",
        "successMetric": "Budget set",
        "decisionPoints": "Is the budget sane?",
        "qualityGate": "Go: funded. Loop back: underfunded.",
        "source": "authored"
      },
      {
        "name": "Creative",
        "objective": "Make the ads.",
        "input": "Audience, offer",
        "output": "Creatives",
        "activities": "Create ad variations, test angles",
        "tools": "Design, Claude",
        "roles": "Marketing",
        "successMetric": "Creatives ready",
        "decisionPoints": "Does it stop the scroll?",
        "qualityGate": "Go: strong. Loop back: weak.",
        "source": "authored"
      },
      {
        "name": "Landing Page",
        "objective": "Match the promise.",
        "input": "Creative, offer",
        "output": "Landing pages",
        "activities": "Build landing pages that convert",
        "tools": "Web",
        "roles": "Marketing",
        "successMetric": "Landing ready",
        "decisionPoints": "Does it deliver?",
        "qualityGate": "Go: converting. Loop back: leaking.",
        "source": "authored"
      },
      {
        "name": "Launch",
        "objective": "Run the campaign.",
        "input": "All assets",
        "output": "Campaign live",
        "activities": "Launch, monitor, adjust",
        "tools": "Ops",
        "roles": "Marketing",
        "successMetric": "Launched",
        "decisionPoints": "Is it live?",
        "qualityGate": "Go: live. Loop back: delayed.",
        "source": "authored"
      },
      {
        "name": "Monitoring",
        "objective": "Watch performance.",
        "input": "Campaign data",
        "output": "Monitoring",
        "activities": "Monitor spend, CTR, CVR, CPA",
        "tools": "Dashboards",
        "roles": "Marketing",
        "successMetric": "Monitored",
        "decisionPoints": "Is it healthy?",
        "qualityGate": "Go: healthy. Loop back: bleeding.",
        "source": "authored"
      },
      {
        "name": "Optimization",
        "objective": "Improve mid-flight.",
        "input": "Monitoring",
        "output": "Optimized campaign",
        "activities": "Shift budget to winners, kill losers",
        "tools": "Optimization",
        "roles": "Marketing",
        "successMetric": "Optimized",
        "decisionPoints": "Can we do better?",
        "qualityGate": "Go: improving. Loop back: static.",
        "source": "authored"
      },
      {
        "name": "ROI",
        "objective": "Prove the return.",
        "input": "Results, spend",
        "output": "ROI view",
        "activities": "Measure ROI against the objective",
        "tools": "Analytics",
        "roles": "Marketing · finance",
        "successMetric": "ROI known",
        "decisionPoints": "Did it pay?",
        "qualityGate": "Go: profitable. Loop back: burning.",
        "source": "authored"
      }
    ],
    "source": "authored"
  },
  "lead-capture-nurture": {
    "stages": [
      {
        "name": "Form Design",
        "objective": "Design the capture.",
        "input": "Offers, audience",
        "output": "Forms",
        "activities": "Design forms that convert without friction",
        "tools": "Web",
        "roles": "Marketing",
        "successMetric": "Forms ready",
        "decisionPoints": "Is it easy?",
        "qualityGate": "Go: converting. Loop back: leaking.",
        "source": "authored"
      },
      {
        "name": "Capture Setup",
        "objective": "Wire the capture.",
        "input": "Forms, CRM",
        "output": "Capture live",
        "activities": "Set up capture, tracking, sync",
        "tools": "Automation",
        "roles": "Marketing",
        "successMetric": "Capture live",
        "decisionPoints": "Is it captured?",
        "qualityGate": "Go: captured. Loop back: lost.",
        "source": "authored"
      },
      {
        "name": "Lead Scoring",
        "objective": "Score the leads.",
        "input": "Lead data, ICP",
        "output": "Scoring live",
        "activities": "Configure scoring by fit and behavior",
        "tools": "Scoring",
        "roles": "RevOps",
        "successMetric": "Scoring live",
        "decisionPoints": "Do we rank well?",
        "qualityGate": "Go: calibrated. Loop back: noisy.",
        "source": "authored"
      },
      {
        "name": "Trigger Def",
        "objective": "Define the triggers.",
        "input": "Scoring, journey",
        "output": "Triggers",
        "activities": "Define what starts a nurture or handoff",
        "tools": "Automation",
        "roles": "Marketing",
        "successMetric": "Triggers set",
        "decisionPoints": "When do we act?",
        "qualityGate": "Go: clear. Loop back: arbitrary.",
        "source": "authored"
      },
      {
        "name": "Nurture Sequence",
        "objective": "Build the nurture.",
        "input": "Triggers, segments",
        "output": "Nurture",
        "activities": "Build sequences that educate and progress",
        "tools": "Automation",
        "roles": "Marketing",
        "successMetric": "Nurture built",
        "decisionPoints": "Does it move them?",
        "qualityGate": "Go: progressing. Loop back: static.",
        "source": "authored"
      },
      {
        "name": "Execution",
        "objective": "Run it.",
        "input": "Nurture",
        "output": "Nurture active",
        "activities": "Launch and manage the sequences",
        "tools": "Ops",
        "roles": "Marketing",
        "successMetric": "Running",
        "decisionPoints": "Is it running?",
        "qualityGate": "Go: live. Loop back: stopped.",
        "source": "authored"
      },
      {
        "name": "Engagement Monitor",
        "objective": "Watch engagement.",
        "input": "Nurture data",
        "output": "Engagement view",
        "activities": "Track opens, clicks, replies, handoffs",
        "tools": "Analytics",
        "roles": "Marketing",
        "successMetric": "Monitored",
        "decisionPoints": "Is it working?",
        "qualityGate": "Go: engaged. Loop back: ignored.",
        "source": "authored"
      },
      {
        "name": "Scoring Adjust",
        "objective": "Recalibrate.",
        "input": "Engagement, outcomes",
        "output": "Better scoring",
        "activities": "Adjust scoring from outcomes",
        "tools": "Analysis",
        "roles": "RevOps",
        "successMetric": "Recalibrated",
        "decisionPoints": "Is it predictive?",
        "qualityGate": "Go: accurate. Loop back: drifting.",
        "source": "authored"
      },
      {
        "name": "Handoff",
        "objective": "Pass the ready leads.",
        "input": "Scored leads",
        "output": "Sales handoff",
        "activities": "Hand off sales-ready leads with context",
        "tools": "CRM",
        "roles": "Marketing · sales",
        "successMetric": "Handed off",
        "decisionPoints": "Do they convert?",
        "qualityGate": "Go: converting. Loop back: falling through.",
        "source": "authored"
      }
    ],
    "source": "authored"
  },
  "marketing-automation": {
    "stages": [
      {
        "name": "Platform Selection",
        "objective": "Pick the automation platform.",
        "input": "Needs, budget",
        "output": "Platform",
        "activities": "Choose the automation platform",
        "tools": "Evaluation",
        "roles": "Marketing · revops",
        "successMetric": "Platform chosen",
        "decisionPoints": "Does it fit?",
        "qualityGate": "Go: fits. Loop back: mismatch.",
        "source": "authored"
      },
      {
        "name": "Integration",
        "objective": "Connect the stack.",
        "input": "Platform, tools",
        "output": "Integrated",
        "activities": "Integrate with CRM, data, channels",
        "tools": "Integrations",
        "roles": "Data engineering",
        "successMetric": "Integrated",
        "decisionPoints": "Does it sync?",
        "qualityGate": "Go: synced. Loop back: silos.",
        "source": "authored"
      },
      {
        "name": "Workflow Design",
        "objective": "Design the flows.",
        "input": "Process, journey",
        "output": "Workflows",
        "activities": "Design automation workflows around the process",
        "tools": "Design",
        "roles": "Marketing · revops",
        "successMetric": "Workflows designed",
        "decisionPoints": "Is the process worth automating?",
        "qualityGate": "Go: process-first. Loop back: automation-first.",
        "source": "authored"
      },
      {
        "name": "Sequence Creation",
        "objective": "Build the sequences.",
        "input": "Workflows",
        "output": "Sequences",
        "activities": "Create sequences, triggers, branches",
        "tools": "Automation",
        "roles": "Marketing",
        "successMetric": "Sequences built",
        "decisionPoints": "Are they built?",
        "qualityGate": "Go: complete. Loop back: gaps.",
        "source": "authored"
      },
      {
        "name": "Trigger Def",
        "objective": "Set the triggers.",
        "input": "Sequences",
        "output": "Triggers",
        "activities": "Define triggers and entry conditions",
        "tools": "Automation",
        "roles": "Marketing",
        "successMetric": "Triggers set",
        "decisionPoints": "When do they fire?",
        "qualityGate": "Go: precise. Loop back: fuzzy.",
        "source": "authored"
      },
      {
        "name": "Monitoring",
        "objective": "Watch the flows.",
        "input": "Automation data",
        "output": "Monitoring",
        "activities": "Monitor runs, errors, performance",
        "tools": "Dashboards",
        "roles": "Marketing",
        "successMetric": "Monitored",
        "decisionPoints": "Is it healthy?",
        "qualityGate": "Go: healthy. Loop back: broken.",
        "source": "authored"
      },
      {
        "name": "Lead Scoring",
        "objective": "Automate the scoring.",
        "input": "Lead data",
        "output": "Scoring live",
        "activities": "Automate scoring into the flows",
        "tools": "Automation",
        "roles": "RevOps",
        "successMetric": "Scoring live",
        "decisionPoints": "Is scoring live?",
        "qualityGate": "Go: live. Loop back: manual.",
        "source": "authored"
      },
      {
        "name": "Insights",
        "objective": "Extract the insights.",
        "input": "Automation data",
        "output": "Insights",
        "activities": "Find what works and what doesn't",
        "tools": "Analytics",
        "roles": "Marketing",
        "successMetric": "Insights clear",
        "decisionPoints": "What do we learn?",
        "qualityGate": "Go: actionable. Loop back: noise.",
        "source": "authored"
      },
      {
        "name": "Optimization",
        "objective": "Improve the system.",
        "input": "Learnings",
        "output": "Better automation",
        "activities": "Refine flows, kill what doesn't work",
        "tools": "Review",
        "roles": "Marketing",
        "successMetric": "Optimized",
        "decisionPoints": "Is it improving?",
        "qualityGate": "Go: compounding. Loop back: stagnant.",
        "source": "authored"
      }
    ],
    "source": "authored"
  },
  "lead-scoring": {
    "stages": [
      {
        "name": "Behavior Data",
        "objective": "Collect the engagement signals.",
        "input": "Lead activity",
        "output": "Behavior data",
        "activities": "Track content, email, web, intent behavior",
        "tools": "Analytics, CRM",
        "roles": "RevOps",
        "successMetric": "Behavior captured",
        "decisionPoints": "What are they doing?",
        "qualityGate": "Go: rich. Loop back: thin.",
        "source": "authored"
      },
      {
        "name": "Firmographic Data",
        "objective": "Collect the fit signals.",
        "input": "Lead data, ICP",
        "output": "Firmographic data",
        "activities": "Gather company size, industry, role data",
        "tools": "CRM, enrichment",
        "roles": "RevOps",
        "successMetric": "Fit data captured",
        "decisionPoints": "Do they fit?",
        "qualityGate": "Go: complete. Loop back: gaps.",
        "source": "authored"
      },
      {
        "name": "Scoring Model",
        "objective": "Design the score.",
        "input": "Both data sets",
        "output": "Scoring model",
        "activities": "Design weights and logic for fit + behavior",
        "tools": "Modeling",
        "roles": "RevOps · sales",
        "successMetric": "Model built",
        "decisionPoints": "Is the model sound?",
        "qualityGate": "Go: explainable. Loop back: black box.",
        "source": "authored"
      },
      {
        "name": "Weight Assignment",
        "objective": "Set the weights.",
        "input": "Model",
        "output": "Weighted model",
        "activities": "Assign weights by predictive value",
        "tools": "Modeling",
        "roles": "RevOps",
        "successMetric": "Weights set",
        "decisionPoints": "Do weights reflect reality?",
        "qualityGate": "Go: calibrated. Loop back: arbitrary.",
        "source": "authored"
      },
      {
        "name": "Score Calculation",
        "objective": "Score every lead.",
        "input": "Weighted model, data",
        "output": "Scores",
        "activities": "Compute scores across the pipeline",
        "tools": "Automation",
        "roles": "RevOps",
        "successMetric": "Scoring live",
        "decisionPoints": "Is scoring live?",
        "qualityGate": "Go: live. Loop back: manual.",
        "source": "authored"
      },
      {
        "name": "Threshold",
        "objective": "Set the action threshold.",
        "input": "Scores, outcomes",
        "output": "Thresholds",
        "activities": "Define score-to-action cutoffs",
        "tools": "Analysis",
        "roles": "RevOps · sales",
        "successMetric": "Thresholds set",
        "decisionPoints": "When do we act?",
        "qualityGate": "Go: clear. Loop back: guess.",
        "source": "authored"
      },
      {
        "name": "Prioritization",
        "objective": "Rank the pipeline.",
        "input": "Scores, thresholds",
        "output": "Prioritized leads",
        "activities": "Route and prioritize by score",
        "tools": "Routing",
        "roles": "RevOps",
        "successMetric": "Prioritized",
        "decisionPoints": "Are the best leads first?",
        "qualityGate": "Go: focused. Loop back: scattered.",
        "source": "authored"
      },
      {
        "name": "Testing",
        "objective": "Prove the model.",
        "input": "Scores, outcomes",
        "output": "Test results",
        "activities": "Back-test against closed outcomes",
        "tools": "Testing",
        "roles": "RevOps",
        "successMetric": "Validated",
        "decisionPoints": "Does it predict?",
        "qualityGate": "Go: predictive. Loop back: noise.",
        "source": "authored"
      },
      {
        "name": "Optimization",
        "objective": "Keep it accurate.",
        "input": "Learnings",
        "output": "Better model",
        "activities": "Recalibrate as data and market change",
        "tools": "Review",
        "roles": "RevOps",
        "successMetric": "Improving",
        "decisionPoints": "Is it still right?",
        "qualityGate": "Go: compounding. Loop back: stale.",
        "source": "authored"
      }
    ],
    "source": "authored"
  },
  "lead-routing": {
    "stages": [
      {
        "name": "Territory Def",
        "objective": "Define who owns what.",
        "input": "Territories",
        "output": "Territory map",
        "activities": "Define territory and ownership rules",
        "tools": "CRM",
        "roles": "RevOps · sales",
        "successMetric": "Territories clear",
        "decisionPoints": "Who owns this lead?",
        "qualityGate": "Go: clear. Loop back: overlap.",
        "source": "authored"
      },
      {
        "name": "Assignment Logic",
        "objective": "Design the routing.",
        "input": "Territory map",
        "output": "Routing logic",
        "activities": "Define rules: territory, skill, round-robin",
        "tools": "Design",
        "roles": "RevOps",
        "successMetric": "Logic set",
        "decisionPoints": "Is the logic fair?",
        "qualityGate": "Go: fair. Loop back: biased.",
        "source": "authored"
      },
      {
        "name": "Lead Received",
        "objective": "Capture the inbound lead.",
        "input": "Lead sources",
        "output": "Captured lead",
        "activities": "Ensure every lead enters the system",
        "tools": "CRM",
        "roles": "RevOps",
        "successMetric": "Captured",
        "decisionPoints": "Are we capturing all?",
        "qualityGate": "Go: complete. Loop back: leaks.",
        "source": "authored"
      },
      {
        "name": "Scoring",
        "objective": "Score the lead first.",
        "input": "Lead, scoring model",
        "output": "Score",
        "activities": "Score before routing",
        "tools": "Scoring",
        "roles": "RevOps",
        "successMetric": "Scored",
        "decisionPoints": "How hot is it?",
        "qualityGate": "Go: scored. Loop back: unscored.",
        "source": "authored"
      },
      {
        "name": "Routing Rules",
        "objective": "Route it.",
        "input": "Score, logic",
        "output": "Routed lead",
        "activities": "Apply rules, assign the owner",
        "tools": "Automation",
        "roles": "RevOps",
        "successMetric": "Routed",
        "decisionPoints": "Did it reach the right person?",
        "qualityGate": "Go: correct. Loop back: misrouted.",
        "source": "authored"
      },
      {
        "name": "Rep Assignment",
        "objective": "Confirm the owner.",
        "input": "Routed lead",
        "output": "Assigned rep",
        "activities": "Lock the assignment and ownership",
        "tools": "CRM",
        "roles": "Sales",
        "successMetric": "Assigned",
        "decisionPoints": "Who owns it now?",
        "qualityGate": "Go: owned. Loop back: unowned.",
        "source": "authored"
      },
      {
        "name": "Notification",
        "objective": "Alert the rep.",
        "input": "Assigned lead",
        "output": "Notified rep",
        "activities": "Notify immediately for speed",
        "tools": "Slack, email",
        "roles": "RevOps",
        "successMetric": "Notified",
        "decisionPoints": "Did they know?",
        "qualityGate": "Go: fast. Loop back: silent.",
        "source": "authored"
      },
      {
        "name": "Acceptance",
        "objective": "Track acceptance.",
        "input": "Notified lead",
        "output": "Accepted lead",
        "activities": "Track whether the rep accepts and acts",
        "tools": "CRM",
        "roles": "Sales",
        "successMetric": "Accepted",
        "decisionPoints": "Are leads being picked up?",
        "qualityGate": "Go: picked up. Loop back: dropped.",
        "source": "authored"
      },
      {
        "name": "Tracking",
        "objective": "Monitor the system.",
        "input": "Routing data",
        "output": "Performance view",
        "activities": "Track speed-to-contact and routing quality",
        "tools": "Dashboards",
        "roles": "RevOps",
        "successMetric": "Tracked",
        "decisionPoints": "Is routing working?",
        "qualityGate": "Go: healthy. Loop back: broken.",
        "source": "authored"
      }
    ],
    "source": "authored"
  },
  "icp-validation": {
    "stages": [
      {
        "name": "ICP Definition",
        "objective": "Know the buyer who closes.",
        "input": "Closed-won data",
        "output": "ICP definition",
        "activities": "Define the ICP from outcomes, not intuition",
        "tools": "Analysis",
        "roles": "Founder · sales",
        "successMetric": "ICP defined",
        "decisionPoints": "Who actually buys?",
        "qualityGate": "Go: evidence-based. Loop back: guess.",
        "source": "authored"
      },
      {
        "name": "Lead Assessment",
        "objective": "Assess each lead against it.",
        "input": "Lead, ICP",
        "output": "Fit assessment",
        "activities": "Evaluate fit on observable criteria",
        "tools": "CRM, enrichment",
        "roles": "SDR",
        "successMetric": "Assessed",
        "decisionPoints": "Does this lead match?",
        "qualityGate": "Go: assessed. Loop back: skipped.",
        "source": "authored"
      },
      {
        "name": "Fit Scoring",
        "objective": "Score the fit.",
        "input": "Assessment",
        "output": "Fit score",
        "activities": "Score fit clearly",
        "tools": "Scoring",
        "roles": "SDR · revops",
        "successMetric": "Scored",
        "decisionPoints": "How good is the fit?",
        "qualityGate": "Go: scored. Loop back: fuzzy.",
        "source": "authored"
      },
      {
        "name": "Categorization",
        "objective": "Sort into buckets.",
        "input": "Fit scores",
        "output": "Categories",
        "activities": "Categorize: qualified, unqualified, nurture",
        "tools": "Rules",
        "roles": "SDR",
        "successMetric": "Categorized",
        "decisionPoints": "Which bucket?",
        "qualityGate": "Go: clear. Loop back: muddled.",
        "source": "authored"
      },
      {
        "name": "Qualified Pass",
        "objective": "Pass the good ones.",
        "input": "Categories",
        "output": "Passed leads",
        "activities": "Pass qualified leads to sales with context",
        "tools": "CRM",
        "roles": "SDR",
        "successMetric": "Passed",
        "decisionPoints": "Are they sales-ready?",
        "qualityGate": "Go: clean. Loop back: premature.",
        "source": "authored"
      },
      {
        "name": "Unqualified Flag",
        "objective": "Flag the rest.",
        "input": "Categories",
        "output": "Flagged leads",
        "activities": "Flag and route unqualified leads",
        "tools": "CRM",
        "roles": "SDR",
        "successMetric": "Flagged",
        "decisionPoints": "Are they stopped?",
        "qualityGate": "Go: stopped. Loop back: slipping through.",
        "source": "authored"
      },
      {
        "name": "Nurture",
        "objective": "Nurture the not-yet.",
        "input": "Unqualified leads",
        "output": "Nurtured leads",
        "activities": "Send to nurture for the right moment",
        "tools": "Automation",
        "roles": "Marketing",
        "successMetric": "Nurturing",
        "decisionPoints": "Are they warming?",
        "qualityGate": "Go: progressing. Loop back: decaying.",
        "source": "authored"
      },
      {
        "name": "Feedback",
        "objective": "Learn from the rejects.",
        "input": "Reject data",
        "output": "Feedback",
        "activities": "Feed reject patterns back into the ICP",
        "tools": "Analysis",
        "roles": "Sales · founder",
        "successMetric": "Feedback captured",
        "decisionPoints": "Did the ICP drift?",
        "qualityGate": "Go: learning. Loop back: ignoring.",
        "source": "authored"
      },
      {
        "name": "ICP Refinement",
        "objective": "Refine the ICP.",
        "input": "Feedback",
        "output": "Refined ICP",
        "activities": "Update the ICP from what you learned",
        "tools": "Review",
        "roles": "Founder · sales",
        "successMetric": "ICP refined",
        "decisionPoints": "Is it current?",
        "qualityGate": "Go: accurate. Loop back: stale.",
        "source": "authored"
      }
    ],
    "source": "authored"
  },
  "initial-qualification-call": {
    "stages": [
      {
        "name": "Lead Routed",
        "objective": "Get the lead to the caller.",
        "input": "Routed lead",
        "output": "Lead in queue",
        "activities": "Confirm the lead reached the right caller",
        "tools": "CRM",
        "roles": "SDR",
        "successMetric": "Routed",
        "decisionPoints": "Is it on the list?",
        "qualityGate": "Go: routed. Loop back: lost.",
        "source": "authored"
      },
      {
        "name": "Scheduling",
        "objective": "Book the call.",
        "input": "Lead",
        "output": "Scheduled call",
        "activities": "Schedule the qualification call",
        "tools": "Calendar",
        "roles": "SDR",
        "successMetric": "Scheduled",
        "decisionPoints": "When do we talk?",
        "qualityGate": "Go: booked. Loop back: missed.",
        "source": "authored"
      },
      {
        "name": "Preparation",
        "objective": "Prepare.",
        "input": "Lead, research",
        "output": "Prepared caller",
        "activities": "Research the account and context",
        "tools": "Research",
        "roles": "SDR",
        "successMetric": "Prepared",
        "decisionPoints": "Are we ready?",
        "qualityGate": "Go: ready. Loop back: cold.",
        "source": "authored"
      },
      {
        "name": "Discovery",
        "objective": "Ask the right questions.",
        "input": "Preparation",
        "output": "Discovery notes",
        "activities": "Uncover the problem, need, and fit",
        "tools": "Call",
        "roles": "SDR",
        "successMetric": "Discovered",
        "decisionPoints": "What is the real need?",
        "qualityGate": "Go: clear. Loop back: surface.",
        "source": "authored"
      },
      {
        "name": "Qualification",
        "objective": "Qualify honestly.",
        "input": "Discovery notes",
        "output": "Qualification",
        "activities": "Assess against qualification criteria",
        "tools": "Framework",
        "roles": "SDR",
        "successMetric": "Qualified",
        "decisionPoints": "Is this a real opportunity?",
        "qualityGate": "Go: honest. Loop back: forced.",
        "source": "authored"
      },
      {
        "name": "Decision",
        "objective": "Decide the next step.",
        "input": "Qualification",
        "output": "Decision",
        "activities": "Qualified, nurture, or disqualify",
        "tools": "Judgment",
        "roles": "SDR",
        "successMetric": "Decided",
        "decisionPoints": "What now?",
        "qualityGate": "Go: decisive. Loop back: vague.",
        "source": "authored"
      },
      {
        "name": "Handoff / Nurture",
        "objective": "Route the outcome.",
        "input": "Decision",
        "output": "Handed off / nurtured",
        "activities": "Hand off to sales or nurture",
        "tools": "CRM, automation",
        "roles": "SDR · sales",
        "successMetric": "Routed",
        "decisionPoints": "Did it flow?",
        "qualityGate": "Go: flowing. Loop back: stuck.",
        "source": "authored"
      }
    ],
    "source": "authored"
  },
  "outbound-prospecting": {
    "stages": [
      {
        "name": "Target List",
        "objective": "Work the right list.",
        "input": "Prioritized shortlist",
        "output": "Active list",
        "activities": "Take the highest-priority accounts",
        "tools": "CRM, Apollo",
        "roles": "SDR",
        "successMetric": "List active",
        "decisionPoints": "Am I working the best accounts?",
        "qualityGate": "Go: focused. Loop back: scattered.",
        "source": "authored"
      },
      {
        "name": "Outreach Strategy",
        "objective": "Plan the approach.",
        "input": "List, signals",
        "output": "Strategy",
        "activities": "Plan channels, cadence, angles",
        "tools": "Planning",
        "roles": "SDR",
        "successMetric": "Strategy set",
        "decisionPoints": "How do I reach them?",
        "qualityGate": "Go: clear. Loop back: ad hoc.",
        "source": "authored"
      },
      {
        "name": "Message Dev",
        "objective": "Write the outreach.",
        "input": "Strategy, signals",
        "output": "Messages",
        "activities": "Craft signal-driven messaging",
        "tools": "Claude",
        "roles": "SDR",
        "successMetric": "Messages ready",
        "decisionPoints": "Does it earn a reply?",
        "qualityGate": "Go: relevant. Loop back: generic.",
        "source": "authored"
      },
      {
        "name": "Outreach Execution",
        "objective": "Run the outreach.",
        "input": "Messages, list",
        "output": "Outreach sent",
        "activities": "Send the sequence, track engagement",
        "tools": "Smartlead",
        "roles": "SDR",
        "successMetric": "Sent",
        "decisionPoints": "Is it going out?",
        "qualityGate": "Go: active. Loop back: stalled.",
        "source": "authored"
      },
      {
        "name": "Response Monitor",
        "objective": "Watch for replies.",
        "input": "Outreach",
        "output": "Responses",
        "activities": "Monitor replies and engagement",
        "tools": "CRM",
        "roles": "SDR",
        "successMetric": "Monitored",
        "decisionPoints": "Who responded?",
        "qualityGate": "Go: watching. Loop back: blind.",
        "source": "authored"
      },
      {
        "name": "Follow-up",
        "objective": "Pursue the sequence.",
        "input": "Responses",
        "output": "Follow-ups sent",
        "activities": "Execute the follow-up cadence",
        "tools": "Sequence",
        "roles": "SDR",
        "successMetric": "Followed up",
        "decisionPoints": "Did we follow up?",
        "qualityGate": "Go: persistent. Loop back: single-touch.",
        "source": "authored"
      },
      {
        "name": "Engagement",
        "objective": "Track the engagement.",
        "input": "Follow-ups",
        "output": "Engagement view",
        "activities": "Track opens, clicks, replies, meetings",
        "tools": "Analytics",
        "roles": "SDR",
        "successMetric": "Tracked",
        "decisionPoints": "Is it working?",
        "qualityGate": "Go: clear. Loop back: vanity.",
        "source": "authored"
      },
      {
        "name": "Meeting Conversion",
        "objective": "Convert to meetings.",
        "input": "Engagement",
        "output": "Meetings booked",
        "activities": "Turn engagement into meetings",
        "tools": "CRM",
        "roles": "SDR",
        "successMetric": "Converting",
        "decisionPoints": "Are we converting?",
        "qualityGate": "Go: booking. Loop back: failing.",
        "source": "authored"
      },
      {
        "name": "Handoff",
        "objective": "Pass it on.",
        "input": "Meetings",
        "output": "Handed off",
        "activities": "Hand off meetings with context",
        "tools": "CRM",
        "roles": "SDR · AE",
        "successMetric": "Handed off",
        "decisionPoints": "Is the handoff clean?",
        "qualityGate": "Go: clean. Loop back: dropped.",
        "source": "authored"
      }
    ],
    "source": "authored"
  },
  "qualification-discovery": {
    "stages": [
      {
        "name": "Contact Made",
        "objective": "Open the conversation.",
        "input": "Lead, meeting",
        "output": "Contact",
        "activities": "Make contact and start the discussion",
        "tools": "Call",
        "roles": "SDR · AE",
        "successMetric": "Contact made",
        "decisionPoints": "Are we talking?",
        "qualityGate": "Go: connected. Loop back: silent.",
        "source": "authored"
      },
      {
        "name": "Qualification Qs",
        "objective": "Ask the qualifying questions.",
        "input": "Contact",
        "output": "Answers",
        "activities": "Ask about need, fit, and process",
        "tools": "Framework",
        "roles": "AE",
        "successMetric": "Answers captured",
        "decisionPoints": "What is the real need?",
        "qualityGate": "Go: rich. Loop back: surface.",
        "source": "authored"
      },
      {
        "name": "Pain ID",
        "objective": "Find the pain.",
        "input": "Answers",
        "output": "Pain profile",
        "activities": "Identify the problem and its impact",
        "tools": "Discovery",
        "roles": "AE",
        "successMetric": "Pain clear",
        "decisionPoints": "What hurts?",
        "qualityGate": "Go: real. Loop back: vague.",
        "source": "authored"
      },
      {
        "name": "BANT",
        "objective": "Check budget, authority, timing.",
        "input": "Pain, context",
        "output": "BANT assessment",
        "activities": "Qualify budget, authority, need, timeline",
        "tools": "Framework",
        "roles": "AE",
        "successMetric": "BANT assessed",
        "decisionPoints": "Can they buy?",
        "qualityGate": "Go: clear. Loop back: unknown.",
        "source": "authored"
      },
      {
        "name": "Use Case Fit",
        "objective": "Confirm the use case.",
        "input": "BANT, pain",
        "output": "Fit assessment",
        "activities": "Confirm the product fits the use case",
        "tools": "Analysis",
        "roles": "AE",
        "successMetric": "Fit confirmed",
        "decisionPoints": "Does it solve it?",
        "qualityGate": "Go: fits. Loop back: mismatch.",
        "source": "authored"
      },
      {
        "name": "Decision",
        "objective": "Decide.",
        "input": "Fit, BANT",
        "output": "Decision",
        "activities": "Qualified or not",
        "tools": "Judgment",
        "roles": "AE",
        "successMetric": "Decided",
        "decisionPoints": "Is it real?",
        "qualityGate": "Go: decisive. Loop back: fuzzy.",
        "source": "authored"
      },
      {
        "name": "Qualified / Disqualified",
        "objective": "Route the outcome.",
        "input": "Decision",
        "output": "Routed opportunity",
        "activities": "Advance or close out",
        "tools": "CRM",
        "roles": "AE",
        "successMetric": "Routed",
        "decisionPoints": "What now?",
        "qualityGate": "Go: clean. Loop back: limbo.",
        "source": "authored"
      },
      {
        "name": "Next Steps",
        "objective": "Set the path forward.",
        "input": "Routed opportunity",
        "output": "Clear next step",
        "activities": "Book the next step with owners and dates",
        "tools": "Planning",
        "roles": "AE",
        "successMetric": "Next step set",
        "decisionPoints": "What happens next?",
        "qualityGate": "Go: clear. Loop back: dropped.",
        "source": "authored"
      }
    ],
    "source": "authored"
  },
  "meeting-setting": {
    "stages": [
      {
        "name": "Qualified",
        "objective": "Confirm it's worth a meeting.",
        "input": "Qualified lead",
        "output": "Meeting candidate",
        "activities": "Confirm the opportunity warrants a meeting",
        "tools": "CRM",
        "roles": "SDR",
        "successMetric": "Confirmed",
        "decisionPoints": "Is it real?",
        "qualityGate": "Go: real. Loop back: waste.",
        "source": "authored"
      },
      {
        "name": "Calendar Coord",
        "objective": "Find the time.",
        "input": "Candidate",
        "output": "Time slot",
        "activities": "Coordinate calendars for the right people",
        "tools": "Calendar",
        "roles": "SDR",
        "successMetric": "Slotted",
        "decisionPoints": "When?",
        "qualityGate": "Go: booked. Loop back: chasing.",
        "source": "authored"
      },
      {
        "name": "Agenda",
        "objective": "Set the agenda.",
        "input": "Meeting, context",
        "output": "Agenda",
        "activities": "Set a clear agenda for value",
        "tools": "Planning",
        "roles": "SDR",
        "successMetric": "Agenda set",
        "decisionPoints": "Is it worth their time?",
        "qualityGate": "Go: sharp. Loop back: vague.",
        "source": "authored"
      },
      {
        "name": "Stakeholder ID",
        "objective": "Get the right people.",
        "input": "Agenda, account",
        "output": "Stakeholders",
        "activities": "Ensure the right stakeholders are in the room",
        "tools": "Research",
        "roles": "SDR",
        "successMetric": "Right people",
        "decisionPoints": "Who must attend?",
        "qualityGate": "Go: complete. Loop back: wrong people.",
        "source": "authored"
      },
      {
        "name": "Prep",
        "objective": "Prepare both sides.",
        "input": "Meeting, context",
        "output": "Prepared meeting",
        "activities": "Brief and prep for a productive meeting",
        "tools": "Research",
        "roles": "SDR",
        "successMetric": "Prepared",
        "decisionPoints": "Are we ready?",
        "qualityGate": "Go: ready. Loop back: cold.",
        "source": "authored"
      },
      {
        "name": "Confirmation",
        "objective": "Confirm it.",
        "input": "Prepared meeting",
        "output": "Confirmed meeting",
        "activities": "Confirm date, time, attendees",
        "tools": "Calendar",
        "roles": "SDR",
        "successMetric": "Confirmed",
        "decisionPoints": "Is it locked?",
        "qualityGate": "Go: locked. Loop back: no-show risk.",
        "source": "authored"
      },
      {
        "name": "AE Briefing",
        "objective": "Brief the AE.",
        "input": "Confirmed meeting",
        "output": "Briefed AE",
        "activities": "Pass full context to the AE",
        "tools": "Docs",
        "roles": "SDR · AE",
        "successMetric": "Briefed",
        "decisionPoints": "Is the AE ready?",
        "qualityGate": "Go: equipped. Loop back: cold.",
        "source": "authored"
      },
      {
        "name": "Tracking",
        "objective": "Track the outcome.",
        "input": "Meeting, CRM",
        "output": "Tracked meeting",
        "activities": "Log the meeting and next steps",
        "tools": "CRM",
        "roles": "SDR",
        "successMetric": "Tracked",
        "decisionPoints": "Is it recorded?",
        "qualityGate": "Go: recorded. Loop back: lost.",
        "source": "authored"
      },
      {
        "name": "Follow-up",
        "objective": "Follow up.",
        "input": "Meeting outcome",
        "output": "Followed up",
        "activities": "Ensure follow-through after the meeting",
        "tools": "Process",
        "roles": "SDR · AE",
        "successMetric": "Followed up",
        "decisionPoints": "Did we follow up?",
        "qualityGate": "Go: pursued. Loop back: dropped.",
        "source": "authored"
      }
    ],
    "source": "authored"
  },
  "handoff-to-ae": {
    "stages": [
      {
        "name": "Meeting Confirmed",
        "objective": "Have a confirmed meeting.",
        "input": "Qualified meeting",
        "output": "Confirmed meeting",
        "activities": "Confirm the meeting and its context",
        "tools": "Calendar",
        "roles": "SDR",
        "successMetric": "Confirmed",
        "decisionPoints": "Is it locked?",
        "qualityGate": "Go: locked. Loop back: flaky.",
        "source": "authored"
      },
      {
        "name": "Context Docs",
        "objective": "Document everything.",
        "input": "SDR notes, research",
        "output": "Context doc",
        "activities": "Write the full context: what was said, learned",
        "tools": "Docs",
        "roles": "SDR",
        "successMetric": "Context written",
        "decisionPoints": "Is the context captured?",
        "qualityGate": "Go: rich. Loop back: bare.",
        "source": "authored"
      },
      {
        "name": "AE Brief",
        "objective": "Brief the AE.",
        "input": "Context doc",
        "output": "Briefed AE",
        "activities": "Hand off with a clear brief",
        "tools": "Briefing",
        "roles": "SDR · AE",
        "successMetric": "Briefed",
        "decisionPoints": "Does the AE know the deal?",
        "qualityGate": "Go: clear. Loop back: vague.",
        "source": "authored"
      },
      {
        "name": "Deal Structure",
        "objective": "Plan the deal.",
        "input": "Brief",
        "output": "Deal plan",
        "activities": "Structure the deal and the approach",
        "tools": "Planning",
        "roles": "AE",
        "successMetric": "Structured",
        "decisionPoints": "What is the plan?",
        "qualityGate": "Go: planned. Loop back: unstructured.",
        "source": "authored"
      },
      {
        "name": "Account Assignment",
        "objective": "Assign ownership.",
        "input": "Deal plan",
        "output": "Owned account",
        "activities": "Lock ownership and responsibility",
        "tools": "CRM",
        "roles": "AE",
        "successMetric": "Assigned",
        "decisionPoints": "Who owns it?",
        "qualityGate": "Go: owned. Loop back: orphaned.",
        "source": "authored"
      },
      {
        "name": "Tracking",
        "objective": "Track the deal.",
        "input": "Deal plan",
        "output": "Tracked deal",
        "activities": "Set up tracking and next steps",
        "tools": "CRM",
        "roles": "AE",
        "successMetric": "Tracked",
        "decisionPoints": "Is it visible?",
        "qualityGate": "Go: visible. Loop back: hidden.",
        "source": "authored"
      },
      {
        "name": "Progress",
        "objective": "Watch progress.",
        "input": "Tracking",
        "output": "Progress view",
        "activities": "Monitor the deal's movement",
        "tools": "Dashboards",
        "roles": "AE",
        "successMetric": "Moving",
        "decisionPoints": "Is it moving?",
        "qualityGate": "Go: progressing. Loop back: stalled.",
        "source": "authored"
      },
      {
        "name": "Deal Review",
        "objective": "Review it.",
        "input": "Progress",
        "output": "Reviewed deal",
        "activities": "Review in pipeline cadence",
        "tools": "Reviews",
        "roles": "AE · manager",
        "successMetric": "Reviewed",
        "decisionPoints": "Is it on track?",
        "qualityGate": "Go: reviewed. Loop back: ignored.",
        "source": "authored"
      }
    ],
    "source": "authored"
  },
  "forecast-pipeline-management": {
    "stages": [
      {
        "name": "Leads Generated",
        "objective": "Have leads entering.",
        "input": "Lead sources",
        "output": "Lead flow",
        "activities": "Ensure leads flow into the pipeline",
        "tools": "CRM",
        "roles": "Sales · marketing",
        "successMetric": "Flowing",
        "decisionPoints": "Are leads coming?",
        "qualityGate": "Go: flowing. Loop back: dry.",
        "source": "authored"
      },
      {
        "name": "Pipeline Capture",
        "objective": "Capture them.",
        "input": "Lead flow",
        "output": "Captured pipeline",
        "activities": "Log deals into the pipeline accurately",
        "tools": "CRM",
        "roles": "Sales",
        "successMetric": "Captured",
        "decisionPoints": "Is everything captured?",
        "qualityGate": "Go: complete. Loop back: leaks.",
        "source": "authored"
      },
      {
        "name": "Stage Assignment",
        "objective": "Assign stages honestly.",
        "input": "Pipeline",
        "output": "Staged deals",
        "activities": "Assign stages by evidence, not optimism",
        "tools": "Process",
        "roles": "Sales",
        "successMetric": "Staged",
        "decisionPoints": "Are stages honest?",
        "qualityGate": "Go: honest. Loop back: inflated.",
        "source": "authored"
      },
      {
        "name": "Forecast Model",
        "objective": "Build the forecast.",
        "input": "Staged deals",
        "output": "Forecast",
        "activities": "Model the forecast from stage evidence",
        "tools": "Modeling",
        "roles": "Sales · revops",
        "successMetric": "Forecast built",
        "decisionPoints": "Is the number real?",
        "qualityGate": "Go: sound. Loop back: hope.",
        "source": "authored"
      },
      {
        "name": "Pipeline Review",
        "objective": "Review it.",
        "input": "Pipeline, forecast",
        "output": "Reviewed pipeline",
        "activities": "Review health and coverage",
        "tools": "Reviews",
        "roles": "Sales leadership",
        "successMetric": "Reviewed",
        "decisionPoints": "Is the pipeline healthy?",
        "qualityGate": "Go: healthy. Loop back: weak.",
        "source": "authored"
      },
      {
        "name": "Risk Assessment",
        "objective": "Find the risk.",
        "input": "Pipeline",
        "output": "Risk view",
        "activities": "Identify at-risk deals and patterns",
        "tools": "Analysis",
        "roles": "Sales leadership",
        "successMetric": "Risks clear",
        "decisionPoints": "What could miss?",
        "qualityGate": "Go: known. Loop back: blind.",
        "source": "authored"
      },
      {
        "name": "Accuracy Measure",
        "objective": "Measure accuracy.",
        "input": "Forecast, actuals",
        "output": "Accuracy view",
        "activities": "Track forecast accuracy",
        "tools": "Dashboards",
        "roles": "RevOps",
        "successMetric": "Accuracy tracked",
        "decisionPoints": "How close are we?",
        "qualityGate": "Go: tracked. Loop back: ignored.",
        "source": "authored"
      },
      {
        "name": "Adjustment",
        "objective": "Correct course.",
        "input": "Accuracy",
        "output": "Adjusted forecast",
        "activities": "Adjust the forecast as reality shifts",
        "tools": "Review",
        "roles": "Sales leadership",
        "successMetric": "Adjusted",
        "decisionPoints": "Did we adjust?",
        "qualityGate": "Go: current. Loop back: stale.",
        "source": "authored"
      },
      {
        "name": "Reporting",
        "objective": "Report it.",
        "input": "Forecast, accuracy",
        "output": "Reports",
        "activities": "Report to leadership with confidence",
        "tools": "Reporting",
        "roles": "Sales · revops",
        "successMetric": "Reported",
        "decisionPoints": "Is it communicated?",
        "qualityGate": "Go: visible. Loop back: silent.",
        "source": "authored"
      }
    ],
    "source": "authored"
  },
  "deal-strategy": {
    "stages": [
      {
        "name": "Opportunity ID",
        "objective": "Spot the deal worth planning.",
        "input": "Pipeline",
        "output": "Key deal",
        "activities": "Identify the deals that need strategy",
        "tools": "CRM",
        "roles": "AE · manager",
        "successMetric": "Identified",
        "decisionPoints": "Which deals matter?",
        "qualityGate": "Go: right deals. Loop back: every deal.",
        "source": "authored"
      },
      {
        "name": "Deal Analysis",
        "objective": "Understand the deal.",
        "input": "Key deal, data",
        "output": "Deal picture",
        "activities": "Analyze the situation, needs, and dynamics",
        "tools": "Analysis",
        "roles": "AE",
        "successMetric": "Understood",
        "decisionPoints": "What is really going on?",
        "qualityGate": "Go: deep. Loop back: surface.",
        "source": "authored"
      },
      {
        "name": "Stakeholder Map",
        "objective": "Map the people.",
        "input": "Deal picture",
        "output": "Stakeholder map",
        "activities": "Map buyers, influencers, champions, blockers",
        "tools": "Research",
        "roles": "AE",
        "successMetric": "Mapped",
        "decisionPoints": "Who decides?",
        "qualityGate": "Go: complete. Loop back: blind.",
        "source": "authored"
      },
      {
        "name": "Competition",
        "objective": "Know the competition.",
        "input": "Stakeholder map, market",
        "output": "Competitive view",
        "activities": "Assess competitors and their position",
        "tools": "Intel",
        "roles": "AE",
        "successMetric": "Known",
        "decisionPoints": "What are we up against?",
        "qualityGate": "Go: clear. Loop back: surprised.",
        "source": "authored"
      },
      {
        "name": "Win Strategy",
        "objective": "Define how we win.",
        "input": "All analysis",
        "output": "Win plan",
        "activities": "Build the win strategy and approach",
        "tools": "Strategy",
        "roles": "AE · manager",
        "successMetric": "Strategy set",
        "decisionPoints": "How do we win?",
        "qualityGate": "Go: clear. Loop back: vague.",
        "source": "authored"
      },
      {
        "name": "Pricing",
        "objective": "Set the pricing approach.",
        "input": "Win plan, value",
        "output": "Pricing plan",
        "activities": "Align pricing to value and the win",
        "tools": "Pricing",
        "roles": "AE · pricing",
        "successMetric": "Pricing set",
        "decisionPoints": "Is the price right?",
        "qualityGate": "Go: value-aligned. Loop back: discount-driven.",
        "source": "authored"
      },
      {
        "name": "Timeline",
        "objective": "Set the timeline.",
        "input": "Win plan",
        "output": "Timeline",
        "activities": "Plan the path to close",
        "tools": "Planning",
        "roles": "AE",
        "successMetric": "Timeline set",
        "decisionPoints": "When does it close?",
        "qualityGate": "Go: clear. Loop back: drifting.",
        "source": "authored"
      },
      {
        "name": "Execution",
        "objective": "Run the plan.",
        "input": "Timeline, win plan",
        "output": "Executed plan",
        "activities": "Execute the workstreams",
        "tools": "CRM",
        "roles": "AE",
        "successMetric": "Executing",
        "decisionPoints": "Is it moving?",
        "qualityGate": "Go: progressing. Loop back: stalled.",
        "source": "authored"
      },
      {
        "name": "Win/Loss",
        "objective": "Learn from the outcome.",
        "input": "Outcome",
        "output": "Learnings",
        "activities": "Capture why you won or lost",
        "tools": "Win/loss",
        "roles": "AE",
        "successMetric": "Learned",
        "decisionPoints": "What did we learn?",
        "qualityGate": "Go: learning. Loop back: repeating.",
        "source": "authored"
      }
    ],
    "source": "authored"
  },
  "stakeholder-management": {
    "stages": [
      {
        "name": "Stakeholder ID",
        "objective": "Find all the stakeholders.",
        "input": "Deal, account",
        "output": "Stakeholder list",
        "activities": "Identify everyone who touches the decision",
        "tools": "Research",
        "roles": "AE",
        "successMetric": "Identified",
        "decisionPoints": "Who is in the room?",
        "qualityGate": "Go: complete. Loop back: partial.",
        "source": "authored"
      },
      {
        "name": "Role Mapping",
        "objective": "Map their roles.",
        "input": "Stakeholder list",
        "output": "Role map",
        "activities": "Map buyer, influencer, champion, blocker",
        "tools": "Mapping",
        "roles": "AE",
        "successMetric": "Mapped",
        "decisionPoints": "Who plays what role?",
        "qualityGate": "Go: clear. Loop back: unknown.",
        "source": "authored"
      },
      {
        "name": "Relationship Assessment",
        "objective": "Assess the relationships.",
        "input": "Role map",
        "output": "Relationship view",
        "activities": "Assess where you stand with each",
        "tools": "Assessment",
        "roles": "AE",
        "successMetric": "Assessed",
        "decisionPoints": "Who is with us?",
        "qualityGate": "Go: honest. Loop back: assumed.",
        "source": "authored"
      },
      {
        "name": "Engagement Strategy",
        "objective": "Plan the engagement.",
        "input": "Relationship view",
        "output": "Engagement plan",
        "activities": "Plan how to reach and win each",
        "tools": "Strategy",
        "roles": "AE",
        "successMetric": "Planned",
        "decisionPoints": "How do we engage them?",
        "qualityGate": "Go: targeted. Loop back: generic.",
        "source": "authored"
      },
      {
        "name": "Outreach",
        "objective": "Reach out.",
        "input": "Engagement plan",
        "output": "Outreach done",
        "activities": "Engage each stakeholder",
        "tools": "Communication",
        "roles": "AE",
        "successMetric": "Engaged",
        "decisionPoints": "Did we connect?",
        "qualityGate": "Go: connected. Loop back: silent.",
        "source": "authored"
      },
      {
        "name": "Relationship Building",
        "objective": "Build the relationships.",
        "input": "Outreach",
        "output": "Strong relationships",
        "activities": "Deepen rapport and trust",
        "tools": "Relationship",
        "roles": "AE",
        "successMetric": "Building",
        "decisionPoints": "Are they with us?",
        "qualityGate": "Go: growing. Loop back: flat.",
        "source": "authored"
      },
      {
        "name": "Influence Map",
        "objective": "Track the influence.",
        "input": "Relationships",
        "output": "Influence view",
        "activities": "Track who is moving toward us",
        "tools": "Analysis",
        "roles": "AE",
        "successMetric": "Tracked",
        "decisionPoints": "Is influence shifting?",
        "qualityGate": "Go: clear. Loop back: blind.",
        "source": "authored"
      },
      {
        "name": "Engagement",
        "objective": "Keep them engaged.",
        "input": "Influence view",
        "output": "Engaged stakeholders",
        "activities": "Maintain momentum to close",
        "tools": "CRM",
        "roles": "AE",
        "successMetric": "Engaged",
        "decisionPoints": "Are they still engaged?",
        "qualityGate": "Go: momentum. Loop back: cooling.",
        "source": "authored"
      }
    ],
    "source": "authored"
  },
  "negotiation-closing": {
    "stages": [
      {
        "name": "Proposal",
        "objective": "Present the proposal.",
        "input": "Deal strategy, value",
        "output": "Proposal",
        "activities": "Present a value-anchored proposal",
        "tools": "Docs",
        "roles": "AE",
        "successMetric": "Presented",
        "decisionPoints": "Is the value clear?",
        "qualityGate": "Go: clear. Loop back: fuzzy.",
        "source": "authored"
      },
      {
        "name": "Objection ID",
        "objective": "Surface the objections.",
        "input": "Proposal, feedback",
        "output": "Objections",
        "activities": "Identify real objections, not surface ones",
        "tools": "Discovery",
        "roles": "AE",
        "successMetric": "Objections known",
        "decisionPoints": "What is really stopping them?",
        "qualityGate": "Go: clear. Loop back: hidden.",
        "source": "authored"
      },
      {
        "name": "Negotiation",
        "objective": "Negotiate on value.",
        "input": "Objections, terms",
        "output": "Negotiated deal",
        "activities": "Trade on value, protect margin",
        "tools": "Negotiation",
        "roles": "AE",
        "successMetric": "Negotiated",
        "decisionPoints": "Are we trading well?",
        "qualityGate": "Go: value protected. Loop back: discounted.",
        "source": "authored"
      },
      {
        "name": "Terms",
        "objective": "Finalize the terms.",
        "input": "Negotiated deal",
        "output": "Terms agreed",
        "activities": "Agree pricing, terms, conditions",
        "tools": "Contracts",
        "roles": "AE · legal",
        "successMetric": "Terms set",
        "decisionPoints": "Are terms fair?",
        "qualityGate": "Go: agreed. Loop back: contested.",
        "source": "authored"
      },
      {
        "name": "Procurement",
        "objective": "Handle procurement.",
        "input": "Terms, process",
        "output": "Procurement done",
        "activities": "Navigate procurement's process",
        "tools": "Process",
        "roles": "AE",
        "successMetric": "Cleared",
        "decisionPoints": "Did procurement cooperate?",
        "qualityGate": "Go: smooth. Loop back: stalled.",
        "source": "authored"
      },
      {
        "name": "Signature",
        "objective": "Get the signature.",
        "input": "Final terms",
        "output": "Signed contract",
        "activities": "Close the deal",
        "tools": "E-sign",
        "roles": "AE",
        "successMetric": "Signed",
        "decisionPoints": "Did it close?",
        "qualityGate": "Go: won. Loop back: lost.",
        "source": "authored"
      },
      {
        "name": "Close",
        "objective": "Confirm the close.",
        "input": "Signature",
        "output": "Closed deal",
        "activities": "Confirm the win, update systems",
        "tools": "CRM",
        "roles": "AE",
        "successMetric": "Closed",
        "decisionPoints": "Is it recorded?",
        "qualityGate": "Go: recorded. Loop back: messy.",
        "source": "authored"
      },
      {
        "name": "CRM Update",
        "objective": "Update the record.",
        "input": "Closed deal",
        "output": "Clean record",
        "activities": "Log the deal fully",
        "tools": "CRM",
        "roles": "Sales ops",
        "successMetric": "Updated",
        "decisionPoints": "Is the data clean?",
        "qualityGate": "Go: clean. Loop back: dirty.",
        "source": "authored"
      },
      {
        "name": "Handoff to CS",
        "objective": "Hand off.",
        "input": "Closed deal",
        "output": "Handed off",
        "activities": "Pass to CS with context",
        "tools": "Handoff",
        "roles": "AE · CS",
        "successMetric": "Handed off",
        "decisionPoints": "Is CS ready?",
        "qualityGate": "Go: clean. Loop back: dropped.",
        "source": "authored"
      }
    ],
    "source": "authored"
  },
  "sales-training": {
    "stages": [
      {
        "name": "Needs Assessment",
        "objective": "Find the gaps.",
        "input": "Performance, feedback",
        "output": "Training needs",
        "activities": "Assess where skills fall short",
        "tools": "Assessment",
        "roles": "Enablement",
        "successMetric": "Needs clear",
        "decisionPoints": "What must improve?",
        "qualityGate": "Go: precise. Loop back: guessed.",
        "source": "authored"
      },
      {
        "name": "Curriculum Design",
        "objective": "Design the path.",
        "input": "Needs",
        "output": "Curriculum",
        "activities": "Design the training path",
        "tools": "Design",
        "roles": "Enablement",
        "successMetric": "Curriculum built",
        "decisionPoints": "What order teaches best?",
        "qualityGate": "Go: coherent. Loop back: random.",
        "source": "authored"
      },
      {
        "name": "Content Dev",
        "objective": "Build the material.",
        "input": "Curriculum",
        "output": "Content",
        "activities": "Create training, playbooks, practice",
        "tools": "Claude, Notion",
        "roles": "Enablement",
        "successMetric": "Content ready",
        "decisionPoints": "Is it usable?",
        "qualityGate": "Go: sharp. Loop back: stale.",
        "source": "authored"
      },
      {
        "name": "Delivery",
        "objective": "Plan delivery.",
        "input": "Content",
        "output": "Delivery plan",
        "activities": "Schedule and assign",
        "tools": "Calendar",
        "roles": "Enablement",
        "successMetric": "Planned",
        "decisionPoints": "When does it run?",
        "qualityGate": "Go: scheduled. Loop back: chaotic.",
        "source": "authored"
      },
      {
        "name": "Execution",
        "objective": "Run the training.",
        "input": "Delivery plan",
        "output": "Trained reps",
        "activities": "Deliver sessions, role-plays, practice",
        "tools": "LMS",
        "roles": "Enablement",
        "successMetric": "Delivered",
        "decisionPoints": "Did it land?",
        "qualityGate": "Go: learned. Loop back: skipped.",
        "source": "authored"
      },
      {
        "name": "Verification",
        "objective": "Verify it sticks.",
        "input": "Training",
        "output": "Verified skills",
        "activities": "Test skills and application",
        "tools": "Assessments",
        "roles": "Enablement",
        "successMetric": "Verified",
        "decisionPoints": "Can they do it?",
        "qualityGate": "Go: proven. Loop back: unproven.",
        "source": "authored"
      },
      {
        "name": "Certification",
        "objective": "Certify.",
        "input": "Verified skills",
        "output": "Certified reps",
        "activities": "Certify on demonstrated skill",
        "tools": "Process",
        "roles": "Enablement",
        "successMetric": "Certified",
        "decisionPoints": "Are they certified?",
        "qualityGate": "Go: certified. Loop back: pending.",
        "source": "authored"
      },
      {
        "name": "Reinforcement",
        "objective": "Keep it fresh.",
        "input": "Usage, feedback",
        "output": "Reinforced skills",
        "activities": "Reinforce, refresh, update",
        "tools": "Updates",
        "roles": "Enablement",
        "successMetric": "Reinforced",
        "decisionPoints": "Is it sticking?",
        "qualityGate": "Go: retained. Loop back: decayed.",
        "source": "authored"
      }
    ],
    "source": "authored"
  },
  "manager-coaching-development": {
    "stages": [
      {
        "name": "Manager Assessment",
        "objective": "Assess the manager.",
        "input": "Performance, 1:1s",
        "output": "Manager view",
        "activities": "Assess the manager's coaching capability",
        "tools": "Assessment",
        "roles": "Leadership",
        "successMetric": "Assessed",
        "decisionPoints": "Where do they grow?",
        "qualityGate": "Go: honest. Loop back: assumed.",
        "source": "authored"
      },
      {
        "name": "Dev Plan",
        "objective": "Build the plan.",
        "input": "Assessment",
        "output": "Dev plan",
        "activities": "Create a development plan",
        "tools": "Planning",
        "roles": "Leadership",
        "successMetric": "Plan built",
        "decisionPoints": "What do we work on?",
        "qualityGate": "Go: specific. Loop back: vague.",
        "source": "authored"
      },
      {
        "name": "Coaching Curriculum",
        "objective": "Design the coaching path.",
        "input": "Dev plan",
        "output": "Curriculum",
        "activities": "Design what the manager will learn and practice",
        "tools": "Design",
        "roles": "Enablement",
        "successMetric": "Curriculum built",
        "decisionPoints": "How do they learn it?",
        "qualityGate": "Go: coherent. Loop back: random.",
        "source": "authored"
      },
      {
        "name": "Execution",
        "objective": "Run the development.",
        "input": "Curriculum",
        "output": "Development done",
        "activities": "Deliver coaching, practice, feedback",
        "tools": "Sessions",
        "roles": "Leadership",
        "successMetric": "Executed",
        "decisionPoints": "Is it happening?",
        "qualityGate": "Go: active. Loop back: skipped.",
        "source": "authored"
      },
      {
        "name": "Feedback",
        "objective": "Give feedback.",
        "input": "Execution",
        "output": "Feedback given",
        "activities": "Give real, specific feedback",
        "tools": "Feedback",
        "roles": "Leadership",
        "successMetric": "Feedback given",
        "decisionPoints": "Did they hear it?",
        "qualityGate": "Go: clear. Loop back: vague.",
        "source": "authored"
      },
      {
        "name": "Practice",
        "objective": "Let them practice.",
        "input": "Feedback",
        "output": "Practice done",
        "activities": "Practice the skill in real situations",
        "tools": "Practice",
        "roles": "Leadership",
        "successMetric": "Practiced",
        "decisionPoints": "Are they applying it?",
        "qualityGate": "Go: applied. Loop back: theory.",
        "source": "authored"
      },
      {
        "name": "Reinforcement",
        "objective": "Reinforce.",
        "input": "Practice, feedback",
        "output": "Reinforced skills",
        "activities": "Reinforce over time",
        "tools": "1:1s",
        "roles": "Leadership",
        "successMetric": "Reinforced",
        "decisionPoints": "Is it sticking?",
        "qualityGate": "Go: retained. Loop back: decayed.",
        "source": "authored"
      },
      {
        "name": "Monitoring",
        "objective": "Track the growth.",
        "input": "Progress",
        "output": "Growth view",
        "activities": "Monitor the manager's improvement",
        "tools": "Dashboards",
        "roles": "Leadership",
        "successMetric": "Tracked",
        "decisionPoints": "Is it working?",
        "qualityGate": "Go: improving. Loop back: static.",
        "source": "authored"
      }
    ],
    "source": "authored"
  },
  "weekly-monthly-quarterly-reviews": {
    "stages": [
      {
        "name": "Status Collection",
        "objective": "Gather the state.",
        "input": "Data, teams",
        "output": "Status view",
        "activities": "Collect status, metrics, issues",
        "tools": "Dashboards",
        "roles": "Leadership",
        "successMetric": "Collected",
        "decisionPoints": "What is the state?",
        "qualityGate": "Go: complete. Loop back: stale.",
        "source": "authored"
      },
      {
        "name": "Trend Analysis",
        "objective": "Read the trends.",
        "input": "Status",
        "output": "Trends",
        "activities": "Analyze direction against the plan",
        "tools": "Analytics",
        "roles": "Leadership",
        "successMetric": "Trends clear",
        "decisionPoints": "Are we on track?",
        "qualityGate": "Go: clear. Loop back: noise.",
        "source": "authored"
      },
      {
        "name": "Discussion",
        "objective": "Discuss what matters.",
        "input": "Trends, issues",
        "output": "Discussion",
        "activities": "Talk through the real issues",
        "tools": "Meetings",
        "roles": "Leadership",
        "successMetric": "Discussed",
        "decisionPoints": "What needs attention?",
        "qualityGate": "Go: focused. Loop back: status-only.",
        "source": "authored"
      },
      {
        "name": "Decision Making",
        "objective": "Decide.",
        "input": "Discussion",
        "output": "Decisions",
        "activities": "Make decisions, not just notes",
        "tools": "Process",
        "roles": "Leadership",
        "successMetric": "Decided",
        "decisionPoints": "What do we decide?",
        "qualityGate": "Go: decisive. Loop back: deferred.",
        "source": "authored"
      },
      {
        "name": "Action Items",
        "objective": "Assign actions.",
        "input": "Decisions",
        "output": "Action items",
        "activities": "Assign owners, dates, next steps",
        "tools": "Planning",
        "roles": "Leadership",
        "successMetric": "Assigned",
        "decisionPoints": "Who does what?",
        "qualityGate": "Go: owned. Loop back: unowned.",
        "source": "authored"
      },
      {
        "name": "Follow-up",
        "objective": "Pursue them.",
        "input": "Action items",
        "output": "Followed up",
        "activities": "Track completion of actions",
        "tools": "Tracking",
        "roles": "Leadership",
        "successMetric": "Followed up",
        "decisionPoints": "Did they get done?",
        "qualityGate": "Go: done. Loop back: dropped.",
        "source": "authored"
      },
      {
        "name": "Learning Capture",
        "objective": "Capture the learning.",
        "input": "Outcomes",
        "output": "Learnings",
        "activities": "Record what worked and didn't",
        "tools": "Notes",
        "roles": "Leadership",
        "successMetric": "Captured",
        "decisionPoints": "Did we learn?",
        "qualityGate": "Go: learning. Loop back: repeating.",
        "source": "authored"
      }
    ],
    "source": "authored"
  },
  "cross-functional-alignment": {
    "stages": [
      {
        "name": "Stakeholder ID",
        "objective": "Find the functions.",
        "input": "Organization",
        "output": "Stakeholders",
        "activities": "Identify the functions that must align",
        "tools": "Mapping",
        "roles": "Leadership",
        "successMetric": "Identified",
        "decisionPoints": "Who is involved?",
        "qualityGate": "Go: complete. Loop back: missed.",
        "source": "authored"
      },
      {
        "name": "Alignment Assessment",
        "objective": "Assess the alignment.",
        "input": "Stakeholders, metrics",
        "output": "Alignment view",
        "activities": "Assess where functions diverge",
        "tools": "Assessment",
        "roles": "Leadership",
        "successMetric": "Assessed",
        "decisionPoints": "Where do we misalign?",
        "qualityGate": "Go: honest. Loop back: assumed.",
        "source": "authored"
      },
      {
        "name": "Meeting Design",
        "objective": "Design the alignment structure.",
        "input": "Assessment",
        "output": "Cadence design",
        "activities": "Design meetings and decision rights",
        "tools": "Design",
        "roles": "Leadership",
        "successMetric": "Designed",
        "decisionPoints": "How do we align?",
        "qualityGate": "Go: clear. Loop back: ad hoc.",
        "source": "authored"
      },
      {
        "name": "Facilitation",
        "objective": "Run it.",
        "input": "Cadence design",
        "output": "Aligned sessions",
        "activities": "Facilitate cross-functional sessions",
        "tools": "Meetings",
        "roles": "Leadership",
        "successMetric": "Running",
        "decisionPoints": "Are we meeting?",
        "qualityGate": "Go: active. Loop back: skipped.",
        "source": "authored"
      },
      {
        "name": "Decision",
        "objective": "Decide together.",
        "input": "Sessions",
        "output": "Decisions",
        "activities": "Make joint decisions",
        "tools": "Process",
        "roles": "Leadership",
        "successMetric": "Decided",
        "decisionPoints": "Did we decide?",
        "qualityGate": "Go: aligned. Loop back: siloed.",
        "source": "authored"
      },
      {
        "name": "Action Plan",
        "objective": "Plan the work.",
        "input": "Decisions",
        "output": "Action plan",
        "activities": "Turn decisions into shared actions",
        "tools": "Planning",
        "roles": "Leadership",
        "successMetric": "Planned",
        "decisionPoints": "What now?",
        "qualityGate": "Go: clear. Loop back: vague.",
        "source": "authored"
      },
      {
        "name": "Follow-up",
        "objective": "Pursue it.",
        "input": "Action plan",
        "output": "Followed up",
        "activities": "Track execution across functions",
        "tools": "Tracking",
        "roles": "Leadership",
        "successMetric": "Followed up",
        "decisionPoints": "Is it happening?",
        "qualityGate": "Go: done. Loop back: dropped.",
        "source": "authored"
      },
      {
        "name": "Feedback",
        "objective": "Close the loop.",
        "input": "Outcomes",
        "output": "Feedback",
        "activities": "Learn and adjust the alignment",
        "tools": "Review",
        "roles": "Leadership",
        "successMetric": "Learned",
        "decisionPoints": "Did it improve?",
        "qualityGate": "Go: improving. Loop back: repeating.",
        "source": "authored"
      }
    ],
    "source": "authored"
  },
  "team-training-onboarding": {
    "stages": [
      {
        "name": "Needs Assessment",
        "objective": "Find what new hires must learn.",
        "input": "Roles, gaps",
        "output": "Needs",
        "activities": "Assess what a new hire needs to produce",
        "tools": "Assessment",
        "roles": "Enablement",
        "successMetric": "Needs clear",
        "decisionPoints": "What do they need?",
        "qualityGate": "Go: precise. Loop back: guessed.",
        "source": "authored"
      },
      {
        "name": "Curriculum Design",
        "objective": "Design the path.",
        "input": "Needs",
        "output": "Curriculum",
        "activities": "Design the onboarding curriculum",
        "tools": "Design",
        "roles": "Enablement",
        "successMetric": "Curriculum built",
        "decisionPoints": "What order?",
        "qualityGate": "Go: coherent. Loop back: random.",
        "source": "authored"
      },
      {
        "name": "Content Dev",
        "objective": "Build it.",
        "input": "Curriculum",
        "output": "Content",
        "activities": "Create training, docs, playbooks, tools access",
        "tools": "Claude, Notion",
        "roles": "Enablement",
        "successMetric": "Content ready",
        "decisionPoints": "Is it ready?",
        "qualityGate": "Go: sharp. Loop back: stale.",
        "source": "authored"
      },
      {
        "name": "Delivery",
        "objective": "Plan it.",
        "input": "Content",
        "output": "Delivery plan",
        "activities": "Schedule sessions, buddies, milestones",
        "tools": "Calendar",
        "roles": "Enablement",
        "successMetric": "Planned",
        "decisionPoints": "When?",
        "qualityGate": "Go: scheduled. Loop back: chaotic.",
        "source": "authored"
      },
      {
        "name": "Execution",
        "objective": "Run it.",
        "input": "Delivery plan",
        "output": "Onboarded hire",
        "activities": "Deliver the onboarding",
        "tools": "LMS",
        "roles": "Enablement",
        "successMetric": "Executed",
        "decisionPoints": "Is it happening?",
        "qualityGate": "Go: active. Loop back: skipped.",
        "source": "authored"
      },
      {
        "name": "Verification",
        "objective": "Verify comprehension.",
        "input": "Onboarding",
        "output": "Verified hire",
        "activities": "Test knowledge and application",
        "tools": "Assessments",
        "roles": "Enablement",
        "successMetric": "Verified",
        "decisionPoints": "Do they know it?",
        "qualityGate": "Go: proven. Loop back: assumed.",
        "source": "authored"
      },
      {
        "name": "Reinforcement",
        "objective": "Reinforce.",
        "input": "Verification",
        "output": "Reinforced",
        "activities": "Reinforce with coaching and practice",
        "tools": "1:1s",
        "roles": "Manager",
        "successMetric": "Reinforced",
        "decisionPoints": "Is it sticking?",
        "qualityGate": "Go: retained. Loop back: decayed.",
        "source": "authored"
      },
      {
        "name": "Learning",
        "objective": "Keep improving.",
        "input": "Outcomes",
        "output": "Better onboarding",
        "activities": "Iterate the onboarding from results",
        "tools": "Review",
        "roles": "Enablement",
        "successMetric": "Improving",
        "decisionPoints": "Did we learn?",
        "qualityGate": "Go: compounding. Loop back: static.",
        "source": "authored"
      }
    ],
    "source": "authored"
  }
}
