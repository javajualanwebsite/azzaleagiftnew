"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Quote, Sparkles, Instagram, MessageCircle, Star, User, Plus, X, Upload, Send } from "lucide-react";
import { TESTIMONIALS } from "@/data/testimonials";
import { RatingStars } from "@/components/ui/RatingStars";
import { FloralDecoration } from "@/components/ui/FloralDecoration";
import { Badge } from "@/components/ui/Badge";
import { Testimonial } from "@/types";

const STORAGE_KEY = "azzalea_testimonials_user";

function TestimonialAvatar({ item }: { item: Testimonial }) {
  const [imgError, setImgError] = useState(false);
  const initials = item.brideName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  if (!item.image || imgError) {
    return (
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 border-2 border-primary-400 flex items-center justify-center text-white font-bold text-xs flex-shrink-0 shadow-xs">
        {initials || <User className="w-6 h-6" />}
      </div>
    );
  }

  return (
    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary-400 flex-shrink-0 shadow-xs bg-white">
      <Image
        src={item.image}
        alt={item.brideName}
        fill
        sizes="48px"
        className="object-cover"
        onError={() => setImgError(true)}
        unoptimized
      />
    </div>
  );
}

export const TestimonialsSection: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(TESTIMONIALS);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    brideName: "",
    location: "",
    productName: "",
    rating: 5,
    comment: "",
    image: "",
    source: "Instagram" as Testimonial["source"],
  });
  const [preview, setPreview] = useState<string>("");

  // Load user testimonials dari localStorage (database sederhana per-browser)
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed: Testimonial[] = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setTestimonials([...parsed, ...TESTIMONIALS]);
        }
      }
    } catch {}
  }, []);

  const persist = (userList: Testimonial[]) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(userList));
    } catch {}
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      setPreview(result);
      setFormData((prev) => ({ ...prev, image: result }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.brideName.trim() || !formData.comment.trim()) return;

    const newItem: Testimonial = {
      id: `t-user-${Date.now()}`,
      brideName: formData.brideName.trim(),
      location: formData.location.trim() || "Malang",
      productName: formData.productName.trim() || "Souvenir Azzalea",
      rating: formData.rating,
      comment: formData.comment.trim(),
      image: formData.image || "",
      source: formData.source,
    };

    try {
      const savedRaw = localStorage.getItem(STORAGE_KEY);
      const existing: Testimonial[] = savedRaw ? JSON.parse(savedRaw) : [];
      const updatedUser = [newItem, ...existing];
      persist(updatedUser);
      setTestimonials([newItem, ...testimonials]);
    } catch {
      setTestimonials([newItem, ...testimonials]);
    }

    setFormData({ brideName: "", location: "", productName: "", rating: 5, comment: "", image: "", source: "Instagram" });
    setPreview("");
    setShowForm(false);
  };

  return (
    <section className="py-20 lg:py-28 bg-cream-100/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-[11px] font-extrabold uppercase tracking-editorial text-primary-600 flex items-center justify-center gap-1.5">
            <span>🌸</span> Cerita Pasangan Bahagia <span>🌸</span>
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-extrabold text-charcoal-900 mt-1">
            Testimoni & Pengalaman Nyata
          </h2>
          <FloralDecoration variant="divider" />
          <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed font-medium">
            Kebahagiaan Anda adalah kehormatan bagi kami. Tambahkan cerita Anda — testimoni akan tersimpan di browser (database lokal) dan tampil instan seperti beneran.
          </p>
          <button
            onClick={() => setShowForm((v) => !v)}
            className="mt-5 inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-6 py-2.5 rounded-full text-xs font-bold shadow-pink transition-all"
          >
            {showForm ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
            {showForm ? "Tutup Form" : "Tulis Testimoni Baru 🌸"}
          </button>
        </div>

        {/* Form tambah testimoni — save ke localStorage */}
        {showForm && (
          <div className="max-w-3xl mx-auto mb-12 bg-white rounded-3xl p-6 sm:p-8 shadow-card border-2 border-primary-200">
            <h3 className="font-serif text-lg font-bold text-charcoal-900 mb-1 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary-500" /> Bagikan Pengalaman Anda
            </h3>
            <p className="text-xs text-charcoal-500 mb-5">Testimoni akan ke-save di database lokal (localStorage) dan langsung tampil di bawah. Untuk database permanen butuh backend (Supabase/Firebase) — bisa di-upgrade nanti.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-charcoal-700 block mb-1">Nama / Pasangan *</label>
                  <input
                    required
                    value={formData.brideName}
                    onChange={(e) => setFormData({ ...formData, brideName: e.target.value })}
                    placeholder="Contoh: Sinta & Bagas"
                    className="w-full px-4 py-2.5 rounded-full border border-cream-300 bg-cream-50/50 text-xs focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-300"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-charcoal-700 block mb-1">Lokasi</label>
                  <input
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="Contoh: Malang"
                    className="w-full px-4 py-2.5 rounded-full border border-cream-300 bg-cream-50/50 text-xs focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-300"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-charcoal-700 block mb-1">Produk</label>
                  <input
                    value={formData.productName}
                    onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
                    placeholder="Contoh: Paper Bag Custom (200 pcs)"
                    className="w-full px-4 py-2.5 rounded-full border border-cream-300 bg-cream-50/50 text-xs focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-300"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-charcoal-700 block mb-1">Rating</label>
                  <div className="flex items-center gap-1.5 pt-2">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <button
                        key={n}
                        type="button"
                        onClick={() => setFormData({ ...formData, rating: n })}
                        className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all ${formData.rating >= n ? "bg-amber-400 border-amber-400 text-white" : "bg-white border-cream-300 text-charcoal-400"}`}
                      >
                        <Star className={`w-4 h-4 ${formData.rating >= n ? "fill-white" : ""}`} />
                      </button>
                    ))}
                    <span className="text-xs font-bold text-charcoal-700 ml-2">{formData.rating}.0</span>
                  </div>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-charcoal-700 block mb-1">Komentar *</label>
                <textarea
                  required
                  rows={3}
                  value={formData.comment}
                  onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                  placeholder="Tulis pengalaman kamu dengan Azzalea Handmade..."
                  className="w-full p-4 rounded-2xl border border-cream-300 bg-cream-50/50 text-xs focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-300"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-charcoal-700 block mb-1 flex items-center gap-1"><Upload className="w-3.5 h-3.5" /> Foto (opsional)</label>
                  <input type="file" accept="image/*" onChange={handleImageUpload} className="w-full text-xs file:mr-3 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-primary-50 file:text-primary-700 file:font-bold file:text-xs hover:file:bg-primary-100" />
                  {preview && <div className="mt-3 w-16 h-16 rounded-full overflow-hidden border-2 border-primary-200"><img src={preview} alt="preview" className="w-full h-full object-cover" /></div>}
                </div>
                <div>
                  <label className="text-xs font-bold text-charcoal-700 block mb-1">Sumber</label>
                  <select value={formData.source} onChange={(e) => setFormData({ ...formData, source: e.target.value as any })} className="w-full px-4 py-2.5 rounded-full border border-cream-300 bg-cream-50/50 text-xs focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-300">
                    <option value="Instagram">Instagram</option>
                    <option value="WhatsApp">WhatsApp</option>
                    <option value="Bridestory">Bridestory</option>
                  </select>
                </div>
              </div>

              <button type="submit" className="w-full inline-flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 text-white py-3 rounded-full font-bold text-sm shadow-pink transition-all">
                <Send className="w-4 h-4" /> Kirim Testimoni & Simpan ke Database Lokal
              </button>
              <p className="text-[11px] text-center text-charcoal-400">Tersimpan di <code>localStorage:azzalea_testimonials_user</code> — hapus cache browser untuk reset.</p>
            </form>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-7 sm:p-9 shadow-soft border-2 border-primary-200 hover:shadow-pink transition-all duration-300 flex flex-col justify-between relative group"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary-200/80 -scale-x-100 pointer-events-none group-hover:text-primary-300 transition-colors" />

              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <RatingStars rating={item.rating} />
                  <Badge variant="neutral" size="sm">
                    {item.source === "Instagram" && (
                      <Instagram className="w-3 h-3 text-pink-500 mr-1 inline" />
                    )}
                    {item.source === "WhatsApp" && (
                      <MessageCircle className="w-3 h-3 text-emerald-500 mr-1 inline" />
                    )}
                    {item.source} Review
                  </Badge>
                </div>

                <p className="text-xs sm:text-sm text-charcoal-800 italic leading-relaxed mb-6 font-display text-base sm:text-lg">
                  &ldquo;{item.comment}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-primary-100 flex items-center gap-3.5">
                <TestimonialAvatar item={item} />
                <div>
                  <h4 className="font-serif text-sm font-bold text-primary-900">
                    {item.brideName}
                  </h4>
                  <p className="text-[11px] text-charcoal-600 font-medium">
                    {item.location} • {item.productName}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
