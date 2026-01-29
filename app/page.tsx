import { Hero } from "@/components/sections/Hero"
import { Projects } from "@/components/sections/Projects"
import { About } from "@/components/sections/About"
import { Testimonials } from "@/components/sections/Testimonials"
import { Contact } from "@/components/sections/Contact"

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      <Hero />
      <div id="works">
        <Projects />
      </div>
      <div id="about">
        <About />
        <Testimonials />
      </div>
      <div id="contact">
        <Contact />
      </div>
      
      <footer className="py-8 bg-card border-t border-border text-center text-muted-foreground text-xs font-mono uppercase tracking-widest">
        <p>© {new Date().getFullYear()} Built with Precision.</p>
      </footer>
    </div>
  )
}
