import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - Software Engineering & AI Solutions',
  description: 'Learn about tasawwur.agency, our mission, values, and the team behind innovative software engineering and AI solutions.',
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

