"use client";

import { useState } from "react";

const SEASONS = [
  { id: "spring", label: "Spring", note: "Tender greens & radish", tint: "#a8d5a2" },
  { id: "summer", label: "Summer", note: "Berries & nightshades", tint: "#f0c419" },
  { id: "fall", label: "Fall", note: "Roots & squash", tint: "#c4a574" },
  { id: "winter", label: "Winter", note: "Storage crops", tint: "#8fa8c4" },
] as const;

export function SeasonStrip() {
  const [active, setActive] = useState<(typeof SEASONS)[number]["id"]>("spring");
  const cur = SEASONS.find((s) => s.id === active)!;

  return (
    <nav
      className="border-y border-brand-border bg-brand-surface/80"
      aria-label="Seasonal mood navigation"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex overflow-x-auto">
          {SEASONS.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setActive(s.id)}
              className={`relative min-w-[140px] flex-1 border-r border-brand-border/60 px-4 py-5 text-left transition last:border-r-0 ${
                active === s.id ? "bg-brand-bg" : "hover:bg-brand-bg/60"
              }`}
            >
              <span
                className="mb-2 block h-1 w-8 rounded-full transition-all"
                style={{ background: active === s.id ? s.tint : "#d7e0c8" }}
              />
              <span className="font-display text-lg text-brand-soil">{s.label}</span>
              <span className="mt-1 block text-[11px] text-brand-muted">{s.note}</span>
            </button>
          ))}
        </div>
        <p className="border-t border-brand-border/60 py-3 text-center text-xs text-brand-muted animate-fade">
          Box mood: <strong className="text-brand-soil">{cur.label}</strong> — {cur.note}
        </p>
      </div>
    </nav>
  );
}
