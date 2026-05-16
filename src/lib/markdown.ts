export function loadMarkdown(files: Record<string, string>, slug: string): string {
    const key = Object.keys(files).find((k) => k.includes(`/${slug}.`));
    return key ? files[key] : '';
}
