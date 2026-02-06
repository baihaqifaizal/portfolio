"use client"

import { CheckCircle2 } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import type { Certification } from "@/lib/types/translations"
import Image from "next/image"

export function ProfileCard() {
  const { t } = useLanguage()
  const certs = t('about.certificationsList') as Certification[]

  return (
    <div className="lg:col-span-2">
      <div className="card sticky top-24">
        <h2 className="section-label">{t('about.label')}</h2>
        <h3 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">
          {t('about.name')} <span className="text-muted-foreground">{t('about.surname')}</span>
        </h3>
        <p className="text-primary-subtle mb-6">
          <span className="text-foreground font-medium">{t('about.location')}</span> • {t('about.availability')}
        </p>
        
        <div className="aspect-square w-full bg-muted border border-border rounded-2xl relative overflow-hidden mb-6">
          <Image 
            src="/images/portrait.png" 
            alt="Faizal Baihaqi" 
            fill 
            sizes="(max-width: 768px) 100vw, 400px"
            priority={false}
            quality={90}
            className="object-cover"
          />
        </div>

        <div className="card-outline">
          <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-primary" />
            {t('about.certifications')}
          </h4>
          <div className="grid grid-cols-1 gap-3">
            {certs.map((cert, idx) => (
              <div key={idx} className="group">
                <div className="text-sm font-medium text-foreground mb-1">{cert.title}</div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="px-2 py-0.5 font-mono bg-primary/10 text-primary border border-primary/20 rounded-md">
                    {cert.year}
                  </span>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-primary">{cert.issuer}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
