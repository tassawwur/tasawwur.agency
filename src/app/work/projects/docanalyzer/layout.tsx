import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DocAnalyzer Case Study - Enterprise Document Processing',
  description: 'How we helped DocAnalyzer reduce document processing time by 40% through enterprise onboarding UI and document parsing pipeline integration.',
}

export default function DocAnalyzerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

