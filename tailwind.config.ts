import daisyui from 'daisyui';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}', // Include components directory
    './pages/**/*.{js,ts,jsx,tsx,mdx}',       // Include pages directory if you have one
  ],
  plugins: [daisyui],
  daisyui: {
    themes: ["nord"],
    darkTheme: 'dark',
    base: true,
    styled: true,
    utils: true,
    prefix: '',
    logs: true,
    themeRoot: ':root',
  },
};

export default config;
