'use client'

import React from "react"

import { MapPin, Mail, Phone, Home } from 'lucide-react'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Here you would typically send the form data to a server
    alert('Thank you for reaching out! We will contact you soon.')
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      {/* Navigation Bar */}
      <nav className="bg-card border-b border-border px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <a href="/" className="text-accent font-bold text-lg hover:opacity-80 transition">
            ← Back to Home
          </a>
        </div>
      </nav>

      {/* Contact Section */}
      <div className="min-h-screen bg-background py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-lg overflow-hidden shadow-2xl">
            {/* Left Side - Contact Information */}
            <div className="bg-card p-12 lg:p-16 flex flex-col justify-center">
              <h2 className="text-5xl font-bold text-foreground mb-2">Contact Info</h2>
              <div className="w-20 h-1 bg-accent mb-8"></div>

              <p className="text-muted-foreground text-lg leading-relaxed mb-12">
                Get in touch with Adv Palash Kumar Jain for expert legal counsel. Whether you need consultation or representation, we're here to help resolve your legal matters.
              </p>

              {/* Contact Details */}
              <div className="space-y-8">
                {/* Office Address */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Home className="w-8 h-8 text-accent mt-1" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Office Address</h3>
                    <p className="text-muted-foreground"> Civil Court Arera Hills Bhopal, Madhya Pradesh, India</p>
                  </div>
                      <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Home  Address</h3>
                    <p className="text-muted-foreground">H.N-11 Lakherapura, Bhopal, Madhya Pradesh 462001, India</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Mail className="w-8 h-8 text-accent mt-1" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Email Address</h3>
                    <p className="text-muted-foreground">jainadvpalash@gmail.com</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Phone className="w-8 h-8 text-accent mt-1" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Phone Number</h3>
                    <p className="text-muted-foreground">+91 9713803772</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <MapPin className="w-8 h-8 text-accent mt-1" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Office Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 10:00 AM - 6:00 PM
                      <br />
                      Saturday: 10:00 AM - 2:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-secondary p-12 lg:p-16 flex flex-col justify-center">
              <p className="text-foreground text-sm font-semibold tracking-widest mb-2">
                Contact Us
              </p>
              <h2 className="text-5xl font-bold text-foreground mb-12">Free Consulting</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name*"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border border-foreground border-opacity-30 px-6 py-4 text-foreground placeholder-foreground placeholder-opacity-60 focus:outline-none focus:border-primary focus:border-opacity-100 transition"
                  />
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email*"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border border-foreground border-opacity-30 px-6 py-4 text-foreground placeholder-foreground placeholder-opacity-60 focus:outline-none focus:border-primary focus:border-opacity-100 transition"
                  />
                </div>

                {/* Phone */}
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-transparent border border-foreground border-opacity-30 px-6 py-4 text-foreground placeholder-foreground placeholder-opacity-60 focus:outline-none focus:border-primary focus:border-opacity-100 transition"
                  />
                </div>

                {/* Subject */}
                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-transparent border border-foreground border-opacity-30 px-6 py-4 text-foreground placeholder-foreground placeholder-opacity-60 focus:outline-none focus:border-primary focus:border-opacity-100 transition"
                  />
                </div>

                {/* Message */}
                <div>
                  <textarea
                    name="message"
                    placeholder="Tell us about your case..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full bg-transparent border border-foreground border-opacity-30 px-6 py-4 text-foreground placeholder-foreground placeholder-opacity-60 focus:outline-none focus:border-primary focus:border-opacity-100 transition resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-primary text-secondary px-8 py-4 font-bold text-lg hover:opacity-90 transition"
                >
                  Send Inquiry
                </button>
              </form>

              <p className="text-foreground text-opacity-70 text-xs mt-6">
                *Required fields. Your information will be kept confidential.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
