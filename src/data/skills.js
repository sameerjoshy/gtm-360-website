import snapshot from './skills.snapshot.json';

export const SKILLS = snapshot.skills;
export const SKILL_DOMAINS = snapshot.domains;
export const SKILL_COUNT = snapshot.count;

export const SKILL_SLUGS = new Set(SKILLS.map((s) => s.slug));

export const getSkill = (slug) => SKILLS.find((s) => s.slug === slug);

export const skillsByDomain = () =>
    SKILL_DOMAINS.map((d) => ({
        ...d,
        skills: SKILLS.filter((s) => s.domain === d.id).sort((a, b) => a.name.localeCompare(b.name)),
    })).filter((d) => d.skills.length);
