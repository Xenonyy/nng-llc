const defaultTheme = require('tailwindcss/defaultTheme');

/**
 * @type {import("tailwindcss/tailwind-config").TailwindConfig }
 */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
