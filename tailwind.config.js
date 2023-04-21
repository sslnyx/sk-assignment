/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#809E73",
        secondary: "#F6C59D"
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif']
      },
    },
  },
  plugins: [],
}

