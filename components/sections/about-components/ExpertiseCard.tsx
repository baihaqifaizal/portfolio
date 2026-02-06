"use client"

import { CheckCircle2 } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import type { Bio, Expertise } from "@/lib/types/translations"
import { 
  SiNextdotjs, 
  SiTypescript, 
  SiNodedotjs, 
  SiPostgresql, 
  SiPrisma, 
  SiPython 
} from "react-icons/si"

const techStack = [
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Prisma", icon: SiPrisma },
  { name: "Python", icon: SiPython },
]

export function ExpertiseCard() {
  const { t } = useLanguage()
  const bio = t('about.bio') as Bio
  const expertise = t('about.expertise') as Expertise
  const technicalSkills = expertise.technicalSkills
  const humanSkills = expertise.humanSkills

  return (
    <>
      {/* Bio Card */}
      <div className="card">
        <div className="space-y-5 text-base leading-relaxed">
          <p className="text-foreground">{bio.p1}</p>
          <p className="text-primary-subtle">{bio.p2}</p>
          
          <div className="divider" />
          
          <div>
            <h5 className="text-sm font-bold text-foreground mb-3 uppercase tracking-wider">{bio.whatIDo.title}</h5>
            <ul className="space-y-2">
              {bio.whatIDo.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-primary-subtle">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Expertise Card */}
      <div className="card">
        <h4 className="text-xl font-bold text-foreground mb-6">{expertise.title}</h4>
        
        <div className="space-y-6">
          <div>
            <h5 className="text-sm font-bold text-primary mb-3 uppercase tracking-wider">{expertise.technical}</h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {technicalSkills.map((skill) =>
                <div key={skill} className="flex items-start gap-2 text-primary-subtle">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{skill}</span>
                </div>
              )}
            </div>
          </div>

          <div className="divider" />

          <div>
            <h5 className="text-sm font-bold text-foreground mb-3 uppercase tracking-wider">{expertise.humanCentered}</h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {humanSkills.map((skill) =>
                <div key={skill} className="flex items-start gap-2 text-primary-subtle">
                  <CheckCircle2 className="w-4 h-4 text-foreground flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{skill}</span>
                </div>
              )}
            </div>
          </div>

          <div className="divider" />

          <div>
            <h5 className="text-sm font-bold text-muted-foreground mb-3 uppercase tracking-wider">Tech Stack</h5>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
              {techStack.map(tech => (
                <div 
                  key={tech.name} 
                  className="flex flex-col items-center gap-2 p-3 rounded-2xl border border-border bg-muted/30 hover:border-primary/50 hover:bg-primary/5 transition-all group"
                  title={tech.name}
                >
                  <tech.icon className="w-8 h-8 text-foreground group-hover:text-primary transition-colors" />
                  <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors text-center">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
