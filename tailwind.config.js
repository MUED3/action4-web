/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'laterite': '#A73B24', // สีส้มอิฐ (แดงดินลูกรัง)
        'indigo': '#1A3C59',   // สีน้ำเงินเข้ม (คราม)
        'gold': '#D9A441',     // สีทอง
        'cotton': '#F4F1EA',   // สีขาวครีม (ฝ้าย)
      },
      fontFamily: {
        sans: ['"GraphikTH"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}