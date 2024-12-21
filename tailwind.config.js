/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto Flex', 'sans-serif'],
      },
      screens: {
        'mobile-screen': '320px', // min-width
        'tablets': '768px'
      },
    },
  },
  plugins: [],
}
