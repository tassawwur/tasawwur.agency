'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ExternalLink, Github, Code, Zap, Cloud, Cpu, Smartphone, Database, Layers, Users } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const features = [
  {
    icon: Zap,
    title: 'Ultra-Low Latency',
    description: 'Achieve sub-200ms glass-to-glass latency with a native C++ core powered by WebRTC, ensuring a smooth, real-time experience.'
  },
  {
    icon: Code,
    title: 'Simple Developer API',
    description: 'Integrate in minutes with our modern, intuitive Kotlin SDK. Our developer-first API is designed for simplicity and power.'
  },
  {
    icon: Cloud,
    title: 'Scalable Cloud Backend',
    description: 'Built on a Java/Spring Boot microservices architecture and designed to be deployed on Kubernetes for high availability and scale.'
  }
]

const techStack = [
  { name: 'Kotlin', icon: '🔧' },
  { name: 'C++', icon: '⚡' },
  { name: 'Java', icon: '☕' },
  { name: 'Spring Boot', icon: '🌱' },
  { name: 'React', icon: '⚛️' },
  { name: 'WebRTC', icon: '📡' },
  { name: 'Docker', icon: '🐳' },
  { name: 'Kubernetes', icon: '☸️' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'Google Cloud', icon: '☁️' }
]

export default function TasawwurRTCPage() {
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
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-emerald to-leaf rounded-3xl flex items-center justify-center mb-6">
                  <Smartphone className="w-16 h-16 text-white" />
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-emerald mb-6">
                Build Real-Time Video into Your Android App in Minutes
              </h1>
              <p className="text-lg sm:text-xl text-leaf mb-8 leading-relaxed max-w-3xl mx-auto">
                Tasawwur RTC is a high-performance, open-source Real-Time Communication (RTC) platform and SDK for developers, built with WebRTC, Kotlin/C++, and Java.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-emerald hover:bg-emerald/90 text-white px-8 py-4 text-lg"
                >
                  <Link href="https://github.com/tassawwur/tasawwur-rtc" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                    <Github className="w-5 h-5" />
                    <span>View on GitHub</span>
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-emerald text-emerald hover:bg-emerald hover:text-white px-8 py-4 text-lg"
                >
                  <Link href="https://github.com/tassawwur/tasawwur-rtc#readme" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                    <ExternalLink className="w-5 h-5" />
                    <span>Read the Docs</span>
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem & Solution Section */}
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
                Complex Tech, Simple Solution
              </h2>
              <p className="text-lg text-leaf leading-relaxed">
                Building low-latency, reliable video calling is a massive engineering challenge. Tasawwur RTC provides a simple, powerful SDK that handles all the complexity, allowing developers to focus on creating amazing user experiences.
              </p>
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
                    <Smartphone className="w-12 h-12 text-white" />
                  </div>
                  <p className="text-emerald font-semibold">Real-time Video Calling</p>
                  <p className="text-leaf text-sm">Powered by Helios RTC</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
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
              Key Features
            </h2>
            <p className="text-lg text-leaf max-w-3xl mx-auto">
              The most impressive technical achievements in a developer-friendly package
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full text-center hover:shadow-large transition-all duration-300 group border-0 bg-white/50 backdrop-blur-sm">
                    <CardHeader>
                      <div className="w-16 h-16 bg-gradient-to-br from-emerald to-leaf rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-xl font-semibold text-emerald">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-leaf">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Architecture Section */}
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
              Built for Performance and Scale
            </h2>
            <p className="text-lg text-leaf max-w-3xl mx-auto">
              A comprehensive architecture designed for enterprise-grade performance and scalability
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-emerald/10 to-leaf/10 rounded-3xl p-8 lg:p-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald to-leaf rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-emerald mb-2">Android SDK</h3>
                <p className="text-sm text-leaf">Kotlin + C++ + WebRTC</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald to-leaf rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Cloud className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-emerald mb-2">Signaling Server</h3>
                <p className="text-sm text-leaf">Java Spring Boot</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald to-leaf rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Layers className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-emerald mb-2">Kubernetes</h3>
                <p className="text-sm text-leaf">Scalable Infrastructure</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald to-leaf rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-emerald mb-2">Database</h3>
                <p className="text-sm text-leaf">PostgreSQL + Redis</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Code Integration Section */}
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
              Simple Integration. Powerful Results.
            </h2>
            <p className="text-lg text-leaf max-w-3xl mx-auto">
              Get video calling working in your Android app with just a few lines of code
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-900 rounded-2xl p-8 max-w-4xl mx-auto"
          >
            <pre className="text-green-400 text-sm overflow-x-auto">
              <code>{`1. Add to your project
dependencies {
    implementation 'com.tasawwur:rtc-sdk:1.0.0'
}

2. Initialize the engine
val config = TasawwurRtcConfig.Builder()
    .setAppId("your-app-id")
    .build()

val engine = TasawwurRtcEngine.create(context, config)

3. Join a video call
// Setup video views
engine.setupLocalVideo(localVideoView)
engine.setupRemoteVideo(remoteVideoView, "remote-user")

// Join channel with token
val result = engine.joinChannel(token, "my-channel", "user-123")

That's it! You now have video calling in your Android app.`}</code>
            </pre>
          </motion.div>
        </div>
      </section>

      {/* Technology Stack Section */}
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
              Powered by Industry-Standard Technologies
            </h2>
            <p className="text-lg text-leaf max-w-3xl mx-auto">
              Built with the best tools and frameworks for performance and reliability
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-5 gap-6"
          >
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-emerald/20 to-leaf/10 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="text-3xl mb-2">{tech.icon}</div>
                <span className="text-emerald font-medium">{tech.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Creator Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-emerald/10 to-leaf/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <Image
                src="/images/tasawwur_hussain.jpg"
                alt="Tasawwur Hussain"
                width={120}
                height={120}
                className="mx-auto rounded-full object-cover"
              />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-emerald mb-6">
              About the Creator
            </h2>
            <p className="text-lg text-leaf leading-relaxed max-w-3xl mx-auto mb-8">
              Tasawwur Hussain, a passionate and self-taught software engineer from Pakistan. Built Tasawwur-RTC as a deep dive into distributed systems, platform engineering, and creating high-quality developer tools. He is driven by solving complex problems and building software that empower others.
            </p>
            <div className="flex justify-center space-x-4">
              <Button
                asChild
                variant="outline"
                className="border-2 border-emerald text-emerald hover:bg-emerald hover:text-white"
              >
                <Link href="https://github.com/tassawwur" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                  <Github className="w-5 h-5" />
                  <span>GitHub</span>
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
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
              Ready to Dive In?
            </h2>
            <p className="text-lg text-leaf mb-8">
              Explore the code, contribute to the project, or integrate it into your next Android app
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-emerald hover:bg-emerald/90 text-white px-8 py-4 text-lg"
              >
                <Link href="https://github.com/tassawwur/tasawwur-rtc" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                  <Github className="w-5 h-5" />
                  <span>Explore the Code on GitHub</span>
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-emerald text-emerald hover:bg-emerald hover:text-white px-8 py-4 text-lg"
              >
                <Link href="https://github.com/tassawwur/tasawwur-rtc#readme" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                  <ExternalLink className="w-5 h-5" />
                  <span>Read the Documentation</span>
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-emerald/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-leaf mb-4">© 2025 Tasawwur Hussain</p>
            <div className="flex justify-center space-x-4">
              <Link href="https://github.com/tassawwur" target="_blank" rel="noopener noreferrer" className="text-emerald hover:text-leaf transition-colors">
                <Github className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
