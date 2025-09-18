import type { Metadata } from 'next'
import WebDevelopmentPageClient from './WebDevelopmentPageClient'

export const metadata: Metadata = {
  title: 'Web Development Services | Custom Web Applications | Next.js & React Development',
  description: 'Expert web development services using Next.js, React, and TypeScript. Custom web applications, responsive design, and modern web solutions. Trusted web development company.',
  keywords: [
    'web development services',
    'custom web applications',
    'Next.js development',
    'React development',
    'TypeScript development',
    'responsive web design',
    'web development company',
    'modern web applications',
    'web app development',
    'frontend development'
  ],
  openGraph: {
    title: 'Web Development Services | Custom Web Applications | Next.js & React Development',
    description: 'Expert web development services using Next.js, React, and TypeScript. Custom web applications, responsive design, and modern web solutions.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Development Services | Custom Web Applications | Next.js & React Development',
    description: 'Expert web development services using Next.js, React, and TypeScript. Custom web applications, responsive design, and modern web solutions.',
  },
}

export default function WebDevelopmentPage() {
  return <WebDevelopmentPageClient />
}