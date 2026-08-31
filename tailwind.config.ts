import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#FFF1F5", // Pink blush paling lembut - harmonis logo #FEF4E9
          100: "#FFE4EA",
          200: "#FFCFDB",
          300: "#FFA9C0",
          400: "#F67A9A",
          500: "#F26A77", // Logo Azzalea Pink #F26A77 (ekstrak asli)
          600: "#E84A62",
          700: "#C72F46",
          800: "#A6263D",
          900: "#8A2336",
          DEFAULT: "#F26A77",
        },
        rose: {
          50: "#FFF1F5",
          100: "#FFE4EA",
          200: "#FFD0DD",
          300: "#FFA8BE",
          400: "#FF7B96",
          500: "#F26A77",
          600: "#E03A55",
          700: "#BC1B3E",
          800: "#9C1A37",
          900: "#831A33",
        },
        blossom: {
          50: "#FFF6F8",
          100: "#FFF0F3",
          200: "#FFDFE7",
          300: "#FFC4D3",
          400: "#FF9EB5",
          500: "#F77A9A",
          600: "#E34E6E",
          700: "#BF3540",
          800: "#9E2E37",
          900: "#842B32",
        },
        secondary: {
          50: "#F2FAF8",
          100: "#DBF2EC",
          200: "#BBE5DB",
          300: "#8FD3C4",
          400: "#5DBAA9", // Eucalyptus Sage Leaf
          500: "#3DA08E",
          600: "#2F8173",
          700: "#29685E",
          800: "#25544C",
          900: "#224641",
          DEFAULT: "#5DBAA9",
        },
        accent: {
          50: "#FFFDF5",
          100: "#FFF9E6",
          200: "#FFF0C2",
          300: "#FFE494",
          400: "#FED25C",
          500: "#F5B82A", // Warm Gold
          600: "#D99719",
          700: "#B07115",
          800: "#8D5618",
          900: "#744618",
          DEFAULT: "#F5B82A",
        },
        cream: {
          50: "#FFFBFD", // Pink Ivory - logo lattice #FEF4E9 versi pink
          100: "#FFF2F6", // Utama: blush petal - ganti putih jadi pink serasi
          200: "#FFE8EF",
          300: "#FFD9E4",
          400: "#FFC2D1",
          500: "#FF9EB5",
          DEFAULT: "#FFF2F6",
        },
        charcoal: {
          50: "#FBF9F9",
          100: "#F4EEEE",
          200: "#E7DCDE",
          300: "#D3C2C5",
          400: "#B89EA3",
          500: "#9C7D84",
          600: "#7E6067",
          700: "#654C52",
          800: "#4F3A3F",
          900: "#3A282D", // Warm Charcoal Plum
          DEFAULT: "#3A282D",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
        script: ["var(--font-great-vibes)", "cursive"],
      },
      boxShadow: {
        soft: "0 4px 25px -4px rgba(242, 106, 119, 0.13)",
        glow: "0 0 35px rgba(242, 106, 119, 0.30)",
        gold: "0 4px 25px -2px rgba(245, 184, 42, 0.3)",
        card: "0 10px 35px -5px rgba(242, 106, 119, 0.09)",
        pink: "0 12px 35px -6px rgba(242, 106, 119, 0.22)",
      },
      letterSpacing: {
        tighter: "-0.04em",
        tight: "-0.02em",
        editorial: "0.08em",
        widest: "0.15em",
      },
      backgroundImage: {
        "floral-pattern": "radial-gradient(#FFCFDB 1px, transparent 1px)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
