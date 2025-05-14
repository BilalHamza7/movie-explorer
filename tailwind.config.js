/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",           // Include this to catch classes in HTML
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}