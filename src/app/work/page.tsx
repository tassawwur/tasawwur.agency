'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ExternalLink, Github, BookOpen, Code, Star, Users } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import projectsData from '@/data/projects.json'
import coursesData from '@/data/courses.json'


const openSourceProjects = [
  {
    id: 'tasawwur-rtc',
    title: 'Real-Time Communication Platform',
    slug: 'tasawwur-rtc',
    description: 'High-performance RTC platform for developers with WebRTC, Android SDK, and Java backend',
    techStack: ['WebRTC', 'Kotlin', 'C++', 'Java', 'Spring Boot'],
    githubStars: 127,
    license: 'MIT',
    demoUrl: '/work/projects/tasawwur-rtc',
    githubUrl: 'https://github.com/tassawwur/tasawwur-rtc'
  }
]

export default function WorkPage() {
  const featuredProjects = projectsData.filter(project => project.featured)
  const featuredCourse = coursesData[0]

  return (
    <div className="min-h-screen bg-gradient-to-br from-sage/30 via-pure-white to-sage/20">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-emerald/10 to-leaf/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-emerald mb-6">
              Our Work
            </h1>
            <p className="text-lg sm:text-xl text-leaf mb-8 leading-relaxed">
              Real projects, real results. Explore our case studies, open source contributions, 
              and educational courses that make a difference.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-emerald hover:bg-emerald/90 text-white px-8 py-4 text-lg"
              >
                <Link href="/contact" className="flex items-center space-x-2">
                  <BookOpen className="w-5 h-5" />
                  <span>Start a Project</span>
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-leaf text-leaf hover:bg-leaf hover:text-white px-8 py-4 text-lg"
              >
                <Link href="#case-studies" className="flex items-center space-x-2">
                  <ArrowRight className="w-5 h-5" />
                  <span>View Portfolio</span>
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-emerald mb-6">
              Case Studies
            </h2>
            <p className="text-lg text-leaf max-w-3xl mx-auto">
              Successful projects that showcase our expertise in software engineering and AI solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {featuredProjects.slice(0, 4).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-large transition-all duration-300 group border-0 bg-pure-white/80 backdrop-blur-sm overflow-hidden">
                  <div className="relative h-48 bg-gradient-to-br from-emerald/20 to-leaf/20">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-4xl font-bold text-emerald opacity-50">
                        {project.title.charAt(0)}
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Link
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-pure-white/80 backdrop-blur-sm rounded-full hover:bg-pure-white transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 text-emerald" />
                      </Link>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-emerald group-hover:text-leaf transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-leaf/80">
                      {project.role}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-sm text-leaf/80">
                        {project.description}
                      </p>
                      
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium text-emerald">Tech Stack:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.slice(0, 4).map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-2 py-1 bg-emerald/10 text-emerald text-xs rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.techStack.length > 4 && (
                            <span className="px-2 py-1 bg-silver/20 text-silver text-xs rounded-full">
                              +{project.techStack.length - 4}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-silver/30">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-leaf/80">Result:</span>
                          <span className="text-sm font-medium text-emerald">
                            {project.outcome}
                          </span>
                        </div>
                      </div>

                      <Button
                        asChild
                        variant="outline"
                        className="w-full mt-6 group-hover:bg-emerald group-hover:text-white group-hover:border-emerald transition-all duration-300"
                      >
                        <Link href={`/work/projects/${project.slug}`} className="flex items-center justify-center space-x-2">
                          <span>Read Case Study</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Button
              asChild
              size="lg"
              className="bg-emerald hover:bg-emerald/90 text-white px-8 py-4 text-lg"
            >
              <Link href="/work/projects" className="flex items-center space-x-2">
                <span>View All Case Studies</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Open Source Section */}
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
              Open Source Projects
            </h2>
            <p className="text-lg text-leaf max-w-3xl mx-auto">
              Contributing to the developer community with innovative open source solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {openSourceProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-large transition-all duration-300 group border-0 bg-pure-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <Code className="w-6 h-6 text-emerald" />
                        <span className="text-sm text-leaf/80">Open Source</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-gold-subtle" />
                          <span className="text-sm text-leaf/80">{project.githubStars}</span>
                        </div>
                        <span className="text-xs bg-emerald/10 text-emerald px-2 py-1 rounded-full">
                          {project.license}
                        </span>
                      </div>
                    </div>
                    <CardTitle className="text-2xl font-bold text-emerald group-hover:text-leaf transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-leaf/80">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium text-emerald">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-2 py-1 bg-emerald/10 text-emerald text-xs rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex space-x-3 pt-4">
                        <Button
                          asChild
                          variant="outline"
                          className="flex-1 group-hover:bg-emerald group-hover:text-white group-hover:border-emerald transition-all duration-300"
                        >
                          <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-2">
                            <Github className="w-4 h-4" />
                            <span>GitHub</span>
                          </Link>
                        </Button>
                        <Button
                          asChild
                          variant="outline"
                          className="flex-1 group-hover:bg-leaf group-hover:text-white group-hover:border-leaf transition-all duration-300"
                        >
                          <Link href={project.demoUrl} className="flex items-center justify-center space-x-2">
                            <ExternalLink className="w-4 h-4" />
                            <span>Documentation</span>
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
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
              Educational Courses
            </h2>
            <p className="text-lg text-leaf max-w-3xl mx-auto">
              Learn from industry experts with our comprehensive, hands-on courses
            </p>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="hover:shadow-large transition-all duration-300 group border-0 bg-pure-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <BookOpen className="w-6 h-6 text-emerald" />
                    <span className="text-sm text-leaf/80">Course</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4 text-gold-subtle" />
                    <span className="text-sm text-leaf/80">{featuredCourse.duration}</span>
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold text-emerald group-hover:text-leaf transition-colors">
                  {featuredCourse.title}
                </CardTitle>
                <CardDescription className="text-leaf/80">
                  {featuredCourse.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-6">
                  <p className="text-leaf/80">
                    {featuredCourse.shortDescription}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-medium text-emerald mb-3">What You'll Learn:</h4>
                      <ul className="space-y-2">
                        {featuredCourse.features.slice(0, 4).map((feature, index) => (
                          <li key={index} className="flex items-start space-x-2 text-sm text-leaf/80">
                            <div className="w-1.5 h-1.5 bg-emerald rounded-full mt-2 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-emerald mb-3">Pricing:</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-leaf/80">Monthly:</span>
                          <span className="text-emerald font-medium">PKR {featuredCourse.price.monthly.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-leaf/80">Full Course:</span>
                          <span className="text-emerald font-medium">PKR {featuredCourse.price.full.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button
                    asChild
                    className="w-full bg-emerald hover:bg-emerald/90 text-white group-hover:bg-leaf transition-all duration-300"
                  >
                    <Link href={`/work/courses/${featuredCourse.slug}`} className="flex items-center justify-center space-x-2">
                      <BookOpen className="w-4 h-4" />
                      <span>Learn More</span>
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
