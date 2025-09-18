import { MetadataRoute } from 'next'
import projectsData from '@/data/projects.json'
import servicesData from '@/data/services.json'
import coursesData from '@/data/courses.json'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://tasawwur.agency'
  const now = new Date()

  // High-priority static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/work/courses/gsoc-prep`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/work`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: now,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: now,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ]

  // Service pages with high priority
  const servicePages = servicesData.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Project pages
  const projectPages = projectsData.map((project) => ({
    url: `${baseUrl}/work/projects/${project.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Course pages with high priority for GSoC
  const coursePages = coursesData.map((course) => ({
    url: `${baseUrl}/work/courses/${course.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: course.slug === 'gsoc-prep' ? 0.9 : 0.7,
  }))

  return [...staticPages, ...servicePages, ...projectPages, ...coursePages]
}

