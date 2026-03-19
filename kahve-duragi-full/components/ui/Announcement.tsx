"use client";
import { useState } from "react";
import { X, Sparkles } from "lucide-react";

interface AnnouncementProps {
  message: string;
  emoji?: string;
  href?: string;
}

export function Announcement({ message, emoji = "🎉", href }: AnnouncementProps) {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div className="relative bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white text-sm py-2.5 px-4">
      <div className="max-w-screen-xl mx-auto flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 shrink-0 opacity-90" />
        <span className="font-medium tracking-wide">{emoji} {message}</span>
        {href && (
          <a href={href} className="underline underline-offset-2 font-semibold hover:opacity-80 transition-opacity ml-1">
            Detaylar →
          </a>
        )}
      </div>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 opacity-70 hover:opacity-100 transition-opacity"
        aria-label="Kapat"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
