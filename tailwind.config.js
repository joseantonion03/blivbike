/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      'img_bg_hero': "url('/image/hero/bg.png')",
      'img_bg_localizacao': "url('/image/localizacao/bg.png')",
    },
    extend: {
      screens:{
        'nav': '850px',
        'screen_500': '500px',
        'gx': '850px'
      }
    },
  },
  plugins: [],
}

