/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        surface: {
          900: '#0a0e17',
          800: '#111827',
          700: '#1e293b',
          600: '#334155',
        },
        accent: {
          DEFAULT: '#22d3ee',
          dim: '#0e7490',
        },
        terminal: {
          green: '#4ade80',
          cyan: '#22d3ee',
          yellow: '#facc15',
          red: '#f87171',
        },
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'Fira Code', 'Consolas', 'monospace'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
