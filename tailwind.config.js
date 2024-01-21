/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        boxShadow: {
          'cxl': ' 0px 7px 50px 0px rgba(0, 0, 0, 0.06)',
        }
      },
    },
    plugins: [],
  }