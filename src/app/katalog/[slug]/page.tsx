import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { ProductGallery } from "@/components/product/ProductGallery";
import { CostEstimator } from "@/components/product/CostEstimator";
import { ProductTabs } from "@/components/product/ProductTabs";
import { ProductCard } from "@/components/catalog/ProductCard";
import { RatingStars } from "@/components/ui/RatingStars";
import { Badge } from "@/components/ui/Badge";
import { FloralDecoration } from "@/components/ui/FloralDecoration";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const product = PRODUCTS.find((p) => p.slug === params.slug);

  if (!product) {
    return {
      title: "Produk Tidak Ditemukan",
    };
  }

  return {
    title: `${product.name} - Souvenir Pernikahan`,
    description: product.shortDescription,
    openGraph: {
      title: `${product.name} | Azzalea Handmade`,
      description: product.shortDescription,
      images: [
        {
          url: product.images[0],
          alt: product.name,
        },
      ],
    },
  };
}

export default function ProductDetailPage({ params }: PageProps) {
  const product = PRODUCTS.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = PRODUCTS.filter(
    (p) => p.id !== product.id && (p.category === product.category || p.isBestSeller)
  ).slice(0, 3);

  return (
    <div className="py-10 lg:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-xs text-charcoal-500 mb-8 overflow-x-auto pb-1">
        <Link href="/" className="hover:text-primary-600 font-semibold">
          Beranda
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-charcoal-400 flex-shrink-0" />
        <Link href="/katalog" className="hover:text-primary-600 font-semibold">
          Katalog
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-charcoal-400 flex-shrink-0" />
        <Link
          href={`/katalog?category=${product.category}`}
          className="hover:text-primary-600 font-semibold capitalize"
        >
          {product.category.replace("-", " ")}
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-charcoal-400 flex-shrink-0" />
        <span className="text-charcoal-900 font-bold truncate max-w-xs">
          {product.name}
        </span>
      </nav>

      {/* Main Detail Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left: Gallery & Tabs */}
        <div className="lg:col-span-6 space-y-8">
          <ProductGallery product={product} />
          <div className="hidden lg:block">
            <ProductTabs product={product} />
          </div>
        </div>

        {/* Right: Info & Estimator */}
        <div className="lg:col-span-6 space-y-6">
          {/* Header Info */}
          <div>
            <div className="flex items-center gap-2 mb-2.5">
              <Badge variant="primary" size="sm" className="capitalize">
                {product.category.replace("-", " ")}
              </Badge>
              <Badge variant="neutral" size="sm">
                MOQ {product.moq} pcs
              </Badge>
            </div>

            <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-extrabold text-charcoal-900 leading-tight">
              {product.name}
            </h1>

            <div className="flex items-center gap-4 mt-3 pb-4 border-b border-cream-200">
              <div className="flex items-center gap-1.5">
                <RatingStars rating={product.rating || 5.0} showScore />
                <span className="text-xs text-charcoal-500 font-medium">
                  ({product.reviewsCount || 85} ulasan)
                </span>
              </div>
              <span className="text-cream-300">•</span>
              <span className="text-xs text-charcoal-600 font-bold">
                {product.salesCount ? `${product.salesCount.toLocaleString()}+ pesanan sukses` : "Populer"}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed mt-4">
              {product.shortDescription}
            </p>
          </div>

          {/* Interactive Cost Estimator (FR-05 & FR-06) */}
          <CostEstimator product={product} />

          {/* Mobile Tabs placement */}
          <div className="block lg:hidden pt-4">
            <ProductTabs product={product} />
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-20 pt-14 border-t border-primary-100/80">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-[11px] font-bold uppercase tracking-editorial text-primary-600">
              Rekomendasi Lainnya
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-charcoal-900 mt-1">
              Souvenir Pernikahan Serupa
            </h2>
            <FloralDecoration variant="divider" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {relatedProducts.map((relProduct) => (
              <ProductCard key={relProduct.id} product={relProduct} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
