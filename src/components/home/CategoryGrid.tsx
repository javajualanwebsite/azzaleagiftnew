import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { CATEGORIES } from "@/data/categories";
import { FloralDecoration } from "@/components/ui/FloralDecoration";

export const CategoryGrid: React.FC = () => {
  const displayCategories = CATEGORIES.filter((c) => c.id !== "all");

  return (
    <section className="py-18 lg:py-24 bg-cream-50 relative overflow-hidden">{/* pink blush serasi logo - ganti putih */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[11px] font-extrabold uppercase tracking-editorial text-primary-600 flex items-center justify-center gap-1.5">
            <span>🌸</span> Pilihan Koleksi Bunga <span>🌸</span>
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-extrabold text-charcoal-900 mt-1">
            Kategori Souvenir Pernikahan
          </h2>
          <FloralDecoration variant="divider" />
          <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
            Temukan berbagai ragam souvenir handmade berkualitas yang dapat
            dikustomisasi sesuai tema warna dan konsep pesta pernikahan Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayCategories.map((category) => (
            <Link
              key={category.id}
              href={`/katalog?category=${category.slug}`}
              className="group relative rounded-3xl overflow-hidden bg-white shadow-soft hover:shadow-pink hover:-translate-y-1 transition-all duration-300 border-2 border-primary-200/80 flex flex-col justify-between"
            >
              <div className="relative h-52 sm:h-60 w-full overflow-hidden bg-rose-50">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-600"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/75 via-charcoal-900/25 to-transparent" />

                <div className="absolute top-3.5 right-3.5 bg-white/95 backdrop-blur px-3 py-1 rounded-full text-[10px] font-extrabold tracking-editorial uppercase text-primary-700 shadow-sm border border-primary-200">
                  🌸 {category.itemCount} Pilihan
                </div>

                <div className="absolute bottom-3.5 left-4 right-4 text-white">
                  <h3 className="font-serif text-xl font-bold group-hover:text-rose-200 transition-colors">
                    {category.name}
                  </h3>
                </div>
              </div>

              <div className="p-4 sm:p-5 flex items-center justify-between bg-white">
                <p className="text-xs text-charcoal-600 line-clamp-1 pr-2 font-medium">
                  {category.description}
                </p>
                <span className="text-xs font-extrabold text-primary-600 group-hover:translate-x-1 transition-transform flex items-center gap-1 flex-shrink-0">
                  Lihat <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
