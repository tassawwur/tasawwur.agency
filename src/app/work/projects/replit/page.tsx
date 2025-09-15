'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ExternalLink, CheckCircle, TrendingUp, Users, Clock } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'


export default function ReplitCaseStudyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sage/30 via-pure-white to-sage/20">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-emerald/10 to-leaf/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <Button
                asChild
                variant="outline"
                className="mb-6"
              >
                <Link href="/work" className="flex items-center space-x-2">
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Work</span>
                </Link>
              </Button>
            </div>

            <div className="text-center">
              <div className="mb-8">
                <Image
                  src="/images/logos/Replit_Logo.jpg"
                  alt="Replit Logo"
                  width={200}
                  height={100}
                  className="mx-auto object-contain max-h-20 w-auto"
                />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-emerald mb-6">
                Replit
              </h1>
              <p className="text-lg sm:text-xl text-leaf mb-8 leading-relaxed">
                Frontend re-design and performance optimization for the world's leading online IDE
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-emerald hover:bg-emerald/90 text-white px-8 py-4 text-lg"
                >
                  <Link href="https://replit.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                    <ExternalLink className="w-5 h-5" />
                    <span>Visit Replit</span>
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-emerald mb-6">Project Overview</h2>
                <p className="text-lg text-leaf/80 mb-6">
                  Replit needed to improve their frontend performance and user onboarding experience 
                  to compete with emerging AI-powered coding platforms. We redesigned the frontend 
                  architecture with SSR implementation, optimized image loading strategies, and 
                  enhanced real-time collaboration features.
                </p>
                <p className="text-lg text-leaf/80">
                  The project focused on reducing First Contentful Paint (FCP), improving user 
                  engagement metrics, and creating a more intuitive development environment for 
                  millions of users worldwide.
                </p>
              </motion.div>
            </div>

            <div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 bg-pure-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-emerald">Project Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <span className="text-sm text-leaf/80">Role:</span>
                      <p className="font-medium text-emerald">Frontend Engineer</p>
                    </div>
                    <div>
                      <span className="text-sm text-leaf/80">Timeline:</span>
                      <p className="font-medium text-emerald">6 months</p>
                    </div>
                    <div>
                      <span className="text-sm text-leaf/80">Team Size:</span>
                      <p className="font-medium text-emerald">3 developers</p>
                    </div>
                    <div>
                      <span className="text-sm text-leaf/80">Tech Stack:</span>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {['Next.js', 'React', 'WebSocket', 'Tailwind', 'Redis'].map((tech) => (
                          <span key={tech} className="px-2 py-1 bg-emerald/10 text-emerald text-xs rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-sage/30 to-emerald/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-emerald mb-6">The Challenge</h2>
              <div className="space-y-4">
                <p className="text-lg text-leaf/80">
                  Replit was experiencing performance issues with their frontend, particularly 
                  slow loading times that were impacting user experience and conversion rates.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-leaf/80">Slow First Contentful Paint (FCP) affecting user engagement</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-leaf/80">High bounce rate on onboarding pages</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-leaf/80">Real-time collaboration features causing performance bottlenecks</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-leaf/80">Need to compete with emerging AI-powered coding platforms</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-emerald mb-6">Our Solution</h2>
              <div className="space-y-4">
                <p className="text-lg text-leaf/80">
                  We implemented a comprehensive frontend optimization strategy focusing on 
                  performance, user experience, and real-time collaboration improvements.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-emerald flex-shrink-0 mt-0.5" />
                    <span className="text-leaf/80">Implemented Server-Side Rendering (SSR) for critical pages</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-emerald flex-shrink-0 mt-0.5" />
                    <span className="text-leaf/80">Optimized image loading with priority loading and WebP formats</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-emerald flex-shrink-0 mt-0.5" />
                    <span className="text-leaf/80">Enhanced real-time collaboration UX with WebSocket optimization</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-emerald flex-shrink-0 mt-0.5" />
                    <span className="text-leaf/80">Redesigned onboarding flow for better user conversion</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-emerald mb-6">
              Results
            </h2>
            <p className="text-lg text-leaf max-w-3xl mx-auto">
              The optimization efforts delivered significant improvements across all key metrics
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 bg-pure-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald to-leaf rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-emerald mb-2">30%</h3>
                  <p className="text-leaf/80">Faster First Contentful Paint</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 bg-pure-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald to-leaf rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-emerald mb-2">18%</h3>
                  <p className="text-leaf/80">Increase in New User Signups</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 bg-pure-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald to-leaf rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-emerald mb-2">4.8/5</h3>
                  <p className="text-leaf/80">User Satisfaction Rating</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technologies Used */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-sage/30 to-emerald/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-emerald mb-6">
              Technologies Used
            </h2>
            <p className="text-lg text-leaf max-w-3xl mx-auto">
              Modern technologies and best practices for optimal performance
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { name: 'Next.js', category: 'Framework' },
              { name: 'React', category: 'Library' },
              { name: 'TypeScript', category: 'Language' },
              { name: 'WebSocket', category: 'Real-time' },
              { name: 'Redis', category: 'Caching' },
              { name: 'Tailwind CSS', category: 'Styling' },
              { name: 'WebP', category: 'Images' },
              { name: 'SSR', category: 'Rendering' },
              { name: 'Performance', category: 'Optimization' },
              { name: 'Analytics', category: 'Monitoring' }
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 bg-pure-white/80 backdrop-blur-sm hover:shadow-large transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-emerald mb-1">{tech.name}</h3>
                    <p className="text-xs text-leaf/60">{tech.category}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-emerald mb-6">
              Ready to Optimize Your Frontend?
            </h2>
            <p className="text-lg text-leaf mb-8">
              Let's discuss how we can help improve your application's performance and user experience.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-emerald hover:bg-emerald/90 text-white px-8 py-4 text-lg"
            >
              <Link href="/contact" className="flex items-center space-x-2">
                <span>Start Your Project</span>
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
