const themeColors = require('./theme');
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Inter', ...fontFamily.sans],
      mono: ['"Dank Mono"', ...fontFamily.mono],
    },
    extend: {
      backgroundImage: (theme) => ({
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-linear': 'linear-gradient(180deg, var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
      }),
      backgroundColor: {
        'black-transparent': 'rgba(0, 0, 0, 0.5)',
      },
      fontSize: {
        xxs: [
          '0.5rem',
          {
            lineHeight: '0.75rem',
          },
        ],
      },
      colors: themeColors,
      boxShadow: {
        blue: '0px 9px 30px 0px rgba(227, 242, 253, 0.7)',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.900'),
            th: {
              color: theme('colors.gray.900'),
            },
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
            figcaption: {
              color: theme('colors.gray.700'),
              'text-align': 'center',
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.200'),
            th: {
              color: theme('colors.gray.200'),
            },
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
              'background-color': '#0d1117',
            },
            pre: {
              code: {
                'background-color': 'inherit',
                color: 'inherit',
              },
            },
            'figure figcaption': {
              color: theme('colors.gray.500'),
            },
            figcaption: {
              color: theme('colors.gray.500'),
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
