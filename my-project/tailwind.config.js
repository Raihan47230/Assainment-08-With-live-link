/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'imgOne':"url('./src/assets/Group 1.png')",
        'imgTwo': "url('./src/assets/delete.png')",
        // 'Banners': "url('./src/assets/banner.jpg')",
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}