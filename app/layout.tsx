import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  display: 'swap',
})

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'], 
  variable: '--font-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Faizal Baihaqi | Systems Builder & Software Engineer',
  description: '10+ years building mission-critical digital systems for education, civic services, and institutions. Specialized in infrastructure resilience engineering with Next.js, TypeScript, and system design.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://portfolio.dev',
    title: 'Faizal Baihaqi | Systems Builder',
    description: 'Systems builder with 10+ years designing real-world digital systems for education and civic services.',
    siteName: 'Faizal Baihaqi Portfolio',
  },
}

import { Navbar } from '@/components/layout/Navbar'
import { ThemeProvider } from '@/lib/theme-context'
import { LanguageProvider } from '@/lib/language-context'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body className={cn(
        inter.variable, 
        jakarta.variable, 
        "min-h-screen font-sans bg-background text-foreground"
      )}>
        <ThemeProvider>
          <LanguageProvider>
            <Navbar />
            <main className="relative flex min-h-screen flex-col">
              {children}
            </main>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
