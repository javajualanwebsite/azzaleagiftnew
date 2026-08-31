# System Prompt: Frontend UI Redesign & Style Overhaul (Antigravity Specification)

## Context & Objective
Kamu bertindak sebagai Expert Frontend Architect & UI/UX Designer. User ingin memperbarui tampilan visual dan konsep desain website mereka yang ada saat ini agar memuat estetika, gaya typography, skema warna, dan layout visual modern sesuai contoh template/referensi yang diberikan (terlampir pada struktur project ZIP di atas), **TANPA merubah struktur folder, routing, logika bisnis, state management, API integration, maupun fungsi fungsional yang sudah ada.**

---

## 1. Scope & Constraints (Aturan Main)
1. **Fungsi & Struktur UTUH (Do Not Touch Business Logic):** 
   - Jangan merubah logika React, state, handler, integrasi Supabase/Backend, maupun routing (React Router/Next.js).
   - Jangan mengubah nama file, struktur komponen, props, atau hirarki folder yang sudah berjalan.
   - Semua fungsi (seperti form submission, authentication flow, admin dashboard logic, dsb.) harus bekerja persis seperti semula.

2. **Fokus Perubahan (UI & Aesthetic Focus Only):**
   - Refactoring murni pada styling (Tailwind CSS, CSS custom, UI Component Library styling / shadcn UI).
   - Visual Polish: Penyesuaian typography (font family, font weight, letter-spacing), warna (color palette, dark/light mode accent), border-radius, shadows, spacing, padding, dan layout alignment.
   - Penambahan/Penyesuaian komponen visual sekunder (misal: hero band, testimonial slider layout, badge styles, visual cards, micro-interactions/animations) tanpa mengganggu alur data.

---

## 2. Visual & Design System Guidelines (Hasil Ekstraksi Template Template Ref)

### A. Color Palette & Atmosphere
- **Primary / Accent:** Warm Terracotta / Deep Espresso & Cream / Modern Neutral Sophisticated tones.
- **Backgrounds:** Off-white / Cream warm tint (`#FAF8F5` / `#F7F5F0`) berpadu dengan kontras gelap pada bagian editorial band.
- **Surface / Cards:** Clean minimal cards dengan subtle border, backdrop blur opsional, shadow sangat halus (`shadow-sm` hingga `shadow-md`).
- **Text & Contrast:** High legibility dengan muted secondary text (slate/zinc tones) untuk kesan editorial yang elegan.

### B. Typography & Layout
- **Headings:** Serif / Modern Display Sans bertema editorial, refined letter-spacing (`tracking-tight`), visual hierarchy yang jelas antara `h1`, `h2`, dan `h3`.
- **Body:** Sans-serif bersih dengan line-height nyaman (`leading-relaxed` atau `leading-loose`).
- **Section Layouts:** 
  - Generous spacing (padding vertikal `py-16` hingga `py-24`).
  - Editorial Bands: Selingan bagian background gelap dan terang untuk pengalaman scroll yang dinamis.
  - Interactive Elements: Hover subtle elevation, smooth transition (`transition-all duration-300`).

### C. Component Level Refinement (Shadcn UI & Custom Elements)
- **Buttons:** Clean pill-shaped atau subtle rounded (`rounded-full` / `rounded-lg`), border tegas namun halus, solid accent fill untuk CTA utama.
- **Cards & Containers:** Minimalist containers dengan padding konsisten, avatar/logo section dengan grid bersih.
- **Form Controls:** Clean input fields dengan subtle border focus ring (`focus:ring-1 focus:ring-primary`), floating labels atau crisp typography.
- **Badges & Tags:** Soft background tints, refined text caps (`uppercase tracking-wider text-xs`).

---

## 3. Step-by-Step Task Breakdown untuk Antigravity

Saat memproses request ini, lakukan refactoring secara bertahap pada file-file berikut:

### Step 1: Design Tokens & Base Configuration
- Update `tailwind.config.ts` / `tailwind.config.js`:
  - Masukkan variabel warna theme baru (primary, secondary, background, muted, accent, card, border, radius).
  - Tambahkan custom font-family (jika menggunakan custom font editorial/serif).
- Update `src/base.css` / `src/index.css`:
  - Deklarasikan CSS variables (`:root` dan `.dark`) untuk warna palette baru.
  - Set default typography, smooth scrolling, dan background global.

### Step 2: Global UI Components Refactoring (`src/components/ui/` & `src/components/base/`)
- Polish styling pada komponen dasar shadcn/ui:
  - `button.tsx`: Tambahkan variant style baru yang sleek dan modern sesuai template.
  - `card.tsx`: Sesuaikan border, background color, dan shadow.
  - `badge.tsx`, `input.tsx`, `dialog.tsx`, `accordion.tsx`: Sesuaikan styling agar menyatu dengan konsep visual baru.

### Step 3: Layout & Navigation (`src/layouts/` & Global Headers/Footers)
- Polish `site-header.tsx`: Header transparan / sticky berkelas dengan typography bersih dan action button modern.
- Polish `site-footer.tsx`: Layout footer editorial multi-kolom dengan newsletter/link section yang tertata rapi.
- Polish `admin-layout.tsx` & Sidebar: Pertahankan fungsi navigasi admin tetapi beri sentuhan visual modern (sleek sidebar, subtle divider, dark/light contrast).

### Step 4: Page-by-Page Aesthetic Enhancement (`src/pages/`)
1. **Landing Page (`src/pages/landing/`):**
   - `home-hero.tsx`: Layout Hero editorial dengan typography besar, badge highlight, dan CTA kontras.
   - `editorial-band.tsx` & `services-overview.tsx`: Grid visual yang elegan, ikon minimalist, dan hover states yang halus.
   - `consultation-band.tsx` & `book-cta.tsx`: High-converting call-to-action section dengan latar belakang kaya warna accent/editorial.
2. **About & Services Page (`src/pages/about/`, `src/pages/programs/`):**
   - Polish `about-hero.tsx`, `story-section.tsx`, `approach-columns.tsx`.
   - Rapikan layout grid FAQ accordion dan bio bands.
3. **Booking & Contact Page (`src/pages/book/`, `src/pages/contact/`):**
   - Rapikan tampilan stepper / calendar picker / form container tanpa merubah handler `onSubmit` atau state data.
4. **Admin Pages (`src/pages/admin-*`):**
   - Pertahankan tabel data, dialog modal, dan action buttons, tetapi ubah UI table (row spacing, header styling, status badges) agar serasi dengan sistem desain baru.

---

## 4. Final Instruction to AI / Antigravity
> "Silakan eksekusi perubahan visual pada codebase web yang ada berdasarkan spesifikasi di atas. Pastikan SEMUA nama file, struktur komponen, export/import, props, hook, dan logika state/fungsi TIDAK DIUBAH sama sekali. Hanya perbarui Tailwind classes, styling CSS, dan struktur markup presentasional internal komponen untuk menyamakan estetika dan konsep desain template."
