'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-pearl to-background">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent-teal/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-blue/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center space-x-2 bg-muted/50 backdrop-blur-sm border border-border/50 rounded-full px-4 py-2 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles className="w-4 h-4 text-accent-teal" />
            <span className="text-sm font-medium text-foreground">
              Trusted by innovative startups worldwide
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We build software that{' '}
            <span className="bg-gradient-to-r from-accent-teal to-accent-blue bg-clip-text text-transparent">
              lasts
            </span>
            ,{' '}
            <span className="bg-gradient-to-r from-accent-blue to-gold bg-clip-text text-transparent">
              performs
            </span>
            , and{' '}
            <span className="bg-gradient-to-r from-gold to-accent-teal bg-clip-text text-transparent">
              elevates
            </span>
            .
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Web apps, LLM systems, AI solutions, and mobile apps. Fast, secure, 
            architected for scale, designed for humans.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-accent-teal hover:bg-accent-teal/90 text-white px-8 py-4 text-lg"
            >
              <Link href="/contact" className="flex items-center space-x-2">
                <span>Schedule a technical call</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-accent-blue text-accent-blue hover:bg-accent-blue hover:text-white px-8 py-4 text-lg"
            >
              <Link href="/work">See our work</Link>
            </Button>
          </motion.div>

          {/* Trust Bar */}
          <motion.div
            className="border-t border-border/50 pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <p className="text-sm text-muted-foreground mb-6">Trusted by</p>
            <div className="flex items-center justify-center space-x-8 opacity-60">
              {/* Placeholder logos - replace with actual client logos */}
              <div className="text-2xl font-bold text-muted-foreground">Replit</div>
              <div className="text-2xl font-bold text-muted-foreground">DocAnalyzer</div>
              <div className="text-2xl font-bold text-muted-foreground">Wispr Flow</div>
              <div className="text-2xl font-bold text-muted-foreground">Galen AI</div>
              <div className="text-2xl font-bold text-muted-foreground">Plexe</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
