import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FDF9F3",
          100: "#FAF3E8",
          200: "#F2E6D3",
        },
        burgundy: {
          50: "#FBEFF0",
          100: "#F3D5D7",
          500: "#8E2B3A",
          600: "#7B2230",
          700: "#681C29",
          800: "#551620",
        },
        charcoal: {
          800: "#2B2B2B",
          900: "#1C1C1C",
        },
      },
      fontFamily: {
        display: ["Georgia", "Times New Roman", "serif"],
        body: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      boxShadow: {
        soft: "0 6px 24px -8px rgba(28, 28, 28, 0.16)",
        lift: "0 14px 34px -12px rgba(28, 28, 28, 0.28)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        "fade-in": "fade-in 0.4s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;