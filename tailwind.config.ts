import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'radial-gradient':
          'radial-gradient(circle, rgba(46,16,101,1) 0%, rgba(61,22,125,1) 80%, rgba(76,29,149,1) 100%)',
        'radial-gradient-text':
          'linear-gradient(45deg, rgba(159,112,266,1) 0%, rgba(139,92,246,1) 50%, rgba(104,48,227,1) 100%)',
      },
    },
  },
  plugins: [],
}
export default config
