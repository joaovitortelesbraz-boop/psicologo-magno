/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        /* Texto — preto suave / cinzas quentes */
        ink: {
          DEFAULT: '#2A2926',
          900: '#1E1D1B',
          700: '#3C3A35',
          500: '#6C6860',
          400: '#8C877E',
          300: '#A9A49A',
        },
        /* Fundos brancos quentes / creme / bege */
        cream: {
          50: '#FDFBF8',
          100: '#FAF6F1',
          200: '#F6F1E9',
          300: '#F1E9DF',
        },
        sand: '#EFE6DA',
        blush: '#F2EAE1',
        /* Verde oliva */
        olive: {
          DEFAULT: '#4A4C36',
          600: '#565941',
          700: '#43452F',
          900: '#3B3D2C',
          950: '#343627',
        },
        /* Linhas / bordas finas */
        line: {
          DEFAULT: '#E4DDD2',
          soft: '#EFE9E0',
          strong: '#D6CCBD',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'Times New Roman', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      letterSpacing: {
        label: '0.22em',
        wider2: '0.14em',
      },
      maxWidth: {
        shell: '1440px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(58, 52, 44, 0.03), 0 8px 24px -18px rgba(58, 52, 44, 0.22)',
        'card-hover': '0 2px 4px rgba(58, 52, 44, 0.04), 0 18px 38px -22px rgba(58, 52, 44, 0.3)',
        pill: '0 10px 24px -16px rgba(58, 60, 44, 0.65)',
      },
      transitionTimingFunction: {
        soft: 'cubic-bezier(0.22, 0.61, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
