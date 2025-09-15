'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ExternalLink, CheckCircle, TrendingUp, Users, Mic } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function WisprFlowCaseStudyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sage/30 via-pure-white to-sage/20">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-emerald/10 to-leaf/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <Button
                asChild
                variant="outline"
                className="mb-6"
              >
                <Link href="/work" className="flex items-center space-x-2">
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Work</span>
                </Link>
              </Button>
            </div>

            <div className="text-center">
              <div className="mb-8">
                <Image
                  src="/images/logos/Wispr_Flow_Logo.jpg"
                  alt="Wispr Flow Logo"
                  width={200}
                  height={100}
                  className="mx-auto object-contain max-h-20 w-auto"
                />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-emerald mb-6">
                Wispr Flow
              </h1>
              <p className="text-lg sm:text-xl text-leaf mb-8 leading-relaxed">
                Voice-first conversion flow and real-time speech-to-text implementation
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-emerald hover:bg-emerald/90 text-white px-8 py-4 text-lg"
                >
                  <Link href="https://wisprflow.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                    <ExternalLink className="w-5 h-5" />
                    <span>Visit Website</span>
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-emerald text-emerald hover:bg-emerald hover:text-white px-8 py-4 text-lg"
                >
                  <Link href="/work" className="flex items-center space-x-2">
                    <ArrowLeft className="w-5 h-5" />
                    <span>View More Projects</span>
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenge Section */}
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
                The Challenge
              </h2>
              <p className="text-lg text-leaf leading-relaxed mb-6">
                Wispr Flow needed to implement a voice-first user experience that could handle real-time speech-to-text conversion while maintaining high accuracy and low latency for their conversion flow optimization.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-leaf">Real-time speech recognition accuracy</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-leaf">Voice-first conversion flow optimization</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-leaf">Seamless user experience integration</p>
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
                  <Mic className="w-16 h-16 text-emerald mx-auto mb-4" />
                  <p className="text-emerald font-semibold">Voice-First Experience</p>
                  <p className="text-leaf text-sm">Real-time STT Integration</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
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
              Our Solution
            </h2>
            <p className="text-lg text-leaf max-w-3xl mx-auto">
              Implemented a comprehensive voice-first conversion flow with real-time speech-to-text capabilities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-large transition-all duration-300 group border-0 bg-white/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald to-leaf rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Mic className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-emerald text-center">
                    Real-time STT
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-leaf text-center">
                    Implemented high-accuracy speech-to-text with sub-100ms latency for seamless voice interactions
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-large transition-all duration-300 group border-0 bg-white/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald to-leaf rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-emerald text-center">
                    Conversion Optimization
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-leaf text-center">
                    Designed voice-first conversion flows that increased user engagement and completion rates
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-large transition-all duration-300 group border-0 bg-white/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald to-leaf rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-emerald text-center">
                    User Experience
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-leaf text-center">
                    Created intuitive voice interactions that made the platform more accessible and engaging
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results Section */}
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
              Results & Impact
            </h2>
            <p className="text-lg text-leaf max-w-3xl mx-auto">
              The voice-first implementation delivered significant improvements in user engagement and platform adoption
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-emerald mb-2">3x</div>
              <p className="text-leaf">Increase in daily active users</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-emerald mb-2">&lt;100ms</div>
              <p className="text-leaf">Speech-to-text latency</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-emerald mb-2">95%</div>
              <p className="text-leaf">Voice recognition accuracy</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-emerald mb-2">40%</div>
              <p className="text-leaf">Higher conversion rate</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
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
              Technology Stack
            </h2>
            <p className="text-lg text-leaf max-w-3xl mx-auto">
              Built with modern technologies for optimal performance and scalability
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {['Next.js', 'WebRTC', 'TensorFlow', 'Node.js'].map((tech, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-emerald/20 to-leaf/10 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300"
              >
                <span className="text-emerald font-medium">{tech}</span>
              </div>
            ))}
          </motion.div>
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
              Ready to Build Your Voice-First Experience?
            </h2>
            <p className="text-lg text-leaf mb-8">
              Let's discuss how we can help you implement voice-first features and optimize your conversion flows.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-emerald hover:bg-emerald/90 text-white px-8 py-4 text-lg"
            >
              <Link href="/contact" className="flex items-center space-x-2">
                <span>Start Your Project</span>
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
