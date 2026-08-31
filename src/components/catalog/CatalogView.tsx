"use client";

import React, { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import {
  Search,
  X,
  ShoppingBag,
  ArrowUpDown,
} from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { CATEGORIES } from "@/data/categories";
import { ProductCard } from "@/components/catalog/ProductCard";
import { Button } from "@/components/ui/Button";
import { FloralDecoration } from "@/components/ui/FloralDecoration";
import { cn } from "@/lib/utils";

export const CatalogView: React.FC = () => {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);

  // Sinkronkan state dengan URL (?category=...) agar klik dari homepage / CategoryGrid langsung terfilter
  useEffect(() => {
    const cat = searchParams.get("category") || "all";
    setSelectedCategory(cat);
  }, [searchParams]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("popular");
  const [maxPrice, setMaxPrice] = useState<number>(100000);

  // Client-side filtering & sorting (FR-03) — robust: handle "paper bag" vs "paper-bag" vs "PaperBag"
  const normalize = (s: string) => s.toLowerCase().trim().replace(/[\s_]+/g, "-").replace(/-+/g, "-");
  const normalizeNoDash = (s: string) => s.toLowerCase().replace(/[\s\-_]+/g, "");
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const selNorm = normalize(selectedCategory);
      const selNoDash = normalizeNoDash(selectedCategory);
      const prodNorm = normalize(product.category);
      const prodNoDash = normalizeNoDash(product.category);
      const matchesCategory =
        selNorm === "all" ||
        selNorm === "semua" ||
        prodNorm === selNorm ||
        prodNoDash === selNoDash;

      const matchesSearch =
        searchQuery === "" ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesPrice = product.price <= maxPrice;

      return matchesCategory && matchesSearch && matchesPrice;
    }).sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "moq-low") return a.moq - b.moq;
      if (sortBy === "rating") return (b.rating || 0) - (a.rating || 0);
      return (b.salesCount || 0) - (a.salesCount || 0);
    });
  }, [selectedCategory, searchQuery, sortBy, maxPrice]);

  const handleResetFilters = () => {
    setSelectedCategory("all");
    setSearchQuery("");
    setSortBy("popular");
    setMaxPrice(100000);
  };

  const isFiltering =
    selectedCategory !== "all" && selectedCategory !== "semua" ||
    searchQuery !== "" ||
    sortBy !== "popular" ||
    maxPrice < 100000;

  return (
    <div className="py-12 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-[11px] font-bold uppercase tracking-editorial text-primary-600">
          Koleksi Lengkap
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-charcoal-900 mt-1">
          Katalog Souvenir Pernikahan
        </h1>
        <FloralDecoration variant="divider" />
        <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
          Seluruh koleksi cinderamata pernikahan handmade Azzalea. Pilih model favorit Anda,
          sesuaikan pilihan warna & kemasan, serta lakukan simulasi harga secara transparan.
        </p>
      </div>

      {/* Filter & Search Controls */}
      <div className="bg-white rounded-3xl p-5 sm:p-7 shadow-soft border border-primary-100/80 mb-10 space-y-5">
        {/* Top: Search & Sort */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          {/* Search Input */}
          <div className="md:col-span-8 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal-400" />
            <input
              type="text"
              placeholder="Cari souvenir (contoh: paper bag, pillow, pecah belah, box, gold foil)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-10 py-3 rounded-full bg-cream-50/80 border border-cream-300 focus:border-primary-400 focus:bg-white focus:outline-none text-xs sm:text-sm transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-charcoal-400 hover:text-charcoal-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Sort Selector */}
          <div className="md:col-span-4 relative">
            <div className="flex items-center gap-2">
              <ArrowUpDown className="w-4 h-4 text-charcoal-500 flex-shrink-0" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                aria-label="Urutkan produk"
                className="w-full py-3 px-4 rounded-full bg-cream-50/80 border border-cream-300 focus:border-primary-400 focus:bg-white focus:outline-none text-xs sm:text-sm transition-all cursor-pointer font-medium"
              >
                <option value="popular">Paling Populer & Terlaris</option>
                <option value="price-low">Harga: Termurah ke Termahal</option>
                <option value="price-high">Harga: Termahal ke Termurah</option>
                <option value="moq-low">Minimum Order Terendah</option>
                <option value="rating">Rating Tertinggi</option>
              </select>
            </div>
          </div>
        </div>

        {/* Category Pill Tabs */}
        <div className="pt-3.5 border-t border-cream-200">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const isSelected =
                selectedCategory === cat.slug ||
                (cat.slug === "semua" && (selectedCategory === "all" || selectedCategory === "semua"));

              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.slug)}
                  className={cn(
                    "px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-1.5",
                    isSelected
                      ? "bg-primary-500 text-white shadow-xs"
                      : "bg-cream-100 text-charcoal-700 hover:bg-primary-50 hover:text-primary-700"
                  )}
                >
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Filter Badges */}
        {isFiltering && (
          <div className="pt-3 border-t border-cream-200 flex items-center justify-between flex-wrap gap-2 text-xs">
            <div className="flex items-center gap-2 text-charcoal-600">
              <span className="font-medium">Filter Aktif:</span>
              {selectedCategory !== "all" && selectedCategory !== "semua" && (
                <span className="bg-primary-100 text-primary-800 px-3 py-0.5 rounded-full font-bold text-[11px]">
                  Kategori: {selectedCategory}
                </span>
              )}
              {searchQuery && (
                <span className="bg-primary-100 text-primary-800 px-3 py-0.5 rounded-full font-bold text-[11px]">
                  Pencarian: &quot;{searchQuery}&quot;
                </span>
              )}
            </div>

            <button
              onClick={handleResetFilters}
              className="text-xs font-bold text-primary-600 hover:text-primary-800 underline flex items-center gap-1 cursor-pointer"
            >
              <X className="w-3 h-3" /> Reset Filter
            </button>
          </div>
        )}
      </div>

      {/* Results Header Count */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-xs sm:text-sm text-charcoal-600 font-medium">
          Menampilkan <strong className="text-charcoal-900 font-bold">{filteredProducts.length}</strong> produk souvenir
        </p>
      </div>

      {/* Grid or Empty */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-18 bg-white rounded-3xl border border-primary-100 p-8 shadow-soft">
          <div className="w-16 h-16 rounded-full bg-cream-200 flex items-center justify-center mx-auto mb-4 text-charcoal-400">
            <ShoppingBag className="w-8 h-8" />
          </div>
          <h3 className="font-serif text-xl font-bold text-charcoal-900 mb-1">
            Tidak Ada Produk yang Cocok
          </h3>
          <p className="text-xs sm:text-sm text-charcoal-500 max-w-md mx-auto mb-6">
            Kami tidak menemukan souvenir yang sesuai dengan kata kunci atau filter Anda. Coba kata kunci lain atau hubungi admin untuk request kustom.
          </p>
          <Button onClick={handleResetFilters} variant="primary" size="md">
            Reset Filter & Tampilkan Semua
          </Button>
        </div>
      )}
    </div>
  );
};
