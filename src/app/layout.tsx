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
    default: 'tasawwur.agency - Premier Software Development Agency | Web Apps, AI/ML, Mobile Development',
    template: '%s | tasawwur.agency - Leading Software Development Agency',
  },
  description: 'Leading software development agency specializing in web applications, AI/ML solutions, mobile apps, and LLM engineering. Expert developers delivering scalable, high-performance software solutions for startups and enterprises.',
  keywords: [
    'software development agency',
    'web development company',
    'AI development services',
    'machine learning solutions',
    'mobile app development',
    'LLM engineering',
    'software architecture',
    'Next.js development',
    'React development',
    'TypeScript development',
    'AI consulting services',
    'custom software development',
    'full-stack development',
    'enterprise software solutions',
    'startup development services',
    'web application development',
    'AI integration services',
    'automation solutions',
    'software engineering consulting',
    'tech consulting',
    'software development Pakistan',
    'remote software development',
    'agile development',
    'DevOps services',
    'cloud architecture',
    'microservices development',
    'API development',
    'database design',
    'performance optimization',
    'scalable software solutions'
  ],
  authors: [{ name: 'Tassawwur Hussain' }],
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
    title: 'tasawwur.agency - Premier Software Development Agency | Web Apps, AI/ML, Mobile Development',
    description: 'Leading software development agency specializing in web applications, AI/ML solutions, mobile apps, and LLM engineering. Expert developers delivering scalable, high-performance software solutions.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'tasawwur.agency - Premier Software Development Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'tasawwur.agency - Premier Software Development Agency | Web Apps, AI/ML, Mobile Development',
    description: 'Leading software development agency specializing in web applications, AI/ML solutions, mobile apps, and LLM engineering.',
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
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "tasawwur.agency",
    "url": "https://tasawwur.agency",
    "logo": "https://tasawwur.agency/logo.png",
    "description": "Leading software development agency specializing in web applications, AI/ML solutions, mobile apps, and LLM engineering.",
    "foundingDate": "2024",
    "founder": {
      "@type": "Person",
      "name": "Tasawwur Hussain"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "PK"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+92-315-629-3975",
      "contactType": "customer service",
      "email": "tasawwur@tasawwur.agency"
    },
    "sameAs": [
      "https://github.com/tasawwur",
      "https://linkedin.com/in/tasawwur",
      "https://twitter.com/tasawwur"
    ],
    "serviceType": [
      "Software Development",
      "Web Development",
      "AI/ML Solutions",
      "Mobile App Development",
      "LLM Engineering",
      "Software Architecture"
    ]
  }

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
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
