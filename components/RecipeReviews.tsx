const RECIPES: [string, string, string, number][] = [
  ["Celia M.", "Shakshuka with farm eggs", "Used the citrus swap + Riverbend eggs — HARVEST1 herb bundle on top.", 5],
  ["Tom H.", "Roasted root tray", "Winter box beets + carrots. Greens lasted five days in damp towel.", 5],
  ["Irene P.", "Herb gremolata pasta", "Recipe card actually got used — parsley from the petite share.", 4],
];

export function RecipeReviews() {
  return (
    <section className="bg-brand-primary/8 py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="font-display text-3xl text-brand-soil md:text-4xl">What members made</h2>
        <p className="mt-2 text-sm text-brand-muted">Reviews as recipe cards — not star clusters.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {RECIPES.map(([name, dish, story, stars]) => (
            <article
              key={name}
              className="border border-brand-border bg-brand-surface p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-accent">Member recipe</p>
              <h3 className="mt-2 font-display text-xl text-brand-soil">{dish}</h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-muted">&ldquo;{story}&rdquo;</p>
              <footer className="mt-5 flex items-center justify-between border-t border-dashed border-brand-border pt-3 text-xs">
                <span className="font-semibold text-brand-soil">{name}</span>
                <span className="text-brand-muted">{stars}/5</span>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
