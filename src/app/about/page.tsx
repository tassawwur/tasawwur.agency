'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Users, Target, Zap, Heart, Award, Globe, Code, Brain } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'


const values = [
  {
    icon: Target,
    title: 'Excellence',
    description: 'We strive for excellence in every project, delivering solutions that exceed expectations and drive real business value.'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We believe in the power of collaboration, working closely with our clients to understand their vision and goals.'
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'We stay at the forefront of technology, using cutting-edge tools and methodologies to build future-ready solutions.'
  },
  {
    icon: Heart,
    title: 'Integrity',
    description: 'We conduct business with honesty, transparency, and integrity, building lasting relationships based on trust.'
  }
]

const team = [
  {
    name: 'Tassawwur Hussain',
    role: 'Founder & Lead Engineer',
    bio: 'Full-stack engineer with expertise in modern web technologies, AI/ML, and software architecture. Passionate about building solutions that make a difference.',
    expertise: ['Next.js', 'React', 'AI/ML', 'Software Architecture']
  }
]

const methodology = [
  {
    step: '01',
    title: 'Discovery & Research',
    description: 'We dive deep into understanding your business, users, and technical requirements to create a solid foundation for success.'
  },
  {
    step: '02',
    title: 'Strategy & Planning',
    description: 'We develop a comprehensive strategy and detailed project plan, ensuring clear milestones and deliverables.'
  },
  {
    step: '03',
    title: 'Design & Prototyping',
    description: 'We create intuitive designs and interactive prototypes that align with your brand and user needs.'
  },
  {
    step: '04',
    title: 'Development & Testing',
    description: 'We build robust, scalable solutions using best practices and thorough testing methodologies.'
  },
  {
    step: '05',
    title: 'Launch & Optimization',
    description: 'We deploy your solution and continuously monitor and optimize for performance and user experience.'
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-pearl to-background">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-accent-teal/10 to-accent-blue/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              About tasawwur.agency
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
              We're passionate about building software that lasts, performs, and elevates. 
              Our mission is to help businesses succeed through innovative technology solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                We believe that technology should serve humanity, not the other way around. 
                Our mission is to create software solutions that are not only technically excellent 
                but also genuinely useful and accessible.
              </p>
              <p className="text-lg text-muted-foreground">
                We work with forward-thinking companies and individuals who share our vision 
                of using technology to solve real-world problems and create meaningful impact.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="text-center border-0 bg-muted/30 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-teal to-accent-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">95%</h3>
                  <p className="text-sm text-muted-foreground">Client Success Rate</p>
                </CardContent>
              </Card>

              <Card className="text-center border-0 bg-muted/30 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-blue to-gold rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">50+</h3>
                  <p className="text-sm text-muted-foreground">Projects Delivered</p>
                </CardContent>
              </Card>

              <Card className="text-center border-0 bg-muted/30 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold to-accent-teal rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Code className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">5</h3>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </CardContent>
              </Card>

              <Card className="text-center border-0 bg-muted/30 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-teal to-accent-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">100%</h3>
                  <p className="text-sm text-muted-foreground">AI-First Approach</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full text-center hover:shadow-large transition-all duration-300 group border-0 bg-background/50 backdrop-blur-sm">
                    <CardHeader>
                      <div className="w-16 h-16 bg-gradient-to-br from-accent-teal to-accent-blue rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-xl font-semibold text-foreground">
                        {value.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-muted-foreground">
                        {value.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Meet the people behind tasawwur.agency
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 bg-muted/30 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="text-center">
                      <div className="w-24 h-24 mx-auto mb-6">
                        <Image
                          src="/images/tasawwur2.jpg"
                          alt={member.name}
                          width={96}
                          height={96}
                          className="rounded-full object-cover w-full h-full"
                        />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {member.name}
                      </h3>
                      <p className="text-accent-teal font-medium mb-4">
                        {member.role}
                      </p>
                      <p className="text-muted-foreground mb-6">
                        {member.bio}
                      </p>
                      <div className="flex flex-wrap justify-center gap-2">
                        {member.expertise.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-accent-teal/10 text-accent-teal text-sm rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Our Methodology
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A proven approach that ensures your project succeeds from start to finish
            </p>
          </motion.div>

          <div className="space-y-8">
            {methodology.map((step, index) => (
              <motion.div
                key={step.step}
                className="flex flex-col lg:flex-row items-center gap-8"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-accent-teal to-accent-blue rounded-2xl flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                </div>
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-2xl font-bold text-foreground mb-4">{step.title}</h3>
                  <p className="text-lg text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-accent-teal/10 to-accent-blue/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss your project and see how we can help you achieve your goals.
            </p>
            <motion.a
              href="/contact"
              className="inline-flex items-center space-x-2 bg-accent-teal hover:bg-accent-teal/90 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Get in Touch</span>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
