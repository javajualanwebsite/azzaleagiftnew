import React from "react";
import {
  HeartHandshake,
  Sparkles,
  ShieldCheck,
  PackageCheck,
  Truck,
  Clock,
} from "lucide-react";
import { FloralDecoration } from "@/components/ui/FloralDecoration";

const VALUES = [
  {
    icon: HeartHandshake,
    title: "100% Jahitan Pengrajin Lokal",
    description:
      "Dikerjakan dengan ketelitian tangan tinggi. Kontrol kerapian jahitan, presisi sudut, dan finishing tepi yang rapi.",
    badge: "🌸 Handcrafted",
  },
  {
    icon: Sparkles,
    title: "Free Custom Emboss & Desain",
    description:
      "Bebas cetak nama kedua mempelai, logo inisial, atau tanggal pernikahan. Dilengkapi preview mockup digital sebelum produksi.",
    badge: "✨ Personalized",
  },
  {
    icon: PackageCheck,
    title: "Kemasan Siap Dibagikan",
    description:
      "Souvenir telah terlipat rapi, berhias pita satin warna senada, dan dilengkapi kartu ucapan terima kasih elegan siap pakai.",
    badge: "🎀 Ready to Gift",
  },
  {
    icon: Clock,
    title: "Ketepatan Waktu Produksi",
    description:
      "Jadwal pengerjaan terukur dan transparan. Pesanan Anda dipastikan selesai dan terkirim jauh sebelum hari bahagia tiba.",
    badge: "⏱️ On-Time",
  },
  {
    icon: ShieldCheck,
    title: "Quality Control Teliti",
    description:
      "Pemeriksaan satu per satu setiap produk. Dokumentasi foto dan video produk jadi akan dikirimkan sebelum pelunasan.",
    badge: "🛡️ Verified QC",
  },
  {
    icon: Truck,
    title: "Kargo Hemat Nusantara",
    description:
      "Bekerja sama dengan ekspedisi kargo terpercaya dengan tarif sangat hemat, dilapisi kardus tebal dan perlindungan tahan air.",
    badge: "🚚 Nationwide",
  },
];

export const ValueProps: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-cream-50 border-y-2 border-primary-200/70 relative overflow-hidden">{/* pink blush - ganti putih jadi pink serasi logo */}
      <div className="absolute -top-24 right-10 w-72 h-72 bg-primary-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 left-10 w-80 h-80 bg-blossom-200/25 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] font-extrabold uppercase tracking-editorial text-secondary-600 flex items-center justify-center gap-1.5">
            <span>🌸</span> Keunggulan Azzalea Handmade <span>🌸</span>
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-extrabold text-charcoal-900 mt-1">
            Kelebihan yang Memberikan Ketenangan
          </h2>
          <FloralDecoration variant="divider" />
          <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
            Komitmen kami adalah menghadirkan cinderamata pernikahan yang membanggakan
            dengan pelayanan ramah dan terpercaya bagi para calon pengantin.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {VALUES.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-rose-50/50 border border-primary-200/80 hover:bg-white hover:border-primary-400 hover:shadow-pink transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-white border-2 border-primary-200 text-primary-600 flex items-center justify-center shadow-xs group-hover:scale-105 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-editorial text-primary-700 bg-primary-100/80 border border-primary-200 px-3 py-1 rounded-full">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-charcoal-900 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
