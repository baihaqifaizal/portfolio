"use client"

import { motion } from "framer-motion"
import { ArrowRight, Download } from "lucide-react"
import { Button } from "@/components/ui/Button"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
}

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
}

const scrollIndicator = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { delay: 1, duration: 1 }
}

export function Hero() {
  const { t } = useLanguage()
  const desc = t('hero.description')
  
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-foreground/5 rounded-full blur-[100px]" />
      </div>

      <div className="container-main z-10 py-20 md:py-32">
        <motion.div {...fadeInUp} className="mb-8">
          <div className="inline-block px-4 py-2 mb-6 text-xs font-bold tracking-[0.2em] text-foreground uppercase border border-primary/20 backdrop-blur-sm bg-primary/10 rounded-full">
            {t('hero.badge')}
          </div>
          <h1 className="font-bold tracking-tighter text-foreground leading-[0.95] mb-6" style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)' }}>
            {t('hero.title1')} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-foreground/80">
              {t('hero.title2')}
            </span>
          </h1>
        </motion.div>

        <motion.div
          {...fadeIn}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-10"
        >
          <p 
            className="text-primary-subtle max-w-3xl leading-relaxed"
            style={{ fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)', lineHeight: '1.7', letterSpacing: '0.01em' }}
          >
            {desc.intro} <span className="text-primary font-medium">{desc.highlight1}</span> {desc.text1}
            <span className="text-foreground font-medium"> {desc.highlight2}</span>{desc.text2}
            <span className="text-foreground"> {desc.highlight3}</span>{desc.end}
          </p>
        </motion.div>

        <motion.div 
           {...fadeIn}
           transition={{ delay: 0.5, duration: 0.8 }}
           className="flex flex-col sm:flex-row gap-4"
        >
          <Link href="/#works">
            <Button size="lg" variant="premium" className="group min-h-[56px] px-8 w-full sm:w-auto">
              {t('hero.cta.works')}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <a href="/resume.pdf" download="Faizal-Baihaqi-Resume.pdf">
            <Button size="lg" variant="outline" className="min-h-[56px] px-8 w-full sm:w-auto">
              {t('hero.cta.resume')}
              <Download className="ml-2 w-4 h-4" />
            </Button>
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        {...scrollIndicator}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground text-xs tracking-widest uppercase"
      >
        <span>{t('hero.scroll')}</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-muted-foreground to-transparent" />
      </motion.div>
    </section>
  )
}
