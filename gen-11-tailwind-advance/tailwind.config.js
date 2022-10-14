/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html'
  ],
  theme: {
    extend: {
      colors: {
        putihabuabu: 'gray',
        'naples-yellow': '#F9DC5C',
        primary: '#FFEDD1',
      },
      spacing: {
        666: '666px'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
