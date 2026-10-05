import productsA from "./products-a.json";
import productsB from "./products-b.json";

export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  images: string[];
  description: string;
  rating: number;
  reviewCount: number;
  badge: string | null;
  related: string[];
  faq: [string, string][];
  specs: Record<string, string>;
  variants: string[];
  [key: string]: unknown;
};

export const brand = {
  slug: "harvestbox-csa",
  name: "Harvest Box",
  tagline: "Farm boxes, weekly.",
  niche: "Farm CSA boxes",
  description: "Community-supported agriculture boxes with seasonal produce, add-ons, and flexible delivery.",
  cta: "Start a share",
  checkoutNote: "Pause or skip weeks anytime in this demo flow.",
  heroImage: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=2400&q=80",
  heroVideo: "https://videos.pexels.com/video-files/5235411/5235411-uhd_2560_1440_25fps.mp4",
  categories: ["Weekly Boxes","Add-ons","Pantry","Gifts","Merch"] as string[],
  isBooking: false,
  offer: {"code":"HARVEST1","label":"First box $10 off + free herb bundle","ends":"New members"},
  loyalty: "Harvest Notes — recipes matched to your box",
  stats: [["48","partner farms"],["Weekly","pickup sites"],["4.9","member rating"],["0","mystery waste tips"]] as [string, string][],
  marquee: ["Seasonal boxes ·","Farm stories ·","Flexible skips ·","Pickup map ·","Chef cards ·"] as string[],
  reviews: [["Celia M.",5,"Box builder lets me swap kale for citrus. Finally CSA that fits."],["Tom H.",5,"Herb bundle with HARVEST1 was generous. Greens last."],["Irene P.",4,"Pickup site is easy. Recipe cards actually get used."]] as [string, number, string][],
  ai: [["Small household box?","Choose Petite Harvest. You can swap 2 items weekly in Box Builder."],["Allergic to nightshades?","Exclude tomatoes/peppers in preferences — we'll substitute roots & greens."],["Skip a week?","Skips are free until Thursday 8pm. Credits roll."],["First-box deal?","HARVEST1 = $10 off + herb bundle for new members."]] as [string, string][],
  blog: [["What peak season looks like","Farms"],["Storing greens so they last","Kitchen"],["Pickup etiquette","Members"]] as [string, string][],
  stores: ["12 pickup sites metro-wide"] as string[],
  nicheKind: "csa" as string,
};

export const products: Product[] = [...(productsA as Product[]), ...(productsB as Product[])];

export function formatPrice(n: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
}

export function getProduct(id: string) {
  return products.find((p) => p.id === id);
}

export function relatedProducts(p: Product) {
  return p.related.map(getProduct).filter(Boolean) as Product[];
}
