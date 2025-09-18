export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "tasawwur.agency",
    "url": "https://tasawwur.agency",
    "logo": "https://tasawwur.agency/logo.png",
    "description": "Leading software development agency specializing in web applications, AI/ML solutions, mobile apps, and LLM engineering.",
    "foundingDate": "2024",
    "founder": {
      "@type": "Person",
      "name": "Tasawwur Hussain"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "PK"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+92-315-629-3975",
      "contactType": "customer service",
      "email": "tasawwur@tasawwur.agency"
    },
    "sameAs": [
      "https://github.com/tasawwur",
      "https://linkedin.com/in/tasawwur",
      "https://twitter.com/tasawwur"
    ],
    "serviceType": [
      "Software Development",
      "Web Development",
      "AI/ML Solutions",
      "Mobile App Development",
      "LLM Engineering",
      "Software Architecture"
    ],
    "offers": [
      {
        "@type": "Offer",
        "name": "Web Development Services",
        "description": "Modern web applications built with Next.js, React, and TypeScript",
        "priceRange": "$300-$5000"
      },
      {
        "@type": "Offer",
        "name": "AI/ML Solutions",
        "description": "Custom AI and machine learning solutions for businesses",
        "priceRange": "$1000-$5000"
      },
      {
        "@type": "Offer",
        "name": "Mobile App Development",
        "description": "Native and cross-platform mobile applications",
        "priceRange": "$2000-$5000"
      }
    ]
  }

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "GSoC 2026 Preparation Course",
    "description": "Comprehensive preparation course for Google Summer of Code 2026 with expert mentorship",
    "provider": {
      "@type": "Organization",
      "name": "tasawwur.agency",
      "url": "https://tasawwur.agency"
    },
    "instructor": {
      "@type": "Person",
      "name": "Tasawwur Hussain"
    },
    "courseMode": "online",
    "educationalLevel": "intermediate",
    "timeRequired": "P12W",
    "offers": {
      "@type": "Offer",
      "price": "35000",
      "priceCurrency": "PKR",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "50"
    }
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Software Development Services",
    "description": "Comprehensive software development services including web applications, AI/ML solutions, mobile apps, and LLM engineering",
    "provider": {
      "@type": "Organization",
      "name": "tasawwur.agency"
    },
    "serviceType": "Software Development",
    "areaServed": "Worldwide",
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://tasawwur.agency/services"
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  )
}
