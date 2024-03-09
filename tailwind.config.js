/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'main-purple': '#2E3D71',
        'primary-purple': '#232D50', 
        'secondary-purple': '#342E71',
        'accent-blue': '#396FBF',
        'secondary': '#BEBEBE'
      },
    },
  },
  plugins: [],
}

