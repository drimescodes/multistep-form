/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        drimes_deep_blue: 'hsl(213, 96%, 18%)',
        drimes_text_gray:'hsl(228, 100%, 84%)',
        drimes_cyan:'hsl(206, 94%, 87%)',
      },
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
    addUtilities({
      '.content-auto': {
        'content-visibility': 'auto',
      },
      '.content-hidden': {
        'content-visibility': 'hidden',
      },
      '.content-visible': {
        'content-visibility': 'visible',
      },
    })
  })],
}

