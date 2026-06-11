import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import 'css/style.css'

export const metadata: Metadata = {
  title: 'Patrik Hultgren, frontend utvecklare baserad i Stockholm',
  description: 'Frilansande webbutvecklare',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
    apple: { url: '/apple-touch-icon.png', sizes: '180x180' },
  },
  openGraph: {
    title: 'Patrik Hultgren, frontend utvecklare baserad i Stockholm',
    description: 'Frilansande webbutvecklare',
    url: 'https://www.patrikhultgren.se',
    locale: 'sv_SE',
    images: [{ url: '/og-image.png', width: 2000, height: 1200, alt: 'Hultgren Development AB logotyp' }],
  },
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="sv">
      <body>{children}</body>
    </html>
  )
}
