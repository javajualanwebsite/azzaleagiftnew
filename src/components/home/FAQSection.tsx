"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import { FAQS } from "@/data/faqs";
import { FloralDecoration } from "@/components/ui/FloralDecoration";
import { Button } from "@/components/ui/Button";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 lg:py-28 bg-cream-50 relative overflow-hidden">{/* pink blush - ganti putih jadi pink serasi */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-editorial text-secondary-600 mb-1">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span> 🌸
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-extrabold text-charcoal-900 mt-1">
            Pertanyaan yang Sering Diajukan
          </h2>
          <FloralDecoration variant="divider" />
          <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed font-medium">
            Informasi mendasar seputar minimum order, waktu pengerjaan, sistem pembayaran DP, dan kargo pengiriman.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3.5">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.id}
                className={cn(
                  "rounded-3xl border-2 transition-all duration-300 overflow-hidden",
                  isOpen
                    ? "bg-primary-50 border-primary-400 shadow-soft"
                    : "bg-white border-primary-100 hover:border-primary-200"
                )}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-semibold text-charcoal-900 focus:outline-none cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-serif font-bold text-primary-900 leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={cn(
                      "w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300",
                      isOpen
                        ? "bg-primary-500 text-white rotate-180"
                        : "bg-primary-100 text-primary-700"
                    )}
                  >
                    <ChevronDown className="w-3.5 h-3.5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-charcoal-700 leading-relaxed animate-in fade-in duration-200 border-t border-primary-200 pt-3.5 font-medium">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact Banner in Pink Theme - harmonis */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-primary-50 to-rose-100 border-2 border-primary-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
          <div className="text-center sm:text-left">
            <h4 className="font-serif text-base sm:text-lg font-bold text-primary-900">
              Punya Pertanyaan Spesifik Lainnya? 🌸
            </h4>
            <p className="text-xs text-charcoal-600 font-medium">
              Admin WhatsApp kami siap melayani dan memberikan solusi souvenir terbaik.
            </p>
          </div>
          <Button
            href={generateWhatsAppLink()}
            isExternal
            variant="whatsapp"
            size="sm"
            leftIcon={<MessageCircle className="w-4 h-4 fill-white" />}
          >
            Tanya Admin WA 🌸
          </Button>
        </div>
      </div>
    </section>
  );
};
