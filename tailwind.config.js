/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0F0F0F',
        'secondary': '#272727'
      },
      screens: {
        'lg': '1100px',
      },
    },
  },
  plugins: [],
}

