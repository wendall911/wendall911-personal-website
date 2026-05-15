# wendall911-personal-website

Personal website for Wendall Cada. Deployed at wendallcada.com.

## Install dependencies

```bash
pnpm install
```

## Why pnpm?

This project uses [pnpm](https://pnpm.io/) for faster, more efficient dependency management. If you don't have pnpm installed, run:

```bash
npm install -g pnpm
```

All npm/yarn commands can be replaced with their pnpm equivalents (e.g., `pnpm run dev`, `pnpm run build`).

## Development

```bash
pnpm run dev
```

## Pre-publishing

```bash
pnpm run preflight:release  # validates dependencies, lints, tests, builds
pnpm run build              # builds site
```

## Deployment

Deployment is manual. After changes are committed and pushed to main:

1. On the server: `git pull`
2. Restart nginx: `sudo systemctl restart nginx`

There is no CI/CD pipeline. Commit `pnpm-lock.yaml` with any dependency changes.
