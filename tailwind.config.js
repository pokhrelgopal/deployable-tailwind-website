/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    fontFamily: {
      raleway: ["Raleway", "sans-serif"],
      arya: ["arya", "sans-serif"],
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        lightColor: "#E5DDC8",
        tealColor: "#01949A",
        blueColor: "#004369",
        redColor: "#DB1F48",
      },
    },
  },
  plugins: [],
}
