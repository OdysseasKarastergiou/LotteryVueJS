module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js'
  ],
  enabled: process.env.NODE_ENV === 'production',
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {},
   },
   variants: {},
   plugins: [],
 }