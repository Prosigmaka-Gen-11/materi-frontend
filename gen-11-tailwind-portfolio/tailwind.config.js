/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    '**/*.html'
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        'sans': ['Source Sans Pro', ...defaultTheme.fontFamily.sans],
        'title': ['Abril Fatface', 'cursive']
      },
      colors: {
        primary: '#F51032',
        light: '#F3F3F3',
        dark: '#171513',
        muted: '#E9E9E9'
      }
    }
  },
  plugins: [],
}
