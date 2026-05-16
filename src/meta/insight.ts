export interface InsightEntry {
    slug: string;
    title: string;
    order: number;
}

export const INSIGHT: InsightEntry[] = [
    { slug: '01', title: "What's your Story?", order: 1 },
    {
        slug: '02',
        title: "What is the one thing that should be taught in school that isn't already?",
        order: 2,
    },
    { slug: '03', title: 'Why did I choose this image background?', order: 3 },
    {
        slug: '04',
        title: "What do you think is missing in today's business environment?",
        order: 4,
    },
];
