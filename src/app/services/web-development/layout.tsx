import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Web Development - Modern Web Applications',
  description: 'Fast, scalable web applications built with Next.js, React, and modern technologies. Performance optimization, SEO, and accessibility included.',
}

export default function WebDevelopmentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
