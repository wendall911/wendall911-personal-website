import { error } from '@sveltejs/kit';
import { marked } from 'marked';
import { WRITING } from '$meta/writing';
import type { PageLoad } from './$types';

const files = import.meta.glob<string>('/src/content/writing/*.md', {
    query: '?raw',
    eager: true,
    import: 'default',
});

export const load: PageLoad = ({ params }) => {
    const entry = WRITING.find((w) => w.slug === params.slug);
    const raw = files[`/src/content/writing/${params.slug}.md`];

    if (!entry || !raw) {
        error(404, 'Writing not found');
    }

    return {
        entry,
        html: marked.parse(raw) as string,
    };
};
