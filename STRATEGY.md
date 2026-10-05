# Harvest Box — Studio Strategy

## Eight decisions

1. **Customer:** Metro households (1–5 eaters) who want seasonal produce without rigid CSA waste — cooks who swap items weekly and pick up on the way home.
2. **5-second feel:** Open-air farm market — leafy greens, sun-washed video, wood crate energy — not purple “healthy app” SaaS.
3. **Signature:** **This Week’s Box Builder** owns the homepage hero (size chips, produce swaps, pickup site, live total → cart).
4. **Journey:** Box builder → season strip → farm polaroids → add-ons shop → cart → checkout with **HARVEST1** → success + pickup reminder.
5. **Layout originality:** Split hero (story left, builder card right); polaroid farm grid; recipe-style reviews — no generic 4-card testimonial row.
6. **Type & color:** Fraunces + Work Sans; `#e8f2ea` atmosphere, forest primary, sun accent — zero violet gradients.
7. **Motion & 3D:** Marquee farm facts; optional crate orbit (Three.js) with reduced-motion static poster; builder chips animate on select.
8. **Conversion hooks:** Offer banner, floating **Harvest Guide** AI (swaps, skips, allergies), newsletter, 12 pickup sites list, deep PDPs with FAQ/specs.

## Stack & routes

Next.js **15.5.7**, Tailwind 3, TypeScript, Three.js crate scene.  
Routes: `/`, `/shop`, `/box`, `/product/[id]`, `/cart`, `/checkout`, `/success`, `/wishlist`, `/about`.

## Signature (one line)

**This Week’s Box Builder** — swap produce, lock share size and pickup, add to cart from the first screen.
