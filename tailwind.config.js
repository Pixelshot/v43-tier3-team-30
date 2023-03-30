/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './next.config.js'],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      lineClamp: ['hover'],
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
