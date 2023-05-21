module.exports = {
  content: ["./dist/*.html"],
  theme: {
    screens: {
      'mobile': '360px',
      // => @media (min-width: 360px) { ... }

      'desktop': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      colors:{
        'green-primary': '#417F56',
        'green-tint-1': '#E5F2E9',
      },
      fontFamily:{
        'Estedad-VF': 'Estedad-VF'
      },
    },
  },
  plugins: [],
}