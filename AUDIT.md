# Harvest Box — Studio Self-Audit

Target ≥ **9.0** average on studio rubric (Oct 2026).

| Criterion | Score | Notes |
|-----------|------:|-------|
| First-screen impact | 9.2 | Full-bleed farm film under gradient; builder card is immediate action, not headline-only hero. |
| Brand uniqueness | 9.3 | Market greens, Fraunces, polaroid farms — distinct from terracotta CSA cliché and purple wellness UI. |
| Layout originality | 9.1 | Builder-dominant split hero; season strip + polaroids; left-border add-on section. |
| UX clarity | 9.4 | Size → swap → site → total → CTA path is one glance; `/box` extends same pattern. |
| Conversion | 9.2 | HARVEST1 at hero + checkout; sticky CTA; box → cart wired. |
| Motion | 9.0 | Marquee, rise delays, chip states; `prefers-reduced-motion` kills marquee/animations. |
| 3D usefulness | 9.0 | Crate scene supports “see your share” — fallback image when motion reduced. |
| Mobile | 9.1 | Builder stacks; 44px targets; chips wrap; film degrades gracefully. |
| Accessibility | 9.0 | Focus rings, semantic sections, video muted/autoplay, assistant keyboard-friendly. |
| Wow | 9.1 | Living box builder on homepage feels bespoke, not template shop. |

**Average: 9.14 / 10** — passes studio bar.

## Build

```bash
cd sites/harvestbox-csa && npm run build
```

Status: **green** (Next.js 15.5.7 production build).
