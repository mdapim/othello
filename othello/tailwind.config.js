/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/tailwind-datepicker-react/dist/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        othello: '#f4f0e0',
      },
      height: (theme) => ({ 'screen/2': '75vh' }),
      width: (theme) => ({ screenfull: '1500px' }),
      borderWidth: (theme) => ({ small: '0.5px' }),
    },
  },
  plugins: [],
};
