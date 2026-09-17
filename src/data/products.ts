import { Product } from "@/types";

export const PRODUCTS: Product[] = [
  // ========== PAPER BAG ========== sisa 2 produk sesuai permintaan
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

  // ========== PILLOW ========== 1 produk sesuai permintaan
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
    id: "p9",
    name: "Piring cantik",
    slug: "Piring cantik",
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
        id: "Piring Cantik",
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
    slug: "hardbox-cantik-premium",
    price: 25.000,
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
    slug: "hardbox-cantik-matcha",
    price: 35.000,
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
        id: "hardbox-mika-top",
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
    id: "p7",
    name: "Box elegan costum",
    slug: "hardbox-cantik-premium",
    price: 9.999,
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
        id: "hardbox-standard",
        name: "Hardbox + Pita Satin (Termasuk)",
        extraPrice: 0,
      },
      {
        id: "hardbox-mika-top",
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
    id: "p9",
    name: "Box standart setara premium",
    slug: "hardbox-cantik-premium",
    price: 10.000,
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
        id: "hardbox-standard",
        name: "Hardbox + Pita Satin (Termasuk)",
        extraPrice: 0,
      },
      {
        id: "hardbox-mika-top",
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
    id: "p9",
    name: "Blind Box Creativ",
    slug: "Blind Box Creativ",
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
        id: "Blind Box",
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
    id: "p9",
    name: "Clock in the box",
    slug: "Clock in the box",
    price: 15.000,
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
        id: "Jam dalam box",
        name: "packaging (Termasuk)",
        extraPrice: 0,
      },
      {
        id: "Jam dalam box",
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
    id: "p9",
    name: "Dompet cantik",
    slug: "Dompet cantik berbahan kulit",
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
        id: "Dompet berbahan kain bermotif kulit",
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
    id: "p9",
    name: "Handuk lucu",
    slug: "Handuk lucu",
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
        id: "Souvernir Handuk",
        name: "packaging (Termasuk)",
        extraPrice: 0,
      },
      {
        id: "Handuk Lucu",
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
    id: "p9",
    name: "Box cantik eduatif",
    slug: "Box cantik edukatif",
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
        id: "Box",
        name: "packaging (Termasuk)",
        extraPrice: 0,
      },
      {
        id: "Box dengan berbagai macam gift",
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
