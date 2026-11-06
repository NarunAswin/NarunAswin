# GEO Methodology Reference

The evidence behind the rules in SKILL.md, and the full technical checklist for
`audit` mode. Read this once per project before the first `audit` or `content`
run; the summary in SKILL.md is enough for later runs.

## Table of contents

1. [The evidence](#the-evidence)
2. [Technical checklist](#technical-checklist)
3. [Sitemap / robots by framework](#sitemap--robots-by-framework)
4. [JSON-LD schema types](#json-ld-schema-types)
5. [AI-crawler allowlist](#ai-crawler-allowlist)

---

## The evidence

**Answer-first placement.** Research on what generative engines (AI Overviews,
ChatGPT search, Perplexity) actually quote found citations skew heavily toward
early-page content — a large share of cited passages come from roughly the first
third of the page. Practical takeaway: don't bury the direct answer under a long
intro, definitions section, or history lesson. State it, then elaborate.

**Statistics and quotable lines.** Studies analyzing what content gets cited by
AI answer engines (Princeton's GEO paper; independent studies from SEO tooling
vendors) found that adding concrete statistics, direct quotes, and citations to
sources measurably increases the odds a passage gets pulled into an AI-generated
answer — reported lifts in the 30–40%+ range for visibility, depending on the
study and baseline. This is the single highest-leverage on-page lever available.

**Extractable structure.** AI engines assemble answers from passages, not whole
pages. Content that mirrors how people actually ask ("How do I…", "What is…",
"X vs Y") in H2/H3 headings, uses genuine Q&A blocks, comparison tables, and a
TL;DR/summary block gets extracted more cleanly than prose that requires reading
top-to-bottom to make sense.

**Self-contained passages.** Because retrieval is passage-level, a section that
depends on context from three paragraphs earlier ("as mentioned above...") reads
as incomplete when lifted alone — which is exactly how it will be consumed.

**Freshness signals.** Visible author, published date, and last-updated date are
both a trust signal to AI crawlers and a genuine correctness signal — stale
numbers get corrected by AI engines using other sources instead. Re-verify and
refresh anything older than about 6 months, especially anything with a number
in it.

**Structured Q&A + schema.** `FAQPage` JSON-LD gives engines an unambiguous,
pre-parsed question/answer pair to lift verbatim — lower effort for the engine
than extracting an answer from prose, which matters when the engine is choosing
between two similarly good sources.

**What has weak or no proven effect (don't over-invest):** `llms.txt` files and
generic schema markup are commonly recommended but have thin independent
evidence of directly causing AI-citation lift — treat them as cheap hygiene
(an hour of work, do it once) rather than a strategy. The actual strategy is the
content quality levers above, plus off-site signals (third-party mentions in
roundups/directories/forums/video) and fast technical indexing.

---

## Technical checklist

Run through all of these for `audit` mode; report failures with file:line.

1. **Sitemap** includes every indexable page with an honest `lastModified`;
   excludes anything robots disallows; no auth-gated URLs. See framework map below.
2. **Robots** disallows app/API/auth routes; explicitly allows AI-answer-engine
   bots (see allowlist below) unless the user has a specific reason to block
   AI training/retrieval (rare — confirm before ever adding a disallow for these).
3. Every marketing/content page has: unique `title` (not duplicating a sitewide
   template), unique `description` (~140–160 chars), a canonical URL, and
   OG + Twitter/X card metadata.
4. JSON-LD present and valid — see schema-type table below.
5. `llms.txt` in the site root — a markdown index of key pages with one-line
   descriptions. Low proven impact; still a cheap one-time hedge (see evidence
   section — don't over-invest beyond the first pass).
6. All public content is server-rendered or otherwise present in the initial
   HTML response — many AI crawlers don't execute JavaScript, so client-only
   marketing copy is invisible to them.
7. **Live checks**: fetch `/robots.txt`, `/sitemap.xml` (or the framework's
   equivalent), `/llms.txt`, and the homepage on the live domain — confirm they
   match the repo and return 200; spot-check that sitemap URLs resolve.
8. Heading hygiene: exactly one H1 per page; H2s phrased as the questions the
   page targets, where the page targets a specific query.
9. Internal linking: every content page links to its category/pillar page and
   vice versa; pillar pages link out to their spokes.
10. Core Web Vitals sanity: no oversized unoptimized images (use the framework's
    image component if it has one), no obvious layout shift from late-loading
    content, no render-blocking resources that are trivially deferrable.

---

## Sitemap / robots by framework

Confirm the actual files in the repo before assuming — frameworks change these
mechanisms across versions.

| Framework | Sitemap | Robots | Metadata |
|---|---|---|---|
| Next.js (App Router) | `app/sitemap.ts` (dynamic) or `public/sitemap.xml` | `app/robots.ts` or `public/robots.txt` | `generateMetadata` / static `metadata` export per route; root `metadataBase` in root layout |
| Astro | `@astrojs/sitemap` integration (generates at build) or manual `public/sitemap.xml` | `public/robots.txt` | Per-page `<head>` in `.astro` files, or a shared `<SEO>` component |
| Remix / React Router | A resource route returning XML (e.g. `app/routes/sitemap[.]xml.tsx`) | A resource route or `public/robots.txt` | `meta` export per route |
| SvelteKit | `src/routes/sitemap.xml/+server.ts` | `static/robots.txt` | `<svelte:head>` per page |
| Plain static site | Hand-maintained or generated `sitemap.xml` at the root | `robots.txt` at the root | Per-HTML-file `<head>` tags |
| WordPress / Webflow / other CMS | Usually auto-generated by an SEO plugin (Yoast, RankMath) or the platform itself | Same — check the plugin/platform settings, don't hand-edit generated files | Plugin-managed fields per page/post |

If none of these match, ask the user rather than guessing — inventing a
mechanism that doesn't fit the framework produces code that won't build.

## JSON-LD schema types

| Page type | Schema | Notes |
|---|---|---|
| Every page (sitewide, once) | `Organization` | Name, logo, sameAs (social profiles) |
| Homepage / pricing (for a product) | `SoftwareApplication` + `Offer` | Only if the product genuinely is software with a price; don't force this onto a services business |
| Any page with a real FAQ | `FAQPage` | Must match the visible on-page Q&A exactly — don't add schema for content that isn't rendered |
| Blog / article content | `Article` + `author` + `datePublished` + `dateModified` | Keep `dateModified` in sync with the visible "last updated" date |
| Blog / article content | `BreadcrumbList` | Only where there's a real breadcrumb trail |
| Ranked list/roundup content | `ItemList` | For "best X" style pages |

Sanitize any inline JSON-LD script against injection if the data includes
user-controlled or dynamic strings (e.g. `JSON.stringify(data).replace(/</g,
"\\u003c")` in a Node/JS context) — this is standard defensive practice for
inlining JSON into HTML, not framework-specific.

## AI-crawler allowlist

Bot user-agents to explicitly allow in `robots.txt` (or the framework's robots
mechanism) so AI answer engines can retrieve and potentially cite the content —
disallowing these is usually the opposite of what a project pursuing AI-search
visibility wants:

- `OAI-SearchBot`, `ChatGPT-User`, `GPTBot` (OpenAI)
- `ClaudeBot`, `Claude-SearchBot`, `Claude-User` (Anthropic)
- `PerplexityBot`, `Perplexity-User` (Perplexity)
- `Bingbot`, `Google-Extended` (Microsoft/Google AI training + retrieval)
- `CCBot` (Common Crawl — feeds many downstream AI training sets)

If the user has an explicit reason to keep content out of AI training data
(e.g. a paywalled or licensed-content business model), confirm before adding
these — the default recommendation is "allow all" for anyone wanting AI-search
visibility, but that's not universal.
