import { Product } from "@/types";

export const PRODUCTS: Product[] = [
  // ========== PAPER BAG ========== 
  {
    id: "p1",
    name: "paperbag costum flora",
    slug: "paperbag-costum-flora",
    price: 15000,
    moq: 100,
    category: "paper-bag",
    shortDescription: "paperbag costum flora — detail lebih lengkap tanyakan admin whatsapp yang tercantum",
    description: "detail lebih lengkap tanyakan admin whatsapp yang tercantum",
    images: [
      "/images/paperbagwhite.png",
    ],
    isBestSeller: true,
    isNew: true,
    rating: 5,
    reviewsCount: 27,
    salesCount: 310,
  },
  {
    id: "p2",
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

  // ========== PILLOW ========== 
  {
    id: "p3",
    name: "pillow costum",
    slug: "pillow-costum",
    price: 9500,
    moq: 100,
    category: "pillow",
    shortDescription: "pillow costum — detail lebih lengkap tanyakan admin whatsapp yang tercantum",
    description: "detail lebih lengkap tanyakan admin whatsapp yang tercantum",
    images: [
      "/images/pillow.png",
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
    name: "Piring dan mug",
    slug: "mug-dan-piring-menarik",
    price: 18000,
    moq: 50,
    category: "pecah-belah",
    shortDescription:
      "mug dan piring yang cantik",
    description:
      "ini adalah pilihan yang menarik, piring cantik dan mug cantik",
    dimensions: "Diameter 8 cm, Tinggi 9.5 cm, 250ml",
    material: "Keramik Putih Glossy Grade A",
    leadTimeDays: "10 - 16 Hari Kerja",
    images: [
      "/images/becahbelah.png",
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
    name: "Piring cantik",
    slug: "piring-cantik",
    price: 999,
    moq: 100,
    category: "other",
    shortDescription:
      "silahkan request melalui via whatsApp",
    description:
      "piring cantik yang menjadi favorit kelurga untuk pilihan souvernir",
    dimensions: "30 x 30 cm",
    material: "plastik",
    leadTimeDays: "7 - 12 Hari Kerja",
    images: [
      "/images/piringother.png",
    ],
    colors: [
      { name: "Ivory White", hex: "#FFFBFD" },
      { name: "Pastel Pink", hex: "#FFCFDB" },
      { name: "Eucalyptus Green", hex: "#B4C5B9" },
    ],
    packagingOptions: [
      {
        id: "PiringCantik",
        name: "packaging (Termasuk)",
        extraPrice: 0,
      },
      {
        id: "PiringCantik-plus",
        name: "piring cantik (+ Rp 999/pcs)",
        extraPrice: 999,
      },
    ],
    isBestSeller: false,
    isNew: false,
    freebies: ["Free Packaging"],
    rating: 4.8,
    reviewsCount: 88,
    salesCount: 5600,
  },

  // ========== BOX ==========
  {
    id: "p7",
    name: "Box cantik costum",
    slug: "box-cantik-costum",
    price: 25000,
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
      "/images/paperbag-costum-flora.jpg",
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
    name: "Box cantik matcha",
    slug: "box-cantik-matcha",
    price: 35000,
    moq: 100,
    category: "box",
    shortDescription:
      "matcha box cantik",
    description:
      "pecinta matcha sini kumpul",
    dimensions: "Custom menyesuaikan isi souvenir",
    material: "Rigid Board + Linen / Velvet + Foil Emas + Magnet",
    leadTimeDays: "10 - 15 Hari Kerja",
    images: [
      "/images/boxgreenn.png",
    ],
    colors: [
      { name: "Blush Pink", hex: "#F26A77" },
      { name: "Burgundy Red", hex: "#7B1113" },
      { name: "Emerald Green", hex: "#0F5257" },
      { name: "Royal Navy", hex: "#0B2545" },
    ],
    packagingOptions: [
      {
        id: "hardbox-cantik-premium",
        name: "Hardbox + costum (Termasuk)",
        extraPrice: 0,
      },
      {
        id: "hardbox-mika-top-matcha",
        name: "Tutup Mika Transparan (+ Rp 1.000/pcs)",
        extraPrice: 1000,
      },
    ],
    isBestSeller: true,
    isNew: false,
    freebies: [
      "free pita",
      "Free Alas Shredded Paper",
    ],
    rating: 5.0,
    reviewsCount: 76,
    salesCount: 6100,
  },

  {
    id: "p10",
    name: "Box elegan costum",
    slug: "box-elegan-costum",
    price: 9999,
    moq: 100,
    category: "box",
    shortDescription:
      "costum box favorit kalian",
    description:
      "untuk detail silahkan hubungi whatsApp kami yaaa",
    dimensions: "Custom menyesuaikan isi souvenir",
    material: "Rigid Board + Linen / Velvet + Foil Emas + Magnet",
    leadTimeDays: "10 - 15 Hari Kerja",
    images: [
      "/images/boxgrey.png",
    ],
    colors: [
      { name: "Blush Pink", hex: "#F26A77" },
      { name: "Burgundy Red", hex: "#7B1113" },
      { name: "Emerald Green", hex: "#0F5257" },
      { name: "Royal Navy", hex: "#0B2545" },
    ],
    packagingOptions: [
      {
        id: "hardbox-standard-elegan",
        name: "Hardbox + Pita Satin (Termasuk)",
        extraPrice: 0,
      },
      {
        id: "hardbox-sekat-elegan",
        name: "costum sekat (+ Rp 1.000/pcs)",
        extraPrice: 1000,
      },
    ],
    isBestSeller: true,
    isNew: false,
    freebies: [
      "Free Alas Shredded Paper",
    ],
    rating: 5.0,
    reviewsCount: 76,
    salesCount: 6100,
  },

  {
    id: "p11",
    name: "Box standart setara premium",
    slug: "box-standart-premium",
    price: 10000,
    moq: 100,
    category: "box",
    shortDescription:
      "box dengan harga standart namun kualitas premium.",
    description:
      "box standart yang bisa costum",
    dimensions: "Custom menyesuaikan isi souvenir",
    material: "Rigid Board + Linen",
    leadTimeDays: "10 - 15 Hari Kerja",
    images: [
      "/images/boxpink.png",
    ],
    colors: [
      { name: "Blush Pink", hex: "#F26A77" },
      { name: "Burgundy Red", hex: "#7B1113" },
      { name: "Emerald Green", hex: "#0F5257" },
      { name: "Royal Navy", hex: "#0B2545" },
    ],
    packagingOptions: [
      {
        id: "hardbox-standard-standart",
        name: "Hardbox + Pita Satin (Termasuk)",
        extraPrice: 0,
      },
      {
        id: "hardbox-sekat-standart",
        name: "sekat(+ Rp 1.000/pcs)",
        extraPrice: 1000,
      },
    ],
    isBestSeller: true,
    isNew: false,
    freebies: [
      "Free Alas Shredded Paper",
    ],
    rating: 5.0,
    reviewsCount: 76,
    salesCount: 6100,
  },

  // ========== OTHER ==========
  {
    id: "p12",
    name: "Blind Box Creativ",
    slug: "blind-box-creativ",
    price: 999,
    moq: 100,
    category: "other",
    shortDescription:
      "silahkan request melalui via whatsApp",
    description:
      "kalian bisa bikin blind box dengan berbagai macam isi",
    dimensions: "30 x 30 cm",
    material: "plastik",
    leadTimeDays: "7 - 12 Hari Kerja",
    images: [
      "/images/otherblinbox.png",
    ],
    colors: [
      { name: "Ivory White", hex: "#FFFBFD" },
      { name: "Pastel Pink", hex: "#FFCFDB" },
      { name: "Eucalyptus Green", hex: "#B4C5B9" },
    ],
    packagingOptions: [
      {
        id: "BlindBox",
        name: "packaging (Termasuk)",
        extraPrice: 0,
      },
      {
        id: "BlindBox-plus",
        name: "blind Box Educatif (+ Rp 999/pcs)",
        extraPrice: 999,
      },
    ],
    isBestSeller: false,
    isNew: false,
    freebies: ["Free Custom Tag Nama", "Free Packaging"],
    rating: 4.8,
    reviewsCount: 88,
    salesCount: 5600,
  },

  {
    id: "p13",
    name: "Clock in the box",
    slug: "clock-in-the-box",
    price: 15000,
    moq: 100,
    category: "other",
    shortDescription:
      "silahkan request melalui via whatsApp",
    description:
      "kalian bisa request isi melalui via whatsApp",
    dimensions: "30 x 30 cm",
    material: "plastik",
    leadTimeDays: "7 - 12 Hari Kerja",
    images: [
      "/images/otherclock.png",
    ],
    colors: [
      { name: "Ivory White", hex: "#FFFBFD" },
      { name: "Pastel Pink", hex: "#FFCFDB" },
      { name: "Eucalyptus Green", hex: "#B4C5B9" },
    ],
    packagingOptions: [
      {
        id: "JamDalamBox",
        name: "packaging (Termasuk)",
        extraPrice: 0,
      },
      {
        id: "JamDalamBox-plus",
        name: "box yang dibngkus box(+ Rp 999/pcs)",
        extraPrice: 999,
      },
    ],
    isBestSeller: false,
    isNew: false,
    freebies: ["Free Custom Tag Nama", "Free Packaging"],
    rating: 4.8,
    reviewsCount: 88,
    salesCount: 5600,
  },

  {
    id: "p14",
    name: "Dompet cantik",
    slug: "dompet-cantik-berbahan-kulit",
    price: 999,
    moq: 100,
    category: "other",
    shortDescription:
      "silahkan request melalui via whatsApp",
    description:
      "ide terbaik untuk souvernir pernikahan",
    dimensions: "30 x 30 cm",
    material: "kulit, kain",
    leadTimeDays: "7 - 12 Hari Kerja",
    images: [
      "/images/otherhanduk.png",
    ],
    colors: [
      { name: "Ivory White", hex: "#FFFBFD" },
      { name: "Pastel Pink", hex: "#FFCFDB" },
      { name: "Eucalyptus Green", hex: "#B4C5B9" },
    ],
    packagingOptions: [
      {
        id: "DompetKulit",
        name: "packaging (Termasuk)",
        extraPrice: 0,
      },
      {
        id: "DompetKainKulit",
        name: "Dompet kain berbahan kulit (+ Rp 999/pcs)",
        extraPrice: 999,
      },
    ],
    isBestSeller: false,
    isNew: false,
    freebies: ["Free Packaging"],
    rating: 4.8,
    reviewsCount: 88,
    salesCount: 5600,
  },

  {
    id: "p15",
    name: "Handuk lucu",
    slug: "handuk-lucu",
    price: 999,
    moq: 100,
    category: "other",
    shortDescription:
      "silahkan request melalui via whatsApp",
    description:
      "kalian bisa nikin handuk ubtuk souvernir pernikahan kalian",
    dimensions: "30 x 30 cm",
    material: "plastik",
    leadTimeDays: "7 - 12 Hari Kerja",
    images: [
      "/images/otherhanduk.png",
    ],
    colors: [
      { name: "Ivory White", hex: "#FFFBFD" },
      { name: "Pastel Pink", hex: "#FFCFDB" },
      { name: "Eucalyptus Green", hex: "#B4C5B9" },
    ],
    packagingOptions: [
      {
        id: "SouvernirHanduk",
        name: "packaging (Termasuk)",
        extraPrice: 0,
      },
      {
        id: "HandukLucu-plus",
        name: "Souvernir handuk kreatif (+ Rp 999/pcs)",
        extraPrice: 999,
      },
    ],
    isBestSeller: false,
    isNew: false,
    freebies: ["Free Custom Tag Nama", "Free Packaging"],
    rating: 4.8,
    reviewsCount: 88,
    salesCount: 5600,
  },

  {
    id: "p16",
    name: "Box cantik eduatif",
    slug: "box-cantik-edukatif",
    price: 999,
    moq: 100,
    category: "other",
    shortDescription:
      "silahkan request melalui via whatsApp",
    description:
      "kalian bisa bikin box dengan berbagai macam isi",
    dimensions: "30 x 30 cm",
    material: "plastik, kertas karton",
    leadTimeDays: "7 - 12 Hari Kerja",
    images: [
      "/images/otherjam.png",
    ],
    colors: [
      { name: "Ivory White", hex: "#FFFBFD" },
      { name: "Pastel Pink", hex: "#FFCFDB" },
      { name: "Eucalyptus Green", hex: "#B4C5B9" },
    ],
    packagingOptions: [
      {
        id: "BoxEdukatif",
        name: "packaging (Termasuk)",
        extraPrice: 0,
      },
      {
        id: "BoxGift-plus",
        name: "box Educatif (+ Rp 999/pcs)",
        extraPrice: 999,
      },
    ],
    isBestSeller: false,
    isNew: false,
    freebies: ["Free Packaging"],
    rating: 4.8,
    reviewsCount: 88,
    salesCount: 5600,
  },
];
