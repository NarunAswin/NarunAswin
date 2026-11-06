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
