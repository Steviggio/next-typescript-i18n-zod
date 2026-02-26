import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/core/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
      },
      keyframes: {
        heartbeat: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
        },
      },
      animation: {
        heartbeat: "heartbeat 1.5s infinite",
      },
      colors: {
        sage: {
          DEFAULT: "#596D61",
          dark: "#3A4A40",
          light: "#7A8F82",
        },
        cream: {
          DEFAULT: "#F6F6F0",
          dark: "#E6E6E0",
        },
      },
    },
  },
  plugins: [],
};
export default config;
