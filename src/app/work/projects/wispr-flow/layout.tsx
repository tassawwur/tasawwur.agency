import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Wispr Flow Case Study - Voice-First Conversion Flow & Real-Time STT',
  description: 'How we helped Wispr Flow achieve 3x increase in daily active users through voice-first conversion flow and real-time speech-to-text implementation.',
}

export default function WisprFlowLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

