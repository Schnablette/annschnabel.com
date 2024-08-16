/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        extend: {
          gray: {
            DEFAULT: "#F4F4F0",
            50: "#F4F4F0",
            100: "#EAEAE3",
            200: "#D7D7C8",
            300: "#C3C3AE",
            400: "#B0B093",
            500: "#9D9D79",
            600: "#868662",
            700: "#6B6B4F",
            800: "#51513B",
            900: "#363628",
            950: "#29291E",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
