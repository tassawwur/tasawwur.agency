import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - tasawwur.agency',
  description: 'Read our terms of service for using tasawwur.agency website and services.',
}

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
