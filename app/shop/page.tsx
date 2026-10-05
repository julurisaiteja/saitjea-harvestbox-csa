"use client";
import { useMemo, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { brand, products } from "@/lib/data";
import { ProductCard } from "@/components/ProductCard";

function ShopInner() {
  const sp = useSearchParams();
  const [q, setQ] = useState(sp.get("q") || "");
  const [cat, setCat] = useState(sp.get("cat") || "All");
  const [sort, setSort] = useState("featured");
  const cats = ["All", ...brand.categories];

  const list = useMemo(() => {
    let out = products.filter((p) => {
      const okCat = cat === "All" || p.category === cat;
      const okQ = !q || (p.name + p.description + p.category).toLowerCase().includes(q.toLowerCase());
      return okCat && okQ;
    });
    if (sort === "price-asc") out = [...out].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") out = [...out].sort((a, b) => b.price - a.price);
    if (sort === "rating") out = [...out].sort((a, b) => b.rating - a.rating);
    return out;
  }, [q, cat, sort]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
      <div className="kraft p-6 md:p-8">
        <p className="hand text-2xl text-[#2f6b3a]">market stall</p>
        <h1 className="font-display text-4xl md:text-5xl">Shop</h1>
        <p className="mt-2 text-sm text-brand-muted">{brand.niche} — boxes, pantry, gifts.</p>
        <div className="mt-6 flex flex-col gap-3 md:flex-row md:items-center">
          <input className="input md:max-w-xs" placeholder="Search produce…" value={q} onChange={(e) => setQ(e.target.value)} />
          <select className="input md:max-w-[180px]" value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="featured">Featured</option>
            <option value="price-asc">Price ↑</option>
            <option value="price-desc">Price ↓</option>
            <option value="rating">Top rated</option>
          </select>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {cats.map((c) => (
            <button key={c} type="button" data-active={cat === c} className="shop-chip" onClick={() => setCat(c)}>
              {c}
            </button>
          ))}
        </div>
        <p className="hand mt-5 text-xl text-[#2f6b3a]">
          {list.length} finds · {products.length} in the crate
        </p>
      </div>
      <div className="mt-8 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
        {list.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
      {!list.length && <p className="mt-10 text-brand-muted">No matches — try another stall.</p>}
    </div>
  );
}

export default function ShopPage() {
  return <Suspense fallback={<div className="px-4 py-16 text-brand-muted">Loading market…</div>}><ShopInner /></Suspense>;
}
