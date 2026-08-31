import React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";

export const TopBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-primary-600 via-rose-500 to-primary-600 text-white text-xs py-2.5 px-4 text-center font-medium relative z-50 shadow-inner border-b border-primary-300/40">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 flex-wrap">
        <span className="inline-flex items-center gap-1 bg-white/20 border border-white/30 text-white px-2.5 py-0.5 rounded-full text-[10px] font-extrabold tracking-editorial uppercase shadow-2xs">
          <Sparkles className="w-3 h-3 text-accent-300" /> Promo Wedding
        </span>
        <span className="text-white text-[11px] sm:text-xs font-semibold">
          🌸 Free Custom Emboss Nama + Free Thank You Card untuk Pemesanan &gt; 200 pcs!
        </span>
        <Link
          href="/katalog"
          className="text-accent-200 font-extrabold hover:text-white underline decoration-accent-300/80 inline-flex items-center gap-1 group transition-colors text-[11px] sm:text-xs ml-1"
        >
          Lihat Koleksi
          <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
};
