# Task 01: Create Sweets Data Models and Catalog Data

## Status

complete

## Batch

1

## Description

Create `lib/sweets-data.ts` containing the TypeScript interfaces and structured catalog data for the sweets shop landing page. This serves as the single source of truth for all components (Navbar, Hero, WhyUs, SweetsGrid, Testimonials, Footer), providing product information, prices, badges, value props, reviews, and store contact info.

## Dependencies

**Depends on:** None (Batch 1)
**Blocks:** task-03-navbar-and-footer-components.md, task-04-hero-and-features-components.md, task-05-sweets-catalog-and-reviews-components.md, task-06-assemble-sweets-page.md

**Context from dependencies:** None (Batch 1 task).

## Files to Create

- `lib/sweets-data.ts` — TypeScript interfaces and static data for sweets items, categories, value propositions, customer reviews, and shop metadata.

## Files to Modify

None

## Technical Details

### Implementation Steps

1. Create directory `lib/` if it does not already exist.
2. Create `lib/sweets-data.ts` with explicit type definitions:
   - `SweetItem`: `id`, `name`, `category`, `description`, `price`, `weight`, `badge?`, `rating`, `popular?`, `iconName`.
   - `ValuePillar`: `id`, `title`, `description`, `iconName`.
   - `Testimonial`: `id`, `name`, `city`, `rating`, `comment`, `sweetLoved`.
   - `ShopInfo`: `name`, `tagline`, `phone`, `email`, `address`, `hours`, `socialLinks`.
3. Export sample data populated with realistic sweet items (e.g. Royal Gulab Jamun, Pistachio Kaju Katli, Saffron Rasgulla, Belgian Chocolate Fudge, Almond Baklava, Motichoor Ladoo, Assorted Festive Box).
4. Export value propositions (e.g. 100% Pure Desi Ghee, Farm-Fresh Milk & Saffron, Same-Day Fresh Batch, Custom Gift Boxes).
5. Export customer reviews and shop contact details.

### Code Snippets

```typescript
export interface SweetItem {
  id: string;
  name: string;
  category: "Traditional" | "Dry Fruit" | "Milk Sweets" | "Gourmet & Fusion";
  description: string;
  price: number;
  weight: string;
  badge?: "Bestseller" | "Traditional Favorite" | "Chef Special" | "Festival Special";
  rating: number;
  reviewsCount: number;
  popular?: boolean;
}

export interface ValuePillar {
  id: string;
  title: string;
  description: string;
  iconName: "sparkles" | "shield-check" | "truck" | "gift";
}

export interface Testimonial {
  id: string;
  name: string;
  city: string;
  rating: number;
  comment: string;
  sweetLoved: string;
}

export interface ShopInfo {
  name: string;
  tagline: string;
  phone: string;
  email: string;
  address: string;
  hours: string;
  announcement: string;
}

export const SHOP_INFO: ShopInfo = {
  name: "Sweet Delights",
  tagline: "Authentic Handcrafted Sweets Made Fresh Daily with Pure Love & Desi Ghee",
  phone: "+1 (800) 555-DELIGHT",
  email: "hello@sweetdelights.com",
  address: "124 Confectionery Lane, Sweetville, CA 90210",
  hours: "Mon – Sun: 8:00 AM – 10:00 PM",
  announcement: "✨ Free Express Delivery on Festive Gift Boxes Above $50! ✨",
};

export const VALUE_PILLARS: ValuePillar[] = [
  {
    id: "purity",
    title: "100% Pure Desi Ghee",
    description: "Prepared using traditional clarified butter and organic dairy without artificial preservatives.",
    iconName: "sparkles",
  },
  {
    id: "heritage",
    title: "Time-Honored Recipes",
    description: "Centuries-old artisanal recipes perfected across generations for authentic melt-in-the-mouth taste.",
    iconName: "shield-check",
  },
  {
    id: "freshness",
    title: "Made Fresh Daily",
    description: "Every sweet is handcrafted fresh every morning in small artisanal batches to guarantee peak flavor.",
    iconName: "truck",
  },
  {
    id: "gifting",
    title: "Festive & Luxury Gift Boxes",
    description: "Elegant bespoke packaging perfect for weddings, corporate gifting, Diwali, and family celebrations.",
    iconName: "gift",
  },
];

export const SWEETS_CATALOG: SweetItem[] = [
  {
    id: "kaju-katli",
    name: "Royal Pistachio Kaju Katli",
    category: "Dry Fruit",
    description: "Delicate silver-leaf coated diamond slices crafted from premium roasted cashews and Iranian pistachios.",
    price: 18.99,
    weight: "500g",
    badge: "Bestseller",
    rating: 4.9,
    reviewsCount: 320,
    popular: true,
  },
  {
    id: "gulab-jamun",
    name: "Rose & Cardamom Gulab Jamun",
    category: "Traditional",
    description: "Soft khoya dumplings soaked in fragrant organic rose water, green cardamom, and warm sugar syrup.",
    price: 14.5,
    weight: "500g",
    badge: "Traditional Favorite",
    rating: 5.0,
    reviewsCount: 480,
    popular: true,
  },
  {
    id: "saffron-rasgulla",
    name: "Kashmiri Saffron Rasgulla",
    category: "Milk Sweets",
    description: "Spongy cottage cheese rounds infused with real saffron strands and delicately sweetened light syrup.",
    price: 13.99,
    weight: "500g",
    badge: "Chef Special",
    rating: 4.8,
    reviewsCount: 195,
    popular: true,
  },
  {
    id: "motichoor-laddu",
    name: "Desi Ghee Motichoor Ladoo",
    category: "Traditional",
    description: "Golden micro-gram pearls roasted in pure cow ghee, garnished with melon seeds and crushed pistachios.",
    price: 15.0,
    weight: "500g",
    badge: "Festival Special",
    rating: 4.9,
    reviewsCount: 260,
    popular: true,
  },
  {
    id: "baklava-fusion",
    name: "Honey Walnut Baklava Bites",
    category: "Gourmet & Fusion",
    description: "Crispy layers of flaky phyllo pastry layered with chopped walnuts, cinnamon, and raw blossom honey.",
    price: 22.0,
    weight: "400g",
    badge: "Chef Special",
    rating: 4.9,
    reviewsCount: 142,
    popular: false,
  },
  {
    id: "choco-fudge-barfi",
    name: "Belgian Cocoa Mawa Barfi",
    category: "Gourmet & Fusion",
    description: "Rich dark Belgian chocolate fudge swirled with rich condensed milk mawa and topped with roasted hazelnuts.",
    price: 19.5,
    weight: "450g",
    badge: "Bestseller",
    rating: 4.7,
    reviewsCount: 188,
    popular: false,
  },
  {
    id: "assorted-luxury-box",
    name: "Grand Celebrations Luxury Box",
    category: "Dry Fruit",
    description: "An opulent assortment of 16 handcrafted sweets including Kaju Katli, Saffron Peda, Baklava, and Ladoos.",
    price: 36.0,
    weight: "1000g",
    badge: "Bestseller",
    rating: 5.0,
    reviewsCount: 512,
    popular: true,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "rev-1",
    name: "Priya Sharma",
    city: "San Francisco, CA",
    rating: 5,
    comment: "The Kaju Katli was so fresh and soft, it melted right in the mouth! Reminded me of celebrations back home.",
    sweetLoved: "Royal Pistachio Kaju Katli",
  },
  {
    id: "rev-2",
    name: "Michael Chen",
    city: "San Jose, CA",
    rating: 5,
    comment: "Ordered the Grand Celebrations box for a company Diwali party. Everyone couldn't stop raving about the packaging and taste!",
    sweetLoved: "Grand Celebrations Luxury Box",
  },
  {
    id: "rev-3",
    name: "Ayesha Khan",
    city: "Fremont, CA",
    rating: 5,
    comment: "The Gulab Jamuns were warm, fragrant, and not overly sweet. Hands down the best sweet shop in the Bay Area.",
    sweetLoved: "Rose & Cardamom Gulab Jamun",
  },
];
```

## Tests

- `npx tsc --noEmit` — validates that all TypeScript types, exports, and interfaces compile cleanly with no type mismatch.
- `npm run lint` — ensures strict adherence to ESLint rules and no unused variable errors.

## Acceptance Criteria

- [ ] `lib/sweets-data.ts` exports `SweetItem`, `ValuePillar`, `Testimonial`, `ShopInfo` interfaces.
- [ ] `lib/sweets-data.ts` exports `SHOP_INFO`, `VALUE_PILLARS`, `SWEETS_CATALOG`, and `TESTIMONIALS` with complete, non-empty data.
- [ ] `npx tsc --noEmit` exits with 0 errors.
- [ ] `npm run lint` exits with 0 errors.

