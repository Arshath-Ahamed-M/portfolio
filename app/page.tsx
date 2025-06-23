"use client"

import { useState, useEffect } from 'react'
import ParticleBackground from '@/components/ParticleBackground'
import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import PersonalSection from '@/components/PersonalSection'
import ProjectsSection from '@/components/ProjectsSection'
import ContactSection from '@/components/ContactSection'

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    console.log("Home component mounted")
    
    const handleScroll = () => {
      const sections = ['hero', 'personal', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }

      // Handle hero section differently since it doesn't have an id
      if (window.scrollY < 100) {
        setActiveSection('hero')
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-space-dark text-light-text">
      <ParticleBackground />
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main>
        <HeroSection />
        <PersonalSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="bg-charcoal-gray/50 backdrop-blur-sm border-t border-electric-cyan/20 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-light-text/60">
            © 2024 ARSHATH AHAMED M. Built with Next.js, TypeScript, and lots of ☕
          </p>
        </div>
      </footer>
    </div>
  )
}
