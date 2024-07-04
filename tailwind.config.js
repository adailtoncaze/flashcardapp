/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'neutral-custom':'#32475B',
        'green-custom':'#3FB27F'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
