'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Calendar, FileText } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import servicesData from '@/data/services.json'


export default function ServicesPage() {
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
              Our Services
            </h1>
            <p className="text-lg sm:text-xl text-musk-dark mb-8 leading-relaxed">
              Comprehensive software engineering solutions tailored to your business needs. 
              From concept to deployment, we deliver excellence at every step.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-maroon hover:bg-maroon/90 text-white px-8 py-4 text-lg"
              >
                <Link href="/contact" className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>Schedule Technical Call</span>
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-gold-strong text-gold-strong hover:bg-gold-strong hover:text-white px-8 py-4 text-lg"
              >
                <Link href="/work" className="flex items-center space-x-2">
                  <FileText className="w-5 h-5" />
                  <span>View Case Studies</span>
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {servicesData.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-large transition-all duration-300 group border-0 bg-white/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-maroon mb-4 group-hover:text-gold-strong transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-lg text-musk-dark">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-6">
                      {/* Problem & Solution */}
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-maroon mb-2">The Challenge:</h4>
                          <p className="text-musk-dark">{service.problem}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-maroon mb-2">Our Solution:</h4>
                          <p className="text-musk-dark">{service.solution}</p>
                        </div>
                      </div>

                      {/* Features */}
                      <div>
                        <h4 className="font-semibold text-maroon mb-3">What We Deliver:</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start space-x-3 text-musk-dark">
                              <CheckCircle className="w-5 h-5 text-emerald flex-shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Deliverables */}
                      <div>
                        <h4 className="font-semibold text-maroon mb-3">Deliverables:</h4>
                        <ul className="space-y-2">
                          {service.deliverables.map((deliverable, deliverableIndex) => (
                            <li key={deliverableIndex} className="flex items-start space-x-3 text-musk-dark">
                              <div className="w-1.5 h-1.5 bg-gold-strong rounded-full mt-2 flex-shrink-0" />
                              <span>{deliverable}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Timeline & Pricing */}
                      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-musk/30">
                        <div>
                          <span className="text-sm text-musk-dark">Timeline:</span>
                          <div className="font-medium text-maroon">{service.timeline}</div>
                        </div>
                        <div>
                          <span className="text-sm text-musk-dark">Investment:</span>
                          <div className="font-medium text-gold-strong">{service.priceRange}</div>
                        </div>
                      </div>

                      {/* CTA */}
                      <Button
                        asChild
                        className="w-full bg-maroon hover:bg-maroon/90 text-white mt-6 group-hover:bg-gold-strong group-hover:text-maroon transition-all duration-300"
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
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-musk/10 to-maroon/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-maroon mb-6">
              Why Choose Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-maroon to-gold-strong rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-maroon mb-2">Proven Results</h3>
                <p className="text-musk-dark">95% client success rate with measurable outcomes</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-maroon to-gold-strong rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-maroon mb-2">On-Time Delivery</h3>
                <p className="text-musk-dark">Agile methodology ensures timely project completion</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-maroon to-gold-strong rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-maroon mb-2">Transparent Process</h3>
                <p className="text-musk-dark">Regular updates and clear communication throughout</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
