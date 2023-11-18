/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      bg: '#fdfffd',
      bgDark: '#f5f5f5',
      text: '#d1d1d1',
      primary: '#d1d1d1',
      accent: '#f16e03',
    },
  },
  plugins: [],
};
