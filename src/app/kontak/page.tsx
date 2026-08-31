"use client";

import React, { useState } from "react";
import {
  MessageCircle,
  Instagram,
  MapPin,
  Clock,
  Calendar,
  User,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { FloralDecoration } from "@/components/ui/FloralDecoration";
import { generateWhatsAppLink } from "@/lib/whatsapp";

export default function KontakPage() {
  const [formData, setFormData] = useState({
    name: "",
    weddingDate: "",
    productInterest: "Paper Bag - Custom Floral Paper Bag",
    quantity: "250",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Halo Azzalea Handmade, saya *${formData.name || "Calon Pengantin"}* ingin konsultasi souvenir pernikahan:\n\n` +
      `• *Minat Produk:* ${formData.productInterest}\n` +
      `• *Estimasi Jumlah:* ${formData.quantity} pcs\n` +
      `• *Rencana Tanggal Acara:* ${formData.weddingDate || "Belum ditentukan"}\n` +
      `• *Catatan/Pertanyaan:* ${formData.notes || "Mohon info katalog dan rekomendasi terbaiknya."}\n\n` +
      `Mohon info ketersediaan slot produksi ya. Terima kasih! 🌸✨`;

    const url = `https://wa.me/${SITE_CONFIG.phoneIntl}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="py-14 lg:py-22 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-[11px] font-bold uppercase tracking-editorial text-primary-600">
          Konsultasi & Layanan
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-charcoal-900 mt-1">
          Hubungi Azzalea Handmade
        </h1>
        <FloralDecoration variant="divider" />
        <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
          Punya pertanyaan seputar katalog, request custom souvenir khusus, atau ingin mengecek slot tanggal pernikahan Anda? Kami siap membantu dengan senang hati.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Official Contact Cards */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-primary-100/90 shadow-soft space-y-6">
            <h3 className="font-serif text-xl font-bold text-charcoal-900">
              Saluran Komunikasi Resmi
            </h3>

            {/* WhatsApp */}
            <a
              href={generateWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200 flex items-center gap-4 hover:bg-emerald-100/80 transition-all duration-300 group block"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#25D366] text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform flex-shrink-0">
                <MessageCircle className="w-6 h-6 fill-white" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-emerald-800 uppercase tracking-editorial">
                  WhatsApp Inquiry (Fast Response)
                </p>
                <p className="text-base font-bold text-charcoal-900">
                  {SITE_CONFIG.phoneDisplay}
                </p>
                <p className="text-[11px] text-charcoal-500">
                  Klik untuk langsung chat dengan Admin Azzalea
                </p>
              </div>
            </a>

            {/* Instagram */}
            <a
              href={SITE_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-pink-50/80 border border-pink-200 flex items-center gap-4 hover:bg-pink-100/80 transition-all duration-300 group block"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform flex-shrink-0">
                <Instagram className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-pink-800 uppercase tracking-editorial">
                  Instagram Official
                </p>
                <p className="text-base font-bold text-charcoal-900">
                  {SITE_CONFIG.instagramHandle}
                </p>
                <p className="text-[11px] text-charcoal-500">
                  Lihat update foto real-client & inspirasi souvenir
                </p>
              </div>
            </a>

            <div className="space-y-4 pt-2 border-t border-cream-200 text-xs sm:text-sm text-charcoal-600">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-charcoal-900 block">Workshop & Pengiriman:</strong>
                  <span>{SITE_CONFIG.location}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-accent-700 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-charcoal-900 block">Jam Operasional:</strong>
                  <span>{SITE_CONFIG.operatingHours}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Consultation Form */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-primary-100/90 shadow-card">
            <div className="mb-6">
              <span className="text-[10px] font-bold uppercase tracking-editorial text-secondary-600 block mb-1">
                Formulir Cepat
              </span>
              <h3 className="font-serif text-2xl font-bold text-charcoal-900">
                Kirim Rencana Souvenir Pernikahan Anda
              </h3>
              <p className="text-xs text-charcoal-500 mt-1">
                Isi form berikut dan sistem akan langsung menghubungkan Anda ke WhatsApp Admin dengan rincian yang rapi.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-charcoal-800 block mb-1.5">
                  Nama Anda / Pasangan:
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-charcoal-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Sarah & Dimas"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full pl-11 pr-4 py-3 rounded-full border border-cream-300 bg-cream-50/50 text-xs sm:text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-300"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-charcoal-800 block mb-1.5">
                    Jenis Souvenir yang Diminati:
                  </label>
                  <select
                    value={formData.productInterest}
                    onChange={(e) =>
                      setFormData({ ...formData, productInterest: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-full border border-cream-300 bg-cream-50/50 text-xs sm:text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-300 cursor-pointer font-medium"
                  >
                    <option value="Paper Bag - Custom Floral Paper Bag">Paper Bag - Custom Floral Paper Bag</option>
                    <option value="Paper Bag - Kraft Paper Bag Premium">Paper Bag - Kraft Paper Bag Premium</option>
                    <option value="Pillow - Mini Bantal Sofa Custom Bordir">Pillow - Mini Bantal Sofa Custom Bordir</option>
                    <option value="Pillow - Pillow Doll Boneka Souvenir">Pillow - Pillow Doll Boneka Souvenir</option>
                    <option value="Pecah Belah - Mug Keramik Sablon Gold">Pecah Belah - Mug Keramik Sablon Gold</option>
                    <option value="Pecah Belah - Piring Keramik Mini Saucer">Pecah Belah - Piring Keramik Mini Saucer</option>
                    <option value="Box - Hardbox Magnet Premium">Box - Hardbox Magnet Premium</option>
                    <option value="Box - Mika Box Transparan Pita">Box - Mika Box Transparan Pita</option>
                    <option value="Other - Hand Towel Gift Box">Other - Hand Towel Gift Box</option>
                    <option value="Other - Pouch Serbaguna Tile Premium">Other - Pouch Serbaguna Tile Premium</option>
                    <option value="Custom Model Lainnya">Custom Model Lainnya</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-charcoal-800 block mb-1.5">
                    Estimasi Jumlah (pcs):
                  </label>
                  <input
                    type="number"
                    min={10}
                    required
                    value={formData.quantity}
                    onChange={(e) =>
                      setFormData({ ...formData, quantity: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-full border border-cream-300 bg-cream-50/50 text-xs sm:text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-300"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-charcoal-800 block mb-1.5">
                  Estimasi Tanggal Acara Pernikahan:
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-charcoal-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Contoh: 25 Oktober 2026"
                    value={formData.weddingDate}
                    onChange={(e) =>
                      setFormData({ ...formData, weddingDate: e.target.value })
                    }
                    className="w-full pl-11 pr-4 py-3 rounded-full border border-cream-300 bg-cream-50/50 text-xs sm:text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-300"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-charcoal-800 block mb-1.5">
                  Catatan Tambahan / Pertanyaan:
                </label>
                <textarea
                  rows={3}
                  placeholder="Contoh: Mau tanya opsi warna coral rose dan estimasi ongkir kargo ke Jakarta..."
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData({ ...formData, notes: e.target.value })
                  }
                  className="w-full p-4 rounded-2xl border border-cream-300 bg-cream-50/50 text-xs sm:text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-300"
                />
              </div>

              <Button
                type="submit"
                variant="whatsapp"
                size="lg"
                leftIcon={<MessageCircle className="w-5 h-5 fill-white" />}
                className="w-full justify-center shadow-lg font-bold text-base py-3.5"
              >
                Kirim Konsultasi via WhatsApp
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
