import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const company = formData.get('company') as string
    const budget = formData.get('budget') as string
    const service = formData.get('service') as string
    const brief = formData.get('brief') as string
    const consent = formData.get('consent') as string
    const file = formData.get('file') as File | null

    // Basic validation
    if (!name || !email || !company || !budget || !service || !brief || !consent) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Prepare email content
    const emailContent = `
New Contact Form Submission

Name: ${name}
Email: ${email}
Company: ${company}
Budget Range: ${budget}
Service: ${service}

Project Brief:
${brief}

Consent: ${consent === 'true' ? 'Yes' : 'No'}

${file ? `File attached: ${file.name} (${file.size} bytes)` : 'No file attached'}

---
Sent from tasawwur.agency contact form
    `.trim()

    // Here you would integrate with your email service
    // For now, we'll just log the submission
    console.log('Contact form submission:', {
      name,
      email,
      company,
      budget,
      service,
      brief,
      consent,
      hasFile: !!file,
      timestamp: new Date().toISOString()
    })

    // TODO: Implement actual email sending
    // You can use services like SendGrid, Nodemailer, or AWS SES
    // Example with SendGrid:
    /*
    const sgMail = require('@sendgrid/mail')
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    
    const msg = {
      to: 'tassawwurhussain@tasawwur.agency',
      from: 'noreply@tasawwur.agency',
      subject: `New Contact Form Submission from ${name}`,
      text: emailContent,
      html: emailContent.replace(/\n/g, '<br>'),
    }
    
    if (file) {
      msg.attachments = [{
        content: Buffer.from(await file.arrayBuffer()).toString('base64'),
        filename: file.name,
        type: file.type,
        disposition: 'attachment'
      }]
    }
    
    await sgMail.send(msg)
    */

    // TODO: Implement file storage if needed
    // You can store files in AWS S3, Google Cloud Storage, etc.
    if (file) {
      // For now, just log file info
      console.log('File details:', {
        name: file.name,
        size: file.size,
        type: file.type
      })
    }

    return NextResponse.json(
      { 
        message: 'Message sent successfully',
        timestamp: new Date().toISOString()
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
