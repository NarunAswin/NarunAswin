# Task 05: Create Sweets Catalog Grid and Testimonials Components

## Status

pending

## Batch

2

## Description

Create the sweets catalog product showcase (`components/sweets/sweets-grid.tsx`) and the customer social proof / reviews section (`components/sweets/testimonials.tsx`). SweetsGrid renders product cards with sweet names, category tags, descriptions, weights, prices, customer ratings, badges (Bestseller, Traditional Favorite), and an "Add to Box / Order" action button. Testimonials showcases verified customer feedback and 5-star ratings.

## Dependencies

**Depends on:** task-01-sweets-data-and-types.md
**Blocks:** task-06-assemble-sweets-page.md

**Context from dependencies:** `task-01-sweets-data-and-types.md` creates `lib/sweets-data.ts`, exporting `SWEETS_CATALOG` and `TESTIMONIALS`. This task imports those arrays to render the catalog cards and review quotes.

## Files to Create

- `components/sweets/sweets-grid.tsx` — Grid of sweets cards with pricing, descriptions, and badges.
- `components/sweets/testimonials.tsx` — Customer reviews cards with star ratings and feedback.

## Files to Modify

None

## Technical Details

### Implementation Steps

1. Create `components/sweets/sweets-grid.tsx`:
   - Import `SWEETS_CATALOG` from `@/lib/sweets-data`.
   - Section heading with title ("Artisanal Sweets Collection") and subtext.
   - Category badges or pills at the top (All, Traditional, Dry Fruit, Milk Sweets, Gourmet & Fusion).
   - Render responsive cards (`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8`).
   - Each card displays:
     - Top badge (if available, e.g. "Bestseller" with amber badge, "Chef Special" with rose badge).
     - Product title and category tag.
     - Appetizing description.
     - Weight (e.g., "500g box") and price formatting (`$XX.XX`).
     - Customer rating stars (★ 4.9) and review count.
     - Primary button: "Order Fresh".
2. Create `components/sweets/testimonials.tsx`:
   - Import `TESTIMONIALS` from `@/lib/sweets-data`.
   - Render review cards with star ratings (★★★★★), customer quote, reviewer name, city, and favorite sweet tag.

### Code Snippets

`components/sweets/sweets-grid.tsx`:
```tsx
import { SWEETS_CATALOG } from "@/lib/sweets-data";

export function SweetsGrid() {
  const badgeColors: Record<string, string> = {
    Bestseller: "bg-rose-100 text-rose-800 dark:bg-rose-950/70 dark:text-rose-200 border-rose-200 dark:border-rose-800",
    "Traditional Favorite": "bg-amber-100 text-amber-800 dark:bg-amber-950/70 dark:text-amber-200 border-amber-200 dark:border-amber-800",
    "Chef Special": "bg-purple-100 text-purple-800 dark:bg-purple-950/70 dark:text-purple-200 border-purple-200 dark:border-purple-800",
    "Festival Special": "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/70 dark:text-emerald-200 border-emerald-200 dark:border-emerald-800",
  };

  return (
    <section id="catalog" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs uppercase tracking-widest font-bold text-amber-600 dark:text-amber-400 font-mono">
          Handcrafted Fresh Daily
        </span>
        <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-amber-950 dark:text-amber-100 mt-2">
          Our Signature Sweets
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base mt-3">
          Explore our most beloved handcrafted confections, prepared fresh each morning with pure ghee and premium nuts.
        </p>
      </div>

      {/* Grid of Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {SWEETS_CATALOG.map((item) => (
          <div
            key={item.id}
            className="group bg-white dark:bg-zinc-900 rounded-3xl border border-amber-100 dark:border-zinc-800 overflow-hidden shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col justify-between"
          >
            {/* Visual Header / Thumbnail Box */}
            <div className="relative h-48 bg-gradient-to-tr from-amber-100 via-orange-100 to-amber-50 dark:from-zinc-800 dark:via-zinc-800 dark:to-zinc-900 flex items-center justify-center p-6">
              <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                {item.category === "Traditional" ? "🥮" : item.category === "Dry Fruit" ? "✨" : item.category === "Milk Sweets" ? "🍶" : "🍫"}
              </span>

              {/* Badge */}
              {item.badge && (
                <div
                  className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold border ${
                    badgeColors[item.badge] || "bg-amber-100 text-amber-800"
                  }`}
                >
                  {item.badge}
                </div>
              )}

              {/* Weight Pill */}
              <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/70 backdrop-blur-sm text-zinc-700 dark:text-zinc-300 text-[11px] font-semibold px-2.5 py-1 rounded-full">
                {item.weight}
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs text-amber-600 dark:text-amber-400 font-semibold uppercase tracking-wider mb-1">
                  <span>{item.category}</span>
                  <span className="text-zinc-500 dark:text-zinc-400">★ {item.rating} ({item.reviewsCount})</span>
                </div>

                <h3 className="text-xl font-serif font-bold text-amber-950 dark:text-amber-50 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                  {item.name}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Pricing & CTA */}
              <div className="mt-6 pt-4 border-t border-amber-100/60 dark:border-zinc-800 flex items-center justify-between">
                <div>
                  <span className="text-xs text-zinc-500 dark:text-zinc-400 block">Price</span>
                  <span className="text-2xl font-bold font-serif text-amber-950 dark:text-amber-100">
                    ${item.price.toFixed(2)}
                  </span>
                </div>

                <button
                  type="button"
                  className="px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-amber-600 hover:bg-amber-700 dark:bg-amber-500 dark:hover:bg-amber-600 shadow-sm transition-all"
                >
                  Order Fresh
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
```

`components/sweets/testimonials.tsx`:
```tsx
import { TESTIMONIALS } from "@/lib/sweets-data";

export function Testimonials() {
  return (
    <section id="reviews" className="py-20 bg-amber-50/40 dark:bg-zinc-900/30 border-t border-amber-100 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-bold text-amber-600 dark:text-amber-400 font-mono">
            Loved By Thousands
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-amber-950 dark:text-amber-100 mt-2">
            What Sweet Lovers Are Saying
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base mt-2">
            Real customer stories from celebrations, weddings, and everyday cravings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-amber-100/80 dark:border-zinc-800 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="text-amber-500 text-lg mb-4">{"★".repeat(t.rating)}</div>
                <p className="text-zinc-700 dark:text-zinc-300 text-sm sm:text-base italic leading-relaxed">
                  &ldquo;{t.comment}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-amber-100/60 dark:border-zinc-800/80">
                <div className="font-serif font-bold text-amber-950 dark:text-amber-100 text-sm sm:text-base">
                  {t.name}
                </div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400">{t.city}</div>
                <div className="text-[11px] font-medium text-amber-700 dark:text-amber-400 mt-1">
                  Favorite: {t.sweetLoved}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

## Tests

- `npx tsc --noEmit` — ensures type check for array mappings and data lookups.
- `npm run lint` — validates ESLint and React syntax rules.

## Acceptance Criteria

- [ ] `components/sweets/sweets-grid.tsx` is created and exports `SweetsGrid`.
- [ ] `components/sweets/testimonials.tsx` is created and exports `Testimonials`.
- [ ] Product cards display name, category, price, rating, weight, and badge.
- [ ] Testimonials display customer quotes, star ratings, and reviewer details.
- [ ] `npx tsc --noEmit` exits with 0 errors.
- [ ] `npm run lint` exits with 0 errors.

