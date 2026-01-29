'use client'

import { motion } from 'framer-motion'
import { personalInfo } from '@/lib/data'

export default function Certifications() {
  return (
    <section className="py-24 px-6 md:px-24 bg-card/20 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-heading font-bold mb-16 text-white"
        >
          Certifications & Education
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-1 space-y-8">
            <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-3">
              <div className="h-1 w-8 bg-primary rounded-full" />
              Education
            </h3>
            {personalInfo.education.map((edu, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <div className="text-white font-medium text-lg">{edu.degree}</div>
                <div className="text-muted-foreground">{edu.institution}</div>
                <div className="text-xs text-primary/80 uppercase tracking-widest">{edu.type}</div>
              </motion.div>
            ))}

            <div className="pt-8">
               <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-3">
                 <div className="h-1 w-8 bg-primary rounded-full" />
                 Languages
               </h3>
               <div className="space-y-4">
                 {personalInfo.languages.map((lang, idx) => (
                   <div key={idx} className="flex justify-between items-center border-b border-white/5 pb-2">
                     <span className="text-white">{lang.language}</span>
                     <span className="text-muted-foreground text-sm">{lang.level}</span>
                   </div>
                 ))}
               </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold text-primary mb-8 flex items-center gap-3">
              <div className="h-1 w-8 bg-primary rounded-full" />
              Professional Certifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {personalInfo.certifications.map((cert, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-primary/50 hover:bg-white/10 transition-all flex items-center gap-3"
                >
                  <div className="h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
                  <span className="text-sm text-gray-200 leading-tight">{cert}</span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
