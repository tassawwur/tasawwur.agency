import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Galen AI Case Study - HIPAA-Compliant Healthcare Data Aggregation',
  description: 'How we helped Galen AI achieve 65% faster data sync and 92% clinician satisfaction through HIPAA-compliant healthcare platform development.',
}

export default function GalenAILayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
