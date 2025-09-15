'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Calendar, Smartphone, Globe, Zap, Code, Shield, Users, BarChart3 } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const features = [
  {
    icon: Smartphone,
    title: 'Native Performance',
    description: 'iOS and Android native apps with optimal performance and platform-specific features'
  },
  {
    icon: Globe,
    title: 'Cross-Platform',
    description: 'React Native and Flutter apps that work seamlessly across all devices'
  },
  {
    icon: Zap,
    title: 'App Store Optimization',
    description: 'Complete ASO strategy and store deployment for maximum visibility'
  },
  {
    icon: Code,
    title: 'Offline Functionality',
    description: 'Robust offline capabilities with data synchronization and caching'
  }
]

const deliverables = [
  'Native or cross-platform mobile application',
  'App Store and Google Play Store deployment',
  'Push notification system setup',
  'Analytics and user behavior tracking integration',
  'User authentication and security implementation',
  'App maintenance and update plan'
]

const techStack = [
  'React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'Expo', 'TypeScript', 'Redux'
]

const process = [
  {
    step: '01',
    title: 'Discovery & Planning',
    description: 'Analyze your requirements, choose the best technology stack, and create a detailed project roadmap.'
  },
  {
    step: '02',
    title: 'UI/UX Design',
    description: 'Create intuitive, user-friendly interfaces that provide exceptional mobile experiences.'
  },
  {
    step: '03',
    title: 'Development',
    description: 'Build your app using native or cross-platform technologies with clean, maintainable code.'
  },
  {
    step: '04',
    title: 'Testing & Optimization',
    description: 'Comprehensive testing across devices and platforms, performance optimization, and bug fixes.'
  },
  {
    step: '05',
    title: 'Deployment & Launch',
    description: 'App store submission, launch strategy, and ongoing support and maintenance.'
  }
]

export default function AppDevelopmentPage() {
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
              App Development
            </h1>
            <p className="text-lg sm:text-xl text-musk-dark mb-8 leading-relaxed">
              Native and cross-platform mobile applications that deliver exceptional user experiences and drive business growth.
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
              Comprehensive mobile app development services tailored to your business needs and user requirements
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
              A proven methodology that ensures your mobile app succeeds from concept to launch
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
              Ready to Build Your Mobile App?
            </h2>
            <p className="text-lg text-musk-dark mb-8">
              Let's discuss your app requirements and create a mobile solution that engages users and drives results.
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
