"use client";

import React, { useState, useMemo } from "react";
import {
  MessageCircle,
  Plus,
  Minus,
  Check,
  AlertCircle,
  ShieldCheck,
  Calendar,
  PenTool,
} from "lucide-react";
import { Product } from "@/types";
import { formatRupiah, formatNumber, cn } from "@/lib/utils";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";

interface CostEstimatorProps {
  product: Product;
}

export const CostEstimator: React.FC<CostEstimatorProps> = ({ product }) => {
  const [quantity, setQuantity] = useState<number>(product.moq);
  const [selectedColor, setSelectedColor] = useState<string>(
    product.colors && product.colors.length > 0 ? product.colors[0].name : ""
  );
  const [selectedPackagingId, setSelectedPackagingId] = useState<string>(
    product.packagingOptions && product.packagingOptions.length > 0
      ? product.packagingOptions[0].id
      : ""
  );
  const [customEmbossText, setCustomEmbossText] = useState<string>("");
  const [weddingDate, setWeddingDate] = useState<string>("");
  const [notes, setNotes] = useState<string>("");

  const currentPackaging = product.packagingOptions?.find(
    (p) => p.id === selectedPackagingId
  );
  const packagingExtra = currentPackaging ? currentPackaging.extraPrice : 0;
  const effectiveUnitPrice = product.price + packagingExtra;

  // Real-time calculation (FR-05)
  const totalCost = useMemo(() => {
    return effectiveUnitPrice * quantity;
  }, [effectiveUnitPrice, quantity]);

  const handleAddQty = (amount: number) => {
    setQuantity((prev) => Math.max(product.moq, prev + amount));
  };

  const handleQtyChange = (val: number) => {
    if (isNaN(val)) {
      setQuantity(product.moq);
    } else {
      setQuantity(Math.max(1, val));
    }
  };

  // WhatsApp dynamic URL generator (FR-06)
  const waUrl = generateWhatsAppLink({
    productName: product.name,
    quantity: quantity,
    totalPrice: totalCost,
    selectedColor: selectedColor,
    selectedPackaging: currentPackaging?.name,
    customEmbossText: customEmbossText,
    weddingDate: weddingDate,
    notes: notes,
  });

  const isBelowMOQ = quantity < product.moq;

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-card border border-primary-100/90 space-y-6">
      <div className="border-b border-cream-200 pb-4">
        <span className="text-[10px] font-bold uppercase tracking-editorial text-secondary-600 block mb-1">
          Kalkulator & Order Inquiry
        </span>
        <h3 className="font-serif text-xl sm:text-2xl font-bold text-charcoal-900">
          Simulasi Estimasi Biaya
        </h3>
        <p className="text-xs text-charcoal-500 mt-1">
          Sesuaikan jumlah dan rincian kustomisasi souvenir untuk melihat estimasi total harga secara instan.
        </p>
      </div>

      {/* 1. Color Selector */}
      {product.colors && product.colors.length > 0 && (
        <div>
          <label className="text-[11px] font-bold text-charcoal-800 uppercase tracking-wider block mb-2.5">
            1. Pilihan Warna Bahan:{" "}
            <span className="text-primary-600 font-bold">{selectedColor}</span>
          </label>
          <div className="flex flex-wrap gap-2">
            {product.colors.map((color) => {
              const isSelected = selectedColor === color.name;
              return (
                <button
                  key={color.name}
                  type="button"
                  onClick={() => setSelectedColor(color.name)}
                  className={cn(
                    "flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-medium border transition-all cursor-pointer",
                    isSelected
                      ? "border-primary-500 bg-primary-50 text-primary-900 ring-2 ring-primary-300 font-bold shadow-2xs"
                      : "border-cream-300 bg-cream-50/60 text-charcoal-700 hover:border-primary-200"
                  )}
                >
                  <span
                    className="w-3.5 h-3.5 rounded-full border border-black/10 shadow-2xs"
                    style={{ backgroundColor: color.hex }}
                  />
                  <span>{color.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* 2. Packaging Selector */}
      {product.packagingOptions && product.packagingOptions.length > 0 && (
        <div>
          <label className="text-[11px] font-bold text-charcoal-800 uppercase tracking-wider block mb-2.5">
            2. Pilihan Kemasan Souvenir:
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {product.packagingOptions.map((pack) => {
              const isSelected = selectedPackagingId === pack.id;
              return (
                <button
                  key={pack.id}
                  type="button"
                  onClick={() => setSelectedPackagingId(pack.id)}
                  className={cn(
                    "p-3.5 rounded-2xl text-left border transition-all cursor-pointer flex items-start gap-2.5",
                    isSelected
                      ? "border-primary-500 bg-primary-50/80 text-primary-900 ring-2 ring-primary-300 shadow-2xs"
                      : "border-cream-200 bg-cream-50/60 text-charcoal-700 hover:border-primary-200"
                  )}
                >
                  <div
                    className={cn(
                      "w-4 h-4 rounded-full border mt-0.5 flex items-center justify-center flex-shrink-0 transition-colors",
                      isSelected
                        ? "border-primary-600 bg-primary-600 text-white"
                        : "border-charcoal-300 bg-white"
                    )}
                  >
                    {isSelected && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-charcoal-900 leading-tight">
                      {pack.name}
                    </p>
                    {pack.description && (
                      <p className="text-[11px] text-charcoal-500 mt-0.5">
                        {pack.description}
                      </p>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* 3. Quantity Controller (FR-05) */}
      <div className="p-4 sm:p-5 rounded-3xl bg-cream-50/90 border border-primary-100">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
          <div>
            <label className="text-[11px] font-bold text-charcoal-800 uppercase tracking-wider block">
              3. Jumlah Pesanan (Pcs):
            </label>
            <span className="text-[11px] text-charcoal-500">
              Minimum Order: <strong>{product.moq} pcs</strong>
            </span>
          </div>

          {/* Stepper */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => handleAddQty(-25)}
              disabled={quantity <= product.moq}
              className="w-9 h-9 rounded-full bg-white border border-cream-300 flex items-center justify-center text-charcoal-700 hover:bg-primary-50 hover:text-primary-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors shadow-2xs"
            >
              <Minus className="w-4 h-4" />
            </button>

            <input
              type="number"
              min={1}
              value={quantity}
              onChange={(e) => handleQtyChange(parseInt(e.target.value))}
              className="w-24 text-center font-serif text-lg font-bold py-1.5 rounded-full border border-cream-300 bg-white focus:outline-none focus:ring-2 focus:ring-primary-400"
            />

            <button
              type="button"
              onClick={() => handleAddQty(25)}
              className="w-9 h-9 rounded-full bg-white border border-cream-300 flex items-center justify-center text-charcoal-700 hover:bg-primary-50 hover:text-primary-700 transition-colors shadow-2xs"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Presets */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-[11px] text-charcoal-400 mr-1 font-medium">Preset:</span>
          {[100, 200, 300, 500, 1000].map((preset) => (
            <button
              key={preset}
              type="button"
              onClick={() => setQuantity(preset)}
              className={cn(
                "px-3 py-1 rounded-full text-xs font-bold border transition-colors",
                quantity === preset
                  ? "bg-primary-500 text-white border-primary-500 shadow-2xs"
                  : "bg-white text-charcoal-700 border-cream-300 hover:border-primary-300"
              )}
            >
              {preset} pcs
            </button>
          ))}
        </div>

        {/* Warning Alert */}
        {isBelowMOQ && (
          <div className="mt-3 p-3 rounded-2xl bg-amber-50 border border-amber-200 flex items-center gap-2 text-amber-800 text-xs">
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            <span>
              Jumlah di bawah minimum order ({product.moq} pcs). Untuk pesanan di bawah MOQ, silakan diskusikan langsung dengan admin.
            </span>
          </div>
        )}
      </div>

      {/* 4. Customization Options */}
      <div className="space-y-3 pt-2">
        <label className="text-[11px] font-bold text-charcoal-800 uppercase tracking-wider block">
          4. Personalisasi Tambahan (Opsional):
        </label>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <div className="flex items-center gap-1.5 text-xs text-charcoal-700 font-medium mb-1">
              <PenTool className="w-3.5 h-3.5 text-primary-500" />
              <span>Nama Emboss / Inisial:</span>
            </div>
            <input
              type="text"
              placeholder="Contoh: Sarah & Reza / S & R"
              value={customEmbossText}
              onChange={(e) => setCustomEmbossText(e.target.value)}
              className="w-full px-4 py-2.5 rounded-full border border-cream-300 bg-cream-50/50 text-xs focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-300"
            />
          </div>

          <div>
            <div className="flex items-center gap-1.5 text-xs text-charcoal-700 font-medium mb-1">
              <Calendar className="w-3.5 h-3.5 text-secondary-500" />
              <span>Estimasi Tanggal Acara:</span>
            </div>
            <input
              type="text"
              placeholder="Contoh: 18 Oktober 2026"
              value={weddingDate}
              onChange={(e) => setWeddingDate(e.target.value)}
              className="w-full px-4 py-2.5 rounded-full border border-cream-300 bg-cream-50/50 text-xs focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-300"
            />
          </div>
        </div>
      </div>

      {/* Price Summary Calculation Card (FR-05) */}
      <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-cream-100 via-primary-50/40 to-cream-100 border border-primary-200 space-y-3">
        <div className="flex items-center justify-between text-xs text-charcoal-600">
          <span>Harga Satuan Dasar:</span>
          <span className="font-semibold">{formatRupiah(product.price)} / pcs</span>
        </div>

        {packagingExtra > 0 && (
          <div className="flex items-center justify-between text-xs text-charcoal-600">
            <span>Tambahan Kemasan:</span>
            <span className="font-semibold">+{formatRupiah(packagingExtra)} / pcs</span>
          </div>
        )}

        <div className="flex items-center justify-between text-xs text-charcoal-600">
          <span>Jumlah Pesanan:</span>
          <span className="font-bold text-charcoal-900">{formatNumber(quantity)} pcs</span>
        </div>

        <div className="pt-3 border-t border-primary-200 flex items-baseline justify-between">
          <div>
            <span className="text-xs font-bold text-charcoal-800 block">
              Estimasi Total Biaya:
            </span>
            <span className="text-[10px] text-charcoal-500">
              *Belum termasuk ongkir kargo
            </span>
          </div>
          <div className="text-right">
            <span className="font-serif text-2xl sm:text-3xl font-extrabold text-primary-600">
              {formatRupiah(totalCost)}
            </span>
          </div>
        </div>
      </div>

      {/* WhatsApp Inquiry Button (FR-06) */}
      <div className="space-y-2 pt-1">
        <Button
          href={waUrl}
          isExternal
          variant="whatsapp"
          size="lg"
          leftIcon={<MessageCircle className="w-5 h-5 fill-white" />}
          className="w-full justify-center shadow-lg font-bold text-base py-4"
        >
          Pesan via WhatsApp ({formatNumber(quantity)} pcs)
        </Button>

        <p className="text-[11px] text-center text-charcoal-500 flex items-center justify-center gap-1.5 pt-1">
          <ShieldCheck className="w-3.5 h-3.5 text-secondary-600" />
          <span>Format pesan WhatsApp akan otomatis terisi rapi dengan rincian ini.</span>
        </p>
      </div>
    </div>
  );
};
