import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-outfit)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
      },
      keyframes: {
        "aurora-1": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(5%, 8%) scale(1.08)" },
        },
        "aurora-2": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(-8%, -5%) scale(1.05)" },
        },
        "aurora-3": {
          "0%, 100%": { transform: "translate(-50%, -50%) scale(1)" },
          "50%": { transform: "translate(-50%, -50%) scale(1.12)" },
        },
      },
      animation: {
        "aurora-1": "aurora-1 8s ease-in-out infinite",
        "aurora-2": "aurora-2 10s ease-in-out infinite",
        "aurora-3": "aurora-3 12s ease-in-out infinite",
      },
      colors: {
        // Warm cream palette
        cream: {
          50: "#faf8f4",
          100: "#f5f0e8",
          200: "#ede6d6",
        },
      },
    },
  },
  plugins: [],
};

export default config;
