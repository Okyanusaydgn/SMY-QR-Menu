"use client";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import type { Category } from "@/types";

interface CategorySectionProps {
  categories: Category[];
  onSelect?: (categoryId: string) => void;
}

export function CategorySection({ categories, onSelect }: CategorySectionProps) {
  const [active, setActive] = useState<string | null>(null);

  const handleSelect = (id: string) => {
    setActive(id === active ? null : id);
    onSelect?.(id);
  };

  return (
    <section className="bg-[#f5f0e8] py-16 px-5" id="menu">
      <div className="max-w-screen-xl mx-auto">
        {/* Section header */}
        <div className="mb-10">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-amber-600 mb-2">Menü</p>
          <h2
            className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight text-stone-900 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Her damak zevkine
            <br />
            bir lezzet.
          </h2>
          <p className="text-stone-500 text-[0.95rem] mt-3 max-w-sm leading-relaxed">
            Taze malzemelerle hazırlanan menümüzde herkes için bir şeyler var.
          </p>
        </div>

        {/* Category grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleSelect(cat.id)}
              className={`group relative overflow-hidden rounded-2xl text-left transition-all duration-300 ${
                active === cat.id
                  ? "ring-2 ring-amber-500 shadow-lg shadow-amber-500/20 scale-[1.02]"
                  : "hover:scale-[1.02] hover:shadow-lg hover:shadow-stone-900/10"
              }`}
            >
              {/* Dark visual top */}
              <div
                className={`relative h-36 bg-gradient-to-br ${cat.gradient} flex items-center justify-center`}
              >
                <span className="text-5xl">{cat.emoji}</span>
                {/* Count pill */}
                <div className="absolute top-3 right-3 bg-white/15 backdrop-blur-sm rounded-full px-2.5 py-1">
                  <span className="text-[11px] font-semibold text-white/90">
                    {cat.count} çeşit
                  </span>
                </div>
                {/* Active overlay */}
                {active === cat.id && (
                  <div className="absolute inset-0 bg-amber-500/20 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center">
                      <ChevronRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                )}
              </div>
              {/* Label bottom */}
              <div className="bg-white px-4 py-3">
                <p className="font-semibold text-[0.9rem] text-stone-900">{cat.name}</p>
                <p className="text-[0.75rem] text-stone-400 mt-0.5">
                  {cat.count} çeşit · Günlük taze
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
