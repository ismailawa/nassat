const { join } = require('path');
const { createGlobPatternsForDependencies } = require('@nrwl/next/tailwind');

module.exports = {
  mode: 'jit',
  content: [
    join(__dirname, 'pages/**/*.{js,ts,jsx,tsx}'),
    join(__dirname, 'components/**/*.{js,ts,jsx,tsx}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  presets: [require('../../tailwind-workspace-preset.js')],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Barlow', 'sans-serif'],
      },
      colors: {
        gray: {
          100: '#E0E6E9',
          500: '#ABBBC2',
          700: '#393C49',
          800: '#1F1028',
          900: '#252836',
        },
        primary: '#EB966A',
      },

      boxShadow: {
        primary: '0px 8px 24px rgba(234,124,185,0.34)',
        inverset: '4px 4px 0 #252836',
        inverseb: '4px -4px 0 #252836',
      },
    },
  },
  plugins: [],
};
