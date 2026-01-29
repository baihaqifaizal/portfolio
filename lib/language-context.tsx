"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Language = 'en' | 'id'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Navbar
    'nav.works': 'Selected Works',
    'nav.about': 'About',
    'nav.resume': 'Resume',
    'nav.contact': 'Contact',
    'nav.cta': "Let's Talk",
    
    // Hero
    'hero.title.1': 'SYSTEMS THAT',
    'hero.title.2': 'WORK IN THE REAL WORLD',
    'hero.description': 'I build mission-critical systems that operate reliably where others fail: unstable infrastructure, non-technical users, zero-training adoption. Combining software engineering, instructional design, and systems thinking to deliver production-grade solutions for education, civic services, and institutions.',
    'hero.cta.works': 'View Selected Works',
    'hero.cta.resume': 'Download Resume / CV',
    
    // Projects
    'projects.title': 'SELECTED WORKS',
    'projects.heading': 'CASE STUDIES.',
    'projects.viewAll': 'View All Archives',
    'projects.keyImpact': 'Key Impact',
    'projects.viewCase': 'View Case Study',
    
    // About
    'about.title': 'ABOUT',
    'about.location': 'Indonesia • Open for Remote Work',
    'about.technical': 'Technical',
    'about.humanCentered': 'Human-Centered',
    'about.certifications': 'Certifications',
    
    // Contact
    'contact.title': 'CONTACT',
    'contact.heading.1': "LET'S BUILD",
    'contact.heading.2': 'THE FUTURE.',
    'contact.description': "Building systems where reliability, usability, and institutional trust are non-negotiable—even under infrastructure constraints most teams avoid. Let's discuss the problem you're solving.",
  },
  id: {
    // Navbar
    'nav.works': 'Karya Terpilih',
    'nav.about': 'Tentang',
    'nav.resume': 'Resume',
    'nav.contact': 'Kontak',
    'nav.cta': 'Mari Bicara',
    
    // Hero
    'hero.title.1': 'SISTEM YANG',
    'hero.title.2': 'BEKERJA DI DUNIA NYATA',
    'hero.description': 'Saya membangun sistem mission-critical yang beroperasi andal di kondisi yang dihindari tim lain: infrastruktur tidak stabil, pengguna non-teknis, adopsi tanpa pelatihan. Menggabungkan software engineering, instructional design, dan systems thinking untuk menghadirkan solusi production-grade untuk pendidikan, layanan publik, dan institusi.',
    'hero.cta.works': 'Lihat Karya Terpilih',
    'hero.cta.resume': 'Unduh Resume / CV',
    
    // Projects
    'projects.title': 'KARYA TERPILIH',
    'projects.heading': 'STUDI KASUS.',
    'projects.viewAll': 'Lihat Semua Arsip',
    'projects.keyImpact': 'Dampak Utama',
    'projects.viewCase': 'Lihat Studi Kasus',
    
    // About
    'about.title': 'TENTANG',
    'about.location': 'Indonesia • Terbuka untuk Remote',
    'about.technical': 'Teknis',
    'about.humanCentered': 'Human-Centered',
    'about.certifications': 'Sertifikasi',
    
    // Contact
    'contact.title': 'KONTAK',
    'contact.heading.1': 'MARI BANGUN',
    'contact.heading.2': 'MASA DEPAN.',
    'contact.description': 'Membangun sistem di mana keandalan, usability, dan kepercayaan institusional adalah non-negotiable—bahkan di bawah constraint infrastruktur yang dihindari kebanyakan tim. Mari diskusikan masalah yang Anda hadapi.',
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')

  useEffect(() => {
    const saved = localStorage.getItem('language') as Language
    if (saved && (saved === 'en' || saved === 'id')) {
      setLanguageState(saved)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language', lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
