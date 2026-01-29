'use client'

import { motion } from 'framer-motion'
import { personalInfo } from '@/lib/data'

export default function Skills() {
  return (
    <section className="py-24 px-6 md:px-24 bg-background">
       <div className="max-w-7xl mx-auto">
         <motion.h2 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-3xl md:text-5xl font-heading font-bold mb-16 text-white"
         >
           Core Expertise
         </motion.h2>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-6">
               <h3 className="text-xl font-bold text-white border-b border-white/10 pb-4">Systems & Architecture</h3>
               <div className="flex flex-wrap gap-2">
                  {personalInfo.skills.systems.map((skill, i) => (
                     <span key={i} className="px-3 py-1.5 rounded-md bg-emerald-950/30 text-emerald-400 text-sm border border-emerald-900/50">
                        {skill}
                     </span>
                  ))}
               </div>
            </div>
            
            <div className="space-y-6">
               <h3 className="text-xl font-bold text-white border-b border-white/10 pb-4">Software Engineering</h3>
               <div className="flex flex-wrap gap-2">
                  {personalInfo.skills.tech.map((skill, i) => (
                     <span key={i} className="px-3 py-1.5 rounded-md bg-blue-950/30 text-blue-400 text-sm border border-blue-900/50">
                        {skill}
                     </span>
                  ))}
               </div>
            </div>

            <div className="space-y-6">
               <h3 className="text-xl font-bold text-white border-b border-white/10 pb-4">Human & Systems</h3>
               <div className="flex flex-wrap gap-2">
                  {personalInfo.skills.human.map((skill, i) => (
                     <span key={i} className="px-3 py-1.5 rounded-md bg-purple-950/30 text-purple-400 text-sm border border-purple-900/50">
                        {skill}
                     </span>
                  ))}
               </div>
            </div>
         </div>
       </div>
    </section>
  )
}
