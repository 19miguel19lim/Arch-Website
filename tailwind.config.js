/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        veryDarkBlue: "#1b1d23",
        darkGray: "#606036d",
        mediumGrey: "#7d828f",
        lightGrey: "#c8ccd8",
        veryLightGrey: "#eeeff4",
      },
      fontFamily: {
        sans: ["League Spartan", "sans-serif"],
      },
      backgroundImage: (theme) => ({
        "home-hero-mobile": "url(./public/home/mobile/image-hero-paramour.jpg)",
      }),
    },
  },
  plugins: [],
};
