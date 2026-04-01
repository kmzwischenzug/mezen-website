import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FAFAF8",
        linen: "#F2F0EB",
        ink: "#111118",
        slate: "#6B6C75",
        navy: "#0D1B3E",
        gold: "#C4903B",
        rule: "#E2E0DB",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
      },
      maxWidth: {
        content: "1160px",
        copy: "720px",
      },
    },
  },
  plugins: [],
};

export default config;
