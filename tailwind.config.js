module.exports = {
  content: ['./docs/**/*.{html, js}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["GT Walsheim Pro", "sans-serif"],
      },
      colors: {
        'text-color': '#111827',
        'background-color': '#e8e8e8',
        'primary-color': '#FEA116',
        'secondary-color': '#0BB049',
        'accent-color': '#B3B3B3'
      }
    },
  },
  plugins: [],
}