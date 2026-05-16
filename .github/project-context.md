# wendall911-personal-website — Project Context

## What This Is
A professional narrative platform for Wendall Cada. Deployed at wendallcada.com.

This site is not a standard portfolio. It serves as the source-of-truth narrative that feeds three delivery channels:
- **This site** — the full story, with context and depth
- **LinkedIn** — summarized from site content
- **PDF resume** — distilled from site content for direct delivery

The site's purpose is to communicate senior engineering judgment to technically literate hiring decision-makers who may otherwise misread opinionated, well-reasoned choices as inflexibility or unfamiliarity. See `docs/engineering-narrative.md` for full context on why this framing matters.

## Editorial Principle
Every content entry should communicate the *why* alongside the *what*. Outcomes alone (built X, grew to $Y) read as a résumé. Decisions with context (chose X over Y because Z, solved a problem others said was impossible) demonstrate judgment. The site's job is to show judgment, not list accomplishments.

## Tech Stack
- SvelteKit + TypeScript
- Tailwind CSS v4
- @sveltejs/adapter-static (static site output)
- pnpm
- Playwright (system Chromium at /usr/bin/chromium-browser)

## Branch Convention
- `main` is the only branch
- No version tags — `main`/HEAD is the release; deploy from HEAD

## Deployment Model
- Deployed on a personal server via manual `git pull`
- An nginx restart is required after pulling to apply changes
- There is no CI/CD pipeline; deployment is a manual two-step: pull, then restart nginx
- README.md contains deployment notes — read it before any release action

## Project Structure
Hybrid content architecture — parallel trees:
- `src/content/` — markdown only, GitHub UI editable (CMS tree)
  - `career/main.md` — career accomplishments prose
  - `experience/<slug>.md` — one file per employer, prose narrative
  - `education/<slug>.md` — placeholder files (no prose yet)
  - `insight/01-04.md` — insight Q&A prose, pure body text (no frontmatter)
- `src/meta/` — TypeScript only, developer-maintained (data tree)
  - `experience.ts` — typed metadata: slug, company, url, logo, dates, roles[]
  - `education.ts` — typed metadata: slug, institution, logo, program, degree, dates
  - `insight.ts` — typed metadata: slug, title, order
  - `info.ts` — METADATA and INFO (site title, contact)
  - `links.ts` — NAVIGATION array
- `src/components/` — UI components
- `src/features/` — feature modules
- `src/lib/` — shared utilities (includes markdown.ts loader)
- `src/routes/` — SvelteKit routes
- `static/logos/` — institution/company logos (placeholder paths in education.ts)

## Aliases
- `$content` → `src/content`
- `$meta` → `src/meta`
- `$comp`, `$ui`, `$lib`, `$features` — as before

## Content Loading Pattern
Markdown files are loaded via `import.meta.glob('.../*.md', { eager: true, query: '?raw' })`.
`src/lib/markdown.ts` exports `loadMarkdown(files, slug)` to join glob results to metadata entries by slug.
No frontmatter in any markdown file — titles and metadata live in `src/meta/`.

## Status
Content data import complete. All validation gates passing (check, lint). No routes or components built yet — site renders a placeholder home page only. Next phase: design and implement routes/components to render the imported content.
