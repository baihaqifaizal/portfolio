import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { getAllProjects } from '@/lib/projects'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'All Projects | Faizal Baihaqi',
  description: 'Complete archive of case studies and projects by Faizal Baihaqi - Educator & Systems Builder',
}

export default function ProjectsArchivePage() {
  const projects = getAllProjects()
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <section className="py-16 px-6 md:px-20 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <div className="mb-8">
            <h2 className="text-sm font-mono text-primary mb-4">PROJECT ARCHIVES</h2>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">All Projects.</h1>
            <p className="text-xl text-zinc-400 max-w-3xl">
              A complete collection of case studies showcasing systems built for education, civic services, and community institutions. Each project demonstrates the intersection of software engineering, instructional design, and human-centered thinking.
            </p>
          </div>

          <div className="flex items-center gap-4 text-sm text-zinc-500">
            <span className="font-bold text-white">{projects.length}</span>
            <span>Projects</span>
            <span>•</span>
            <span>2024 - 2025</span>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Link 
                key={project.slug} 
                href={`/projects/${project.slug}`}
                className="group"
              >
                <article className="flex flex-col h-full border border-white/5 bg-zinc-950 hover:border-primary/50 transition-all duration-500">
                  <div className="relative aspect-[4/3] overflow-hidden bg-zinc-900">
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      fill 
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={index < 3}
                      quality={80}
                      className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                    />
                    <div className="absolute top-4 right-4 w-12 h-12 bg-zinc-950/80 backdrop-blur-sm flex items-center justify-center border border-white/10">
                      <span className="text-xs font-bold font-mono text-primary">0{index + 1}</span>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="mb-4">
                      <span className="text-xs font-bold tracking-wider text-zinc-500 uppercase">
                        {project.category} · {project.year}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-zinc-400 leading-relaxed mb-6 flex-grow line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.stack.slice(0, 3).map(tech => (
                        <span 
                          key={tech} 
                          className="px-2 py-1 text-xs border border-white/10 text-zinc-400 font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.stack.length > 3 && (
                        <span className="px-2 py-1 text-xs text-zinc-500">
                          +{project.stack.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-sm font-medium text-zinc-400 group-hover:text-primary transition-colors">
                      <span>View Case Study</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 md:px-20 bg-zinc-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Interested in Collaboration?</h3>
          <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, institutional partnerships, or opportunities in education and civic technology.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/#contact">
              <Button variant="premium" size="lg">
                Get in Touch
              </Button>
            </Link>
            <Link href="/resume">
              <Button variant="outline" size="lg">
                View Resume
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
