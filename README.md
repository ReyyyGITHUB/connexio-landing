# Connexio Landing Page

> Official, high-performance landing page for **Connexio** — the cross-platform project-based terminal manager for developers.

![Hero Showcase](src/assets/Screenshot%202026-06-14%20093535.png)

This repository contains the marketing site and download portal for Connexio. Built using **React 19**, **Vite**, and **Tailwind CSS v4**, the site features immersive animations and smooth scroll interactions.

---

## 🚀 Key Features

### 💻 Dynamic OS & Architecture Detection
- Automatically detects user's OS: Windows (`.exe` / `.msi`), macOS (`.dmg` / `.zip`), or Linux (`.AppImage` / `.deb`).
- Renders responsive, platform-specific download buttons instantly on [Hero.tsx](src/components/Hero.tsx).

### 🔄 Interactive Feature Timeline
- Scroll-linked tab system using Framer Motion and GSAP.
- Pinning effects and interactive navigation in [FeaturesScroll.tsx](src/components/FeaturesScroll.tsx).

### ⚡ Performance & Polish
- Smooth inertia scrolling via Lenis.
- Modern CSS grid layout in [TechGrid.tsx](src/components/TechGrid.tsx) displaying app specs.

---

## 🛠️ Architecture & Tech Stack

| Component | Technology | Description |
| :--- | :--- | :--- |
| **Core Framework** | React 19 + TypeScript | Type-safe UI components and modern React runtime. |
| **Styles** | Tailwind CSS v4 | High-performance utilities and native CSS variables. |
| **Animations** | GSAP & Framer Motion | Timeline controls for scroll triggers & micro-interactions. |
| **Scroll Engine** | Lenis | Immersive scroll physics. |
| **E2E Testing** | Playwright | Automation test suite. |

---

## 📂 Codebase Tour

- `src/`
  - [App.tsx](src/App.tsx): Root layout with Lenis scroll provider.
  - `components/`
    - [Header.tsx](src/components/Header.tsx): Sticky floating navbar with navigation triggers.
    - [Hero.tsx](src/components/Hero.tsx): Auto-detecting download portal.
    - [FeaturesScroll.tsx](src/components/FeaturesScroll.tsx): Interactive feature timeline.
    - [TechGrid.tsx](src/components/TechGrid.tsx): Modular grid presenting specifications.
    - [Footer.tsx](src/components/Footer.tsx): Footer component.
  - [constants.ts](src/constants.ts): GitHub repository release paths and configurations.

---

## ⚙️ Development Guide

### 1. Prerequisites
- Node.js `18.x` or higher
- npm `9.x` or higher

### 2. Quick Setup
```bash
# Clone the repository
git clone https://github.com/yandanp/connexio-landing.git
cd connexio-landing

# Install local dependencies
npm install

# Launch local dev server (default http://localhost:5173)
npm run dev
```

### 3. Build & Test Commands

- **Development Build**: `npm run dev` (Hot reloading enabled).
- **Production Build**: `npm run build` (Typecheck via `tsc` + asset compilation via Vite).
- **Preview Production**: `npm run preview` (Serve local build files).
- **Linter**: `npm run lint` (ESLint checks).
- **E2E Testing**: `npx playwright test` (Runs automated Playwright UI tests).
