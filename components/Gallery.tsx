'use client'

import { motion } from 'framer-motion'

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 px-6 md:px-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-heading font-bold mb-16 text-white"
        >
          Gallery
        </motion.h2>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
           {/* Placeholders for gallery items */}
           {[1, 2, 3, 4, 5, 6].map((item) => (
             <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="break-inside-avoid relative group rounded-2xl overflow-hidden bg-muted aspect-[3/4] md:aspect-[4/5]"
             >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <span className="text-white font-medium">Gallery Item {item}</span>
                </div>
                {/* Fallback visual since we don't have images yet */}
                <div className="w-full h-full bg-gradient-to-br from-white/5 to-white/10 flex items-center justify-center text-white/20 font-heading text-4xl font-bold">
                  IMG
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  )
}
