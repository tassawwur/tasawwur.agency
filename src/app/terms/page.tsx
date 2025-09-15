'use client'

import { motion } from 'framer-motion'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-pearl to-background">
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-8">
              Terms of Service
            </h1>
            <p className="text-muted-foreground mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground mb-4">
                  By accessing and using tasawwur.agency, you accept and agree to be bound by the 
                  terms and provision of this agreement. If you do not agree to abide by the above, 
                  please do not use this service.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Use License</h2>
                <p className="text-muted-foreground mb-4">
                  Permission is granted to temporarily download one copy of the materials on 
                  tasawwur.agency for personal, non-commercial transitory viewing only. This is 
                  the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to reverse engineer any software contained on the website</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Services</h2>
                <p className="text-muted-foreground mb-4">
                  tasawwur.agency provides software engineering, web development, AI/ML solutions, 
                  and related services. All services are provided subject to separate service 
                  agreements and project specifications.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Intellectual Property</h2>
                <p className="text-muted-foreground mb-4">
                  The content, organization, graphics, design, compilation, magnetic translation, 
                  digital conversion, and other matters related to the website are protected under 
                  applicable copyrights, trademarks, and other proprietary rights.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Disclaimer</h2>
                <p className="text-muted-foreground mb-4">
                  The materials on tasawwur.agency are provided on an 'as is' basis. tasawwur.agency 
                  makes no warranties, expressed or implied, and hereby disclaims and negates all 
                  other warranties including without limitation, implied warranties or conditions of 
                  merchantability, fitness for a particular purpose, or non-infringement of intellectual 
                  property or other violation of rights.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Limitations</h2>
                <p className="text-muted-foreground mb-4">
                  In no event shall tasawwur.agency or its suppliers be liable for any damages 
                  (including, without limitation, damages for loss of data or profit, or due to 
                  business interruption) arising out of the use or inability to use the materials 
                  on tasawwur.agency, even if tasawwur.agency or an authorized representative has 
                  been notified orally or in writing of the possibility of such damage.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Accuracy of Materials</h2>
                <p className="text-muted-foreground mb-4">
                  The materials appearing on tasawwur.agency could include technical, typographical, 
                  or photographic errors. tasawwur.agency does not warrant that any of the materials 
                  on its website are accurate, complete, or current.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Links</h2>
                <p className="text-muted-foreground mb-4">
                  tasawwur.agency has not reviewed all of the sites linked to its website and is not 
                  responsible for the contents of any such linked site. The inclusion of any link 
                  does not imply endorsement by tasawwur.agency of the site.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">9. Modifications</h2>
                <p className="text-muted-foreground mb-4">
                  tasawwur.agency may revise these terms of service at any time without notice. By 
                  using this website, you are agreeing to be bound by the then current version of 
                  these terms of service.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">10. Governing Law</h2>
                <p className="text-muted-foreground mb-4">
                  These terms and conditions are governed by and construed in accordance with the 
                  laws and you irrevocably submit to the exclusive jurisdiction of the courts in 
                  that state or location.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">11. Contact Information</h2>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <div className="bg-muted/30 p-4 rounded-lg">
                  <p className="text-muted-foreground">
                    Email: tassawwurhussain@tasawwur.agency<br />
                    Website: https://tasawwur.agency
                  </p>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
