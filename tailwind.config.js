/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  future: {
    // Hover styles must not stick after a tap on touch screens.
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      colors: {
        klever: '#78B833',
      },
      fontFamily: {
        sans: ['Nunito', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(-50%, -50%) scale(1)' },
          '33%': { transform: 'translate(-55%, -45%) scale(1.1) rotate(5deg)' },
          '66%': { transform: 'translate(-45%, -55%) scale(0.9) rotate(-5deg)' },
        },
      },
      animation: {
        blob: 'blob 15s infinite ease-in-out',
      },
    },
  },
};
