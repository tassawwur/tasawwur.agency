'use client'

import { motion } from 'framer-motion'
import { ArrowRight, BookOpen, Users, Clock, Star, CheckCircle, MessageCircle } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import coursesData from '@/data/courses.json'


export default function GSoCPrepCoursePage() {
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
            <div className="inline-flex items-center space-x-2 bg-emerald/10 backdrop-blur-sm border border-emerald/20 rounded-full px-4 py-2 mb-8">
              <BookOpen className="w-4 h-4 text-emerald" />
              <span className="text-sm font-medium text-emerald">
                Limited Time Course
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-emerald mb-6">
              {course.title}
            </h1>
            <p className="text-lg sm:text-xl text-leaf mb-8 leading-relaxed">
              {course.description}
            </p>
            <p className="text-base text-leaf/80 mb-8 max-w-3xl mx-auto">
              {course.shortDescription}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-emerald hover:bg-emerald/90 text-white px-8 py-4 text-lg"
                onClick={() => window.open(`https://wa.me/${course.whatsappContact.replace('+', '')}?text=Hi, I'm interested in the GSoC Preparation Course`, '_blank')}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Enroll Now on WhatsApp
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-leaf text-leaf hover:bg-leaf hover:text-white px-8 py-4 text-lg"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                View Syllabus
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Course Details */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Course Info */}
            <div className="lg:col-span-2 space-y-12">
              {/* What You'll Learn */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-emerald mb-6">What You'll Learn</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {course.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 bg-sage/30 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-emerald flex-shrink-0 mt-0.5" />
                      <span className="text-leaf/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Learning Outcomes */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-emerald mb-6">Learning Outcomes</h2>
                <div className="space-y-4">
                  {course.outcomes.map((outcome, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-gold-subtle rounded-full mt-2 flex-shrink-0" />
                      <span className="text-leaf/80">{outcome}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Prerequisites */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-emerald mb-6">Prerequisites</h2>
                <div className="space-y-3">
                  {course.prerequisites.map((prereq, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-silver rounded-full mt-2 flex-shrink-0" />
                      <span className="text-leaf/80">{prereq}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Course Info Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 bg-pure-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-emerald">Course Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-leaf/60" />
                        <span className="text-sm text-leaf/80">Duration</span>
                      </div>
                      <span className="text-sm font-medium text-emerald">{course.duration}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-leaf/60" />
                        <span className="text-sm text-leaf/80">Instructor</span>
                      </div>
                      <span className="text-sm font-medium text-emerald">{course.instructor}</span>
                    </div>

                    <div className="pt-4 border-t border-silver/30">
                      <h4 className="font-medium text-emerald mb-3">Pricing Options</h4>
                      <div className="space-y-3">
                        <div className="p-3 bg-emerald/10 rounded-lg">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-leaf/80">Monthly</span>
                            <span className="font-bold text-emerald">PKR {course.price.monthly.toLocaleString()}</span>
                          </div>
                        </div>
                        <div className="p-3 bg-gold-subtle/20 rounded-lg border border-gold-subtle/30">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-leaf/80">Full Course</span>
                            <span className="font-bold text-emerald">PKR {course.price.full.toLocaleString()}</span>
                          </div>
                          <p className="text-xs text-leaf/60 mt-1">Best Value</p>
                        </div>
                      </div>
                    </div>

                    <Button
                      className="w-full bg-emerald hover:bg-emerald/90 text-white"
                      onClick={() => window.open(`https://wa.me/${course.whatsappContact.replace('+', '')}?text=Hi, I'm interested in the GSoC Preparation Course`, '_blank')}
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Enroll Now
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 bg-sage/30 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-emerald">Get in Touch</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-leaf/80 mb-4">
                      Have questions about the course? Contact us directly:
                    </p>
                    <div className="flex items-center space-x-3">
                      <MessageCircle className="w-4 h-4 text-emerald" />
                      <a
                        href={`https://wa.me/${course.whatsappContact.replace('+', '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-emerald hover:text-leaf transition-colors"
                      >
                        {course.whatsappContact}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Syllabus Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-sage/30 to-emerald/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-emerald mb-6">
              Course Syllabus
            </h2>
            <p className="text-lg text-leaf max-w-3xl mx-auto">
              A comprehensive 12-week program designed to prepare you for GSoC success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {course.syllabus.map((week, index) => (
              <motion.div
                key={week.week}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-large transition-all duration-300 group border-0 bg-pure-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-emerald">Week {week.week}</span>
                      <Star className="w-4 h-4 text-gold-subtle" />
                    </div>
                    <CardTitle className="text-lg font-semibold text-emerald group-hover:text-leaf transition-colors">
                      {week.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {week.topics.map((topic, topicIndex) => (
                        <div key={topicIndex} className="flex items-start space-x-2 text-sm text-leaf/80">
                          <div className="w-1.5 h-1.5 bg-emerald rounded-full mt-2 flex-shrink-0" />
                          <span>{topic}</span>
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

      {/* CTA Section */}
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
              Join our comprehensive course and get the mentorship you need to succeed in Google Summer of Code.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-emerald hover:bg-emerald/90 text-white px-8 py-4 text-lg"
                onClick={() => window.open(`https://wa.me/${course.whatsappContact.replace('+', '')}?text=Hi, I'm interested in the GSoC Preparation Course. Can you provide more details?`, '_blank')}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact for Enrollment
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-leaf text-leaf hover:bg-leaf hover:text-white px-8 py-4 text-lg"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Download Brochure
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
