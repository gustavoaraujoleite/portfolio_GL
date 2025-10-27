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
        "regular-gray": "#333333",
        "dim-gray": "#6E6E6E",
        "golden-yellow": "#F5B401",
        gray: {
          100: "#8E8E8E",
          400: "#A0AEC0",
          500: "#718096",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
    },
  },
  plugins: [],
};
