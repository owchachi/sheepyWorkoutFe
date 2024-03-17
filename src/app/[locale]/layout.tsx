import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import { ThemeProvider } from '@mui/material/styles'
import theme from '@/config/theme'
import CssBaseline from '@mui/material/CssBaseline'
import 'react-toastify/dist/ReactToastify.css'
import './globals.css'
import { TranslationProvider } from '@/utils'
import { ToastContainer } from 'react-toastify'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sheepy workout',
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode
  params: { locale: string }
}>) {
  return (
    <html lang={locale}>
      <body className={inter.className} id="__next">
        <AppRouterCacheProvider>
          <ToastContainer position="bottom-left" />

          <TranslationProvider>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
          </TranslationProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
