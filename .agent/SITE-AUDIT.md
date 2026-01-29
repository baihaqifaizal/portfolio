# AUDIT PORTFOLIO WEBSITE - STRUKTUR & HALAMAN

## 📊 STATUS SAAT INI

### **Current Pages:**

1. ✅ **Homepage** (`/`) - Single page dengan semua sections:
   - Hero
   - Projects
   - About
   - Testimonials
   - Contact

### **Missing Pages:**

- ❌ Individual Project Detail Pages
- ❌ Case Study Deep Dive Pages
- ❌ Resume/CV Page (downloadable)
- ❌ 404 Error Page
- ❌ About (as separate page - optional)

---

## 🎯 REKOMENDASI HALAMAN TAMBAHAN

### **TIER 1 - CRITICAL (Must Have):**

#### 1. **Project Detail Pages** (`/projects/[slug]`)

**Why:** HRD akan ingin detail lengkap tentang setiap project.

**Structure:**

```
/projects/civic-platform
/projects/recruitment-system
/projects/ai-governance
```

**Content per page:**

- Hero dengan project image besar
- Problem Statement
- Solution Approach
- Your Role & Responsibilities
- Technical Implementation
- Stakeholder Work (collaboration dengan officials, teachers, etc)
- Results & Impact (metrics)
- Learnings
- Tech Stack detail
- Gallery/Screenshots
- Next/Previous project navigation

---

#### 2. **Resume Page** (`/resume`)

**Why:** Employers butuh akses cepat ke resume formal.

**Content:**

- Embeddable PDF viewer
- Download button
- Alternative: HTML version yang print-friendly
- Breadcrumb: Home > Resume

---

#### 3. **404 Error Page** (`/not-found`)

**Why:** Professional polish, menangani broken links.

**Content:**

- "Page Not Found"
- Witty copy yang align dengan brand
- Navigation back to home
- Suggested links (Projects, About, Contact)

---

### **TIER 2 - NICE TO HAVE (Recommended):**

#### 4. **Standalone About Page** (`/about`)

**Why:** Deep dive tentang background, philosophy, dan process.

**Content:**

- Extended bio
- Teaching journey (music teacher → school teacher → learning systems)
- Photos/timeline
- Work process/methodology
- Values & philosophy
- Downloadable resume link

---

#### 5. **Contact Page** (`/contact`)

**Why:** Dedicated space untuk networking.

**Content:**

- Contact form (dengan backend: Formspree, EmailJS, atau custom API)
- Email, LinkedIn, GitHub
- Availability status
- Preferred communication method
- Response time expectation

---

### **TIER 3 - OPTIONAL (Enhancement):**

#### 6. **Blog/Writing** (`/blog`)

**Why:** SEO boost, thought leadership, GEO optimization.

**Content:**

- Articles tentang:
  - "Building Civic Tech in Low-Resource Environments"
  - "Teaching Non-Technical Stakeholders About Technology"
  - "Instructional Design Principles for Software"
- Case study deep dives
- Lessons learned

---

#### 7. **Uses/Tools** (`/uses`)

**Why:** Transparency, helpful untuk community, SEO.

**Content:**

- Software tools Anda gunakan
- Hardware setup
- Learning resources
- Development workflow

---

## 📁 PROPOSED SITE STRUCTURE

```
Portfolio/
├── / (Home)
│   ├── Hero
│   ├── Projects Preview (3 cards)
│   ├── About Summary
│   ├── Testimonials
│   └── Contact CTA
│
├── /projects
│   ├── /civic-platform
│   ├── /recruitment-system
│   └── /ai-governance
│
├── /resume
│   └── PDF viewer + download
│
├── /about (optional)
│   └── Extended bio + philosophy
│
├── /contact (optional)
│   └── Contact form + info
│
└── /404
    └── Error handling
```

---

## 🛠️ IMPLEMENTATION PRIORITY

### **Phase 1: CRITICAL (Do Now)**

1. ✅ Create `/projects/[slug]` dynamic route
2. ✅ Build Project Detail template
3. ✅ Create `/resume` page
4. ✅ Create `/404` page

### **Phase 2: POLISH (This Week)**

5. ⚠️ Add navigation between projects
6. ⚠️ Enhance SEO metadata per page
7. ⚠️ Add breadcrumbs
8. ⚠️ Implement contact form backend

### **Phase 3: ENHANCEMENT (Optional)**

9. ⚠️ Standalone `/about` page
10. ⚠️ Standalone `/contact` page
11. ⚠️ Blog system (if needed for SEO/GEO)

---

## ✅ IMMEDIATE ACTION PLAN

I will create:

1. **`app/projects/[slug]/page.tsx`** - Dynamic project detail pages
2. **`app/resume/page.tsx`** - Resume/CV page
3. **`app/not-found.tsx`** - 404 error page
4. **Update Navbar** - Add links to new pages
5. **Create project data** - Centralized project data file

---

## 📊 EXPECTED OUTCOME

**Before:**

- 1 page (everything in homepage)
- No deep dive into projects
- No structured navigation

**After:**

- 6+ pages (Home + 3 Projects + Resume + 404)
- Professional multi-page structure
- Better SEO (more pages = more indexable content)
- Better UX (focused pages with specific purposes)
- More professional (shows attention to detail)

---

## 🎨 DESIGN CONSISTENCY

All new pages will follow:

- ✅ Same color scheme (Dark + Acid Green)
- ✅ Same typography (Inter + Jakarta Sans)
- ✅ Same spacing & layout patterns
- ✅ Consistent navigation
- ✅ Mobile-responsive
- ✅ Sharp design (0px radius)

Ready to implement Phase 1!
