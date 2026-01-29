"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { Globe } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/language-context"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'id' : 'en')
  }

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent backdrop-blur-none",
      scrolled && "bg-background/80 backdrop-blur-md border-border"
    )}>
      <div className="container-main flex items-center justify-between h-20">
        <Link href="/" className="text-xl font-bold tracking-tighter hover:text-primary transition-colors">
          FAIZAL <span className="text-primary">BAIHAQI</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/#works" className="text-sm font-medium hover:text-primary transition-colors">
            {t('nav.works')}
          </Link>
          <Link href="/#about" className="text-sm font-medium hover:text-primary transition-colors">
            {t('nav.about')}
          </Link>
          <a href="/resume.pdf" download className="text-sm font-medium hover:text-primary transition-colors">
            {t('nav.resume')}
          </a>
          <Link href="/#contact" className="text-sm font-medium hover:text-primary transition-colors">
            {t('nav.contact')}
          </Link>
          
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
            aria-label="Toggle language"
          >
            <Globe className="w-4 h-4" />
            {language.toUpperCase()}
          </button>

          <Link href="/#contact">
            <Button size="sm" variant="outline">
              {t('nav.cta')}
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
            aria-label="Toggle language"
          >
            <Globe className="w-4 h-4" />
            {language.toUpperCase()}
          </button>
          <Link href="/#contact">
            <Button size="sm" variant="outline">
              {t('nav.cta')}
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
