/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: '12px'
    },
    extend: {
      colors: {
        apple: {
          light: '#FBF2F2',
          DEFAULT: '#AA0601',
          dark: '#650300'
        },
        light: '#707070',
        dark: '#555555'
      },
      maxWidth: {
        'screen-md': '720px',
        'screen-2xl': '1320px'
      },
      fontSize: {
        'sm': ['14px', '1.5'],
        'md': ['18px', '1.5'],
        'lg': ['20px', '1.5'],
        'xl': ['24px', '1.5'],
        '2xl': ['36px', '1.5'],
        '3xl': ['48px', '1.5'],
        '4xl': ['64px', '1.5'],
        '9xl': ['100px', '1']
      },
      backgroundImage: {
        'home-bn-sm': 'url("https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/home-header-sm.png?raw=true")',
        'home-bn': 'url("https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/home-header.png?raw=true")',
        'index-bg-sm': 'url("https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/index-bg-sm.png?raw=true")',
        'index-bg-md': 'url("https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/index-bg-md.png?raw=true")',
        'index-bg': 'url("https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/index-bg.png?raw=true")',
        'arrow-dropdown': 'url("../assets/icons/arrow_drop_down_black.svg")'
      },
      padding: {
        '74': '296px'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

