# Task 03: Create Navbar and Footer Components

## Status

complete

## Batch

2

## Description

Create the sweets shop navigation header (`components/sweets/navbar.tsx`) and the footer (`components/sweets/footer.tsx`). The Navbar features a top announcement bar, shop branding logo with sweets icon, navigation anchors (#catalog, #why-us, #reviews, #contact), phone number quick-call, and an "Order Sweets" action button. The Footer provides complete shop contact details, operating hours, delivery information, social links, and a newsletter subscription block.

## Dependencies

**Depends on:** task-01-sweets-data-and-types.md
**Blocks:** task-06-assemble-sweets-page.md

**Context from dependencies:** `task-01-sweets-data-and-types.md` creates `lib/sweets-data.ts`, which exports `SHOP_INFO`. This task imports `SHOP_INFO` to render shop name, phone, email, address, opening hours, and banner announcement.

## Files to Create

- `components/sweets/navbar.tsx` — Sticky top navigation with announcement banner and quick links.
- `components/sweets/footer.tsx` — Complete site footer with shop hours, address, contact, and copyright.

## Files to Modify

None

## Technical Details

### Implementation Steps

1. Create directory `components/sweets/` if it does not already exist.
2. Create `components/sweets/navbar.tsx`:
   - Import `SHOP_INFO` from `@/lib/sweets-data`.
   - Render the top announcement bar with warm amber background (`bg-amber-600 text-white text-xs py-1.5 text-center font-medium`).
   - Render the main navigation header (`sticky top-0 z-50 backdrop-blur-md bg-white/90 dark:bg-zinc-950/90 border-b border-amber-100 dark:border-zinc-800`).
   - Include logo with sweet confection icon SVG and shop title.
   - Include desktop navigation links: "Our Sweets" (`#catalog`), "Why Us" (`#why-us`), "Reviews" (`#reviews`), "Contact" (`#contact`).
   - Include "Order Now" / "Call Us" CTA pill button.
3. Create `components/sweets/footer.tsx`:
   - Import `SHOP_INFO` from `@/lib/sweets-data`.
   - Render multi-column footer with brand summary, opening hours, quick contact links, and newsletter signup input.
   - Include copyright notice and privacy links.

### Code Snippets

`components/sweets/navbar.tsx`:
```tsx
import Link from "next/link";
import { SHOP_INFO } from "@/lib/sweets-data";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/95 dark:bg-zinc-950/95 border-b border-amber-100/80 dark:border-zinc-800 transition-colors">
      {/* Announcement Bar */}
      <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 text-white text-xs sm:text-sm py-1.5 px-4 text-center font-medium tracking-wide">
        {SHOP_INFO.announcement}
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 to-rose-500 flex items-center justify-center text-white shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
            🍬
          </span>
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-bold font-serif tracking-tight text-amber-950 dark:text-amber-100">
              {SHOP_INFO.name}
            </span>
            <span className="text-[10px] uppercase tracking-widest text-amber-700 dark:text-amber-400 font-semibold -mt-1">
              Pure Artisanal Mithai
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-700 dark:text-zinc-200">
          <a href="#catalog" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
            Our Sweets
          </a>
          <a href="#why-us" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
            Why Us
          </a>
          <a href="#reviews" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
            Reviews
          </a>
          <a href="#contact" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
            Contact
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <a
            href={`tel:${SHOP_INFO.phone}`}
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-amber-900 dark:text-amber-200 bg-amber-50 dark:bg-zinc-800 px-3 py-2 rounded-full border border-amber-200 dark:border-zinc-700 hover:bg-amber-100 transition-colors"
          >
            <span>📞</span> {SHOP_INFO.phone}
          </a>
          <a
            href="#catalog"
            className="inline-flex items-center justify-center px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold rounded-full text-white bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 shadow-md shadow-orange-500/20 hover:shadow-lg transition-all"
          >
            Order Now
          </a>
        </div>
      </div>
    </header>
  );
}
```

`components/sweets/footer.tsx`:
```tsx
import { SHOP_INFO } from "@/lib/sweets-data";

export function Footer() {
  return (
    <footer id="contact" className="bg-[#1C160C] text-amber-100 border-t border-amber-950 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="md:col-span-1 space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-amber-600 flex items-center justify-center text-white">
              🍬
            </span>
            <span className="text-xl font-bold font-serif text-white tracking-wide">
              {SHOP_INFO.name}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-amber-200/80 leading-relaxed">
            {SHOP_INFO.tagline}
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-amber-400 mb-4 font-mono">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm text-amber-200/80">
            <li><a href="#catalog" className="hover:text-white transition-colors">Our Catalog</a></li>
            <li><a href="#why-us" className="hover:text-white transition-colors">About Our Craft</a></li>
            <li><a href="#reviews" className="hover:text-white transition-colors">Customer Reviews</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors">Custom Gift Boxes</a></li>
          </ul>
        </div>

        {/* Hours & Info */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-amber-400 mb-4 font-mono">
            Store Hours
          </h4>
          <p className="text-sm text-amber-200/80 mb-2">{SHOP_INFO.hours}</p>
          <p className="text-xs text-amber-300/70">Same-day fresh batch prepared each morning by 7:30 AM.</p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-amber-400 mb-4 font-mono">
            Visit & Contact
          </h4>
          <p className="text-sm text-amber-200/80 mb-1">{SHOP_INFO.address}</p>
          <p className="text-sm text-amber-200/80 mb-1">Phone: {SHOP_INFO.phone}</p>
          <p className="text-sm text-amber-200/80">Email: {SHOP_INFO.email}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-6 border-t border-amber-900/50 flex flex-col sm:flex-row items-center justify-between text-xs text-amber-300/60 gap-4">
        <p>© {new Date().getFullYear()} {SHOP_INFO.name}. All rights reserved.</p>
        <p>Made fresh daily with 100% pure ingredients.</p>
      </div>
    </footer>
  );
}
```

## Tests

- `npx tsc --noEmit` — verifies correct imports from `@/lib/sweets-data` and component typing.
- `npm run lint` — ensures clean JSX syntax, no missing dependencies or unused imports.

## Acceptance Criteria

- [ ] `components/sweets/navbar.tsx` is created and exports `Navbar`.
- [ ] `components/sweets/footer.tsx` is created and exports `Footer`.
- [ ] Navbar displays brand name, phone, announcement, and links.
- [ ] Footer displays hours, address, contact, and copyright.
- [ ] `npx tsc --noEmit` exits with 0 errors.
- [ ] `npm run lint` exits with 0 errors.

