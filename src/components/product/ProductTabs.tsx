"use client";

import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Product } from "@/types";
import { cn } from "@/lib/utils";

interface ProductTabsProps {
  product: Product;
}

export const ProductTabs: React.FC<ProductTabsProps> = ({ product }) => {
  const [activeTab, setActiveTab] = useState<"desc" | "specs" | "po" | "freebies">("desc");

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-card border border-primary-100/80">
      {/* Tabs Bar */}
      <div className="flex items-center gap-2 border-b border-cream-200 pb-3 overflow-x-auto">
        <button
          onClick={() => setActiveTab("desc")}
          className={cn(
            "px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap",
            activeTab === "desc"
              ? "bg-primary-500 text-white shadow-xs"
              : "text-charcoal-600 hover:bg-cream-100"
          )}
        >
          Deskripsi & Material
        </button>

        <button
          onClick={() => setActiveTab("specs")}
          className={cn(
            "px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap",
            activeTab === "specs"
              ? "bg-primary-500 text-white shadow-xs"
              : "text-charcoal-600 hover:bg-cream-100"
          )}
        >
          Spesifikasi & Ukuran
        </button>

        <button
          onClick={() => setActiveTab("freebies")}
          className={cn(
            "px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap",
            activeTab === "freebies"
              ? "bg-primary-500 text-white shadow-xs"
              : "text-charcoal-600 hover:bg-cream-100"
          )}
        >
          Fasilitas Gratis (Freebies)
        </button>

        <button
          onClick={() => setActiveTab("po")}
          className={cn(
            "px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap",
            activeTab === "po"
              ? "bg-primary-500 text-white shadow-xs"
              : "text-charcoal-600 hover:bg-cream-100"
          )}
        >
          Waktu PO & Ketentuan
        </button>
      </div>

      {/* Tab Content */}
      <div className="pt-6">
        {activeTab === "desc" && (
          <div className="space-y-4 text-xs sm:text-sm text-charcoal-700 leading-relaxed">
            <p>{product.description}</p>
            <p>
              Semua produk dibuat secara teliti (*handmade*) oleh perajin terampil
              Azzalea Handmade dengan standar kontrol kualitas tinggi demi menghadirkan
              cinderamata yang membanggakan di momen sakral pernikahan Anda.
            </p>
          </div>
        )}

        {activeTab === "specs" && (
          <>
            {!product.material && !product.dimensions && !product.leadTimeDays && !product.colors?.length && !product.packagingOptions?.length ? (
              <div className="p-8 rounded-2xl bg-cream-50/60 border border-primary-100 text-center">
                <p className="text-xs sm:text-sm text-charcoal-500 font-medium">Spesifikasi kosong — detail lebih lengkap tanyakan admin whatsapp yang tercantum</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="p-4 rounded-2xl bg-cream-50/80 border border-primary-50 space-y-1">
                  <span className="text-[10px] text-charcoal-400 font-bold uppercase tracking-editorial">
                    Bahan Material
                  </span>
                  <p className="font-bold text-charcoal-900">
                    {product.material || "—"}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-cream-50/80 border border-primary-50 space-y-1">
                  <span className="text-[10px] text-charcoal-400 font-bold uppercase tracking-editorial">
                    Dimensi Ukuran
                  </span>
                  <p className="font-bold text-charcoal-900">
                    {product.dimensions || "—"}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-cream-50/80 border border-primary-50 space-y-1">
                  <span className="text-[10px] text-charcoal-400 font-bold uppercase tracking-editorial">
                    Minimum Order Quantity (MOQ)
                  </span>
                  <p className="font-bold text-charcoal-900">
                    {product.moq} pcs (Bisa kombinasi warna)
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-cream-50/80 border border-primary-50 space-y-1">
                  <span className="text-[10px] text-charcoal-400 font-bold uppercase tracking-editorial">
                    Estimasi Waktu Pengerjaan
                  </span>
                  <p className="font-bold text-charcoal-900">
                    {product.leadTimeDays || "—"}
                  </p>
                </div>
              </div>
            )}
          </>
        )}

        {activeTab === "freebies" && (
          <div className="space-y-3">
            {!product.freebies || product.freebies.length === 0 ? (
              <div className="p-6 rounded-2xl bg-cream-50/60 border border-primary-100 text-center">
                <p className="text-xs sm:text-sm text-charcoal-500 font-medium">Fasilitas gratis tanyakan admin whatsapp yang tercantum</p>
              </div>
            ) : (
              <>
                <p className="text-xs text-charcoal-600 font-medium">
                  Setiap pemesanan souvenir di Azzalea Handmade sudah dilengkapi fasilitas gratis:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {product.freebies?.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 p-3 rounded-2xl bg-primary-50/60 border border-primary-100 text-xs sm:text-sm font-semibold text-primary-900"
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary-600 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        {activeTab === "po" && (
          <div className="space-y-3 text-xs sm:text-sm text-charcoal-700 leading-relaxed">
            <ul className="space-y-2.5 list-disc list-inside">
              <li>
                <strong>Sistem PO (Pre-Order):</strong> Waktu produksi normal berkisar antara{" "}
                {product.leadTimeDays || "7 - 14 hari kerja"} setelah konfirmasi desain mockup dan DP masuk.
              </li>
              <li>
                <strong>Pembayaran Aman:</strong> DP (Down Payment) sebesar 50% untuk mulai produksi, dan pelunasan 50% setelah pesanan selesai dicek kualitasnya (*QC foto/video*).
              </li>
              <li>
                <strong>Desain Mockup:</strong> Tim kami mengirimkan mockup digital emboss nama & kartu ucapan untuk Anda setujui sebelum produksi masal.
              </li>
              <li>
                <strong>Pengiriman Kargo:</strong> Dikemas dengan kardus tebal dan lapisan waterproof, dikirim via kargo aman sampai ke tujuan.
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
