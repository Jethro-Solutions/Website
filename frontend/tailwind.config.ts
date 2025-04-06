import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Primary colors: Deep blues transitioning to vibrant orange/red gradients
        primary: {
          blue: {
            DEFAULT: '#0F2D5F',
            light: '#1A4DA6',
            dark: '#091C3E',
            50: '#E6EBF4',
            100: '#C1CFDF',
            200: '#93A7C5',
            300: '#617EAA',
            400: '#395F96',
            500: '#0F2D5F',
            600: '#0C2551',
            700: '#091E43',
            800: '#071836',
            900: '#051228',
          },
          orange: {
            DEFAULT: '#F15A24',
            light: '#FF7D4C',
            dark: '#D44111',
            50: '#FFF0EB',
            100: '#FFDACB',
            200: '#FFC0A3',
            300: '#FF9F72',
            400: '#FF7F3E',
            500: '#F15A24',
            600: '#D44D1B',
            700: '#B14013',
            800: '#92340D',
            900: '#722707',
          },
          red: {
            DEFAULT: '#D02A2A',
            light: '#F45151',
            dark: '#B01B1B',
            50: '#FBEAEA',
            100: '#F6C9C9',
            200: '#F0A7A7',
            300: '#EB8383',
            400: '#E36464',
            500: '#D02A2A',
            600: '#B82424',
            700: '#9F1F1F',
            800: '#871919',
            900: '#6E1414',
          },
        },
        // Secondary colors: Teals and greens as accent colors
        secondary: {
          teal: {
            DEFAULT: '#1AB0B0',
            light: '#34D0D0',
            dark: '#128888',
            50: '#E9F7F7',
            100: '#C7ECEC',
            200: '#9FE0E0',
            300: '#69D1D1',
            400: '#2EC2C2',
            500: '#1AB0B0',
            600: '#179393',
            700: '#147676',
            800: '#105A5A',
            900: '#0D3E3E',
          },
          green: {
            DEFAULT: '#27A844',
            light: '#3ECB60',
            dark: '#1D7F32',
            50: '#E9F7EC',
            100: '#C7ECCE',
            200: '#9FDEAB',
            300: '#69CE82',
            400: '#3ABE5E',
            500: '#27A844',
            600: '#219035',
            700: '#1B7829',
            800: '#15601F',
            900: '#104815',
          },
        },
        // Background and text colors
        background: {
          DEFAULT: '#000000',
          light: '#121212',
          lighter: '#202020',
          50: '#F2F2F2',
          100: '#E0E0E0',
          200: '#C0C0C0',
          300: '#A0A0A0',
          400: '#808080',
          500: '#606060',
          600: '#404040',
          700: '#303030',
          800: '#202020',
          900: '#121212',
        },
        text: {
          DEFAULT: '#FFFFFF',
          muted: '#CCCCCC',
          subtle: '#999999',
          50: '#FFFFFF',
          100: '#FAFAFA',
          200: '#F5F5F5',
          300: '#E5E5E5',
          400: '#D4D4D4',
          500: '#CCCCCC',
          600: '#A3A3A3',
          700: '#737373',
          800: '#525252',
          900: '#404040',
        },
      },
      fontFamily: {
        // Serif font for headlines, page titles, and important statements
        serif: ['Playfair Display', 'Georgia', 'serif'],
        // Monospaced font for code snippets and technical content
        mono: ['IBM Plex Mono', 'Consolas', 'monospace'],
        // Sans-serif font for body text, navigation, and UI components
        sans: ['Inter', 'Arial', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'var(--tw-prose-body)',
            '[class~="lead"]': {
              color: 'var(--tw-prose-lead)',
            },
            h1: {
              fontFamily: 'var(--tw-prose-headings-font-family)',
              fontWeight: '700',
              fontSize: '2.25em',
              marginTop: '0',
              marginBottom: '0.8888889em',
              lineHeight: '1.1111111',
            },
            h2: {
              fontFamily: 'var(--tw-prose-headings-font-family)',
              fontWeight: '700',
              fontSize: '1.5em',
              marginTop: '2em',
              marginBottom: '1em',
              lineHeight: '1.3333333',
            },
            code: {
              fontFamily: 'var(--tw-prose-code-font-family)',
            },
            pre: {
              fontFamily: 'var(--tw-prose-pre-font-family)',
            },
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        // Brand gradients
        'gradient-primary': 'linear-gradient(135deg, var(--color-primary-blue) 0%, var(--color-primary-orange) 50%, var(--color-primary-red) 100%)',
        'gradient-primary-horizontal': 'linear-gradient(90deg, var(--color-primary-blue) 0%, var(--color-primary-orange) 50%, var(--color-primary-red) 100%)',
        'gradient-primary-vertical': 'linear-gradient(180deg, var(--color-primary-blue) 0%, var(--color-primary-orange) 50%, var(--color-primary-red) 100%)',
        'gradient-secondary': 'linear-gradient(135deg, var(--color-secondary-teal) 0%, var(--color-secondary-green) 100%)',
        'gradient-blue-orange': 'linear-gradient(135deg, var(--color-primary-blue) 0%, var(--color-primary-orange) 100%)',
        'gradient-orange-red': 'linear-gradient(135deg, var(--color-primary-orange) 0%, var(--color-primary-red) 100%)',
        'gradient-blue-teal': 'linear-gradient(135deg, var(--color-primary-blue) 0%, var(--color-secondary-teal) 100%)',
        'gradient-radial-primary': 'radial-gradient(circle at center, var(--color-primary-blue) 0%, var(--color-primary-orange) 60%, var(--color-primary-red) 100%)',
        'gradient-conic-primary': 'conic-gradient(from 0deg at center, var(--color-primary-blue) 0%, var(--color-primary-orange) 50%, var(--color-primary-red) 100%)',
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        'gradient-y': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'top center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'bottom center',
          },
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left top',
          },
          '25%': {
            'background-size': '400% 400%',
            'background-position': 'right top',
          },
          '50%': {
            'background-size': '400% 400%',
            'background-position': 'right bottom',
          },
          '75%': {
            'background-size': '400% 400%',
            'background-position': 'left bottom',
          },
        },
      },
    },
  },
  plugins: [
    plugin(function({ addBase }) {
      addBase({
        ':root': {
          // Primary colors
          '--color-primary-blue': '#0F2D5F',
          '--color-primary-blue-light': '#1A4DA6',
          '--color-primary-blue-dark': '#091C3E',
          '--color-primary-orange': '#F15A24',
          '--color-primary-orange-light': '#FF7D4C',
          '--color-primary-orange-dark': '#D44111',
          '--color-primary-red': '#D02A2A',
          '--color-primary-red-light': '#F45151',
          '--color-primary-red-dark': '#B01B1B',
          
          // Secondary colors
          '--color-secondary-teal': '#1AB0B0',
          '--color-secondary-teal-light': '#34D0D0',
          '--color-secondary-teal-dark': '#128888',
          '--color-secondary-green': '#27A844',
          '--color-secondary-green-light': '#3ECB60',
          '--color-secondary-green-dark': '#1D7F32',
          
          // Background colors
          '--color-background': '#000000',
          '--color-background-light': '#121212',
          '--color-background-lighter': '#202020',
          
          // Text colors
          '--color-text': '#FFFFFF',
          '--color-text-muted': '#CCCCCC',
          '--color-text-subtle': '#999999',
        },
        '.dark': {
          // In dark mode, we use the same color scheme as it's already dark-optimized
          '--color-background': '#000000',
          '--color-background-light': '#121212',
          '--color-background-lighter': '#202020',
          '--color-text': '#FFFFFF',
          '--color-text-muted': '#CCCCCC',
          '--color-text-subtle': '#999999',
        },
        '.light': {
          // Light mode inverts the background/text colors
          '--color-background': '#FFFFFF',
          '--color-background-light': '#F5F5F5',
          '--color-background-lighter': '#E5E5E5',
          '--color-text': '#000000',
          '--color-text-muted': '#333333',
          '--color-text-subtle': '#666666',
        },
      });
    }),
  ],
};

export default config; 