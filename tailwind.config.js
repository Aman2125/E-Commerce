/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF6F61',
        secondary: '#FFD54F',
        accent: '#4DB6AC',
        background: '#FFFDE7',
        text: '#37474F',
      },
    },
  },
  plugins: [],
};