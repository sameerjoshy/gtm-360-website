export const insights = {

    "why-growth-stalls": {
        slug: "/insights/why-growth-stalls",
        relatedArticles: [
            { title: "The Hidden Cost of Solving the Wrong Problem", href: "/insights/solving-wrong-problem", tag: "Insight" },
            { title: "ICP Drift — The Silent Revenue Killer", href: "/insights/icp-drift", tag: "Insight" },
            { title: "GTM Operating Model Realignment", href: "/services/gtm-operating-model", tag: "Service" }
        ],
        publishDate: "2025-11-15",
        keyTakeaway: "Growth stalls after early traction because the revenue motion that worked at $5M is not the same motion needed at $15M. The system needs to be rebuilt — not the team.",
        title: "Why Growth Stalls After Early Traction",
        category: "Growth Inflection",
        readTime: "5 min read",
        description: "The system that built your first $10M creates drag on the next $20M. Here's why — and what has to change structurally, not just operationally.",
        relatedService: { name: "GTM Operating Model Realignment", link: "/services/gtm-operating-model" },
        relatedProblem: { name: "Stalled growth patterns", link: "/problems/stalled-growth" },
        sections: {
            problemRecognition: `
                <p>At some point between $8M and $15M ARR, the growth curve flattens. Not collapses — flattens. The team is working harder than ever. The product is better than it's ever been. The brand is gaining recognition. But the number isn't moving the way it used to.</p>
                <p>Leadership calls it an execution problem. The board asks about market saturation. Sales wants more headcount. Marketing wants a bigger budget. Everyone has a theory. Nobody agrees on the diagnosis.</p>
                <p>And so the company tries everything at once — and nothing works.</p>
            `,
            wrongExplanation: `
                <p>The standard explanation is that the team "needs to level up." You hire a VP of Sales who's done this before. You bring in a CRO. You add SDR layers, RevOps, and a proper demand gen function. You invest in sales methodology training and a new CRM.</p>
                <p>Six months later, you have a more expensive cost structure and the same growth rate.</p>
            `,
            whyItFails: `
                <p>The problem with the "level up" theory is that it treats symptoms as causes.</p>
                <p>The actual issue is architectural. Your GTM system was designed — implicitly, not explicitly — to serve the ICP you had at $2M ARR. The messaging, the sales motion, the pricing structure, the success criteria — all of it was optimised for your first cohort of buyers.</p>
                <p>Those buyers were adventurous. They bought on vision. They tolerated rough edges. They didn't need a business case.</p>
                <p>The next $20M comes from a different buyer. One who needs proof, not promise. One who has a procurement process, a security review, and three internal stakeholders who each have veto power. The old system sends salespeople into those conversations with the wrong tools, the wrong stories, and the wrong success metrics.</p>
                <p>More headcount executing the wrong motion faster is not growth. It's acceleration toward the wrong wall.</p>
            `,
            actualConstraint: `
                <p>The real constraint is a <strong>stage mismatch</strong> — the gap between the GTM system you built and the buyer reality you're now operating in. It shows up in three places:</p>
                <ul>
                    <li><strong>ICP definition:</strong> You're chasing the buyer profile that made your early logos possible, not the profile that makes the next phase scalable.</li>
                    <li><strong>Sales motion:</strong> The deal structure assumes a short, high-trust sale. The new buyer needs a longer, evidence-based sale.</li>
                    <li><strong>Success metrics:</strong> You're measuring what worked before — activity, coverage, speed. The new phase requires measuring deal quality, stakeholder depth, expansion potential.</li>
                </ul>
            `,
            consequences: `
                <p>If the stage mismatch isn't corrected, a predictable sequence unfolds: win rates drop, leadership adds training, sales requests more features, the product team adds features that don't move the sales needle, churn increases, CAC goes up.</p>
                <p>By the time it's clearly a structural problem, you've spent 18 months and significant capital solving for the wrong thing.</p>
            `,
            whatChanges: `
                <p>Three things need to change before anything else:</p>
                <ul>
                    <li><strong>Re-anchor ICP:</strong> Look at your best-fit customers — highest NRR, lowest support load, fastest time-to-value. Build a precise profile from that cohort.</li>
                    <li><strong>Redesign the sales motion:</strong> Map it to how this buyer actually makes decisions — the real buying committee, the real objections, the real evidence requirements.</li>
                    <li><strong>Change what you measure:</strong> Replace coverage ratios with deal quality scores. Replace call volume with stakeholder depth.</li>
                </ul>
                <p>None of this requires a new CRM or firing your current team. It requires an honest diagnosis of where the system is misaligned.</p>
            `,
            ourView: `
                <p>Most B2B growth stalls aren't execution failures. They're architecture failures. The system worked — then the market it was built for got smaller relative to where you needed to go.</p>
                <p>The fastest path forward is usually not acceleration. It's a 10-to-14-day diagnostic to identify exactly where the mismatch is, before committing to a new motion. If this pattern looks familiar, that's the right first step.</p>
            `
        }
    },

    "stage-definition-problem": {
        slug: "/insights/stage-definition-problem",
        relatedArticles: [
            { title: "Why Forecasts Decay Over Time", href: "/insights/forecast-decay", tag: "Insight" },
            { title: "Pipeline Full, Revenue Flat — Case Study", href: "/insights/case-studies/pipeline-full-revenue-flat", tag: "Case Study" },
            { title: "Pipeline Quality & Win Rate", href: "/services/pipeline-quality", tag: "Service" }
        ],
        publishDate: "2025-12-01",
        keyTakeaway: "CRM stage definitions that measure seller activity instead of buyer commitment cause pipeline to look healthy while deal quality silently deteriorates.",
        title: "The Stage Definition Problem Nobody Talks About",
        category: "Pipeline",
        readTime: "5 min read",
        description: "Most pipeline inflation isn't caused by bad reps. It's caused by stage criteria that measure seller activity instead of buyer commitment.",
        relatedService: { name: "Pipeline Quality & Win Rate", link: "/services/pipeline-quality" },
        relatedProblem: { name: "Pipeline growing, revenue flat", link: "/problems/stalled-growth" },
        sections: {
            problemRecognition: `
                <p>Every quarter, the same conversation happens in sales reviews: the pipeline looks healthy in week 4, starts wobbling in week 8, and collapses in week 11. Deals that were "90% likely to close" get pushed. Committed revenue disappears.</p>
                <p>The CRM has thousands of data points. Stage names, probability percentages, close dates, next steps. The data is all there. And yet nobody saw it coming.</p>
                <p>The problem isn't the data. The problem is what the stages actually measure.</p>
            `,
            wrongExplanation: `
                <p>The instinctive response is rep accountability. Reps were too optimistic. They over-committed. They need to be more disciplined about forecasting.</p>
                <p>So the organisation runs forecast accuracy reviews. Managers challenge reps harder. Everyone nods, the same deals go in, and the same collapse happens next quarter.</p>
                <p>Rep accountability isn't the issue. The stage definitions are.</p>
            `,
            whyItFails: `
                <p>In most CRMs, stage progression is defined by what the <em>seller did</em>, not what the <em>buyer agreed to</em>.</p>
                <p>Stage 2: Demo completed. Stage 3: Proposal sent. Stage 4: Verbal commitment.</p>
                <p>"Demo completed" is a seller action. It tells you nothing about whether the buyer moved toward a purchase decision. "Proposal sent" tells you nothing about whether the proposal has any internal support.</p>
                <p>When stage advancement is based on seller activity, the pipeline becomes a log of what salespeople did — not a model of where buyers actually are. Those two things diverge sharply by late stage.</p>
            `,
            actualConstraint: `
                <p>The real constraint is the absence of <strong>buyer verification criteria</strong> at each stage gate. A stage should only advance when the buyer has done something — not the seller. Something that requires the buyer to invest their own time, credibility, or organisational capital.</p>
                <ul>
                    <li>Did they introduce you to Finance or Procurement? Real signal.</li>
                    <li>Did they share an internal document, budget code, or timeline? Real signal.</li>
                    <li>Did they agree to a mutual action plan with their name on it? Real signal.</li>
                </ul>
                <p>"They seemed enthusiastic on the call" is not a signal. It's seller optimism documented in a CRM field.</p>
            `,
            consequences: `
                <p>When stage definitions are built on seller activity, three things happen consistently:</p>
                <p>The pipeline looks bigger than it is. Late-stage deals stall — the rep has "done everything right" by the internal definition, but the deal has no real champion, no agreed timeline, no approved budget. And the wrong deals get the most attention — the most active rep with the most stage 3 deals looks like the strongest performer, even if none of those deals are real.</p>
            `,
            whatChanges: `
                <p>Rewrite stage definitions from scratch with one rule: <strong>every stage gate must require buyer evidence, not seller activity.</strong></p>
                <p>This is a two-hour workshop, not a six-month project. Get your best salespeople and sales leaders together and ask: "What does the buyer actually have to do or say for you to be confident a deal is real?"</p>
                <p>Then enforce it. If a deal can't pass the buyer evidence test, it doesn't move. The pipeline number will compress. That's the point — what you see should reflect reality, not effort.</p>
            `,
            ourView: `
                <p>The single most common pipeline problem we see isn't rep skill, market conditions, or product gaps. It's stages designed to track effort instead of progress.</p>
                <p>If your pipeline is consistently collapsing in the back half of the quarter, the stage definitions are the most likely culprit. A diagnostic will confirm it in a day.</p>
            `
        }
    },

    "forecast-decay": {
        slug: "/insights/forecast-decay",
        relatedArticles: [
            { title: "The Stage Definition Problem Nobody Talks About", href: "/insights/stage-definition-problem", tag: "Insight" },
            { title: "Forecast Accuracy Case Study", href: "/insights/case-studies/forecast-board-wanted-predictability", tag: "Case Study" },
            { title: "Forecasting & Revenue Governance", href: "/services/forecasting-governance", tag: "Service" }
        ],
        publishDate: "2025-12-15",
        keyTakeaway: "Forecast accuracy decays when stage criteria drift from buyer behaviour. The fix is not a better forecasting process — it is better pipeline discipline at every stage.",
        title: "Why Forecasts Decay Over Time",
        category: "Forecasting",
        readTime: "5 min read",
        description: "Without a shared definition of what 'evidence' means in a deal, forecasts become a negotiation between sales optimism and finance conservatism. Neither is right.",
        relatedService: { name: "Forecasting & Revenue Governance", link: "/services/forecasting-governance" },
        relatedProblem: { name: "Forecast volatility", link: "/problems/forecast-volatility" },
        sections: {
            problemRecognition: `
                <p>At the start of a quarter, the forecast looks solid. 10 weeks out, leadership has reasonable confidence. Then week 6 arrives and a $400K deal gets pushed. Then another. By week 10 you're doing recovery math and having tense conversations about what's actually in the commit.</p>
                <p>This happens in most B2B organisations, most quarters. It gets normalised. The gap between what sales calls commit and what actually closes gets built into the financial model as an assumed discount.</p>
                <p>The problem isn't that the gap exists. It's that nobody has defined what would close it.</p>
            `,
            wrongExplanation: `
                <p>The standard response is better forecasting process. More frequent pipeline reviews. Managers challenging reps harder. A new forecasting tool with real-time visibility. Sometimes an AI layer that learns from historical data.</p>
                <p>None of these fix the decay. They just make the decay more visible, faster.</p>
                <p>Because the decay isn't caused by insufficient process or data. It's caused by the absence of a shared definition of what "evidence" means in a deal.</p>
            `,
            whyItFails: `
                <p>When a rep marks a deal as "commit," what exactly are they asserting? In most organisations, this is genuinely unclear. Is it that the rep believes it will close? That the champion said they want to buy? That there's no obvious blocker?</p>
                <p>All of these are different assertions with different probability distributions. But the CRM treats them identically.</p>
                <p>So a manager reviews the commit column and reads a mix of evidence-based and hope-based claims with no way to distinguish them. They apply a gut discount. Finance applies a more aggressive one. The CFO applies another. By the time it reaches the board, the number has been discounted four times by four different heuristics, none grounded in deal-level evidence.</p>
            `,
            actualConstraint: `
                <p>The constraint is the absence of a <strong>shared evidence standard</strong> — a specific, agreed definition of what a rep must be able to point to before a deal enters commit. Not "I believe it will close." Specific evidence:</p>
                <ul>
                    <li>Procurement has confirmed budget availability in writing</li>
                    <li>Legal has received and reviewed the contract</li>
                    <li>The economic buyer confirmed the decision on a call with the manager</li>
                    <li>A mutual close plan exists with the buyer's name and agreed milestones</li>
                </ul>
                <p>The specific criteria will vary by deal size. But they need to be defined, written down, and enforced — not left to each rep's optimism threshold.</p>
            `,
            consequences: `
                <p>When there's no evidence standard, forecasts decay in a predictable pattern. Early-quarter confidence is high because there's nothing to contradict it. As the quarter progresses, reality asserts itself. The rep, under pressure to protect their commit, holds on too long. By the time the problem is acknowledged, there's no time to respond.</p>
                <p>The downstream effects: financial planning becomes unreliable, hiring decisions get made on false revenue assumptions, the board loses confidence in management's ability to call the business.</p>
            `,
            whatChanges: `
                <p>Define the evidence standard. Get sales leadership and finance in a room and answer one question: <em>what must a rep be able to point to before a deal goes into commit?</em></p>
                <p>In deal reviews, the question changes from "are you confident?" to "what's the evidence?" If the rep can answer it specifically, the deal stays in commit. If not, it moves to best case until it can.</p>
                <p>This will hurt the commit number in the short term. A smaller, accurate commit is worth more than a larger, fictional one.</p>
            `,
            ourView: `
                <p>Forecasting is a confidence problem, not a data problem. Most organisations have more than enough data. What they lack is a shared language for translating deal-level signals into a number the business can actually plan around.</p>
                <p>No tool solves it until the underlying evidence standard is set. If your forecasts are consistently decaying by 20–30% through the quarter, the diagnostic will identify whether the issue is the evidence standard, the stage definitions, or something upstream in how deals are being qualified.</p>
            `
        }
    },

    "solving-wrong-problem": {
        slug: "/insights/solving-wrong-problem",
        relatedArticles: [
            { title: "Why Growth Stalls After Early Traction", href: "/insights/why-growth-stalls", tag: "Insight" },
            { title: "When Fixing the Obvious Problem Made Things Worse", href: "/insights/case-studies/fixing-the-wrong-problem", tag: "Case Study" },
            { title: "GTM Consulting overview", href: "/gtm-consulting", tag: "Overview" }
        ],
        publishDate: "2026-01-10",
        keyTakeaway: "The hidden cost of solving the wrong problem is not wasted effort — it is compounding the original constraint while adding new ones.",
        title: "The Hidden Cost of Solving the Wrong Problem",
        category: "Misdiagnosis",
        readTime: "5 min read",
        description: "More pipeline, more tools, more headcount. When the underlying constraint is misunderstood, additional effort compounds the problem instead of solving it.",
        relatedService: { name: "GTM Operating Model Realignment", link: "/services/gtm-operating-model" },
        relatedProblem: { name: "Why growth stalls", link: "/problems/stalled-growth" },
        sections: {
            problemRecognition: `
                <p>The board asks why growth has stalled. Leadership runs an analysis. The pipeline is thin, win rates are declining, average deal size is flat. Obvious conclusion: we need more pipeline, better salespeople, and bigger deals.</p>
                <p>So the company hires more SDRs, raises the bar on AE hiring, and launches an upmarket initiative. Six months later, all three investments are underperforming. The pipeline is bigger but quality is worse. The new AEs are struggling because the motion isn't documented well enough to replicate. The enterprise deals are stalling because the product has gaps at that size.</p>
                <p>The original problem is now larger, and three new problems have been added.</p>
            `,
            wrongExplanation: `
                <p>The mistake wasn't the investment decisions — it was the diagnosis that drove them.</p>
                <p>When you look at symptoms and jump directly to solutions, you skip the most important step: understanding the causal mechanism. Why is the pipeline thin? Why are win rates declining? Why isn't deal size growing?</p>
                <p>If you don't answer those questions first, you're treating the thermometer reading, not the illness.</p>
            `,
            whyItFails: `
                <p>There are two reasons organisations consistently skip diagnosis.</p>
                <p>First, solutions are visible and feel like action. Hiring is something you can announce. A new tool rollout has a launch date. Diagnosis is invisible — it looks like nothing is happening while it's happening.</p>
                <p>Second, the presenting symptoms in GTM almost always map to familiar solutions. Thin pipeline → more pipeline generation. Low win rates → sales training. These mappings feel obvious, so the question "but why?" rarely gets asked.</p>
                <p>The result is an organisation perpetually busy but not improving. Each new initiative adds complexity without resolving the underlying constraint.</p>
            `,
            actualConstraint: `
                <p>In any GTM system, there's one thing that, if fixed, would unlock everything else. It might be ICP clarity. It might be how deals are being qualified. It might be a gap between what marketing promises and what sales can deliver. It might be churn at a predictable point in the customer lifecycle.</p>
                <p>The problem is that this constraint is rarely obvious from the surface metrics. You have to look at the system as a whole — how each part connects — before you can see where the real blockage is.</p>
            `,
            consequences: `
                <p>The cost of misdiagnosis compounds in a specific way: the first investment doesn't work, so a second is made to compensate. The second creates dependencies that make the first harder to unwind. A third initiative addresses the new complexity. By the time the diagnosis is corrected, the unwinding itself becomes a major project.</p>
                <p>The cost is not just cash — it's the 12–18 months of competitive time that was lost.</p>
            `,
            whatChanges: `
                <p>Before the next initiative is launched, run the diagnosis. Look at the system as a whole: where are deals being lost and why? What do your best customers have in common that your worst don't? Where does the sales motion break down consistently?</p>
                <p>The answers will point to one or two leverage points. Those are the things worth fixing. Everything else is noise until those are resolved.</p>
                <p>A good diagnostic takes 10 to 14 days. It costs less than one bad hire. And it tells you, with specificity, where to point the resources you already have.</p>
            `,
            ourView: `
                <p>We're not against investment, hiring, or new initiatives. We're against doing those things before you know what's actually broken.</p>
                <p>The organisations making the most progress aren't necessarily spending more — they're spending on the right constraint. If your last two or three GTM initiatives haven't moved the needle the way you expected, it's worth asking whether the diagnosis was right before designing the next one.</p>
            `
        }
    },

    "when-ai-makes-gtm-worse": {
        slug: "/insights/when-ai-makes-gtm-worse",
        relatedArticles: [
            { title: "The Hidden Cost of Solving the Wrong Problem", href: "/insights/solving-wrong-problem", tag: "Insight" },
            { title: "When AI Increased Activity but Reduced Clarity", href: "/insights/case-studies/when-ai-created-noise-not-clarity", tag: "Case Study" },
            { title: "GTM Signals & AI Alignment", href: "/services/gtm-signals-and-ai", tag: "Service" }
        ],
        publishDate: "2026-01-28",
        keyTakeaway: "AI makes GTM worse when deployed into a system that has not been deliberately designed. It accelerates a broken motion, not a good one.",
        title: "When AI Makes Your GTM Worse",
        category: "AI & Tools",
        readTime: "4 min read",
        description: "AI amplifies the system underneath it. If the system is misaligned, AI makes misalignment faster and more expensive. The diagnosis has to come first.",
        relatedService: { name: "GTM Signals & AI Alignment", link: "/services/gtm-signals-and-ai" },
        relatedProblem: { name: "AI noise vs signal", link: "/problems" },
        sections: {
            problemRecognition: `
                <p>The pitch is compelling: AI will write your sequences, score your leads, summarise your calls, and tell your reps which deals to prioritise. You implement it. Activity goes up. Volume goes up. The team feels like it's moving faster.</p>
                <p>Three months later, win rates are flat. Qualified pipeline hasn't grown. The cost per closed deal has increased because you're doing more of everything without better outcomes.</p>
                <p>AI didn't fail. It did exactly what it was supposed to do. That's the problem.</p>
            `,
            wrongExplanation: `
                <p>When AI tools underperform, the instinct is to blame adoption. Reps aren't using it properly. The tool needs better training data. You need a more sophisticated implementation.</p>
                <p>So you invest in change management, better prompting, and a dedicated RevOps resource to tune the models. Six more months pass. The outcomes are the same.</p>
                <p>The adoption wasn't the problem. The system the AI was trained on was the problem.</p>
            `,
            whyItFails: `
                <p>AI tools learn from your existing data and amplify your existing patterns.</p>
                <p>If your lead scoring model is built on historical data from a period when your ICP was different, the model will score leads based on the old ICP — at scale, automatically, with high confidence.</p>
                <p>If your sequence tool generates outreach based on current positioning that doesn't resonate with the buyers you're targeting, it will send more of that non-resonant messaging to more people, faster.</p>
                <p>In each case, AI is functioning correctly. It's making the existing system run faster. But if the existing system has a structural flaw, faster is worse.</p>
            `,
            actualConstraint: `
                <p>The constraint is sequence: <strong>AI should come after system clarity, not before it.</strong></p>
                <p>Before you automate anything, you need to know exactly who you're targeting and why, what signals genuinely predict buying intent for that ICP, what messaging has actually moved those buyers to action, and what stage criteria reliably predict a deal will close.</p>
                <p>If you can't answer those questions with evidence — not assumption — then AI will amplify your current best guesses at scale. That's not leverage. That's organised noise.</p>
            `,
            consequences: `
                <p>The damage from premature AI adoption is diffuse and therefore underappreciated. You spend more on outreach and reach more people who aren't your buyers. Your spam rates go up, domain reputation erodes, future outreach becomes harder. Your best reps start ignoring AI-generated recommendations because they've learned the recommendations don't match reality. The tool gets blamed. The underlying problem remains invisible.</p>
            `,
            whatChanges: `
                <p>Establish system clarity before AI deployment. Validate your ICP with current data. Test your messaging in live sales conversations before automating it. Confirm your stage definitions reflect buyer reality before building a scoring model on top of them.</p>
                <p>Once those foundations are solid, AI adds genuine leverage. Lead scoring works because the signals it optimises for are actually predictive. Sequences work because the messaging has been validated. The order matters more than the tools.</p>
            `,
            ourView: `
                <p>We're not sceptical of AI in GTM. We're sceptical of AI before diagnosis.</p>
                <p>Every AI tool we've seen add real value in B2B sales was deployed into a system that had already been deliberately designed. The ICP was clear. The motion was documented. The signal logic was validated. The AI made a good system faster — which is what it's actually for.</p>
                <p>If you're considering a significant AI investment in your GTM stack, spend 10 days on the diagnostic first. If the system underneath is sound, the AI will pay back quickly.</p>
            `
        }
    },

    "icp-drift": {
        slug: "/insights/icp-drift",
        relatedArticles: [
            { title: "Why Growth Stalls After Early Traction", href: "/insights/why-growth-stalls", tag: "Insight" },
            { title: "Sales Cycle Doubled — ICP Drift Case Study", href: "/insights/case-studies/sales-cycle-doubled-icp-drift", tag: "Case Study" },
            { title: "B2B Sales Consulting", href: "/b2b-sales-consulting", tag: "Overview" }
        ],
        publishDate: "2026-02-12",
        keyTakeaway: "ICP drift is the silent revenue killer because it degrades multiple metrics simultaneously — win rate, sales cycle, NRR — without any single metric collapsing visibly.",
        title: "ICP Drift — The Silent Revenue Killer",
        category: "ICP",
        readTime: "5 min read",
        description: "ICP drift happens slowly. By the time win rates and NRR show the damage, the pipeline has filled with the wrong buyers for 12+ months. Here's how to diagnose and fix it.",
        relatedService: { name: "Pipeline Quality & Win Rate", link: "/services/pipeline-quality" },
        relatedProblem: { name: "Win rates falling", link: "/problems/pipeline-conversion" },
        sections: {
            problemRecognition: `
                <p>You're closing deals. Win rates are reasonable. The team is hitting quota, mostly. But NRR is quietly declining. Support tickets are increasing. Customer success is overwhelmed. The product team is getting conflicting feature requests that don't form a coherent pattern. Sales cycles are getting longer.</p>
                <p>Nobody flags ICP drift because nothing looks obviously broken. The metrics are slightly off in multiple places, but nothing is dramatically wrong in any one place. The company keeps pushing forward, optimising each part independently, wondering why the system doesn't feel like it's working as well as it used to.</p>
            `,
            wrongExplanation: `
                <p>The usual explanations are product, market, or execution. The product needs more features. The market is more competitive. The sales team needs a refresh.</p>
                <p>All of these feel plausible because all of them are partially visible in the data. So the company invests in product roadmap work, competitive positioning, and sales enablement. Each investment addresses a real symptom. None address the underlying cause.</p>
            `,
            whyItFails: `
                <p>ICP drift is hard to see because it happens through accumulation, not events. There's no single decision that causes it.</p>
                <p>The sales team closed a deal in a slightly adjacent segment because the quarter needed it. Then another. Marketing started targeting that segment because conversion rates were decent. Product added features to retain those customers. Sales started selling to those features. The ICP quietly shifted without anyone declaring a strategy change.</p>
                <p>Now the company is serving a customer base that's broader and less cohesive than the one the product was built for. The original ICP customers are still the best — highest retention, highest NRR, lowest support burden. But they're a smaller proportion of the base, and the system isn't optimised to find more of them.</p>
            `,
            actualConstraint: `
                <p>The real constraint is a <strong>disconnection between the profile the system is targeting and the profile that actually drives business value.</strong></p>
                <p>This shows up most clearly when you segment your customer base by health metrics — NRR, support volume, time-to-value, expansion rate — and compare the top quartile to the bottom. The profiles are almost always meaningfully different. The top quartile is usually smaller, more focused, and closely aligned with the original design intent of the product.</p>
                <p>ICP drift means the system has been slowly optimised to win more of the bottom quartile — because that's where the incremental opportunities were found during the drift period.</p>
            `,
            consequences: `
                <p>Left uncorrected, ICP drift creates a compounding cost structure: CAC increases because you're targeting a broader audience with less precise messaging, sales cycles lengthen, churn increases because customers who were sold something adjacent to their actual need eventually recognise the fit is off, NRR declines, customer success capacity gets consumed by accounts that were never going to expand.</p>
                <p>The most insidious effect: when the team loses deals to competitors in segments you've drifted into, the assumption is that the product needs to compete harder in those segments. More investment follows in the wrong direction.</p>
            `,
            whatChanges: `
                <p>The correction starts with a customer base segmentation — not by size or industry, but by value delivered and value received. Which customers have the best outcomes? Lowest cost to serve? Most likely to renew and expand? What do those customers have in common?</p>
                <p>That profile becomes the re-anchored ICP. Then every part of the GTM system is audited against it: Is outbound targeting this profile? Is the inbound funnel attracting this profile? Is qualification criteria filtering for this profile?</p>
                <p>A structured diagnostic will surface the drift and identify the specific places where the system has been optimised for the wrong target — usually within two weeks.</p>
            `,
            ourView: `
                <p>ICP drift is the most underdiagnosed problem in B2B GTM. It's quiet, gradual, and invisible until the damage is significant enough to show up in the numbers everyone watches.</p>
                <p>The companies that catch it early do so because they're regularly asking a simple question: do our best customers still look like the customers we're optimising to acquire?</p>
                <p>If your NRR is declining, your support load is growing, and your sales cycles are lengthening without an obvious cause, ICP drift is the most likely explanation. The diagnostic will confirm it.</p>
            `
        }
    },

    "growth-engine-vs-amplifier": {
        slug: "/insights/growth-engine-vs-amplifier",
        relatedArticles: [
            { title: "The Hidden Cost of Solving the Wrong Problem", href: "/insights/solving-wrong-problem", tag: "Insight" },
            { title: "Why Growth Stalls After Early Traction", href: "/insights/why-growth-stalls", tag: "Insight" },
            { title: "GTM Operating Model Realignment", href: "/services/gtm-operating-model", tag: "Service" }
        ],
        publishDate: "2026-03-12",
        keyTakeaway: "You cannot amplify zero. Adding more pipeline, tools, or headcount to a broken revenue engine doesn't fix it — it scales the inefficiency. The engine has to be right before amplification makes sense.",
        title: "Growth Engines vs. Growth Amplifiers — Why More Isn't Working",
        category: "GTM Strategy",
        readTime: "6 min read",
        description: "Most B2B companies stall because they keep adding amplifiers to a broken engine. More pipeline, more tools, more headcount. None of it works until the underlying engine — ICP, stage design, GTM alignment — is actually working.",
        relatedService: { name: "GTM Operating Model Realignment", link: "/services/gtm-operating-model" },
        relatedProblem: { name: "Growth has stalled", link: "/problems/stalled-growth" },
        sections: {
            problemRecognition: `
                <p>You've done everything the playbook says. Hired more SDRs. Invested in a better CRM. Launched outbound sequences at scale. Brought in a new VP of Marketing. Added intent data. Ran a pricing experiment. The pipeline numbers are up. Activity metrics are strong. And yet the revenue isn't moving the way it should.</p>
                <p>This is the most frustrating position in B2B: high effort, visible investment, and a growth curve that refuses to respond. The natural instinct is to add more — more headcount, more tools, more process. The problem is structural, and the structure is being misread.</p>
            `,
            wrongExplanation: `
                <p>The standard explanation is execution. The team isn't working the process hard enough. The tools aren't being used correctly. The reps need more coaching. The campaigns need better copy.</p>
                <p>So the company executes harder. More activity. Better tracking. Tighter management. The effort is real. The commitment is genuine. And the results are still disappointing — because the diagnosis is wrong.</p>
                <p>The problem isn't execution. The problem is that the company is adding amplification to a broken engine.</p>
            `,
            whyItFails: `
                <p>Every B2B revenue system has two types of mechanisms: engines and amplifiers.</p>
                <p><strong>Growth engines are first-order mechanisms.</strong> They create the conditions for revenue. A well-defined ICP that sales and marketing agree on. Pipeline stage criteria that require buyer evidence, not seller activity. Messaging that maps to what buyers actually care about. A forecasting system that produces a number everyone trusts. GTM alignment where every function is optimising for the same outcome. These are the mechanisms that generate growth — not measure it, not accelerate it, but create it.</p>
                <p><strong>Growth amplifiers are second-order mechanisms.</strong> They increase the output of an existing engine. Outbound sequences amplify the reach of a validated message. Intent data amplifies the targeting of a defined ICP. AI tools amplify a sales motion that already works. Paid media amplifies demand that already exists. A partner program amplifies a value proposition that's already proven.</p>
                <p>The critical rule: amplifiers multiply the output of the system underneath them. If that system is weak, amplifiers scale the weakness. More outbound with the wrong message produces more ignored emails. More intent data pointed at the wrong ICP produces more qualified-looking leads that don't close. More AI in a broken sales motion produces faster execution of a broken motion.</p>
                <p>You cannot amplify zero.</p>
            `,
            actualConstraint: `
                <p>The real constraint, in almost every stalled B2B company, is that the growth engine hasn't been properly designed. The ICP is implicit — different people in the company have different working definitions, and nobody has forced a reconciliation. Stage criteria measure what reps did, not what buyers decided. Marketing and sales are optimising for different metrics that don't compound into each other. The forecast is a negotiation, not a signal.</p>
                <p>These are engine problems. They cannot be solved by amplification. And they're almost always invisible to the people inside the system, because everyone is measuring activity — which looks fine — rather than engine health, which is quietly degraded.</p>
                <p>The most reliable signal that you have an engine problem rather than an amplification problem: adding more of anything (headcount, tools, spend, process) produces diminishing returns, and the returns started diminishing before the current round of investment.</p>
            `,
            consequences: `
                <p>The cost of misdiagnosing an engine problem as an amplification problem is compounding. Each investment in amplification that doesn't produce expected results leads to a conclusion that the amplification wasn't the right kind, or wasn't executed well enough. So more is added. The engine gets more complex, more expensive to run, and more difficult to diagnose.</p>
                <p>Two years into this cycle, the company has a large, expensive GTM operation that is structurally incapable of producing the growth it should — because the foundational engine was never fixed, and is now buried under layers of amplification investment that nobody wants to write off.</p>
                <p>This is why stalled growth is so hard to recover from when caught late. The fix isn't to remove the amplification. It's to go back and fix the engine — but now with a team that's been optimising amplification for two years and finds it hard to see why the engine matters.</p>
            `,
            whatChanges: `
                <p>The correction sequence is fixed: engine first, amplifiers second. Always.</p>
                <p>Engine design means: defining the ICP with enough specificity that any rep can qualify a deal against it in five minutes. Rebuilding stage criteria around buyer commitment, not seller activity. Aligning marketing and sales on shared definitions of what a good opportunity looks like. Designing a forecasting system that produces a number that actually predicts the close. Getting GTM aligned so that every function's metric compounds into revenue.</p>
                <p>Only once those mechanisms are working — meaning you can observe them producing the expected output — does amplification make sense. At that point, amplification genuinely compounds. Outbound scales a validated message to more of the right buyers. AI accelerates a motion that already works. Paid media builds demand for a value proposition that's already converting.</p>
                <p>The diagnostic question is simple: when you add more of something, does growth respond proportionally? If not, you have an engine problem. The amplification is working fine — there's just nothing underneath it to amplify.</p>
            `,
            ourView: `
                <p>Most of the B2B companies we work with at the growth plateau have the same underlying pattern: strong amplification investment sitting on top of a poorly designed engine. The people inside the system can see the amplification — it's visible, measurable, and easy to point to. The engine problems are invisible, because they show up as absence rather than failure. Deals that don't close. Pipeline that doesn't convert. Forecasts that keep missing.</p>
                <p>The diagnostic starts by separating engine from amplifier. Which parts of your GTM are creating growth conditions, and which are accelerating existing conditions? Once that separation is made clearly, the constraint is almost always obvious.</p>
                <p>The rule we apply: if adding more isn't working, stop adding more. Find the engine problem first.</p>
            `
        }
    },

    "gtm-revenue-flywheel": {
        slug: "/insights/gtm-revenue-flywheel",
        relatedArticles: [
            { title: "Growth Engines vs. Growth Amplifiers", href: "/insights/growth-engine-vs-amplifier", tag: "Insight" },
            { title: "When AI Makes Your GTM Worse", href: "/insights/when-ai-makes-gtm-worse", tag: "Insight" },
            { title: "GTM Signals & AI Alignment", href: "/services/gtm-signals-and-ai", tag: "Service" }
        ],
        publishDate: "2026-03-12",
        keyTakeaway: "A GTM flywheel isn't a metaphor — it's a specific system design where each stage of the revenue cycle produces signal that improves the next. Most B2B companies have the stages but not the connections between them.",
        title: "The GTM Revenue Flywheel — How B2B Growth Compounds",
        category: "GTM Strategy",
        readTime: "7 min read",
        description: "Most B2B revenue systems run in parallel, not in sequence. Each function optimises independently. The GTM flywheel is a different design — one where every stage produces signal that improves the next cycle. Here's how it works.",
        relatedService: { name: "GTM Signals & AI Alignment", link: "/services/gtm-signals-and-ai" },
        relatedProblem: { name: "Growth has stalled", link: "/problems/stalled-growth" },
        sections: {
            problemRecognition: `
                <p>Your GTM functions are all running. Marketing is generating pipeline. Sales is working deals. Customer success is managing accounts. RevOps is building reports. The tech stack is instrumented. Everyone is executing.</p>
                <p>But the system doesn't feel like it's learning. Every quarter starts from roughly the same place. The same conversations happen. The same deals stall in the same stages. The same types of customers churn for the same reasons. There's no compounding — each cycle of execution is roughly as efficient as the last one.</p>
                <p>This is the difference between a GTM operation and a GTM flywheel. The operation runs. The flywheel learns.</p>
            `,
            wrongExplanation: `
                <p>The standard response to this is more data. More dashboards. A better BI layer. A data warehouse. A revenue intelligence platform. The assumption is that the learning problem is a visibility problem — if people could see what was happening more clearly, they'd make better decisions.</p>
                <p>This is partly right and mostly wrong. Visibility is necessary but not sufficient. The problem isn't that the data isn't available. It's that the system isn't designed to use it. Each function looks at its own data, draws its own conclusions, and optimises its own metrics. The signal produced by one stage never reaches the next stage in a form that changes behaviour.</p>
                <p>More data visibility into a disconnected system produces more detailed reporting on a system that isn't learning.</p>
            `,
            whyItFails: `
                <p>A GTM flywheel has a specific structure. It's not a diagram — it's a set of operational connections between stages that cause each cycle to improve on the last.</p>
                <p>The flywheel has four stages:</p>
                <p><strong>Stage 1 — Signal capture.</strong> Every customer interaction — sales calls, email responses, product usage, support tickets, renewal conversations — produces signal about what buyers care about, what objections arise, what value is actually being delivered, and which customer profiles produce the best outcomes. Most companies capture some of this. Few systematise it.</p>
                <p><strong>Stage 2 — Pattern recognition.</strong> Raw signal becomes insight when it's aggregated and interpreted. Which objections cluster at which stage? Which customer profiles convert fastest, renew most reliably, expand most consistently? Which messages produce responses and which are ignored? Which deal characteristics predict a slip versus a close? This is where most companies have a gap — signal is captured in silos (CRM, CS platform, product analytics) and never brought together into a coherent view.</p>
                <p><strong>Stage 3 — System update.</strong> Insight changes the operating system. ICP criteria are sharpened based on what expansion customers look like. Stage exit criteria are updated based on where deals most commonly stall. Outbound messaging is refined based on what's producing responses. Qualification criteria are tightened based on the deals most likely to close. This is the stage most companies skip — insight is produced in a report, discussed in a QBR, and then filed. The system doesn't change.</p>
                <p><strong>Stage 4 — Execution.</strong> The updated system runs. Better targeting produces better-fit pipeline. Sharper qualification produces higher-quality deals. Refined messaging produces more engaged buyers. Better stage criteria produce more accurate forecasts. Each cycle of execution is slightly more efficient than the last — not because the team worked harder, but because the system learned.</p>
                <p>The flywheel compounds because Stage 4 feeds Stage 1 again. Each cycle of execution produces new signal — richer, more specific, more useful than the last — because the system is better at capturing what matters.</p>
            `,
            actualConstraint: `
                <p>The constraint in most B2B GTM systems is Stage 3 — the system update that should happen between insight and execution. This step requires someone or something to translate pattern recognition into operational changes. It's not automatic, and in most organisations there's no defined owner for it.</p>
                <p>RevOps sees the data. Sales leadership discusses it. Marketing adjusts campaigns based on their own interpretation. But nobody owns the step of updating the ICP definition, rewriting the stage criteria, changing the qualification checklist, or revising the outbound sequence — based on what was learned in the last cycle.</p>
                <p>Without Stage 3, the flywheel becomes four disconnected stages running in parallel. Each one is executing, but none are teaching the others. The system doesn't compound.</p>
            `,
            consequences: `
                <p>A GTM operation that doesn't compound creates a particular kind of growth ceiling. Early growth comes from the insight of the founding team — who to target, how to message, what to prioritise. That insight gets baked into the initial system. As the company scales, the system runs but doesn't update. The founding team's insight slowly becomes outdated as the market shifts, the product evolves, and the customer base changes.</p>
                <p>The team works harder to maintain the same output because the system is running on insight that's two or three years old. Win rates drift down. Sales cycles get longer. Forecast accuracy declines. The response is usually to add people, tools, or process — which runs the system faster but doesn't fix the insight problem.</p>
            `,
            whatChanges: `
                <p>Building the flywheel requires making Stage 3 explicit and operational. That means defining: who owns the ICP definition and how often it's updated. What data triggers a stage criteria review. How messaging changes get tested and rolled out. Who has the authority to change the qualification checklist between quarters.</p>
                <p>It also requires a signal architecture — deciding what gets captured, where it lives, and how it flows between functions. This isn't a technology problem primarily; it's a design problem. The question is: what does sales need to know from CS to qualify better? What does marketing need to know from sales to target better? What does CS need to know from sales to retain better? Once those questions are answered, the right instrumentation usually follows naturally.</p>
                <p>AI, when introduced into a working flywheel, significantly accelerates Stages 2 and 3. Pattern recognition across large signal volumes is exactly what AI does well. Updating playbooks, surfacing deal risks, identifying ICP drift, flagging forecast anomalies — all of these become faster and more precise when AI has clean, connected signal to work with. But AI doesn't build the flywheel. It accelerates one that's already turning.</p>
            `,
            ourView: `
                <p>The flywheel model reframes a question we hear constantly: how do we make our GTM more efficient? The honest answer is that efficiency is a byproduct of a system that learns. You don't optimise your way to a compounding GTM — you design one.</p>
                <p>The diagnostic question for any B2B GTM team: what changed in your operating system last quarter as a result of what you learned the quarter before? If the answer is "not much," the flywheel isn't turning. You're running an operation, not building compounding growth.</p>
                <p>The good news: the components of the flywheel — signal, pattern, system update, execution — are almost always present in some form. They're just not connected. The diagnostic finds where the connections are broken and what it takes to close the loop.</p>
            `
        }
    },
};
export const caseStudies = {
    "fixing-the-wrong-problem": {
        slug: "/insights/case-studies/fixing-the-wrong-problem",
        title: "When Fixing the \u201cObvious\u201d Problem Made Growth Worse",
        subtitle: "A real-world example of how execution pressure compounded failure \u2014 until the underlying GTM misdiagnosis was corrected.",
        thesis: "Execution pressure compounded failure until the underlying GTM misdiagnosis was corrected.",
        description: "A diagnostic case study showing how fixing the wrong GTM problem compounded failure \u2014 and what changed once the real constraint was identified.",
        category: "Diagnostic Case Study",
        readTime: "8 min read",
        sections: {
            context: `<p>This case involved a B2B company with a mature sales organization, a functioning pipeline, and steady inbound demand. Growth had slowed, leadership felt execution quality had dropped, and teams were under pressure to "do more." There was no shortage of effort, tooling, or activity. What was missing was clarity.</p>`,
            initialBelief: `<p>Leadership believed the problem was execution drift. The prevailing assumption: <em>"We need tighter sales execution and more pipeline focus."</em> This belief drove the next set of actions.</p>`,
            whyReasonable: `<p>CRM dashboards showed pipeline volume. Sales activity levels were high. Previous growth phases had responded well to execution pressure. Nothing looked obviously broken — which made the issue harder to identify.</p>`,
            diagnosticReveal: `<p>The diagnostic surfaced a different constraint entirely. The core issue was not sales execution — it was a system-level misalignment between who the company believed it was selling to, how deals were being qualified, and how buyers were actually making decisions. The system was functioning exactly as designed. The design itself was the problem.</p>`,
            whatChanged: `<p>Instead of pushing harder on execution: qualification logic was redefined around buyer ownership, deal stages were aligned to real decision points, and teams were encouraged to exit deals earlier. Several initiatives were deliberately stopped. More effort was not the answer — better sequencing was.</p>`,
            outcome: `<p>The first visible change was not growth metrics — it was decision clarity. Late-stage surprises reduced. Leadership regained confidence in what the pipeline represented. Growth followed later, but only after the system was corrected.</p>`,
            whyMatters: `<p>When execution pressure increases without revisiting diagnosis, effort compounds the wrong behaviour, tools amplify confusion, and teams burn energy without learning. Fixing the wrong problem well still produces bad outcomes.</p>`
        },
        relatedLinks: [
            { text: "Start with a diagnostic", url: "/start-here" },
            { text: "Common symptoms", url: "/problems" }
        ]
    },
    "when-ai-created-noise-not-clarity": {
        slug: "/insights/case-studies/when-ai-created-noise-not-clarity",
        title: "When AI Increased Activity but Reduced GTM Clarity",
        subtitle: "A real example of how automation amplified confusion \u2014 until the underlying decision system was corrected.",
        thesis: "Automation amplified noise because decision logic was never defined.",
        description: "A diagnostic case study showing how AI and dashboards amplified GTM confusion instead of improving decisions \u2014 and what corrected it.",
        category: "Diagnostic Case Study",
        readTime: "7 min read",
        sections: {
            context: `<p>This case involved a B2B company that had invested heavily in RevOps tooling and AI-assisted analytics. On paper, the GTM system looked increasingly sophisticated. In practice, decision-making deteriorated.</p>`,
            initialBelief: `<p>The organization believed the issue was insufficient insight. The assumption: <em>"If we can see more, we can decide better."</em> This drove rapid expansion of tools and AI usage.</p>`,
            whyReasonable: `<p>Dashboards were technically accurate. AI surfaced large volumes of signals. Activity metrics increased across the board. From a tooling perspective, the system looked mature. But clarity did not improve.</p>`,
            diagnosticReveal: `<p>The problem was not lack of insight — it was the absence of a decision model. Signals were not tied to decisions. Metrics existed without consequence. AI amplified data that had no governing logic. AI was functioning correctly. The system it was amplifying was not.</p>`,
            whatChanged: `<p>Signals were explicitly mapped to decisions. Most dashboards were retired. Leadership defined which metrics mattered and why. AI usage was constrained to amplify only validated signals. Less data produced better judgment.</p>`,
            outcome: `<p>Leadership conversations became focused. Teams understood what signals required action. Automation supported judgment instead of replacing it. Only after this correction did AI begin to add leverage.</p>`,
            whyMatters: `<p>AI does not fix GTM systems. It magnifies them. When the underlying decision logic is weak, automation compounds confusion at scale.</p>`
        },
        relatedLinks: [
            { text: "Start with a diagnostic", url: "/start-here" },
            { text: "Common symptoms", url: "/problems" }
        ]
    }
};
