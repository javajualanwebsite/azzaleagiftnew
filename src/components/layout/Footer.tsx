import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Instagram,
  MessageCircle,
  MapPin,
  Clock,
  Heart,
  ShieldCheck,
  PackageCheck,
  Truck,
  Sparkles,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { CATEGORIES } from "@/data/categories";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import { FloralDecoration } from "@/components/ui/FloralDecoration";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-cream-100 via-primary-50/70 to-blossom-50 text-charcoal-900 pt-16 pb-12 border-t-2 border-primary-200 relative overflow-hidden">{/* pink harmonis logo */}
      {/* Decorative Floral background corners */}
      <FloralDecoration
        variant="corner-tr"
        className="absolute top-0 right-0 opacity-80"
      />
      <FloralDecoration
        variant="corner-bl"
        className="absolute bottom-0 left-0 opacity-80"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Trust Badges Strip in Pink Theme */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 pb-12 border-b border-primary-200/80">
          <div className="flex items-center gap-3 p-3.5 bg-white/90 backdrop-blur rounded-2xl border border-primary-200 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0">
              <Heart className="w-5 h-5 fill-primary-400" />
            </div>
            <div>
              <p className="text-xs font-extrabold text-primary-900">100% Handmade</p>
              <p className="text-[11px] text-charcoal-600">Jahitan & Detail Presisi</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 bg-white/90 backdrop-blur rounded-2xl border border-primary-200 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-secondary-100 text-secondary-600 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-extrabold text-primary-900">Free Custom Emboss</p>
              <p className="text-[11px] text-charcoal-600">Mockup Desain Gratis</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 bg-white/90 backdrop-blur rounded-2xl border border-primary-200 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-accent-100 text-accent-700 flex items-center justify-center flex-shrink-0">
              <PackageCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-extrabold text-primary-900">Kemasan Siap Bagi</p>
              <p className="text-[11px] text-charcoal-600">Pita Satin & Tag Ucapan</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 bg-white/90 backdrop-blur rounded-2xl border border-primary-200 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-extrabold text-primary-900">Kargo Hemat</p>
              <p className="text-[11px] text-charcoal-600">Kirim Seluruh Nusantara</p>
            </div>
          </div>
        </div>

        {/* Main Columns — revisi setiap kolom: konsisten spacing & heading */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-12">
          {/* Kolom 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary-400 bg-white shadow-xs">
                <Image
                  src="/images/logo.png"
                  alt="Azzalea Handmade"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-primary-800 leading-none">
                  Azzalea
                </h3>
                <span className="text-[10px] font-bold tracking-widest text-secondary-600 uppercase">
                  Handmade Souvenir 🌸
                </span>
              </div>
            </div>
            <div className="h-0.5 w-10 bg-primary-300 rounded-full" />
            <p className="text-xs text-charcoal-700 leading-relaxed font-medium">
              Rumah produksi souvenir pernikahan handmade bernuansa floral elegan.
              Menghadirkan cinderamata pernikahan yang manis, fungsional, dan berkesan bagi para tamu undangan.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <a
                href={SITE_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-primary-200 flex items-center justify-center text-pink-600 shadow-xs hover:bg-primary-500 hover:text-white transition-all duration-300"
                aria-label="Instagram Azzalea Handmade"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-primary-200 flex items-center justify-center text-[#25D366] shadow-xs hover:bg-[#25D366] hover:text-white transition-all duration-300"
                aria-label="WhatsApp Azzalea Handmade"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Kategori — revisi kolom 2: pastikan link kategori tidak 404 */}
          <div className="space-y-4">
            <div>
              <h4 className="font-serif text-xs font-extrabold uppercase tracking-widest text-primary-800 flex items-center gap-1.5">
                <span>Kategori Souvenir</span> 🌸
              </h4>
              <div className="h-0.5 w-10 bg-primary-300 rounded-full mt-2" />
            </div>
            <ul className="space-y-2.5 text-xs text-charcoal-700 font-medium">
              {CATEGORIES.filter((c) => c.id !== "all").map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/katalog?category=${encodeURIComponent(cat.slug)}`}
                    prefetch={false}
                    className="hover:text-primary-700 hover:translate-x-1 inline-flex items-center transition-all"
                  >
                    <span className="text-primary-400 mr-2">🌸</span>
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links — revisi kolom 3: perbaiki 404, pastikan semua route ada */}
          <div className="space-y-4">
            <div>
              <h4 className="font-serif text-xs font-extrabold uppercase tracking-widest text-primary-800 flex items-center gap-1.5">
                <span>Informasi & Panduan</span> 🌸
              </h4>
              <div className="h-0.5 w-10 bg-primary-300 rounded-full mt-2" />
            </div>
            <ul className="space-y-2.5 text-xs text-charcoal-700 font-medium">
              <li>
                <Link
                  href="/cara-order"
                  prefetch={false}
                  className="hover:text-primary-700 hover:translate-x-1 inline-flex items-center transition-all"
                >
                  <span className="text-primary-400 mr-2">🌸</span>
                  Alur & Cara Pemesanan
                </Link>
              </li>
              <li>
                <Link
                  href="/tentang"
                  prefetch={false}
                  className="hover:text-primary-700 hover:translate-x-1 inline-flex items-center transition-all"
                >
                  <span className="text-primary-400 mr-2">🌸</span>
                  Tentang Pengrajin Azzalea
                </Link>
              </li>
              <li>
                <Link
                  href="/kontak"
                  prefetch={false}
                  className="hover:text-primary-700 hover:translate-x-1 inline-flex items-center transition-all"
                >
                  <span className="text-primary-400 mr-2">🌸</span>
                  Konsultasi Desain & Kontak
                </Link>
              </li>
              <li>
                <Link
                  href="/katalog"
                  prefetch={false}
                  className="hover:text-primary-700 hover:translate-x-1 inline-flex items-center transition-all"
                >
                  <span className="text-primary-400 mr-2">🌸</span>
                  Katalog Lengkap
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 4: Layanan Pelanggan — alamat baru */}
          <div className="space-y-4">
            <div>
              <h4 className="font-serif text-xs font-extrabold uppercase tracking-widest text-primary-800 flex items-center gap-1.5">
                <span>Layanan Pelanggan</span> 🌸
              </h4>
              <div className="h-0.5 w-10 bg-primary-300 rounded-full mt-2" />
            </div>
            <ul className="space-y-3 text-xs text-charcoal-700 font-medium">
              <li className="flex items-start gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#25D366] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-primary-900">WhatsApp Inquiry</p>
                  <a
                    href={generateWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:underline font-bold"
                  >
                    {SITE_CONFIG.phoneDisplay}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <Instagram className="w-4 h-4 text-pink-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-primary-900">Instagram Official</p>
                  <a
                    href={SITE_CONFIG.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:underline font-bold"
                  >
                    {SITE_CONFIG.instagramHandle}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-secondary-500 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{SITE_CONFIG.location}</span>
              </li>

              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-accent-600 flex-shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.operatingHours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 border-t border-primary-200/80 text-center text-xs text-charcoal-600 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            © {new Date().getFullYear()} {SITE_CONFIG.name}. Dibuat sepenuh hati dengan{" "}
            <Heart className="w-3.5 h-3.5 inline text-primary-500 fill-primary-400" />{" "}
            untuk Pernikahan Bahagia Anda.
          </p>
          <p className="text-[11px] font-semibold text-primary-700">
            Instagram: @azzaleagiftnew • WhatsApp: 08888533915
          </p>
        </div>
      </div>
    </footer>
  );
};
