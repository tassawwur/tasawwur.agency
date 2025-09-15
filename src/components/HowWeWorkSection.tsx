'use client'

import { motion } from 'framer-motion'
import { Search, Wrench, Cog } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const steps = [
  {
    icon: Search,
    title: 'Discovery',
    description: 'We dive deep into your requirements, goals, and challenges to understand exactly what you need.',
    details: [
      'Technical requirements analysis',
      'User experience research',
      'Technology stack evaluation',
      'Project scope definition'
    ],
    duration: '1-2 weeks'
  },
  {
    icon: Wrench,
    title: 'Build',
    description: 'Our team crafts your solution using cutting-edge technologies and best practices.',
    details: [
      'Agile development process',
      'Regular progress updates',
      'Code quality assurance',
      'Performance optimization'
    ],
    duration: '4-16 weeks'
  },
  {
    icon: Cog,
    title: 'Operate',
    description: 'We ensure your solution runs smoothly with ongoing support and maintenance.',
    details: [
      'Deployment and launch',
      'Performance monitoring',
      'Bug fixes and updates',
      'Feature enhancements'
    ],
    duration: 'Ongoing'
  }
]

export default function HowWeWorkSection() {
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
            How We Work
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            A proven process that ensures your project succeeds from concept to completion
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.title}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Connection line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-accent-teal to-accent-blue z-0" />
                )}
                
                <Card className="h-full hover:shadow-large transition-all duration-300 group border-0 bg-muted/30 backdrop-blur-sm relative z-10">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent-teal to-accent-blue rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-sm font-medium text-accent-teal mb-2">
                      Step {index + 1}
                    </div>
                    <CardTitle className="text-2xl font-bold text-foreground mb-4">
                      {step.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground text-base">
                      {step.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      <ul className="space-y-3">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start space-x-3 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="pt-4 border-t border-border/50">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Duration:</span>
                          <span className="text-sm font-medium text-accent-teal">
                            {step.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-muted-foreground mb-8">
            Ready to start your project? Let's begin with a discovery call.
          </p>
          <motion.a
            href="/contact"
            className="inline-flex items-center space-x-2 bg-accent-teal hover:bg-accent-teal/90 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Get Started</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
