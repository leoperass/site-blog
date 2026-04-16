import type { Config } from 'tailwindcss';

export default  {
  content: [
    './src/pages/**/*.{js,jsx,tsx,mdx}',
    './src/components/**/*.{js,jsx,tsx,mdx}',
    './src/app/**/*.{js,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
      }
    },
  },
  plugins: [],
} satisfies Config

