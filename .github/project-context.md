# wendall911-personal-website — Project Context

## What This Is
Personal portfolio site for Wendall Cada. Currently a placeholder deployed at wendallcada.com. Future content reference: https://www.hellophello.com/hi/wendallcada

## Tech Stack
- SvelteKit + TypeScript
- Tailwind CSS
- pnpm

## Branch Convention
- `main` is the only branch
- No version tags — `main`/HEAD is the release; deploy from HEAD

## Deployment Model
- Deployed on a personal server via manual `git pull`
- An nginx restart is required after pulling to apply changes
- There is no CI/CD pipeline; deployment is a manual two-step: pull, then restart nginx
- README.md contains any deployment notes — read it before any release action

## Status
Currently a placeholder. Active development not yet started.
