'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Globe, Brain, Zap, Smartphone, Layers, ArrowRight } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import servicesData from '@/data/services.json'

const iconMap = {
  Globe,
  Brain,
  Zap,
  Smartphone,
  Layers,
}

export default function ServicesSection() {
  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive software engineering solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] || Globe
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-large transition-all duration-300 group border-0 bg-background/50 backdrop-blur-sm">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-accent-teal to-accent-blue rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-foreground">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <ul className="space-y-2">
                        {service.features.slice(0, 3).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                        {service.features.length > 3 && (
                          <li className="text-sm text-accent-teal font-medium">
                            +{service.features.length - 3} more features
                          </li>
                        )}
                      </ul>
                      
                      <div className="pt-4 border-t border-border/50">
                        <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                          <span>Timeline:</span>
                          <span className="font-medium">{service.timeline}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <span>Starting from:</span>
                          <span className="font-medium text-accent-teal">{service.priceRange}</span>
                        </div>
                      </div>

                      <Button
                        asChild
                        variant="outline"
                        className="w-full mt-6 group-hover:bg-accent-teal group-hover:text-white group-hover:border-accent-teal transition-all duration-300"
                      >
                        <Link href={`/services/${service.slug}`} className="flex items-center justify-center space-x-2">
                          <span>Learn More</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
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
          <Button
            asChild
            size="lg"
            className="bg-accent-teal hover:bg-accent-teal/90 text-white px-8 py-4 text-lg"
          >
            <Link href="/services" className="flex items-center space-x-2">
              <span>View All Services</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
