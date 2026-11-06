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
  iconName?: string;
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
  socialLinks?: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
  };
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
