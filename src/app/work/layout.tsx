import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Work - Case Studies, Open Source & Courses',
  description: 'Explore our portfolio of successful projects, open source contributions, and educational courses. Real results from innovative startups and developers worldwide.',
}

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

