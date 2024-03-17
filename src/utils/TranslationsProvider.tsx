import { NextIntlClientProvider, useMessages } from 'next-intl'

export const TranslationProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  const messages = useMessages()
  return <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
}
