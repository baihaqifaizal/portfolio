"use client"

import { Quote } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Testimonials() {
  const { t } = useLanguage()
  const testimonials = t('testimonials.items')
  
  return (
    <section className="section-spacing-sm border-y border-border bg-muted/20">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="flex items-center">
             <h3 className="text-2xl font-bold tracking-tight max-w-xs text-foreground">
               {t('testimonials.title')} <span className="text-primary">{t('testimonials.highlight')}</span>
             </h3>
          </div>
          
          <div className="space-y-10">
            {testimonials.map((testimonial: any, i: number) => (
              <div key={i} className="relative pl-10">
                <Quote className="absolute top-0 left-0 w-6 h-6 text-muted" />
                <p className="text-lg text-primary-subtle italic mb-4">"{testimonial.text}"</p>
                <div>
                  <div className="font-bold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
