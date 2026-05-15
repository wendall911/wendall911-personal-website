# wendall911-personal-website — Project Context

## What This Is
Personal portfolio site for Wendall Cada. Deployed at wendallcada.com. Future content reference: https://www.hellophello.com/hi/wendallcada

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
Follows the roughness.technology layout:
- `src/content/` — site data (info.ts, links.ts)
- `src/components/` — UI components
- `src/features/` — feature modules
- `src/lib/` — shared utilities
- `src/routes/` — SvelteKit routes
- `static/` — static assets

## Status
Project scaffold complete. Stack configured and all validation gates passing (check, lint, unit tests, integration tests, build). Content and layout not yet implemented — pending decisions on site structure. Content migration from hellophello.com reference is the next phase.
