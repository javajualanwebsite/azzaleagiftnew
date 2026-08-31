export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  category: string;
  moq: number; // Minimum Order Quantity
  description: string;
  shortDescription: string;
  dimensions?: string;
  material?: string;
  leadTimeDays?: string; // e.g. "7 - 14 Hari Kerja"
  images: string[];
  colors?: { name: string; hex: string }[];
  packagingOptions?: {
    id: string;
    name: string;
    extraPrice: number;
    description?: string;
  }[];
  isBestSeller?: boolean;
  isNew?: boolean;
  freebies?: string[]; // e.g. ["Free Emboss Nama", "Free Thank You Card", "Free Plastik & Pita"]
  rating?: number;
  reviewsCount?: number;
  salesCount?: number;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  iconName: string;
  image: string;
  itemCount: number;
}

export interface Testimonial {
  id: string;
  brideName: string;
  groomName?: string;
  location: string;
  weddingDate?: string;
  productName: string;
  rating: number;
  comment: string;
  image: string;
  source: "Instagram" | "WhatsApp" | "Bridestory";
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface WorkflowStep {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}
