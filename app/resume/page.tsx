import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Download, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Resume | Faizal Baihaqi',
  description: 'View and download the professional resume of Faizal Baihaqi - Educator & Systems Builder',
}

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <section className="py-16 px-6 md:px-20 border-b border-white/5">
        <div className="max-w-5xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-primary transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-3">Resume / CV</h1>
              <p className="text-zinc-400 text-lg">Educator ✕ Systems Builder</p>
            </div>
            
            <Button variant="premium" size="lg" className="gap-3">
              <Download className="w-5 h-5" />
              Download PDF
            </Button>
          </div>
        </div>
      </section>

      {/* Resume Content */}
      <section className="py-20 px-6 md:px-20">
        <div className="max-w-5xl mx-auto">
          
          {/* Header Info */}
          <div className="mb-16 pb-8 border-b border-white/5">
            <h2 className="text-5xl font-bold mb-4">FAIZAL BAIHAQI</h2>
            <p className="text-2xl text-zinc-400 mb-6">Systems Builder & Software Engineer</p>
            <div className="flex flex-wrap gap-4 text-zinc-400">
              <span>Indonesia · Open for Remote Work</span>
              <span>•</span>
              <a href="mailto:your.email@domain.com" className="hover:text-primary transition-colors">your.email@domain.com</a>
              <span>•</span>
              <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
              <span>•</span>
              <a href="#" className="hover:text-primary transition-colors">GitHub</a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-primary">PROFESSIONAL SUMMARY</h3>
            <div className="space-y-4 text-lg text-zinc-400 leading-relaxed">
              <p>
                Systems builder and software engineer with more than ten years of experience designing and deploying real-world digital systems across education, public services, and community institutions. Specializes in building backend and full-stack systems that operate reliably under challenging infrastructure conditions—unstable connectivity, non-technical institutional environments, and strict data sovereignty requirements.
              </p>
              <p>
                Combines software engineering, instructional design, and human-centered systems thinking to translate complex human, social, and institutional problems into structured, auditable, and scalable digital systems. Experienced working independently and remotely, directly with non-technical stakeholders, where system clarity, trust, and long-term maintainability are critical.
              </p>
            </div>
          </div>

          {/* Core Expertise */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-primary">CORE EXPERTISE</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-bold text-white mb-4">Systems & Architecture</h4>
                <ul className="space-y-2 text-zinc-400">
                  <li>• End-to-end system design</li>
                  <li>• Data modeling & schema design</li>
                  <li>• Workflow automation</li>
                  <li>• Infrastructure resilience engineering</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-white mb-4">Software Engineering</h4>
                <ul className="space-y-2 text-zinc-400">
                  <li>• Full-stack web development</li>
                  <li>• Backend services & REST APIs</li>
                  <li>• Next.js, TypeScript, Node.js</li>
                  <li>• PostgreSQL, Prisma, Firebase</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-white mb-4">Human & Institutional</h4>
                <ul className="space-y-2 text-zinc-400">
                  <li>• Instructional design</li>
                  <li>• Stakeholder communication</li>
                  <li>• UI/UX for low-literacy users</li>
                  <li>• Community trust building</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-primary">PROFESSIONAL EXPERIENCE</h3>
            
            <div className="space-y-12">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-white">Learning Systems Developer and Educator</h4>
                    <p className="text-primary">Gandiwa Network</p>
                  </div>
                  <span className="text-zinc-500">Aug 2025 – Present</span>
                </div>
                <ul className="space-y-2 text-zinc-400">
                  <li>• Designed structured learning programs improving digital literacy for learners with minimal tech exposure</li>
                  <li>• Built web-based systems supporting learning delivery, civic services, and organizational workflows</li>
                  <li>• Developed modular digital products reducing dependency on paid platforms</li>
                  <li>• Translated technical decisions into operational outcomes for non-technical stakeholders</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-white">Educator and Instructional Designer</h4>
                    <p className="text-primary">MA Nurul Hidayah Majalangu</p>
                  </div>
                  <span className="text-zinc-500">Sep 2022 – Present</span>
                </div>
                <ul className="space-y-2 text-zinc-400">
                  <li>• Designed curriculum-aligned lesson plans for Art & Culture, Physics, and Informatics</li>
                  <li>• Built project-based assessment systems measuring learning outcomes</li>
                  <li>• Developed digital learning materials supporting diverse learning styles</li>
                  <li>• Supported teachers in structuring lesson plans and teaching strategies</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-primary">EDUCATION</h3>
            <div>
              <h4 className="text-xl font-bold text-white mb-2">Informatics Engineering</h4>
              <p className="text-zinc-400">STMIK Widya Pratama Pekalongan · Non-degree program</p>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-primary">CERTIFICATIONS</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-zinc-900/50 border border-white/5">
                <p className="text-white">IBM Full Stack JavaScript Developer</p>
                <p className="text-sm text-zinc-500">IBM</p>
              </div>
              <div className="p-4 bg-zinc-900/50 border border-white/5">
                <p className="text-white">Deep Learning Specialization</p>
                <p className="text-sm text-zinc-500">DeepLearning.AI</p>
              </div>
              <div className="p-4 bg-zinc-900/50 border border-white/5">
                <p className="text-white">Google Digital Marketing & E-Commerce</p>
                <p className="text-sm text-zinc-500">Google</p>
              </div>
              <div className="p-4 bg-zinc-900/50 border border-white/5">
                <p className="text-white">Graphic Design Specialization</p>
                <p className="text-sm text-zinc-500">CalArts</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 md:px-20 bg-zinc-950 border-t border-white/5">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Interested in Working Together?</h3>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="/resume.pdf" download="Faizal-Baihaqi-Resume.pdf">
              <Button variant="premium" size="lg">
                <Download className="mr-2 w-5 h-5" />
                Download Full Resume
              </Button>
            </a>
            <Link href="/#contact">
              <Button variant="outline" size="lg">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
