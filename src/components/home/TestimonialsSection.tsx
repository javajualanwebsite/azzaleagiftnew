import React from "react";
import Image from "next/image";
import { Quote, Sparkles, Instagram, MessageCircle } from "lucide-react";
import { TESTIMONIALS } from "@/data/testimonials";
import { RatingStars } from "@/components/ui/RatingStars";
import { FloralDecoration } from "@/components/ui/FloralDecoration";
import { Badge } from "@/components/ui/Badge";

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-cream-100/60 relative overflow-hidden">{/* pink blush harmonious - lebih pink dari sebelumnya */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] font-extrabold uppercase tracking-editorial text-primary-600 flex items-center justify-center gap-1.5">
            <span>🌸</span> Cerita Pasangan Bahagia <span>🌸</span>
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-extrabold text-charcoal-900 mt-1">
            Testimoni & Pengalaman Nyata
          </h2>
          <FloralDecoration variant="divider" />
          <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed font-medium">
            Kebahagiaan Anda adalah kehormatan bagi kami. Inilah ulasan asli
            dari para pengantin dan wedding planner yang mempercayakan souvenirnya kepada Azzalea Handmade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-7 sm:p-9 shadow-soft border-2 border-primary-200 hover:shadow-pink transition-all duration-300 flex flex-col justify-between relative group"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary-200/80 -scale-x-100 pointer-events-none group-hover:text-primary-300 transition-colors" />

              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <RatingStars rating={item.rating} />
                  <Badge variant="neutral" size="sm">
                    {item.source === "Instagram" && (
                      <Instagram className="w-3 h-3 text-pink-500 mr-1 inline" />
                    )}
                    {item.source === "WhatsApp" && (
                      <MessageCircle className="w-3 h-3 text-emerald-500 mr-1 inline" />
                    )}
                    {item.source} Review
                  </Badge>
                </div>

                <p className="text-xs sm:text-sm text-charcoal-800 italic leading-relaxed mb-6 font-display text-base sm:text-lg">
                  &ldquo;{item.comment}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-primary-100 flex items-center gap-3.5">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary-400 flex-shrink-0 shadow-xs">
                  <Image
                    src={item.image}
                    alt={item.brideName}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-primary-900">
                    {item.brideName}
                  </h4>
                  <p className="text-[11px] text-charcoal-600 font-medium">
                    {item.location} • {item.productName}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
