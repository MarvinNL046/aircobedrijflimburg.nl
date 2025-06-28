/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          500: '#F97316',
          600: '#EA580C',
          700: '#C2410C',
        },
        blue: {
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E3A8A',
          900: '#1E3A8A',
        },
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          300: '#D1D5DB',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
      },
      fontFamily: {
        'inter': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        '6xl': ['3.75rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
        '5xl': ['3rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
      },
      animation: {
        'typewriter': 'typewriter 3s steps(40) infinite',
        'blink': 'blink 1s infinite',
      },
      keyframes: {
        typewriter: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}