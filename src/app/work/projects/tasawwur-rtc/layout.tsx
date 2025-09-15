import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tasawwur RTC - High-Performance Real-Time Communication Platform',
  description: 'Build real-time video into your Android app in minutes. High-performance, open-source RTC platform with sub-200ms latency, built with WebRTC, Kotlin/C++, and Java.',
}

export default function TasawwurRTCLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
