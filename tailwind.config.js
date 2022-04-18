const { fontFamily } = require('tailwindcss/defaultTheme');
const themeColors = require('./theme');

module.exports = {
  content: ['./pages/**/*.js', './components/**/*.js', './layouts/**/*.js'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Inter', ...fontFamily.sans],
      mono: ['"Fira Code"', ...fontFamily.mono],
    },
    extend: {
      fontFamily: {
        header: "'Open Sans', sans-serif",
      },
      colors: themeColors,
      boxShadow: {
        blue: '0px 9px 30px 0px rgba(227, 242, 253, 0.7)',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.900'),
            a: {
              'text-decoration': 'none',
              color: theme('colors.blue.800'),
              'background-color': 'rgba(227, 242, 253, 0.3)',
            },
            code: {
              'background-color': theme('colors.gray.100'),
              'border-radius': '3px',
              padding: '3px',
              'font-weight': 600,
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            'figure figcaption': {
              color: theme('colors.gray.700'),
              'text-align': 'center',
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.200'),
            a: {
              color: theme('colors.blue.500'),
              'background-color': theme('colors.cool-gray.900'),
            },
            'h1,h2,h3,h4': {
              color: theme('colors.gray.200'),
            },
            strong: {
              color: theme('colors.gray.200'),
            },
            blockquote: {
              color: theme('colors.gray.200'),
            },
            code: {
              color: theme('colors.gray.200'),
              'background-color': theme('colors.cool-gray.700'),
            },
            pre: {
              code: {
                'background-color': 'inherit',
                color: 'inherit',
              },
            },
          },
        },
      }),
    },
  },
  variants: {
    typography: ['dark'],
  },
  plugins: [require('@tailwindcss/typography')],
};
