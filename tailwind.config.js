const defaultTheme = require('tailwindcss/defaultTheme')
const { slateDark, crimsonDark, oliveDark } = require('@radix-ui/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['app/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        ...slateDark,
        ...crimsonDark,
        ...oliveDark,
        primary: {
          50: '#f5ffdb',
          100: '#e6ffae',
          200: '#d6ff7d',
          300: '#c6ff4b',
          400: '#b6ff1a',
          500: '#9de600',
          600: '#79b300',
          700: '#568000',
          800: '#324d00',
          900: '#0e1b00',
        },
      },
      fontFamily: {
        sans: ['var(--genera-font)', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
}
