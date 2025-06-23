"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Code, Palette, Database, Globe, Zap, Heart } from 'lucide-react'

export default function PersonalSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  console.log("PersonalSection component rendered")

  const skills = [
    { name: 'Selenium WebDriver', level: 85, icon: Code, color: 'bg-green-500' },
    { name: 'API Testing (Postman)', level: 80, icon: Database, color: 'bg-blue-500' },
    { name: 'Core Java', level: 75, icon: Code, color: 'bg-orange-500' },
    { name: 'TestNG Framework', level: 70, icon: Zap, color: 'bg-purple-500' },
    { name: 'REST Assured', level: 70, icon: Globe, color: 'bg-cyan-500' },
    { name: 'UI Testing', level: 80, icon: Palette, color: 'bg-pink-500' },
  ]

  const interests = [
    'Test Automation',
    'Quality Assurance',
    'API Testing',
    'Performance Testing',
    'Bug Hunting',
    'Continuous Learning'
  ]

  return (
    <section id="personal" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-xl text-light-text/80 max-w-3xl mx-auto leading-relaxed">
            Passionate software testing professional focused on ensuring quality through comprehensive 
            test strategies and automation frameworks.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Personal Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-charcoal-gray/50 backdrop-blur-sm border-electric-cyan/20 hover:border-electric-cyan/40 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-cyber-gradient rounded-full flex items-center justify-center mr-4">
                    <Heart className="w-6 h-6 text-space-dark" />
                  </div>
                  <h3 className="text-2xl font-bold text-light-text">My Journey</h3>
                </div>
                
                <div className="space-y-4 text-light-text/80 leading-relaxed">
                  <p>
                    As a fresher in software testing, I'm excited about creating and executing test plans 
                    and test cases to ensure software quality. Skilled in identifying bugs and writing 
                    effective test cases to help deliver high-quality software.
                  </p>
                  <p>
                    I specialize in automation testing using Selenium WebDriver and API testing with 
                    Postman and REST Assured. My expertise includes functional testing, UI testing, 
                    and comprehensive test case design.
                  </p>
                  <p>
                    Based in Erode, I'm passionate about learning new testing methodologies and 
                    staying updated with the latest quality assurance practices in the industry.
                  </p>
                </div>

                {/* Interests */}
                <div className="mt-8">
                  <h4 className="text-lg font-semibold text-light-text mb-4">Interests & Hobbies</h4>
                  <div className="flex flex-wrap gap-2">
                    {interests.map((interest, index) => (
                      <motion.div
                        key={interest}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.1 * index }}
                      >
                        <Badge 
                          variant="outline" 
                          className="bg-electric-cyan/10 border-electric-cyan/30 text-electric-cyan hover:bg-electric-cyan/20 transition-colors duration-200"
                        >
                          {interest}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="bg-charcoal-gray/50 backdrop-blur-sm border-electric-cyan/20 hover:border-electric-cyan/40 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-cyber-gradient rounded-full flex items-center justify-center mr-4">
                    <Zap className="w-6 h-6 text-space-dark" />
                  </div>
                  <h3 className="text-2xl font-bold text-light-text">Skills & Expertise</h3>
                </div>

                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.1 * index }}
                      className="group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <skill.icon className="w-5 h-5 text-electric-cyan" />
                          <span className="font-medium text-light-text">{skill.name}</span>
                        </div>
                        <span className="text-sm text-light-text/60">{skill.level}%</span>
                      </div>
                      
                      <div className="w-full bg-charcoal-gray rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, delay: 0.2 + 0.1 * index, ease: "easeOut" }}
                          className={`h-full ${skill.color} rounded-full relative overflow-hidden`}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Quick Stats */}
                <div className="mt-8 pt-6 border-t border-electric-cyan/20">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold gradient-text">Fresher</div>
                      <div className="text-sm text-light-text/60">Experience Level</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold gradient-text">2+</div>
                      <div className="text-sm text-light-text/60">Testing Projects</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold gradient-text">6+</div>
                      <div className="text-sm text-light-text/60">Skills Acquired</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}