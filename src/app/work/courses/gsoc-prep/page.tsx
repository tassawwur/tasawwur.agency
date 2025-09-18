import type { Metadata } from 'next'
import GSoCPrepCoursePageClient from './GSoCPrepCoursePageClient'

export const metadata: Metadata = {
  title: 'GSoC 2026 Preparation Course | Best Google Summer of Code Training | Expert Mentorship',
  description: 'Top-rated GSoC 2026 preparation course with expert mentorship. Master open source contribution, technical interviews, and application strategies. 95% success rate. Join the best GSoC training program today!',
  keywords: [
    'GSoC 2026',
    'Google Summer of Code 2026',
    'GSoC preparation course',
    'open source contribution',
    'GSoC application guide',
    'Google Summer of Code preparation',
    'GSoC mentorship',
    'open source development',
    'GSoC 2026 application',
    'Google Summer of Code 2026 guide',
    'GSoC technical interview',
    'open source projects',
    'GSoC proposal writing',
    'Google Summer of Code tips',
    'GSoC success strategies',
    'open source programming',
    'GSoC community',
    'Google Summer of Code timeline',
    'GSoC eligibility',
    'open source skills',
    'GSoC project selection',
    'Google Summer of Code requirements',
    'GSoC coding challenges',
    'open source mentorship',
    'GSoC application process',
    'Google Summer of Code preparation course',
    'GSoC 2026 timeline',
    'open source contribution guide',
    'GSoC technical skills',
    'Google Summer of Code success'
  ],
  openGraph: {
    title: 'GSoC 2026 Preparation Course | Complete Guide to Google Summer of Code Success',
    description: 'Master Google Summer of Code 2026 with our comprehensive preparation course. Learn open source contribution, technical skills, and application strategies from experienced mentors.',
    type: 'website',
    url: 'https://tasawwur.agency/work/courses/gsoc-prep',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GSoC 2026 Preparation Course | Complete Guide to Google Summer of Code Success',
    description: 'Master Google Summer of Code 2026 with our comprehensive preparation course. Learn open source contribution, technical skills, and application strategies.',
  },
}

export default function GSoCPrepCoursePage() {
  return <GSoCPrepCoursePageClient />
}