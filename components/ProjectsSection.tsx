"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github, Zap, Smartphone, Globe, Database } from 'lucide-react'

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [filter, setFilter] = useState('all')

  console.log("ProjectsSection component rendered")

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'automation', label: 'Automation' },
    { id: 'api', label: 'API Testing' },
    { id: 'functional', label: 'Functional' },
  ]

  const projects = [
    {
      id: 1,
      title: 'Automation UI Testing',
      description: 'Automated UI testing using Selenium WebDriver and TestNG. Designed and implemented priority-based test cases to validate critical functionalities of an e-commerce platform.',
      image: '/api/placeholder/600/400',
      technologies: ['Selenium WebDriver', 'TestNG', 'Java', 'Eclipse', 'Git'],
      category: 'automation',
      featured: true,
      liveUrl: '#',
      githubUrl: 'https://github.com/Arshath-Ahamed-M/Automation_Selenium_testing',
      icon: Zap
    },
    {
      id: 2,
      title: 'REST Assured API Testing',
      description: 'Developed a REST Assured API automation project in Java to validate JSON endpoints. Tested various HTTP methods, response codes, payload handling, and error scenarios.',
      image: '/api/placeholder/600/400',
      technologies: ['REST Assured', 'Java', 'TestNG', 'JSON', 'HTTP Methods'],
      category: 'api',
      featured: true,
      liveUrl: '#',
      githubUrl: '#',
      icon: Database
    },
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  const featuredProjects = projects.filter(project => project.featured)

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">My Projects</span>
          </h2>
          <p className="text-xl text-light-text/80 max-w-3xl mx-auto leading-relaxed">
            A showcase of my testing projects, featuring automation frameworks, API testing, 
            and comprehensive test suites built with modern testing tools.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setFilter(category.id)}
              variant={filter === category.id ? "default" : "outline"}
              className={`transition-all duration-300 ${
                filter === category.id
                  ? 'bg-cyber-gradient text-space-dark border-none hover:scale-105'
                  : 'border-electric-cyan/30 text-light-text hover:bg-electric-cyan/10 hover:border-electric-cyan/60'
              }`}
            >
              {category.label}
            </Button>
          ))}
        </motion.div>

        {/* Featured Projects Section */}
        {filter === 'all' && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-center mb-8 text-electric-cyan">Featured Projects</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredProjects.slice(0, 2).map((project, index) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  index={index} 
                  featured={true}
                  isInView={isInView}
                />
              ))}
            </div>
          </motion.div>
        )}

        {/* All Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index}
                featured={false}
                isInView={isInView}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

interface ProjectCardProps {
  project: any
  index: number
  featured: boolean
  isInView: boolean
}

function ProjectCard({ project, index, featured, isInView }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 * index }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group"
    >
      <Card className={`h-full bg-charcoal-gray/50 backdrop-blur-sm border-electric-cyan/20 hover:border-electric-cyan/40 transition-all duration-300 overflow-hidden ${
        featured ? 'lg:col-span-1' : ''
      }`}>
        {/* Project Image/Icon */}
        <div className="relative h-48 bg-gradient-to-br from-space-dark to-charcoal-gray overflow-hidden">
          <div className="absolute inset-0 bg-cyber-gradient opacity-10" />
          <div className="absolute inset-0 flex items-center justify-center">
            <project.icon className="w-16 h-16 text-electric-cyan opacity-60" />
          </div>
          <div className="absolute top-4 right-4">
            <Badge className="bg-electric-cyan/20 text-electric-cyan border-electric-cyan/30">
              {project.category}
            </Badge>
          </div>
        </div>

        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-xl font-bold text-light-text group-hover:text-electric-cyan transition-colors duration-300">
              {project.title}
            </h3>
            {featured && (
              <Badge className="bg-warm-amber/20 text-warm-amber border-warm-amber/30 text-xs">
                Featured
              </Badge>
            )}
          </div>
          
          <p className="text-light-text/70 mb-4 leading-relaxed">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech: string) => (
              <Badge 
                key={tech}
                variant="outline"
                className="bg-accent-purple/10 border-accent-purple/30 text-accent-purple text-xs"
              >
                {tech}
              </Badge>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3">
            <Button
              size="sm"
              className="flex-1 bg-cyber-gradient text-space-dark hover:scale-105 transition-all duration-300"
              asChild
            >
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </a>
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="border-electric-cyan/30 text-electric-cyan hover:bg-electric-cyan/10 hover:border-electric-cyan/60 transition-all duration-300"
              asChild
            >
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}