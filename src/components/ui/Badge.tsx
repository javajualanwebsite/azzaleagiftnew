import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "gold" | "neutral" | "dark" | "outline";
  size?: "sm" | "md";
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "primary",
  size = "md",
  className,
  icon,
}) => {
  const baseStyles =
    "inline-flex items-center font-medium tracking-editorial rounded-full uppercase transition-colors";

  const sizeStyles = {
    sm: "text-[10px] px-2.5 py-0.5 gap-1 font-bold",
    md: "text-[11px] px-3.5 py-1 gap-1.5 font-bold",
  };

  const variantStyles = {
    primary: "bg-primary-50 text-primary-800 border border-primary-200/80 shadow-2xs",
    secondary: "bg-secondary-50 text-secondary-800 border border-secondary-200/80 shadow-2xs",
    gold: "bg-accent-50 text-accent-800 border border-accent-300 shadow-2xs",
    neutral: "bg-cream-200 text-charcoal-700 border border-cream-300",
    dark: "bg-espresso-900 text-accent-300 border border-espresso-700",
    outline: "bg-white/90 backdrop-blur-xs text-charcoal-800 border border-primary-200 shadow-2xs",
  };

  return (
    <span
      className={cn(
        baseStyles,
        sizeStyles[size],
        variantStyles[variant],
        className
      )}
    >
      {icon}
      {children}
    </span>
  );
};
