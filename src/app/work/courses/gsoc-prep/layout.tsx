import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GSoC Preparation Course - Master Google Summer of Code',
  description: 'Practical, mentor-led course preparing contributors to land Google Summer of Code. Comprehensive hands-on mentorship with exact explicit steps to ensure your selection.',
}

export default function GSoCPrepLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
