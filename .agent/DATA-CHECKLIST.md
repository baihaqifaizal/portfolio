# CHECKLIST DATA PORTOFOLIO - Yang Perlu Diisi

## 🟢 SUDAH ADA (Dari Resume.md)

- ✅ Nama: **Faizal Baihaqi**
- ✅ Job Title: **Systems Builder** / Software Engineer
- ✅ Lokasi: Indonesia (Open for Remote Work)
- ✅ Professional Summary
- ✅ Work Experience
- ✅ Projects (3 case studies)
- ✅ Skills & Tech Stack
- ✅ Certifications

---

## 🔴 YANG KURANG / PERLU UPDATE

### 1. **Identitas & Kontak** (PENTING)

```yaml
NAMA_LENGKAP: "Faizal Baihaqi" # ✅ Sudah ada
TAGLINE: "Systems Builder" # ✅ Sudah ada

# 🔴 YANG MASIH PLACEHOLDER - ISI INI:
EMAIL: "your.email@domain.com" # ← Ganti dengan email asli
LINKEDIN: "#" # ← Link LinkedIn profile
GITHUB: "#" # ← Link GitHub profile
TWITTER_X: "#" # ← Link Twitter/X (opsional)
INSTAGRAM: "#" # ← Link Instagram (opsional)

# ✅ Opsional (Privacy-Sensitive - TIDAK WAJIB):
TANGGAL_LAHIR: null # ❌ TIDAK perlu di portfolio public
ALAMAT_LENGKAP: null # ❌ TIDAK perlu (cukup "Indonesia")
PHONE_WHATSAPP: null # ⚠️ Opsional (risiko spam, lebih baik email)
```

---

### 2. **Visual Assets** (RECOMMENDED)

```yaml
# 🔴 PERLU UPLOAD:
FOTO_PORTRAIT:
  - Path: "/images/portrait.jpg"
  - Size: 400x400px minimum
  - Style: Professional headshot
  - Format: JPG/PNG/WebP
  - Status: 🔴 BELUM ADA (placeholder: "[ Portrait Placeholder ]")

PROJECT_SCREENSHOTS:
  - project_1_civic_platform.jpg   # 🔴 Screenshot/mockup Civic Platform
  - project_2_recruitment.jpg      # 🔴 Screenshot Recruitment System
  - project_3_ai_governance.jpg    # 🔴 Screenshot AI System
  - Status: 🔴 BELUM ADA (placeholder: "[ Project Image Placeholder ]")

# ✅ Opsional (Nice to Have):
LOGO_PERSONAL: null               # Personal branding logo (opsional)
BACKGROUND_HERO: null             # Custom hero background (opsional, sudah ada default)
```

---

### 3. **Resume/CV File** (HIGHLY RECOMMENDED)

```yaml
CV_PDF:
  - Filename: "Faizal-Baihaqi-Resume-2026.pdf"
  - Path: "/public/resume.pdf"
  - Status: 🔴 BELUM ADA
  - Action: Export resume.md ke PDF profesional
  - Placement: Hero section "Download Resume" button
```

---

### 4. **Testimonials / Social Proof** (IMPORTANT)

```yaml
# 🔴 PERLU DIKUMPULKAN:
TESTIMONIAL_1:
  text: "[Quote dari atasan/client]"
  author: "[Nama]"
  role: "[Job Title]"
  company: "[Company/Organization]"

TESTIMONIAL_2:
  text: "[Quote dari atasan/client]"
  author: "[Nama]"
  role: "[Job Title]"
  company: "[Company/Organization]"

# Sumber Potensial:
# - Gandiwa Network (CTO/Coordinator)
# - MA Nurul Hidayah (Principal/Kepala Sekolah)
# - Freelance Clients (jika ada izin)

Status: 🔴 BELUM ADA (struktur ada, data kosong)
```

---

### 5. **Project Details (Optional Enhancement)**

```yaml
# ✅ Sudah ada overview, tapi bisa diperkaya:
PROJECT_DETAILS:
  - Challenge: "Apa masalah spesifik?"
  - Solution: "Bagaimana cara solve?"
  - My_Role: "Peran apa yang Anda lakukan?"
  - Tech_Stack: ✅ Sudah ada
  - Results: ✅ Sudah ada
  - Learnings: "Apa yang dipelajari?"

Status: ⚠️ OPSIONAL (bisa ditambah nanti di halaman detail)
```

---

## 📊 PRIORITAS PENGISIAN

### **TIER 1 - CRITICAL (Sebelum Launch):**

1. 🔴 **Email**: Ganti `your.email@domain.com` dengan email asli
2. 🔴 **Social Links**: Update LinkedIn, GitHub, Twitter/X
3. 🟡 **Foto Portrait**: Upload foto profesional (minimal 1)
4. 🟡 **CV PDF**: Buat PDF dari resume.md dan upload

### **TIER 2 - IMPORTANT (Minggu Pertama):**

5. 🔴 **Testimonials**: Kumpulkan minimal 2 testimonial asli
6. 🟡 **Project Screenshots**: Upload gambar/mockup untuk 3 projects
7. 🟡 **Domain**: Setup domain custom (e.g., faizalbaihaqi.dev)

### **TIER 3 - NICE TO HAVE (Opsional):**

8. ⚠️ **About Photo**: Foto landscape/workspace untuk About section
9. ⚠️ **Case Study Pages**: Halaman detail per project
10. ⚠️ **Blog/Articles**: Jika ingin tambah konten SEO (GEO)

---

## 🚫 YANG TIDAK PERLU (Privacy & Modern Best Practice)

❌ **Jangan Tampilkan di Portfolio Public:**

- Tanggal Lahir (risiko age discrimination)
- Alamat Lengkap (cukup "Indonesia, Open for Remote")
- Nomor KTP/ID
- Status Pernikahan
- Agama
- Foto keluarga
- Nomor telepon (kecuali memang ingin dihubungi via WA, tapi risiko spam tinggi)

✅ **Cukup:**

- Nama
- Job Title
- Lokasi (kota/negara)
- Email profesional
- LinkedIn + GitHub
- Professional headshot

---

## 📝 TEMPLATE UNTUK ISI DATA

Copy struktur ini dan isi:

### **KONTAK (Ganti di `components/sections/Contact.tsx`):**

```javascript
// LINE 26 - Ganti email:
your.email@domain.com → [EMAIL_ASLI_ANDA]

// LINE 30-41 - Ganti social links:
LinkedIn: # → https://linkedin.com/in/[username]
GitHub: # → https://github.com/[username]
Twitter: # → https://twitter.com/[username]
Instagram: # → (opsional)
```

### **TESTIMONIAL (Ganti di `components/sections/Testimonials.tsx`):**

```javascript
// LINE 6-17 - Ganti dummy testimonials:
{
  text: "[ISI TESTIMONI 1]",
  author: "[NAMA PEMBERI TESTIMONI]",
  role: "[JABATAN]",
  company: "[ORGANISASI/PERUSAHAAN]"
},
{
  text: "[ISI TESTIMONI 2]",
  author: "[NAMA PEMBERI TESTIMONI]",
  role: "[JABATAN]",
  company: "[ORGANISASI/PERUSAHAAN]"
}
```

### **FOTO (Upload ke `public/images/`):**

```
1. Portrait: public/images/portrait.jpg
2. Project 1: public/images/project-civic.jpg
3. Project 2: public/images/project-recruitment.jpg
4. Project 3: public/images/project-ai.jpg
5. CV PDF: public/resume.pdf
```

---

## ✅ KESIMPULAN

**Data yang WAJIB diisi:**

1. Email asli
2. LinkedIn + GitHub links
3. Foto portrait (minimal 1)
4. Testimonials (minimal 2)

**Data yang OPSIONAL:**

- Project screenshots (bisa pakai placeholder dulu)
- CV PDF (recommended tapi bisa ditambah nanti)
- Phone/WhatsApp (tidak recommended untuk portfolio public)

**Data yang TIDAK PERLU:**

- Tanggal lahir
- Alamat lengkap
- Data pribadi sensitif

**Status Saat Ini:**

- Struktur: ✅ 100%
- Content: ✅ 75% (resume data sudah masuk)
- Kontak: 🔴 0% (masih placeholder)
- Visual: 🔴 0% (masih placeholder)

**Siap launch setelah:** Email + Social Links + 1 Foto + 2 Testimonials diisi!
