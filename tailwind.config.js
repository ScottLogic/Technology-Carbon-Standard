const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './_drafts/**/*.html',
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.md',
    './*.html',
  ],
  theme: {
    fontFamily: {
      'sans': ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Helvetica', 'Arial', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"']
    },
    extend:{
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        red: colors.red,
        'charcoal': {
          'DEFAULT': '#252525',
          '50': '#f6f6f6',
          '100': '#e7e7e7',
          '200': '#d1d1d1',
          '300': '#b0b0b0',
          '400': '#888888',
          '500': '#6d6d6d',
          '600': '#5d5d5d',
          '700': '#4f4f4f',
          '800': '#454545',
          '900': '#3d3d3d',
          '950': '#252525', // default
      },
        'blue': {
          'DEFAULT': '#2aa4bf',
          '50': '#effbfc',
          '100': '#d7f3f6',
          '200': '#b3e6ee',
          '300': '#7fd3e1',
          '400': '#43b6cd',
          '500': '#2aa4bf', // default
          '600': '#237c97',
          '700': '#23657b',
          '800': '#255465',
          '900': '#224657',
          '950': '#122e3a',
        },
        'green': {
          'DEFAULT': '#bff29b',
          '50': '#f1fde8',
          '100': '#e1f9ce',
          '200': '#bff29b', // default
          '300': '#9ee96d',
          '400': '#7bdb40',
          '500': '#5cc022',
          '600': '#449917',
          '700': '#357516',
          '800': '#2d5d17',
          '900': '#294f18',
          '950': '#122b08',
        },
        'yellow': {
          'DEFAULT': '#f2e963',
          '50': '#fdfde9',
          '100': '#f9fac7',
          '200': '#f6f492',
          '300': '#f2e963', // default
          '400': '#ebd624',
          '500': '#dbbe17',
          '600': '#bd9611',
          '700': '#976d11',
          '800': '#7d5716',
          '900': '#6b4718',
          '950': '#3e260a',
        },
        'neutral': {
          'DEFAULT': '#f2f0d8',
          '50': '#f9f8ed',
          '100': '#f2f0d8', // default
          '200': '#e2dba6',
          '300': '#d1c373',
          '400': '#c3ac4c',
          '500': '#b3983f',
          '600': '#9a7a34',
          '700': '#7c5c2c',
          '800': '#684b2b',
          '900': '#5a4029',
          '950': '#342214',
        },
        'orange': {
          'DEFAULT': '#f28749',
          '50': '#fef6ee',
          '100': '#fdead7',
          '200': '#fad1ae',
          '300': '#f6b07b',
          '400': '#f28749', // default
          '500': '#ee6421',
          '600': '#df4a17',
          '700': '#b93715',
          '800': '#932d19',
          '900': '#772817',
          '950': '#40110a',
        },
        'purple': {
          'DEFAULT': '#bf2a64',
          '50': '#fcf3f8',
          '100': '#fae9f3',
          '200': '#f7d3e6',
          '300': '#f2afd1',
          '400': '#e97db2',
          '500': '#de5695',
          '600': '#cb3775',
          '700': '#bf2a64', // default
          '800': '#91234c',
          '900': '#7a2143',
          '950': '#4a0d23',
        },
      },
    },
  },
  plugins: []
}