/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        '31%': '31%',
        '38%': '38%',
        '82%': '82%',
        '29%': '29%',
        '91%': '91%'
      },
      colors: {
        overlay: 'rgba(0,0,0,0.5)'
      },
      maxWidth: {
        '1/2': '75%'
      },
      width: {
        100: '34rem'
      }
    },
    plugins: []
  }
}
