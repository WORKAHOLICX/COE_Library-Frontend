/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "390px",
      // => @media (min-width: 640px) { ... }

      nn: "460px",
      // => @media (min-width: 460px) { ... }

      mdd: "768px",
      // => @media (min-width: 768px) { ... }

      md: "1024px",
      // => @media (min-width: 1024px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1080px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1195px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
