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
        primary: "rgb(52, 172, 188)",
        "dark-1": "rgb(31, 31, 31)",
        "hero-bgcolor": "rgba(13, 42, 53, 0.7)",
        "feedback-bg": "#1C1C21",
        "form-bg": "#292929",
        "step-bg": "rgb(28, 28, 33)",
        "step-title": "rgb(173, 191, 210)",
      },
      backgroundImage: {
        hero: "url(/assets/hero-img.png)",
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(200%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        fade: {
          "0%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(0.75)", opacity: "0" },
          "100%": { transform: "scale(0)", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
