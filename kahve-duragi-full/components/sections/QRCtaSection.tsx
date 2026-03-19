"use client";

// components/sections/QRCtaSection.tsx
// Premium QR CTA section — Next.js + TypeScript + TailwindCSS
// Kafe / restoran projesi icin musteri odakli tasarim

interface QRCtaSectionProps {
  slug?: string;
  subtitle?: string;
  onMenuClick?: () => void;
}

export function QRCtaSection({
  slug = "kahve-duragi",
  subtitle = "Telefonunuzu tutun, QR kodu okutun. Kagit menu bekleme yok — lezzet hemen karsinizda.",
  onMenuClick,
}: QRCtaSectionProps) {
  return (
    <section className="relative overflow-hidden bg-[#0d0905] py-24 px-5 text-center">

      {/* Atmospheric background layer */}
      <BackgroundFX />

      {/* Main content */}
      <div className="relative z-10 mx-auto flex max-w-xl flex-col items-center gap-5">

        {/* Status badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-600/25 bg-amber-600/10 px-4 py-1.5">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-400" />
          <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-amber-400">
            QR ile Hizli Erisim
          </span>
        </div>

        {/* Headline with gradient accent */}
        <h2
          className="text-[clamp(2.4rem,5vw,3.8rem)] font-bold leading-[1.1] tracking-[-1.5px] text-white"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Menuye{" "}
          <span
            className="italic"
            style={{
              background: "linear-gradient(135deg,#f5c065 0%,#e07820 50%,#f5a030 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            saniyeler icinde
          </span>{" "}
          ulasin.
        </h2>

        {/* Subtitle */}
        <p className="max-w-sm text-[15px] leading-relaxed text-white/40">{subtitle}</p>

        {/* QR card with glow */}
        <QRCard />

        {/* Scan status */}
        <div className="flex items-center gap-2 text-[12px] text-white/30">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          Taramasiz calisir · 2 saniye
        </div>

        {/* URL display */}
        <div className="rounded-full border border-white/[0.07] bg-white/[0.04] px-5 py-2.5 font-mono text-[13px] text-white/35">
          ⚡ qrmenu.io/<span className="font-bold text-amber-400">{slug}</span>
        </div>

        {/* Primary CTA button */}
        <CTAButton onClick={onMenuClick} />

        {/* Social proof row */}
        <SocialProofRow />
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   Sub-components
───────────────────────────────────────── */

function BackgroundFX() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Central warm glow */}
      <div
        className="absolute -top-20 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse,rgba(200,122,32,.28) 0%,rgba(160,80,10,.12) 40%,transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      {/* Bottom-left secondary blob */}
      <div
        className="absolute -bottom-24 left-[12%] h-[380px] w-[380px] rounded-full"
        style={{
          background: "radial-gradient(circle,rgba(120,50,5,.2) 0%,transparent 65%)",
          filter: "blur(60px)",
        }}
      />
      {/* Top-right accent */}
      <div
        className="absolute right-[8%] top-[30%] h-[260px] w-[260px] rounded-full"
        style={{
          background: "radial-gradient(circle,rgba(245,180,50,.1) 0%,transparent 65%)",
          filter: "blur(50px)",
        }}
      />
      {/* Concentric decorative rings */}
      <div className="absolute left-1/2 top-1/2 h-[580px] w-[580px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-600/[0.07]" />
      <div className="absolute left-1/2 top-1/2 h-[780px] w-[780px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-600/[0.04]" />
    </div>
  );
}

function QRCard() {
  return (
    <div className="relative mt-2">
      {/* Animated glow halo behind the card */}
      <div
        aria-hidden
        className="absolute inset-[-18px] animate-pulse rounded-[32px]"
        style={{
          background: "radial-gradient(circle,rgba(200,122,32,.35) 0%,transparent 65%)",
          filter: "blur(16px)",
        }}
      />
      {/* White card */}
      <div
        className="relative cursor-pointer rounded-3xl bg-white p-[14px] transition-all duration-300 hover:-translate-y-1 hover:scale-105"
        style={{
          width: 164,
          height: 164,
          boxShadow:
            "0 0 0 1px rgba(255,255,255,.1),0 20px 60px rgba(0,0,0,.5),0 4px 20px rgba(200,122,32,.25)",
        }}
      >
        {/* QR dot pattern */}
        <div
          className="h-full w-full rounded-[10px]"
          style={{
            background:
              "repeating-conic-gradient(#1a1208 0% 25%,#ffffff 0% 50%) 0 0/11px 11px",
          }}
        />
        {/* Amber finder-pattern corners */}
        <Corner pos="tl" />
        <Corner pos="tr" />
        <Corner pos="bl" />
      </div>
    </div>
  );
}

function Corner({ pos }: { pos: "tl" | "tr" | "bl" }) {
  const base = "pointer-events-none absolute h-[26px] w-[26px] rounded-sm bg-transparent";
  const map = {
    tl: "top-[18px] left-[18px] border-t-[2.5px] border-l-[2.5px] border-amber-500",
    tr: "top-[18px] right-[18px] border-t-[2.5px] border-r-[2.5px] border-amber-500",
    bl: "bottom-[18px] left-[18px] border-b-[2.5px] border-l-[2.5px] border-amber-500",
  };
  return <span className={`${base} ${map[pos]}`} />;
}

function CTAButton({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="group relative mt-1 inline-flex items-center gap-3 overflow-hidden rounded-full px-10 py-[15px] text-[16px] font-bold text-white transition-all duration-200 hover:-translate-y-[3px] hover:scale-[1.02]"
      style={{
        background: "linear-gradient(135deg,#d4830a 0%,#c87a20 40%,#b86510 100%)",
        boxShadow: "0 8px 24px rgba(200,122,32,.38)",
      }}
    >
      {/* Inner gloss highlight */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-px rounded-full"
        style={{
          background:
            "linear-gradient(135deg,rgba(255,255,255,.14) 0%,transparent 50%)",
        }}
      />
      <span className="relative">Menuyu Kesfet</span>
      <span className="relative flex h-[22px] w-[22px] items-center justify-center rounded-full bg-white/20 text-[13px] transition-transform duration-200 group-hover:translate-x-1">
        →
      </span>
    </button>
  );
}

function SocialProofRow() {
  const avatars = [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&q=80",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&q=80",
  ];
  return (
    <div className="flex items-center gap-3 pt-1">
      <div className="flex">
        {avatars.map((src, i) => (
          <div
            key={i}
            className="h-7 w-7 overflow-hidden rounded-full border-[2px] border-amber-600/30"
            style={{ marginLeft: i === 0 ? 0 : -8 }}
          >
            <img src={src} alt="" className="h-full w-full object-cover" />
          </div>
        ))}
      </div>
      <span className="text-[12px] text-white/35">
        <strong className="font-semibold text-white/55">1.200+</strong>{" "}
        mutlu musteri her gun kullaniyor
      </span>
    </div>
  );
}
