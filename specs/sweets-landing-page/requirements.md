# Requirements: Sweets Shop Landing Page

## Summary

The goal of this feature is to build a vibrant, inviting, and modern landing page for an artisanal sweets and confections shop named **"Sweet Delights"** (or customizable sweets brand). The landing page will replace the default Next.js starter page in `app/page.tsx`.

The page will showcase freshly prepared traditional and gourmet sweets, establish brand trust through key quality highlights (pure ghee, natural ingredients, same-day freshness), display product cards with pricing and badges (Bestseller, Traditional, Chef's Special), and provide effortless ordering calls to action.

The design utilizes a warm confectionary color palette (rose, amber, gold, warm cream, and dark chocolate tones) fully compatible with Tailwind CSS v4 and dark mode, implemented with high-performance React 19 Server Components.

## Goals

- Create an enticing, appetizing landing page specifically tailored for a sweets confectionary store.
- Structure modular, reusable components under `components/sweets/`:
  - `Navbar`: Sticky navigation with shop branding, links, and quick order CTA.
  - `Hero`: Warm headline, appetizing subheading, primary CTA buttons ("Explore Sweets", "Gift Boxes"), and quick highlight badges.
  - `WhyUs`: 4 key value pillars (100% Pure Ghee & Fresh Ingredients, Handcrafted Traditional Recipes, Same-Day Dispatch, Custom Gift Packaging).
  - `SweetsGrid`: Filterable/categorized sweets showcase (Traditional, Milk Sweets, Dry Fruit Sweets, Festive Boxes) with prices and tags.
  - `Testimonials`: Customer reviews and star ratings.
  - `Footer`: Opening hours, address, phone contact, social links, and newsletter signup.
- Maintain a structured data source in `lib/sweets-data.ts` for easy customization.
- Update `app/layout.tsx` metadata with custom sweets shop branding.
- Ensure 100% responsive design across mobile, tablet, and desktop viewports.
- Maintain zero runtime client-side bundle bloat by using Server Components by default.

## Non-Goals

- Complex e-commerce cart/checkout flow or online payment processing (Stripe/Razorpay) in this phase.
- Backend database integration (covered in a separate feature).
- User authentication and customer accounts.

## Acceptance Criteria

- [ ] `lib/sweets-data.ts` provides structured TypeScript data for sweets, categories, value props, and customer testimonials.
- [ ] `app/layout.tsx` defines metadata for "Sweet Delights — Handcrafted Sweets & Confections".
- [ ] `components/sweets/navbar.tsx` renders brand identity and responsive navigation links.
- [ ] `components/sweets/hero.tsx` renders hero headline, call-to-action buttons, and trust badges.
- [ ] `components/sweets/why-us.tsx` displays value proposition cards.
- [ ] `components/sweets/sweets-grid.tsx` displays sweet items with names, descriptions, prices, and badges.
- [ ] `components/sweets/testimonials.tsx` displays customer reviews with 5-star ratings.
- [ ] `components/sweets/footer.tsx` displays store hours, location, and contact information.
- [ ] `app/page.tsx` aggregates all sections seamlessly with smooth scrolling.
- [ ] `npx tsc --noEmit` and `npm run lint` pass with 0 errors or warnings.
- [ ] `npm run build` succeeds cleanly.

## Assumptions

- Tailwind CSS v4 is configured and working via `app/globals.css`.
- High-quality SVG icons and visual placeholders can be rendered using inline SVGs with Tailwind styling without third-party icon libraries.

## Technical Constraints

- **React 19 Server Components**: Components should be Server Components by default without `'use client'` unless interactive client state is required.
- **Tailwind CSS v4**: Use warm semantic utility classes (amber, rose, orange, zinc) supporting both light and dark modes.
- **Strict TypeScript**: All data types and props must have explicit TypeScript interfaces.

