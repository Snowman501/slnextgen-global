import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SL NextGen Digital | Business Software & AI Systems',
  description: 'Discover business software, AI-assisted systems, and digital services from Loren and Stacy at SL NextGen Digital.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
