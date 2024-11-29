/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        spinY: {
          '0%': {transform: 'rotateY(0deg)'},
          '100%' : {transform: 'rotateY(360deg)'},
        },
      },
      animation: {
        spinY: 'spinY 1s ease-in-out',
      },
      colors: {
        navyBlue: '#170b2a',
        gold: '#c39717',
      },
    },
  },
  variants: {
    animation: ['responsive', 'hover'],
  },
  plugins: [],
}

