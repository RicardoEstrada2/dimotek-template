import { type Metadata } from 'next'

import { RootLayout } from '@/components/RootLayout'

import '@/styles/tailwind.css'
import '@/styles/custom.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Studio',
    default: 'Dimotek - Agencia Digital con operaciones en Norte América, Latam & Europa.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full background-dimotek text-base antialiased">
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
