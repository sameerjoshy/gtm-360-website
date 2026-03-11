import pipelineFull from '../content/case-studies/pipeline-full-revenue-flat.json';
import forecastBoard from '../content/case-studies/forecast-board-wanted-predictability.json';
import salesCycleICP from '../content/case-studies/sales-cycle-doubled-icp-drift.json';

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
};

// Ordered list for display
export const caseStudiesList = [
    { slug: 'pipeline-full-revenue-flat', ...pipelineFull },
    { slug: 'forecast-board-wanted-predictability', ...forecastBoard },
    { slug: 'sales-cycle-doubled-icp-drift', ...salesCycleICP },
];
