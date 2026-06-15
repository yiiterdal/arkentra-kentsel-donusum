/** tailwind.config.mjs */
export default {
  content: ['./app/**/*.{ts,tsx,js,jsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        forest: {
          shadow: '#0a0d08',
          base: '#1a1c14',
          deep: '#2d3621',
          bark: '#3e3226',
          moss: '#4a5438',
          sage: '#7a8c5f',
          leaf: '#6b9b4a',
          mist: '#c8d4b8',
        },
        navy: {
          DEFAULT: '#166534',
          dark: '#14532d',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
      },
      maxWidth: {
        editorial: '1280px',
      },
    },
  },
  plugins: [],
};
