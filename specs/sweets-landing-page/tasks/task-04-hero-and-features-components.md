# Task 04: Create Hero and Why-Us Features Components

## Status

pending

## Batch

2

## Description

Create the hero introduction section (`components/sweets/hero.tsx`) and the value proposition / features section (`components/sweets/why-us.tsx`). The Hero section features a warm, inviting headline, confectionery tagline, badges (e.g. 100% Pure Ghee, Artisanal Craft), primary CTAs ("Explore Menu", "Custom Gift Hampers"), and a showcase card with customer rating. The WhyUs section renders the 4 core pillars of quality (Purity, Heritage Recipes, Daily Freshness, Luxury Packaging).

## Dependencies

**Depends on:** task-01-sweets-data-and-types.md
**Blocks:** task-06-assemble-sweets-page.md

**Context from dependencies:** `task-01-sweets-data-and-types.md` creates `lib/sweets-data.ts`, which exports `VALUE_PILLARS` and `SHOP_INFO`. This task imports those definitions to render value proposition cards and headlines.

## Files to Create

- `components/sweets/hero.tsx` — Hero headline, appetizing intro, call to actions, and trust badges.
- `components/sweets/why-us.tsx` — Grid of 4 value pillars with icons and explanations.

## Files to Modify

None

## Technical Details

### Implementation Steps

1. Create `components/sweets/hero.tsx`:
   - Warm background gradient (`bg-gradient-to-b from-amber-50/80 via-orange-50/40 to-transparent dark:from-zinc-900/60 dark:via-zinc-950/20 dark:to-transparent`).
   - Top pill badge: "✨ Authentic Handcrafted Mithai & Confections".
   - Large serif headline emphasizing freshness and tradition: "Taste the Purest Tradition of Handcrafted Sweets".
   - Descriptive paragraph highlighting pure desi ghee, organic saffron, and melt-in-mouth textures.
   - Dual Call to Action buttons: "Explore Our Sweets" (anchoring to `#catalog`) and "Festive Gift Boxes" (anchoring to `#catalog`).
   - Stat / Trust badges: "50+ Artisanal Sweets", "4.9/5 Rating", "100% Desi Ghee Guarantee".
2. Create `components/sweets/why-us.tsx`:
   - Import `VALUE_PILLARS` from `@/lib/sweets-data`.
   - Render 4 responsive cards (`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6`).
   - Each card displays an icon container with warm amber styling, bold title, and descriptive copy.

### Code Snippets

`components/sweets/hero.tsx`:
```tsx
import Link from "next/link";
import { SHOP_INFO } from "@/lib/sweets-data";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-28 bg-gradient-to-b from-amber-100/60 via-orange-50/30 to-transparent dark:from-zinc-900/50 dark:via-zinc-950 dark:to-transparent">
      {/* Decorative background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-400/10 dark:bg-amber-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 dark:bg-amber-950/80 border border-amber-300 dark:border-amber-800 text-amber-900 dark:text-amber-200 text-xs sm:text-sm font-medium mb-8 shadow-sm">
          <span>✨</span> Authentic Handcrafted Sweets & Festive Hampers
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-extrabold text-amber-950 dark:text-amber-50 tracking-tight leading-[1.15] max-w-4xl mx-auto">
          Taste the Purest Tradition of{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-600 to-rose-600">
            Handcrafted Sweets
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg sm:text-xl text-zinc-700 dark:text-zinc-300 max-w-2xl mx-auto leading-relaxed">
          {SHOP_INFO.tagline}. Handcrafted every morning with zero preservatives, organic saffron, and rich California nuts.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
          <a
            href="#catalog"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-white bg-gradient-to-r from-amber-600 via-orange-600 to-rose-600 hover:from-amber-700 hover:to-orange-700 shadow-xl shadow-orange-600/25 hover:shadow-2xl hover:scale-[1.02] transition-all"
          >
            Explore Sweets Menu <span>➔</span>
          </a>
          <a
            href="#why-us"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-semibold text-amber-950 dark:text-amber-200 bg-white dark:bg-zinc-900 border border-amber-200 dark:border-zinc-800 hover:bg-amber-50 dark:hover:bg-zinc-800 shadow-sm transition-all"
          >
            Why Choose Us
          </a>
        </div>

        {/* Trust Stats Bar */}
        <div className="mt-16 pt-8 border-t border-amber-200/60 dark:border-zinc-800/80 max-w-3xl mx-auto grid grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-900 dark:text-amber-100 font-serif">50+</div>
            <div className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-medium mt-1">Artisanal Sweets</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-900 dark:text-amber-100 font-serif">100%</div>
            <div className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-medium mt-1">Pure Desi Ghee</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-900 dark:text-amber-100 font-serif">4.9 ★</div>
            <div className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-medium mt-1">Over 2,500+ Reviews</div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

`components/sweets/why-us.tsx`:
```tsx
import { VALUE_PILLARS } from "@/lib/sweets-data";

export function WhyUs() {
  const iconMap: Record<string, string> = {
    sparkles: "✨",
    "shield-check": "🛡️",
    truck: "🚚",
    gift: "🎁",
  };

  return (
    <section id="why-us" className="py-20 bg-amber-50/50 dark:bg-zinc-900/40 border-y border-amber-100 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-bold text-amber-600 dark:text-amber-400 font-mono">
            Our Quality Promise
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-amber-950 dark:text-amber-100 mt-2">
            Why Sweet Delights Stands Apart
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base mt-3">
            Every piece of sweet we create is a celebration of uncompromising quality, authentic tradition, and culinary passion.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {VALUE_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-amber-100/80 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow flex flex-col items-start"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-500/10 to-orange-500/20 dark:from-amber-500/20 dark:to-orange-500/30 flex items-center justify-center text-2xl mb-6 text-amber-700 dark:text-amber-300">
                {iconMap[pillar.iconName] || "🍬"}
              </div>
              <h3 className="text-lg font-serif font-bold text-amber-950 dark:text-amber-100 mb-2">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

## Tests

- `npx tsc --noEmit` — ensures clean compilation and valid type checks for all data lookups.
- `npm run lint` — ensures strict compliance with ESLint rules and no unused variables.

## Acceptance Criteria

- [ ] `components/sweets/hero.tsx` is created and exports `Hero`.
- [ ] `components/sweets/why-us.tsx` is created and exports `WhyUs`.
- [ ] Hero displays heading, tagline, CTAs, and trust stats.
- [ ] WhyUs displays all 4 value proposition cards with titles and descriptions.
- [ ] `npx tsc --noEmit` exits with 0 errors.
- [ ] `npm run lint` exits with 0 errors.

