import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import 'css/style.css'

export const metadata: Metadata = {
  title: 'Patrik Hultgren, Frontend-Entwickler in Stockholm',
  description: 'Freiberuflicher Webentwickler',
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  )
}
