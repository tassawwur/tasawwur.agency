'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Upload, MessageCircle, Calendar, FileText } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import ContactForm from '@/components/ContactForm'


const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    description: 'Send us an email anytime',
    value: 'tasawwur@tasawwur.agency',
    href: 'mailto:tasawwur@tasawwur.agency'
  },
  {
    icon: Phone,
    title: 'Phone',
    description: 'Call us for urgent matters',
    value: '+92 315 629 3975',
    href: 'tel:+923156293975'
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    description: 'Quick chat on WhatsApp',
    value: '+92 315 629 3975',
    href: 'https://wa.me/923156293975'
  },
  {
    icon: Calendar,
    title: 'Schedule Call',
    description: 'Book a technical consultation',
    value: 'Schedule Now',
    href: '/contact#form'
  }
]

const services = [
  'Web Development',
  'LLM Engineering', 
  'AI/ML Solutions',
  'App Development',
  'Software Architecture',
  'Technical Consulting'
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-pearl to-background">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-accent-teal/10 to-accent-blue/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Let's Build Something Amazing Together
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
              Ready to start your project? We're here to help you succeed. 
              Get in touch for a technical consultation and let's discuss your vision.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Methods */}
          <div className="lg:col-span-1 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h2>
              <div className="space-y-4">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon
                  return (
                    <motion.a
                      key={method.title}
                      href={method.href}
                      className="flex items-start space-x-4 p-4 bg-muted/30 rounded-xl hover:bg-muted/50 transition-all duration-300 group"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-accent-teal to-accent-blue rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground group-hover:text-accent-teal transition-colors">
                          {method.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-1">
                          {method.description}
                        </p>
                        <p className="text-sm font-medium text-accent-teal">
                          {method.value}
                        </p>
                      </div>
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 bg-muted/30 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-foreground">Our Services</CardTitle>
                  <CardDescription>
                    We provide comprehensive software engineering solutions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {services.map((service, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-accent-teal rounded-full" />
                        <span className="text-sm text-muted-foreground">{service}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2" id="form">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 bg-background/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    Start Your Project
                  </CardTitle>
                  <CardDescription>
                    Tell us about your project and we'll get back to you within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
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
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Common questions about our services and process
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "What's your typical project timeline?",
                answer: "Project timelines vary based on complexity, but typically range from 4-16 weeks for most projects. We provide detailed timelines during the discovery phase."
              },
              {
                question: "Do you work with startups and enterprises?",
                answer: "Yes, we work with both startups and enterprises. Our flexible approach allows us to scale our services based on your company size and requirements."
              },
              {
                question: "What technologies do you specialize in?",
                answer: "We specialize in modern web technologies (Next.js, React, TypeScript), AI/ML solutions, mobile development, and cloud architecture."
              },
              {
                question: "Do you provide ongoing support?",
                answer: "Yes, we offer comprehensive support and maintenance packages to ensure your project continues to perform optimally after launch."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 bg-background/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
