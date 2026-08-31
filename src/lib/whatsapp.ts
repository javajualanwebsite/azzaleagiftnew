import { SITE_CONFIG } from "./constants";
import { formatRupiah } from "./utils";

export interface WhatsAppInquiryParams {
  productName: string;
  quantity: number;
  totalPrice?: number;
  selectedColor?: string;
  selectedPackaging?: string;
  customEmbossText?: string;
  weddingDate?: string;
  notes?: string;
}

/**
 * Generates official WhatsApp inquiry link conforming to FR-06 and PRD requirements
 */
export function generateWhatsAppLink(params?: WhatsAppInquiryParams): string {
  const phone = SITE_CONFIG.phoneIntl; // 628888533915

  if (!params || !params.productName) {
    // General consultation inquiry
    const text = `Halo Azzalea Handmade, saya ingin konsultasi souvenir pernikahan untuk acara kami. Mohon info katalog dan rekomendasi terbaiknya ya. Terima kasih! 🌸`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  }

  const {
    productName,
    quantity,
    totalPrice,
    selectedColor,
    selectedPackaging,
    customEmbossText,
    weddingDate,
    notes,
  } = params;

  let message = `Halo Azzalea, saya tertarik order *${productName}* sebanyak *${quantity} pcs*`;

  if (totalPrice) {
    message += ` (Estimasi: ${formatRupiah(totalPrice)})`;
  }

  message += `.\n\n📋 *Rincian Kustomisasi:*`;

  if (selectedColor) {
    message += `\n• Pilihan Warna: ${selectedColor}`;
  }

  if (selectedPackaging) {
    message += `\n• Opsi Kemasan: ${selectedPackaging}`;
  }

  if (customEmbossText) {
    message += `\n• Custom Emboss/Nama: "${customEmbossText}"`;
  }

  if (weddingDate) {
    message += `\n• Estimasi Tanggal Acara: ${weddingDate}`;
  }

  if (notes) {
    message += `\n• Catatan Tambahan: ${notes}`;
  }

  message += `\n\nMohon info ketersediaan slot produksi dan proses pembuatan mockup desainnya ya. Terima kasih! 🌸✨`;

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
