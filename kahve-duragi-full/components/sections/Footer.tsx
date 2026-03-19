import { MapPin, Phone, Clock, Instagram, Twitter } from "lucide-react";
import type { Business } from "@/types";

interface FooterProps {
  business: Business;
}

export function Footer({ business }: FooterProps) {
  return (
    <footer className="bg-[#1a1208] text-stone-400 py-14 px-5">
      <div className="max-w-screen-xl mx-auto">
        {/* Top: Brand + links grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-amber-600 flex items-center justify-center text-lg">
                {business.logo}
              </div>
              <span
                className="text-white font-bold text-[1.1rem]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {business.name}
              </span>
            </div>
            <p className="text-[0.85rem] leading-relaxed text-stone-500">
              {business.tagline}
            </p>
            <div className="flex gap-2 mt-5">
              {[
                { icon: Instagram, href: "#" },
                { icon: Twitter, href: "#" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-amber-600/20 flex items-center justify-center transition-colors"
                >
                  <Icon className="w-4 h-4 text-stone-400 hover:text-amber-400 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Menü */}
          <div>
            <p className="text-[0.75rem] font-bold tracking-[0.18em] uppercase text-stone-500 mb-4">
              Menü
            </p>
            <ul className="space-y-2.5">
              {["Sıcak Kahveler", "Soğuk İçecekler", "Tatlılar", "Sandviç & Tost"].map((item) => (
                <li key={item}>
                  <a
                    href="#menu"
                    className="text-[0.88rem] text-stone-500 hover:text-amber-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Bilgi */}
          <div>
            <p className="text-[0.75rem] font-bold tracking-[0.18em] uppercase text-stone-500 mb-4">
              Bilgi
            </p>
            <ul className="space-y-2.5">
              {["Hakkımızda", "Kariyer", "Hediye Kartı", "Kurumsal"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-[0.88rem] text-stone-500 hover:text-amber-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[0.75rem] font-bold tracking-[0.18em] uppercase text-stone-500 mb-4">
              İletişim
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                <span className="text-[0.85rem] text-stone-500 leading-relaxed">
                  {business.address}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-600 shrink-0" />
                <span className="text-[0.85rem] text-stone-500">{business.phone}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                <span className="text-[0.85rem] text-stone-500">{business.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[0.78rem] text-stone-600">
            © {new Date().getFullYear()} {business.name}. Tüm hakları saklıdır.
          </p>
          <div className="flex gap-5">
            {["Gizlilik Politikası", "Kullanım Koşulları"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[0.78rem] text-stone-600 hover:text-amber-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
