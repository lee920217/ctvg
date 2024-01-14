import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: { max: '1280px', min: '1px'},
      lg: { min: '1280px'}
    },
    extend: {
      backgroundImage: {
        'service-svg': "url('/svg/service-bg.svg')"
      },
      colors: {
        brand: '#88DAB5',
        'brand-darker': '#47A782',
        bg: '#F8F9FD',
        navy: '#121C2D',
        'navy07': 'rgba(18, 28, 45, 0.7)',
        white: '#FFFFFF',
        'white07': 'rgba(255, 255, 255, 0.7)',
        'white03': 'rgba(255, 255, 255, 0.3)',
      },
      fontFamily: {
        'hd-en' : ['Montserrat'],
        'bd-en': ['Open Runde']
      },
      fontSize: {
          'header1-desktop': ['64px', { lineHeight: '120%', fontWeight: '700' }],
          'header1-mobile': ['40px', { lineHeight: '120%', fontWeight: '700' }],
          'header2-desktop': ['48px', { lineHeight: '120%', fontWeight: '700' }],
          'header2-mobile': ['32px', { lineHeight: '120%', fontWeight: '700' }],
          'header3-desktop': ['32px', { lineHeight: '120%', fontWeight: '700' }],
          'header3-mobile': ['28px', { lineHeight: '120%', fontWeight: '700' }],
          subheader: ['20px', { lineHeight: '160%', fontWeight: '400' }],
          'subheader-bold': ['20px', { lineHeight: '120%', fontWeight: '700' }],
          body: ['16px', { lineHeight: '160%', fontWeight: '400' }],
          'body-bold': ['16px', { lineHeight: '160%', fontWeight: '700' }],
          label: ['14px', { lineHeight: '160%', fontWeight: '400' }],
          'label-bold': ['14px', { lineHeight: '160%', fontWeight: '700' }],
          button: ['16px', { lineHeight: '120%', fontWeight: '500' }],
      },
    },
  },
  plugins: [],
}
export default config
