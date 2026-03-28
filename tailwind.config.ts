import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Keep navy for backward compat with non-home pages
        navy: {
          950: '#08111c',
          900: '#0a1628',
          850: '#0d1b2a',
          800: '#142236',
          700: '#1c314a',
          600: '#274162',
        },
        // Warm peach/cream palette for light theme
        warm: {
          50:  '#fff9f6',
          100: '#fef2ec',
          200: '#fde4d5',
          300: '#facfb7',
          400: '#f5b090',
          500: '#ed8a64',
          600: '#d96a40',
          700: '#b85030',
          800: '#8f3b22',
          900: '#6a2a17',
          950: '#3d1208',
        },
        // Accent coral (the primary CTA/brand color)
        coral: {
          50:  '#fff4ef',
          100: '#ffe6d8',
          200: '#fcc9b0',
          300: '#f9a880',
          400: '#f4845f',  // ← primary
          500: '#e86038',
          600: '#c8451f',
          700: '#a33318',
          800: '#7d2510',
          900: '#56180a',
        },
        // Aliases (used throughout site)
        'emerald-accent': '#f4845f',
        'teal-accent':    '#f9a87a',
        'amber-accent':   '#f5c17a',
      },
      boxShadow: {
        'glow-emerald': '0 16px 48px rgba(244, 132, 95, 0.28)',
        'glow-soft':    '0 20px 56px rgba(180, 80, 40, 0.1)',
        'card-warm':    '0 8px 32px rgba(180, 80, 40, 0.08), 0 2px 8px rgba(180, 80, 40, 0.05)',
      },
      fontFamily: {
        sans:    ['var(--font-nunito)', 'sans-serif'],
        display: ['var(--font-fraunces)', 'serif'],
        mono:    ['var(--font-geist-mono)', 'monospace'],
      },
    },
  },
}

export default config
