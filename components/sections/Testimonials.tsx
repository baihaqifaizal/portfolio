"use client"

import { Quote } from "lucide-react"

const testimonials = [
  {
    text: "[Testimonial from school principal, village official, or community leader highlighting your ability to understand institutional needs and translate them into usable systems]",
    author: "[Name]",
    role: "[Position - e.g., Principal, Village Head, Program Coordinator]",
    company: "[Institution - e.g., MA Nurul Hidayah, Gandiwa Network, Village Government]"
  },
  {
    text: "[Testimonial emphasizing your teaching ability, stakeholder communication, or human-centered approach to technology]",
    author: "[Name]",
    role: "[Position]",
    company: "[Institution]"
  }
]

export function Testimonials() {
  return (
    <section className="section-spacing-sm border-y border-border bg-muted/20">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="flex items-center">
             <h3 className="text-2xl font-bold tracking-tight max-w-xs text-foreground">
               TRUSTED BY INSTITUTIONS WHO VALUE <span className="text-primary">IMPACT OVER FEATURES.</span>
             </h3>
          </div>
          
          <div className="space-y-10">
            {testimonials.map((t, i) => (
              <div key={i} className="relative pl-10">
                <Quote className="absolute top-0 left-0 w-6 h-6 text-muted" />
                <p className="text-lg text-primary-subtle italic mb-4">"{t.text}"</p>
                <div>
                  <div className="font-bold text-foreground">{t.author}</div>
                  <div className="text-sm text-muted-foreground">{t.role}, {t.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
