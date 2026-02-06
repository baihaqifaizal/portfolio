"use client"

import { ThemeProvider } from '@/lib/theme-context'
import { LanguageProvider } from '@/lib/language-context'
import { Navbar } from '@/components/layout/Navbar'
import { ReactNode } from 'react'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Navbar />
        <main className="relative flex min-h-screen flex-col">
          {children}
        </main>
      </LanguageProvider>
    </ThemeProvider>
  )
}
