# Investigation

## Source
- Source Type: plain text / user selection
- Ticket ID / Tracker / URL: None
- Source Files / Links: None
- Title: Add an API route with Database integration (Prisma / Drizzle)
- Type of Work: Feature / Architecture
- Priority: Medium
- Branch: feat/api-route-db-integration
- Base Branch: master
- Base Commit: f7a3af4edd7fdc8d3371db2d54c8d683723f9a53

## Business Context
The application (`benjamin_project`) is a fresh Next.js 16 app built with React 19, TypeScript, and Tailwind CSS v4, initialized via `create-next-app`. Currently, it functions purely as a frontend shell without persistent backend data storage or API endpoints. Adding an API route and database integration establishes the baseline backend capabilities needed to support dynamic features (CRUD operations, state persistence, and external service communication).

## Problem Statement
The application currently lacks backend data persistence, an ORM/database client, and API routes. Any feature requiring persisted state (e.g. user records, posts, tasks, inventory) cannot currently be supported without integrating an ORM and defining API Route Handlers.

## Expected Behaviour
- Provide standard Next.js App Router Route Handlers (`app/api/.../route.ts`) responding to HTTP requests (`GET`, `POST`, etc.) using standard Web Request/Response (`NextResponse`) APIs.
- Establish a singleton database client connection (Prisma Client or Drizzle DB instance) configured via environment variables (e.g. `DATABASE_URL` in `.env.local`).
- Define a database schema and initial migration mechanism (Prisma schema + migration or Drizzle schema + migrations).
- Implement structured error handling, HTTP status codes, and JSON response formatting.

## Current Behaviour
- The `app/` directory contains only `favicon.ico`, `globals.css`, `layout.tsx`, and `page.tsx`.
- No `app/api/` directory exists, and requesting any `/api/*` endpoint returns a 404 response.
- No database packages are installed in `package.json` (`next`, `react`, `react-dom`, `@tailwindcss/turbopack`, `typescript`, `eslint`).
- No `.env` or `.env.local` files exist in the repository root.

## Relevant Repositories
- `benjamin_project` (Single repo layout under `c:\exmaple_for_benjamin_project\benjamin_project`).

## Relevant Files / Modules
- `package.json` — dependency declarations and npm scripts.
- `app/` — Next.js 16 App Router root.
- `tsconfig.json` — path aliases (`@/*` -> `./*`).
- `.gitignore` — ensures `.env*.local` and SQLite files (`*.db`, `*.sqlite`) remain untracked.
- `.spec-driven.yml` — pipeline workflow configuration.

## Existing Architecture
- **Framework**: Next.js 16.4.5 (App Router).
- **React**: React 19.3.0.
- **Styling**: Tailwind CSS v4 with `@tailwindcss/turbopack`.
- **Language**: TypeScript 5.
- **Bundler**: Turbopack (`next dev`).

## Current Flow
```
Browser Request (/) ──► Next.js App Router ──► app/layout.tsx + app/page.tsx ──► HTML/RSC Stream
Browser Request (/api/*) ──► Next.js App Router ──► 404 Not Found
```

## Data Flow
```
HTTP Client ──► Route Handler (app/api/items/route.ts)
                     │
                     ▼
           Request Parsing & Validation (Zod)
                     │
                     ▼
           Database Client / Data Access Layer (lib/db.ts)
                     │
                     ▼
           Database (SQLite / PostgreSQL)
                     │
                     ▼
           JSON Response (NextResponse.json)
```

## Root Cause
*Not applicable* (Feature / Greenfield architecture).

## Evidence
### Verified
- `next` version is `16.4.5` and `react` is `19.3.0` (`package.json`).
- Next.js documentation in `node_modules/next/dist/docs/01-app/01-getting-started/15-route-handlers.md` confirms `app/api/.../route.ts` is the supported Route Handler convention for `GET`, `POST`, `PUT`, `DELETE`.
- Next.js data security guide in `node_modules/next/dist/docs/01-app/02-guides/data-security.md` confirms recommending a dedicated Data Access Layer (`lib/` or `dal/`) rather than ad-hoc queries.
- `.gitignore` contains rules for `.env*.local` and build outputs.

### Inferred
- SQLite (`file:./dev.db`) is the optimal zero-dependency engine for local development and prototyping before switching to a hosted PostgreSQL/MySQL instance.

### Unknown
- Target production database engine (SQLite vs PostgreSQL/MySQL/Supabase).
- Preferred ORM: Prisma vs Drizzle.
- Specific domain entities desired (e.g. `Item`, `Task`, `User`).

### Assumptions
- A starter domain entity (e.g., `Item` with `id`, `title`, `description`, `createdAt`) provides an immediate, verifiable end-to-end demonstration.

## Required Change Surface
- `package.json`: Add ORM dependencies (`prisma` / `@prisma/client` OR `drizzle-orm` / `drizzle-kit`).
- Database client singleton: `lib/db.ts` (prevents connection exhaustion during Turbopack hot reloading).
- Schema definition: `prisma/schema.prisma` or `db/schema.ts`.
- Environment configuration: `.env.example` and `.env.local` containing `DATABASE_URL`.
- Route Handler: `app/api/items/route.ts` implementing `GET` and `POST`.

## Supporting Changes
- Add database management scripts to `package.json` (e.g. `"db:migrate"`, `"db:generate"`, `"db:studio"`).
- Update `.gitignore` to include local database files (`*.db`, `*.db-journal`, `*.sqlite`).

## Optional Changes
- Add request validation schema with `zod`.
- Add a sample frontend component on `app/page.tsx` displaying the fetched items and a form to create one.

## Out of Scope
- User authentication and session management.
- Production cloud database provisioning (Supabase, Neon, AWS RDS).
- CI/CD migration automation.

## Dependencies
- **Option A (Prisma)**: `@prisma/client` (production), `prisma` (devDependencies).
- **Option B (Drizzle)**: `drizzle-orm`, `@libsql/client` (production), `drizzle-kit` (devDependencies).
- **Validation**: `zod` (recommended).

## Risks
- **Hot-Reload Connection Exhaustion**: In development mode, `next dev` hot reloads can create redundant connection pools.
  - *Mitigation*: Cache the client instance on `globalThis` in `lib/db.ts`.
- **Turbopack C++ Addon Compatibility**: Native drivers (`better-sqlite3`) may encounter build/linking friction on Windows environments.
  - *Mitigation*: Use pure JavaScript/WASM drivers (like `@libsql/client` or Prisma engine).

## Security Considerations
- **Environment Separation**: `DATABASE_URL` must remain in `.env.local` and never be prefixed with `NEXT_PUBLIC_`.
- **Error Sanitization**: Catch database errors inside route handlers and avoid exposing raw database error strings to API clients.
- **Input Sanitization**: Validate incoming payloads before ORM persistence.

## Performance / Reliability Considerations
- Explicitly mark Route Handlers dynamic (`export const dynamic = 'force-dynamic'`) if caching behavior should be bypassed for real-time data.
- Ensure proper database indexing on queried fields (`id`, `createdAt`).

## Testing Context
- No test framework is currently configured (`package.json` has no test script).
- Route Handlers can be verified using `curl` / `fetch` commands against `http://localhost:3000/api/items`.

## Edge Cases
- Malformed JSON body in `POST` requests handled gracefully with `400 Bad Request`.
- Database file or directory not yet initialized before first request.
- Concurrent read/write conflicts on SQLite (mitigated by WAL mode).

## Additional Context
### Business Decisions
- Decision on ORM preference: Prisma vs Drizzle.
- Decision on domain entity model: Generic `Item`/`Task` vs a specific application domain.

### Technical Decisions
- Use App Router Route Handlers (`app/api/.../route.ts`) to provide standard REST endpoints.
- Store database client in a singleton module under `lib/`.

### Potential Requirements
- Seed script to populate initial sample records.

### Proposed Solutions Discussed
- **Prisma**: Declarative schema, auto-generated TypeScript types, and built-in GUI (`npx prisma studio`).
- **Drizzle**: Lightweight, SQL-centric syntax, zero-overhead migrations.

### Open Questions
1. Do you prefer **Prisma** or **Drizzle** for the ORM?
2. Is **SQLite** (`file:./dev.db`) preferred for immediate local development?

### Conflicts / Discrepancies
None.

## Recommended Implementation Direction
1. Setup **Prisma with SQLite** for local zero-config setup (or Drizzle if minimal footprint is preferred).
2. Configure `lib/db.ts` with `globalThis` connection caching.
3. Define `.env.example` and create `.env.local` with `DATABASE_URL="file:./dev.db"`.
4. Create an `Item` model (`id`, `title`, `description`, `createdAt`).
5. Run the initial migration to generate the client and database.
6. Create `app/api/items/route.ts` with `GET` (fetch items) and `POST` (create item).
7. Add npm scripts (`db:generate`, `db:push`, `db:studio`) to `package.json`.

## References
- Next.js Route Handlers: `benjamin_project/node_modules/next/dist/docs/01-app/01-getting-started/15-route-handlers.md`
- Next.js Data Security Guide: `benjamin_project/node_modules/next/dist/docs/01-app/02-guides/data-security.md`
- Prisma Client Dev Best Practices: `https://www.prisma.io/docs/guides/other/troubleshooting-orm/help-articles/nextjs-prisma-client-dev-practices`

