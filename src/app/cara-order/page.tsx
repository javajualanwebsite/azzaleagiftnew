import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import {
  Search,
  MessageCircle,
  PenTool,
  Sparkles,
  CheckCircle2,
  Truck,
  CreditCard,
  Clock,
  ArrowRight,
} from "lucide-react";
import { WORKFLOW_STEPS } from "@/data/workflow";
import { FloralDecoration } from "@/components/ui/FloralDecoration";
import { Button } from "@/components/ui/Button";
import { generateWhatsAppLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Panduan & Alur Pemesanan Souvenir",
  description:
    "Cara mudah memesan souvenir pernikahan handmade di Azzalea. Mulai dari pemilihan katalog, konsultasi WhatsApp, pembuatan mockup gratis, produksi, hingga pengiriman kargo.",
};

const ICONS_MAP: Record<string, React.ElementType> = {
  Search,
  MessageCircle,
  PenTool,
  Sparkles,
  CheckCircle2,
  Truck,
};

export default function CaraOrderPage() {
  return (
    <div className="py-14 lg:py-22 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-[11px] font-bold uppercase tracking-editorial text-primary-600">
          Panduan Lengkap
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-charcoal-900 mt-1">
          Alur & Cara Pemesanan
        </h1>
        <FloralDecoration variant="divider" />
        <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
          Proses pemesanan di Azzalea Handmade dirancang sangat sederhana, transparan, dan
          memberikan kepastian penuh bagi calon pengantin. Simak 6 tahapan berikut:
        </p>
      </div>

      {/* Steps List */}
      <div className="space-y-6 max-w-4xl mx-auto mb-16">
        {WORKFLOW_STEPS.map((step) => {
          const Icon = ICONS_MAP[step.iconName] || Sparkles;

          return (
            <div
              key={step.step}
              className="flex flex-col sm:flex-row items-start gap-6 p-7 sm:p-9 rounded-3xl bg-white border border-primary-100/90 shadow-soft hover:shadow-editorial transition-all"
            >
              {/* Step Badge */}
              <div className="flex items-center gap-4 sm:flex-col sm:items-center sm:gap-2 flex-shrink-0">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 text-white flex items-center justify-center shadow-md shadow-primary-500/20">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="font-serif text-xs font-bold uppercase tracking-widest text-primary-700">
                  Tahap {step.step}
                </span>
              </div>

              {/* Step Content */}
              <div className="flex-1 space-y-2">
                <span className="text-[10px] font-bold text-secondary-600 uppercase tracking-editorial block">
                  {step.subtitle}
                </span>
                <h3 className="font-serif text-xl font-bold text-charcoal-900">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                  {step.description}
                </p>

                {step.step === 2 && (
                  <div className="pt-3">
                    <Button
                      href={generateWhatsAppLink()}
                      isExternal
                      variant="whatsapp"
                      size="sm"
                      leftIcon={<MessageCircle className="w-4 h-4 fill-white" />}
                    >
                      Hubungi Admin WhatsApp Sekarang
                    </Button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Ordering Tips Card */}
      <div className="bg-cream-100/80 rounded-3xl p-8 sm:p-12 border border-primary-100/90 max-w-4xl mx-auto mb-16 space-y-6">
        <h2 className="font-serif text-xl sm:text-2xl font-bold text-charcoal-900 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-accent-600" />
          <span>Tips & Waktu Ideal Memesan Souvenir Pernikahan</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
          <div className="p-5 rounded-2xl bg-white border border-primary-100/70 space-y-2 shadow-2xs">
            <Clock className="w-5 h-5 text-primary-600 mb-1" />
            <h4 className="font-bold text-charcoal-900">Waktu Ideal Pemesanan</h4>
            <p className="text-charcoal-600 leading-relaxed">
              Disarankan memesan <strong>1 hingga 2 bulan</strong> sebelum hari H pernikahan untuk kelonggaran antrean produksi dan ekspedisi.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-primary-100/70 space-y-2 shadow-2xs">
            <CreditCard className="w-5 h-5 text-secondary-600 mb-1" />
            <h4 className="font-bold text-charcoal-900">Sistem DP Aman 50%</h4>
            <p className="text-charcoal-600 leading-relaxed">
              Produksi dimulai setelah DP 50% masuk. Sisa pelunasan 50% dibayarkan setelah Anda memverifikasi foto/video produk jadi.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-primary-100/70 space-y-2 shadow-2xs">
            <Truck className="w-5 h-5 text-accent-700 mb-1" />
            <h4 className="font-bold text-charcoal-900">Pengiriman Kargo Aman</h4>
            <p className="text-charcoal-600 leading-relaxed">
              Kardus tebal berlapis plastik waterproof dan stiker fragile demi menjamin souvenir tiba dalam kondisi utuh sempurna.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <Button
          href="/katalog"
          size="lg"
          variant="primary"
          rightIcon={<ArrowRight className="w-4 h-4" />}
        >
          Lihat Koleksi Souvenir di Katalog
        </Button>
      </div>
    </div>
  );
}
