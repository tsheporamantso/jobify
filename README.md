# Jobify

Job application tracking for job hunters — keep every application, status, and stat in one place.

![Jobify landing](assets/main.svg)

## Features

- Create and edit job applications with validation
- Filter your jobs by position/company search and application status
- Track pending, interview, and declined counts at a glance
- Light / dark / system theme toggle
- Auth via Clerk — every job is scoped to its owner

## Tech stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Prisma 6** with **MongoDB**
- **Clerk** authentication
- **TanStack Query** for server-state caching
- **Tailwind CSS v4** + **shadcn/ui** (Base UI) components

## Getting started

### Prerequisites

- Node.js 20+
- MongoDB >= 8 (see `.env.example`)

### Install and run

```bash
git clone git@github.com:tsheporamantso/jobify.git
cd jobify
npm install
cp .env.example .env   # then fill in DATABASE_URL and Clerk keys
npx prisma db push     # sync schema to MongoDB
npm run dev
```

Open http://localhost:3000.

### Environment variables

| Key | Description | Required |
| --- | --- | --- |
| `DATABASE_URL` | MongoDB connection string | Yes |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk publishable key (Clerk dashboard) | Yes |
| `CLERK_SECRET_KEY` | Clerk secret key (Clerk dashboard) | Yes |

## Usage

Once running, sign in via Clerk, then:

- **Add a job** — `/add-job`
- **Browse and filter your jobs** — `/jobs`
- **View stats** — `/stats`

## Project structure

```
app/          # App Router pages (landing + dashboard route group)
components/   # feature components + shadcn/ui primitives
utils/        # server actions, shared types, nav links
lib/          # Prisma client singleton + generated client
prisma/       # Prisma schema (MongoDB)
```

## Testing

No test suite is configured yet — tests are a planned future feature.

## Deployment

Not deployed yet. Deployment to **Vercel** is planned.

## License

[MIT](LICENSE) © Gladwin Tshepo Ramantso