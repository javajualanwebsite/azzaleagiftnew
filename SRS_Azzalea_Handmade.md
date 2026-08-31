# Software Requirements Specification (SRS)
**Project Name:** Website Katalog & Order Inquiry Azzalea Handmade
**Tech Stack Recommended:** Next.js / Astro (Frontend), Tailwind CSS (Styling), Vercel (Hosting)

## 1. Introduction
Dokumen ini merangkum kebutuhan teknis untuk AI Coding Assistant (seperti OpenCodeAI) dalam membangun sistem website katalog Azzalea Handmade.

## 2. Functional Requirements (FR)
* **FR-01 (Hero & UI):** Sistem merender layout mobile-first yang responsif dengan Hero section dan Navigasi (Home, Katalog, Kontak).
* **FR-02 (Product Catalog):** Sistem menampilkan grid produk. Data produk dapat menggunakan mock JSON file berisi `id`, `name`, `price`, `image_url`, `category`, `moq`, `description`.
* **FR-03 (Category Filter):** Sistem memungkinkan user memfilter produk berdasarkan kategori tanpa me-reload halaman (Client-side filtering).
* **FR-04 (Product Detail):** Halaman dinamis untuk setiap produk menampilkan informasi detail dan galeri gambar.
* **FR-05 (Cost Estimator):** Komponen input angka pada halaman produk. Sistem mengalikan `harga satuan` x `jumlah pesanan` secara real-time.
* **FR-06 (WhatsApp API Generator):** Saat tombol "Pesan" diklik, sistem men-generate URL: `https://wa.me/628888533915?text=Halo%20Azzalea%2C%20saya%20tertarik%20order%20[Nama%20Produk]%20sebanyak%20[Jumlah]%20pcs.`

## 3. Non-Functional Requirements (NFR)
* **NFR-01 (Performance):** Harus menggunakan optimasi gambar (contoh: `next/image` di Next.js).
* **NFR-02 (Responsiveness):** Menggunakan utilitas Tailwind (`sm:`, `md:`, `lg:`) untuk memastikan layout sempurna di Mobile dan Desktop.
* **NFR-03 (SEO):** Harus memiliki meta tags dasar, title, dan description yang relevan dengan "Souvenir Pernikahan Handmade".

## 4. Data Structure (Mock JSON Example)
```json
[
  {
    "id": "p1",
    "name": "Classic Leather Pouch",
    "slug": "classic-leather-pouch",
    "price": 15000,
    "moq": 100,
    "category": "Pouch",
    "images": ["/img/pouch1.jpg"]
  }
]
```
