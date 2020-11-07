module.exports = {
  future: {
    removeDeprecatedGapUtilities: false,
  },
  purge: ['./src/**/*.js', './src/*.js', './src/**/*.ts', './src/*.tsx'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: { min: '1400px' },
      '2xxl': { min: '1601px' },
      'xxl-only': { min: '1400px', max: '1600px' },
      large: { min: '2100px' },
    },
    boxShadow: {
      header: '0 2px 4px rgba(0,0,0,0.12)',
      counter: '0 2px 4px rgba(0,32,25,0.06)',
      stats: '0 3px 6px rgba(0,0,0,0.12)',
      footer: '3px 0 6px rgba(0,0,0,0.12)',
      'product-item': '0 3px 6px rgba(0,0,0,0.14)',
      float: '0 0 6px rgba(0,0,0,0.12)',
      floatingUp: '0 5px 10px rgba(0,0,0,0.16)',
      upside: '0 9px 7px -8px rgba(0,0,0,0.6)',
      mobile: '0 0px 2px rgba(0,0,0,0.12)',
      navigation: '0 3px 6px rgba(0, 0, 0, 0.16)',
      floatBig: '0 0 10px rgba(0,0,0,0.16)',
      imgFloat: '0 10px 10px rgba(0,0,0,0.16)',
    },
    fontFamily: {
      open: ['Open Sans'],
    },
    fontSize: {
      '11px': '11px',
      '12px': '12px',
      '13px': '13px',
      '14px': '14px',
      '16px': '16px',
      '18px': '18px',
      '21px': '21px',
      '24px': '24px',
      '30px': '30px',
      '36px': '36px',
    },

    // Extend
    extend: {
      // screens: {
      //   'xxl': { raw: '1400px' },
      //   'xxxl': { raw: '1600px' },
      // },
      colors: {
        green: '#209F85',
        'green-hover': '#1E957C',
        'green-light': 'rgba(32,159,133, 0.3)',
        'gray-f7': '#f7f7f7',
        'gray-3a': '#3a3a3a',
        'light-yellow': '#feeec8',
        'light-blue': '#ceeffe',
        'light-green': '#d4f8c4',
        'light-purple': '#d8dafe',
        error: '#ff5b60',
        overlay: 'rgba(0,0,0,0.7)',
        dark: '#212121',

        gray: {
          100: '#f9f9f9',
          200: '#f3f3f3', // Light BG
          300: '#e6e6e6', // Border
          400: '#D5D5D5', // Border Alt
          500: '#999999', // Light Text
          600: '#757575',
          700: '#5A5A5A', // Normal Text
          800: '#424242',
          900: '#212121', // Heavy Text
        },
      },
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
      },
      width: {
        'main-content': 'calc(100% - 360px)',
        sidebar: '360px',
      },
      maxWidth: {
        half: '50%',
      },
      maxHeight: {
        '650px': '650px',
      },
      minHeight: {
        '480px': '480px',
      },
      height: {
        drawer: 'calc(100vh - 90px)',
      },
      gridColumnStart: {
        '40px': '40px',
      },
      spacing: {
        9: '2.25rem',
        11: '2.75rem',
        14: '3.5rem',
        '3px': '3px',
        '5px': '5px',
        '10px': '10px',
        '15px': '15px',
        '-15px': '-15px',
        '18px': '18px',
        '20px': '20px',
        '-20px': '-20px',
        '25px': '25px',
        '30px': '30px',
        '35px': '35px',
        '45px': '45px',
        '40px': '40px',
        '50px': '50px',
        '55px': '55px',
        '60px': '60px',
        '70px': '70px',
        '80px': '80px',
        '90px': '90px',
        '95px': '95px',
        '100px': '100px',
        '105px': '105px',
        '110px': '110px',
        '120px': '120px',
        '140px': '140px',
        '160px': '160px',
        '320px': '320px',
        '360px': '360px',
        '400px': '400px',
        '480px': '480px',
        '500px': '500px',
        '650px': '650px',
        '690px': '690px',
        '1440px': '1440px',
      },
      inset: {
        8: '2rem',
        9: '2.25rem',
        14: '3.5rem',
        half: '50%',
        '10px': '10px',
        '15px': '15px',
        '20px': '20px',
        '25px': '25px',
        '30px': '30px',
        '40px': '40px',
        '60px': '60px',
        '62px': '62px',
        '90px': '90px',
      },
      borderRadius: {
        default: '6px',
        '10px': '10px',
        '20px': '20px',
        '30px': '30px',
      },
      borderWidth: {
        '3px': '3px',
      },
      borderColor: (theme) => ({
        ...theme('colors'),
        default: theme('colors.gray.200', 'currentColor'),
      }),
      transitionDuration: {
        250: '250ms',
        350: '350ms',
      },
    },
    container: {},
  },

  // Variants
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    borderWidth: ['responsive', 'last', 'hover', 'focus'],
    padding: ['responsive, odd, even'],
  },
};
