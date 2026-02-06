import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: colors.neutral,
        primary: '#ff8800',
        'primary-dark': '#e67a00',
        'primary-light': '#ff9933',
      },
    },
  },
  plugins: [],
};

export default config;
