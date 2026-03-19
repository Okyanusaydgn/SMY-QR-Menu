"use client";
import { Star, Plus } from "lucide-react";
import type { MenuItem } from "@/types";

interface ProductCardProps {
  item: MenuItem;
  size?: "normal" | "large";
}

const badgeStyles = {
  Yeni: "bg-emerald-50 text-emerald-700 border border-emerald-200",
  Popüler: "bg-amber-50 text-amber-700 border border-amber-200",
  Özel: "bg-rose-50 text-rose-700 border border-rose-200",
};

export function ProductCard({ item, size = "normal" }: ProductCardProps) {
  return (
    <div
      className={`group relative bg-white rounded-2xl overflow-hidden border border-stone-100 hover:shadow-xl hover:shadow-stone-200/60 hover:-translate-y-1 transition-all duration-300 cursor-pointer ${
        size === "large" ? "lg:row-span-1" : ""
      }`}
    >
      {/* Image area */}
      <div
        className={`relative ${size === "large" ? "h-52" : "h-40"} bg-gradient-to-br from-stone-900 to-stone-800 flex items-center justify-center`}
      >
        <span className={`${size === "large" ? "text-7xl" : "text-5xl"}`}>{item.emoji}</span>

        {/* Badge */}
        {item.badge && (
          <div className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-semibold ${badgeStyles[item.badge]}`}>
            {item.badge}
          </div>
        )}

        {/* Add button on hover */}
        <button className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-amber-600 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-200 shadow-lg hover:bg-amber-700 hover:scale-110 active:scale-95">
          <Plus className="w-4 h-4" />
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Rating */}
        {item.rating && (
          <div className="flex items-center gap-1 mb-2">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span className="text-[12px] font-semibold text-stone-700">{item.rating}</span>
            {item.reviewCount && (
              <span className="text-[11px] text-stone-400">({item.reviewCount} yorum)</span>
            )}
          </div>
        )}

        <h3
          className="font-bold text-stone-900 text-[1rem] leading-tight mb-1"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {item.name}
        </h3>
        <p className="text-[0.8rem] text-stone-400 leading-relaxed line-clamp-2 mb-3">
          {item.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-[1.1rem] font-bold text-amber-600">₺{item.price}</span>
          <button className="text-[0.8rem] font-semibold text-stone-500 hover:text-amber-600 transition-colors">
            Ekle +
          </button>
        </div>
      </div>
    </div>
  );
}

interface FeaturedSectionProps {
  items: MenuItem[];
}

export function FeaturedSection({ items }: FeaturedSectionProps) {
  return (
    <section className="bg-white py-16 px-5">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-amber-600 mb-2">
              Öne Çıkanlar
            </p>
            <h2
              className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold tracking-tight text-stone-900 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Müşteri favorileri.
            </h2>
          </div>
          <a
            href="#full-menu"
            className="text-sm font-semibold text-amber-600 hover:text-amber-700 flex items-center gap-1 transition-colors"
          >
            Tümünü Gör →
          </a>
        </div>

        {/* 1 large + 2 small grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {items.map((item, i) => (
            <ProductCard key={item.id} item={item} size={i === 0 ? "large" : "normal"} />
          ))}
        </div>
      </div>
    </section>
  );
}
