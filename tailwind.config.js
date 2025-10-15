/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 2px 2px rgba(0, 0, 0, 0.25)",
      },
      colors: {
        primary: "#E5DED0",
        secondary: "#B3A998",
        "button-hover": "#D9D1B6",
        "placeholder-color": "#5F544E",
        golden: "#d69c0a",
        gray: {
          100: "#8E8E8E",
          400: "#A0AEC0",
          500: "#718096",
        },
      },
      fontFamily: {
        nunito: ["var(--font-nunito)"],
      },
    },
  },
  plugins: [],
};
