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
        // TODO: Replace with Designer-specified brand colors once MEZA-30 is delivered
        brand: {
          50: "#f8f7f4",
          100: "#ede9e0",
          200: "#d8d0c0",
          300: "#bfb49e",
          400: "#a6977c",
          500: "#8c7d62",
          600: "#73664f",
          700: "#5a5040",
          800: "#3d3629",
          900: "#1f1b14",
          950: "#0d0c09",
        },
        accent: {
          DEFAULT: "#c9a96e",
          dark: "#a8864a",
          light: "#e8cfa0",
        },
      },
      fontFamily: {
        // TODO: Update with Designer-specified font stack once MEZA-30 is delivered
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      maxWidth: {
        "8xl": "88rem",
      },
    },
  },
  plugins: [],
};

export default config;
