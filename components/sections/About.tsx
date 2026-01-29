"use client"

import { Button } from "@/components/ui/Button"
import { CheckCircle2 } from "lucide-react"
import Image from "next/image"

export function About() {
  return (
    <section className="section-spacing bg-muted/20">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left Column - Profile Card */}
          <div className="lg:col-span-2">
            <div className="card sticky top-24">
              <h2 className="section-label">02 / ABOUT</h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">
                FAIZAL <span className="text-muted-foreground">BAIHAQI</span>
              </h3>
              <p className="text-primary-subtle mb-6">
                <span className="text-foreground font-medium">Indonesia</span> • Open for Remote Work
              </p>
              
              <div className="aspect-square w-full bg-muted border border-border rounded-lg relative overflow-hidden mb-6">
                <Image 
                  src="/images/portrait.png" 
                  alt="Faizal Baihaqi" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority={false}
                  quality={90}
                  className="object-cover"
                />
              </div>

              {/* Certifications Card */}
              <div className="card-outline">
                <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  Certifications
                </h4>
                <ul className="text-sm text-primary-subtle space-y-2">
                  <li>• IBM Full Stack JavaScript Developer</li>
                  <li>• Deep Learning Specialization</li>
                  <li>• Google Digital Marketing & E-Commerce</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Bio Card */}
            <div className="card">
              <div className="space-y-4 text-base leading-relaxed text-primary-subtle">
                <p>
                  <strong className="text-foreground">I'm an educator first, engineer second.</strong> With over 10 years of teaching experience—from private music lessons to school classrooms to learning systems design—I understand how people learn, how institutions work, and how technology can bridge the gap between complex systems and real human needs.
                </p>
                <p>
                  My work focuses on <span className="text-primary font-medium">education, civic services, and community institutions</span>—places where technology must be reliable under low connectivity, intuitive for non-technical users, and built to earn institutional trust.
                </p>
                <p>
                  Philosophy: <span className="text-primary font-medium">System clarity and long-term maintainability over feature bloat. People over technology.</span>
                </p>
              </div>
            </div>

            {/* Expertise Card */}
            <div className="card">
              <h4 className="text-xl font-bold text-foreground mb-6">Systems & Human Expertise</h4>
              
              <div className="space-y-6">
                {/* Technical Skills */}
                <div>
                  <h5 className="text-sm font-bold text-primary mb-3 uppercase tracking-wider">Technical</h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {["Full-Stack Development", "Database Design & Modeling", "Infrastructure Resilience Engineering"].map(skill =>
                      <div key={skill} className="flex items-start gap-2 text-primary-subtle">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{skill}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="divider" />

                {/* Human-Centered Skills */}
                <div>
                  <h5 className="text-sm font-bold text-foreground mb-3 uppercase tracking-wider">Human-Centered</h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {["Instructional Design", "Stakeholder Communication", "UI/UX for Low-Literacy"].map(skill =>
                      <div key={skill} className="flex items-start gap-2 text-primary-subtle">
                        <CheckCircle2 className="w-4 h-4 text-foreground flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{skill}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="divider" />

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "Python"].map(tech =>
                    <span key={tech} className="px-3 py-1 text-xs border border-border rounded-full text-muted-foreground bg-muted/30">
                      {tech}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
