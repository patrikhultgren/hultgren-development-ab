import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import 'css/style.css'

export const metadata: Metadata = {
  title: 'Patrik Hultgren, desarrollador frontend en Estocolmo',
  description: 'Desarrollador web freelance',
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
