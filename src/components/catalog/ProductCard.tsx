import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, MessageCircle, ArrowRight, Award } from "lucide-react";
import { Product } from "@/types";
import { formatRupiah } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import { RatingStars } from "@/components/ui/RatingStars";
import { generateWhatsAppLink } from "@/lib/whatsapp";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group rounded-3xl bg-white border border-primary-100/80 shadow-soft hover:shadow-editorial hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col justify-between">
      {/* Product Image & Badges */}
      <div className="relative h-56 sm:h-64 w-full bg-cream-100 overflow-hidden">
        <Link href={`/katalog/${product.slug}`} className="block h-full w-full">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-600"
          />
        </Link>

        {/* Badges */}
        <div className="absolute top-3.5 left-3.5 flex flex-col gap-1.5 pointer-events-none">
          {product.isBestSeller && (
            <Badge variant="gold" size="sm" icon={<Award className="w-3 h-3" />}>
              Best Seller
            </Badge>
          )}
          {product.isNew && (
            <Badge variant="primary" size="sm">
              New Design
            </Badge>
          )}
        </div>

        {/* MOQ Tag */}
        <div className="absolute top-3.5 right-3.5 bg-espresso-900/80 backdrop-blur-xs text-cream-100 text-[10px] font-bold tracking-editorial uppercase px-3 py-1 rounded-full shadow-sm pointer-events-none">
          MOQ {product.moq} pcs
        </div>

        {/* Freebie Pill */}
        {product.freebies && product.freebies[0] && (
          <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-xl text-[10px] sm:text-[11px] font-semibold text-primary-800 shadow-2xs border border-primary-100 flex items-center gap-1.5 pointer-events-none">
            <Sparkles className="w-3 h-3 text-accent-500 flex-shrink-0" />
            <span className="truncate">{product.freebies[0]}</span>
          </div>
        )}
      </div>

      {/* Product Information */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Rating & Sales */}
          <div className="flex items-center justify-between gap-2 mb-2">
            <RatingStars rating={product.rating || 4.9} showScore />
            <span className="text-[11px] text-charcoal-400 font-medium">
              {product.salesCount ? `${product.salesCount.toLocaleString()} dipesan` : "Ready PO"}
            </span>
          </div>

          {/* Title */}
          <Link href={`/katalog/${product.slug}`}>
            <h3 className="font-serif text-base sm:text-lg font-bold text-charcoal-900 group-hover:text-primary-600 transition-colors line-clamp-1 mb-1.5">
              {product.name}
            </h3>
          </Link>

          {/* Description */}
          <p className="text-xs text-charcoal-500 line-clamp-2 mb-3.5 leading-relaxed">
            {product.shortDescription}
          </p>

          {/* Color Swatches */}
          {product.colors && product.colors.length > 0 && (
            <div className="flex items-center gap-1.5 mb-4">
              <span className="text-[11px] text-charcoal-400 mr-1 font-medium">Warna:</span>
              <div className="flex items-center -space-x-1">
                {product.colors.slice(0, 5).map((color, idx) => (
                  <span
                    key={idx}
                    className="w-4 h-4 rounded-full border-2 border-white shadow-2xs"
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  />
                ))}
              </div>
              {product.colors.length > 5 && (
                <span className="text-[10px] text-charcoal-400 font-semibold ml-1">
                  +{product.colors.length - 5}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Pricing & Actions */}
        <div className="pt-3.5 border-t border-cream-200">
          <div className="flex items-baseline justify-between mb-3.5">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-charcoal-400 block leading-none mb-0.5">
                Mulai dari
              </span>
              <span className="font-extrabold text-base sm:text-lg text-primary-600">
                {formatRupiah(product.price)}
              </span>
              <span className="text-xs text-charcoal-500 font-medium"> / pcs</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Link
              href={`/katalog/${product.slug}`}
              className="w-full inline-flex items-center justify-center gap-1 bg-cream-100 hover:bg-primary-50 text-charcoal-800 hover:text-primary-700 text-xs font-bold py-2.5 px-3 rounded-full border border-cream-300 hover:border-primary-200 transition-all duration-200"
            >
              <span>Simulasi</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <a
              href={generateWhatsAppLink({
                productName: product.name,
                quantity: product.moq,
                totalPrice: product.price * product.moq,
              })}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-1 bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-bold py-2.5 px-3 rounded-full shadow-xs transition-all duration-200"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white" />
              <span>Tanya WA</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
