/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  lightMode: 'class',
  theme: {
    extend: {
      colors: {
        'shark': {
          '50': '#f6f6f6',
          '100': '#e7e7e7',
          '200': '#d1d1d1',
          '300': '#b0b0b0',
          '400': '#888888',
          '500': '#6d6d6d',
          '600': '#5d5d5d',
          '700': '#4f4f4f',
          '800': '#454545',
          '900': '#3d3d3d',
          '950': '#1f1f1f',
      },
      },

      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1024px",
        lg: "1280px",
        xl: "1536px",
      },
    },

    fontFamily: {
      'vt': ['VT323', 'monospace'],
      'karma': ['KarmaSuture'],
      'receipt': ['FakeReceipt'],
      'barcode': ['LibreBarcode128']
    },
  },
  plugins: [],
}

