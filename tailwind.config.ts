/** @type {import('tailwindcss').Config} */
import { Righteous } from "next/font/google";
import defaultTheme from "tailwindcss/defaultTheme";
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#e1f2f3", // Lightest shade
          100: "#b3dfe2",
          200: "#80c6d1",
          300: "#4db0bf",
          400: "#289aae",
          500: "#156089", // Base color
          600: "#135678",
          700: "#114d66",
          800: "#0f4354",
          900: "#0d3a43", // Darkest shade
          950: "#0a2e32", // Deepest shade
        },
        green: "#147f3f",
        secondary: "#685189",
        accent: "#be9553",
        background: "#f3f3f3",
        red: "#f44336",
      },
      fontFamily: {
        primary: ['Roboto', ...defaultTheme.fontFamily.sans],
        secondary: ['Quicksand', ...defaultTheme.fontFamily.sans],
        Righteous: ['Righteous', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        // Desktop sizes
        'xs-lg': ['11px', { lineHeight: '1.2' }], // Extra small for desktops
        'sm-lg': ['14px', { lineHeight: '1.2' }], // Small for desktops
        'p-lg': ['16px', { lineHeight: '1.5' }], // Paragraph for desktops
        'h6-lg': ['21px', { lineHeight: '1.4' }],
        'h5-lg': ['28px', { lineHeight: '1.4' }],
        'h4-lg': ['38px', { lineHeight: '1.3' }],
        'h3-lg': ['51px', { lineHeight: '1.3' }],
        'h2-lg': ['67px', { lineHeight: '1.2' }],
        'h1-lg': ['90px', { lineHeight: '1.1' }],
      
        // Tablet sizes
        'xs-md': ['11px', { lineHeight: '1.2' }], // Extra small for tablets
        'sm-md': ['13px', { lineHeight: '1.2' }], // Small for tablets
        'p-md': ['15px', { lineHeight: '1.5' }], // Paragraph for tablets
        'h6-md': ['20px', { lineHeight: '1.4' }],
        'h5-md': ['25px', { lineHeight: '1.4' }],
        'h4-md': ['32px', { lineHeight: '1.3' }],
        'h3-md': ['40px', { lineHeight: '1.3' }],
        'h2-md': ['50px', { lineHeight: '1.2' }],
        'h1-md': ['60px', { lineHeight: '1.1' }],
      
        // Small device sizes
        'xs-sm': ['11px', { lineHeight: '1.2' }], // Extra small for small devices
        'sm-sm': ['13px', { lineHeight: '1.2' }], // Small for small devices
        'p-sm': ['14px', { lineHeight: '1.5' }], // Paragraph for small devices
        'h6-sm': ['18px', { lineHeight: '1.4' }],
        'h5-sm': ['22px', { lineHeight: '1.4' }],
        'h4-sm': ['26px', { lineHeight: '1.3' }],
        'h3-sm': ['30px', { lineHeight: '1.3' }],
        'h2-sm': ['36px', { lineHeight: '1.2' }],
        'h1-sm': ['44px', { lineHeight: '1.1' }],
      },
      
      spacing: {
        4: "4px",
        6: "6px",
        8: "8px",
        10: "10px",
        12: "12px",
        16: "16px",
        24: "24px",
        32: "32px",
        40: "40px",
        45: "45px",
        48: "48px",
        54: "54px",
        64: "64px",
        72: "72px",
        80: "80px",
        128: "128px",
        308: "308px",
      },
      margin: {
        '-10': '-17px', // Add a custom negative margin
      },
      borderRadius: {
        'button-pill': "100px",
        '16': "16px",
        '8': "8px",
        '24': "24px",
      },
      borderWidth: {
        '3': '3px', // Custom border width of 3px
        '5': '5px', // Custom border width of 5px
        '6': '6px', // Custom border width of 8px
        '8': '8px', // Custom border width of 8px
        '13': '13px', // Custom border width of 8px
      },
      scale: {
        '80': '0.8', // 80% of the original size
        '120': '2.2', // 120% of the original size
        '200': '3',   // 200% of the original size
      },
      screens: {
        'sm': '100px',   // Mobile devices (375px)
        'md': '744px',   // Tablets (744px)
        'lg': '1000px',  // Desktop (1440px)
      },
    },
  },
  plugins: [],
};
