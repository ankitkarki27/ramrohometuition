import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StickyButtons from '@/components/StickyButtons'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ramro Home Tuition | Quality Education Classes 1-10 in Kathmandu Valley',
  description: 'Professional home tuition service for Class 1 to 10 in Kathmandu, Bhaktapur, and Lalitpur. Experienced teachers, flexible timing, affordable fees. Contact us now!',
  keywords: 'home tution,home tuition in Kathmandu, home tutor in Bhaktapur, tuition classes in Lalitpur, Class 1-10 home tuition Nepal, private tutor Nepal',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Ramro Home Tuition | Quality Education Classes 1-10',
    description: 'Professional home tuition service for Class 1 to 10 in Kathmandu Valley',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <StickyButtons />
      </body>
    </html>
  )
}