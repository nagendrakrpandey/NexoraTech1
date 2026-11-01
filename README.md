# NexoraTech — Enterprise Corporate Website
> **Building Smarter Tomorrow** • Enterprise Digital Engineering, Cloud Infrastructure, SaaS Platforms, and AI Integration.

---

## 🚀 Overview

A production-quality, high-performance, and visually cinematic corporate website built for **NexoraTech**. Engineered with Next.js 15, TypeScript, Tailwind CSS, Lucide icons, and Canvas/CSS micro-animations.

The design embodies the official NexoraTech brand mark:
- **Midnight Navy:** `#07111F`
- **Deep Blue:** `#102A56`
- **Electric Blue:** `#3478F6`
- **Cyan Accent:** `#29D3E8`
- **White Pure:** `#F8FAFC`
- **Slate Gray:** `#94A3B8`

---

## 💎 Features & Structure

1. **Brand & Official Logo**:
   - Integrated official NexoraTech 3D faceted "N" emblem with upward cyan surge arrow.
   - Preserves exact spelling, proportions, and tagline *"Building Smarter Tomorrow"*.
   - Assets processed and placed in `/public/assets/logo/`:
     - `nexora-logo-dark.png` (High-res dark-theme optimized transparent PNG)
     - `nexora-logo-transparent.png` (Original transparent asset)
     - `nexora-icon.png` (Square icon mark)
     - `favicon.ico` & `favicon.png` (High-res browser favicons)

2. **Cinematic Hero**:
   - Dark navy atmospheric lighting with interactive HTML5 particle canvas nodes.
   - High-resolution 3D digital infrastructure visual poster (`/public/assets/hero-bg.jpg`).
   - "Strategy • Engineering • Cloud • AI" trust pill and dual CTAs.

3. **Technology Capability Strip**:
   - Interactive category filtering (Languages & Frameworks, Cloud & DevOps, AI & Data, Databases).
   - Real, editable production stacks (Next.js, Go, Kubernetes, Terraform, PyTorch, pgvector).

4. **15 Business Services & Deep-Dive Inspector**:
   - Interactive service selector with dual-panel layout.
   - Dynamic inspection of **Problem Solved**, **Exact Deliverables**, and **Engineered Outcomes**.

5. **"From Idea to Production" (7-Stage Methodology)**:
   - Discover → Architect → Design → Develop → Integrate → Deploy → Optimize.
   - Interactive stage inspector with verified deliverables and architectural review gates.

6. **Illustrative Solution Blueprints**:
   - Three clearly labeled conceptual reference architectures:
     - *NextGen Cloud Orchestrator* (Kubernetes & FinOps)
     - *Autonomous Knowledge Copilot* (Enterprise GenAI & RAG)
     - *HyperScale Multi-Tenant Engine* (B2B SaaS with RLS)

7. **Dedicated Cloud, AI, and Enterprise Sections**:
   - **Cloud Infrastructure & Reliability Engineering**: Multi-cloud, GitOps, Kubernetes, FinOps.
   - **AI Engineering & Autonomous Pipelines**: RAG hybrid search, agent graphs, deterministic guardrails.
   - **Enterprise Engineering**: Zero-Trust security, Strangler Fig legacy modernization, OpenAPI contracts.

8. **Industries & Engagement Models**:
   - 7 Domain capabilities (SaaS, FinTech, Healthcare, Logistics, Retail, EdTech, Legal).
   - 3 Transparent engagement models: Dedicated Engineering Pod, Fixed-Scope Projects, and SLA Support.

9. **Interactive FAQ Accordion**:
   - Clear answers on IP ownership (100% client owned), timelines, security, and migration.

10. **Production-Ready Contact & Project Inquiry System**:
    - Full client-side & server-side validation.
    - POST endpoint `/api/contact` returning structured lead tracking ID.
    - Local staging / dev-mode logging with clear feedback.
    - Optional webhook integration (`CONTACT_WEBHOOK_URL` / `RESEND_API_KEY`).

11. **SEO & Accessibility**:
    - Semantic landmarks and WCAG 2.2 AA compliant contrast.
    - Automated `/sitemap.xml` and `/robots.txt`.
    - JSON-LD Organization schema for search engine rich snippets.

---

## 🛠️ Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Locally in Development Mode
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build & Run for Production
```bash
npm run build
npm run start
```

---

## ⚙️ Central Configuration

All company contact details, navigation links, and social URLs can be modified in one file:
👉 `src/config/site.ts`

```typescript
export const siteConfig = {
  name: "NexoraTech",
  tagline: "Building Smarter Tomorrow",
  contact: {
    email: "contact@nexoratech.io",
    phone: "+1 (800) 555-NEXORA",
    address: { ... },
    officeHours: "..."
  },
  social: {
    linkedin: "...",
    github: "...",
    twitter: "..."
  }
};
```
