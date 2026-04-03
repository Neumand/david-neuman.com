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
        brand: {
          DEFAULT: 'hsl(var(--brand))',
          foreground: 'hsl(var(--brand-foreground))',
        },
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
            color: theme('colors.zinc.800'),
            fontSize: '1.0625rem',
            lineHeight: '1.85',
            maxWidth: '68ch',
            th: {
              color: theme('colors.zinc.800'),
            },
            'h1, h2, h3, h4, h5, h6': {
              color: theme('colors.zinc.900'),
              fontWeight: '700',
              letterSpacing: '-0.02em',
            },
            a: {
              'text-decoration': 'underline',
              'text-decoration-color': theme('colors.amber.400'),
              'text-underline-offset': '3px',
              color: theme('colors.amber.700'),
              'background-color': 'transparent',
              'font-weight': '500',
              transition: 'color 0.15s ease',
            },
            'a:hover': {
              color: theme('colors.amber.600'),
            },
            code: {
              'background-color': theme('colors.zinc.100'),
              'border-radius': '4px',
              padding: '2px 5px',
              'font-weight': '500',
              'font-size': '0.875em',
              border: `1px solid ${theme('colors.zinc.200')}`,
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            pre: {
              'background-color': theme('colors.zinc.950'),
              border: `1px solid ${theme('colors.zinc.800')}`,
              'border-radius': '8px',
            },
            'pre code': {
              'background-color': 'transparent',
              border: 'none',
              padding: '0',
            },
            blockquote: {
              'border-left-color': theme('colors.amber.400'),
              color: theme('colors.zinc.600'),
              'font-style': 'normal',
            },
            'figure figcaption': {
              color: theme('colors.zinc.500'),
              'text-align': 'center',
              'font-size': '0.8125rem',
            },
            figcaption: {
              color: theme('colors.zinc.500'),
              'text-align': 'center',
              'font-size': '0.8125rem',
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.zinc.300'),
            'h1, h2, h3, h4, h5, h6': {
              color: theme('colors.zinc.100'),
            },
            th: {
              color: theme('colors.zinc.300'),
            },
            a: {
              color: theme('colors.amber.400'),
              'text-decoration-color': theme('colors.amber.600'),
              'background-color': 'transparent',
            },
            'a:hover': {
              color: theme('colors.amber.300'),
            },
            strong: {
              color: theme('colors.zinc.200'),
            },
            blockquote: {
              color: theme('colors.zinc.400'),
              'border-left-color': theme('colors.amber.500'),
            },
            code: {
              color: theme('colors.zinc.200'),
              'background-color': theme('colors.zinc.900'),
              border: `1px solid ${theme('colors.zinc.700')}`,
            },
            pre: {
              'background-color': '#0d1117',
              border: `1px solid ${theme('colors.zinc.800')}`,
            },
            'pre code': {
              'background-color': 'transparent',
              border: 'none',
              color: 'inherit',
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
