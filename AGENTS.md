<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Stack

- **Next.js 16.3.4** (App Router) — read `node_modules/next/dist/docs/` before using any Next.js API
- **React 19.2.8**
- **Tailwind CSS v4** — uses `@tailwindcss/postcss`, no `tailwind.config.*` file; all config in CSS via `@theme`
- **TypeScript** (strict mode) — `@/*` path alias maps to project root
- **ESLint v9** — flat config in `eslint.config.mjs`, uses `eslint-config-next` presets

## Commands

```bash
npm run dev        # start dev server (localhost:3000)
npm run build      # production build
npm run lint       # eslint
```

No test runner configured yet. No typecheck script — use `npx tsc --noEmit` for type checking.

## Commit conventions

Husky + commitlint enforce conventional commits with emoji prefix:

```
<emoji> <type>(optional scope): <description>
```

Allowed types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`, `hotfix`, `init`

Config: `commitlint.config.js` + `commitlint-parser-preset.js`

## Key paths

- `app/` — App Router pages and layouts (currently scaffold only)
- `public/` — static assets
- `next.config.ts` — Next.js config (currently empty)
- `postcss.config.mjs` — PostCSS with `@tailwindcss/postcss`

## Gotchas

- **Tailwind v4 has no `tailwind.config.js`** — theme customization goes in `app/globals.css` using `@theme` directive
- **ESLint uses flat config** — no `.eslintrc.*` files; config is in `eslint.config.mjs`
- **Next.js 16 docs are local** — always check `node_modules/next/dist/docs/` before writing route handlers, layouts, or using Next.js APIs
