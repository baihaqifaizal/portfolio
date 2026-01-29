"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/Button"
import Image from "next/image"
import Link from "next/link"
import { getFeaturedProjects } from "@/lib/projects"
import { useLanguage } from "@/lib/language-context"

const projectAnimation = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" }
}

export function Projects() {
  const { t } = useLanguage()
  const featuredProjects = getFeaturedProjects()
  
  return (
    <section className="section-spacing bg-background">
      <div className="container-main">
        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <h2 className="section-label">{t('projects.label')}</h2>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <h3 className="section-title">{t('projects.title')}</h3>
            <Link href="/projects">
              <Button variant="ghost" className="hidden md:flex">
                {t('projects.viewAll')} <ArrowUpRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8 lg:space-y-12">
          {featuredProjects.map((project, index) => (
            <motion.article 
              key={index}
              {...projectAnimation}
              className="group card-hover hover-lift"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
                {/* Image */}
                <div className="lg:col-span-5">
                  <Link href={`/projects/${project.slug}`}>
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-muted border border-border group-hover:border-primary/30 transition-colors">
                      <Image 
                        src={project.image} 
                        alt={project.title} 
                        fill 
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                        priority={index === 0}
                        quality={85}
                        className="object-cover group-hover:scale-105 transition-transform duration-700" 
                      />
                    </div>
                  </Link>
                </div>

                {/* Content */}
                <div className="lg:col-span-7 flex flex-col justify-center gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-mono text-primary uppercase tracking-wider">
                        {project.category}
                      </span>
                      <span className="text-xs text-muted-foreground">•</span>
                      <span className="text-xs text-muted-foreground">{project.year}</span>
                    </div>
                    <h4 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>
                  </div>
                  
                  <p className="text-primary-subtle leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Key Impact */}
                  <div className="card-outline">
                    <span className="text-xs text-muted-foreground uppercase tracking-wider block mb-1">
                      {t('projects.keyImpact')}
                    </span>
                    <span className="text-lg font-bold text-foreground">{project.result}</span>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map(tech =>
                      <span key={tech} className="px-3 py-1 text-xs border border-border rounded-full text-muted-foreground bg-muted/30">
                        {tech}
                      </span>
                    )}
                  </div>
                  
                  <Link href={`/projects/${project.slug}`} className="w-fit mt-2">
                    <Button variant="link" className="p-0 h-auto hover:text-primary">
                      {t('projects.viewCase')} <ArrowUpRight className="ml-1 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
