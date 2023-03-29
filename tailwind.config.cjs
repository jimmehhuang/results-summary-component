/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
      extend: {},
      colors: {
        'lightred': '#ff5757',
        'orangey': '#ffb01f',
        'teal': '#00bd91',
        'cobalt': '#1125d4',
        'slateblue': '#8063f2',
        'royalblue': '#2e2be9',
        'violetblue': '#4e21ca',
        'persianblue': '#2421ca'
      }
    },
    plugins: [],
  }