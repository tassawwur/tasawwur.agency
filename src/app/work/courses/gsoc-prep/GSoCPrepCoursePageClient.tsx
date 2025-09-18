'use client'

import { motion } from 'framer-motion'
import { ArrowRight, BookOpen, Users, Clock, Star, CheckCircle, MessageCircle } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import coursesData from '@/data/courses.json'
import GSoCSEOSection from '@/components/GSoCSEOSection'


export default function GSoCPrepCoursePageClient() {
  const course = coursesData[0]

  return (
    <div className="min-h-screen bg-gradient-to-br from-sage/30 via-pure-white to-sage/20">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-emerald/10 to-leaf/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-emerald to-leaf rounded-3xl flex items-center justify-center mb-6">
                <BookOpen className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-emerald mb-6">
              {course.title}
            </h1>
            <p className="text-lg sm:text-xl text-leaf mb-8 leading-relaxed max-w-3xl mx-auto">
              {course.description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-emerald hover:bg-emerald/90 text-white px-8 py-4 text-lg"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                <span>Enroll Now</span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-leaf text-leaf hover:bg-leaf hover:text-white px-8 py-4 text-lg"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                <span>Contact Mentor</span>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Course Overview Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-emerald mb-6">
                Course Overview
              </h2>
              <p className="text-lg text-leaf leading-relaxed mb-6">
                {course.shortDescription}
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-emerald" />
                  <span className="text-leaf">Duration: {course.duration}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-emerald" />
                  <span className="text-leaf">Instructor: {course.instructor}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-emerald" />
                  <span className="text-leaf">Format: Online Mentorship</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-emerald/20 to-leaf/20 rounded-2xl p-8 h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-emerald to-leaf rounded-2xl flex items-center justify-center mb-4">
                    <BookOpen className="w-12 h-12 text-white" />
                  </div>
                  <p className="text-emerald font-semibold">Comprehensive Learning</p>
                  <p className="text-leaf text-sm">From basics to advanced strategies</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
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
              What You'll Learn
            </h2>
            <p className="text-lg text-leaf max-w-3xl mx-auto">
              Comprehensive skills and knowledge to succeed in Google Summer of Code
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {course.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-0 bg-pure-white/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-emerald to-leaf rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-emerald mb-2">
                          {feature}
                        </h3>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-emerald mb-6">
              Course Curriculum
            </h2>
            <p className="text-lg text-leaf max-w-3xl mx-auto">
              Structured learning path designed for GSoC success
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {course.syllabus.map((week, index) => (
              <motion.div
                key={week.week}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <Card className="border-0 bg-pure-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald to-leaf rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">{week.week}</span>
                      </div>
                      <div>
                        <CardTitle className="text-xl font-semibold text-emerald">
                          {week.title}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {week.topics.map((topic, topicIndex) => (
                        <div key={topicIndex} className="flex items-center space-x-3">
                          <div className="w-1.5 h-1.5 bg-emerald rounded-full" />
                          <span className="text-leaf">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
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
              Course Pricing
            </h2>
            <p className="text-lg text-leaf max-w-3xl mx-auto">
              Choose the payment plan that works best for you
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-0 bg-pure-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-emerald mb-4">Monthly Payment</h3>
                    <div className="text-4xl font-bold text-emerald mb-2">
                      PKR {course.price.monthly.toLocaleString()}
                    </div>
                    <p className="text-leaf mb-6">Per month for {course.duration}</p>
                    <Button className="w-full bg-emerald hover:bg-emerald/90 text-white">
                      Start Monthly Plan
                    </Button>
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-emerald mb-4">Full Course Payment</h3>
                    <div className="text-4xl font-bold text-emerald mb-2">
                      PKR {course.price.full.toLocaleString()}
                    </div>
                    <p className="text-leaf mb-6">One-time payment (Save 20%)</p>
                    <Button className="w-full bg-leaf hover:bg-leaf/90 text-white">
                      Pay Full Amount
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* GSoC SEO Section */}
      <GSoCSEOSection />

      {/* Contact Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-emerald mb-6">
              Ready to Start Your GSoC Journey?
            </h2>
            <p className="text-lg text-leaf mb-8">
              Join our comprehensive preparation course and get ready for Google Summer of Code 2026
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-emerald hover:bg-emerald/90 text-white px-8 py-4 text-lg"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                <span>Enroll Now</span>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-leaf text-leaf hover:bg-leaf hover:text-white px-8 py-4 text-lg"
              >
                <a href={`https://wa.me/${course.whatsappContact}`} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                  <MessageCircle className="w-5 h-5" />
                  <span>Contact on WhatsApp</span>
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
