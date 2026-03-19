"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import type { Business } from "@/types";

interface NavbarProps {
  business: Business;
}

export function Navbar({ business }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#faf8f4]/95 backdrop-blur-xl shadow-sm shadow-stone-200/60 border-b border-stone-200/60"
          : "bg-[#faf8f4]"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-5">
        <div className="flex items-center justify-between h-[64px]">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-amber-600 flex items-center justify-center text-lg shadow-md shadow-amber-600/30">
              {business.logo}
            </div>
            <span
              className="font-bold text-stone-900 text-[1.1rem]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {business.name}
            </span>
          </div>

          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center gap-7">
            {[
              { href: "#menu", label: "Menü" },
              { href: "#contact", label: "İletişim" },
              { href: "#reviews", label: "Yorumlar" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[0.9rem] font-medium text-stone-500 hover:text-stone-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <a
              href="#menu"
              className="hidden sm:inline-flex items-center gap-1.5 bg-stone-900 hover:bg-stone-800 text-white font-semibold text-[0.85rem] px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg"
            >
              Sipariş Ver →
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-xl border border-stone-200 bg-white text-stone-600 hover:border-amber-300 hover:text-amber-600 transition-colors"
            >
              {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-stone-100 py-4 space-y-1">
            {[
              { href: "#menu", label: "Menü" },
              { href: "#contact", label: "İletişim" },
              { href: "#reviews", label: "Yorumlar" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2.5 rounded-xl text-[0.95rem] font-medium text-stone-700 hover:bg-amber-50 hover:text-amber-700 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
