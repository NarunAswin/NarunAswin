# Task 06: Assemble Sweets Landing Page in app/page.tsx

## Status

complete

## Batch

3

## Description

Assemble all created components (`Navbar`, `Hero`, `WhyUs`, `SweetsGrid`, `Testimonials`, `Footer`) into `app/page.tsx`. This replaces the default Next.js starter page completely and delivers the finished, responsive sweets shop landing page with full dark mode support and zero runtime bundle overhead.

## Dependencies

**Depends on:** task-02-layout-and-branding.md, task-03-navbar-and-footer-components.md, task-04-hero-and-features-components.md, task-05-sweets-catalog-and-reviews-components.md
**Blocks:** None

**Context from dependencies:**
- `task-02-layout-and-branding.md` establishes metadata and root layout wrapper in `app/layout.tsx`.
- `task-03-navbar-and-footer-components.md` creates `Navbar` and `Footer` in `components/sweets/`.
- `task-04-hero-and-features-components.md` creates `Hero` and `WhyUs` in `components/sweets/`.
- `task-05-sweets-catalog-and-reviews-components.md` creates `SweetsGrid` and `Testimonials` in `components/sweets/`.

This task imports and stacks these components inside `app/page.tsx`.

## Files to Create

None

## Files to Modify

- `app/page.tsx` — Replace starter template with clean Server Component assembling all sections.

## Technical Details

### Implementation Steps

1. Open `app/page.tsx`.
2. Clear out all existing boilerplate code.
3. Import the components:
   ```tsx
   import { Navbar } from "@/components/sweets/navbar";
   import { Hero } from "@/components/sweets/hero";
   import { WhyUs } from "@/components/sweets/why-us";
   import { SweetsGrid } from "@/components/sweets/sweets-grid";
   import { Testimonials } from "@/components/sweets/testimonials";
   import { Footer } from "@/components/sweets/footer";
   ```
4. Define the default export function `Home()` returning a `<div className="min-h-screen flex flex-col bg-[#FFFDF9] dark:bg-zinc-950">` containing:
   - `<Navbar />`
   - `<main className="flex-1">`
     - `<Hero />`
     - `<WhyUs />`
     - `<SweetsGrid />`
     - `<Testimonials />`
   - `</main>`
   - `<Footer />`
5. Run `npx tsc --noEmit` and `npm run lint` to verify clean compilation.
6. Run `npm run build` to confirm the production build completes without warnings or errors.

### Code Snippets

`app/page.tsx`:
```tsx
import { Navbar } from "@/components/sweets/navbar";
import { Hero } from "@/components/sweets/hero";
import { WhyUs } from "@/components/sweets/why-us";
import { SweetsGrid } from "@/components/sweets/sweets-grid";
import { Testimonials } from "@/components/sweets/testimonials";
import { Footer } from "@/components/sweets/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFFDF9] dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <WhyUs />
        <SweetsGrid />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
```

## Tests

- `npx tsc --noEmit` — validates full project type-checking and component prop resolution.
- `npm run lint` — ensures 0 ESLint errors.
- `npm run build` — ensures the Next.js production build completes successfully.

## Acceptance Criteria

- [ ] `app/page.tsx` imports and renders `Navbar`, `Hero`, `WhyUs`, `SweetsGrid`, `Testimonials`, and `Footer`.
- [ ] No default Next.js boilerplate code remains in `app/page.tsx`.
- [ ] `npx tsc --noEmit` exits with 0 errors.
- [ ] `npm run lint` exits with 0 errors.
- [ ] `npm run build` exits with 0 errors.

