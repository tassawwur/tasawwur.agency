import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import ServicesSection from '@/components/ServicesSection'
import CaseStudiesSection from '@/components/CaseStudiesSection'
import ProofSection from '@/components/ProofSection'
import HowWeWorkSection from '@/components/HowWeWorkSection'
import SEOSection from '@/components/SEOSection'

export const metadata: Metadata = {
  title: 'Best Software Development Agency | Web Development Company | AI/ML Solutions',
  description: 'Top-rated software development agency offering web development, mobile app development, AI/ML solutions, and LLM engineering services. Trusted by startups and enterprises worldwide. Get your project started today!',
  keywords: [
    'software development agency',
    'web development company',
    'AI development services',
    'machine learning solutions',
    'mobile app development',
    'LLM engineering',
    'custom software development',
    'full-stack development',
    'enterprise software solutions',
    'startup development services',
    'web application development',
    'AI integration services',
    'automation solutions',
    'software engineering consulting',
    'tech consulting',
    'Next.js development',
    'React development',
    'TypeScript development',
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
  openGraph: {
    title: 'Premier Software Development Agency | Web Apps, AI/ML, Mobile Development',
    description: 'Leading software development agency specializing in web applications, AI/ML solutions, mobile apps, and LLM engineering. Expert developers delivering scalable, high-performance software solutions.',
    type: 'website',
    url: 'https://tasawwur.agency',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premier Software Development Agency | Web Apps, AI/ML, Mobile Development',
    description: 'Leading software development agency specializing in web applications, AI/ML solutions, mobile apps, and LLM engineering.',
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <CaseStudiesSection />
      <ProofSection />
      <SEOSection />
      <HowWeWorkSection />
    </>
  )
}

