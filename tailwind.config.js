/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#4EB7F2',
        'dark-blue': '#064061'
      },
      screens: {
        'lg': '1100px',
      },
    },
  },
  plugins: [],
}

