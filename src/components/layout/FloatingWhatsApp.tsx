"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MessageCircle, X, Sparkles, Instagram } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { generateWhatsAppLink } from "@/lib/whatsapp";

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2.5 group">
      {/* Floating Prompt Bubble */}
      {showTooltip && (
        <div className="bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl border border-primary-200/90 max-w-xs animate-bounce duration-1000 hidden sm:block relative">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute -top-2 -right-2 bg-cream-200 text-charcoal-500 rounded-full p-1 hover:bg-primary-100 hover:text-primary-700 transition-colors shadow-2xs"
            aria-label="Tutup tooltip"
          >
            <X className="w-3 h-3" />
          </button>
          <div className="flex items-start gap-2.5">
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-accent-400 flex-shrink-0 bg-white">
              <Image
                src="/images/logo.png"
                alt="Azzalea"
                fill
                sizes="32px"
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-xs font-bold text-charcoal-900 flex items-center gap-1">
                Azzalea Wedding Desk <Sparkles className="w-3 h-3 text-accent-500" />
              </p>
              <p className="text-[11px] text-charcoal-600 leading-tight mt-0.5">
                Konsultasikan konsep souvenir & cek ketersediaan slot pernikahan Anda 🌸
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Floating Action Buttons */}
      <div className="flex items-center gap-2">
        {/* Instagram Icon */}
        <a
          href={SITE_CONFIG.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 rounded-full bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 text-white flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all duration-300"
          title="Lihat Instagram @azzaleagiftnew"
        >
          <Instagram className="w-5 h-5" />
        </a>

        {/* WhatsApp Button */}
        <a
          href={generateWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-xl hover:bg-[#20BD5A] hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-white/60"
          aria-label="Chat WhatsApp Admin"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-200"></span>
          </span>
          <MessageCircle className="w-4 h-4 fill-white" />
          <span className="text-xs font-bold tracking-tight hidden md:inline">
            Tanya via WA
          </span>
        </a>
      </div>
    </div>
  );
};
