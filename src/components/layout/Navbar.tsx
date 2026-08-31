"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  MessageCircle,
  Sparkles,
  ShoppingBag,
  Info,
  PhoneCall,
  Search,
  BookOpen,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Beranda", href: "/", icon: Sparkles },
  { name: "Katalog", href: "/katalog", icon: ShoppingBag },
  { name: "Cara Order", href: "/cara-order", icon: BookOpen },
  { name: "Tentang Kami", href: "/tentang", icon: Info },
  { name: "Kontak", href: "/kontak", icon: PhoneCall },
];

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300",
        isScrolled
          ? "bg-cream-100/95 backdrop-blur-lg shadow-sm py-2.5 border-b border-primary-200"
          : "bg-cream-100/80 backdrop-blur-sm py-3.5 border-b border-primary-100"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand & Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-primary-400 shadow-sm transition-transform duration-300 group-hover:scale-105 bg-white flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt="Azzalea Handmade Logo"
                fill
                sizes="48px"
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl sm:text-3xl font-extrabold tracking-tight text-primary-700 group-hover:text-primary-800 transition-colors leading-none">
                Azzalea
              </span>
              <span className="text-[9px] sm:text-[10px] font-extrabold tracking-widest text-secondary-600 uppercase mt-0.5">
                Handmade Souvenir 🌸
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-1.5 bg-white/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-primary-200 shadow-2xs">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "px-4 py-1.5 rounded-full text-xs font-bold tracking-tight transition-all duration-200",
                    isActive
                      ? "text-white bg-primary-500 shadow-xs"
                      : "text-charcoal-700 hover:text-primary-600 hover:bg-primary-50"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Icons & WA Button */}
          <div className="hidden md:flex items-center gap-2.5">
            <Link
              href="/katalog"
              className="p-2.5 text-primary-700 hover:text-primary-800 hover:bg-primary-100/80 rounded-full transition-colors"
              title="Cari Souvenir"
            >
              <Search className="w-4 h-4" />
            </Link>

            <Button
              variant="whatsapp"
              size="sm"
              href={generateWhatsAppLink()}
              isExternal
              leftIcon={<MessageCircle className="w-3.5 h-3.5 fill-white" />}
              className="shadow-sm font-bold text-xs"
            >
              Konsultasi WA
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <Link
              href="/katalog"
              className="p-2 text-primary-700 hover:text-primary-800 rounded-full"
            >
              <Search className="w-5 h-5" />
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-primary-800 hover:bg-primary-100 transition-colors"
              aria-label="Toggle Navigation"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden fixed inset-x-0 top-full bg-white/98 backdrop-blur-xl border-b border-primary-200 shadow-2xl animate-in slide-in-from-top-3 duration-250">
          <div className="px-4 pt-3 pb-6 space-y-2">
            {NAV_LINKS.map((link) => {
              const Icon = link.icon;
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-bold transition-all",
                    isActive
                      ? "text-white bg-primary-500 shadow-sm"
                      : "text-charcoal-800 hover:bg-primary-50"
                  )}
                >
                  <Icon
                    className={cn(
                      "w-4 h-4",
                      isActive ? "text-white" : "text-primary-500"
                    )}
                  />
                  <span>{link.name}</span>
                </Link>
              );
            })}

            <div className="pt-3 border-t border-primary-100 flex flex-col gap-2">
              <Button
                variant="whatsapp"
                size="md"
                href={generateWhatsAppLink()}
                isExternal
                leftIcon={<MessageCircle className="w-4 h-4 fill-white" />}
                className="w-full justify-center font-bold"
              >
                Chat WhatsApp ({SITE_CONFIG.phoneDisplay})
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
