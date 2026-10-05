"use client";

import { useState } from "react";
import Link from "next/link";
import { brand, products, formatPrice } from "@/lib/data";
import { useCart } from "@/lib/cart";
import { HeroCinema } from "@/components/HeroCinema";

const PRODUCE = ["Kale", "Carrots", "Citrus", "Herbs", "Eggs", "Mushrooms", "Apples", "Beets", "Radish", "Spinach"];
const SIZES = ["Petite", "Standard", "Family"] as const;
const SIZE_PRICE = { Petite: 28, Standard: 38, Family: 48 };

export function BoxBuilderHero() {
  const [size, setSize] = useState<(typeof SIZES)[number]>("Standard");
  const [picks, setPicks] = useState(PRODUCE.slice(0, 6));
  const [site, setSite] = useState(brand.stores[0]);
  const { add } = useCart();
  const box = products[0];

  function swap(item: string) {
    setPicks((prev) => {
      if (prev.includes(item)) return prev.filter((x) => x !== item);
      if (prev.length >= 7) return prev;
      return [...prev, item];
    });
  }

  return (
    <section className="relative min-h-[92vh] overflow-hidden">
      <HeroCinema video={brand.heroVideo} image={brand.heroImage} />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-sky/90 via-brand-bg/85 to-brand-bg" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-16 pt-24 md:px-6 md:pt-28 lg:flex-row lg:items-start lg:gap-12">
        <div className="lg:w-[38%] animate-rise">
          <p className="font-display text-4xl leading-tight text-brand-soil md:text-5xl">This week&apos;s box builder</p>
          <p className="mt-3 text-sm leading-relaxed text-brand-muted">
            Swap produce chips, choose share size, lock a pickup site — then checkout like any share.
          </p>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-brand-primary">
            Code {brand.offer.code} · {brand.offer.label}
          </p>
        </div>
        <div className="flex-1 rounded-md border-2 border-brand-primary/25 bg-brand-surface/95 p-6 shadow-[0_24px_60px_-20px_#2f6b3a55] backdrop-blur-sm animate-rise-delay">
          <div className="flex flex-wrap gap-2 border-b border-brand-border pb-4">
            {SIZES.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setSize(s)}
                className={`border px-4 py-2 text-xs font-semibold uppercase tracking-wide transition ${
                  size === s
                    ? "border-brand-primary bg-brand-primary text-white"
                    : "border-brand-border bg-brand-bg text-brand-soil hover:border-brand-primary/50"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
          <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-muted">Swap produce</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {PRODUCE.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => swap(item)}
                className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${
                  picks.includes(item)
                    ? "border-brand-primary bg-brand-primary/12 text-brand-soil"
                    : "border-brand-border text-brand-muted hover:border-brand-primary/40"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          <label className="mt-5 block text-sm text-brand-soil">
            Pickup site
            <select className="input mt-1.5" value={site} onChange={(e) => setSite(e.target.value)}>
              {brand.stores.map((s) => (
                <option key={s}>{s}</option>
              ))}
              <option>Farmers Market Lot B</option>
              <option>Community Hub North</option>
            </select>
          </label>
          <div className="mt-6 flex flex-col gap-3 border-t border-dashed border-brand-border pt-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-display text-2xl text-brand-soil">{size} share</p>
              <p className="text-xs text-brand-muted">{picks.length} items · {site}</p>
              <p className="mt-1 font-semibold text-brand-primary">{formatPrice(SIZE_PRICE[size])}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                className="btn-primary"
                onClick={() => add({ ...box, price: SIZE_PRICE[size] }, 1, `${size} · ${picks.slice(0, 3).join(", ")}`)}
              >
                Add to cart
              </button>
              <Link href="/box" className="btn-ghost text-xs">
                Full builder
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
