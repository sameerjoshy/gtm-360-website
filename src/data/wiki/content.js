export const PROCESS_CONTENT = {
  "list-building": {
    "tagline": "Turning an ICP into a clean, valid list of who to reach.",
    "what": "The disciplined act of defining who you sell to (ICP) and sourcing a clean list of companies and contacts that match — before any outreach. Garbage in, garbage out applies to the whole engine: the list is the foundation.",
    "why": "Every downstream step (signals, enrichment, personalization, sending) inherits the list's quality. A bad list means wasted spend, burned domains, and reps chasing the wrong buyers.",
    "who": [
      "founder",
      "operator",
      "sdr"
    ],
    "best": [
      "Define the ICP on paper first: firmographics + the buyer title + the buying trigger.",
      "Source from multiple providers and merge — no single source is complete.",
      "Match to the buying trigger, not just the job title (signal comes next).",
      "Dedup and validate emails before they touch your sending infra.",
      "Track source quality per provider so you invest where lists convert."
    ],
    "mistakes": [
      "Buying a big list of \"companies in our segment\" without the right buyer title.",
      "Skipping validation — bounces kill your domain reputation.",
      "One list for every campaign. ICPs differ by motion and product line.",
      "Forgetting local markets (Google Maps, job boards) when they're your ICP."
    ],
    "questions": [
      "Does this contact match the buyer who closes — or the one who signs up?",
      "Is the email verified before it enters the sequence?",
      "What signal will make me reach out to this person now?"
    ],
    "deep": {
      "overview": "List building is the first real filter of the outbound engine. The goal is not volume — it is the highest density of people who match the ICP AND have a reason to care today. Volume without fit just scales waste.",
      "steps": [
        "ICP definition → the buyer, the trigger, the firmographic fence.",
        "Source → providers (Apollo, Prospeo, AI Ark), scraping (Google Maps, job boards) per ICP.",
        "Merge & dedup → one canonical person, one email.",
        "Validate → verify emails before they touch senders.",
        "Export → a clean list ready for signal collection."
      ],
      "example": "A company selling to multi-location operators might find their best list is not \"SMB SaaS\" but \"operations managers at 20–100 location franchises\" — sourced from job boards, not a database filter.",
      "mistakes": [
        "Chasing email volume over ICP density.",
        "Buying lists blind and \"cleaning\" later — cleaning a bad list is polishing garbage."
      ]
    }
  },
  "signal-collection": {
    "tagline": "Knowing not just who — but why reach out to them now.",
    "what": "Wiring your raw list to sources of buying-intent and change: funding, hiring, product usage, triggers, job changes. The output is a list annotated with \"why now\".",
    "why": "The single biggest lever in modern outbound. Reaching someone at the moment of change beats reaching them cold every time. Signals are what turn a database into a conversation.",
    "who": [
      "founder",
      "operator",
      "sdr"
    ],
    "best": [
      "Choose signal sources per ICP — Parallel, Exa, Apify, job boards, maps.",
      "Score recency: a signal 7 days old is far stronger than 90 days.",
      "Tag the signal type (funding, hiring, tech change, job move) so the angle maps to it.",
      "Validate signal quality before it drives outreach — false signals burn credibility.",
      "Keep a feedback loop: which signals actually correlate with replies and closes?"
    ],
    "mistakes": [
      "Collecting signals you never act on — noise.",
      "Treating \"funded recently\" as one signal when the buyer context differs.",
      "No recency scoring — acting on stale intent."
    ],
    "questions": [
      "What event makes this company more likely to buy this quarter?",
      "Can the signal be verified, or is it a guess?",
      "Which signal maps to which angle in the copy?"
    ],
    "deep": {
      "overview": "Signal collection is what separates 2026 outbound from 2016 spray. The intent is to reach the right company at the right moment with the right reason. Signals are the raw material for the \"why now\" in every personalized email.",
      "steps": [
        "Raw list in → signal sources activated per ICP.",
        "Collect → pull intent + change data.",
        "Aggregate + score recency.",
        "Tag signal type → enables angle mapping.",
        "Validate → keep only evidence-backed signals."
      ],
      "example": "A sales team targeting Series B SaaS sees a company just raised a round and posted a \"Head of Sales\" job. Two independent signals → strong reason to reach the new leader within weeks."
    }
  },
  "shortlist-prioritization": {
    "tagline": "Scoring the list down to the accounts worth your outreach.",
    "what": "Combining ICP fit and signal strength into a ranked shortlist, so the highest-intent, best-fit accounts get the outreach first.",
    "why": "Capacity is finite. Prioritization decides where reps and sequences go. Without it, effort is spread evenly across a list where 80% of the value sits in 20% of accounts.",
    "who": [
      "operator",
      "sdr",
      "revops"
    ],
    "best": [
      "Score two things independently: ICP fit + signal strength.",
      "Make thresholds explicit — what is \"reach now\" vs \"nurture later\".",
      "Keep the model simple enough to explain in one sentence.",
      "Review the scoring against outcomes and recalibrate each cycle."
    ],
    "mistakes": [
      "Scoring so many factors the model is unfalsifiable.",
      "Letting signal strength override terrible ICP fit.",
      "Never recalibrating — the model drifts from reality."
    ],
    "questions": [
      "Does this account fit AND show intent?",
      "Is the threshold data-driven or vibes?",
      "Where is the boundary between shortlist and nurture?"
    ]
  },
  "enrichment": {
    "tagline": "Filling the profile with what personalization needs.",
    "what": "Pulling company and contact data — decision-makers, challenges, tech stack, context — onto the shortlist so every email can be specific.",
    "why": "6454",
    "who": [
      "operator",
      "sdr"
    ],
    "best": [
      "Enrich only the shortlist, not the whole raw list — save cost and noise.",
      "Map decision-makers, not just the initial contact.",
      "Capture challenge/context data that feeds the angle.",
      "Validate enriched fields (email, title) before sending."
    ],
    "mistakes": [
      "Enriching everything \"just in case\" — cost without signal.",
      "Assuming title = role. Buying influence matters more than sign-off.",
      "Ignoring the technical/deployment context that sales reps actually use."
    ],
    "questions": [
      "Who is the buyer, who influences, who blocks?",
      "What do we know about their stack and pain?",
      "Is the email deliverable?"
    ]
  },
  "personalization": {
    "tagline": "Turning signal + profile into copy that earns a reply.",
    "what": "Mapping the signal to an angle and writing email copy that shows you did the homework — subject, body, sequence framework, variations.",
    "why": "Personalization is the reply-rate lever. The lead determines the signal, the signal determines the angle, the angle determines the copy. Break the chain and you're back to spray.",
    "who": [
      "founder",
      "sdr",
      "marketing"
    ],
    "best": [
      "One angle per email, tied to a verifiable signal.",
      "Short, human, specific. No \"I noticed your company\".",
      "Write the sequence as a framework: problem → proof → ask.",
      "Template variations per signal type, then test.",
      "Let AI draft, humans edit — the voice is yours."
    ],
    "mistakes": [
      "Personalization theater: \"saw your site\" when the email is clearly templated.",
      "Trying to sell in email 1. The job is to earn a reply.",
      "No subject line craft — subject decides whether body is read."
    ],
    "questions": [
      "Does this email prove we did the homework?",
      "Is there one clear reason for the prospect to reply?",
      "Does the angle match the signal?"
    ],
    "deep": {
      "overview": "The rule that makes copy work: the lead determines the signal, the signal determines the angle, the angle determines the copy. Personalization is not sprinkling a name — it is building each email on a piece of evidence the prospect knows is true.",
      "steps": [
        "Signal-to-angle mapping → what is the hook?",
        "Copy dev → subject, body, proof, ask.",
        "Sequence framework → problem, proof, ask across 3-5 touches.",
        "Variations per signal → test, keep what replies."
      ],
      "example": "9137"
    }
  },
  "sending": {
    "tagline": "Delivering the sequence without burning the domain.",
    "what": "Infrastructure for deliverability: inbox rotation, throttling, scheduling, bounce and open tracking. The boring layer that determines whether any of it is read.",
    "why": "Great copy on a bad sending infra = spam folder. Deliverability is a compounding asset: a clean domain earns higher inbox rates; a burned one is expensive to recover.",
    "who": [
      "revops",
      "operator"
    ],
    "best": [
      "Warm up and rotate inboxes — no single inbox blasts.",
      "Throttle per domain and per day to protect reputation.",
      "Track bounces, opens, replies, and spam complaints separately.",
      "Stop sequences on hard bounces and bad replies immediately."
    ],
    "mistakes": [
      "Sending 500/day from one inbox — fast death.",
      "Ignoring bounces → reputation tanks silently.",
      "No SPF/DKIM/DMARC setup before launch."
    ],
    "questions": [
      "Is deliverability protected while we scale volume?",
      "What is the reply rate, not just the open rate?",
      "When do we stop a sequence?"
    ]
  },
  "follow-up-reply-handling": {
    "tagline": "The sequence that actually wins replies — and what you do with them.",
    "what": "Managing the follow-up cadence and handling replies fast: qualification, templated responses, escalation, objection handling, and handoff to sales.",
    "why": "Most revenue is in the follow-up. A single reply left cold for 24 hours kills the momentum the whole sequence built. Handling replies well is where outbound turns into pipeline.",
    "who": [
      "sdr",
      "founder",
      "operator"
    ],
    "best": [
      "Multi-touch sequences with varied angles — not five versions of email 1.",
      "Reply SLA: minutes, not days. Speed is a competitive advantage.",
      "Qualify every reply: interested / not now / wrong person / objection.",
      "Handoff with context, not a bare contact."
    ],
    "mistakes": [
      "Five identical follow-ups — pure noise.",
      "Slow reply handling — the moment passes.",
      "Handing off without the thread of what was said."
    ],
    "questions": [
      "Is the reply a signal or a courtesy?",
      "What is the next step for each reply type?",
      "When does a sequence escalate to a human?"
    ]
  },
  "lead-scoring": {
    "tagline": "Ranking every lead by how likely they are to buy.",
    "what": "A scoring model that weighs behavior and firmographics to prioritize leads for routing and outreach.",
    "why": "Reps are expensive. Scoring routes the best leads to the best people first and keeps garbage out of the pipeline.",
    "who": [
      "revops",
      "operator",
      "sdr"
    ],
    "best": [
      "Score behavior AND fit — intent plus qualification.",
      "Set thresholds that map to actions: route, nurture, disqualify.",
      "Calibrate against outcomes (closed-won), not activity.",
      "Keep the model explainable."
    ],
    "mistakes": [
      "Scoring engagement, not purchase intent.",
      "Thresholds that send everything to reps.",
      "Never re-testing the model."
    ],
    "questions": [
      "Does a high score mean likely to buy, or just active?",
      "What converts a score into an action?"
    ]
  },
  "icp-validation": {
    "tagline": "Checking incoming leads against the ICP that actually buys.",
    "what": "Assessing each lead's fit to the ICP, passing qualified leads to sales and sending the rest to nurture.",
    "why": "ICP drift is silent — the accounts you win today can drift from the ones your product was built for. Validation catches it at the lead level.",
    "who": [
      "founder",
      "operator",
      "sdr"
    ],
    "best": [
      "Define the ICP from closed-won, not intuition.",
      "Make fit criteria explicit and observable.",
      "Feed rejected leads back to refine the ICP."
    ],
    "mistakes": [
      "ICP based on who you want, not who buys.",
      "13338",
      "Ignoring the drift signal in the rejects."
    ],
    "questions": [
      "Is this lead the buyer who closes?",
      "Does the reject stream tell us the ICP moved?"
    ]
  },
  "deal-strategy": {
    "tagline": "The plan to win a specific deal.",
    "what": "Stakeholder mapping, competitive assessment, win strategy, pricing approach, and timeline for an individual opportunity.",
    "why": "Enterprise deals are lost in the planning, not the pitch. A deal without a strategy is a lottery ticket.",
    "who": [
      "founder",
      "ae",
      "operator"
    ],
    "best": [
      "Map every stakeholder: buyer, influencer, blocker, champion.",
      "Know the competition's actual position, not your pitch's version.",
      "Define the win: the change the champion needs.",
      "Assign owners and dates for each workstream."
    ],
    "mistakes": [
      "Selling to one stakeholder and ignoring the committee.",
      "No competition plan — react instead of shape.",
      "No timeline — deals drift forever."
    ],
    "questions": [
      "Who decides, who influences, who blocks?",
      "What would make this deal a no-brainer for the champion?",
      "What are we losing to, and why?"
    ]
  },
  "quarterly-gtm-planning": {
    "tagline": "Turning strategy into a quarter of aligned, resourced initiatives.",
    "what": "Objective setting, initiative planning, resource allocation, and team alignment for the quarter ahead.",
    "why": "The quarter is where strategy is won or lost. Planning converts the annual strategy into specific OKRs and initiatives with owners and resources.",
    "who": [
      "founder",
      "operator",
      "ceo"
    ],
    "best": [
      "Set a small number of objectives tied to the annual strategy.",
      "Resource the plan — an initiative without capacity is a wish.",
      "Align teams on one set of priorities before kickoff.",
      "Schedule checkpoints (weekly + review) before you need them."
    ],
    "mistakes": [
      "Ten objectives — none real.",
      "Planning in a vacuum and announcing at kickoff.",
      "No cadence to course-correct mid-quarter."
    ],
    "questions": [
      "If we do nothing else this quarter, what must we hit?",
      "Do the teams have the capacity to do what we planned?"
    ]
  },
  "annual-gtm-strategy": {
    "tagline": "Choosing where to play and how to win — for the year.",
    "what": "The once-a-year decisions: which markets and segments, what positioning, how resources get allocated, and what the quarter-by-quarter path looks like.",
    "why": "Strategy is a choice, not a plan. Without the annual call, every team optimizes locally and the company drifts. The year plan converts judgment into a shared direction.",
    "who": [
      "ceo",
      "founder",
      "operator"
    ],
    "best": [
      "Make 3-5 explicit strategic choices — and name what you are not doing.",
      "Anchor every initiative to a real market/segment decision.",
      "Allocate resources before you approve initiatives, not after.",
      "Schedule quarterly reviews before you need them."
    ],
    "mistakes": [
      "A plan of everything — a strategy of nothing.",
      "Strategy set in a room, announced, then never revisited.",
      "No resource commitment behind the choices."
    ],
    "questions": [
      "What are we choosing to NOT do this year?",
      "If only three things go right, which are they?"
    ],
    "steps": [
      "Understand the market, competitors, and trends before choosing.",
      "Develop 2-3 realistic go-to-market options with trade-offs.",
      "Pick the primary strategy with leadership agreement.",
      "Commit budget, headcount, and tools to it.",
      "Translate the year into quarterly plans and OKRs.",
      "Review results and adjust — strategy is a loop, not a doc.",
      "Refine and carry learnings into next year."
    ]
  },
  "market-segment-prioritization": {
    "tagline": "Finding the segments worth the bet — and ranking them.",
    "what": "Scanning the market, sizing opportunities, and ranking segments by fit and size so GTM effort goes where it pays.",
    "why": "Most GTM sprawl is a segmentation failure — chasing every \"could\" instead of the few \"should\". Prioritization is how limited capacity creates focus.",
    "who": [
      "founder",
      "operator",
      "ceo"
    ],
    "best": [
      "Size with evidence (TAM/SAM) but rank on fit + speed-to-revenue, not just size.",
      "Segment by buying trigger, not just industry.",
      "Validate segment demand with real buyers, not reports.",
      "Revisit each quarter — segments move."
    ],
    "mistakes": [
      "The biggest segment is rarely the best first segment.",
      "Segments defined by product features, not buyer problems.",
      "Prioritizing once and never re-testing."
    ],
    "questions": [
      "Which segment buys fastest with least change?",
      "Where is the competition weakest?"
    ],
    "steps": [
      "Scan the market for opportunities.",
      "Identify candidates by buyer problem + trigger.",
      "Size each opportunity honestly.",
      "Assess competitive intensity.",
      "Rank by fit, speed, and size.",
      "Define the segment precisely.",
      "Plan GTM for the chosen segments."
    ]
  },
  "competitive-positioning": {
    "tagline": "Owning a position in the buyer's mind.",
    "what": "Analyzing the competitive landscape and defining where you win — the one place you own in the market — then aligning message and sales around it.",
    "why": "Unpositioned products become \"good option\" — bought on price or luck. Positioning is the difference between a category leader and a commodity.",
    "who": [
      "founder",
      "ceo",
      "marketing"
    ],
    "best": [
      "Position against the alternative (do nothing, or the status quo), not just competitors.",
      "Make the differentiation concrete — a buyer should feel it in one sentence.",
      "Build a messaging hierarchy: primary → secondary → supporting.",
      "Train sales on the position or it dies at the demo."
    ],
    "mistakes": [
      "Feature-list positioning — \"we do X, Y, Z too\".",
      "Positioning by comparison to a competitor you're losing to.",
      "A position in the deck that never reaches the rep."
    ],
    "questions": [
      "What do we uniquely own in the buyer's mind?",
      "Against what alternative are we competing?"
    ],
    "steps": [
      "Research competitors deeply.",
      "Map where they position and find the gap.",
      "Develop the differentiating message.",
      "Define how you are different and better.",
      "Organize messages by priority and persona.",
      "Align sales and marketing on one position.",
      "Monitor and adjust as the market moves."
    ]
  },
  "pipeline-planning": {
    "tagline": "Working backward from revenue to the pipeline you need.",
    "what": "Starting from the revenue target and modeling the conversion rates to know how much pipeline is required — and where the risk is.",
    "why": "Revenue targets without pipeline math are wishes. Planning quantifies the gap so you can act before it becomes a miss.",
    "who": [
      "ceo",
      "operator",
      "revops"
    ],
    "best": [
      "Model conversion by stage from real historical data.",
      "Stress-test with downside scenarios (70% attainment).",
      "Make coverage a managed metric, not a surprise.",
      "Re-forecast monthly against reality."
    ],
    "mistakes": [
      "Coverage calculated from inflated stage counts.",
      "One conversion number for every segment.",
      "Planning in January, ignoring the boardroom in June."
    ],
    "questions": [
      "How much pipeline do we need to hit target at current conversion?",
      "Where is the biggest gap and when does it bite?"
    ],
    "steps": [
      "Define the revenue target.",
      "Model conversion rates by stage.",
      "Derive pipeline requirements.",
      "Build the forecast.",
      "Assess risk and sensitivity.",
      "Plan mitigations for the gap.",
      "Track and adjust through the quarter."
    ]
  },
  "sales-playbook-development": {
    "tagline": "The repeatable way your team wins.",
    "what": "Turning successful deals into a documented playbook — segment, use case, messaging, objections, and the path to close.",
    "why": "Every rep reinventing the wheel is how win rates vary wildly. A playbook captures what works so the whole team sells the proven way.",
    "who": [
      "sales",
      "founder",
      "enablement"
    ],
    "best": [
      "Write the playbook from won deals and real discovery, not slides.",
      "Include the objection playbook — the ones you actually hear.",
      "Keep it short enough to use on a call.",
      "Iterate every quarter with new wins and losses."
    ],
    "mistakes": [
      "A 50-page deck nobody opens.",
      "Playbooks written by marketing about what sales never says.",
      "No update loop — the playbook ages out of reality."
    ],
    "questions": [
      "What does the winning call actually look like?",
      "Which objection kills deals and what's the answer?"
    ],
    "steps": [
      "Define the segment and use case.",
      "Map messaging to the buyer.",
      "Surface the real objections.",
      "Architect the solution framing.",
      "Write the playbook.",
      "Enable the team on it.",
      "Iterate from results."
    ]
  },
  "gtm-metrics-framework": {
    "tagline": "The numbers that tell you the truth about the system.",
    "what": "Choosing the metrics that matter, defining how they're calculated, setting baselines and targets, and wiring them into dashboards.",
    "why": "Teams optimize what's measured. A bad metric set drives the wrong behavior; the right one turns the operating model into a steering wheel.",
    "who": [
      "revops",
      "ceo",
      "operator"
    ],
    "best": [
      "Measure leading AND lagging indicators — pipeline health AND revenue.",
      "Define every calculation exactly; two teams computing the \"same\" number differently is a data governance failure.",
      "Set baselines first, then targets.",
      "Review the metric set quarterly — kill vanity metrics."
    ],
    "mistakes": [
      "Dashboard of 40 metrics, none owned.",
      "Vanity metrics that feel good and mean nothing.",
      "No single source of truth for definitions."
    ],
    "questions": [
      "Which 10 numbers, if they moved, would tell us the system is working?",
      "Who owns each one?"
    ],
    "steps": [
      "Define the metrics that matter.",
      "Identify data sources.",
      "Lock the calculation logic.",
      "Set baselines.",
      "Set targets.",
      "Build the dashboard.",
      "Monitor and optimize."
    ]
  },
  "dashboard-reporting": {
    "tagline": "Making the numbers legible enough to act on.",
    "what": "Designing dashboards and reports that answer questions, not just display data — then distributing them on a cadence people actually read.",
    "why": "A dashboard nobody acts on is decoration. Reporting is only worth it when it changes a decision.",
    "who": [
      "revops",
      "ceo",
      "operator"
    ],
    "best": [
      "Design around questions, not metrics lists.",
      "One owner per dashboard.",
      "Automate refresh and distribution.",
      "Track whether anyone acts on it."
    ],
    "mistakes": [
      "The \"everything\" dashboard.",
      "Reports built once and never questioned.",
      "Data that contradicts and no one reconciles."
    ],
    "questions": [
      "What decision does this dashboard change?",
      "Who reads it, and do they trust the number?"
    ],
    "steps": [
      "Assess reporting needs.",
      "Pick the metrics that answer them.",
      "Design the dashboard.",
      "Integrate data.",
      "Automate refresh and distribution.",
      "Track consumption.",
      "Refine."
    ]
  },
  "data-integrity-architecture": {
    "tagline": "Trusting the data you run the business on.",
    "what": "Auditing data quality, fixing the sources of contamination, and putting governance in place so the numbers stay trustworthy.",
    "why": "Every downstream decision — forecast, comp, pipeline — inherits data quality. Garbage data quietly invalidates the whole operating model.",
    "who": [
      "revops",
      "operator"
    ],
    "best": [
      "Fix root causes, not symptoms — clean the source, not the spreadsheet.",
      "Put validation rules at ingestion.",
      "Assign data ownership per table.",
      "Audit on a cadence, and act on findings."
    ],
    "mistakes": [
      "Endless \"data cleaning\" sprints that never fix the source.",
      "No owner — everyone's data, no one's data.",
      "Letting hygiene decay until forecast season."
    ],
    "questions": [
      "Where does the dirt come from — tool, human, or process?",
      "Who owns this table's integrity?"
    ],
    "steps": [
      "Audit the data.",
      "Identify quality issues.",
      "Write the governance plan.",
      "Set up integrations.",
      "Add validation rules.",
      "Monitor and audit continuously."
    ]
  },
  "decision-making-framework": {
    "tagline": "Knowing who decides what — and how.",
    "what": "Mapping decision types to owners and a clear process, so decisions happen fast without endless meetings.",
    "why": "Slow, unclear decision-making is the quiet killer of GTM velocity. A framework turns \"who owns this?\" into a known answer.",
    "who": [
      "ceo",
      "founder",
      "operator"
    ],
    "best": [
      "Publish who decides what (decision rights, not consensus).",
      "Define the input each decision needs.",
      "Make the cadence explicit — weekly, monthly, quarterly.",
      "Log decisions and revisit the losers."
    ],
    "mistakes": [
      "Consensus by default — everything becomes a meeting.",
      "Decisions made in rooms no one documented.",
      "No post-decision review — repeat the same mistakes."
    ],
    "questions": [
      "Who owns the call, and what do they need to make it well?",
      "When did a bad decision last get revisited?"
    ],
    "steps": [
      "Define decision types.",
      "Map authority.",
      "Document the process.",
      "Train the team.",
      "Execute.",
      "Review and feed back."
    ]
  },
  "weekly-monthly-quarterly-reviews": {
    "tagline": "The cadence that keeps the plan honest.",
    "what": "Regular review rhythms — weekly standups, monthly reviews, quarterly business reviews — that surface issues and drive decisions on a schedule.",
    "why": "Without a cadence, course-correction is reactive. The rhythm is what turns a plan into a living system.",
    "who": [
      "ceo",
      "operator",
      "all"
    ],
    "best": [
      "Weekly: issues + actions. Monthly: trends + decisions. Quarterly: results + strategy.",
      "Prepare data before the meeting, not during.",
      "End every review with decisions and owners.",
      "Capture learnings — the review is also the learning loop."
    ],
    "mistakes": [
      "Reviews that are status updates, not decisions.",
      "No preparation — an hour to read the data aloud.",
      "No follow-through on action items."
    ],
    "questions": [
      "What changed this week that needs a decision now?",
      "What did we learn that changes the plan?"
    ],
    "steps": [
      "Collect status and issues.",
      "Analyze trends.",
      "Discuss and decide.",
      "Assign action items.",
      "Follow up.",
      "Capture learning."
    ]
  },
  "cross-functional-alignment": {
    "tagline": "Sales, marketing, CS — pulling the same direction.",
    "what": "Designing the structures and meetings that keep functions aligned on one set of priorities, handoffs, and metrics.",
    "why": "The biggest GTM leak is the handoff: marketing passes leads sales won't call, CS inherits promises no one kept. Alignment is the fix.",
    "who": [
      "ceo",
      "operator",
      "all"
    ],
    "best": [
      "Align on shared metrics, not per-function only.",
      "Design the handoffs explicitly — SLAs between teams.",
      "One cadence where cross-functional decisions happen.",
      "Make the annual/quarterly priorities visible to everyone."
    ],
    "mistakes": [
      "Alignment by meeting, not by mechanism.",
      "Each function optimizing its own dashboard.",
      "Blame-loop instead of system-fix."
    ],
    "questions": [
      "Where does value leak between functions?",
      "Who owns the handoff?"
    ],
    "steps": [
      "Identify stakeholders.",
      "Assess alignment needs.",
      "Design the meeting structure.",
      "Facilitate.",
      "Decide.",
      "Plan actions.",
      "Follow up and feed back."
    ]
  },
  "team-training-onboarding": {
    "tagline": "Getting new people productive — fast, consistently.",
    "what": "A curriculum that takes a new hire from zero to productive: product, process, playbooks, tools, and the operating model itself.",
    "why": "Time-to-productivity is the most expensive variable in headcount. A structured onboarding converts investment into output sooner.",
    "who": [
      "enablement",
      "manager",
      "founder"
    ],
    "best": [
      "Teach the operating model first — the why before the how.",
      "Practice with real scenarios, not just decks.",
      "Buddy the new hire with a top performer.",
      "Verify comprehension at milestones, not just \"done with videos\"."
    ],
    "mistakes": [
      "Two weeks of deck-watching, zero doing.",
      "Onboarding that ends on day 14 and never reinforces.",
      "No verification — assumed, not confirmed."
    ],
    "questions": [
      "What must a new hire know to produce in week one?",
      "How do we verify they actually know it?"
    ],
    "steps": [
      "Assess training needs.",
      "Design the curriculum.",
      "Develop content.",
      "Plan delivery.",
      "Execute training.",
      "Verify comprehension.",
      "Reinforce and improve."
    ]
  },
  "product-roadmap-alignment": {
    "tagline": "Making sure the product ships what GTM needs to sell.",
    "what": "Syncing the product roadmap with GTM: assessing what the market needs, translating it into requirements, and timing releases for launch impact.",
    "why": "A roadmap built without GTM creates launches that fall flat and sales teams selling features that don't exist yet. Alignment turns releases into revenue events.",
    "who": [
      "ceo",
      "product",
      "gtm"
    ],
    "best": [
      "Involve GTM in requirement prioritization, not just launch timing.",
      "Tie releases to segments and use cases, not just features.",
      "Plan the launch as early as the build.",
      "Feed customer feedback back into the roadmap."
    ],
    "mistakes": [
      "GTM told about the roadmap at launch.",
      "Features shipped with no launch plan.",
      "Roadmap driven by requests, not market need."
    ],
    "questions": [
      "What does GTM need from the product this quarter to hit target?",
      "Which release changes the go-to-market story?"
    ]
  },
  "revenue-model-pricing-strategy": {
    "tagline": "Designing how the company gets paid.",
    "what": "Researching customer value and competition to design the pricing model, packaging, and monetization architecture.",
    "why": "The revenue model decides how fast you scale and how much each customer is worth. Get it right and everything compounds.",
    "who": [
      "ceo",
      "founder",
      "finance"
    ],
    "best": [
      "Design pricing from customer value, not cost.",
      "Benchmark competitors but lead with value.",
      "Package so the upgrade path is obvious.",
      "Test pricing before locking it."
    ],
    "mistakes": [
      "Pricing that leaves value on the table.",
      "Packaging that confuses buyers.",
      "Never testing price changes."
    ],
    "questions": [
      "How do we capture a fair share of the value we deliver?",
      "What packaging makes it easy to buy and to grow?"
    ]
  },
  "campaign-planning": {
    "tagline": "The plan behind every campaign that works.",
    "what": "Designing campaigns end to end — objectives, audience, channels, budget, content, tracking — before execution.",
    "why": "Campaigns without a plan are expense without intent. Planning is what ties the campaign to a number it must move.",
    "who": [
      "marketing",
      "founder"
    ],
    "best": [
      "Start from the objective, not the channel.",
      "Define the audience precisely.",
      "Allocate budget to the channels that reach them.",
      "Set tracking before launch."
    ],
    "mistakes": [
      "Campaigns launched to 'do marketing'.",
      "Budget spread across everything.",
      "No metric defined until it's over."
    ],
    "questions": [
      "What must this campaign deliver?",
      "Who exactly are we reaching, and where?"
    ]
  },
  "territory-planning": {
    "tagline": "Dividing the world so every rep can win their part.",
    "what": "Designing territories from the account universe — segmentation, capacity, rep assignment, quotas — so coverage is balanced and fair.",
    "why": "Territory design determines whether your sales capacity converts into revenue or leaks into inequality and sandbagging.",
    "who": [
      "ceo",
      "sales",
      "revops"
    ],
    "best": [
      "Build territories from opportunity, not just geography.",
      "Match quota to the patch's potential.",
      "Assign the right rep to the right patch.",
      "Rebalance against results yearly."
    ],
    "mistakes": [
      "Unbalanced patches that demotivate.",
      "Quota set before the patch is understood.",
      "Territories that never get rebalanced."
    ],
    "questions": [
      "Is each rep's patch winnable and fair?",
      "Does the territory plan maximize coverage?"
    ]
  },
  "resource-planning": {
    "tagline": "Matching people, budget, and tools to the plan.",
    "what": "Forecasting what execution demands — headcount, skills, budget, tools — and allocating it before the plan starts.",
    "why": "An unresourced plan is a wish. Resource planning is what turns strategy into capacity that can actually deliver.",
    "who": [
      "ceo",
      "finance",
      "gtm"
    ],
    "best": [
      "Forecast demand before planning hires.",
      "Identify skill gaps, not just headcount.",
      "Budget tools against the process they serve.",
      "Track utilization — capacity that sits idle is waste."
    ],
    "mistakes": [
      "Hiring before the demand forecast.",
      "Tools bought without a process owner.",
      "No view of utilization."
    ],
    "questions": [
      "What capacity does the plan actually need?",
      "Where are the gaps that will block execution?"
    ]
  },
  "marketing-calendar-development": {
    "tagline": "The calendar that keeps every channel in sync.",
    "what": "Building the annual marketing calendar — themes, campaigns, content, channels, timelines — so activity is coordinated, not chaotic.",
    "why": "A synchronized calendar turns scattered marketing into a compounding story. Without it, channels contradict each other and nothing lands.",
    "who": [
      "marketing",
      "founder"
    ],
    "best": [
      "Anchor the calendar to the annual theme.",
      "Coordinate campaigns across channels and dates.",
      "Assign owners per item.",
      "Track performance against the calendar."
    ],
    "mistakes": [
      "A calendar that's a list of random posts.",
      "Channels running in silos.",
      "No owners or deadlines."
    ],
    "questions": [
      "Does the calendar ladder to the theme and the target?",
      "Is every item owned and scheduled?"
    ]
  },
  "weekly-monthly-execution-plan": {
    "tagline": "Turning priorities into assigned, dated work.",
    "what": "The weekly/monthly planning that sets priorities, defines tasks, assigns owners, and tracks execution.",
    "why": "Strategy lives or dies in weekly execution. A short cycle of priorities → owners → deadlines keeps the plan moving.",
    "who": [
      "all",
      "manager"
    ],
    "best": [
      "Set priorities, not just tasks.",
      "Assign owners and deadlines for everything.",
      "Track progress in the rhythm, not at the end.",
      "Adjust as reality changes."
    ],
    "mistakes": [
      "A to-do list with no priorities.",
      "Tasks without owners.",
      "Planning that never reconciles with results."
    ],
    "questions": [
      "What is the one priority this week?",
      "Who owns each action, and by when?"
    ]
  },
  "attribution-roi-tracking": {
    "tagline": "Knowing what actually drove the revenue.",
    "what": "Defining touchpoints, choosing an attribution model, and tracking ROI so budget follows what works.",
    "why": "Without attribution you fund what's loud, not what converts. Tracking ROI is how marketing spend becomes a defensible decision.",
    "who": [
      "revops",
      "marketing",
      "ceo"
    ],
    "best": [
      "Pick an attribution model you can defend.",
      "Attribute to revenue, not just leads.",
      "Reconcile to actuals.",
      "Reallocate budget to the winners."
    ],
    "mistakes": [
      "Last-touch attribution funding the wrong channel.",
      "Attribution that never ties to closed revenue.",
      "A model nobody trusts."
    ],
    "questions": [
      "Which channel truly drives revenue?",
      "Is the ROI calculation defensible to the CFO?"
    ]
  },
  "weekly-gtm-standup": {
    "tagline": "The 30 minutes that keep the quarter on track.",
    "what": "A weekly check-in on pipeline health, urgent issues, wins, and blockers — driving decisions instead of status updates.",
    "why": "The weekly rhythm is where execution is steered. A good standup surfaces what needs a decision before it becomes a problem.",
    "who": [
      "all",
      "gtm"
    ],
    "best": [
      "Keep it to 30 minutes and on a fixed cadence.",
      "Focus on issues and decisions, not status.",
      "End with actions and owners.",
      "Log learnings and follow up."
    ],
    "mistakes": [
      "An hour of reading dashboards aloud.",
      "No decisions, no owners.",
      "Skipping it when things get busy."
    ],
    "questions": [
      "What changed this week that needs a decision?",
      "What is blocking the quarter's progress?"
    ]
  },
  "content-strategy": {
    "tagline": "Creating the content that earns attention and demand.",
    "what": "Choosing topics that match buyer problems, planning formats, and running an editorial calendar that feeds the whole funnel.",
    "why": "Content is the asset that compounds — it builds search traffic, feeds nurture, and gives sales proof. Strategy stops it being random posts.",
    "who": [
      "marketing",
      "founder"
    ],
    "best": [
      "Anchor content to the buyer's problem, not your features.",
      "Pick pillars that ladder to the segments you prioritize.",
      "Repurpose — one deep piece becomes posts, emails, scripts.",
      "Measure by pipeline contribution, not vanity traffic."
    ],
    "mistakes": [
      "Content marketing to \"brand\" with no funnel role.",
      "Writing for search engines, not buyers.",
      "Random publishing with no calendar or purpose."
    ],
    "questions": [
      "What does this content cause the buyer to do next?",
      "Which pillar feeds our highest-value segment?"
    ],
    "steps": [
      "Define the audience.",
      "Research topics.",
      "Pick pillars.",
      "Plan formats and calendar.",
      "Create and distribute.",
      "Measure and optimize."
    ]
  },
  "seo-organic-search": {
    "tagline": "Being found when the buyer is already searching.",
    "what": "Keyword strategy, technical health, on-page optimization, and link building that compound into organic pipeline.",
    "why": "Organic is the highest-margin demand channel — the buyer comes to you already problem-aware. It compounds slowly and stays.",
    "who": [
      "marketing",
      "operator"
    ],
    "best": [
      "Target intent, not just volume — problem searches convert.",
      "Fix technical SEO before creating more content.",
      "Build topical authority: pillar + cluster.",
      "Track rankings to traffic to conversion, not just rankings."
    ],
    "mistakes": [
      "Keywords nobody problem-aware searches.",
      "Content ahead of technical health.",
      "Chasing rankings that never convert."
    ],
    "questions": [
      "What is the buyer searching when they have our problem?",
      "Which pages rank but don't convert?"
    ],
    "steps": [
      "Research keywords.",
      "Audit technical health.",
      "Optimize on-page.",
      "Shape the content strategy.",
      "Build links.",
      "Monitor rankings and traffic.",
      "Track conversion."
    ]
  },
  "paid-advertising": {
    "tagline": "Buying attention where the buyer already is.",
    "what": "Running paid campaigns across channels — targeting, creative, landing pages, budget — and optimizing to ROI.",
    "why": "Paid is the throttle: instant, measurable, scalable. It funds the machine while organic compounds — if it's run with discipline.",
    "who": [
      "marketing",
      "operator"
    ],
    "best": [
      "Start narrow: one channel, one offer, one audience.",
      "Creative is the lever — test angles, not just budgets.",
      "Landing pages must match the ad's promise.",
      "Kill losers fast; scale only proven winners."
    ],
    "mistakes": [
      "Every channel at once with no learnings.",
      "Optimizing spend while creative stagnates.",
      "Attribution that can't tell you what worked."
    ],
    "questions": [
      "Where does the buyer actually spend attention?",
      "What is the unit economics at the current CPA?"
    ],
    "steps": [
      "Set objectives.",
      "Define the audience.",
      "Pick the channel.",
      "Allocate budget.",
      "Build creative and landing pages.",
      "Launch.",
      "Monitor and optimize."
    ]
  },
  "lead-capture-nurture": {
    "tagline": "Turning interest into a lead, and a lead into a conversation.",
    "what": "Forms, lead scoring, triggers, and nurture sequences that move anonymous visitors into qualified, sales-ready conversations.",
    "why": "Most leads aren't ready to buy when they arrive. Nurture is the bridge that keeps them warm until they are — without it, interest decays.",
    "who": [
      "marketing",
      "sdr"
    ],
    "best": [
      "Score by buying signal, not just form fills.",
      "Nurture with education tied to the buyer's stage.",
      "Define the handoff — when does nurture become sales?",
      "Keep the sequence short; relevance beats volume."
    ],
    "mistakes": [
      "Handing every lead to sales and calling it nurture.",
      "Sequences that only sell, never help.",
      "Scoring that never gets calibrated."
    ],
    "questions": [
      "When is a lead actually ready for sales?",
      "Does the nurture move them closer, or just add email?"
    ],
    "steps": [
      "Design forms and capture.",
      "Set up scoring.",
      "Define triggers.",
      "Create the nurture sequence.",
      "Execute.",
      "Monitor engagement and recalibrate.",
      "Hand off."
    ]
  },
  "marketing-automation": {
    "tagline": "The system that runs marketing on schedule.",
    "what": "Platforms and workflows that automate nurture, routing, scoring, and reporting — so marketing runs on triggers, not manual effort.",
    "why": "Automation turns one-off campaigns into an always-on system. The catch: automating a bad process scales the bad.",
    "who": [
      "marketing",
      "revops"
    ],
    "best": [
      "Design the process before the automation.",
      "One source of truth for data (avoid tool sprawl).",
      "Test triggers and flows on small audiences.",
      "Keep a human on monitoring — automation needs watching."
    ],
    "mistakes": [
      "Automating a broken nurture and scaling the silence.",
      "Five tools that don't talk to each other.",
      "No error handling — a silent break kills the flow."
    ],
    "questions": [
      "Is the process worth automating yet?",
      "What happens when it breaks — do we notice?"
    ],
    "steps": [
      "Select the platform.",
      "Set up integrations.",
      "Design workflows.",
      "Create sequences.",
      "Define triggers.",
      "Monitor performance.",
      "Optimize."
    ]
  },
  "lead-routing": {
    "tagline": "Getting the right lead to the right rep, instantly.",
    "what": "Territory and assignment logic that sends each lead to the right owner — by segment, geo, or capacity — the moment it scores.",
    "why": "Speed-to-lead is a competitive weapon. A lead that waits a day is a cold lead. Routing is the plumbing that makes speed possible.",
    "who": [
      "revops",
      "sdr"
    ],
    "best": [
      "Route on qualification, not just round-robin.",
      "Define ownership rules before the spike arrives.",
      "Track acceptance and re-route dead leads.",
      "Keep assignment logic visible and reviewable."
    ],
    "mistakes": [
      "Round-robin that ignores fit.",
      "Leads sitting in a queue with no owner.",
      "Rules so complex nobody can explain them."
    ],
    "questions": [
      "Who should own this lead and why?",
      "How fast does a lead get a first touch?"
    ],
    "steps": [
      "Define territories.",
      "Set assignment logic.",
      "Receive and score the lead.",
      "Apply routing rules.",
      "Assign the rep.",
      "Notify and track acceptance."
    ]
  },
  "initial-qualification-call": {
    "tagline": "The first call that separates buyers from browsers.",
    "what": "The discovery call that qualifies the lead against BANT and fit — deciding qualified-to-proceed or nurture.",
    "why": "The qualification call is where pipeline is born or politely ended. A great one saves the AE's time and the prospect's.",
    "who": [
      "sdr",
      "founder"
    ],
    "best": [
      "Prepare: research the account before the call.",
      "Ask about the problem, not just the budget.",
      "Decide clearly: qualified, nurture, or disqualify.",
      "Book the next step on the call, not later."
    ],
    "mistakes": [
      "Selling instead of discovering.",
      "Chasing \"yes\" instead of qualifying honestly.",
      "No clear next step — the lead evaporates."
    ],
    "questions": [
      "Does this buyer have the problem and the authority?",
      "What is the honest next step?"
    ],
    "steps": [
      "Route and schedule the call.",
      "Prepare with account research.",
      "Run discovery.",
      "Assess qualification criteria.",
      "Decide.",
      "Hand off or nurture."
    ]
  },
  "outbound-prospecting": {
    "tagline": "Proactively building pipeline from your target list.",
    "what": "The disciplined daily practice of outreach to the shortlist — sequences, follow-ups, and tracking that convert prospects into meetings.",
    "why": "Inbound is unreliable; outbound is controllable. Prospecting turns the list and signals into a predictable meeting stream.",
    "who": [
      "sdr",
      "founder"
    ],
    "best": [
      "Work the prioritized shortlist, not the whole list.",
      "Follow up on a cadence — most replies come after touch 3.",
      "Track engagement and meeting conversion, not just activity.",
      "Hand off the meeting with full context."
    ],
    "mistakes": [
      "Spraying a giant list with one email.",
      "Giving up after one touch.",
      "Volume without measuring conversion."
    ],
    "questions": [
      "Am I working the accounts most likely to buy?",
      "What is my meeting-per-account rate?"
    ],
    "steps": [
      "Take the target list.",
      "Build the outreach strategy.",
      "Develop messaging.",
      "Execute outreach.",
      "Monitor responses.",
      "Follow up on a sequence.",
      "Convert meetings and hand off."
    ]
  },
  "qualification-discovery": {
    "tagline": "Understanding the problem deeply enough to sell it.",
    "what": "The discovery process — pain, budget, timeline, authority, use case — that turns a meeting into a qualified opportunity.",
    "why": "Deals are won in discovery. The rep who understands the problem and the buying process controls the deal.",
    "who": [
      "ae",
      "sdr"
    ],
    "best": [
      "Ask before you tell.",
      "Qualify the buying process, not just the budget.",
      "Confirm the use case and the person who owns it.",
      "End with a shared picture of the next step."
    ],
    "mistakes": [
      "Pitching before understanding.",
      "Assuming budget/authority without asking.",
      "Letting the prospect control the agenda."
    ],
    "questions": [
      "What happens in their world if this problem persists?",
      "Who decides, and what do they need?"
    ],
    "steps": [
      "Make contact.",
      "Ask qualification questions.",
      "Identify the pain.",
      "Assess budget, timeline, authority.",
      "Confirm use-case fit.",
      "Decide qualified or not.",
      "Set next steps."
    ]
  },
  "meeting-setting": {
    "tagline": "Turning a conversation into a booked meeting.",
    "what": "The mechanics of converting prospect interest into a scheduled, prepared meeting with the right people.",
    "why": "A qualified conversation that never books is a leak. Meeting setting is where outreach converts into actual pipeline.",
    "who": [
      "sdr",
      "ae"
    ],
    "best": [
      "Book the next step on the call, while momentum is high.",
      "Confirm the right people are on the meeting.",
      "Prep the AE with context, not a bare calendar invite.",
      "Send a calendar hold and a one-line agenda immediately."
    ],
    "mistakes": [
      "Ending calls without a booked next step.",
      "Meetings with the wrong stakeholder.",
      "Reps walking in cold."
    ],
    "questions": [
      "Who must be in the room for this to move?",
      "Is the meeting confirmed or just promised?"
    ],
    "steps": [
      "Qualify the prospect.",
      "Coordinate the calendar.",
      "Set the agenda.",
      "Identify stakeholders.",
      "Prepare.",
      "Confirm.",
      "Brief the AE."
    ]
  },
  "handoff-to-ae": {
    "tagline": "The SDR-to-AE handoff that doesn't leak the deal.",
    "what": "Transferring the qualified meeting with full context — what was said, who is involved, what the next step is — so the AE picks up mid-flight.",
    "why": "Most pipeline dies at the handoff — context lost, momentum broken. A clean handoff preserves the deal's intelligence.",
    "who": [
      "sdr",
      "ae"
    ],
    "best": [
      "Write the handoff brief before the meeting.",
      "Include the buying context, not just the contact.",
      "Co-own the first AE touch.",
      "Track the deal, not just the handoff."
    ],
    "mistakes": [
      "A bare contact handoff — the AE re-starts discovery.",
      "No AE commitment on the next touch.",
      "Dropping follow-up after handoff."
    ],
    "questions": [
      "Does the AE know everything the SDR learned?",
      "Who owns the deal from this minute on?"
    ],
    "steps": [
      "Confirm the meeting.",
      "Document the context.",
      "Brief the AE.",
      "Plan the deal structure.",
      "Assign the account.",
      "Set up tracking.",
      "Monitor progress."
    ]
  },
  "forecast-pipeline-management": {
    "tagline": "Knowing what you'll actually close this quarter.",
    "what": "Managing pipeline and the forecast: stage accuracy, risk assessment, and a forecast the leadership can trust.",
    "why": "The forecast is the company's steering wheel. A forecast that's a hope instead of a model breaks planning, hiring, and comp.",
    "who": [
      "ae",
      "revops",
      "ceo"
    ],
    "best": [
      "Define evidence per stage — what proves commitment.",
      "Forecast from stage + evidence, not rep optimism.",
      "Review risk weekly, not monthly.",
      "Hold reps accountable to their forecast, kindly."
    ],
    "mistakes": [
      "Forecast = sum of rep guesses.",
      "Stage inflation to make the number look better.",
      "No reconciliation of forecast vs. actual."
    ],
    "questions": [
      "What evidence is behind each committed deal?",
      "What would change the number?"
    ],
    "steps": [
      "Capture deals in the pipeline.",
      "Assign stages by evidence.",
      "Model the forecast.",
      "Review the pipeline.",
      "Assess risk.",
      "Measure accuracy.",
      "Adjust and report."
    ]
  },
  "stakeholder-management": {
    "tagline": "Winning the room, not just the champion.",
    "what": "Mapping every stakeholder in the deal — buyer, influencer, champion, blocker — and building relationships with each.",
    "why": "Deals get lost when a stakeholder you never met kills it in a room you weren't in. Managing the full map is how complex deals close.",
    "who": [
      "ae",
      "founder"
    ],
    "best": [
      "Map the full committee, including the silent vetoer.",
      "Give each stakeholder a reason to champion you.",
      "Coach your champion — equip them to sell for you.",
      "Re-engage the quiet ones; silence is a risk."
    ],
    "mistakes": [
      "Selling only to the champion.",
      "Ignoring the person with veto power.",
      "No relationship with the economic buyer."
    ],
    "questions": [
      "Who wins and loses if this deal happens?",
      "Who can kill it, and do they know us?"
    ],
    "steps": [
      "Identify stakeholders.",
      "Map roles and influence.",
      "Assess relationships.",
      "Build an engagement strategy.",
      "Reach out and build rapport.",
      "Track influence shifts."
    ]
  },
  "negotiation-closing": {
    "tagline": "Closing on value, not on discount.",
    "what": "The negotiation and closing process — handling objections, terms, and procurement — while protecting price and value.",
    "why": "Negotiation is where margin is won or given away. Value-based negotiation closes faster and keeps the deal whole.",
    "who": [
      "ae",
      "founder"
    ],
    "best": [
      "Anchor on value and ROI before price is on the table.",
      "Trade concessions for something in return — never give free.",
      "Involve procurement early, don't ambush them.",
      "Get signature before the deal goes cold."
    ],
    "mistakes": [
      "Discounting first because it's easier.",
      "Conceding without asking for commitment.",
      "Ignoring procurement's process until the end."
    ],
    "questions": [
      "What is the value we're protecting in this negotiation?",
      "What will we trade, and for what?"
    ],
    "steps": [
      "Present the proposal.",
      "Surface objections.",
      "Negotiate terms.",
      "Finalize pricing.",
      "Handle procurement.",
      "Sign.",
      "Hand off to CS."
    ]
  },
  "sales-training": {
    "tagline": "Turning the playbook into reps' muscle memory.",
    "what": "The curriculum and practice that make reps execute the playbook — discovery, messaging, objections — consistently.",
    "why": "Training is the difference between knowing the playbook and being able to run it under pressure. It compounds win rate.",
    "who": [
      "enablement",
      "manager"
    ],
    "best": [
      "Practice with real scenarios, not theory.",
      "Certify on skills, not attendance.",
      "Reinforce after training — one-off doesn't stick.",
      "Use calls for coaching, not just reporting."
    ],
    "mistakes": [
      "A training event with no follow-through.",
      "Teaching content reps never practice.",
      "No measurement of whether it changed behavior."
    ],
    "questions": [
      "What skill, practiced, would move the number most?",
      "How do we know they can actually do it?"
    ],
    "steps": [
      "Assess training needs.",
      "Design the curriculum.",
      "Develop content.",
      "Plan delivery.",
      "Execute training.",
      "Verify and certify.",
      "Reinforce continuously."
    ]
  },
  "manager-coaching-development": {
    "tagline": "The manager's real job: making reps better.",
    "what": "Structured coaching — observing, giving feedback, practicing — that develops each rep toward mastery.",
    "why": "The manager is the highest-leverage rep developer. Coaching cadence and quality predict team performance more than any other input.",
    "who": [
      "manager",
      "enablement"
    ],
    "best": [
      "Coaching cadence: weekly 1:1s with a skill focus.",
      "Coach the call, not just the numbers.",
      "Give feedback immediately and specifically.",
      "Develop a plan per rep — one skill at a time."
    ],
    "mistakes": [
      "1:1s that are pipeline review, not development.",
      "Feedback only at reviews.",
      "Coaching everyone the same way."
    ],
    "questions": [
      "What is this rep's highest-leverage skill to grow?",
      "Did coaching change behavior last week?"
    ],
    "steps": [
      "Assess each rep.",
      "Create the development plan.",
      "Build the coaching curriculum.",
      "Coach with practice and feedback.",
      "Track progress.",
      "Adjust."
    ]
  },
  "competitive-pricing": {
    "tagline": "Pricing with eyes on the market, not just your costs.",
    "what": "Tracking competitor pricing and positioning, then setting price to win the segments you target.",
    "why": "Price is relative — the buyer compares. Competitive pricing makes sure you are never priced out of the segment you need.",
    "who": [
      "founder",
      "ceo",
      "product"
    ],
    "best": [
      "Track competitor price and positioning continuously.",
      "Price on differentiation, not just below them.",
      "Teach sales the price-value story.",
      "Adjust as the market moves."
    ],
    "mistakes": [
      "Blindly underpricing the competitor.",
      "Ignoring competitor moves until you lose deals.",
      "A price book with no sales narrative."
    ],
    "questions": [
      "How do buyers compare us to the alternatives they know?",
      "Where can we own price-value instead of price?"
    ]
  },
  "enterprise-custom-pricing": {
    "tagline": "The deal-level pricing that protects enterprise margin.",
    "what": "The process for pricing large, custom deals — complexity assessment, approval, proposal, negotiation authority — with discipline.",
    "why": "Enterprise deals are big enough to give margin away by accident. A pricing process protects the deal's value and consistency.",
    "who": [
      "sales",
      "ceo",
      "founder"
    ],
    "best": [
      "Assess complexity before pricing.",
      "Define who can approve what discount.",
      "Price the solution, then the package.",
      "Capture learnings from every custom deal."
    ],
    "mistakes": [
      "Deal-by-deal discounting with no authority guardrails.",
      "Custom pricing invented in the moment.",
      "No learning loop — same mistakes on every big deal."
    ],
    "questions": [
      "What makes this deal complex enough to price custom?",
      "Who approves the discount, and on what basis?"
    ]
  },
  "competitive-analysis": {
    "tagline": "Knowing the field well enough to beat it.",
    "what": "Continuous competitive intelligence — features, pricing, messaging, win/loss — turned into positioning and sales ammunition.",
    "why": "The competitor you don't track wins by default. Intelligence turns reactions into strategy.",
    "who": [
      "revops",
      "marketing",
      "founder"
    ],
    "best": [
      "Track features, pricing, messaging, and positioning.",
      "Feed win/loss data into the analysis.",
      "Share insights on a rhythm, not in a vault.",
      "Update as the market moves."
    ],
    "mistakes": [
      "A competitor doc that is stale on day one.",
      "Intelligence that never reaches the rep.",
      "Focusing on rivals, not the alternative (status quo)."
    ],
    "questions": [
      "What are they really winning with — and where are we strong?",
      "What changes would beat them?"
    ],
    "steps": [
      "Build the competitor list.",
      "Gather information.",
      "Compare features.",
      "Analyze pricing.",
      "Analyze messaging.",
      "Review win/loss.",
      "Share insights and monitor."
    ]
  },
  "market-research": {
    "tagline": "Decisions grounded in the market, not assumptions.",
    "what": "Structured research — questions, methodology, data, analysis — that produces strategy-grade market insight.",
    "why": "The biggest GTM mistakes are wrong-market bets made on intuition. Research replaces the guess with evidence.",
    "who": [
      "founder",
      "ceo",
      "marketing"
    ],
    "best": [
      "Define the question before the methodology.",
      "Mix primary and secondary research.",
      "Present recommendations, not just findings.",
      "Revisit — markets move."
    ],
    "mistakes": [
      "Research that confirms what you already believed.",
      "A beautiful report nobody acts on.",
      "Confusing data collection with insight."
    ],
    "questions": [
      "What decision does this research change?",
      "What would falsify our current assumption?"
    ],
    "steps": [
      "Define research questions.",
      "Choose the methodology.",
      "Run primary and secondary research.",
      "Collect data.",
      "Analyze.",
      "Develop insights.",
      "Present recommendations."
    ]
  },
  "trend-analysis": {
    "tagline": "Reading where the market is going before it arrives.",
    "what": "Spotting emerging trends, assessing their impact, and turning them into strategic implications and recommendations.",
    "why": "Trends create windows. The team that reads them early gains a compounding advantage; the latecomer buys at full price.",
    "who": [
      "founder",
      "ceo",
      "strategy"
    ],
    "best": [
      "Separate signal from noise — assess impact, not novelty.",
      "Link every trend to an opportunity or threat.",
      "Turn implications into recommendations.",
      "Monitor on a cadence."
    ],
    "mistakes": [
      "Chasing every trend headline.",
      "Trends documented but never acted on.",
      "No link between the trend and the strategy."
    ],
    "questions": [
      "Which trend, if real, changes our plan?",
      "What would we do differently because of it?"
    ],
    "steps": [
      "Gather information.",
      "Identify emerging trends.",
      "Assess impact.",
      "Analyze opportunity and threat.",
      "Develop implications.",
      "Make recommendations.",
      "Plan and monitor."
    ]
  },
  "persona-research-definition": {
    "tagline": "Knowing exactly who you sell to — and why they buy.",
    "what": "Researching buyers into documented personas — role, responsibilities, pains, buying criteria — that drive messaging and targeting.",
    "why": "You can't hit a buyer you haven't described. Personas are the foundation of message, content, and targeting alignment.",
    "who": [
      "marketing",
      "founder",
      "sales"
    ],
    "best": [
      "Build personas from interviews and data, not stereotypes.",
      "Define buying criteria and pains with evidence.",
      "Activate personas: align marketing, sales, content.",
      "Refresh quarterly — buyers evolve."
    ],
    "mistakes": [
      "Personas from a template, not real buyers.",
      "Persona docs that never reach the sales team.",
      "One persona for every product line."
    ],
    "questions": [
      "What is the real buying trigger for this persona?",
      "How do they evaluate and decide?"
    ],
    "steps": [
      "Interview stakeholders and survey.",
      "Collect data.",
      "Analyze and find patterns.",
      "Define personas.",
      "Validate and refine.",
      "Document.",
      "Activate across the org."
    ]
  },
  "territory-design": {
    "tagline": "Splitting the market so reps can win their part.",
    "what": "Designing territories — account universe, segmentation, capacity, quotas — so each rep has a winnable, balanced patch.",
    "why": "Bad territory design creates unequal reps and sandbagging. Balanced territories make the team's capacity productive.",
    "who": [
      "revops",
      "sales",
      "ceo"
    ],
    "best": [
      "Segment by opportunity, not just geography.",
      "Balance by capacity — quota should match patch.",
      "Assign the right rep to the right patch.",
      "Rebalance each year against results."
    ],
    "mistakes": [
      "Geography-only territories ignoring opportunity.",
      "Uneven patches — one rep drowns, one coasts.",
      "Quotas set before the patch is defined."
    ],
    "questions": [
      "What is each rep's realistic opportunity in their patch?",
      "Is the workload and quota fair?"
    ],
    "steps": [
      "Define the account universe.",
      "Segment accounts.",
      "Plan capacity.",
      "Create territories.",
      "Allocate quotas.",
      "Assign reps.",
      "Track and rebalance."
    ]
  },
  "territory-forecast": {
    "tagline": "Forecasting each patch with evidence, not hope.",
    "what": "Building per-territory forecasts from historical and pipeline data, with scenario planning.",
    "why": "A territory forecast tells you where the number will come from — and where it won't — before it matters.",
    "who": [
      "revops",
      "sales",
      "ceo"
    ],
    "best": [
      "Base the model on historical conversion, not intuition.",
      "Scenario-plan: best, base, worst.",
      "Hold reps accountable to the evidence.",
      "Measure accuracy and refine."
    ],
    "mistakes": [
      "Forecast = rep's guess summed up.",
      "No scenario analysis — one number, no range.",
      "Never checking forecast accuracy."
    ],
    "questions": [
      "What is the evidence behind this territory's number?",
      "What scenario would break it?"
    ],
    "steps": [
      "Assign the territory.",
      "Analyze history.",
      "Assess the market.",
      "Review pipeline opportunity.",
      "Build the forecast model.",
      "Scenario-plan.",
      "Submit and track accuracy."
    ]
  },
  "funnel-analytics": {
    "tagline": "Finding where the funnel leaks.",
    "what": "Measuring conversion at each funnel stage, finding bottlenecks, and testing fixes.",
    "why": "Funnel analytics finds the cheapest growth lever — fixing a leak converts existing traffic instead of buying more.",
    "who": [
      "revops",
      "marketing",
      "founder"
    ],
    "best": [
      "Define the funnel stages exactly.",
      "Measure conversion, not just volume.",
      "Find the biggest leak and fix it first.",
      "Test fixes and measure the delta."
    ],
    "mistakes": [
      "A funnel in a slide, not a system.",
      "Looking at stage volumes, not conversion rates.",
      "Fixing leaks by feel instead of data."
    ],
    "questions": [
      "Where is the biggest drop-off?",
      "What fix would recover the most revenue?"
    ],
    "steps": [
      "Define the funnel.",
      "Identify metrics.",
      "Collect data.",
      "Calculate conversion rates.",
      "Analyze stages.",
      "Find bottlenecks.",
      "Recommend and test fixes."
    ]
  },
  "pipeline-analytics": {
    "tagline": "Reading pipeline health before it bites the quarter.",
    "what": "Analyzing pipeline metrics — stage duration, win rate, health — to build trustworthy forecasts and flag risk.",
    "why": "Pipeline is the leading indicator of revenue. Analytics turns it into an early-warning system instead of a post-mortem.",
    "who": [
      "revops",
      "sales",
      "ceo"
    ],
    "best": [
      "Track stage duration — slow stages are warning signs.",
      "Measure win rate by source and stage.",
      "Assess health per segment, not just aggregate.",
      "Feed findings into the forecast."
    ],
    "mistakes": [
      "Pipeline dashboards that hide stage problems.",
      "Aggregate numbers that mask segment risk.",
      "Analytics without action."
    ],
    "questions": [
      "Where does the pipeline get sick?",
      "What is the realistic close, given stage health?"
    ],
    "steps": [
      "Define pipeline metrics.",
      "Collect data.",
      "Calculate stage duration.",
      "Analyze win rates.",
      "Assess health.",
      "Identify risk.",
      "Build the forecast and monitor."
    ]
  },
  "cac-ltv-analysis": {
    "tagline": "Knowing what a customer is worth — and what it costs to get one.",
    "what": "Calculating acquisition cost, lifetime value, and payback period, and comparing across channels and segments.",
    "why": "Unit economics decide whether growth is a business or a leak. CAC/LTV analysis shows which channels deserve more money.",
    "who": [
      "founder",
      "ceo",
      "revops"
    ],
    "best": [
      "Calculate CAC and LTV by channel and segment.",
      "Track payback period — cash matters, not just ratio.",
      "Compare profitability, not just growth.",
      "Reallocate budget to the healthy channels."
    ],
    "mistakes": [
      "A blended CAC that hides bad channels.",
      "LTV from assumptions, not data.",
      "Chasing LTV while cash burns on long payback."
    ],
    "questions": [
      "Which channel is profitable at the margin?",
      "How long until acquisition costs are paid back?"
    ],
    "steps": [
      "Calculate acquisition cost.",
      "Calculate lifetime value.",
      "Compute payback period.",
      "Analyze profitability.",
      "Compare by channel and segment.",
      "Make recommendations.",
      "Test and monitor."
    ]
  },
  "channel-attribution": {
    "tagline": "Giving each channel credit — and budget — honestly.",
    "what": "Designing an attribution model and analyzing which channels actually drive revenue, so budget follows results.",
    "why": "Budget follows attribution. The right model prevents funding the channel that looks busy but doesn't convert.",
    "who": [
      "revops",
      "marketing",
      "ceo"
    ],
    "best": [
      "Pick a model you can defend — and that fits your sales cycle.",
      "Attribute revenue, not just leads.",
      "Reconcile to actuals.",
      "Reallocate budget to the winners."
    ],
    "mistakes": [
      "Last-touch attribution funding the wrong channel.",
      "Attribution that never reconciles to closed revenue.",
      "A model that changes with the wind."
    ],
    "questions": [
      "Which channel truly drives revenue, by the evidence?",
      "Is the attribution defensible to the CFO?"
    ],
    "steps": [
      "Define touch points.",
      "Design the attribution model.",
      "Integrate data.",
      "Analyze.",
      "Calculate channel contribution.",
      "Compute ROI by channel.",
      "Recommend and reallocate."
    ]
  },
  "crm-management": {
    "tagline": "The system of record that keeps the machine honest.",
    "what": "Selecting, implementing, and operating the CRM — data, process, adoption, quality — as the single source of truth.",
    "why": "The CRM is where the operating model lives. Poor CRM hygiene quietly corrupts forecasts, comp, and pipeline.",
    "who": [
      "revops",
      "sales",
      "operator"
    ],
    "best": [
      "Configure the CRM around the process, not the tool.",
      "Define data standards and enforce them.",
      "Drive adoption — a CRM reps don't use is decoration.",
      "Watch data quality continuously."
    ],
    "mistakes": [
      "Letting reps keep their own spreadsheets.",
      "Customizing before defining the process.",
      "Adoption left to chance."
    ],
    "questions": [
      "Does the CRM reflect reality, or a nicer version of it?",
      "Who owns data quality?"
    ],
    "steps": [
      "Select the CRM.",
      "Implement it.",
      "Migrate data.",
      "Configure processes.",
      "Automate workflows.",
      "Integrate tools.",
      "Train, drive adoption, and optimize."
    ]
  },
  "lead-management": {
    "tagline": "The full journey of a lead, handled on rails.",
    "what": "Managing leads from source through scoring, routing, nurture, and CRM sync — so none fall through the cracks.",
    "why": "Leads are perishable. A managed system captures and routes them fast; an unmanaged one loses them to silence.",
    "who": [
      "revops",
      "marketing",
      "sdr"
    ],
    "best": [
      "Integrate every source into one system.",
      "Score and route automatically.",
      "Monitor data quality at the source.",
      "Report on lead-to-revenue, not just lead count."
    ],
    "mistakes": [
      "Leads stranded in tools that don't sync.",
      "Duplicate leads splitting effort.",
      "No visibility into where leads leak."
    ],
    "questions": [
      "Where do leads get lost today?",
      "How fast does a lead get a first touch?"
    ],
    "steps": [
      "Integrate lead sources.",
      "Configure scoring.",
      "Set up routing.",
      "Optimize capture.",
      "Run nurture.",
      "Sync to CRM.",
      "Watch data quality and report."
    ]
  },
  "sales-forecasting": {
    "tagline": "A forecast the leadership can actually trust.",
    "what": "Building the forecast from evidence — historical data, stage integrity, rep submissions, scenarios — and reviewing it.",
    "why": "The forecast drives hiring, spend, and investor expectations. A trustable forecast is a strategic asset; a hope is a liability.",
    "who": [
      "revops",
      "ceo",
      "sales"
    ],
    "best": [
      "Forecast from stage and evidence, not rep optimism.",
      "Run scenarios — base, best, worst.",
      "Review and challenge the number weekly.",
      "Measure accuracy and feed it back."
    ],
    "mistakes": [
      "Averaging incompatible rep guesses.",
      "No reconciliation of forecast vs. actual.",
      "Forecast games — sandbagging or inflation."
    ],
    "questions": [
      "What evidence supports each committed dollar?",
      "What would change the forecast?"
    ],
    "steps": [
      "Analyze history.",
      "Build the forecast model.",
      "Collect rep submissions.",
      "Consolidate.",
      "Scenario-plan.",
      "Review and approve.",
      "Track accuracy and refine."
    ]
  },
  "compensation-quota": {
    "tagline": "Paying for the behavior that produces revenue.",
    "what": "Designing quota and comp so incentives align with the targets — and reviewing performance against them.",
    "why": "Comp drives behavior. Misaligned comp quietly creates sandbagging, gaming, and the wrong focus — the most expensive leak in sales.",
    "who": [
      "ceo",
      "revops",
      "sales"
    ],
    "best": [
      "Set quota from capacity and opportunity, not top-down hope.",
      "Design comp to reward the targets you actually want.",
      "Communicate the plan transparently.",
      "Review and adjust annually."
    ],
    "mistakes": [
      "Quotas that reward gaming.",
      "Comp changes mid-year without warning.",
      "Transparency so low the plan breeds distrust."
    ],
    "questions": [
      "What behavior does this comp actually reward?",
      "Is the quota fair and attainable?"
    ],
    "steps": [
      "Set the revenue target.",
      "Assess rep capacity.",
      "Set quotas.",
      "Design the comp plan.",
      "Calculate commissions.",
      "Track performance.",
      "Review, adjust, and communicate."
    ]
  },
  "sales-tools-stack": {
    "tagline": "A stack that serves the process — not the other way round.",
    "what": "Choosing and managing the sales tool stack around the defined process, with adoption and consolidation.",
    "why": "Tool sprawl is GTM debt. The rule: don't automate bad GTM — automate a good process. Tools should serve, never define.",
    "who": [
      "revops",
      "operator",
      "founder"
    ],
    "best": [
      "Define the process first, then the tool.",
      "Evaluate against the process, not the demo.",
      "Drive adoption — a tool nobody uses is a license fee.",
      "Refresh the stack deliberately; kill what's redundant."
    ],
    "mistakes": [
      "Buying tools to fix process problems.",
      "Overlapping tools with no single source of truth.",
      "Stack that grows until it breaks the budget."
    ],
    "questions": [
      "What process problem does this tool actually solve?",
      "Is the stack lean enough to be mastered?"
    ],
    "steps": [
      "Assess needs.",
      "Evaluate tools.",
      "Select.",
      "Implement.",
      "Integrate.",
      "Train and drive adoption.",
      "Monitor and refresh."
    ]
  },
  "partner-selection-recruitment": {
    "tagline": "Picking partners who multiply your reach.",
    "what": "Identifying, qualifying, and recruiting partners — resellers, integrators, co-marketers — whose motion fits yours.",
    "why": "Partners extend reach you couldn't build alone. The right partners compound; the wrong ones waste everyone's time.",
    "who": [
      "channel",
      "founder",
      "ceo"
    ],
    "best": [
      "Qualify fit — market, motion, commitment — before the pitch.",
      "Start with a pilot before a full program.",
      "Negotiate terms that align incentives.",
      "Onboard fast and support early."
    ],
    "mistakes": [
      "Recruiting partners by volume, not fit.",
      "Partnerships that look good in PR and produce nothing.",
      "No onboarding — partners never actually launch."
    ],
    "questions": [
      "What does this partner add that we can't build?",
      "Are their incentives aligned with ours?"
    ],
    "steps": [
      "Research the market.",
      "Identify partners.",
      "Assess fit.",
      "Approach and build the relationship.",
      "Negotiate the agreement.",
      "Onboard.",
      "Activate and monitor."
    ]
  },
  "partner-program-design": {
    "tagline": "The program that makes partners want to sell you.",
    "what": "Designing the partner program — model, commission, co-marketing, incentives, resources, training — that drives partner performance.",
    "why": "Partners sell what's easiest to sell. Program design decides whether your offering is the easy one.",
    "who": [
      "channel",
      "ceo",
      "revops"
    ],
    "best": [
      "Align commission with the outcomes you want.",
      "Make it easy to sell: collateral, training, support.",
      "Co-invest in co-marketing with top partners.",
      "Track performance per partner."
    ],
    "mistakes": [
      "A program with incentives but no enablement.",
      "Commission that rewards the wrong motion.",
      "All partners treated the same regardless of output."
    ],
    "questions": [
      "What would make a partner prioritize us?",
      "Is the program profitable at the margin?"
    ],
    "steps": [
      "Define objectives.",
      "Choose the partner model.",
      "Set the commission structure.",
      "Design co-marketing.",
      "Define incentives and resources.",
      "Train.",
      "Execute and track performance."
    ]
  },
  "partner-training-enablement": {
    "tagline": "Partners can't sell what they don't understand.",
    "what": "The curriculum and materials that make partners competent — product, sales motion, positioning, tools.",
    "why": "Enablement is what turns a signed partner into a producing one. Under-enabled partners quietly go dark.",
    "who": [
      "channel",
      "enablement"
    ],
    "best": [
      "Train on the sales motion, not just the product.",
      "Certify partners on real skills.",
      "Refresh materials as the product evolves.",
      "Keep support responsive — partners sell when they feel backed."
    ],
    "mistakes": [
      "A partner portal with no training.",
      "One-time onboarding that never reinforces.",
      "Materials that lag the product."
    ],
    "questions": [
      "Can this partner run the full motion competently?",
      "What do they need to sell confidently?"
    ],
    "steps": [
      "Assess training needs.",
      "Build the curriculum.",
      "Create content.",
      "Plan delivery.",
      "Execute.",
      "Certify.",
      "Reinforce and update."
    ]
  },
  "co-marketing-campaign": {
    "tagline": "Marketing that runs on two audiences and shared ROI.",
    "what": "Joint campaigns with partners — shared planning, content, budget, execution, and lead sharing.",
    "why": "Co-marketing doubles reach for half the cost. Done right, both sides win and the relationship deepens.",
    "who": [
      "channel",
      "marketing"
    ],
    "best": [
      "Align on objectives before anything.",
      "Agree the budget and lead-sharing up front.",
      "Co-create content that serves both audiences.",
      "Measure and attribute ROI honestly."
    ],
    "mistakes": [
      "One side doing all the work.",
      "Ambiguous lead ownership — deals fall through.",
      "No measurement, so the 'success' is vibes."
    ],
    "questions": [
      "What does each side bring and get?",
      "Who owns the leads and the follow-up?"
    ],
    "steps": [
      "Identify the opportunity.",
      "Align objectives.",
      "Plan the campaign.",
      "Develop content.",
      "Execute.",
      "Share leads.",
      "Measure ROI and optimize."
    ]
  },
  "deal-registration": {
    "tagline": "Protecting partner deals and the relationships.",
    "what": "The process for partners to register deals — approval, territory protection, and support — so both sides win without conflict.",
    "why": "Deal registration aligns incentives: partners invest when their deals are protected. Without it, channel conflict kills momentum.",
    "who": [
      "channel",
      "sales"
    ],
    "best": [
      "Make registration fast and unambiguous.",
      "Define territory and conflict rules clearly.",
      "Support registered deals actively.",
      "Track commission and close the loop."
    ],
    "mistakes": [
      "A registration process that's slow or unclear.",
      "Conflict rules nobody follows.",
      "Registered deals left unsupported."
    ],
    "questions": [
      "Is registration worth the partner's effort?",
      "How do we resolve conflicts fairly?"
    ],
    "steps": [
      "Capture partner deal activity.",
      "Process registration.",
      "Approve.",
      "Manage territory and conflicts.",
      "Support the deal.",
      "Close.",
      "Track commission and maintain the relationship."
    ]
  },
  "reseller-program": {
    "tagline": "Selling through resellers without losing control.",
    "what": "Standing up and running a reseller channel — onboarding, margins, sales support, performance.",
    "why": "Resellers reach segments and geographies you can't. A managed program extends reach without becoming chaos.",
    "who": [
      "channel",
      "sales",
      "founder"
    ],
    "best": [
      "Onboard resellers properly — product, sales, portal.",
      "Set margins that make them prioritize you.",
      "Support their deals like your own.",
      "Measure performance and prune the underperformers."
    ],
    "mistakes": [
      "Resellers with no training selling badly.",
      "Margins that make you a commodity.",
      "Treating all resellers equally regardless of output."
    ],
    "questions": [
      "Which resellers actually produce?",
      "Is the channel profitable and controlled?"
    ],
    "steps": [
      "Select resellers.",
      "Sign agreements.",
      "Set up margins and portal access.",
      "Train on product and sales.",
      "Assign territories.",
      "Kick off and support.",
      "Monitor performance."
    ]
  },
  "partner-integration": {
    "tagline": "Integrations that make your product stickier.",
    "what": "Building technical integrations with partners — requirements, development, testing, launch — that deepen the ecosystem.",
    "why": "Integrations reduce friction and increase switching costs. Every integration is a moat and a co-marketing story.",
    "who": [
      "product",
      "channel",
      "engineering"
    ],
    "best": [
      "Scope requirements before building.",
      "Test against real customer scenarios.",
      "Co-launch and co-promote the integration.",
      "Support customers through it."
    ],
    "mistakes": [
      "Building integrations nobody asked for.",
      "Launching without documentation or training.",
      "Integration that breaks and erodes trust."
    ],
    "questions": [
      "Which integration would customers actually value?",
      "Is the partner committed to joint promotion?"
    ],
    "steps": [
      "Identify the opportunity.",
      "Define technical requirements.",
      "Build the development plan.",
      "Test.",
      "Document.",
      "Launch.",
      "Promote, train, and support."
    ]
  },
  "referral-program-design": {
    "tagline": "Turning happy customers into a sales channel.",
    "what": "Designing a referral program — incentives, process, platform — that makes customers want to refer.",
    "why": "Referred customers convert higher and churn lower. A referral program turns your best asset (trust) into pipeline.",
    "who": [
      "marketing",
      "cs",
      "founder"
    ],
    "best": [
      "Make referring effortless for the customer.",
      "Reward both sides — referrer and referee.",
      "Ask at the moment of peak satisfaction.",
      "Track referrals end to end."
    ],
    "mistakes": [
      "Referral asks buried in fine print.",
      "Incentives that cheapen the ask.",
      "No tracking — referrals lost in the void."
    ],
    "questions": [
      "When are customers happiest — and easiest to ask?",
      "Is the incentive worth the referral?"
    ],
    "steps": [
      "Set program objectives.",
      "Design the incentive.",
      "Define the process.",
      "Choose the platform.",
      "Prepare the launch.",
      "Communicate.",
      "Execute, track, and optimize."
    ]
  },
  "affiliate-marketing": {
    "tagline": "A distributed sales force paid on results.",
    "what": "Running an affiliate program — recruitment, campaigns, conversion tracking, commissions — that drives sales at scale.",
    "why": "Affiliates expand reach on a pay-for-performance basis. It's the channel with the fewest fixed costs.",
    "who": [
      "marketing",
      "revops"
    ],
    "best": [
      "Recruit affiliates who reach your ICP.",
      "Give them creative and tracking that works.",
      "Pay reliably and on time — trust drives recruitment.",
      "Prune affiliates who don't convert."
    ],
    "mistakes": [
      "Affiliates chasing commission on the wrong audience.",
      "Fragile tracking that breaks trust.",
      "Paying volume without measuring quality."
    ],
    "questions": [
      "Who reaches our buyer and could sell for us?",
      "Is the program profitable at the margin?"
    ],
    "steps": [
      "Activate affiliates.",
      "Build the campaign strategy.",
      "Promote.",
      "Drive traffic.",
      "Track conversion.",
      "Calculate commissions.",
      "Pay, report, and optimize."
    ]
  },
  "campaign-strategy": {
    "tagline": "Campaigns that exist to move a metric, not fill a calendar.",
    "what": "Designing campaigns from a business objective — audience, positioning, channel, budget, content — before execution.",
    "why": "Most campaigns underperform because the objective was vague. A strategy ties every campaign to a number it must move.",
    "who": [
      "marketing",
      "founder"
    ],
    "best": [
      "Start from the business objective, not the channel.",
      "Define the audience precisely.",
      "Match channel to where that audience is.",
      "Set the metric before launch."
    ],
    "mistakes": [
      "Campaigns launched to 'do marketing'.",
      "Audience defined as 'everyone'.",
      "No measure of success until it's over."
    ],
    "questions": [
      "What number does this campaign move?",
      "Who exactly are we reaching?"
    ],
    "steps": [
      "Set the business objective.",
      "Define the audience.",
      "Choose positioning.",
      "Pick channels.",
      "Set the timeline and budget.",
      "Plan content.",
      "Execute, launch, and track."
    ]
  },
  "multi-channel-campaign": {
    "tagline": "One message, many touchpoints, synchronized.",
    "what": "Running campaigns across channels — email, ads, social, events — with tailored messages and cross-channel tracking.",
    "why": "Buyers see you multiple times before they act. Multi-channel campaigns meet them where they are and compound the message.",
    "who": [
      "marketing"
    ],
    "best": [
      "Tailor the message per channel, keep the core consistent.",
      "Synchronize timing so channels reinforce.",
      "Track cross-channel attribution.",
      "Test channels against each other."
    ],
    "mistakes": [
      "Same asset dumped on every channel.",
      "Channels running out of sync.",
      "No way to know which channel worked."
    ],
    "questions": [
      "Which channels does this audience actually use?",
      "How do channels reinforce each other?"
    ],
    "steps": [
      "Set objectives.",
      "Plan channels.",
      "Tailor messaging.",
      "Create content.",
      "Coordinate the schedule.",
      "Launch synchronized.",
      "Track and optimize."
    ]
  },
  "campaign-execution": {
    "tagline": "Launching and steering the campaign to the end.",
    "what": "The execution phase — resources aligned, launch, real-time monitoring, issue resolution, close-out and learning.",
    "why": "A good plan poorly executed is a lost campaign. Execution is where discipline and pace turn the plan into results.",
    "who": [
      "marketing",
      "revops"
    ],
    "best": [
      "Align resources before launch day.",
      "Monitor in real time, not post-mortem.",
      "Resolve issues fast — a broken campaign bleeds budget.",
      "Capture learnings at close-out."
    ],
    "mistakes": [
      "Launching before resources are ready.",
      "Setting and forgetting.",
      "Ignoring issues until the campaign is over."
    ],
    "questions": [
      "What is breaking right now, and who fixes it?",
      "What will we do differently next time?"
    ],
    "steps": [
      "Confirm readiness.",
      "Align resources.",
      "Launch.",
      "Monitor in real time.",
      "Resolve issues.",
      "Optimize mid-flight.",
      "Close out and capture learning."
    ]
  },
  "campaign-analytics": {
    "tagline": "What the campaign actually returned.",
    "what": "Tracking campaign metrics — conversion, ROI, performance — and turning them into recommendations.",
    "why": "Analytics is what turns marketing spend into a decision, not a hope. It answers: what worked, and what gets more budget?",
    "who": [
      "marketing",
      "revops"
    ],
    "best": [
      "Track conversion and ROI, not just impressions.",
      "Report on a cadence while the campaign runs.",
      "Recommend, don't just report.",
      "Feed learnings into the next campaign."
    ],
    "mistakes": [
      "Vanity metrics that make it look good.",
      "Analysis only after the budget is gone.",
      "Reports nobody acts on."
    ],
    "questions": [
      "What did this campaign return?",
      "What gets more budget next quarter?"
    ],
    "steps": [
      "Track metrics.",
      "Monitor daily.",
      "Analyze trends.",
      "Track conversion.",
      "Calculate ROI.",
      "Report performance.",
      "Recommend and learn."
    ]
  },
  "lead-scoring-model": {
    "tagline": "The model that says who's hot and who's not.",
    "what": "Designing a lead scoring model — metrics, weights, thresholds, calibration — that ranks leads by buying likelihood.",
    "why": "A calibrated score routes the right leads fast and protects reps from garbage. It's the brain of lead management.",
    "who": [
      "revops",
      "marketing"
    ],
    "best": [
      "Design from outcomes (closed-won), not activity.",
      "Weight behavior and fit deliberately.",
      "Test and calibrate against results.",
      "Keep it explainable."
    ],
    "mistakes": [
      "Scoring engagement, not intent.",
      "Weights set by opinion, never tested.",
      "A model that never gets recalibrated."
    ],
    "questions": [
      "Does a high score predict a sale?",
      "What would make the model more accurate?"
    ],
    "steps": [
      "Define metrics.",
      "Gather data.",
      "Design the model.",
      "Assign weights.",
      "Test.",
      "Calibrate and deploy.",
      "Monitor and refine."
    ]
  },
  "lead-nurture-sequences": {
    "tagline": "Staying relevant until the buyer is ready.",
    "what": "Email sequences that educate and engage leads over time, moving them from cold to sales-ready.",
    "why": "Most leads aren't ready at first touch. Nurture keeps the relationship alive until they are — without it, interest rots.",
    "who": [
      "marketing",
      "sdr"
    ],
    "best": [
      "Segment before you sequence.",
      "Make every email useful, not just present.",
      "Time touches to engagement.",
      "Short and relevant beats long and frequent."
    ],
    "mistakes": [
      "Sequences that only sell.",
      "Everyone gets the same flow.",
      "Never cleaning the list of dead leads."
    ],
    "questions": [
      "What does this lead need to hear at this stage?",
      "When do we stop and let sales take over?"
    ],
    "steps": [
      "Segment the audience.",
      "Develop messages.",
      "Design the email.",
      "Build the sequence flow.",
      "Set timing.",
      "Execute.",
      "Monitor engagement and personalize."
    ]
  },
  "value-proposition": {
    "tagline": "The one sentence that says why you win.",
    "what": "Articulating the value you deliver — from research and competitive analysis — into a tested proposition.",
    "why": "The value prop is the message everything hangs on. Get it right and every channel works harder; wrong, and nothing lands.",
    "who": [
      "founder",
      "marketing",
      "sales"
    ],
    "best": [
      "Build it from customer research, not features.",
      "Articulate the outcome, not the output.",
      "Test it against real buyers.",
      "Train sales on it until it's their own."
    ],
    "mistakes": [
      "A value prop that's a feature list.",
      "Built in a room, never tested.",
      "Different versions in different decks."
    ],
    "questions": [
      "What do customers say is the value — in their words?",
      "Is the proposition consistent everywhere?"
    ],
    "steps": [
      "Research the market.",
      "Analyze competition.",
      "Research customers.",
      "Define the value.",
      "Articulate it.",
      "Test and refine.",
      "Train and monitor consistency."
    ]
  },
  "messaging-hierarchy": {
    "tagline": "One message, organized from primary to supporting.",
    "what": "Structuring messages by priority — primary, secondary, supporting — and tailoring by segment, then aligning sales and marketing.",
    "why": "Inconsistent messaging is noise. A hierarchy keeps every touch on-message and gives reps the right line at the right moment.",
    "who": [
      "marketing",
      "sales",
      "founder"
    ],
    "best": [
      "One primary message per audience, not many.",
      "Tailor by segment and persona.",
      "Align sales and marketing on the same lines.",
      "Document and train it."
    ],
    "mistakes": [
      "A dozen 'key messages'.",
      "Marketing and sales telling different stories.",
      "Messages that change with every campaign."
    ],
    "questions": [
      "What is the one message this segment must hear?",
      "Is the sales team using it?"
    ],
    "steps": [
      "Start from the value prop.",
      "Define primary messages.",
      "Add secondary and supporting.",
      "Tailor by segment.",
      "Align sales and marketing.",
      "Document and train.",
      "Monitor and iterate."
    ]
  },
  "customer-success-stories": {
    "tagline": "Proof that you deliver — in the buyer's words.",
    "what": "Turning customer wins into case studies and proof — selection, story, ROI, publishing, sales integration.",
    "why": "Buyers trust peers more than you. Success stories are the highest-converting proof you have.",
    "who": [
      "marketing",
      "cs"
    ],
    "best": [
      "Pick customers whose story matches your ICP.",
      "Capture the problem-to-result arc with real numbers.",
      "Write for the buyer's problem, not your feature.",
      "Put the story in front of sales."
    ],
    "mistakes": [
      "Stories that read like press releases.",
      "No numbers — 'we loved it' without ROI.",
      "Stories nobody in sales ever uses."
    ],
    "questions": [
      "Which customer's story would convince our ICP?",
      "What numbers make it undeniable?"
    ],
    "steps": [
      "Select the customer.",
      "Interview.",
      "Develop the story.",
      "Write the case study.",
      "Design it.",
      "Publish and promote.",
      "Integrate into sales."
    ]
  },
  "brand-strategy": {
    "tagline": "What the market feels when it hears your name.",
    "what": "Defining the brand — market position, personality, identity, messaging tone — and keeping it consistent.",
    "why": "Brand is the accumulated impression. A deliberate brand compounds trust; an accidental one confuses the market.",
    "who": [
      "founder",
      "marketing",
      "ceo"
    ],
    "best": [
      "Define the position before the logo.",
      "Lock the personality and tone.",
      "Document guidelines so consistency survives.",
      "Align the whole org on the story."
    ],
    "mistakes": [
      "Brand as a logo, not a position.",
      "Tone that changes with every campaign.",
      "Guidelines nobody follows."
    ],
    "questions": [
      "What should the market say about us in one sentence?",
      "Is the brand consistent across every touch?"
    ],
    "steps": [
      "Define the market position.",
      "Set the brand personality.",
      "Build the visual identity.",
      "Lock the messaging tone.",
      "Document guidelines.",
      "Align stakeholders.",
      "Implement, monitor, and evolve."
    ]
  },
  "industry-presence": {
    "tagline": "Being where the industry looks.",
    "what": "Building presence through speaking, sponsorships, awards, and partnerships that put you in the industry's conversations.",
    "why": "Presence converts into pipeline and talent. Being seen where the market looks makes you the default answer.",
    "who": [
      "marketing",
      "founder"
    ],
    "best": [
      "Choose stages your ICP actually watches.",
      "Make the talk a lead engine, not a vanity.",
      "Repurpose every appearance into content.",
      "Measure the pipeline, not the applause."
    ],
    "mistakes": [
      "Speaking to empty rooms that look good on the CV.",
      "Presence with no follow-up mechanism.",
      "Saying yes to everything."
    ],
    "questions": [
      "Where does our buyer listen, and are we there?",
      "Does presence turn into pipeline?"
    ],
    "steps": [
      "Define the strategy.",
      "Identify targets.",
      "Choose sponsorships.",
      "Secure speaking.",
      "Chase awards.",
      "Build partnerships.",
      "Execute and measure ROI."
    ]
  },
  "customer-selection": {
    "tagline": "Choosing the customers whose stories sell.",
    "what": "Picking the right customers for proof and advocacy — ICP fit, success story, willingness — and securing their participation.",
    "why": "The right advocate converts the right prospects. Selection is the difference between a story that sells and one that doesn't.",
    "who": [
      "marketing",
      "cs"
    ],
    "best": [
      "Pick advocates who match your ICP.",
      "Choose wins with measurable numbers.",
      "Make participation easy and rewarding for them.",
      "Confirm timing and scope up front."
    ],
    "mistakes": [
      "Any happy customer, regardless of fit.",
      "Stories without numbers.",
      "Asking favors without reciprocity."
    ],
    "questions": [
      "Does this customer's win mirror our target's problem?",
      "Are they genuinely willing and able?"
    ],
    "steps": [
      "Define the prospect you want to convince.",
      "Match to the ICP.",
      "Reach out.",
      "Confirm interest.",
      "Coordinate the timeline.",
      "Agree and schedule.",
      "Collect the story."
    ]
  },
  "case-study-development": {
    "tagline": "Building proof that reads like a win.",
    "what": "The interview-to-publish process for case studies — story, ROI, writing, design, approval.",
    "why": "A well-built case study is evergreen sales ammunition. The craft is what makes it believable and useful.",
    "who": [
      "marketing",
      "cs"
    ],
    "best": [
      "Interview for the problem and the result, in the customer's words.",
      "Quantify ROI wherever possible.",
      "Write the arc: before → after → how.",
      "Get customer approval before publishing."
    ],
    "mistakes": [
      "Stories with no stakes or numbers.",
      "Generic happy-customer copy.",
      "Publishing without the customer's sign-off."
    ],
    "questions": [
      "What is the arc of this customer's win?",
      "What numbers make it credible?"
    ],
    "steps": [
      "Complete discovery.",
      "Prepare the interview.",
      "Interview the customer.",
      "Develop the story.",
      "Calculate ROI.",
      "Write and design.",
      "Review, approve, and publish."
    ]
  },
  "case-study-distribution": {
    "tagline": "Putting the proof where it converts.",
    "what": "Distributing case studies across web, sales collateral, marketing, events, and social — tracked and measured.",
    "why": "A case study that sits unpublished converts nobody. Distribution is where proof becomes pipeline.",
    "who": [
      "marketing",
      "sales"
    ],
    "best": [
      "Publish on the site at the point of consideration.",
      "Give sales a one-pager they'll actually use.",
      "Repurpose into posts, decks, and events.",
      "Track which stories convert."
    ],
    "mistakes": [
      "A case study PDF lost in a folder.",
      "Proof never connected to the funnel.",
      "No tracking of which story works."
    ],
    "questions": [
      "Where does the buyer look, and is the proof there?",
      "Which story converts best?"
    ],
    "steps": [
      "Publish.",
      "Add to the website.",
      "Build sales collateral.",
      "Integrate into marketing.",
      "Use at events.",
      "Repurpose content.",
      "Promote, track, and analyze."
    ]
  },
  "reference-program": {
    "tagline": "Your happiest customers, ready to vouch.",
    "what": "A managed program of reference customers — recruited, briefed, and matched to sales moments.",
    "why": "The right reference at the right moment wins deals. A program makes references reliable instead of accidental.",
    "who": [
      "marketing",
      "cs",
      "sales"
    ],
    "best": [
      "Recruit from your highest-NPS customers.",
      "Brief references on what to say and ask.",
      "Match the reference to the prospect's industry and problem.",
      "Keep the relationship warm."
    ],
    "mistakes": [
      "Burning the same two references on every deal.",
      "No briefing — references who wander off-message.",
      "Asking for favours with no reciprocity."
    ],
    "questions": [
      "Who would persuade this specific prospect?",
      "Is the reference prepped and willing?"
    ],
    "steps": [
      "Identify candidates.",
      "Reach out and agree.",
      "Schedule.",
      "Brief them.",
      "Support the call.",
      "Collect feedback.",
      "Maintain the relationship."
    ]
  },
  "review-management": {
    "tagline": "What strangers read about you before they call.",
    "what": "Monitoring, responding to, and promoting reviews across platforms — protecting reputation and social proof.",
    "why": "Reviews shape first impressions. Managed well, they build trust; ignored, they quietly cost deals.",
    "who": [
      "marketing",
      "cs"
    ],
    "best": [
      "Monitor every relevant platform on a cadence.",
      "Respond fast — especially to negatives.",
      "Promote the positive reviews.",
      "Handle negatives by fixing the cause, not just the comment."
    ],
    "mistakes": [
      "Responding to nothing.",
      "Arguing with negative reviews.",
      "Ignoring the pattern behind the bad ones."
    ],
    "questions": [
      "What do prospects read before they reach out?",
      "What does the review pattern actually say?"
    ],
    "steps": [
      "Monitor review sites.",
      "Respond to reviews.",
      "Promote positive ones.",
      "Manage negatives.",
      "Run an incentive strategy.",
      "Collect more reviews.",
      "Monitor trends."
    ]
  },
  "social-proof": {
    "tagline": "Letting customers sell for you.",
    "what": "Collecting and deploying testimonials, quotes, and proof across web, sales, and ads.",
    "why": "People trust peers over pitches. Social proof is the cheapest persuasion you have — if it's real and visible.",
    "who": [
      "marketing",
      "cs"
    ],
    "best": [
      "Collect proof at peak satisfaction moments.",
      "Make it specific — names, roles, results.",
      "Deploy where the buyer decides.",
      "Refresh it — stale proof ages."
    ],
    "mistakes": [
      "Fake-sounding, generic quotes.",
      "Proof hidden on a page nobody visits.",
      "Testimonials that expire unnoticed."
    ],
    "questions": [
      "Where does the buyer need proof most?",
      "What proof is specific enough to matter?"
    ],
    "steps": [
      "Find the opportunity.",
      "Collect the testimonial.",
      "Create the asset.",
      "Publish.",
      "Promote.",
      "Integrate on web and in sales.",
      "Use in ads and monitor."
    ]
  },
  "advisory-board": {
    "tagline": "A council of customers steering your roadmap.",
    "what": "Standing up an advisory board of key customers — selection, meetings, facilitation, feedback — that shapes strategy.",
    "why": "An advisory board turns customers into partners. Their input sharpens the roadmap and deepens loyalty.",
    "who": [
      "founder",
      "ceo",
      "cs"
    ],
    "best": [
      "Choose customers who challenge, not just flatter.",
      "Run structured, facilitated meetings.",
      "Actually act on the feedback — or stop asking.",
      "Keep the relationship warm between meetings."
    ],
    "mistakes": [
      "A board that's a sales pitch in disguise.",
      "Collecting feedback and ignoring it.",
      "Letting one loud voice dominate."
    ],
    "questions": [
      "Who among customers would make the roadmap better?",
      "What will we change because of what they say?"
    ],
    "steps": [
      "Identify candidates.",
      "Reach out and select.",
      "Formalize.",
      "Schedule.",
      "Prepare.",
      "Facilitate.",
      "Collect feedback and manage the relationship."
    ]
  },
  "user-groups": {
    "tagline": "Customers learning from each other — and loving you for it.",
    "what": "Building user groups and communities where customers share, learn, and advocate.",
    "why": "Community is a retention and advocacy engine. Customers who belong churn less and refer more.",
    "who": [
      "cs",
      "marketing"
    ],
    "best": [
      "Start with real interest, not forced committees.",
      "Give members a reason to show up — content, peers, recognition.",
      "Facilitate, don't control.",
      "Measure engagement and growth."
    ],
    "mistakes": [
      "A community with no reason to exist.",
      "Over-moderating the life out of it.",
      "Building it and walking away."
    ],
    "questions": [
      "What do members get from this group?",
      "Is it growing and active, or dead?"
    ],
    "steps": [
      "Gauge community interest.",
      "Launch the group.",
      "Recruit members.",
      "Set the agenda.",
      "Plan meetups.",
      "Facilitate and support networking.",
      "Track engagement and growth."
    ]
  },
  "community-management": {
    "tagline": "Running the community so it runs itself.",
    "what": "The daily work of community — onboarding, moderation, facilitation, recognition — that keeps it healthy and growing.",
    "why": "Communities die of neglect. Consistent management keeps engagement alive and turns it into a durable asset.",
    "who": [
      "cs",
      "marketing"
    ],
    "best": [
      "Onboard new members actively.",
      "Facilitate discussions; surface experts.",
      "Recognize contributors — recognition drives participation.",
      "Measure engagement, not just member count."
    ],
    "mistakes": [
      "Automation replacing human connection.",
      "Members asking into silence.",
      "No recognition for the people who carry it."
    ],
    "questions": [
      "Is the community helping members, or just hosting them?",
      "Who are the experts we should surface?"
    ],
    "steps": [
      "Keep the platform active.",
      "Onboard members.",
      "Moderate content.",
      "Facilitate discussions.",
      "Resolve questions.",
      "Identify and recognize experts.",
      "Track engagement and growth."
    ]
  },
  "customer-onboarding-strategy": {
    "tagline": "The plan that gets a new customer to success — on purpose.",
    "what": "Designing onboarding around success: defining what success looks like, mapping stakeholders, setting milestones, and planning the first 90 days.",
    "why": "Onboarding decides retention. A deliberate onboarding strategy turns a signed deal into a customer who reaches value and renews.",
    "who": [
      "cs",
      "founder",
      "operator"
    ],
    "best": [
      "Define success with the customer in week one.",
      "Map stakeholders and the champion early.",
      "Set milestones that end in visible value.",
      "Plan communication and engagement from day one."
    ],
    "mistakes": [
      "Onboarding = configuration, not value.",
      "No agreed definition of success.",
      "Stakeholders discovered after the fact."
    ],
    "questions": [
      "What must this customer see to know it's working?",
      "Who drives success on their side?"
    ]
  },
  "customer-onboarding-implementation": {
    "tagline": "Running the setup like a project — scoped, owned, on time.",
    "what": "The operational side of onboarding: setup, provisioning, integration, training, and adoption — executed on a plan.",
    "why": "Setup delays burn goodwill and delay value. Disciplined implementation is what makes the onboarding strategy real.",
    "who": [
      "cs",
      "project"
    ],
    "best": [
      "Scope explicitly before starting.",
      "Name the owner on each side.",
      "Map dependencies before they block.",
      "Track adoption, not just setup."
    ],
    "mistakes": [
      "Scope creep with no control.",
      "No single owner on the customer side.",
      "Discovering a blocker on go-live day."
    ],
    "questions": [
      "What is the critical path to go-live?",
      "Who is accountable on their side?"
    ]
  },
  "value-realization-win-planning": {
    "tagline": "Engineering the first win — on purpose.",
    "what": "Establishing a baseline, identifying quick wins, and planning value tracking so the customer feels success early and visibly.",
    "why": "The first value realized sets the account's trajectory. Deliberate win planning converts cautious buyers into believers.",
    "who": [
      "cs",
      "founder"
    ],
    "best": [
      "Set a baseline before you claim progress.",
      "Pick quick wins the customer will actually feel.",
      "Track value from day one.",
      "Plan the business review early."
    ],
    "mistakes": [
      "Waiting for full implementation before showing value.",
      "Wins that go uncommunicated to leadership.",
      "No ROI documentation."
    ],
    "questions": [
      "What is the fastest visible win?",
      "Who needs to hear about it?"
    ]
  },
  "training-certification-program": {
    "tagline": "Customers who know the product, stay with it.",
    "what": "Building role-based training paths and certification so customers (and their teams) become competent and self-sufficient.",
    "why": "Competence drives adoption and retention. A training program is the fastest lever on long-term customer success.",
    "who": [
      "cs",
      "enablement"
    ],
    "best": [
      "Design curricula per role, not one-size-fits-all.",
      "Certify on demonstrated skill, not attendance.",
      "Keep content current with the product.",
      "Make learning measurable."
    ],
    "mistakes": [
      "Deck-watching with no practice.",
      "Training that stops after week one.",
      "No verification of competence."
    ],
    "questions": [
      "What must each role know to succeed?",
      "How do we verify they know it?"
    ]
  },
  "customer-health-monitoring-renewal-readiness": {
    "tagline": "Reading account health and renewal readiness before it's urgent.",
    "what": "Selecting health indicators, monitoring them in real time, assessing risk, and planning intervention — with an eye on renewal readiness.",
    "why": "Churn and renewal are decided in advance. Continuous health monitoring turns 'surprise' into 'we saw it coming'.",
    "who": [
      "cs",
      "revops"
    ],
    "best": [
      "Pick indicators that predict retention.",
      "Monitor in real time, not quarterly.",
      "Assess renewal readiness continuously.",
      "Act on risk before it's a conversation."
    ],
    "mistakes": [
      "Dashboards with no thresholds or owners.",
      "Monitoring without an intervention plan.",
      "Renewal risk discovered at the last minute."
    ],
    "questions": [
      "What predicts churn in our data?",
      "Is this account ready to renew — really?"
    ]
  },
  "feature-adoption-campaigns": {
    "tagline": "Campaigns that drive adoption of the features that matter.",
    "what": "Running targeted campaigns — segmenting users, designing, launching, and tracking — to drive adoption of high-value features.",
    "why": "Adoption is the leading indicator of retention. A campaign turns 'the feature exists' into 'the customer uses it'.",
    "who": [
      "cs",
      "product"
    ],
    "best": [
      "Prioritize features by retention impact.",
      "Segment users by usage and potential.",
      "Promote in-context, not just by email.",
      "Track and iterate on adoption."
    ],
    "mistakes": [
      "Campaigns for every feature, none sticky.",
      "No segmentation — everyone gets the same nudge.",
      "No measurement of adoption lift."
    ],
    "questions": [
      "Which feature, adopted, most predicts renewal?",
      "Which segment needs it most?"
    ]
  },
  "usage-monitoring-proactive-support": {
    "tagline": "Watching usage and reaching out before it dips.",
    "what": "Defining baseline usage, monitoring in real time, configuring alerts, and proactively supporting users who fall behind.",
    "why": "Usage decline precedes churn. Proactive support at the first dip is cheaper than a save later.",
    "who": [
      "cs",
      "revops"
    ],
    "best": [
      "Set baselines before you monitor.",
      "Configure alerts that mean something.",
      "Reach out with help, not surveillance.",
      "Track rebound after outreach."
    ],
    "mistakes": [
      "Monitoring everything, acting on nothing.",
      "Alerts nobody owns.",
      "Outreach that reads as nagging."
    ],
    "questions": [
      "What usage pattern predicts churn?",
      "Who responds when an alert fires?"
    ]
  },
  "learning-certification-platform": {
    "tagline": "A platform where customers learn at scale.",
    "what": "Selecting and running a learning platform — content strategy, production, enrollment, assessment, and analytics.",
    "why": "Scale makes one-on-one training impossible. A platform makes education repeatable, measurable, and self-serve.",
    "who": [
      "cs",
      "enablement"
    ],
    "best": [
      "Pick a platform that fits how customers learn.",
      "Run a real content production pipeline.",
      "Track enrollment and completion.",
      "Improve from usage analytics."
    ],
    "mistakes": [
      "A platform with no content strategy.",
      "Content that goes stale.",
      "No measure of learning outcomes."
    ],
    "questions": [
      "What must the platform deliver to reduce support load?",
      "Is learning actually changing behavior?"
    ]
  },
  "community-peer-learning": {
    "tagline": "Customers learning from each other — and loving you for it.",
    "what": "Standing up a customer community for peer learning: strategy, platform, moderators, recruitment, engagement.",
    "why": "Peer learning compounds: customers solve each other's problems, advocates emerge, and retention rises.",
    "who": [
      "cs",
      "marketing"
    ],
    "best": [
      "Define the community's goal before the platform.",
      "Recruit a strong founding membership.",
      "Recognize contributors — it drives participation.",
      "Measure engagement and evolution."
    ],
    "mistakes": [
      "A community with no reason to exist.",
      "Over-moderating the life out of it.",
      "Building it and walking away."
    ],
    "questions": [
      "What do members get from this community?",
      "Is it growing and active?"
    ]
  },
  "churn-prevention-at-risk-recovery": {
    "tagline": "The save play for accounts about to leave.",
    "what": "Identifying at-risk customers, finding root cause, running intervention (executive engagement, retention negotiation), and refreshing the success plan.",
    "why": "Prevention beats acquisition economics. A structured save play rescues revenue that is already yours.",
    "who": [
      "cs",
      "founder",
      "exec"
    ],
    "best": [
      "Identify at-risk accounts early and precisely.",
      "Find the real root cause before reaching out.",
      "Get executive attention — it signals commitment.",
      "Follow up and track the rebound."
    ],
    "mistakes": [
      "A junior CSM fighting churn alone.",
      "Discounts without solving the problem.",
      "Slow response — the decision happens without you."
    ],
    "questions": [
      "What actually broke in their experience?",
      "What would it take for them to confidently stay?"
    ]
  },
  "expansion-upsell-identification": {
    "tagline": "Finding the accounts ready to grow — systematically.",
    "what": "Assessing customer maturity, identifying expansion opportunities, building the business case, and aligning stakeholders for upsell.",
    "why": "Expansion is the cheapest pipeline you have. Systematic identification turns success into a growth engine.",
    "who": [
      "cs",
      "sales",
      "founder"
    ],
    "best": [
      "Score maturity to find expansion-ready accounts.",
      "Build a real business case with ROI.",
      "Align the champion before you pitch.",
      "Prepare executive sponsorship for the big ones."
    ],
    "mistakes": [
      "Expansion left to chance conversations.",
      "No business case — the champion can't defend it.",
      "Upselling before value is realized."
    ],
    "questions": [
      "Which accounts show the strongest expansion signal?",
      "Is the timing right, or are we early?"
    ]
  },
  "renewal-negotiation-process": {
    "tagline": "Renewing the value — and often expanding it.",
    "what": "The full renewal play: qualification, ROI documentation, negotiation prep, the value conversation, terms, signature, and next-phase planning.",
    "why": "Renewal is where value converts into continued commitment. A disciplined process protects margin and grows the account.",
    "who": [
      "cs",
      "sales",
      "founder"
    ],
    "best": [
      "Qualify the renewal early — never at expiry.",
      "Document ROI before the conversation.",
      "Negotiate on value, not just price.",
      "Plan the next phase at signature."
    ],
    "mistakes": [
      "Springing the renewal at the last minute.",
      "Renewing at the same price without expansion.",
      "Negotiating only on discount."
    ],
    "questions": [
      "What value did we deliver that justifies renewal plus?",
      "What expansion is realistic this cycle?"
    ]
  },
  "customer-health-scoring-model": {
    "tagline": "The score that predicts which accounts stay.",
    "what": "Building a health scoring model — metrics selection, data architecture, model development, validation, deployment, and continuous improvement.",
    "why": "A calibrated health score turns scattered signals into one number teams can act on. It's the backbone of proactive CS.",
    "who": [
      "cs",
      "revops"
    ],
    "best": [
      "Pick metrics that correlate with retention.",
      "Build the model on real data, then validate.",
      "Deploy with thresholds that trigger action.",
      "Improve the model continuously."
    ],
    "mistakes": [
      "A score that's just usage, ignoring sentiment.",
      "Thresholds nobody owns or acts on.",
      "A model that never gets recalibrated."
    ],
    "questions": [
      "What is the leading indicator of churn in our data?",
      "Who is responsible when a score drops?"
    ]
  },
  "customer-satisfaction-nps-program": {
    "tagline": "Reading sentiment before it hardens into churn.",
    "what": "Running an NPS/CSAT program — strategy, surveys, collection, analysis, detractor follow-up, and action.",
    "why": "Satisfaction is the early-warning system. A real NPS program turns feedback into fixes instead of a score in a spreadsheet.",
    "who": [
      "cs",
      "marketing"
    ],
    "best": [
      "Design the survey to surface the 'why', not just the score.",
      "Follow up with detractors fast.",
      "Close the loop — tell customers what changed.",
      "Track trends, not single scores."
    ],
    "mistakes": [
      "A score with no action behind it.",
      "Detractors never contacted.",
      "Feedback collected and ignored."
    ],
    "questions": [
      "What is the trend, not just this month's score?",
      "What changed because of what they told us?"
    ]
  },
  "customer-success-metrics-dashboard": {
    "tagline": "The numbers that tell you CS is working.",
    "what": "Building the CS metrics framework and dashboard — data architecture, design, implementation, adoption, and improvement.",
    "why": "What gets measured gets managed. A CS dashboard turns the team's activity into visible, steerable outcomes.",
    "who": [
      "cs",
      "revops"
    ],
    "best": [
      "Define the metrics that matter before the dashboard.",
      "Design for action, not decoration.",
      "Drive adoption — a dashboard nobody reads is nothing.",
      "Iterate as the business evolves."
    ],
    "mistakes": [
      "A dashboard of 40 metrics, none owned.",
      "Design for execs that never look.",
      "No link between the dashboard and decisions."
    ],
    "questions": [
      "Which 10 numbers tell us CS is working?",
      "Who owns each one?"
    ]
  },
  "target-account-list-development-tal": {
    "tagline": "The short list of accounts worth your best effort.",
    "what": "Defining TAL criteria, sourcing account data, scoring and ranking, and building the focused account list that drives account-based work.",
    "why": "ABM is about focus. The TAL is the agreement on who matters — without it, account-based is just a label.",
    "who": [
      "abm",
      "founder",
      "sales"
    ],
    "best": [
      "Score fit and opportunity, then prioritize.",
      "Source account data that lets you rank, not just list.",
      "Keep the list tight — focus is the point.",
      "Refresh it quarterly."
    ],
    "mistakes": [
      "A TAL so large it is just the CRM.",
      "Accounts chosen by opinion, not scoring.",
      "A list built once and never revisited."
    ],
    "questions": [
      "Which accounts, if won, change the quarter?",
      "Why these and not the thousand others?"
    ]
  },
  "account-profiling-intelligence-gathering": {
    "tagline": "The intelligence pack on every target account.",
    "what": "Researching each TAL account — company, org structure, stakeholders, pains, buying process — into a strategy-ready brief.",
    "why": "Account-based execution needs account-level intelligence. A rich profile makes every touch feel researched.",
    "who": [
      "abm",
      "sdr",
      "sales"
    ],
    "best": [
      "Profile the account, not just the company page.",
      "Map stakeholders and their influence.",
      "Understand the buying process before outreach.",
      "Keep profiles current as signals change."
    ],
    "mistakes": [
      "A static profile nobody updates.",
      "Company-level data when you need account-level intent.",
      "Profiles that never inform the outreach."
    ],
    "questions": [
      "What is changing inside this account that opens a door?",
      "Who are the stakeholders we must reach?"
    ]
  },
  "competitive-account-assessment": {
    "tagline": "Knowing who else is in the account — and what they offer.",
    "what": "For each target account, identifying the incumbent, analyzing win/loss patterns, and comparing offers.",
    "why": "In ABM the account usually has an incumbent. Winning means displacing — and displacement needs a strategy, not hope.",
    "who": [
      "abm",
      "sales",
      "founder"
    ],
    "best": [
      "Identify the real incumbent in each account.",
      "Use win/loss data to sharpen the case.",
      "Compare offers on the dimensions that matter to them.",
      "Build the displacement story on their gaps."
    ],
    "mistakes": [
      "Generic competitor slides.",
      "Attacking a competitor the account has never used.",
      "No displacement play until the deal is in play."
    ],
    "questions": [
      "Who is the incumbent, and what is their real weakness here?",
      "What story displaces them in this account?"
    ]
  },
  "expansion-opportunity-identification": {
    "tagline": "Finding the accounts ready to grow — systematically.",
    "what": "Analyzing current revenue and usage, identifying expansion types (upsell, cross-sell, vertical), sizing the opportunity, and deciding go/no-go.",
    "why": "Expansion is the cheapest pipeline you have. Systematic identification turns existing accounts into a growth engine.",
    "who": [
      "cs",
      "sales",
      "founder"
    ],
    "best": [
      "Score maturity and expansion signal together.",
      "Size the opportunity before you chase it.",
      "Make a real go/no-go call, not a hope.",
      "Prioritize where the champion can sell internally."
    ],
    "mistakes": [
      "Expansion left to chance conversations.",
      "Opportunities chased without sizing or ROI.",
      "No go/no-go — everything is 'maybe'."
    ],
    "questions": [
      "Which accounts show the strongest expansion signal?",
      "Is the opportunity real, sized, and winnable?"
    ]
  },
  "department-division-expansion-strategy": {
    "tagline": "Growing one account into many departments.",
    "what": "Analyzing target departments, developing the use case and business case, mapping new stakeholders, and planning the expansion into each.",
    "why": "A single account with multiple departments is a compounding asset — each expansion is a new champion and budget.",
    "who": [
      "sales",
      "cs",
      "founder"
    ],
    "best": [
      "Pick departments with a real use case, not just headcount.",
      "Build the business case for each.",
      "Map the new stakeholders and their influence.",
      "Sequence the expansion — land, prove, then expand."
    ],
    "mistakes": [
      "Expanding before value is proven in the first department.",
      "No business case — the champion can't defend it.",
      "Ignoring the new stakeholder map."
    ],
    "questions": [
      "Which department has the strongest use case next?",
      "Who in that department champions us?"
    ]
  },
  "add-on-module-expansion": {
    "tagline": "Selling the next module to customers already winning.",
    "what": "Analyzing feature/module usage, assessing adoption and readiness, designing pricing/bundling, and building the proposal.",
    "why": "Add-ons monetize existing relationships — the trust exists, the value case is built on their own usage.",
    "who": [
      "cs",
      "sales",
      "product"
    ],
    "best": [
      "Base the case on their actual usage data.",
      "Assess adoption before selling the add-on.",
      "Price the add-on on the value it unlocks.",
      "Propose when usage signals readiness."
    ],
    "mistakes": [
      "Selling add-ons before the core is adopted.",
      "Pricing on cost, not value.",
      "No readiness signal — pitching cold."
    ],
    "questions": [
      "Which module would this customer actually use?",
      "Does their usage show readiness?"
    ]
  },
  "expansion-sales-process": {
    "tagline": "Running the expansion like the real deal it is.",
    "what": "The expansion sales cycle — discovery, needs analysis, solution/demo, proposal, negotiation, close — executed with deal discipline.",
    "why": "Expansion is a sale. Treating it casually loses margin; running it like a deal wins expansion at full value.",
    "who": [
      "sales",
      "cs",
      "founder"
    ],
    "best": [
      "Discover the new need, don't assume it.",
      "Anchor the proposal in their ROI.",
      "Run the same close discipline as new business.",
      "Coordinate CS and sales on one plan."
    ],
    "mistakes": [
      "Expansion discounting because 'they're already a customer'.",
      "No needs analysis — selling a module nobody needs.",
      "CS and sales pulling the account apart."
    ],
    "questions": [
      "What does this expansion actually solve for them?",
      "Who signs, and what do they need to believe?"
    ]
  },
  "land-and-expand-execution": {
    "tagline": "Winning the entry — built for the expansion.",
    "what": "Landing a fast, successful entry deal and mapping the expansion path — triggers, acceleration, and the grow plan.",
    "why": "The land determines the expand. An entry sized and structured for growth makes expansion natural.",
    "who": [
      "sales",
      "founder",
      "ae"
    ],
    "best": [
      "Size the entry for a fast win, not a max deal.",
      "Map expansion triggers before you land.",
      "Accelerate expansion once value is proven.",
      "Coordinate the account plan across owners."
    ],
    "mistakes": [
      "Maximizing the first deal at the cost of the relationship.",
      "No expansion map after the land.",
      "Waiting passively for expansion signals."
    ],
    "questions": [
      "What is the smallest deal that proves value and opens growth?",
      "What triggers the expansion?"
    ]
  },
  "abm-program-management": {
    "tagline": "Running account-based as a program, not a campaign.",
    "what": "Managing the ABM program — prioritization, per-account strategy, personalized content, multi-channel execution — as a system.",
    "why": "ABM works as a disciplined program. Ad hoc campaigns labeled 'account-based' waste the method.",
    "who": [
      "abm",
      "marketing",
      "sales"
    ],
    "best": [
      "Prioritize accounts with scoring, not opinion.",
      "Build per-account strategy, not one-size messaging.",
      "Orchestrate channels around the account.",
      "Measure program impact, not campaign vanity."
    ],
    "mistakes": [
      "ABM as a label on generic campaigns.",
      "No per-account strategy.",
      "Channels running in silos against the same account."
    ],
    "questions": [
      "Which accounts justify the ABM investment?",
      "Is the program coordinated around accounts or channels?"
    ]
  },
  "account-executive-coordination": {
    "tagline": "The AEs and the ABM program working as one.",
    "what": "Coordinating account assignment, AE strategy alignment, pipeline planning, and regular account reviews/coaching.",
    "why": "ABM fails when the program and the AE don't sync. Coordination turns strategy into execution on the account.",
    "who": [
      "sales",
      "abm",
      "manager"
    ],
    "best": [
      "Align AE strategy with the account plan.",
      "Plan the opportunity pipeline together.",
      "Run regular account reviews, not annual ones.",
      "Coach on account-level execution."
    ],
    "mistakes": [
      "Program plans the AEs never see.",
      "No shared pipeline view per account.",
      "Reviews that are status, not strategy."
    ],
    "questions": [
      "Is the AE executing the account plan?",
      "What does the account pipeline really look like?"
    ]
  },
  "account-based-marketing-campaigns": {
    "tagline": "Campaigns built around the account, not the channel.",
    "what": "Running ABM campaigns — strategy, account segmentation, personalized creative, multi-channel orchestration, measurement.",
    "why": "Account-based campaigns concentrate spend where it pays. Personalization to the account is what earns the meeting.",
    "who": [
      "marketing",
      "abm"
    ],
    "best": [
      "Segment accounts before you create.",
      "Personalize creative to the account's context.",
      "Orchestrate channels around the account journey.",
      "Measure by account engagement and pipeline."
    ],
    "mistakes": [
      "Account lists with generic creative.",
      "One campaign across every account.",
      "No link to pipeline."
    ],
    "questions": [
      "What does this account need to see to engage?",
      "Which channels actually reach them?"
    ]
  },
  "customer-reference-advocate-programs": {
    "tagline": "Turning your best accounts into proof and referrals.",
    "what": "Recruiting references and advocates, preparing them, and turning their stories into case studies and proof.",
    "why": "In ABM, a reference from a similar account closes deals. Advocates are the highest-converting proof you have.",
    "who": [
      "marketing",
      "cs",
      "sales"
    ],
    "best": [
      "Recruit references that match your target accounts.",
      "Train them on what to say and ask.",
      "Turn every win into a reusable story.",
      "Keep the advocate relationship warm."
    ],
    "mistakes": [
      "Burning the same two references on every deal.",
      "Unprepared references who wander off-message.",
      "Stories that never reach the AE."
    ],
    "questions": [
      "Which reference would persuade this specific account?",
      "Is the story built and ready to deploy?"
    ]
  },
  "value-based-pricing": {
    "tagline": "Pricing the value the customer gets, not the cost you incur.",
    "what": "Researching customer value and willingness-to-pay, then designing a pricing model that captures a fair share of it.",
    "why": "Price is the fastest lever on revenue and the most strategic. Value-based pricing captures margin; cost-plus leaves it on the table.",
    "who": [
      "founder",
      "ceo",
      "product"
    ],
    "best": [
      "Quantify customer value before pricing — interviews, not guesses.",
      "Test willingness-to-pay with real customers.",
      "Benchmark against competition but lead with value.",
      "Iterate — pricing is a living decision."
    ],
    "mistakes": [
      "Pricing by cost plus a margin.",
      "Copying the competitor's price without understanding value.",
      "Never testing price changes."
    ],
    "questions": [
      "What does the customer gain, in money, from this?",
      "What share of that value should the price capture?"
    ]
  },
  "product-tiers-edition-strategy": {
    "tagline": "Packaging so customers self-select the right size.",
    "what": "Designing pricing tiers and edition strategy so different customer sizes find their fit and the upgrade path is natural.",
    "why": "Good packaging increases both conversion and expansion. Tiers guide customers up the value ladder instead of leaving it to chance.",
    "who": [
      "founder",
      "product",
      "ceo"
    ],
    "best": [
      "Allocate features by value, not just effort.",
      "Make the upgrade path obvious.",
      "Position each tier for a distinct segment.",
      "Test adoption and revenue per tier."
    ],
    "mistakes": [
      "Tiers that differ in price but not real value.",
      "Too many tiers — decision paralysis.",
      "An invisible upgrade path."
    ],
    "questions": [
      "What does each segment need, and what will they pay?",
      "Where does the customer naturally land and grow?"
    ]
  },
  "add-on-module-pricing": {
    "tagline": "Monetizing beyond the core with add-ons and modules.",
    "what": "Identifying add-on modules, assessing willingness-to-pay, packaging and bundling, and pricing them on the value they unlock.",
    "why": "The core tier captures the base; add-ons capture the growth. It is how pricing grows with the customer's success.",
    "who": [
      "founder",
      "product"
    ],
    "best": [
      "Price add-ons on the value they unlock.",
      "Keep the packaging simple and predictable.",
      "Make the add-on path obvious from the core.",
      "Track adoption and revenue per add-on."
    ],
    "mistakes": [
      "Add-ons priced like afterthoughts.",
      "Bundles that confuse buyers.",
      "No tracking of add-on performance."
    ],
    "questions": [
      "Which add-on delivers clear value customers will pay for?",
      "Is the add-on path natural and priced well?"
    ]
  },
  "a-b-testing-for-pricing-packaging": {
    "tagline": "Letting data, not opinions, set the price.",
    "what": "Running controlled price and packaging tests — hypothesis, design, launch, data, significance, decision — to find what maximizes revenue.",
    "why": "Price is too important to guess. Testing turns pricing into an evidence-based decision that compounds across every customer.",
    "who": [
      "founder",
      "product",
      "revops"
    ],
    "best": [
      "Test one variable at a time.",
      "Define significance before you test.",
      "Watch conversion AND revenue — a higher price may convert less and earn more.",
      "Capture learnings for the next test."
    ],
    "mistakes": [
      "Testing on vibes with no hypothesis.",
      "Stopping early on a noisy result.",
      "Optimizing conversion while ignoring revenue per customer."
    ],
    "questions": [
      "What price hypothesis would move revenue most?",
      "Is the result significant, or is it noise?"
    ]
  },
  "price-increase-management": {
    "tagline": "Raising price without burning the base.",
    "what": "Justifying, planning, communicating, and executing a price increase while managing churn impact.",
    "why": "Value grows but prices often don't. A disciplined increase captures the value you've delivered and funds the next stage.",
    "who": [
      "founder",
      "ceo",
      "cs"
    ],
    "best": [
      "Justify the increase on delivered value.",
      "Segment customers — protect the at-risk ones.",
      "Plan the communication and transition period.",
      "Monitor churn and follow up."
    ],
    "mistakes": [
      "Increasing price without a value story.",
      "No segmentation — the increase hits the most fragile customers hardest.",
      "Springing the change with no notice."
    ],
    "questions": [
      "Can we justify the increase with delivered value?",
      "Which customers need protection, and how?"
    ]
  },
  "renewal-pricing-escalation": {
    "tagline": "Renewing at the right price — and escalating on value.",
    "what": "Analyzing renewals, setting escalation strategy, segmenting plans, and executing the renewal conversation on value.",
    "why": "Renewal pricing decides whether the relationship compounds or erodes. Escalation captures the value added since the last contract.",
    "who": [
      "cs",
      "ceo",
      "sales"
    ],
    "best": [
      "Analyze renewal pricing before the conversation.",
      "Segment escalation plans by health and value.",
      "Prepare sales with the value story.",
      "Escalate where value clearly grew."
    ],
    "mistakes": [
      "Renewing at the same price with no escalation discussion.",
      "Escalating accounts that never saw new value.",
      "No segmentation — one policy for everyone."
    ],
    "questions": [
      "What value was delivered that justifies escalation?",
      "Which renewals are ready to escalate?"
    ]
  },
  "win-loss-analysis-program": {
    "tagline": "Learning why you win — and lose — from every deal.",
    "what": "Selecting deals, interviewing the people involved, and synthesizing win/loss patterns into insight the team can act on.",
    "why": "Win/loss is the highest-signal research you have. Patterns here reveal what's really working in the market — and what's costing you deals.",
    "who": [
      "sales",
      "founder",
      "marketing"
    ],
    "best": [
      "Interview both won and lost deals — the losses teach more.",
      "Ask without leading; capture verbatim.",
      "Synthesize into patterns, not anecdotes.",
      "Feed the insight into positioning and coaching."
    ],
    "mistakes": [
      "Only studying wins — selection bias.",
      "Leading interviews that confirm beliefs.",
      "Insight that never reaches the team."
    ],
    "questions": [
      "What do we consistently win on, and lose on?",
      "What is the pattern behind the losses?"
    ]
  }
}
export function hasContent(name) {
  return !!PROCESS_CONTENT[slugify(name)]
}

export function getContent(name) {
  return PROCESS_CONTENT[slugify(name)] || null
}

export function slugify(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')
}
