// Translation type definitions for type-safe i18n

export interface Certification {
  title: string
  issuer: string
  year: string
}

export interface LanguageSkill {
  language: string
  level: string
}

export interface Stat {
  value: string
  label: string
}

export interface Testimonial {
  text: string
  author: string
  role: string
  company: string
}

export interface WhatIDo {
  title: string
  items: string[]
}

export interface Bio {
  p1: string
  p2: string
  whatIDo: WhatIDo
}

export interface Expertise {
  title: string
  technical: string
  humanCentered: string
  technicalSkills: string[]
  humanSkills: string[]
}

export interface HeroDescription {
  intro: string
  highlight1: string
  text1: string
  highlight2: string
  text2: string
  highlight3: string
  end: string
}

export interface Stats {
  experience: Stat
  projects: Stat
  institutions: Stat
  students: Stat
}
