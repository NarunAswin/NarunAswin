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
