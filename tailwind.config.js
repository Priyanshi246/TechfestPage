/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#e7ecff',
          dim: '#9aa4c7',
          faint: '#5b6488',
        },
        neon: {
          blue: '#4cc9ff',
          purple: '#b388ff',
          cyan: '#5eead4',
          pink: '#ff79c6',
        },
        space: {
          900: '#05060f',
          800: '#0a0b1e',
          700: '#11132e',
          600: '#1a1d44',
        },
      },
      fontFamily: {
        display: ['Syncopate', 'Space Grotesk', 'sans-serif'],
        sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'spin-slow': 'spin-slow 24s linear infinite',
        'spin-rev': 'spin-reverse 18s linear infinite',
        'float-y': 'float-y 6s ease-in-out infinite',
        'float-soft': 'float-soft 7s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'twinkle': 'twinkle 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
