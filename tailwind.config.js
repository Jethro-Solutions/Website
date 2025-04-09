/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'text-primary-accent',
    'bg-primary-accent',
    'border-primary-accent',
    'text-secondary-accent',
    'bg-secondary-accent',
    'border-secondary-accent',
  ],
  theme: {
    extend: {
      colors: {
        'soft-black': '#353839',
        'soft-white': '#f1d2b6', 
        'soft-tan': '#E8E0D5',
        'soft-orange': '#F5A47C',
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: "var(--primary-foreground)",
          accent: '#4f7a92',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: "var(--secondary-foreground)",
          accent: '#db4f24',
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
      },
      fontFamily: {
        serif: ['var(--font-season-serif)'],
        sans: ['var(--font-ibm-plex-mono)'],
        mono: ['var(--font-ibm-plex-mono)'],
      },
      textColor: {
        'primary-accent': '#4f7a92',
        'secondary-accent': '#db4f24',
      },
      backgroundColor: {
        'primary-accent': '#4f7a92',
        'secondary-accent': '#db4f24',
      },
      borderColor: {
        DEFAULT: 'var(--border)',
        'primary-accent': '#4f7a92',
        'secondary-accent': '#db4f24',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
} 