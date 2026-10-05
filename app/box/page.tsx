import Link from "next/link";
import { BoxBuilderHero } from "@/components/BoxBuilderHero";
import { ShareStory } from "@/components/ShareStory";

export default function BoxPage() {
  return (
    <div>
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
        <p className="hand text-2xl text-[#2f6b3a]">box builder</p>
        <h1 className="font-display text-4xl md:text-5xl">Pack your share</h1>
        <p className="mt-2 text-sm text-[#5c4a3a]">Handwritten farm energy — no spinning crate mesh.</p>
        <Link href="/shop" className="btn-primary mt-6 inline-flex">Shop add-ons</Link>
      </div>
      <BoxBuilderHero />
      <ShareStory />
    </div>
  );
}
