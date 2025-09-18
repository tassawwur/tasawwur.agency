import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services - Software Engineering & AI Solutions',
  description: 'Comprehensive software engineering services including web development, LLM engineering, AI/ML solutions, app development, and software architecture.',
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

