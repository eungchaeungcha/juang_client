import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: { sm: '576px' },
    extend: {
      fontFamily: {
        nanum: ['var(--font-nanum)'],
      },
      colors: {
        orange: {
          primary: '#ffa047',
          secondray: '#ff7c3a',
        },
        green: {
          primary: '#82bc49',
        },
        gray: {
          light: '#efeef0',
          primary: '#b1aab4',
          dark: '#766d7d',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
