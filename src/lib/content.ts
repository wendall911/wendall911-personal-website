import { marked } from 'marked';
import { EDUCATION } from '$meta/education';
import { EXPERIENCE } from '$meta/experience';
import { INSIGHT } from '$meta/insight';
import { WRITING } from '$meta/writing';
import { INFO } from '$meta/info';

const careerFiles = import.meta.glob<string>('/src/content/career/*.md', {
    query: '?raw',
    eager: true,
    import: 'default',
});

const insightFiles = import.meta.glob<string>('/src/content/insight/*.md', {
    query: '?raw',
    eager: true,
    import: 'default',
});

const experienceFiles = import.meta.glob<string>('/src/content/experience/**/*.md', {
    query: '?raw',
    eager: true,
    import: 'default',
});

function parse(md: string): string {
    return marked.parse(md) as string;
}

export const careerHtml = parse(Object.values(careerFiles)[0] ?? '');

export const insight = INSIGHT.map((item) => ({
    ...item,
    html: parse(insightFiles[`/src/content/insight/${item.slug}.md`] ?? ''),
}));

export const experience = EXPERIENCE.map((entry) => ({
    ...entry,
    html: parse(experienceFiles[`/src/content/experience/${entry.slug}/index.md`] ?? ''),
    roles: entry.roles.map((role) => ({
        ...role,
        html: parse(experienceFiles[`/src/content/experience/${entry.slug}/${role.slug}.md`] ?? ''),
    })),
}));

export const education = EDUCATION;
export const writing = WRITING;
export const contact = INFO.contact;
