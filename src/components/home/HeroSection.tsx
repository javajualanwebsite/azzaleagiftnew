import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  ShoppingBag,
  MessageCircle,
  ShieldCheck,
  Heart,
  Award,
  Crown,
  ArrowRight,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { RatingStars } from "@/components/ui/RatingStars";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import { FloralDecoration } from "@/components/ui/FloralDecoration";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-10 pb-16 lg:pt-16 lg:pb-24 bg-wedding-lattice">
      {/* Pink Floral Ambient Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-br from-primary-200/50 via-rose-200/40 to-blossom-200/40 blur-3xl -z-10 rounded-full pointer-events-none" />

      {/* Decorative Corner Flowers */}
      <FloralDecoration variant="corner-tr" className="absolute top-0 right-0" />
      <FloralDecoration variant="corner-bl" className="absolute bottom-0 left-0 hidden md:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 bg-white/95 border border-primary-200 shadow-soft px-4 py-1.5 rounded-full text-xs font-bold text-primary-900 backdrop-blur">
              <span className="text-primary-500">🌸</span>
              <span className="tracking-editorial uppercase text-[10px] text-primary-800">
                Koleksi Souvenir Pernikahan Pink Floral 2026
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-ping" />
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold text-charcoal-900 leading-[1.14] tracking-tight">
              Souvenir Pernikahan{" "}
              <span className="pink-gradient-text block sm:inline font-normal italic">
                Handmade Elegan
              </span>{" "}
              & Penuh Bunga Kenangan
            </h1>

            {/* Sub-headline */}
            <p className="text-sm sm:text-base lg:text-lg text-charcoal-700 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Wujudkan cinderamata pernikahan impian bernuansa *warm floral* yang manis dan memikat.
              Dibuat sepenuh cinta oleh pengrajin lokal dengan bahan kulit sintetis Grade A,{" "}
              <strong className="text-primary-600 font-bold">
                Free Custom Emboss Nama
              </strong>{" "}
              dan kemasan pita satin siap dibagikan di hari istimewa Anda.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <Button
                href="/katalog"
                size="lg"
                variant="primary"
                leftIcon={<ShoppingBag className="w-4 h-4" />}
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="w-full sm:w-auto shadow-pink"
              >
                Jelajahi Katalog Bunga 🌸
              </Button>

              <Button
                href={generateWhatsAppLink()}
                isExternal
                size="lg"
                variant="whatsapp"
                leftIcon={<MessageCircle className="w-4 h-4 fill-white" />}
                className="w-full sm:w-auto"
              >
                Konsultasi WA (Gratis)
              </Button>
            </div>

            {/* Trust Points */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs text-charcoal-700">
              <div className="flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 text-primary-500 fill-primary-400" />
                <span className="font-semibold">100% Jahitan Rapi Handmade</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-accent-500" />
                <span className="font-semibold">Free Mockup Digital Desain</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-secondary-500" />
                <span className="font-semibold">Garansi Quality Control</span>
              </div>
            </div>

            {/* Social Proof Counter Strip */}
            <div className="pt-6 border-t border-primary-200/80 grid grid-cols-3 gap-3.5 max-w-lg mx-auto lg:mx-0 text-center">
              <div className="p-3 bg-white/90 backdrop-blur rounded-2xl border border-primary-200 shadow-2xs">
                <p className="text-xl sm:text-2xl font-extrabold font-serif text-primary-600">
                  50.000+
                </p>
                <p className="text-[10px] sm:text-[11px] text-charcoal-600 font-bold">
                  Souvenir Terkirim
                </p>
              </div>
              <div className="p-3 bg-white/90 backdrop-blur rounded-2xl border border-primary-200 shadow-2xs">
                <p className="text-xl sm:text-2xl font-extrabold font-serif text-secondary-600">
                  1.200+
                </p>
                <p className="text-[10px] sm:text-[11px] text-charcoal-600 font-bold">
                  Pasangan Menikah
                </p>
              </div>
              <div className="p-3 bg-white/90 backdrop-blur rounded-2xl border border-primary-200 shadow-2xs">
                <div className="flex items-center justify-center gap-1 text-xl sm:text-2xl font-extrabold font-serif text-accent-600">
                  <span>4.9</span>
                  <Star className="w-4 h-4 fill-accent-500 text-accent-500" />
                </div>
                <p className="text-[10px] sm:text-[11px] text-charcoal-600 font-bold">
                  Rating Kepuasan
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Pink Floral Glow Halo */}
              <div className="absolute -inset-2.5 bg-gradient-to-r from-primary-400/50 via-rose-300/40 to-blossom-400/40 rounded-3xl blur-md opacity-80" />

              <div className="relative bg-white rounded-3xl overflow-hidden shadow-pink border-4 border-white">
                <div className="relative h-80 sm:h-96 w-full">
                  <Image
                    src="/images/paperbag-costum-flora.jpg"
                    alt="Azzalea paperbag costum flora"
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-transparent to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-1.5">
                    <Badge variant="gold" size="sm" icon={<Award className="w-3 h-3" />}>
                      Best Seller 2026
                    </Badge>
                    <Badge variant="primary" size="sm">
                      Free Custom Nama
                    </Badge>
                  </div>

                  {/* Bottom Float Card */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-primary-200">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="font-serif font-bold text-sm text-primary-900">
                          paperbag costum flora
                        </h3>
                        <p className="text-[11px] text-charcoal-600">
                          Custom • MOQ 100 pcs
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] text-charcoal-400 block">Mulai dari</span>
                        <span className="text-sm font-extrabold text-primary-600">
                          Rp 15.000
                        </span>
                      </div>
                    </div>

                    <div className="mt-3 pt-2.5 border-t border-primary-100 flex items-center justify-between">
                      <RatingStars rating={5.0} showScore />
                      <Link
                        href="/katalog/paperbag-costum-flora"
                        className="text-xs font-bold text-primary-600 hover:text-primary-700 inline-flex items-center gap-1"
                      >
                        Simulasi Harga <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Customer Social Proof Badge */}
              <div className="absolute -top-3.5 -right-2 sm:-right-4 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-primary-200 flex items-center gap-3 animate-pulse-subtle">
                <div className="relative w-9 h-9 rounded-full overflow-hidden border-2 border-primary-400">
                  <Image
                    src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=150&q=80"
                    alt="Customer Avatar"
                    fill
                    sizes="36px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-xs font-bold text-primary-900">Clarissa & Dimas</p>
                  <p className="text-[10px] text-emerald-600 font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Pesanan 500 pcs Selesai 🌸
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
