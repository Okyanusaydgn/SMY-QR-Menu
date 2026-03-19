"use client";
import { useEffect, useState } from "react";
import { ChevronDown, MapPin, Clock, Star } from "lucide-react";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import type { Business } from "@/types";

interface HeroSectionProps {
  business: Business;
}

const rotatingWords = ["lezzetli", "taze", "özel", "sıcak", "enfes"];

export function HeroSection({ business }: HeroSectionProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % rotatingWords.length);
        setAnimating(false);
      }, 300);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <AuroraBackground className="bg-[#faf8f4] min-h-[88vh] flex flex-col justify-center">
      <div className="max-w-screen-xl mx-auto px-5 py-16 w-full">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* LEFT: Text content */}
          <div className="flex-1 space-y-7">
            {/* Status pill */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-amber-200/60 rounded-full px-4 py-2 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-sm font-medium text-stone-700">
                Bugün Açık · {business.hours}
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-1">
              <h1 className="text-[clamp(2.6rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-tight text-stone-900">
                Her gün{" "}
                <span
                  className={`inline-block transition-all duration-300 ${
                    animating
                      ? "opacity-0 translate-y-3"
                      : "opacity-100 translate-y-0"
                  } italic text-amber-600`}
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {rotatingWords[wordIndex]}
                </span>
                ,
              </h1>
              <h1 className="text-[clamp(2.6rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-tight text-stone-900">
                her zaman{" "}
                <span
                  className="italic text-amber-600"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  sizin için.
                </span>
              </h1>
            </div>

            <p className="text-[1.05rem] text-stone-500 leading-relaxed max-w-md">
              {business.description}
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#menu"
                className="group inline-flex items-center gap-2.5 bg-amber-600 hover:bg-amber-700 text-white font-semibold text-[0.95rem] px-7 py-3.5 rounded-full transition-all duration-200 shadow-lg shadow-amber-600/25 hover:shadow-amber-600/40 hover:-translate-y-0.5"
              >
                Menüyü Gör
                <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-white/80 hover:bg-white backdrop-blur-sm border border-stone-200 text-stone-800 font-medium text-[0.95rem] px-6 py-3.5 rounded-full transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
              >
                Bizi Bul
              </a>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-4 pt-1">
              <div className="flex -space-x-2.5">
                {["A", "M", "E", "S"].map((letter, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full border-2 border-[#faf8f4] flex items-center justify-center text-white text-sm font-semibold shadow-sm"
                    style={{
                      background: ["#c87040","#2d5a3d","#3d2d08","#1a0530"][i],
                    }}
                  >
                    {letter}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-stone-800">{business.rating}</span>
                </div>
                <p className="text-xs text-stone-500 mt-0.5">
                  {business.reviewCount.toLocaleString()}+ mutlu müşteri
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: Phone mockup */}
          <div className="relative flex-shrink-0 hidden lg:block">
            <PhoneMockup business={business} />
          </div>
        </div>
      </div>
    </AuroraBackground>
  );
}

function PhoneMockup({ business }: { business: Business }) {
  return (
    <div className="relative">
      {/* Glow behind phone */}
      <div className="absolute inset-0 bg-amber-300/20 blur-3xl rounded-full scale-110 pointer-events-none" />

      <div className="relative w-[270px] bg-stone-900 rounded-[42px] p-3 shadow-2xl shadow-stone-900/40 ring-1 ring-white/10">
        <div className="bg-[#faf8f4] rounded-[32px] overflow-hidden min-h-[520px]">
          {/* Phone header */}
          <div className="bg-amber-600 px-4 pt-5 pb-4">
            <p className="text-xs text-amber-200 font-medium">Dijital Menü</p>
            <h3
              className="text-white font-bold text-lg mt-0.5"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {business.name}
            </h3>
          </div>

          {/* Hero band */}
          <div className="bg-gradient-to-b from-stone-900 to-stone-800 flex items-center justify-center h-[100px]">
            <span className="text-5xl">☕</span>
          </div>

          {/* Category pills */}
          <div className="px-3 py-3">
            <p className="text-[10px] font-semibold text-stone-400 uppercase tracking-widest mb-2">
              Kategoriler
            </p>
            <div className="flex gap-2 overflow-hidden">
              {["Kahve", "Tatlı", "Sandviç"].map((cat, i) => (
                <span
                  key={cat}
                  className={`px-3 py-1.5 rounded-full text-[11px] font-semibold whitespace-nowrap ${
                    i === 0
                      ? "bg-amber-600 text-white"
                      : "bg-white border border-stone-200 text-stone-600"
                  }`}
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>

          <div className="h-px bg-stone-100 mx-3" />

          {/* Menu items */}
          {[
            { emoji: "☕", name: "Filtre Kahve", sub: "Etiyopya harmanı", price: "₺65" },
            { emoji: "🥛", name: "Latte", sub: "Oat milk seçeneği", price: "₺85" },
            { emoji: "🎂", name: "Cheesecake", sub: "Ev yapımı", price: "₺120" },
          ].map((item, i) => (
            <div key={i}>
              <div className="flex items-center gap-3 px-3 py-2.5">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl bg-stone-900 shrink-0">
                  {item.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[13px] font-semibold text-stone-900 truncate">{item.name}</p>
                  <p className="text-[11px] text-stone-400 truncate">{item.sub}</p>
                </div>
                <span className="text-[13px] font-bold text-amber-600 shrink-0">{item.price}</span>
              </div>
              {i < 2 && <div className="h-px bg-stone-100 mx-3" />}
            </div>
          ))}
        </div>
      </div>

      {/* Floating QR badge */}
      <div className="absolute -right-10 top-16 bg-white rounded-2xl shadow-xl p-3 border border-stone-100">
        <div className="w-14 h-14 rounded-lg overflow-hidden"
          style={{
            background: "repeating-conic-gradient(#1a1208 0% 25%, white 0% 50%) 0 0 / 8px 8px",
          }}
        />
        <p className="text-[10px] text-stone-400 text-center mt-1.5 font-medium">QR Tara</p>
      </div>

      {/* Floating rating badge */}
      <div className="absolute -left-10 bottom-24 bg-white rounded-2xl shadow-xl px-4 py-2.5 border border-stone-100">
        <p className="text-xl font-bold text-amber-600">4.9</p>
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
          ))}
        </div>
        <p className="text-[10px] text-stone-400 mt-0.5">1.2K yorum</p>
      </div>
    </div>
  );
}
