/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      'md':'992px',
      'lg':'1280px',
    },
    extend: {
      colors:{
        'purple': '#4b67d8',
        'pink':'#a569b6',
        'darkColor':'#051e38',
        'lightColor':'#ffffff',
        'peachy':'#f991a3',
        'fairouz':'#5ca5a7',
      },
      dropShadow:{
        'white':'0 20px 13px #e5e7eb52',
        'pink': '0 20px 13px #a569b6 ',
          },
    },
  },
  darkMode: 'class',
  plugins: [],
  }

