'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Work', href: '/work' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

const servicesDropdown = [
  { name: 'Web Development', href: '/services/web-development' },
  { name: 'LLM Engineering', href: '/services/llm-engineering' },
  { name: 'AI/ML Solutions', href: '/services/ai-ml' },
  { name: 'App Development', href: '/services/app-development' },
  { name: 'Software Architecture', href: '/services/software-architecture' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <motion.header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        mounted && isScrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border/50'
          : 'bg-transparent'
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              className="w-8 h-8 bg-gradient-to-br from-accent-teal to-accent-blue rounded-lg flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-white font-bold text-sm">T</span>
            </motion.div>
            <span className="text-xl font-bold text-foreground">tasawwur</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.name === 'Services' ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button className="flex items-center space-x-1 text-foreground hover:text-accent-teal transition-colors">
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          className="absolute top-full left-0 mt-2 w-64 bg-background border border-border rounded-xl shadow-large p-2"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                        >
                          {servicesDropdown.map((service) => (
                            <Link
                              key={service.name}
                              href={service.href}
                              className="block px-4 py-3 text-sm text-foreground hover:bg-muted rounded-lg transition-colors"
                            >
                              {service.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      'text-foreground hover:text-accent-teal transition-colors',
                      isActive(item.href) && 'text-accent-teal'
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              asChild
              className="bg-accent-teal hover:bg-accent-teal/90 text-white"
            >
              <Link href="/contact">Schedule a Call</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-foreground hover:text-accent-teal transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden bg-background/95 backdrop-blur-md border-b border-border/50"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.name === 'Services' ? (
                    <div className="space-y-2">
                      <Link
                        href="/services"
                        className="block text-foreground hover:text-accent-teal transition-colors"
                      >
                        Services
                      </Link>
                      <div className="ml-4 space-y-2">
                        {servicesDropdown.map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            className="block text-sm text-muted-foreground hover:text-accent-teal transition-colors"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        'block text-foreground hover:text-accent-teal transition-colors',
                        isActive(item.href) && 'text-accent-teal'
                      )}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <Button
                asChild
                className="w-full bg-accent-teal hover:bg-accent-teal/90 text-white mt-4"
              >
                <Link href="/contact">Schedule a Call</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
