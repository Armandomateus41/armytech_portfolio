/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1C6968", // Cor principal
        secondary: "#53FF7A", // Cor secundária
        dark: "#1A1A1A", // Fundo escuro
        light: "#FFFFFF", // Fundo claro
      },
    },
  },
  plugins: [],
};
