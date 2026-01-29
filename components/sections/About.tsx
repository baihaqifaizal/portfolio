"use client"

import { Button } from "@/components/ui/Button"
import { CheckCircle2, Globe2, TrendingUp } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
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

export function About() {
  const { t } = useLanguage()
  const bio = t('about.bio')
  const expertise = t('about.expertise')
  const skills = expertise.skills
  const certs = t('about.certificationsList')
  const stats = t('about.stats')
  const languages = t('about.languagesList')
  
  return (
    <section className="section-spacing bg-muted/20">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left Column - Profile Card */}
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

              {/* Certifications Card */}
              <div className="card-outline">
                <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  {t('about.certifications')}
                </h4>
                <div className="grid grid-cols-1 gap-3">
                  {certs.map((cert: any, idx: number) => (
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

          {/* Right Column - Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Bio Card */}
            <div className="card">
              <div className="space-y-4 text-base leading-relaxed text-primary-subtle">
                <p>
                  <strong className="text-foreground">{bio.p1.strong}</strong>{bio.p1.text}
                </p>
                <p>
                  {bio.p2.text1}<span className="text-primary font-medium">{bio.p2.highlight}</span>{bio.p2.text2}
                </p>
                <p>
                  {bio.p3.text}<span className="text-primary font-medium">{bio.p3.highlight}</span>
                </p>
              </div>
            </div>

            {/* Expertise Card */}
            <div className="card">
              <h4 className="text-xl font-bold text-foreground mb-6">{expertise.title}</h4>
              
              <div className="space-y-6">
                {/* Technical Skills */}
                <div>
                  <h5 className="text-sm font-bold text-primary mb-3 uppercase tracking-wider">{expertise.technical}</h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      skills.systemDesign,
                      skills.dataModeling,
                      skills.workflowAutomation,
                      skills.typeSafe,
                      skills.fullStack,
                      skills.restApi,
                      skills.secureWorkflow
                    ].map(skill =>
                      <div key={skill} className="flex items-start gap-2 text-primary-subtle">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{skill}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="divider" />

                {/* Human-Centered Skills */}
                <div>
                  <h5 className="text-sm font-bold text-foreground mb-3 uppercase tracking-wider">{expertise.humanCentered}</h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      skills.instructional,
                      skills.assessment,
                      skills.stakeholder,
                      skills.uiux,
                      skills.communityTrust
                    ].map(skill =>
                      <div key={skill} className="flex items-start gap-2 text-primary-subtle">
                        <CheckCircle2 className="w-4 h-4 text-foreground flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{skill}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="divider" />

                {/* Tech Stack with Icons */}
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

            {/* Quick Stats & Languages Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Quick Stats Card */}
              <div className="card">
                <h4 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  {t('about.quickStats')}
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {Object.values(stats).map((stat: any, idx: number) => (
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
                  {languages.map((lang: any, idx: number) => (
                    <div key={idx} className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">{lang.language}</span>
                      <span className="text-xs px-2 py-1 bg-primary/10 text-primary border border-primary/20 rounded-md">{lang.level}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
