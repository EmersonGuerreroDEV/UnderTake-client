import type { Config } from 'tailwindcss';
const plugin = require('tailwindcss/plugin');

// Own utilities
const appUtilities = plugin(function ({
  addUtilities
}: {
  addUtilities: (utilities: Record<string, unknown>, variants: unknown) => void;
}) {
  const newUtilities = {
    '.capitalize-first:first-letter': {
      textTransform: 'uppercase'
    },
    '.link': {
      color: 'inherit',
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline'
      }
    },

    /* Hide scrollbar for Chrome, Safari, and Opera */
    '.no-scrollbar::-webkit-scrollbar': {
      display: 'none'
    },

    /* Hide scrollbar for IE, Edge, and Firefox */
    '.no-scrollbar': {
      '-ms-overflow-style': 'none' /* IE and Edge */,
      'scrollbar-width': 'none' /* Firefox */
    }
  };
  addUtilities(newUtilities, ['responsive', 'hover']);
});

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  prefix: '',
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
          DEFAULT: '#007BFF',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: '#FFC107',
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
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      },
      backgroundImage: {
        'custom-gradient':
          'linear-gradient(0deg, rgba(255, 255, 255, 0.66) 85%, rgba(255, 255, 250, 0) 100%)',
        'custom-white':
          ' background: linear-gradient(90deg, rgba(253, 253, 253, 1) 0%, rgba(249, 249, 249, 1) 29%, rgba(255, 255, 255, 0.1265) 100%)',
        orange: "url('/assets/images/back/orange.jpg')",
        banner1: "url('/assets/images/banners/product1.webp')",
        banner2: "url('/assets/images/banners/product2.webp')"
      },
      fontFamily: {
        poppins: ['var(--font-poppins)']
      }
    }
  },
  plugins: [require('tailwindcss-animate'), appUtilities]
} satisfies Config;

export default config;
