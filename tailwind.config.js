/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1280px',
    },
    fontFamily: {
      'Roboto': ['Roboto'],
    }, 
    extend: {
      colors: {
        blue: '#362FD9',
        yellow: '#EE9322',
        whitesmoke: '#F5F5F5',
      },
    },
  },
  plugins: [],
}

