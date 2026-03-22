import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#08111c',
          900: '#0a1628',
          850: '#0d1b2a',
          800: '#142236',
          700: '#1c314a',
          600: '#274162',
        },
        'emerald-accent': '#00c853',
        'teal-accent': '#00bfa5',
        'amber-accent': '#f1b544',
      },
      boxShadow: {
        'glow-emerald': '0 20px 60px rgba(0, 200, 83, 0.18)',
        'glow-soft': '0 20px 56px rgba(8, 17, 28, 0.34)',
      },
      fontFamily: {
        sans: ['var(--font-sora)', 'sans-serif'],
        display: ['var(--font-fraunces)', 'serif'],
      },
    },
  },
}

export default config
