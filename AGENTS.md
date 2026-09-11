<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Stack

- **Next.js 16.3.4** (App Router) — read `node_modules/next/dist/docs/` before using any Next.js API
- **React 19.2.8**, TypeScript strict — `@/*` path alias maps to project root
- **Tailwind CSS v4** — `@tailwindcss/postcss`, no `tailwind.config.*`; theme via `@theme` in `app/globals.css`
- **ESLint v9** — flat config in `eslint.config.mjs`
- **Prisma 6 + MongoDB** — config in `prisma.config.ts`, datasource from `DATABASE_URL` (`.env.example`)
- **Clerk** auth — `proxy.ts` middleware; server actions call `auth()` and `redirect("/")` when unauthenticated
- **TanStack Query**, Base UI, shadcn `ui/` components

## Commands

```bash
npm run dev            # dev server (localhost:3000)
npm run build          # production build
npm run lint           # eslint (flat config)
npx tsc --noEmit       # typecheck (no npm script)
npx prisma generate    # required after editing prisma/schema.prisma
npx prisma db push     # sync schema to MongoDB
```

No test runner configured. No pre-commit lint hook — only commitlint on commit-msg.

## Commit conventions

Husky runs `commitlint` on commit-msg; config in `commitlint.config.cjs` + `commitlint-parser-preset.cjs`:

- Format: `<emoji> <type>(optional scope): <description>`
- Allowed types: `feat fix docs style refactor perf test build ci chore revert hotfix init`
- Body lines must be ≤ 100 chars (`body-max-line-length` from config-conventional)
- Use present tense and explain *why*, not just *what*
- Emoji mapping lives in `.opencode/commands/commit-message.md`

## Key paths

- `app/` — App Router; `(dashboard)/` route group (add-job, jobs, stats) + `provider.tsx`
- `utils/` — server actions (`actions.ts`), shared types (`types.ts`), nav links
- `lib/` — Prisma client singleton (`prisma.ts`) and generated client (`generated/prisma`, gitignored)
- `components/` — feature components + `ui/` shadcn components; `components.json`
- `proxy.ts` — Clerk middleware

## Prisma

- Client generates into `lib/generated/prisma` (gitignored) — import from `@/lib/generated/prisma`, **not** `@prisma/client`
- MongoDB models: `String @id @default(auto()) @map("_id") @db.ObjectId`
- `postinstall` runs `prisma skills sync || exit 0`; `npm run contract:emit` also available

## Gotchas

- `package.json` sets `"type": "module"` — `.js` files are treated as ESM, so CommonJS configs (e.g. commitlint) must be `.cjs` or they crash at runtime
- Tailwind v4: no `tailwind.config.js`; theme customization goes in `app/globals.css` via `@theme`
- Next.js 16 docs are local — check `node_modules/next/dist/docs/` before writing routes, layouts, or API code
- `.env` is gitignored — copy `.env.example` before running Prisma; requires MongoDB >= 8
- `.github/workflows/opencode.yml` runs an opencode job on PR/issue comments starting with `/oc` or `/opencode`