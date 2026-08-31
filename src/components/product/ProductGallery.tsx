"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Award } from "lucide-react";
import { Product } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

interface ProductGalleryProps {
  product: Product;
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({ product }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative h-96 sm:h-[460px] w-full rounded-3xl overflow-hidden bg-cream-100 border border-primary-100/90 shadow-soft group">
        <Image
          src={product.images[selectedImageIndex] || product.images[0]}
          alt={product.name}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-600 group-hover:scale-105"
        />

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-1.5 pointer-events-none">
          {product.isBestSeller && (
            <Badge variant="gold" size="md" icon={<Award className="w-3.5 h-3.5" />}>
              Best Seller 2026
            </Badge>
          )}
          {product.isNew && (
            <Badge variant="primary" size="md">
              Desain Terbaru
            </Badge>
          )}
        </div>

        {/* Counter */}
        <div className="absolute bottom-4 right-4 bg-espresso-900/80 backdrop-blur-xs text-cream-100 text-xs px-3.5 py-1.5 rounded-full font-bold shadow-sm">
          {selectedImageIndex + 1} / {product.images.length}
        </div>
      </div>

      {/* Thumbnails */}
      {product.images.length > 1 && (
        <div className="flex items-center gap-3 overflow-x-auto pb-2">
          {product.images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedImageIndex(idx)}
              className={cn(
                "relative w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 border-2 transition-all cursor-pointer bg-cream-100",
                selectedImageIndex === idx
                  ? "border-primary-500 ring-2 ring-primary-300 scale-95 shadow-sm"
                  : "border-transparent opacity-70 hover:opacity-100"
              )}
            >
              <Image
                src={img}
                alt={`${product.name} thumbnail ${idx + 1}`}
                fill
                sizes="80px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
