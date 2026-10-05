import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/lib/cart";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { OfferBanner } from "@/components/OfferBanner";
import { AIAssistant } from "@/components/AIAssistant";
import { StickyCta } from "@/components/StickyCta";

export const metadata: Metadata = {
  title: "Harvest Box — Field to porch",
  description: "Handwritten farm CSA",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@500;600;700&family=Newsreader:opsz,wght@6..72,400;6..72,600;6..72,700&family=Source+Sans+3:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen font-body antialiased">
        <CartProvider>
          <OfferBanner />
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
          <StickyCta />
          <AIAssistant />
        </CartProvider>
      </body>
    </html>
  );
}
