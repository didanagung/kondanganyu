module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // 'coba1': "url('../src/img/1bg.png')",
        // 'coba2': "url('../src/img/1bgf.png')",
        // 'coba3': "url('../src/img/2bg.png')",
        'coba4': "url('../src/img/5.jpg')",
        // 'coba5': "url('../src/img/6.png')",
      }
    },
    fontFamily: {
      'peg': ['Square Peg', 'cursive'],
      'tape': ['Tapestry', 'cursive'],
      'water': ['Water Brush', 'cursive']
    },
  },
  plugins: [],
}
