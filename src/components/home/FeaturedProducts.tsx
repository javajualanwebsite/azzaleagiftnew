import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { ProductCard } from "@/components/catalog/ProductCard";
import { Button } from "@/components/ui/Button";
import { FloralDecoration } from "@/components/ui/FloralDecoration";

export const FeaturedProducts: React.FC = () => {
  const featured = PRODUCTS.filter((p) => p.isBestSeller).slice(0, 6);

  return (
    <section className="py-20 lg:py-28 bg-primary-50/40 relative overflow-hidden">{/* pink serasi - sebelumnya putih/cream pucat */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-editorial text-primary-600 mb-1.5">
              <span>🌸</span>
              <span>Favorit Calon Pengantin</span>
              <span>🌸</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl font-extrabold text-charcoal-900">
              Koleksi Best Seller Terlaris
            </h2>
            <FloralDecoration variant="divider" className="justify-start my-2" />
            <p className="text-xs sm:text-sm text-charcoal-700 max-w-xl leading-relaxed">
              Pilihan cinderamata pernikahan yang paling banyak diminati.
              Kualitas material teruji, jahitan rapi, dan siap melengkapi momen sakral Anda.
            </p>
          </div>

          <div className="flex-shrink-0">
            <Button
              href="/katalog"
              variant="outline"
              size="md"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Lihat Seluruh Katalog ({PRODUCTS.length})
            </Button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Pink Floral Custom Model Banner */}
        <div className="mt-14 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-primary-600 via-rose-500 to-primary-700 text-white shadow-pink border-2 border-primary-300 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center sm:text-left">
            <span className="text-[10px] font-extrabold uppercase tracking-editorial text-accent-200 flex items-center gap-1 sm:justify-start justify-center">
              <span>🌸</span> Custom Order Service
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
              Punya Referensi Model atau Desain Bunga Sendiri?
            </h3>
            <p className="text-xs sm:text-sm text-rose-100 max-w-xl font-medium">
              Pengrajin Azzalea Handmade siap melayani pesanan kustom (model khusus, ukuran, kombinasi warna pink pastel, dan emboss eksklusif).
            </p>
          </div>
          <Button
            href="https://wa.me/628888533915?text=Halo%20Azzalea%20Handmade%2C%20saya%20punya%20request%20custom%20model%20souvenir%20sendiri.%20Boleh%20konsultasi%3F"
            isExternal
            variant="gold"
            size="md"
            className="flex-shrink-0 shadow-lg font-extrabold text-xs sm:text-sm"
          >
            Konsultasi Model Kustom 🌸
          </Button>
        </div>
      </div>
    </section>
  );
};
