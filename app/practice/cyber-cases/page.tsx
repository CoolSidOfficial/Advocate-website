'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function CyberCasesPage() {
  const recentCases = [
    {
      id: 1,
      title: 'Online Fraud and Digital Theft',
      description: 'Represented victim of online banking fraud involving account compromise and fund theft.',
      outcome: 'Recovered stolen funds and secured criminal prosecution of offenders',
      year: 2024,
      status: 'Won'
    },
    {
      id: 2,
      title: 'Defamation through Social Media',
      description: 'Pursued civil case against individual for spreading false information and damaging reputation online.',
      outcome: 'Obtained damages of Rs. 5 lakhs and court order for content removal',
      year: 2024,
      status: 'Won'
    },
    {
      id: 3,
      title: 'Hacking and Unauthorized Access',
      description: 'Handled case of email account hacking causing identity theft and unauthorized transactions.',
      outcome: 'Secured criminal complaint and recovery of hacked account with data restoration',
      year: 2023,
      status: 'Won'
    },
    {
      id: 4,
      title: 'Cyberstalking and Online Harassment',
      description: 'Represented victim of persistent online harassment and cyberstalking threats.',
      outcome: 'Obtained cyber protection order and perpetrator faced criminal charges',
      year: 2023,
      status: 'Won'
    }
  ]

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="bg-card border-b border-border px-6 py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="flex items-center gap-2 text-accent hover:text-foreground transition">
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-b from-card to-background py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Cyber <span className="text-accent">Law</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mb-8">
            Specialized legal expertise in cybercrime, online fraud, digital security violations, and cyber harassment. I help victims navigate complex digital crimes and secure justice in the digital age.
          </p>

          <div className="relative md:ml-36 h-96 rounded-lg overflow-hidden border-4 border-accent w-full md:w-2/3">
            <Image
              src="/cyber-law.jpg"
              alt="Cyber law"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Practice Details */}
      <div className="bg-background py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">What I Handle</h2>
              <ul className="space-y-4">
                {['Online Fraud and Phishing', 'Identity Theft Cases', 'Hacking and Data Breach', 'Cyberstalking and Harassment', 'Defamation Online', 'Email Account Compromise', 'Digital Piracy', 'Payment Fraud'].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-primary flex items-center justify-center font-bold text-sm mt-1 flex-shrink-0">✓</span>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Why Choose Me</h2>
              <ul className="space-y-4">
                {['Expert in Cyber Crime Laws', 'Digital Evidence Collection Knowledge', 'Experience with Tech Companies', 'Quick Case Resolution', 'Understanding of IT Security', 'Proven Success in Cyber Cases', 'Available for Emergency Cases', 'Strategic Approach to Complex Cases'].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-primary flex items-center justify-center font-bold text-sm mt-1 flex-shrink-0">★</span>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Cases */}
      <div className="bg-card py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
            Recent <span className="text-accent">Case Results</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recentCases.map((caseItem) => (
              <div key={caseItem.id} className="bg-background border border-border rounded-lg p-8 hover:border-accent transition">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{caseItem.title}</h3>
                    <p className="text-muted-foreground">{caseItem.year}</p>
                  </div>
                  <span className="bg-accent text-primary px-4 py-2 rounded-full font-semibold text-sm">
                    {caseItem.status}
                  </span>
                </div>

                <p className="text-foreground mb-4">{caseItem.description}</p>

                <div className="bg-card p-4 rounded-lg border border-border">
                  <p className="text-accent font-semibold mb-2">Outcome:</p>
                  <p className="text-muted-foreground">{caseItem.outcome}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-accent to-secondary py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Victim of Cybercrime?</h2>
          <p className="text-xl text-white/90 mb-8">
            Don't face digital crimes alone. Contact me for expert legal guidance and aggressive representation.
          </p>
          <div className="flex gap-4 justify-center flex-col sm:flex-row">
            <a href="tel:+919713803772" className="bg-white text-accent px-8 py-4 font-bold rounded-lg hover:bg-opacity-90 transition inline-block">
              Call +91 9713803772
            </a>
            <a href="mailto:advpalashjain@gmail.com" className="border-2 border-white text-white px-8 py-4 font-bold rounded-lg hover:bg-white hover:text-accent transition inline-block">
              Email Me
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <p className="text-muted-foreground">© 2024 Adv Palash Kumar Jain. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="text-muted-foreground hover:text-accent transition">
              LinkedIn
            </a>
            <a href="#" className="text-muted-foreground hover:text-accent transition">
              Twitter
            </a>
            <a href="/" className="text-muted-foreground hover:text-accent transition">
              Home
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
