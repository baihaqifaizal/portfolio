'use client'

import { motion } from 'framer-motion'
import { experiences } from '@/lib/data'

export default function Experience() {
  return (
    <section id="about" className="py-24 px-6 md:px-24 border-t border-white/5 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-heading font-bold mb-16 text-white"
        >
          Professional Journey
        </motion.h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="grid grid-cols-1 md:grid-cols-4 gap-6 group"
            >
              <div className="md:col-span-1 text-muted-foreground font-mono text-sm py-1 border-l-2 border-transparent group-hover:border-primary pl-4 transition-colors">
                {exp.period}
              </div>
              <div className="md:col-span-3 space-y-2">
                <h3 className="text-xl font-medium text-white group-hover:text-primary transition-colors">
                  {exp.role}
                </h3>
                <div className="text-emerald-400 font-medium pb-2 text-sm">{exp.company}</div>
                <p className="text-muted-foreground leading-relaxed max-w-2xl">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
