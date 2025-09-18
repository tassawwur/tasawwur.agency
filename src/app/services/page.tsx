import type { Metadata } from 'next'
import ServicesPageClient from './ServicesPageClient'

export const metadata: Metadata = {
  title: 'Software Development Services | Web Apps, AI/ML, Mobile Development',
  description: 'Comprehensive software development services including web applications, AI/ML solutions, mobile app development, LLM engineering, and software architecture. Expert developers delivering scalable solutions.',
  keywords: [
    'software development services',
    'web development services',
    'AI development services',
    'machine learning solutions',
    'mobile app development services',
    'LLM engineering services',
    'software architecture services',
    'custom software development',
    'full-stack development services',
    'enterprise software solutions',
    'startup development services',
    'web application development',
    'AI integration services',
    'automation solutions',
    'software engineering consulting',
    'tech consulting services',
    'Next.js development services',
    'React development services',
    'TypeScript development services',
    'software development Pakistan',
    'remote software development',
    'agile development services',
    'DevOps services',
    'cloud architecture services',
    'microservices development',
    'API development services',
    'database design services',
    'performance optimization services',
    'scalable software solutions'
  ],
  openGraph: {
    title: 'Software Development Services | Web Apps, AI/ML, Mobile Development',
    description: 'Comprehensive software development services including web applications, AI/ML solutions, mobile app development, LLM engineering, and software architecture.',
    type: 'website',
    url: 'https://tasawwur.agency/services',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Software Development Services | Web Apps, AI/ML, Mobile Development',
    description: 'Comprehensive software development services including web applications, AI/ML solutions, mobile app development, LLM engineering, and software architecture.',
  },
}

export default function ServicesPage() {
  return <ServicesPageClient />
}