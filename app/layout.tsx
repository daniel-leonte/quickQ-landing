import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'QuickQ',
  description: 'QuickQ',
  generator: 'QuickQ',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-zinc-950">
      <body>{children}</body>
    </html>
  )
}
