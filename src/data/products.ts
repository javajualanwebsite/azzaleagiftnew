import { Product } from "@/types";

export const PRODUCTS: Product[] = [
  // ========== PAPER BAG ========== sisa 2 produk sesuai permintaan
  {
    id: "p11",
    name: "paperbag costum flora",
    slug: "paperbag-costum-flora",
    price: 15000,
    moq: 100,
    category: "paper-bag",
    shortDescription: "paperbag costum flora — detail lebih lengkap tanyakan admin whatsapp yang tercantum",
    description: "detail lebih lengkap tanyakan admin whatsapp yang tercantum",
    images: [
      "/images/paperbag-costum-flora.jpg",
    ],
    isBestSeller: true,
    isNew: true,
    rating: 5,
    reviewsCount: 27,
    salesCount: 310,
  },
  {
    id: "p12",
    name: "paperbag costum + box",
    slug: "paperbag-costum-box",
    price: 17000,
    moq: 100,
    category: "paper-bag",
    shortDescription: "paperbag costum + box — detail lebih lengkap tanyakan admin whatsapp yang tercantum",
    description: "detail lebih lengkap tanyakan admin whatsapp yang tercantum",
    images: [
      "/images/paperbag-costum-box.jpg",
    ],
    isBestSeller: true,
    isNew: true,
    rating: 5,
    reviewsCount: 19,
    salesCount: 245,
  },

  // ========== PILLOW ========== 1 produk sesuai permintaan
  {
    id: "p13",
    name: "pillow costum",
    slug: "pillow-costum",
    price: 9500,
    moq: 100,
    category: "pillow",
    shortDescription: "pillow costum — detail lebih lengkap tanyakan admin whatsapp yang tercantum",
    description: "detail lebih lengkap tanyakan admin whatsapp yang tercantum",
    images: [
      "/images/pillow-costum.jpg",
    ],
    isBestSeller: true,
    isNew: true,
    rating: 5,
    reviewsCount: 18,
    salesCount: 210,
  },

  // ========== PECAH BELAH ==========
  {
    id: "p5",
    name: "Mug Keramik Sablon Gold",
    slug: "mug-keramik-sablon-gold",
    price: 18000,
    moq: 50,
    category: "pecah-belah",
    shortDescription:
      "Mug keramik putih glossy 250ml dengan sablon gold foil nama mempelai & box eksklusif.",
    description:
      "Mug Keramik Sablon Gold adalah souvenir pecah belah paling diminati: keramik tebal glossy anti-retak, sablon gold foil tahan cuci, dikemas dengan box & shredded paper cantik.",
    dimensions: "Diameter 8 cm, Tinggi 9.5 cm, 250ml",
    material: "Keramik Putih Glossy Grade A",
    leadTimeDays: "10 - 16 Hari Kerja",
    images: [
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?auto=format&fit=crop&w=1000&q=80",
    ],
    colors: [
      { name: "Putih Glossy", hex: "#FFFFFF" },
      { name: "Pink Mug", hex: "#FFE4EA" },
      { name: "Gold Sablon", hex: "#D4AF37" },
    ],
    packagingOptions: [
      {
        id: "mug-box",
        name: "Box Kraft + Shredded Paper (Termasuk)",
        extraPrice: 0,
      },
      {
        id: "mug-hardbox",
        name: "Hardbox Premium (+ Rp 5.000/pcs)",
        extraPrice: 5000,
        description: "Hardbox kaku dengan pita satin.",
      },
    ],
    isBestSeller: true,
    isNew: false,
    freebies: [
      "Free Sablon Gold Nama & Tanggal",
      "Free Box & Kartu Ucapan",
      "Free Bubble Wrap Tebal",
    ],
    rating: 4.9,
    reviewsCount: 134,
    salesCount: 8800,
  },
  {
    id: "p6",
    name: "Piring Keramik Mini Saucer",
    slug: "piring-keramik-mini-saucer",
    price: 22000,
    moq: 50,
    category: "pecah-belah",
    shortDescription:
      "Piring keramik mini 15cm dengan decal floral & gold rim, cocok untuk kue & hiasan.",
    description:
      "Piring Keramik Mini Saucer berdiameter 15cm dengan pinggiran emas (gold rim) dan decal floral pink serasi logo. Elegan sebagai tatakan cangkir atau piring kue tamu, dikemas aman dengan box sekat.",
    dimensions: "Diameter 15 cm",
    material: "Keramik Porcelain Halus",
    leadTimeDays: "10 - 18 Hari Kerja",
    images: [
      "https://images.unsplash.com/photo-1610701596061-2ecf227e85b2?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&w=1000&q=80",
    ],
    colors: [
      { name: "Putih Tulip", hex: "#FFFBFD" },
      { name: "Floral Pink Rim", hex: "#F9AFC2" },
      { name: "Gold Rim", hex: "#D4AF37" },
    ],
    packagingOptions: [
      {
        id: "plate-box-sekat",
        name: "Box Sekat + Bubble (Termasuk)",
        extraPrice: 0,
      },
    ],
    isBestSeller: false,
    isNew: true,
    freebies: ["Free Decal Nama & Thank You Card"],
    rating: 4.8,
    reviewsCount: 41,
    salesCount: 1900,
  },

  // ========== BOX ==========
  {
    id: "p7",
    name: "Hardbox Magnet Premium",
    slug: "hardbox-magnet-premium",
    price: 9500,
    moq: 100,
    category: "box",
    shortDescription:
      "Hardbox kaku magnet bertekstur linen dengan hotprint emas foil timbul & pita satin.",
    description:
      "Hardbox Magnet Premium dibuat dari rigid board 30A berlapis kain linen / beludru lembut, dilengkapi tutup magnet kuat dan cetak poly foil emas timbul. Upgrade mewah untuk souvenir apapun.",
    dimensions: "Custom menyesuaikan isi souvenir",
    material: "Rigid Board + Linen / Velvet + Foil Emas + Magnet",
    leadTimeDays: "10 - 15 Hari Kerja",
    images: [
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&w=1000&q=80",
    ],
    colors: [
      { name: "Blush Pink", hex: "#F26A77" },
      { name: "Burgundy Red", hex: "#7B1113" },
      { name: "Emerald Green", hex: "#0F5257" },
      { name: "Royal Navy", hex: "#0B2545" },
    ],
    packagingOptions: [
      {
        id: "hardbox-standard",
        name: "Hardbox + Pita Satin (Termasuk)",
        extraPrice: 0,
      },
      {
        id: "hardbox-mika-top",
        name: "Tutup Mika Transparan (+ Rp 1.000/pcs)",
        extraPrice: 1000,
      },
    ],
    isBestSeller: true,
    isNew: false,
    freebies: [
      "Free Hotprint Foil Nama & Tanggal",
      "Free Alas Shredded Paper",
    ],
    rating: 5.0,
    reviewsCount: 76,
    salesCount: 6100,
  },
  {
    id: "p8",
    name: "Mika Box Transparan Pita",
    slug: "mika-box-transparan-pita",
    price: 5500,
    moq: 100,
    category: "box",
    shortDescription:
      "Mika box bening tebal dengan alas karton floral & pita satin, produk terlihat jelas mewah.",
    description:
      "Mika Box Transparan memberikan tampilan produk terlihat jelas namun tetap terlindungi. Mika tebal anti-pecah dengan alas karton floral pink & pita satin cantik.",
    dimensions: "10 x 10 x 5 cm (custom)",
    material: "Mika 0.4mm + Alas Karton 400gsm",
    leadTimeDays: "7 - 12 Hari Kerja",
    images: [
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1000&q=80",
    ],
    colors: [
      { name: "Bening Transparan", hex: "#FFFBFD" },
      { name: "Alas Pink Floral", hex: "#FFE4EA" },
    ],
    packagingOptions: [
      {
        id: "mika-standard",
        name: "Mika Box + Alas + Pita (Termasuk)",
        extraPrice: 0,
      },
    ],
    isBestSeller: true,
    isNew: false,
    freebies: ["Free Stiker Thank You Custom"],
    rating: 4.8,
    reviewsCount: 88,
    salesCount: 7200,
  },

  // ========== OTHER ==========
  {
    id: "p9",
    name: "Hand Towel Gift Box",
    slug: "hand-towel-gift-box",
    price: 14500,
    moq: 100,
    category: "other",
    shortDescription:
      "Handuk tangan katun 30x30 lembut dengan hiasan bunga kering edelweiss & pita satin.",
    description:
      "Hand Towel Gift Box adalah souvenir simple terjangkau namun tetap floral mewah. Cocok untuk tema garden party, 100% katun lembut berdaya serap tinggi, dikemas mika cone wrap + pita.",
    dimensions: "30 x 30 cm",
    material: "100% Soft Cotton 450 GSM",
    leadTimeDays: "7 - 12 Hari Kerja",
    images: [
      "https://images.unsplash.com/photo-1583845112203-29329902332e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?auto=format&fit=crop&w=1000&q=80",
    ],
    colors: [
      { name: "Ivory White", hex: "#FFFBFD" },
      { name: "Pastel Pink", hex: "#FFCFDB" },
      { name: "Eucalyptus Green", hex: "#B4C5B9" },
    ],
    packagingOptions: [
      {
        id: "towel-mika-cone",
        name: "Mika Cone Wrap + Pita & Bunga (Termasuk)",
        extraPrice: 0,
      },
      {
        id: "towel-box",
        name: "Mini Gift Box (+ Rp 1.500/pcs)",
        extraPrice: 1500,
      },
    ],
    isBestSeller: false,
    isNew: false,
    freebies: ["Free Custom Tag Nama", "Free Pita Satin & Bunga Kering"],
    rating: 4.8,
    reviewsCount: 88,
    salesCount: 5600,
  },
  {
    id: "p10",
    name: "Pouch Serbaguna Tile Premium",
    slug: "pouch-serbaguna-tile-premium",
    price: 16000,
    moq: 100,
    category: "other",
    shortDescription:
      "Pouch serbaguna bahan kanvas & tile premium dengan resleting & emboss nama, multifungsi.",
    description:
      "Pouch Serbaguna Tile Premium dari kanvas tebal kombinasi tile transparan, resleting kokoh, dan emboss nama mempelai. Cocok untuk kosmetik, alat tulis, atau souvenir hampers.",
    dimensions: "20 x 13 x 3 cm",
    material: "Kanvas + Tile Premium",
    leadTimeDays: "8 - 14 Hari Kerja",
    images: [
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=80",
    ],
    colors: [
      { name: "Dusty Pink", hex: "#F9AFC2" },
      { name: "Sage", hex: "#7D9D8B" },
      { name: "Cream", hex: "#FFF2F6" },
    ],
    packagingOptions: [
      {
        id: "pouch-plastik-pita",
        name: "Plastik + Pita & Tag (Termasuk)",
        extraPrice: 0,
      },
      {
        id: "pouch-paperbag",
        name: "Plus Paper Bag Floral (+ Rp 2.500/pcs)",
        extraPrice: 2500,
      },
    ],
    isBestSeller: true,
    isNew: true,
    freebies: ["Free Emboss Nama", "Free Kartu Ucapan", "Free Pita"],
    rating: 4.9,
    reviewsCount: 110,
    salesCount: 5400,
  },
];
