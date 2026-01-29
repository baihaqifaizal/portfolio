"use client"

import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/language-context"
import { useTheme } from "@/lib/theme-context"
import { Sun, Moon } from "lucide-react"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { language, setLanguage, t } = useLanguage()
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent backdrop-blur-none",
      scrolled && "bg-background/80 backdrop-blur-md border-border"
    )}>
      <div className="container-main flex items-center justify-between h-20">
        <Link href="/" className="text-xl font-bold tracking-tighter hover:text-primary transition-colors">
          FAIZAL <span className="text-primary">BAIHAQI</span>
        </Link>

        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <Link href="/#works" className="hover:text-foreground transition-colors">{t('nav.works')}</Link>
            <Link href="/#about" className="hover:text-foreground transition-colors">{t('nav.about')}</Link>
            <Link href="/resume" className="hover:text-foreground transition-colors">{t('nav.resume')}</Link>
            <Link href="/#contact" className="hover:text-foreground transition-colors">{t('nav.contact')}</Link>
            
            <Link href="/#contact">
              <Button variant="outline" size="sm">
                {t('nav.cta')}
              </Button>
            </Link>
          </nav>

          {/* Controls */}
          <div className="flex items-center gap-2 ml-4 border-l border-border pl-4">
            {/* Language Switcher */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'id' : 'en')}
              className="w-9 h-9 flex items-center justify-center hover:bg-zinc-800 transition-colors text-xl"
              title={language === 'en' ? 'Switch to Indonesian' : 'Switch to English'}
            >
              {language === 'en' ? '🇮🇩' : '🇬🇧'}
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="w-9 h-9 flex items-center justify-center hover:bg-muted transition-colors"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-muted-foreground" />
              ) : (
                <Moon className="w-5 h-5 text-muted-foreground" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
