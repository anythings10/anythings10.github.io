/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        kuning: "#FEAD44",
        merah: "#F53C44",
        pink: "#C40D62",
        ungu: "#56376E",
      },
    },
  },
  plugins: [],
};
