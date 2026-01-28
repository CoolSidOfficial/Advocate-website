'use client'

import { useEffect, useRef, useState } from 'react'
import { MapPin, Mail, Phone, FileText, MessageSquare, Briefcase, ChevronRight, ChevronLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

declare global {
  interface Window {
    google: any
  }
}

export default function LawyerPortfolio() {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<any>(null)

  useEffect(() => {
    // Load Google Maps
    const loadGoogleMaps = () => {
      if (!window.google && mapRef.current) {
        const script = document.createElement('script')
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDX2nsCisB_7ukSpDl8bXW-8C77bMylMjU`
        script.async = true
        script.defer = true
        script.onload = () => {
          initializeMap()
        }
        document.head.appendChild(script)
      } else if (window.google && mapRef.current) {
        initializeMap()
      }
    }

    const initializeMap = () => {
      if (!mapRef.current || mapInstanceRef.current) return

      const bhopalLocation = { lat: 23.1815, lng: 79.9864 }
      const lakherapuraLocation = { lat: 23.18, lng: 79.98 }

      const map = new window.google.maps.Map(mapRef.current, {
        zoom: 15,
        center: lakherapuraLocation,
        styles: [
          { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
          { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
          { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
          {
            featureType: 'administrative.locality',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#d59563' }],
          },
          {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#d59563' }],
          },
          {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [{ color: '#263c3f' }],
          },
          {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#6b9080' }],
          },
          {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{ color: '#38414e' }],
          },
          {
            featureType: 'road',
            elementType: 'geometry.stroke',
            stylers: [{ color: '#212a37' }],
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [{ color: '#746855' }],
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [{ color: '#1f2835' }],
          },
          {
            featureType: 'road.highway',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#f3791a' }],
          },
          {
            featureType: 'transit',
            elementType: 'geometry',
            stylers: [{ color: '#2f3948' }],
          },
          {
            featureType: 'transit.station',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#d59563' }],
          },
          {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{ color: '#17263c' }],
          },
          {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#515c6d' }],
          },
          {
            featureType: 'water',
            elementType: 'labels.text.stroke',
            stylers: [{ color: '#17263c' }],
          },
        ],
      })

      const marker = new window.google.maps.Marker({
        position: lakherapuraLocation,
        map: map,
        title: 'Adv Palash Kumar Jain - Law Office',
        icon: 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png',
      })

      const infoWindow = new window.google.maps.InfoWindow({
        content: '<div style="color: #000; padding: 10px;"><strong>Adv Palash Kumar Jain</strong><br/>H.N-11 Lakherapura, Bhopal</div>',
      })

      marker.addListener('click', () => {
        infoWindow.open(map, marker)
      })

      mapInstanceRef.current = map
    }

    loadGoogleMaps()
  }, [])

  const caseCategories = [
    { title: 'Family Court', icon: '👨‍👩‍👧', cases: ['Divorce', 'Maintenance', 'Domestic Disputes'] },
    { title: 'Cyber Cases', icon: '💻', cases: ['Digital Fraud', 'Cybercrime', 'Online Disputes'] },
    { title: 'Criminal Law', icon: '⚖️', cases: ['Murder Cases', 'Bail Matters'] },
    { title: 'Financial', icon: '💰', cases: ['Cheque Bounce', 'Consumer Rights'] },
    { title: 'Accident Claims', icon: '🚗', cases: ['Motor Accidents', 'Insurance Claims'] },
    { title: 'Civil Cases', icon: '📋', cases: ['Property Disputes', 'Contracts'] },
  ]

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      {/* Navigation Bar */}
      <nav className="bg-card border-b border-border px-6 py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h3 className="text-accent font-bold text-lg">Adv Palash Kumar Jain</h3>
          <div className="flex gap-8">
           
            <a href="/contact" className="bg-black text-primary px-6 py-2 font-semibold hover:opacity-90 transition">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative min-h-screen  from-background via-card to-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-screen flex items-center justify-between gap-12">
          {/* Left Side - Content */}
          <div className="flex flex-col justify-center flex-1 max-w-2xl">
            {/* Tagline */}
            <p className="text-accent text-lg font-semibold mb-6 tracking-wide">
              Expert Legal Advocate
            </p>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground mb-8 leading-tight">
              Trusted legal solutions for your case
            </h1>

            {/* Description */}
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-xl">
              With 7 years of dedicated practice, I provide comprehensive legal representation across family law, criminal cases, cyber law, and civil litigation. Your case deserves expert advocacy.
            </p>

            {/* CTA Button */}
            <div className="flex gap-6 items-center flex-col sm:flex-row">
              <button className="bg-black text-primary px-8 py-4 font-semibold hover:opacity-90 transition text-base">
                Schedule Consultation
              </button>
              <a href="tel:+919713803772" className="text-accent hover:text-foreground transition font-semibold">
                Call Now: +91 9713803772
              </a>
            </div>

            {/* Quick Info */}
            <div className="mt-12 space-y-3 text-muted-foreground text-sm">
              <p>Adv Palash Kumar Jain • Bhopal, India</p>
              <p>advpalashjain@gmail.com</p>
            </div>
          </div>

          {/* Right Side - Photo */}
          <div className="hidden lg:flex flex-1 justify-end items-center">
            <div className="relative w-80 h-[500px] rounded-lg overflow-hidden border-8 border-secondary shadow-2xl">
              <Image
                src="/lawyer.jpg"
                alt="Adv Palash Kumar Jain"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="bg-card py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-2">7+</div>
              <p className="text-lg text-muted-foreground">Years of Experience</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-2">500+</div>
              <p className="text-lg text-muted-foreground">Cases Handled</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-2">95%</div>
              <p className="text-lg text-muted-foreground">Success Rate</p>
            </div>
          </div>
        </div>
      </div>

      {/* Practice Areas with Images */}
      <div className="bg-background py-20 px-6">
        <div id="cases"></div>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-foreground mb-16 text-center">
            Areas of <span className="text-accent">Practice</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Family Court', icon: '👨‍👩‍👧', cases: ['Divorce', 'Maintenance', 'Domestic Disputes'], image: '/family-law.jpg', link: '/practice/family-court' },
              { title: 'Cyber Cases', icon: '💻', cases: ['Digital Fraud', 'Cybercrime', 'Online Disputes'], image: '/cyber-law.jpg', link: '/practice/cyber-cases' },
              { title: 'Criminal Law', icon: '⚖️', cases: ['Murder Cases', 'Bail Matters'], image: '/criminal-law.jpg', link: '/practice/criminal-law' },
              { title: 'Financial', icon: '💰', cases: ['Cheque Bounce', 'Consumer Rights'], image: '/consumer-law.jpg', link: '/practice/financial' },
              { title: 'Accident Claims', icon: '🚗', cases: ['Motor Accidents', 'Insurance Claims'], image: '/accident-law.jpg', link: '/practice/accident-claims' },
              { title: 'Civil Cases', icon: '📋', cases: ['Property Disputes', 'Contracts'], image: '/criminal-law.jpg', link: '/practice/civil-cases' },
            ].map((category) => (
              <Link key={category.title} href={category.link}>
                <div className="bg-card rounded-lg border border-border hover:border-accent transition duration-300 group overflow-hidden cursor-pointer h-full">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.title}
                      fill
                      className="object-cover group-hover:scale-110 transition duration-300"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition"></div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition">
                      {category.title}
                    </h3>
                    <ul className="space-y-2">
                      {category.cases.map((caseItem) => (
                        <li key={caseItem} className="text-muted-foreground flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                          {caseItem}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-card py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-foreground mb-8">
            Office <span className="text-accent">Location</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Visit Us</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-accent font-semibold mb-2">Address</p>
                  <p className="text-foreground">H.N-11 Lakherapura, Bhopal</p>
                </div>
                <div>
                  <p className="text-accent font-semibold mb-2">Phone</p>
                  <p className="text-foreground">+91 9713803772</p>
                </div>
                <div>
                  <p className="text-accent font-semibold mb-2">Email</p>
                  <p className="text-foreground">advpalashjain@gmail.com</p>
                </div>
                <div>
                  <p className="text-accent font-semibold mb-2">Hours</p>
                  <p className="text-foreground">Monday - Friday: 10:00 AM - 6:00 PM</p>
                  <p className="text-foreground">Saturday: 10:00 AM - 2:00 PM</p>
                  <p className="text-foreground">Sunday: Closed</p>
                </div>
              </div>
            </div>
            <div ref={mapRef} className="w-full h-80 rounded-lg border border-border overflow-hidden"></div>
          </div>
        </div>
      </div>



      {/* Footer */}
      <footer className="bg-card border-t border-border py-8 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <p className="text-muted-foreground">© 2024 Adv Palash Kumar Jain. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/adv-palash-kumar-jain-13157814b/" className="text-muted-foreground hover:text-accent transition">
              LinkedIn
            </a>
            <a href="https://x.com/advpalashjain" className="text-muted-foreground hover:text-accent transition">
              Twitter
            </a>
            <a href="mailto:advpalashjain@gmail.com" className="text-muted-foreground hover:text-accent transition">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
