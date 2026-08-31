import React, { Suspense } from "react";
import { Metadata } from "next";
import { CatalogView } from "@/components/catalog/CatalogView";

export const metadata: Metadata = {
  title: "Katalog Souvenir Pernikahan",
  description:
    "Jelajahi seluruh koleksi souvenir pernikahan handmade: Paper Bag, Pillow, Pecah Belah, Box & Other. Dapatkan estimasi harga instan & kustomisasi nama.",
};

export default function CatalogPage() {
  return (
    <Suspense
      fallback={
        <div className="py-20 text-center text-charcoal-500 font-medium">
          <div className="w-8 h-8 border-4 border-primary-500 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
          <span>Memuat koleksi souvenir...</span>
        </div>
      }
    >
      <CatalogView />
    </Suspense>
  );
}
