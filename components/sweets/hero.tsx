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
          <Link
            href="#catalog"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-white bg-gradient-to-r from-amber-600 via-orange-600 to-rose-600 hover:from-amber-700 hover:to-orange-700 shadow-xl shadow-orange-600/25 hover:shadow-2xl hover:scale-[1.02] transition-all"
          >
            Explore Sweets Menu <span>➔</span>
          </Link>
          <Link
            href="#why-us"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-semibold text-amber-950 dark:text-amber-200 bg-white dark:bg-zinc-900 border border-amber-200 dark:border-zinc-800 hover:bg-amber-50 dark:hover:bg-zinc-800 shadow-sm transition-all"
          >
            Why Choose Us
          </Link>
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
