# Connexio Landing Page

The official, high-performance landing page for **Connexio**—the cross-platform project-based terminal manager for developers.

Built with **React 19**, **Vite**, and **Tailwind CSS v4**, featuring immersive animations via **GSAP**, **Framer Motion**, and **Lenis** smooth scroll.

## 🚀 Features

- **Dynamic Hero Section**: Multi-platform auto-detect CTA pointing to specific OS installers (Windows, macOS, Linux).
- **Interactive Feature Showcase**: Tabbed scroll-linked animation component presenting the core features of Connexio.
- **Tech Grid**: Clean showcase of the underlying application architecture (Electron, React, xterm.js).
- **Smooth Scroll**: Integrated with Lenis for responsive and fluid inertia scrolling.
- **Optimized Assets**: Replaced heavy GIFs with lightweight HTML5 videos and optimized assets for better Lighthouse scores.

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript
- **Bundler**: Vite 8
- **Styling**: Tailwind CSS v4 + PostCSS
- **Animations**: GSAP, Framer Motion
- **Scroll**: Lenis Smooth Scroll
- **Icons**: Lucide React

## 📂 Project Structure

```
connexio-landing/
├── src/
│   ├── components/
│   │   ├── Header.tsx           # Floating responsive navbar
│   │   ├── Hero.tsx             # Call to Action & OS detection
│   │   ├── FeaturesScroll.tsx   # Interactive tabbed feature preview
│   │   ├── TechGrid.tsx         # App stack & specs grid
│   │   └── Footer.tsx           # Deep footer with utility links
│   ├── assets/                  # Images, videos & static assets
│   ├── constants.ts             # Links, GitHub release paths & configurations
│   ├── App.tsx                  # Main layout & Lenis scroll initializer
│   └── index.css                # Global Tailwind directives & styling tokens
```

## ⚙️ Development Setup

### Prerequisites
- Node.js 18+
- npm 9+

### Installation
```bash
# Clone the repository
git clone https://github.com/yandanp/connexio-landing.git
cd connexio-landing

# Install dependencies
npm install
```

### Commands
- Run development server: `npm run dev`
- Build for production: `npm run build`
- Preview production build: `npm run preview`
- Lint code: `npm run lint`

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
