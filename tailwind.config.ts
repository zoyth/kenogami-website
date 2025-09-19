import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          'ghost': '#f3f7fe',
          'powder': '#d3e3fd',
          'blue': '#1a74e8',
          'coral': '#ff6d80',
          'charcoal': '#2d3748',
        },
        primary: {
          50: '#f3f7fe',  // Ghost White
          100: '#d3e3fd', // Powder Blue
          200: '#a8c7fc',
          300: '#7dabfa',
          400: '#528ff9',
          500: '#1a74e8', // Bright Blue
          600: '#1560c9',
          700: '#114ca3',
          800: '#0d387c',
          900: '#092456',
        },
        secondary: {
          50: '#fff0f2',
          100: '#ffe1e5',
          200: '#ffc3cc',
          300: '#ff94a3',
          400: '#ff6d80', // Coral Pink
          500: '#ff4560',
          600: '#e63950',
          700: '#cc2d40',
          800: '#b32130',
          900: '#991520',
        },
      },
      fontFamily: {
        sans: ['Noto Sans JP', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config