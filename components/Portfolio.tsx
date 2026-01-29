'use client'

import { motion } from 'framer-motion'
import { projects } from '@/lib/data'
import { ArrowUpRight } from 'lucide-react'

export default function Portfolio() {
  return (
    <section id="work" className="py-24 px-6 md:px-24 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-heading font-bold text-white"
          >
            Selected Work
          </motion.h2>
          <div className="text-muted-foreground hidden md:block">
            Projects that solve real problems.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-card/30 border border-white/5 rounded-2xl p-8 hover:bg-card/50 transition-colors overflow-hidden"
            >
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="p-2 bg-white/10 rounded-full">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
              </div>
              
              <div className="flex flex-col h-full justify-between space-y-8">
                <div>
                  <div className="text-xs font-mono text-primary mb-4 uppercase tracking-wider">
                    {project.category}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 text-xs rounded-full bg-white/5 text-gray-300 border border-white/5">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Placeholder for "More Projects" */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center bg-card/10 border border-dashed border-white/10 rounded-2xl p-8 hover:bg-card/20 transition-colors cursor-pointer group"
          >
             <div className="text-center">
                <div className="text-lg font-medium text-white mb-2 group-hover:text-primary transition-colors">More to come</div>
                <div className="text-muted-foreground text-sm">See GitHub for open source work</div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
