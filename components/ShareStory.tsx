import Link from "next/link";
import { brand } from "@/lib/data";

export function ShareStory() {
  return (
    <section className="border-y border-brand-border bg-brand-bg">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-12 md:grid-cols-2 md:px-6">
        <div>
          <h2 className="font-display text-3xl text-brand-soil">From field to porch</h2>
          <p className="mt-3 text-sm text-brand-muted">
            Season strips, polaroids, and the box builder tell the share story — skip the spinning crate mesh. Swap items, lock a size, meet the farm.
          </p>
          <Link href="/box" className="btn-primary mt-6 inline-flex">
            Build your box
          </Link>
        </div>
        <div className="relative min-h-[280px] overflow-hidden border border-brand-border">
          <div className="hero-film" aria-hidden>
            <img className="hero-film-img" src={brand.heroImage} alt="" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-soil/70 via-transparent to-brand-primary/30" />
          <div className="absolute bottom-0 left-0 p-5 text-white">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/80">This week&apos;s mood</p>
            <p className="font-display text-3xl">Leaf · sun · soil</p>
          </div>
        </div>
      </div>
    </section>
  );
}
