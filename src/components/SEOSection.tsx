'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Star, Users, Award } from 'lucide-react'

export default function SEOSection() {
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
          <h2 className="text-3xl sm:text-4xl font-bold text-maroon mb-6">
            Why Choose Our Software Development Agency?
          </h2>
          <p className="text-lg text-musk-dark max-w-3xl mx-auto">
            Leading web development company with proven expertise in AI/ML solutions, 
            mobile app development, and custom software solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-maroon to-gold-strong rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-maroon mb-2">4.9/5 Rating</h3>
            <p className="text-musk-dark">Top-rated software development agency with excellent client reviews</p>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-maroon to-gold-strong rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-maroon mb-2">50+ Projects</h3>
            <p className="text-musk-dark">Successfully delivered web development and AI/ML projects</p>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-maroon to-gold-strong rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-maroon mb-2">95% Success Rate</h3>
            <p className="text-musk-dark">Proven track record in software development and mobile app development</p>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-maroon to-gold-strong rounded-2xl flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-maroon mb-2">Expert Team</h3>
            <p className="text-musk-dark">Experienced developers specializing in modern technologies</p>
          </motion.div>
        </div>

        {/* SEO Content */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-maroon mb-6">
              Leading Software Development Agency for Web Development & AI Solutions
            </h3>
            <div className="space-y-4 text-musk-dark">
              <p>
                <strong>tasawwur.agency</strong> is a premier software development agency specializing in 
                <strong> web development</strong>, <strong>mobile app development</strong>, and 
                <strong> AI/ML solutions</strong>. Our expert team delivers custom software solutions 
                that drive business growth and innovation.
              </p>
              <p>
                As a trusted <strong>web development company</strong>, we excel in creating 
                high-performance web applications using modern technologies like Next.js, React, 
                and TypeScript. Our <strong>mobile app development</strong> services cover both 
                native and cross-platform solutions.
              </p>
              <p>
                Our <strong>AI/ML solutions</strong> and <strong>LLM engineering</strong> services 
                help businesses leverage artificial intelligence for competitive advantage. 
                From custom AI models to intelligent automation, we deliver cutting-edge solutions.
              </p>
              <p>
                Whether you're a startup looking for <strong>software development services</strong> 
                or an enterprise needing <strong>custom software development</strong>, our agency 
                provides scalable, secure, and high-performance solutions tailored to your needs.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
