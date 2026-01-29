"use client"

import { Button } from "@/components/ui/Button"
import { ArrowUpRight, Github, Linkedin, Twitter, Mail } from "lucide-react"

export function Contact() {
  return (
    <section className="section-spacing bg-background relative overflow-hidden">
        <div className="divider-gradient absolute top-0 left-0 right-0" />
        
        <div className="container-tight">
          <div className="card-hover text-center">
            <h2 className="section-label mx-auto">03 / CONTACT</h2>
            <h3 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 lg:mb-8 text-foreground">
              Let's Build <br />
              <span className="text-muted">The Future</span>
            </h3>
          
            <p className="text-lg text-primary-subtle mb-10 lg:mb-12 max-w-2xl mx-auto leading-relaxed">
              Building systems where reliability, usability, and institutional trust are non-negotiable—even 
              under infrastructure constraints most teams avoid. Let's discuss the problem you're solving.
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
                { label: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/YOUR-USERNAME" },
                { label: "GitHub", icon: Github, href: "https://github.com/YOUR-USERNAME" },
                { label: "Twitter / X", icon: Twitter, href: "https://twitter.com/YOUR-USERNAME" },
                { label: "Email", icon: ArrowUpRight, href: "mailto:your.email@domain.com" },
              ].map((social) =>
                <a 
                  key={social.label} 
                  href={social.href}
                  className="card-outline flex flex-col items-center gap-2 py-4 hover:border-primary/50 transition-colors group"
                  title={social.href.includes('YOUR') ? 'Update with your actual profile link' : undefined}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="text-sm font-medium text-foreground">{social.label}</span>
                </a>
              )}
            </div>

            <div className="mt-16 lg:mt-20 text-muted-foreground text-sm">
              © 2026 Portfolio. Designed & Built with Sharp precision.
            </div>
          </div>
        </div>
    </section>
  )
}
