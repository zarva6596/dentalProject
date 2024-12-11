/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    fontFamily: {
      body: 'GeneralSans'
    },
    extend: {
      colors: {
        blue: {
          DEFAULT: '#1376f8',
          dark: '#011632',
          sky: '#25b4f8',
          light: '#e6f6fe'
        },
        white: '#fff',
        text: '#3c4959',
        success: '#17bf28',
        warnint: '#ec942c',
        error: '#e52323',
        gray: '#aeaeae'
      },
      fontSize: {
        'h1': [
          '3.875rem',
          {
            lineHeight: '1.2',
            letterSpacing: '-2%',
            fontWeight: '600',
          }
        ],
        'h2': [
          '2.5rem',
          {
            lineHeight: '1.25',
            letterSpacing: '0',
            fontWeight: '600',
          }
        ],
        'h3': [
          '2.25rem',
          {
            lineHeight: '1.25',
            letterSpacing: '0',
            fontWeight: '600',
          }
        ],
        'h4': [
          '2.25rem',
          {
            lineHeight: '1.2',
            letterSpacing: '0',
            fontWeight: '600',
          }
        ],

        b1: [
          '1.125rem',
          {
            lineHeight: '1.55',
            letterSpacing: '1.5%',
            fontWeight: '400',
          }
        ],

        b2: [
          '1rem',
          {
            lineHeight: '1.55',
            letterSpacing: '1.5%',
            fontWeight: '400',
          }
        ],


        b3: [
          '0.875rem',
          {
            lineHeight: '1.55',
            letterSpacing: '2%',
            fontWeight: '400',
          }
        ],

        b4: [
          '0.75rem',
          {
            lineHeight: '1.55',
            letterSpacing: '1.5%',
            fontWeight: '400',
          }
        ],
      },
      maxWidth: {
        max: '1440px',
        content: '1280px'
      },
      padding: {
        '4.5': '1.125rem'
      }
    },
  },
  plugins: [],
}

