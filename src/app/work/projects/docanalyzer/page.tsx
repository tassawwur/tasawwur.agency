'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ExternalLink, CheckCircle, TrendingUp, Clock, FileText } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'


export default function DocAnalyzerCaseStudyPage() {
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
                  src="/images/logos/docanalyzer.png"
                  alt="DocAnalyzer Logo"
                  width={200}
                  height={100}
                  className="mx-auto object-contain max-h-20 w-auto"
                />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-emerald mb-6">
                DocAnalyzer
              </h1>
              <p className="text-lg sm:text-xl text-leaf mb-8 leading-relaxed">
                Enterprise onboarding UI and document parsing pipeline integration
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-emerald hover:bg-emerald/90 text-white px-8 py-4 text-lg"
                >
                  <Link href="https://docanalyzer.ai" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                    <ExternalLink className="w-5 h-5" />
                    <span>Visit DocAnalyzer</span>
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results */}
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
              Results
            </h2>
            <p className="text-lg text-leaf max-w-3xl mx-auto">
              Significant improvements in document processing efficiency and enterprise adoption
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 bg-pure-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald to-leaf rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-emerald mb-2">40%</h3>
                  <p className="text-leaf/80">Faster Processing</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 bg-pure-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald to-leaf rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-emerald mb-2">85%</h3>
                  <p className="text-leaf/80">Enterprise Adoption</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 bg-pure-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald to-leaf rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-emerald mb-2">99.2%</h3>
                  <p className="text-leaf/80">Parsing Accuracy</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-sage/30 to-emerald/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-emerald mb-6">
              Need Enterprise Document Processing?
            </h2>
            <p className="text-lg text-leaf mb-8">
              Let's discuss how we can help optimize your document workflows and enterprise integration.
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
