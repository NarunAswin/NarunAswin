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
