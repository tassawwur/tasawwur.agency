'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import projectsData from '@/data/projects.json'

export default function CaseStudiesSection() {
  const featuredProjects = projectsData.filter(project => project.featured)

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Featured Case Studies
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Real results from innovative startups we've helped scale and succeed
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-large transition-all duration-300 group border-0 bg-muted/30 backdrop-blur-sm overflow-hidden">
                <div className="relative h-48 bg-gradient-to-br from-accent-teal/20 to-accent-blue/20">
                  {/* Project logo */}
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <Image
                      src={`/images/logos/${project.id === 'replit' ? 'Replit_Logo.jpg' : 
                                       project.id === 'docanalyzer' ? 'docanalyzer.png' :
                                       project.id === 'wispr-flow' ? 'Wispr_Flow_Logo.jpg' :
                                       project.id === 'galen-ai' ? 'Galen_AI_Logo.png' :
                                       project.id === 'plexe' ? 'Plexe-logo.jpg' :
                                       project.id === 'tasawwur-rtc' ? 'tasawwur-rtc.png' : 'docanalyzer.png'}`}
                      alt={`${project.title} logo`}
                      width={200}
                      height={100}
                      className="object-contain max-h-24 w-auto"
                    />
                  </div>
                  <div className="absolute top-4 right-4">
                    <Link
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 text-foreground" />
                    </Link>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-foreground group-hover:text-accent-teal transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.role}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      {project.description}
                    </p>
                    
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-foreground">Tech Stack:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-accent-teal/10 text-accent-teal text-xs rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-border/50">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Outcome:</span>
                        <span className="text-sm font-medium text-accent-teal">
                          {project.outcome}
                        </span>
                      </div>
                    </div>

                    <Button
                      asChild
                      variant="outline"
                      className="w-full mt-6 group-hover:bg-accent-teal group-hover:text-white group-hover:border-accent-teal transition-all duration-300"
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
            className="bg-accent-blue hover:bg-accent-blue/90 text-white px-8 py-4 text-lg"
          >
            <Link href="/work" className="flex items-center space-x-2">
              <span>View All Projects</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
