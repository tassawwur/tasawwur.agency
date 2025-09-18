import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Replit Case Study - Frontend Redesign & Performance Optimization',
  description: 'How we helped Replit achieve 30% faster FCP and 18% increase in new user signups through frontend redesign and performance optimization.',
}

export default function ReplitLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

