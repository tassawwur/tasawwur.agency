'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Calendar, Layers, Cloud, Database, Shield, Zap, Users, BarChart3 } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const features = [
  {
    icon: Layers,
    title: 'System Architecture Design',
    description: 'Scalable, maintainable system architectures that grow with your business needs'
  },
  {
    icon: Cloud,
    title: 'Cloud Infrastructure',
    description: 'Robust cloud infrastructure setup with high availability and disaster recovery'
  },
  {
    icon: Database,
    title: 'Database Design',
    description: 'Optimized database schemas and data architecture for performance and scalability'
  },
  {
    icon: Shield,
    title: 'Security Architecture',
    description: 'Comprehensive security implementation with best practices and compliance'
  }
]

const deliverables = [
  'System architecture documentation and diagrams',
  'Cloud infrastructure setup and configuration',
  'Database schema design and optimization',
  'Security implementation and compliance audit',
  'Performance monitoring and alerting setup',
  'Scaling strategy and technical roadmap'
]

const techStack = [
  'AWS', 'Docker', 'Kubernetes', 'PostgreSQL', 'Redis', 'Terraform', 'Nginx', 'Prometheus'
]

const process = [
  {
    step: '01',
    title: 'Architecture Assessment',
    description: 'Analyze current systems, identify bottlenecks, and define architectural requirements.'
  },
  {
    step: '02',
    title: 'System Design',
    description: 'Design scalable architecture with microservices, APIs, and data flow optimization.'
  },
  {
    step: '03',
    title: 'Infrastructure Setup',
    description: 'Implement cloud infrastructure with monitoring, logging, and security measures.'
  },
  {
    step: '04',
    title: 'Database Optimization',
    description: 'Design and optimize database schemas for performance and scalability.'
  },
  {
    step: '05',
    title: 'Security & Monitoring',
    description: 'Implement security measures and monitoring systems for production readiness.'
  }
]

export default function SoftwareArchitecturePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-musk/5 via-white to-musk-dark/5">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-musk/10 to-maroon/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-maroon mb-6">
              Software Architecture
            </h1>
            <p className="text-lg sm:text-xl text-musk-dark mb-8 leading-relaxed">
              Scalable system design and technical architecture consulting that ensures your infrastructure can handle growth while maintaining security and performance.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-maroon hover:bg-maroon/90 text-white px-8 py-4 text-lg"
              >
                <Link href="/contact" className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>Get Started</span>
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-gold-strong text-gold-strong hover:bg-gold-strong hover:text-white px-8 py-4 text-lg"
              >
                <Link href="/work" className="flex items-center space-x-2">
                  <ArrowRight className="w-5 h-5" />
                  <span>View Examples</span>
                </Link>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-maroon mb-6">
              What We Deliver
            </h2>
            <p className="text-lg text-musk-dark max-w-3xl mx-auto">
              Comprehensive software architecture services that ensure your systems are scalable, secure, and performant
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full text-center hover:shadow-large transition-all duration-300 group border-0 bg-white/50 backdrop-blur-sm">
                    <CardHeader>
                      <div className="w-16 h-16 bg-gradient-to-br from-maroon to-gold-strong rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-xl font-semibold text-maroon">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-musk-dark">
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

      {/* Process Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-musk/10 to-maroon/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-maroon mb-6">
              Our Process
            </h2>
            <p className="text-lg text-musk-dark max-w-3xl mx-auto">
              A systematic approach to building robust software architectures that stand the test of time
            </p>
          </motion.div>

          <div className="space-y-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                className="flex flex-col lg:flex-row items-center gap-8"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-maroon to-gold-strong rounded-2xl flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                </div>
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-2xl font-bold text-maroon mb-4">{step.title}</h3>
                  <p className="text-lg text-musk-dark">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables & Tech Stack */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Deliverables */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-maroon mb-6">What You Get</h3>
              <ul className="space-y-4">
                {deliverables.map((deliverable, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-emerald flex-shrink-0 mt-0.5" />
                    <span className="text-musk-dark">{deliverable}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-maroon mb-6">Technology Stack</h3>
              <div className="grid grid-cols-2 gap-3">
                {techStack.map((tech, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-musk/20 to-maroon/10 rounded-lg p-3 text-center"
                  >
                    <span className="text-musk-dark font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-maroon/10 to-musk/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-maroon mb-6">
              Ready to Architect Your System?
            </h2>
            <p className="text-lg text-musk-dark mb-8">
              Let's discuss your architecture requirements and build a foundation that scales with your business.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-maroon hover:bg-maroon/90 text-white px-8 py-4 text-lg"
            >
              <Link href="/contact" className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>Schedule a Technical Call</span>
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
