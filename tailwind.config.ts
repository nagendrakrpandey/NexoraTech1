import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        nexora: {
          navy: "#0A192F",
          dark: "#0F172A",
          slate: "#334155",
          muted: "#64748B",
          light: "#F8FAFC",
          ice: "#F0F7FF",
          border: "#E2E8F0",
          card: "#FFFFFF",
          cardAlt: "#F8FAFC",
          electric: "#2563EB",
          royal: "#1D4ED8",
          cyan: "#0284C7",
          cyanAccent: "#06B6D4",
          cyanGlow: "rgba(6, 182, 212, 0.15)",
          electricGlow: "rgba(37, 99, 235, 0.15)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        display: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 30px -5px rgba(15, 23, 42, 0.05), 0 0 1px 1px rgba(15, 23, 42, 0.05)",
        "card-hover": "0 20px 40px -10px rgba(37, 99, 235, 0.12), 0 0 1px 1px rgba(37, 99, 235, 0.2)",
        glow: "0 0 25px rgba(6, 182, 212, 0.25)",
      },
      animation: {
        "spin-slow": "spin 25s linear infinite",
        "pulse-subtle": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
