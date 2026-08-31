import type { Metadata } from "next";
import { TopBanner } from "@/components/layout/TopBanner";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { SITE_CONFIG } from "@/lib/constants";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://azzaleagift.com"),
  title: {
    default: SITE_CONFIG.seo.title,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.seo.description,
  keywords: SITE_CONFIG.seo.keywords,
  authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.instagramUrl }],
  creator: SITE_CONFIG.name,
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://azzaleagift.com",
    title: SITE_CONFIG.seo.title,
    description: SITE_CONFIG.seo.description,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: "/images/logo.png",
        width: 800,
        height: 800,
        alt: "Azzalea Handmade Souvenir Logo",
      },
    ],
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-cream-50 text-charcoal-900 antialiased selection:bg-primary-200 selection:text-primary-900">
        <TopBanner />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
