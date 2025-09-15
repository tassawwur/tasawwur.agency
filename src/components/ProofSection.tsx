'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Users, Award, Clock } from 'lucide-react'

const metrics = [
  {
    icon: TrendingUp,
    value: '95%',
    label: 'Client Success Rate',
    description: 'Projects delivered on time and within budget'
  },
  {
    icon: Users,
    value: '50+',
    label: 'Happy Clients',
    description: 'Startups and enterprises worldwide'
  },
  {
    icon: Award,
    value: '5',
    label: 'Years Experience',
    description: 'Building software that scales'
  },
  {
    icon: Clock,
    value: '< 2s',
    label: 'Average Load Time',
    description: 'Performance-optimized applications'
  }
]

const testimonials = [
  {
    quote: "tasawwur transformed our frontend performance and user experience. The results speak for themselves.",
    author: "Alex Chen",
    role: "CTO, Replit",
    company: "Replit"
  },
  {
    quote: "Their AI/ML expertise helped us build a robust document processing pipeline that reduced our processing time by 40%.",
    author: "Sarah Johnson",
    role: "VP Engineering, DocAnalyzer",
    company: "DocAnalyzer"
  },
  {
    quote: "The voice-first approach they implemented tripled our daily active users. Exceptional work.",
    author: "Michael Rodriguez",
    role: "Founder, Wispr Flow",
    company: "Wispr Flow"
  }
]

export default function ProofSection() {
  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Metrics */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {metrics.map((metric, index) => {
            const Icon = metric.icon
            return (
              <motion.div
                key={metric.label}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-accent-teal to-accent-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
                  {metric.value}
                </div>
                <div className="text-lg font-semibold text-foreground mb-2">
                  {metric.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {metric.description}
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Real feedback from teams we've helped achieve their goals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:shadow-large transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-6">
                <div className="text-2xl text-accent-teal mb-4">"</div>
                <p className="text-muted-foreground leading-relaxed">
                  {testimonial.quote}
                </p>
              </div>
              <div className="border-t border-border/50 pt-6">
                <div className="font-semibold text-foreground">
                  {testimonial.author}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.role}
                </div>
                <div className="text-sm text-accent-teal font-medium">
                  {testimonial.company}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
