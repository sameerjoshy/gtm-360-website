import pipelineFull from '../content/case-studies/pipeline-full-revenue-flat.json';
import forecastBoard from '../content/case-studies/forecast-board-wanted-predictability.json';
import salesCycleICP from '../content/case-studies/sales-cycle-doubled-icp-drift.json';
import { caseStudies as legacyCaseStudies } from './insightsData';

export const caseStudies = {
    'pipeline-full-revenue-flat': {
        ...pipelineFull,
        slug: '/insights/case-studies/pipeline-full-revenue-flat'
    },
    'forecast-board-wanted-predictability': {
        ...forecastBoard,
        slug: '/insights/case-studies/forecast-board-wanted-predictability'
    },
    'sales-cycle-doubled-icp-drift': {
        ...salesCycleICP,
        slug: '/insights/case-studies/sales-cycle-doubled-icp-drift'
    },
    'fixing-the-wrong-problem': {
        ...legacyCaseStudies['fixing-the-wrong-problem'],
        slug: '/insights/case-studies/fixing-the-wrong-problem'
    },
    'when-ai-created-noise-not-clarity': {
        ...legacyCaseStudies['when-ai-created-noise-not-clarity'],
        slug: '/insights/case-studies/when-ai-created-noise-not-clarity'
    },
};

export const caseStudiesList = Object.entries(caseStudies).map(([key, val]) => ({ key, ...val }));
