import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import 'css/style.css'

export const metadata: Metadata = {
  title: 'Patrik Hultgren, frontend developer based in Stockholm',
  description: 'Freelance web developer',
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
