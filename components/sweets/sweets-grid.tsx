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
