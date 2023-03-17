/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{njk,js,html}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'mainFont': ['Montserrat', "wght"]
      }
    },
  },
  plugins: [],
}
