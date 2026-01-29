'use client'

import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { personalInfo } from '@/lib/data'

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-24 pt-20 max-w-7xl mx-auto">
      <div className="space-y-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 text-primary font-medium tracking-wide uppercase text-sm"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          {personalInfo.availability}
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tight text-white leading-[1.1]"
        >
          Building <span className="text-gray-500">Systems</span><br />
          For <span className="text-gradient-primary">Human Needs.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed"
        >
          I'm <span className="text-white font-medium">{personalInfo.name}</span>, a {personalInfo.title}. 
          {personalInfo.tagline}
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-8 flex gap-4"
        >
          <a href="#work" className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-emerald-400 transition-colors">
            View Work
          </a>
          <a href="#about" className="px-8 py-3 rounded-full border border-white/10 text-white font-medium hover:bg-white/5 transition-colors">
            About Me
          </a>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 left-0 right-0 flex justify-center"
      >
        <ArrowDown className="w-6 h-6 text-muted-foreground animate-bounce" />
      </motion.div>
    </section>
  )
}
