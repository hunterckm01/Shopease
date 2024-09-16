/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      'phone' : '320px',

      'tab' : "620px" ,

      "pc" : "1280px" , 
    },
    extend: {},
  },
  plugins: [],
}