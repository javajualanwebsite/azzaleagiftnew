import React from "react";
import {
  Search,
  MessageCircle,
  PenTool,
  Sparkles,
  CheckCircle2,
  Truck,
  ArrowRight,
} from "lucide-react";
import { WORKFLOW_STEPS } from "@/data/workflow";
import { FloralDecoration } from "@/components/ui/FloralDecoration";
import { Button } from "@/components/ui/Button";

const ICONS_MAP: Record<string, React.ElementType> = {
  Search,
  MessageCircle,
  PenTool,
  Sparkles,
  CheckCircle2,
  Truck,
};

export const WorkflowSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-primary-50/45 border-y-2 border-primary-200/70 relative overflow-hidden">{/* pink serasi - sebelumnya putih */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-rose-200/25 blur-3xl rounded-full pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-extrabold uppercase tracking-editorial text-primary-600 flex items-center justify-center gap-1.5">
            <span>🌸</span> Alur Pemesanan Mudah & Transparan <span>🌸</span>
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-extrabold text-charcoal-900 mt-1">
            6 Tahap Menuju Souvenir Impian Anda
          </h2>
          <FloralDecoration variant="divider" />
          <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
            Kami memastikan proses pemesanan souvenir pernikahan berjalan lancar,
            terdokumentasi dengan baik, dan memberikan ketenangan penuh bagi Anda.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 relative">
          {WORKFLOW_STEPS.map((step) => {
            const Icon = ICONS_MAP[step.iconName] || Sparkles;

            return (
              <div
                key={step.step}
                className="relative p-7 rounded-3xl bg-rose-50/60 border-2 border-primary-200 hover:border-primary-400 hover:bg-white hover:shadow-pink transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  {/* Step Icon and Number */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-white border-2 border-primary-300 text-primary-600 group-hover:bg-primary-500 group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-serif text-3xl font-black text-primary-300 group-hover:text-primary-500 transition-colors">
                      0{step.step}
                    </span>
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-editorial text-secondary-600 block mb-1.5">
                    {step.subtitle}
                  </span>

                  <h3 className="font-serif text-lg font-bold text-charcoal-900 mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <Button
            href="/cara-order"
            variant="outline"
            size="md"
            rightIcon={<ArrowRight className="w-4 h-4" />}
          >
            Pelajari Detail Syarat & Waktu Ideal PO 🌸
          </Button>
        </div>
      </div>
    </section>
  );
};
