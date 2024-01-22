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
      },
      backgroundImage: {
        hero: "url(/assets/hero-img.png)",
      },
    },
  },
  plugins: [],
};
export default config;
