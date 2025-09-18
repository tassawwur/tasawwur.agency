'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Calendar, Code, Globe, Smartphone, Zap } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const features = [
  {
    icon: Globe,
    title: 'Modern Web Applications',
    description: 'Built with Next.js, React, and TypeScript for optimal performance and developer experience'
  },
  {
    icon: Smartphone,
    title: 'Responsive Web Design',
    description: 'Mobile-first approach ensuring perfect experience across all devices'
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Lightning-fast loading times and optimized user experience'
  },
  {
    icon: Code,
    title: 'Clean Architecture',
    description: 'Scalable, maintainable code following industry best practices'
  }
]

const techStack = [
  'Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'MongoDB', 'AWS', 'Vercel', 'Docker'
]

const process = [
  {
    step: '01',
    title: 'Discovery & Planning',
    description: 'Understanding your requirements and creating a detailed project roadmap'
  },
  {
    step: '02',
    title: 'Design & Prototyping',
    description: 'Creating wireframes and prototypes to visualize your web application'
  },
  {
    step: '03',
    title: 'Development & Testing',
    description: 'Building your web application with rigorous testing and quality assurance'
  },
  {
    step: '04',
    title: 'Deployment & Launch',
    description: 'Deploying your application and providing ongoing support and maintenance'
  }
]

export default function WebDevelopmentPageClient() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-16 lg:pt-24 lg:pb-20 bg-gradient-to-br from-background via-pearl to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Expert{' '}
              <span className="bg-gradient-to-r from-accent-teal to-accent-blue bg-clip-text text-transparent">
                Web Development Services
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
              Custom web applications built with modern technologies like Next.js, React, and TypeScript. 
              Responsive, fast, and scalable web solutions for your business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-accent-teal hover:bg-accent-teal/90 text-white px-8 py-4 text-lg">
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-accent-blue text-accent-blue hover:bg-accent-blue hover:text-white px-8 py-4 text-lg">
                <Link href="/contact">Get Free Quote</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Why Choose Our Web Development Services?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Modern web development using cutting-edge technologies and best practices
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-large transition-all duration-300 group border-0 bg-background/50 backdrop-blur-sm">
                    <CardHeader>
                      <div className="w-16 h-16 bg-gradient-to-br from-accent-teal to-accent-blue rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-xl font-semibold text-foreground group-hover:text-accent-teal transition-colors">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Modern Technology Stack
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We use the latest technologies and frameworks to build high-performance web applications
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {techStack.map((tech, index) => (
              <motion.div
                key={tech}
                className="px-6 py-3 bg-background border border-border rounded-full text-foreground font-medium hover:bg-accent-teal hover:text-white hover:border-accent-teal transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Our Web Development Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-accent-teal to-accent-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-accent-teal/10 to-accent-blue/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Ready to Build Your Web Application?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss your project and create a custom web solution that drives your business forward
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-accent-teal hover:bg-accent-teal/90 text-white px-8 py-4 text-lg">
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-accent-blue text-accent-blue hover:bg-accent-blue hover:text-white px-8 py-4 text-lg">
                <Link href="/contact">Get Free Quote</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
