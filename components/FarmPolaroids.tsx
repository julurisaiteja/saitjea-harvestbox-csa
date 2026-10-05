import Image from "next/image";

const PARTNERS = [
  {
    farm: "Green Hollow Farm",
    caption: "Third-generation greens outside the metro belt.",
    rotate: "-3deg",
    img: "https://images.unsplash.com/photo-1464226184884-fa280b87b399?auto=format&fit=crop&w=600&q=80",
  },
  {
    farm: "Sunline Orchard",
    caption: "Stone fruit share peaks in late July.",
    rotate: "2.5deg",
    img: "https://images.unsplash.com/photo-1560493678-abeab3c6fd47?auto=format&fit=crop&w=600&q=80",
  },
  {
    farm: "Riverbend Eggs",
    caption: "Pasture rotation — add-on dozen every week.",
    rotate: "-1.5deg",
    img: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=600&q=80",
  },
];

export function FarmPolaroids() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
      <h2 className="font-display text-3xl text-brand-soil md:text-4xl">Farm partner stories</h2>
      <p className="mt-2 max-w-lg text-sm text-brand-muted">Polaroids from the field — who grows what lands in your crate.</p>
      <div className="mt-10 flex flex-wrap justify-center gap-8 md:gap-10">
        {PARTNERS.map((p) => (
          <figure
            key={p.farm}
            className="w-[min(100%,260px)] bg-white p-3 pb-8 shadow-[0_12px_40px_-12px_#3b2f2740]"
            style={{ transform: `rotate(${p.rotate})` }}
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-brand-border">
              <Image src={p.img} alt="" fill className="object-cover" sizes="260px" />
            </div>
            <figcaption className="mt-4 px-1">
              <p className="font-display text-lg leading-tight text-brand-soil">{p.farm}</p>
              <p className="mt-2 font-body text-xs leading-relaxed text-brand-muted">{p.caption}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
