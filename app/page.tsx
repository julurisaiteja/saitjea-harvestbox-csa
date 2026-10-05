import Link from "next/link";
import { brand, products } from "@/lib/data";
import { ProductCard } from "@/components/ProductCard";
import { Newsletter } from "@/components/Newsletter";
import { BoxBuilderHero } from "@/components/BoxBuilderHero";
import { SeasonStrip } from "@/components/SeasonStrip";
import { FarmPolaroids } from "@/components/FarmPolaroids";
import { RecipeReviews } from "@/components/RecipeReviews";
import { ShareStory } from "@/components/ShareStory";
import { HeroCinema } from "@/components/HeroCinema";

export default function HomePage() {
  const addOns = products.filter((p) => p.category === "Add-ons" || p.category === "Pantry").slice(0, 4);
  return (
    <>
      <section className="relative overflow-hidden px-4 py-12 md:px-8 md:py-16">
        <HeroCinema video={brand.heroVideo} image={brand.heroImage} className="opacity-35" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#e8d9c0ee_0%,#e8d9c0cc_55%,#e8d9c0f2_100%)]" />
        <div className="relative mx-auto grid max-w-6xl gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <div className="kraft p-8 md:p-12 animate-rise">
            <p className="hand text-3xl text-[#2f6b3a]">this week from the field →</p>
            <h1 className="mt-2 font-display text-5xl leading-tight md:text-6xl">{brand.name}</h1>
            <p className="hand mt-4 text-3xl text-[#3b2f27]">{brand.tagline}</p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-[#5c4a3a]">{brand.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/box" className="btn-primary">Build your box</Link>
              <Link href="/shop" className="border-2 border-[#3b2f27] bg-[#f0c419]/40 px-4 py-2 font-semibold shadow-[3px_3px_0_#3b2f27]">Shop add-ons</Link>
            </div>
          </div>
          <div className="chalk flex flex-col justify-between p-6 md:p-8 animate-rise-delay">
            <p className="hand text-2xl text-[#f0c419]">chalkboard specials</p>
            <ul className="mt-4 space-y-3 font-display text-2xl stagger-children">
              {brand.stats.map(([n, l]) => (
                <li key={l} className="flex items-baseline justify-between border-b border-dashed border-white/25 pb-2">
                  <span>{l}</span>
                  <span className="hand text-3xl text-[#f0c419]">{n}</span>
                </li>
              ))}
            </ul>
            <p className="hand mt-6 text-xl text-white/80">ink · kraft · season</p>
          </div>
        </div>
        <div className="farm-strip relative mx-auto mt-8 max-w-6xl">
          <HeroCinema video={brand.heroVideo} image={brand.heroImage} />
          <p className="hand absolute bottom-3 left-4 z-10 text-2xl text-white drop-shadow-[2px_2px_0_#3b2f27]">
            farm film · this week&apos;s rows
          </p>
        </div>
      </section>
      <BoxBuilderHero />
      <ShareStory />
      <SeasonStrip />
      <FarmPolaroids />
      <RecipeReviews />
      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <h2 className="hand text-4xl text-[#2f6b3a]">pantry extras</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {addOns.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>
      <Newsletter />
    </>
  );
}
