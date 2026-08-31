import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gold" | "whatsapp" | "blossom";
  size?: "sm" | "md" | "lg" | "xl";
  href?: string;
  isExternal?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = "primary",
  size = "md",
  href,
  isExternal,
  leftIcon,
  rightIcon,
  isLoading,
  disabled,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-bold rounded-full transition-all duration-300 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none cursor-pointer tracking-tight";

  const sizeStyles = {
    sm: "text-xs px-4 py-1.5 gap-1.5 shadow-xs",
    md: "text-xs sm:text-sm px-5 py-2.5 gap-2 shadow-sm",
    lg: "text-sm sm:text-base px-7 py-3.5 gap-2.5 shadow-md",
    xl: "text-base sm:text-lg px-9 py-4 gap-3 shadow-pink",
  };

  const variantStyles = {
    primary:
      "bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-400 shadow-primary-500/30 hover:shadow-primary-500/40 hover:shadow-lg hover:-translate-y-0.5",
    blossom:
      "bg-gradient-to-r from-primary-400 via-primary-500 to-rose-500 text-white hover:from-primary-500 hover:to-rose-600 focus:ring-primary-300 shadow-pink hover:-translate-y-0.5",
    secondary:
      "bg-secondary-500 text-white hover:bg-secondary-600 focus:ring-secondary-400 shadow-secondary-500/20 hover:shadow-secondary-500/30 hover:-translate-y-0.5",
    gold:
      "bg-gradient-to-r from-accent-500 via-accent-400 to-accent-600 text-charcoal-900 font-extrabold hover:from-accent-400 hover:to-accent-500 focus:ring-accent-400 shadow-accent-500/30 hover:shadow-accent-500/40 hover:-translate-y-0.5",
    outline:
      "border-2 border-primary-400 text-primary-700 bg-white/80 backdrop-blur-xs hover:bg-primary-50 hover:border-primary-500 focus:ring-primary-300 hover:-translate-y-0.5",
    ghost:
      "text-charcoal-700 hover:bg-primary-50 hover:text-primary-700 focus:ring-primary-200 shadow-none",
    whatsapp:
      "bg-[#25D366] text-white hover:bg-[#20BD5A] focus:ring-[#25D366]/50 shadow-emerald-600/25 hover:shadow-emerald-600/40 hover:shadow-lg hover:-translate-y-0.5",
  };

  const combinedClasses = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  const content = (
    <>
      {isLoading ? (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      ) : (
        leftIcon
      )}
      <span>{children}</span>
      {!isLoading && rightIcon}
    </>
  );

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} disabled={disabled || isLoading} {...props}>
      {content}
    </button>
  );
};
