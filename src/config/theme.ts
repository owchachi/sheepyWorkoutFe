'use client'
import { Roboto } from 'next/font/google'
import { createTheme } from '@mui/material/styles'

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
    h1: {
      color: '#EBEBEB',
    },
    h2: {
      color: '#EBEBEB',
    },
    h3: {
      color: '#EBEBEB',
    },
    h4: {
      color: '#EBEBEB',
    },
    h5: {
      color: '#EBEBEB',
    },
    h6: {
      color: '#EBEBEB',
    },
    subtitle1: {
      color: '#E0E0E0',
    },
    subtitle2: {
      color: '#E0E0E0',
    },
    body1: {
      color: '#CCCCCC',
    },
    body2: {
      color: '#CCCCCC',
    },
    caption: {
      color: '#E0E0E0',
    },
    overline: {
      color: '#E0E0E0',
    },
  },
  palette: {
    primary: {
      light: '#FFA647',
      main: '#FF931F',
      dark: '#F57E00',
      contrastText: '#EBEBEB',
    },
    secondary: {
      light: '#1C2835',
      main: '#0E141B',
      dark: '#070A0D',
      contrastText: '#EBEBEB',
    },
  },
})

export default theme
