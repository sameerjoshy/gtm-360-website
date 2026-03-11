import pipelineFull from '../content/case-studies/pipeline-full-revenue-flat.json';
import forecastBoard from '../content/case-studies/forecast-board-wanted-predictability.json';
import salesCycleICP from '../content/case-studies/sales-cycle-doubled-icp-drift.json';
import { caseStudies as legacyCaseStudies } from './insightsData';

export const caseStudies = {
    'pipeline-full-revenue-flat': {
        ...pipelineFull,
        slug: '/insights/case-studies/pipeline-full-revenue-flat',
        relatedLinks: [
            { label: "The Stage Definition Problem Nobody Talks About", href: "/insights/stage-definition-problem" },
            { label: "Pipeline Quality & Win Rate service", href: "/services/pipeline-quality" },
            { label: "B2B Sales Consulting", href: "/b2b-sales-consulting" }
        ],
    },
    'forecast-board-wanted-predictability': {
        ...forecastBoard,
        slug: '/insights/case-studies/forecast-board-wanted-predictability',
        relatedLinks: [
            { label: "Why Forecasts Decay Over Time", href: "/insights/forecast-decay" },
            { label: "Forecasting & Revenue Governance service", href: "/services/forecasting-governance" },
            { label: "Series B GTM Strategy", href: "/series-b-gtm-strategy" }
        ],
    },
    'sales-cycle-doubled-icp-drift': {
        ...salesCycleICP,
        slug: '/insights/case-studies/sales-cycle-doubled-icp-drift',
        relatedLinks: [
            { label: "ICP Drift — The Silent Revenue Killer", href: "/insights/icp-drift" },
            { label: "Pipeline Quality & Win Rate service", href: "/services/pipeline-quality" },
            { label: "B2B Sales Consulting", href: "/b2b-sales-consulting" }
        ],
    },
    'fixing-the-wrong-problem': {
        ...legacyCaseStudies['fixing-the-wrong-problem'],
        slug: '/insights/case-studies/fixing-the-wrong-problem',
        relatedLinks: [
            { label: "The Hidden Cost of Solving the Wrong Problem", href: "/insights/solving-wrong-problem" },
            { label: "GTM Operating Model Realignment", href: "/services/gtm-operating-model" },
            { label: "GTM Consulting overview", href: "/gtm-consulting" }
        ],
    },
    'when-ai-created-noise-not-clarity': {
        ...legacyCaseStudies['when-ai-created-noise-not-clarity'],
        slug: '/insights/case-studies/when-ai-created-noise-not-clarity',
        relatedLinks: [
            { label: "When AI Makes Your GTM Worse", href: "/insights/when-ai-makes-gtm-worse" },
            { label: "GTM Signals & AI Alignment service", href: "/services/gtm-signals-and-ai" },
            { label: "B2B Sales Consulting", href: "/b2b-sales-consulting" }
        ],
    },
};

export const caseStudiesList = Object.entries(caseStudies).map(([key, val]) => ({ key, ...val }));
