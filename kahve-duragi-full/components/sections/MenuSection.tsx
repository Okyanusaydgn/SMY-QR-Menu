"use client";
import { useState } from "react";
import type { MenuItem, Category } from "@/types";

interface MenuSectionProps {
  items: MenuItem[];
  categories: Category[];
}

export function MenuSection({ items, categories }: MenuSectionProps) {
  const [activeTab, setActiveTab] = useState("all");

  const filtered =
    activeTab === "all" ? items : items.filter((item) => item.category === activeTab);

  const tabs = [
    { id: "all", label: "Tümü", emoji: "✨" },
    ...categories.map((c) => ({ id: c.id, label: c.name.split(" ")[0], emoji: c.emoji })),
  ];

  return (
    <section className="bg-[#f5f0e8] py-16 px-5" id="full-menu">
      <div className="max-w-screen-xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-amber-600 mb-2">
              Tüm Menü
            </p>
            <h2
              className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold tracking-tight text-stone-900"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Ne istersiniz?
            </h2>
          </div>
          <p className="text-[0.85rem] text-stone-400">KDV dahil fiyatlar.</p>
        </div>

        {/* Filter tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none mb-7">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-[0.85rem] font-semibold whitespace-nowrap transition-all duration-200 shrink-0 ${
                activeTab === tab.id
                  ? "bg-amber-600 text-white shadow-md shadow-amber-600/25"
                  : "bg-white border border-stone-200 text-stone-600 hover:border-amber-300 hover:text-amber-700"
              }`}
            >
              <span className="text-base leading-none">{tab.emoji}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Menu items grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="group flex items-center gap-4 bg-white rounded-2xl px-4 py-3.5 border border-stone-100 hover:border-amber-200 hover:shadow-md hover:shadow-amber-100/50 hover:translate-x-1 transition-all duration-200 cursor-pointer"
            >
              {/* Emoji box */}
              <div className="w-14 h-14 rounded-xl bg-stone-900 flex items-center justify-center text-2xl shrink-0">
                {item.emoji}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-stone-900 text-[0.95rem]">{item.name}</p>
                <p className="text-[0.78rem] text-stone-400 mt-0.5 truncate">{item.description}</p>
              </div>
              <span className="text-[1.05rem] font-bold text-amber-600 shrink-0">
                ₺{item.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
