'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Star, Quote } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const testimonials = [
  {
    name: 'Christophe Le Bars',
    role: 'Founder',
    company: 'DocAnalyzer',
    image: '/images/people/Christophe-Le-Bars-Founder-docAnalyzer.jpg',
    content: 'Tasawwur delivered exceptional results for our enterprise onboarding system. The document parsing pipeline reduced our processing time by 40% and the secure SSO integration exceeded our expectations.',
    rating: 5
  },
  {
    name: 'Luis Hector Chavez',
    role: 'CTO',
    company: 'Replit',
    image: '/images/people/Luis-Hector-Chavez-CTO-replit.jpg',
    content: 'The frontend redesign and performance optimization work was outstanding. We saw a 30% improvement in FCP and 18% increase in new user signups. The team\'s expertise in Next.js and real-time collaboration is unmatched.',
    rating: 5
  },
  {
    name: 'Tanay Kothari',
    role: 'Founder',
    company: 'Wispr Flow',
    image: '/images/people/Tanay-Kothari-Founder-wisperflow.webp',
    content: 'The voice-first conversion flow and real-time STT integration transformed our user experience. We achieved a 3x increase in daily active users in our target cohort. The mobile SDK integration was seamless.',
    rating: 5
  }
]

export default function ProofSection() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-musk/10 to-maroon/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-maroon mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg sm:text-xl text-musk-dark max-w-3xl mx-auto">
            Real feedback from founders and CTOs who trust us with their most critical projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 bg-background/50 backdrop-blur-sm hover:shadow-large transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-gold-strong fill-current" />
                    ))}
                  </div>
                  
                  <div className="relative mb-6">
                    <Quote className="w-8 h-8 text-maroon/20 absolute -top-2 -left-2" />
                    <p className="text-musk-dark leading-relaxed pl-6">
                      "{testimonial.content}"
                    </p>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={60}
                        height={60}
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-maroon">{testimonial.name}</h4>
                      <p className="text-sm text-musk-dark">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center space-x-8 bg-background/50 backdrop-blur-sm rounded-2xl px-8 py-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-maroon">95%</div>
              <div className="text-sm text-musk-dark">Client Success Rate</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-maroon">50+</div>
              <div className="text-sm text-musk-dark">Projects Delivered</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-maroon">4.9/5</div>
              <div className="text-sm text-musk-dark">Average Rating</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
