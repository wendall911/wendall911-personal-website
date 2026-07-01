export interface WritingEntry {
    slug: string;
    title: string;
    date: string;
    tags: string[];
    summary: string;
}

export const WRITING: WritingEntry[] = [
    {
        slug: 'how-i-taught-an-ai-to-stop-lying',
        title: 'How I Taught an AI to Stop Lying (Mostly)',
        date: '2026-05-17',
        tags: [
            'ai',
            'governance',
            'open-source',
        ],
        summary: '',
    },
];
