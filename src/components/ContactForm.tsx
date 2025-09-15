'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Send, Upload, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().min(2, 'Company name is required'),
  budget: z.string().min(1, 'Please select a budget range'),
  service: z.string().min(1, 'Please select a service'),
  brief: z.string().min(10, 'Please provide a brief description (at least 10 characters)'),
  consent: z.boolean().refine(val => val === true, 'You must agree to our terms'),
})

type ContactFormData = z.infer<typeof contactSchema>

const budgetRanges = [
  '$10,000 - $25,000',
  '$25,000 - $50,000',
  '$50,000 - $100,000',
  '$100,000+',
  'Not sure yet'
]

const services = [
  'Web Development',
  'LLM Engineering',
  'AI/ML Solutions',
  'App Development',
  'Software Architecture',
  'Technical Consulting',
  'Other'
]

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const formData = new FormData()
      formData.append('name', data.name)
      formData.append('email', data.email)
      formData.append('company', data.company)
      formData.append('budget', data.budget)
      formData.append('service', data.service)
      formData.append('brief', data.brief)
      formData.append('consent', data.consent.toString())
      
      if (uploadedFile) {
        formData.append('file', uploadedFile)
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      })

      if (response.ok) {
        setSubmitStatus('success')
        reset()
        setUploadedFile(null)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      // Validate file type and size
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain']
      const maxSize = 10 * 1024 * 1024 // 10MB

      if (!allowedTypes.includes(file.type)) {
        alert('Please upload a PDF, Word document, or text file')
        return
      }

      if (file.size > maxSize) {
        alert('File size must be less than 10MB')
        return
      }

      setUploadedFile(file)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name and Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
            Full Name *
          </label>
          <input
            {...register('name')}
            type="text"
            id="name"
            className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-transparent transition-colors"
            placeholder="John Doe"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
            Email Address *
          </label>
          <input
            {...register('email')}
            type="email"
            id="email"
            className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-transparent transition-colors"
            placeholder="john@company.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      {/* Company and Budget */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
            Company *
          </label>
          <input
            {...register('company')}
            type="text"
            id="company"
            className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-transparent transition-colors"
            placeholder="Your Company"
          />
          {errors.company && (
            <p className="mt-1 text-sm text-red-500 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.company.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-foreground mb-2">
            Budget Range *
          </label>
          <select
            {...register('budget')}
            id="budget"
            className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-transparent transition-colors"
          >
            <option value="">Select budget range</option>
            {budgetRanges.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
          {errors.budget && (
            <p className="mt-1 text-sm text-red-500 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.budget.message}
            </p>
          )}
        </div>
      </div>

      {/* Service */}
      <div>
        <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
          Service Needed *
        </label>
        <select
          {...register('service')}
          id="service"
          className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-transparent transition-colors"
        >
          <option value="">Select a service</option>
          {services.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
        {errors.service && (
          <p className="mt-1 text-sm text-red-500 flex items-center">
            <AlertCircle className="w-4 h-4 mr-1" />
            {errors.service.message}
          </p>
        )}
      </div>

      {/* Project Brief */}
      <div>
        <label htmlFor="brief" className="block text-sm font-medium text-foreground mb-2">
          Project Brief *
        </label>
        <textarea
          {...register('brief')}
          id="brief"
          rows={4}
          className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-transparent transition-colors resize-none"
          placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
        />
        {errors.brief && (
          <p className="mt-1 text-sm text-red-500 flex items-center">
            <AlertCircle className="w-4 h-4 mr-1" />
            {errors.brief.message}
          </p>
        )}
      </div>

      {/* File Upload */}
      <div>
        <label htmlFor="file" className="block text-sm font-medium text-foreground mb-2">
          Pitch Deck or Project Documents (Optional)
        </label>
        <div className="relative">
          <input
            type="file"
            id="file"
            onChange={handleFileUpload}
            accept=".pdf,.doc,.docx,.txt"
            className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-transparent transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-accent-teal file:text-white hover:file:bg-accent-teal/90"
          />
          {uploadedFile && (
            <div className="mt-2 flex items-center space-x-2 text-sm text-emerald">
              <CheckCircle className="w-4 h-4" />
              <span>{uploadedFile.name}</span>
            </div>
          )}
        </div>
        <p className="mt-1 text-xs text-muted-foreground">
          Upload PDF, Word, or text files (max 10MB)
        </p>
      </div>

      {/* Consent */}
      <div className="flex items-start space-x-3">
        <input
          {...register('consent')}
          type="checkbox"
          id="consent"
          className="mt-1 w-4 h-4 text-accent-teal bg-background border-border rounded focus:ring-accent-teal focus:ring-2"
        />
        <label htmlFor="consent" className="text-sm text-muted-foreground">
          I agree to the{' '}
          <a href="/privacy" className="text-accent-teal hover:underline">
            Privacy Policy
          </a>{' '}
          and consent to being contacted about my project. *
        </label>
      </div>
      {errors.consent && (
        <p className="text-sm text-red-500 flex items-center">
          <AlertCircle className="w-4 h-4 mr-1" />
          {errors.consent.message}
        </p>
      )}

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-accent-teal hover:bg-accent-teal/90 text-white py-4 text-lg"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-5 h-5 mr-2" />
            Send Message
          </>
        )}
      </Button>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-emerald/10 border border-emerald/20 rounded-lg"
        >
          <div className="flex items-center space-x-2 text-emerald">
            <CheckCircle className="w-5 h-5" />
            <span className="font-medium">Message sent successfully!</span>
          </div>
          <p className="mt-1 text-sm text-emerald/80">
            We'll get back to you within 24 hours.
          </p>
        </motion.div>
      )}

      {submitStatus === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-red-50 border border-red-200 rounded-lg"
        >
          <div className="flex items-center space-x-2 text-red-600">
            <AlertCircle className="w-5 h-5" />
            <span className="font-medium">Error sending message</span>
          </div>
          <p className="mt-1 text-sm text-red-500">
            Please try again or contact us directly at tassawwurhussain@tasawwur.agency
          </p>
        </motion.div>
      )}
    </form>
  )
}
