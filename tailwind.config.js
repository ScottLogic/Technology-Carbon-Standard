/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './_drafts/**/*.html',
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './_glossary/*.md',
    './_resources/*.md',
    './pages/*.md',
    './pages/case_studies/gwf/*.md',
    './*.md',
    './*.html',
    './**/resources.md'
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
        'gunmetal': {
          'DEFAULT': '#1f363d',
          '50': '#f2f9f9',
          '100': '#ddf0f0',
          '200': '#bfe1e2',
          '300': '#92cace',
          '400': '#5eabb2',
          '500': '#428f98',
          '600': '#3a7580',
          '700': '#34616a',
          '800': '#315159',
          '900': '#2d464c',
          '950': '#1f363d', // default
        },
        'blue': {
          'DEFAULT': '#40798C',
          '50': '#f2f8f9',
          '100': '#ddecf0',
          '200': '#bfdae2',
          '300': '#93c0cd',
          '400': '#609eb0',
          '500': '#40798c', // default
          '600': '#3b6b7f',
          '700': '#355969',
          '800': '#324b58',
          '900': '#2d404c',
          '950': '#1a2832',
        },
        'cambridge': {
          'DEFAULT': '#9ec1a3',
          '50': '#f2f7f3',
          '100': '#dfecdf',
          '200': '#c1d9c3',
          '300': '#9ec1a3', // default
          '400': '#6b9c73',
          '500': '#4b7e56',
          '600': '#376441',
          '700': '#2c5035',
          '800': '#25402c',
          '900': '#1f3525',
          '950': '#111d14',
        },
        'green': {
          'DEFAULT': '#cfe0c3',
          '50': '#f7f9f4',
          '100': '#ebf2e6',
          '200': '#cfe0c3', //default
          '300': '#b6d0a5',
          '400': '#8eb276',
          '500': '#6d9453',
          '600': '#577940',
          '700': '#466035',
          '800': '#3a4d2e',
          '900': '#304027',
          '950': '#172211',
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
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

