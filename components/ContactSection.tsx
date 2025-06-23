"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageCircle } from 'lucide-react'

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  console.log("ContactSection component rendered")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    console.log("Form data updated:", { name, value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    console.log("Form submitted:", formData)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' })
    setIsSubmitting(false)
    console.log("Form submission completed")
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'arshathahamedm786@gmail.com',
      href: 'mailto:arshathahamedm786@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8825921566',
      href: 'tel:+918825921566'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Erode, Tamil Nadu',
      href: 'https://maps.google.com'
    }
  ]

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Arshath-Ahamed-M', label: 'GitHub', color: 'hover:text-white' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/arshath-ahamed-m786/', label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: Mail, href: 'mailto:arshathahamedm786@gmail.com', label: 'Email', color: 'hover:text-green-400' },
    { icon: Phone, href: 'tel:+918825921566', label: 'Phone', color: 'hover:text-yellow-400' },
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-xl text-light-text/80 max-w-3xl mx-auto leading-relaxed">
            Have a project in mind or want to collaborate? I'd love to hear from you. 
            Let's create something amazing together!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-charcoal-gray/50 backdrop-blur-sm border-electric-cyan/20 hover:border-electric-cyan/40 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-cyber-gradient rounded-full flex items-center justify-center mr-4">
                    <Send className="w-6 h-6 text-space-dark" />
                  </div>
                  <h3 className="text-2xl font-bold text-light-text">Send a Message</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      <label htmlFor="name" className="block text-sm font-medium text-light-text mb-2">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-space-dark/50 border-electric-cyan/30 text-light-text placeholder:text-light-text/40 focus:border-electric-cyan/60 focus:ring-electric-cyan/20"
                        placeholder="John Doe"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      <label htmlFor="email" className="block text-sm font-medium text-light-text mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-space-dark/50 border-electric-cyan/30 text-light-text placeholder:text-light-text/40 focus:border-electric-cyan/60 focus:ring-electric-cyan/20"
                        placeholder="john@example.com"
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <label htmlFor="subject" className="block text-sm font-medium text-light-text mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="bg-space-dark/50 border-electric-cyan/30 text-light-text placeholder:text-light-text/40 focus:border-electric-cyan/60 focus:ring-electric-cyan/20"
                      placeholder="Project Discussion"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <label htmlFor="message" className="block text-sm font-medium text-light-text mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="bg-space-dark/50 border-electric-cyan/30 text-light-text placeholder:text-light-text/40 focus:border-electric-cyan/60 focus:ring-electric-cyan/20 resize-none"
                      placeholder="Tell me about your project or how I can help you..."
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-cyber-gradient text-space-dark hover:scale-105 transition-all duration-300 text-lg py-6"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center space-x-2">
                          <div className="w-5 h-5 border-2 border-space-dark/30 border-t-space-dark rounded-full animate-spin" />
                          <span>Sending...</span>
                        </div>
                      ) : (
                        <div className="flex items-center space-x-2">
                          <Send className="w-5 h-5" />
                          <span>Send Message</span>
                        </div>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Information */}
            <Card className="bg-charcoal-gray/50 backdrop-blur-sm border-electric-cyan/20 hover:border-electric-cyan/40 transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-light-text mb-8 flex items-center">
                  <div className="w-12 h-12 bg-cyber-gradient rounded-full flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-space-dark" />
                  </div>
                  Contact Information
                </h3>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={info.label}
                      href={info.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.2 * index }}
                      className="flex items-center space-x-4 p-4 rounded-lg bg-space-dark/30 hover:bg-space-dark/50 transition-all duration-300 group"
                    >
                      <div className="w-10 h-10 bg-electric-cyan/20 rounded-full flex items-center justify-center group-hover:bg-electric-cyan/30 transition-colors duration-300">
                        <info.icon className="w-5 h-5 text-electric-cyan" />
                      </div>
                      <div>
                        <div className="text-sm text-light-text/60">{info.label}</div>
                        <div className="text-light-text font-medium group-hover:text-electric-cyan transition-colors duration-300">
                          {info.value}
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-charcoal-gray/50 backdrop-blur-sm border-electric-cyan/20 hover:border-electric-cyan/40 transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-light-text mb-8">Follow Me</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.6, delay: 0.1 * index }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className={`flex items-center space-x-3 p-4 rounded-lg bg-space-dark/30 hover:bg-space-dark/50 transition-all duration-300 text-light-text ${social.color}`}
                    >
                      <social.icon className="w-6 h-6" />
                      <span className="font-medium">{social.label}</span>
                    </motion.a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Response Time */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-center p-6 bg-electric-cyan/10 rounded-lg border border-electric-cyan/20"
            >
              <h4 className="text-lg font-semibold text-electric-cyan mb-2">Quick Response Time</h4>
              <p className="text-light-text/70">
                I typically respond to emails within 24 hours. For urgent projects, 
                feel free to reach out via phone or social media.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}