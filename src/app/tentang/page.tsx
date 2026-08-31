import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import { Heart, Sparkles, Users, Crown, ArrowRight, Instagram } from "lucide-react";
import { FloralDecoration } from "@/components/ui/FloralDecoration";
import { Button } from "@/components/ui/Button";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Tentang Azzalea Handmade",
  description:
    "Cerita di balik Azzalea Handmade. Pengrajin souvenir pernikahan lokal yang berdedikasi menciptakan cinderamata berkualitas, elegan, dan penuh makna.",
};

export default function TentangPage() {
  return (
    <div className="py-14 lg:py-22 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Brand Story Hero */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-200/90 px-4 py-1.5 rounded-full text-xs font-bold text-primary-800">
            <Heart className="w-3.5 h-3.5 text-primary-600 fill-primary-400" />
            <span className="tracking-editorial uppercase text-[10px]">
              Dedikasi Seni Kriya Pengrajin
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-charcoal-900 leading-tight">
            Menghadirkan Cinderamata Pernikahan Penuh Makna
          </h1>

          <FloralDecoration variant="divider" className="justify-start my-2" />

          <p className="text-xs sm:text-sm lg:text-base text-charcoal-600 leading-relaxed font-normal">
            Berawal dari kecintaan terhadap seni kerajinan tangan (*handicraft*) dan keinginan membantu
            para calon pengantin mewujudkan pesta pernikahan impian, <strong>Azzalea Handmade</strong> hadir
            sebagai rumah produksi souvenir pernikahan yang mengedepankan kualitas, keindahan visual, dan kegunaan nyata.
          </p>

          <p className="text-xs sm:text-sm lg:text-base text-charcoal-600 leading-relaxed font-normal">
            Kami percaya bahwa souvenir pernikahan bukan sekadar tanda terima kasih formal, melainkan
            kenang-kenangan abadi yang akan disimpan dan digunakan oleh para tamu tersayang. Oleh karena itu,
            setiap potongan kulit sintetis, kerapian jahitan, hingga detail emboss nama dikerjakan dengan penuh ketelitian.
          </p>

          <div className="flex items-center gap-3 pt-2">
            <Button
              href="/katalog"
              size="md"
              variant="primary"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Lihat Koleksi Kami
            </Button>
            <Button
              href={SITE_CONFIG.instagramUrl}
              isExternal
              size="md"
              variant="outline"
              leftIcon={<Instagram className="w-4 h-4 text-pink-600" />}
            >
              Instagram {SITE_CONFIG.instagramHandle}
            </Button>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="relative rounded-3xl overflow-hidden shadow-editorial border-4 border-white bg-cream-100">
            <div className="relative h-96 sm:h-[480px] w-full">
              <Image
                src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1000&q=80"
                alt="Workshop Pengrajin Azzalea Handmade"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-primary-100 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-accent-400/80 flex-shrink-0 bg-white">
                    <Image
                      src="/images/logo.png"
                      alt="Logo Azzalea"
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-sm text-charcoal-900">
                      Azzalea Handmade
                    </h3>
                    <p className="text-xs text-charcoal-500">
                      Spesialis Souvenir Pernikahan • {SITE_CONFIG.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Nilai Brand */}
      <div className="bg-white rounded-3xl p-8 sm:p-14 border border-primary-100 shadow-soft mb-20">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[11px] font-bold uppercase tracking-editorial text-secondary-600">
            Nilai-Nilai Kami
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-extrabold text-charcoal-900 mt-1">
            Komitmen Kualitas & Pelayanan
          </h2>
          <FloralDecoration variant="divider" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-primary-100 text-primary-600 flex items-center justify-center mx-auto sm:mx-0 shadow-2xs">
              <Crown className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg font-bold text-charcoal-900">
              Kualitas Material Teruji
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
              Kami hanya memilih material kulit sintetis premium, resleting awet anti-macet,
              dan kain halus yang tahan lama digunakan tamu undangan Anda.
            </p>
          </div>

          <div className="space-y-3 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-secondary-100 text-secondary-600 flex items-center justify-center mx-auto sm:mx-0 shadow-2xs">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg font-bold text-charcoal-900">
              Pemberdayaan Pengrajin Lokal
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
              Setiap pesanan Anda turut memberdayakan para pengrajin dan penjahit
              lokal berpengalaman di workshop kami.
            </p>
          </div>

          <div className="space-y-3 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-accent-100 text-accent-700 flex items-center justify-center mx-auto sm:mx-0 shadow-2xs">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg font-bold text-charcoal-900">
              Personalisasi Eksklusif
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
              Bebas menyesuaikan kombinasi warna bahan, font emboss nama, pita satin, dan kartu ucapan
              agar serasi dengan konsep dekorasi resepsi Anda.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
