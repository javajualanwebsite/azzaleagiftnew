import React from "react";
import { cn } from "@/lib/utils";

interface FloralDecorationProps {
  className?: string;
  variant?: "corner-tr" | "corner-bl" | "divider" | "blossom" | "garland" | "wreath";
}

export const FloralDecoration: React.FC<FloralDecorationProps> = ({
  className,
  variant = "divider",
}) => {
  if (variant === "divider") {
    return (
      <div className={cn("flex items-center justify-center gap-3 my-4 opacity-85", className)}>
        <div className="h-[1.5px] w-12 sm:w-24 bg-gradient-to-r from-transparent via-primary-300 to-primary-400" />
        
        {/* Flower Center Motif */}
        <div className="flex items-center gap-1 text-primary-500">
          <svg className="w-3.5 h-3.5 text-secondary-500 -rotate-45" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 12 22 12 22C12 22 22 17.5 22 12C22 6.5 17.5 2 12 2Z" />
          </svg>
          <svg className="w-5 h-5 text-primary-500 animate-pulse-subtle" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="3.5" fill="#F5B82A" />
            <path d="M12 2C13.5 5 15.5 7 19 8C16 9.5 14 11.5 13 15C11.5 12 9.5 10 6 9C9 7.5 11 5.5 12 2Z" fill="#E85D80" opacity="0.9" />
            <path d="M22 12C19 13.5 17 15.5 16 19C14.5 16 12.5 14 9 13C12 11.5 14 9.5 15 6C16.5 9 18.5 11 22 12Z" fill="#F37F9E" opacity="0.7" />
          </svg>
          <svg className="w-3.5 h-3.5 text-secondary-500 rotate-45" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 12 22 12 22C12 22 22 17.5 22 12C22 6.5 17.5 2 12 2Z" />
          </svg>
        </div>

        <div className="h-[1.5px] w-12 sm:w-24 bg-gradient-to-l from-transparent via-primary-300 to-primary-400" />
      </div>
    );
  }

  if (variant === "blossom") {
    return (
      <svg
        className={cn("w-6 h-6 text-primary-500 inline-block", className)}
        viewBox="0 0 24 24"
        fill="none"
      >
        <circle cx="12" cy="12" r="3" fill="#F5B82A" />
        <circle cx="12" cy="6" r="3.5" fill="#E85D80" fillOpacity="0.8" />
        <circle cx="12" cy="18" r="3.5" fill="#E85D80" fillOpacity="0.8" />
        <circle cx="6" cy="12" r="3.5" fill="#F37F9E" fillOpacity="0.8" />
        <circle cx="18" cy="12" r="3.5" fill="#F37F9E" fillOpacity="0.8" />
      </svg>
    );
  }

  if (variant === "corner-tr") {
    return (
      <svg
        className={cn("w-40 h-40 pointer-events-none opacity-60 select-none", className)}
        viewBox="0 0 160 160"
        fill="none"
      >
        {/* Vines */}
        <path d="M160 0 C110 20 60 70 40 120 C70 100 100 80 160 0 Z" fill="#5DBAA9" fillOpacity="0.35" />
        <path d="M160 40 C120 70 80 110 60 160 C90 140 120 110 160 40 Z" fill="#5DBAA9" fillOpacity="0.25" />
        {/* Pink Flower Petals */}
        <circle cx="130" cy="30" r="14" fill="#E85D80" fillOpacity="0.8" />
        <circle cx="130" cy="30" r="6" fill="#F5B82A" />
        <circle cx="100" cy="60" r="10" fill="#F37F9E" fillOpacity="0.75" />
        <circle cx="100" cy="60" r="4" fill="#FFE494" />
        <circle cx="70" cy="100" r="8" fill="#FFB0BF" fillOpacity="0.7" />
        {/* Gold dots */}
        <circle cx="145" cy="70" r="3" fill="#F5B82A" />
        <circle cx="115" cy="110" r="2.5" fill="#F5B82A" />
      </svg>
    );
  }

  if (variant === "corner-bl") {
    return (
      <svg
        className={cn("w-40 h-40 pointer-events-none opacity-60 select-none rotate-180", className)}
        viewBox="0 0 160 160"
        fill="none"
      >
        <path d="M160 0 C110 20 60 70 40 120 C70 100 100 80 160 0 Z" fill="#5DBAA9" fillOpacity="0.35" />
        <path d="M160 40 C120 70 80 110 60 160 C90 140 120 110 160 40 Z" fill="#5DBAA9" fillOpacity="0.25" />
        <circle cx="130" cy="30" r="14" fill="#E85D80" fillOpacity="0.8" />
        <circle cx="130" cy="30" r="6" fill="#F5B82A" />
        <circle cx="100" cy="60" r="10" fill="#F37F9E" fillOpacity="0.75" />
        <circle cx="100" cy="60" r="4" fill="#FFE494" />
        <circle cx="70" cy="100" r="8" fill="#FFB0BF" fillOpacity="0.7" />
      </svg>
    );
  }

  return null;
};
