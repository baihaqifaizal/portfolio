"use client"

import { Button } from "@/components/ui/Button"
import { ArrowUpRight, Github, Linkedin, Twitter, Mail } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Contact() {
  const { t } = useLanguage()
  const social = t('contact.social')
  
  return (
    <section className="section-spacing bg-background relative overflow-hidden">
        <div className="divider-gradient absolute top-0 left-0 right-0" />
        
        <div className="container-tight">
          <div className="card-hover text-center">
            <h2 className="section-label mx-auto">{t('contact.label')}</h2>
            <h3 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 lg:mb-8 text-foreground">
              {t('contact.title1')} <br />
              <span className="text-muted">{t('contact.title2')}</span>
            </h3>
          
            <p className="text-lg text-primary-subtle mb-10 lg:mb-12 max-w-2xl mx-auto leading-relaxed">
              {t('contact.description')}
            </p>
          
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 lg:mb-16">
              <Button variant="premium" size="lg" className="h-14 px-10 text-base w-full sm:w-auto">
                <Mail className="mr-3 w-5 h-5" />
                your.email@domain.com
              </Button>
            </div>

            <div className="divider mb-10" />

            {/* Social Links Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: social.linkedin, icon: Linkedin, href: "https://linkedin.com/in/YOUR-USERNAME" },
                { label: social.github, icon: Github, href: "https://github.com/YOUR-USERNAME" },
                { label: social.twitter, icon: Twitter, href: "https://twitter.com/YOUR-USERNAME" },
                { label: social.email, icon: ArrowUpRight, href: "mailto:your.email@domain.com" },
              ].map((item) =>
                <a 
                  key={item.label} 
                  href={item.href}
                  className="card-outline flex flex-col items-center gap-2 py-4 hover:border-primary/50 transition-colors group"
                  title={item.href.includes('YOUR') ? 'Update with your actual profile link' : undefined}
                >
                  <item.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                </a>
              )}
            </div>

            <div className="mt-16 lg:mt-20 text-muted-foreground text-sm">
              {t('contact.footer')}
            </div>
          </div>
        </div>
    </section>
  )
}
