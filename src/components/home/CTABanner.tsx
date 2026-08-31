import React from "react";
import { MessageCircle, ShoppingBag, Sparkles, Heart } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { generateWhatsAppLink } from "@/lib/whatsapp";

export const CTABanner: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-cream-50 relative overflow-hidden">{/* pink blush - serasi logo */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary-600 via-rose-500 to-primary-700 text-white shadow-pink p-8 sm:p-14 lg:p-18 border-2 border-primary-300">
          {/* Decorative Pink Floral Halo */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-accent-300/25 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 px-4 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-editorial">
              <span>🌸</span>
              <span>Wujudkan Souvenir Impian Anda</span>
              <span>🌸</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white">
              Siap Menghadirkan Cinderamata Pink Floral di Hari Bahagia?
            </h2>

            <p className="text-xs sm:text-sm lg:text-base text-rose-100 leading-relaxed font-medium">
              Diskusikan tema warna pink atau floral pernikahan Anda, konsultasikan contoh mockup desain,
              dan nikmati <strong className="text-accent-200 font-extrabold">Free Custom Emboss Nama + Free Kartu Ucapan</strong> hari ini.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <Button
                href={generateWhatsAppLink()}
                isExternal
                size="lg"
                variant="whatsapp"
                leftIcon={<MessageCircle className="w-4 h-4 fill-white" />}
                className="w-full sm:w-auto shadow-lg font-bold"
              >
                Chat WhatsApp Admin (08888533915)
              </Button>

              <Button
                href="/katalog"
                size="lg"
                variant="gold"
                leftIcon={<ShoppingBag className="w-4 h-4" />}
                className="w-full sm:w-auto shadow-lg text-charcoal-900 font-extrabold"
              >
                Eksplorasi Katalog 🌸
              </Button>
            </div>

            <p className="text-[11px] text-white/90 pt-2 flex items-center justify-center gap-1.5 font-medium">
              <Heart className="w-3.5 h-3.5 fill-white text-white" />
              <span>Melayani pengiriman aman ke seluruh kota di Indonesia</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
