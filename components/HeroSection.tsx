"use client"

import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail, ExternalLink } from 'lucide-react'

export default function HeroSection() {
  console.log("HeroSection component rendered")

  const scrollToNext = () => {
    console.log("Scrolling to personal section")
    const element = document.getElementById('personal')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-light-text">Hello, I'm</span>
            <span className="block gradient-text animate-pulse">Arshath Ahamed M</span>
          </h1>
          <p className="text-xl sm:text-2xl text-light-text/80 max-w-2xl mx-auto leading-relaxed">
            Software Testing Enthusiast ensuring quality through comprehensive testing strategies
          </p>
        </motion.div>

        {/* Animated Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-12"
        >
          <div className="inline-block bg-charcoal-gray/50 backdrop-blur-sm border border-electric-cyan/30 rounded-full px-6 py-3">
            <span className="text-electric-cyan font-medium">
              Selenium • API Testing • Java • TestNG • Postman
            </span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 245, 255, 0.6)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-cyber-gradient text-space-dark px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center space-x-2 min-w-[200px] justify-center"
          >
            <span>View Projects</span>
            <ExternalLink className="w-5 h-5" />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-electric-cyan text-electric-cyan px-8 py-4 rounded-lg font-semibold text-lg hover:bg-electric-cyan/10 transition-all duration-300 flex items-center space-x-2 min-w-[200px] justify-center"
          >
            <span>Get In Touch</span>
            <Mail className="w-5 h-5" />
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex justify-center space-x-6 mb-16"
        >
          {[
            { icon: Github, href: "#", label: "GitHub" },
            { icon: Linkedin, href: "#", label: "LinkedIn" },
            { icon: Mail, href: "#", label: "Email" },
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-charcoal-gray/50 backdrop-blur-sm border border-electric-cyan/30 rounded-full flex items-center justify-center text-light-text hover:text-electric-cyan hover:border-electric-cyan/60 transition-all duration-300"
              aria-label={social.label}
            >
              <social.icon className="w-6 h-6" />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-4 h-4 bg-electric-cyan rounded-full opacity-60"
        />
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/3 right-1/4 w-2 h-2 bg-accent-purple rounded-full opacity-40"
        />
        <motion.div
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/3 left-1/5 w-3 h-3 bg-warm-amber rounded-full opacity-50"
        />
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={scrollToNext}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-light-text/60 hover:text-electric-cyan transition-colors duration-300 flex flex-col items-center space-y-2"
        >
          <span className="text-sm font-medium">Scroll Down</span>
          <ChevronDown className="w-6 h-6" />
        </motion.button>
      </motion.div>
    </section>
  )
}