import tailwindcssTypography from '@tailwindcss/typography';
import svgToDataUri from 'mini-svg-data-uri';
import tailwindcssAnimate from 'tailwindcss-animate';
import { fontFamily } from 'tailwindcss/defaultTheme';
import { default as flattenColorPalette } from 'tailwindcss/lib/util/flattenColorPalette';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./src/**/*.{astro,css,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  prefix: '',
  theme: {
    fontFamily: {
      sans: ['Inter', ...fontFamily.sans],
      mono: ['"Dank Mono"', ...fontFamily.mono],
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
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
              'background-color': theme('colors.zinc.100'),
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
            color: theme('colors.zinc.300'),
            th: {
              color: theme('colors.zinc.300'),
            },
            a: {
              color: theme('colors.blue.500'),
              'background-color': theme('colors.zinc.800'),
            },
            'h1,h2,h3,h4': {
              color: theme('colors.zinc.200'),
            },
            strong: {
              color: theme('colors.zinc.200'),
            },
            blockquote: {
              color: theme('colors.zinc.200'),
            },
            code: {
              color: theme('colors.zinc.200'),
              'background-color': '#0d1117',
            },
            pre: {
              code: {
                'background-color': 'inherit',
                color: 'inherit',
              },
            },
            'figure figcaption': {
              color: theme('colors.zinc.500'),
            },
            figcaption: {
              color: theme('colors.zinc.500'),
            },
          },
        },
      }),
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  variants: {
    typography: ['dark'],
  },
  plugins: [
    tailwindcssAnimate,
    tailwindcssTypography,
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'bg-grid': (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`,
            )}")`,
          }),
          'bg-grid-small': (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`,
            )}")`,
          }),
          'bg-dot': (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`,
            )}")`,
          }),
        },
        {
          values: flattenColorPalette(theme('backgroundColor')),
          type: 'color',
        },
      );
    },
  ],
};
