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
