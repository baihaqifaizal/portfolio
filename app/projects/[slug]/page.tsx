import { notFound } from 'next/navigation'
import { getProjectBySlug, getAllProjectSlugs } from '@/lib/projects'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, CheckCircle2, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs()
  return slugs.map((slug) => ({
    slug: slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = getProjectBySlug(params.slug)
  
  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: `${project.title} | Faizal Baihaqi`,
    description: project.description,
  }
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug)
  
  if (!project) {
    notFound()
  }

  const allSlugs = getAllProjectSlugs()
  const currentIndex = allSlugs.indexOf(params.slug)
  const prevSlug = currentIndex > 0 ? allSlugs[currentIndex - 1] : null
  const nextSlug = currentIndex < allSlugs.length - 1 ? allSlugs[currentIndex + 1] : null

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-end pb-20 px-6 md:px-20 bg-zinc-950">
        <div className="absolute inset-0 z-0">
          <Image 
            src={project.image} 
            alt={project.title} 
            fill 
            sizes="100vw"
            priority={true}
            quality={90}
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent" />
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto">
          <Link href="/#works" className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-primary transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
          
          <div className="mb-4">
            <span className="text-xs font-bold tracking-widest text-primary uppercase">{project.category} — {project.year}</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight max-w-3xl">{project.title}</h1>
          
          <div className="p-5 bg-zinc-900/80 border-l-2 border-primary backdrop-blur-sm max-w-2xl">
            <span className="text-xs text-zinc-500 uppercase tracking-wider block mb-2">Key Impact</span>
            <span className="text-xl font-bold text-white">{project.result}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6 md:px-20">
        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* Overview */}
          <div>
            <h2 className="text-sm font-mono text-primary mb-4 uppercase tracking-wider">Overview</h2>
            <p className="text-xl text-zinc-400 leading-relaxed">{project.description}</p>
          </div>

          {/* Problem */}
          <div>
            <h2 className="text-2xl font-bold mb-6">The Problem</h2>
            <p className="text-lg text-zinc-400 leading-relaxed">{project.problem}</p>
          </div>

          {/* Solution */}
          <div>
            <h2 className="text-2xl font-bold mb-6">The Solution</h2>
            <p className="text-lg text-zinc-400 leading-relaxed">{project.solution}</p>
          </div>

          {/* Role */}
          <div className="bg-zinc-900/50 p-8 border border-white/5">
            <h2 className="text-2xl font-bold mb-4">My Role & Responsibilities</h2>
            <p className="text-lg text-zinc-400 leading-relaxed">{project.role}</p>
          </div>

          {/* Stakeholders */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Stakeholders & Collaborators</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.stakeholders.map((stakeholder, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-zinc-900/30 border border-white/5">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-zinc-300">{stakeholder}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Implementation */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Technical Implementation</h2>
            <div className="space-y-3">
              {project.implementation.map((item, i) => (
                <div key={i} className="flex gap-3">
                  <div className="w-2 h-2 bg-primary mt-2 flex-shrink-0" />
                  <p className="text-zinc-400">{item}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 flex flex-wrap gap-3">
              {project.stack.map(tech => (
                <span key={tech} className="px-4 py-2 text-sm border border-white/10 text-zinc-300 font-mono">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Impact & Results */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Impact & Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.impact.map((impact, i) => (
                <div key={i} className="p-6 bg-zinc-900 border border-white/5">
                  <div className="text-sm text-zinc-500 mb-2">{impact.metric}</div>
                  <div className="text-3xl font-bold text-primary">{impact.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Learnings */}
          <div className="bg-zinc-900/50 p-8 border-l-2 border-primary">
            <h2 className="text-2xl font-bold mb-6">Key Learnings</h2>
            <div className="space-y-4">
              {project.learnings.map((learning, i) => (
                <div key={i} className="flex gap-4">
                  <span className="text-primary font-bold text-lg">{String(i + 1).padStart(2, '0')}</span>
                  <p className="text-zinc-400 leading-relaxed">{learning}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 px-6 md:px-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {prevSlug ? (
              <Link href={`/projects/${prevSlug}`} className="group p-6 bg-zinc-900 hover:bg-zinc-800 border border-white/5 hover:border-primary/50 transition-all">
                <div className="flex items-center gap-3 text-zinc-400 group-hover:text-primary transition-colors mb-2">
                  <ArrowLeft className="w-4 h-4" />
                  <span className="text-sm font-mono">Previous Project</span>
                </div>
                <div className="text-white font-bold">{getProjectBySlug(prevSlug)?.title}</div>
              </Link>
            ) : <div />}
            
            {nextSlug ? (
              <Link href={`/projects/${nextSlug}`} className="group p-6 bg-zinc-900 hover:bg-zinc-800 border border-white/5 hover:border-primary/50 transition-all text-right">
                <div className="flex items-center justify-end gap-3 text-zinc-400 group-hover:text-primary transition-colors mb-2">
                  <span className="text-sm font-mono">Next Project</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
                <div className="text-white font-bold">{getProjectBySlug(nextSlug)?.title}</div>
              </Link>
            ) : <div />}
          </div>

          <div className="mt-12 text-center">
            <Link href="/#works">
              <Button variant="outline" size="lg">
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
