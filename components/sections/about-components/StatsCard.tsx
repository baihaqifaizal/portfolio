"use client"

import { TrendingUp, Globe2 } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import type { Stat, LanguageSkill } from "@/lib/types/translations"

export function StatsCard() {
  const { t } = useLanguage()
  const stats = t('about.stats') as Record<string, Stat>
  const languages = t('about.languagesList') as LanguageSkill[]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {/* Quick Stats Card */}
      <div className="card">
        <h4 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-primary" />
          {t('about.quickStats')}
        </h4>
        <div className="grid grid-cols-2 gap-4">
          {Object.values(stats).map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Languages Card */}
      <div className="card">
        <h4 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
          <Globe2 className="w-5 h-5 text-primary" />
          {t('about.languages')}
        </h4>
        <div className="space-y-3">
          {languages.map((lang, idx) => (
            <div key={idx} className="flex justify-between items-center">
              <span className="text-sm font-medium text-foreground">{lang.language}</span>
              <span className="text-xs px-2 py-1 bg-primary/10 text-primary border border-primary/20 rounded-md">{lang.level}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
