import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
    	container: {
    		center: true,
    		padding: '2rem',
    		screens: {
    			'2xl': '1400px'
    		}
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
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			jethro: {
    				cream: '#F5F2EA',
    				black: '#2A2A2A',
    				blue: '#1A4B84',
    				gray: '#D0D0D0',
    				sage: '#B8C5B9',
    				gold: '#D4B483',
    				terracotta: '#C87F65'
    			}
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		keyframes: {
    			'accordion-down': {
    				from: {
    					height: '0'
    				},
    				to: {
    					height: 'var(--radix-accordion-content-height)'
    				}
    			},
    			'accordion-up': {
    				from: {
    					height: 'var(--radix-accordion-content-height)'
    				},
    				to: {
    					height: '0'
    				}
    			},
    			'fade-in': {
    				'0%': {
    					opacity: '0',
    					transform: 'translateY(10px)'
    				},
    				'100%': {
    					opacity: '1',
    					transform: 'translateY(0)'
    				}
    			},
    			spotlight: {
    				'0%': {
    					opacity: '0',
    					transform: 'translate(-50%, -50%) scale(0.7)'
    				},
    				'50%': {
    					opacity: '0.8',
    					transform: 'translate(-50%, -50%) scale(1.1)'
    				},
    				'100%': {
    					opacity: '0.9',
    					transform: 'translate(-50%, -50%) scale(1)'
    				}
    			},
    			'spotlight-sweep': {
    				'0%': {
    					transform: 'translate(-60%, -50%) scale(1)'
    				},
    				'25%': {
    					transform: 'translate(-40%, -50%) scale(1)'
    				},
    				'50%': {
    					transform: 'translate(-20%, -50%) scale(1)'
    				},
    				'75%': {
    					transform: 'translate(-40%, -50%) scale(1)'
    				},
    				'100%': {
    					transform: 'translate(-60%, -50%) scale(1)'
    				}
    			},
    			marquee: {
    				'0%': {
    					transform: 'translateX(0)'
    				},
    				'100%': {
    					transform: 'translateX(calc(-100% - var(--gap)))'
    				}
    			},
    			'skew-scroll': {
    				'0%': {
    					transform: 'skewY(10deg) translateY(0%)'
    				},
    				'100%': {
    					transform: 'skewY(10deg) translateY(-50%)'
    				}
    			}
    		},
    		animation: {
    			'accordion-down': 'accordion-down 0.2s ease-out',
    			'accordion-up': 'accordion-up 0.2s ease-out',
    			'fade-in': 'fade-in 0.4s ease-out',
    			spotlight: 'spotlight 2.5s cubic-bezier(0.25, 0.1, 0.25, 1) forwards',
    			'spotlight-sweep': 'spotlight 1.5s cubic-bezier(0.25, 0.1, 0.25, 1) forwards, spotlight-sweep 8s ease-in-out infinite',
    			'spotlight-sweep-delayed': 'spotlight 1.5s cubic-bezier(0.25, 0.1, 0.25, 1) forwards, spotlight-sweep 8s ease-in-out infinite 4s',
    			marquee: 'marquee var(--duration) linear infinite',
    			'skew-scroll': 'skew-scroll 25s linear infinite'
    		},
    		fontFamily: {
    			playfair: [
    				'Playfair Display',
    				'serif'
    			],
    			sans: [
    				'Inter',
    				'sans-serif'
    			]
    		},
    		backgroundImage: {
    			'grid-pattern': "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(15 23 42 / 0.04)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")",
    			'grid-pattern-light': "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.04)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")"
    		}
    	}
    },
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
