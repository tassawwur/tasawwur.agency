import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - Get Started with Your Project',
  description: 'Ready to start your project? Contact us for a technical consultation. We provide comprehensive software engineering and AI solutions.',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
