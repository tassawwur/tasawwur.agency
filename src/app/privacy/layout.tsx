import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - tasawwur.agency',
  description: 'Learn how tasawwur.agency collects, uses, and protects your personal information.',
}

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
