'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Star, Users, Award, BookOpen, Code } from 'lucide-react'

export default function GSoCSEOSection() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-emerald/10 to-leaf/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-emerald mb-6">
            Best GSoC 2026 Preparation Course | Google Summer of Code Training
          </h2>
          <p className="text-lg text-leaf max-w-3xl mx-auto">
            Master Google Summer of Code 2026 with our comprehensive preparation course. 
            Expert mentorship, proven strategies, and 95% success rate.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-emerald to-leaf rounded-2xl flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-emerald mb-2">12-Week Program</h3>
            <p className="text-leaf">Comprehensive GSoC preparation course with structured learning path</p>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-emerald to-leaf rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-emerald mb-2">Expert Mentorship</h3>
            <p className="text-leaf">Weekly mentorship sessions with experienced GSoC mentors</p>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-emerald to-leaf rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Code className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-emerald mb-2">Open Source Focus</h3>
            <p className="text-leaf">Hands-on experience with real open source projects</p>
          </motion.div>
        </div>

        {/* GSoC SEO Content */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-pure-white/80 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-emerald mb-6">
              GSoC 2026 Preparation Course | Google Summer of Code Training Program
            </h3>
            <div className="space-y-4 text-leaf">
              <p>
                Prepare for <strong>Google Summer of Code 2026</strong> with our comprehensive 
                <strong> GSoC preparation course</strong>. Our <strong>GSoC training program</strong> 
                provides expert mentorship and proven strategies to help you succeed in the 
                competitive application process.
              </p>
              <p>
                Our <strong>GSoC 2026 preparation course</strong> covers everything from open source 
                contribution basics to advanced technical interview preparation. Learn from 
                experienced mentors who have successfully guided students through the 
                <strong> Google Summer of Code</strong> program.
              </p>
              <p>
                The <strong>GSoC preparation course</strong> includes hands-on experience with 
                real open source projects, mock interviews, and personalized feedback. 
                Our <strong>GSoC mentorship</strong> program has a 95% success rate in helping 
                students get selected for <strong>Google Summer of Code</strong>.
              </p>
              <p>
                Whether you're new to open source or looking to improve your 
                <strong> GSoC application</strong>, our <strong>GSoC training</strong> program 
                provides the guidance and support you need to succeed in 
                <strong> Google Summer of Code 2026</strong>.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
