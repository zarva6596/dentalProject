/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    fontFamily: {
      body: 'GeneralSans'
    },
    extend: {
      spacing: {
        '17.5': '4.375rem',
        '25': '6.25rem',
        '30': '7.5rem'
      },
      borderRadius: {
        '2lg': '10px',
      },
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
        gray: {
          DEFAULT: '#aeaeae',
          50: '#cfcfcf',
          100: '#cecece'
        }
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
          '2.625rem',
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
          '1.5rem',
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
      width: {
        '12.5': '3.125rem',
        '94': '23.5rem'
      },
      padding: {
        '4.5': '1.125rem',
        '25': '6.25rem',
        '30': '7.5rem'
      },
      boxShadow: {
        userMessageCard: '0 8px 40px 0 rgba(0, 0, 0, 10%)',
        firstScreenCircle: '0 4px 4px 0 rgba(0, 0, 0, 10%)'
      },
      animation: {
        'spin-slow': 'spin 100s linear infinite',
        'spin-slow-reverse': 'spin-reverse 100s linear infinite',
      },
      keyframes: {
        'spin-reverse': {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        }
      },
      aspectRatio: {
        '3/1.2': '3 / 1.2'
      }
    },
  },
  plugins: [],
}

