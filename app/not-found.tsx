"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-6">
      <div className="max-w-2xl text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Page Not Found</h2>
          <p className="text-xl text-zinc-400 leading-relaxed">
            Looks like you've wandered into uncharted territory. The page you're looking for doesn't exist—or maybe it's just in a low-resource environment with zero connectivity.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link href="/">
            <Button variant="premium" size="lg" className="gap-2">
              <Home className="w-5 h-5" />
              Go Home
            </Button>
          </Link>
          <button onClick={() => window.history.back()}>
            <Button variant="outline" size="lg" className="gap-2">
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </Button>
          </button>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-sm text-zinc-500 mb-4">Suggested pages:</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/#works" className="text-zinc-400 hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="/#about" className="text-zinc-400 hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/resume" className="text-zinc-400 hover:text-primary transition-colors">
              Resume
            </Link>
            <Link href="/#contact" className="text-zinc-400 hover:text-primary transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
