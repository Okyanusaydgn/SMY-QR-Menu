"use client";
import { cn } from "@/lib/utils";

interface AuroraBackgroundProps {
  children: React.ReactNode;
  className?: string;
  intensity?: "soft" | "medium" | "strong";
}

export function AuroraBackground({
  children,
  className,
  intensity = "soft",
}: AuroraBackgroundProps) {
  const opacityMap = { soft: "opacity-30", medium: "opacity-50", strong: "opacity-70" };

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Aurora blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div
          className={cn(
            "absolute -top-1/4 -left-1/4 w-3/4 h-3/4 rounded-full blur-3xl animate-aurora-1",
            opacityMap[intensity],
            "bg-gradient-radial from-amber-300 via-orange-200 to-transparent"
          )}
          style={{ background: "radial-gradient(circle, rgba(251,191,36,0.35) 0%, rgba(249,115,22,0.15) 50%, transparent 80%)" }}
        />
        <div
          className={cn(
            "absolute -bottom-1/4 -right-1/4 w-2/3 h-2/3 rounded-full blur-3xl animate-aurora-2",
            opacityMap[intensity]
          )}
          style={{ background: "radial-gradient(circle, rgba(180,83,9,0.25) 0%, rgba(120,53,15,0.1) 50%, transparent 80%)" }}
        />
        <div
          className={cn(
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 rounded-full blur-3xl animate-aurora-3",
            opacityMap[intensity]
          )}
          style={{ background: "radial-gradient(circle, rgba(254,215,170,0.2) 0%, transparent 70%)" }}
        />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
