import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        royal: '#0d3b92',
        gold: '#f5c15a'
      },
      boxShadow: {
        luxe: '0 20px 45px rgba(9, 43, 112, 0.18)'
      }
    }
  },
  plugins: []
};

export default config;
