const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      fontFamily: {
        figtree: ['var(--font-figtree)', ...fontFamily.sans],
        sans: ['var(--font-text)', ...fontFamily.sans], // setting default font
        text: ['var(--font-text)', ...fontFamily.sans],
        header: ['var(--font-header)', ...fontFamily.sans], // setting header font
      },
    },
  },
  plugins: [],
};