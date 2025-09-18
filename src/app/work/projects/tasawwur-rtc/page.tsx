'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ExternalLink, Github, Code, Zap, Cloud, Cpu, Smartphone, Database, Layers, Users, Key, BarChart3, Settings, Download, Play, Shield, Clock, Globe, CheckCircle, Star, ArrowRight } from 'lucide-react'
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

const dashboardFeatures = [
  {
    icon: Key,
    title: 'API Key Management',
    description: 'Generate, manage, and rotate API keys for secure access to Tasawwur RTC services.',
    action: 'Manage Keys'
  },
  {
    icon: BarChart3,
    title: 'Usage Analytics',
    description: 'Track your video call minutes, concurrent users, and performance metrics in real-time.',
    action: 'View Analytics'
  },
  {
    icon: Settings,
    title: 'Project Settings',
    description: 'Configure your RTC settings, webhooks, and integration preferences.',
    action: 'Configure'
  },
  {
    icon: Download,
    title: 'SDK Downloads',
    description: 'Download the latest Android SDK and access comprehensive documentation.',
    action: 'Download SDK'
  }
]

const pricingPlans = [
  {
    name: 'Free Tier',
    price: '$0',
    period: '/month',
    description: 'Perfect for development and testing',
    features: [
      '1,000 minutes/month',
      'Up to 10 concurrent users',
      'Basic analytics',
      'Community support',
      'Android SDK access'
    ],
    cta: 'Get Started Free',
    popular: false
  },
  {
    name: 'Pro',
    price: '$99',
    period: '/month',
    description: 'Ideal for growing applications',
    features: [
      '10,000 minutes/month',
      'Up to 100 concurrent users',
      'Advanced analytics',
      'Priority support',
      'Webhook integrations',
      'Custom branding'
    ],
    cta: 'Start Pro Trial',
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large-scale deployments',
    features: [
      'Unlimited minutes',
      'Unlimited concurrent users',
      'Custom analytics',
      '24/7 dedicated support',
      'On-premise deployment',
      'SLA guarantee'
    ],
    cta: 'Contact Sales',
    popular: false
  }
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
                Tasawwur RTC Dashboard
              </h1>
              <p className="text-lg sm:text-xl text-leaf mb-8 leading-relaxed max-w-3xl mx-auto">
                The official developer platform for Tasawwur RTC. Sign up, get API keys, and manage your real-time video calling infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-emerald hover:bg-emerald/90 text-white px-8 py-4 text-lg"
                >
                  <Users className="w-5 h-5 mr-2" />
                  <span>Sign Up for Free</span>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-emerald text-emerald hover:bg-emerald hover:text-white px-8 py-4 text-lg"
                >
                  <Link href="https://github.com/tassawwur/tasawwur-rtc" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                    <Github className="w-5 h-5" />
                    <span>View on GitHub</span>
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Start Section */}
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
              Get Started in Minutes
            </h2>
            <p className="text-lg text-leaf max-w-3xl mx-auto">
              Follow these simple steps to integrate Tasawwur RTC into your Android app
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center h-full border-0 bg-pure-white/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald to-leaf rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-emerald">1. Create Account</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-leaf">
                    Sign up for a free account and verify your email address to get started.
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
              <Card className="text-center h-full border-0 bg-pure-white/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald to-leaf rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Key className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-emerald">2. Get API Keys</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-leaf">
                    Create a new project and generate your App ID and App Secret for authentication.
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
              <Card className="text-center h-full border-0 bg-pure-white/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald to-leaf rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Code className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-emerald">3. Integrate SDK</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-leaf">
                    Download the Android SDK and follow our integration guide to add video calling.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dashboard Features Section */}
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
              Dashboard Features
            </h2>
            <p className="text-lg text-leaf max-w-3xl mx-auto">
              Everything you need to manage your RTC infrastructure in one place
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dashboardFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-large transition-all duration-300 group border-0 bg-pure-white/80 backdrop-blur-sm">
                    <CardHeader>
                      <div className="w-16 h-16 bg-gradient-to-br from-emerald to-leaf rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-xl font-semibold text-emerald">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-leaf mb-4">
                        {feature.description}
                      </CardDescription>
                      <Button
                        variant="outline"
                        className="group-hover:bg-emerald group-hover:text-white group-hover:border-emerald transition-all duration-300"
                      >
                        {feature.action}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Code Integration Section */}
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
              Choose Your Plan
            </h2>
            <p className="text-lg text-leaf max-w-3xl mx-auto">
              Start free and scale as you grow. No hidden fees, no surprises.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={`h-full relative border-0 ${plan.popular ? 'bg-emerald/5 border-2 border-emerald' : 'bg-pure-white/80'} backdrop-blur-sm`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-emerald text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-bold text-emerald mb-2">
                      {plan.name}
                    </CardTitle>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-emerald">{plan.price}</span>
                      <span className="text-leaf">{plan.period}</span>
                    </div>
                    <CardDescription className="text-leaf">
                      {plan.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-emerald flex-shrink-0" />
                          <span className="text-leaf">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full ${plan.popular ? 'bg-emerald hover:bg-emerald/90' : 'bg-leaf hover:bg-leaf/90'} text-white`}
                    >
                      {plan.cta}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
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
              Why Choose Tasawwur RTC?
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
                  <Card className="h-full text-center hover:shadow-large transition-all duration-300 group border-0 bg-pure-white/80 backdrop-blur-sm">
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

      {/* Technology Stack Section */}
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
      <section className="py-20 lg:py-32">
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
      <section className="py-20 lg:py-32 bg-gradient-to-br from-emerald/10 to-leaf/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-emerald mb-6">
              Ready to Build Amazing Video Experiences?
            </h2>
            <p className="text-lg text-leaf mb-8">
              Join thousands of developers who trust Tasawwur RTC for their real-time communication needs
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-emerald hover:bg-emerald/90 text-white px-8 py-4 text-lg"
              >
                <Users className="w-5 h-5 mr-2" />
                <span>Get Started Free</span>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-emerald text-emerald hover:bg-emerald hover:text-white px-8 py-4 text-lg"
              >
                <Link href="https://github.com/tassawwur/tasawwur-rtc" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                  <Github className="w-5 h-5" />
                  <span>View Documentation</span>
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