import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { SmoothScrollProvider } from '@/components/SmoothScrollProvider'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'tasawwur.agency - Software Engineering & AI Solutions',
    template: '%s | tasawwur.agency',
  },
  description: 'We build software that lasts, performs, and elevates. Web apps, LLM systems, AI solutions, and mobile apps. Fast, secure, architected for scale.',
  keywords: [
    'software engineering',
    'web development',
    'LLM engineering',
    'AI/ML solutions',
    'mobile app development',
    'software architecture',
    'Next.js',
    'React',
    'TypeScript',
    'AI consulting'
  ],
  authors: [{ name: 'Tassawwur Hussain', email: 'tassawwurhussain@tasawwur.agency' }],
  creator: 'Tassawwur Hussain',
  publisher: 'tasawwur.agency',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://tasawwur.agency',
    siteName: 'tasawwur.agency',
    title: 'tasawwur.agency - Software Engineering & AI Solutions',
    description: 'We build software that lasts, performs, and elevates. Web apps, LLM systems, AI solutions, and mobile apps.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'tasawwur.agency - Software Engineering & AI Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'tasawwur.agency - Software Engineering & AI Solutions',
    description: 'We build software that lasts, performs, and elevates. Web apps, LLM systems, AI solutions, and mobile apps.',
    images: ['/og-image.jpg'],
    creator: '@tasawwur',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <SmoothScrollProvider>
          <Header />
          <main className="pt-16 lg:pt-20">
            {children}
          </main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
