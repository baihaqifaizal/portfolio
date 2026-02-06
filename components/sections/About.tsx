"use client"

import { ProfileCard, ExpertiseCard, StatsCard } from "./about-components"

export function About() {
  return (
    <section className="section-spacing bg-muted/20">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          <ProfileCard />
          <div className="lg:col-span-3 space-y-6">
            <ExpertiseCard />
            <StatsCard />
          </div>
        </div>
      </div>
    </section>
  )
}
