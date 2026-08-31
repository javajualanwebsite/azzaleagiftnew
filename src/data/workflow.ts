import { WorkflowStep } from "@/types";

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    step: 1,
    title: "Eksplorasi & Simulasi",
    subtitle: "Pilih Souvenir Impian",
    description:
      "Pilih model souvenir dari katalog kami, tentukan pilihan warna, kemasan, dan gunakan kalkulator untuk melihat estimasi total biaya.",
    iconName: "Search",
  },
  {
    step: 2,
    title: "Konsultasi & Inquiry WA",
    subtitle: "Terhubung ke Admin",
    description:
      "Klik tombol 'Pesan via WhatsApp'. Format rincian produk akan terisi otomatis dan admin kami segera memverifikasi ketersediaan slot produksi.",
    iconName: "MessageCircle",
  },
  {
    step: 3,
    title: "Pembuatan Mockup Desain",
    subtitle: "Preview Gratis",
    description:
      "Tim desainer grafis Azzalea akan mengirimkan contoh layout/mockup digital emboss nama pengantin & kartu ucapan untuk Anda setujui.",
    iconName: "PenTool",
  },
  {
    step: 4,
    title: "DP 50% & Mulai Produksi",
    subtitle: "Handcrafted with Love",
    description:
      "Setelah desain fix dan DP 50% dikonfirmasi, pesanan Anda langsung masuk ke antrean workshop pengrajin handmade kami.",
    iconName: "Sparkles",
  },
  {
    step: 5,
    title: "Quality Control & Pelunasan",
    subtitle: "Foto & Video Hasil Jadi",
    description:
      "Admin mengirimkan dokumentasi produk yang telah selesai dicek kualitasnya secara detail, lalu Anda melakukan pelunasan sisa tagihan.",
    iconName: "CheckCircle2",
  },
  {
    step: 6,
    title: "Pengemasan & Pengiriman",
    subtitle: "Resi & Packing Ekstra Aman",
    description:
      "Barang dipacking menggunakan kardus tebal dan pelindung waterproof, dikirim via kargo aman sampai ke depan pintu rumah Anda.",
    iconName: "Truck",
  },
];
