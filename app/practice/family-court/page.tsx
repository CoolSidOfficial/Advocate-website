'use client'

import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Mail, Phone, ArrowLeft } from 'lucide-react'

export default function FamilyCourtPage() {
  const recentCases = [
    {
      id: 1,
      title: 'Divorce Settlement Case',
      description: 'Successfully negotiated a favorable divorce settlement involving property division and custody arrangements.',
      outcome: 'Client received 60% of joint assets and primary custody of children',
      year: 2024,
      status: 'Won'
    },
    {
      id: 2,
      title: 'Maintenance Recovery',
      description: 'Helped client recover unpaid maintenance dues from spouse in family court.',
      outcome: 'Secured 5 years of pending maintenance plus 12% interest',
      year: 2024,
      status: 'Won'
    },
    {
      id: 3,
      title: 'Domestic Violence Case',
      description: 'Obtained protection order and legal remedies for domestic violence victim.',
      outcome: 'Secured protection order and monthly financial support for client and children',
      year: 2023,
      status: 'Won'
    },
    {
      id: 4,
      title: 'Custody Dispute',
      description: 'Represented client in contested custody battle involving minor children.',
      outcome: 'Obtained full custody with visitation rights for the other parent',
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
            Family Court <span className="text-accent">Law</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mb-8">
            Expert representation in family law matters including divorce, maintenance, custody disputes, and domestic violence cases. With 7 years of experience, I provide compassionate yet aggressive advocacy for your family's future.
          </p>

          <div className="relative h-96 rounded-lg overflow-hidden border-4 border-accent w-full md:w-2/3">
            <Image
              src="/family-law.jpg"
              alt="Family law"
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
                {['Divorce and Separation', 'Spousal Maintenance', 'Child Custody and Guardianship', 'Domestic Violence Protection Orders', 'Property Division', 'Marriage Dissolution', 'Alimony Cases', 'Children Support Orders'].map((item) => (
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
                {['7+ Years of Family Law Experience', 'Compassionate Approach to Sensitive Cases', 'Strategic Negotiations Skills', 'Proven Track Record of Success', 'Clear Communication with Clients', 'Affordable Legal Fees', 'Quick Case Resolution', 'Expert in Court Representation'].map((item) => (
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
          <h2 className="text-4xl font-bold text-primary mb-6">Need Legal Help with Family Matters?</h2>
          <p className="text-xl text-primary/90 mb-8">
            Contact me for a free initial consultation. I'm here to help you navigate family law matters with compassion and expertise.
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
