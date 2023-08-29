/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  theme: {
    screens: {
      xs: '460px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        primaryGray: '#f7f7f7',
        gray01: '#888888',
        gray02: '#f2f4f7',
        gray03: '#cccccc',
      }
    },
  },
  plugins: [require("daisyui")],
}

