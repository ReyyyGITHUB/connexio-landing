import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { Play, ChevronDown } from 'lucide-react'

export const Hero: React.FC = () => {
  const [downloadOpen, setDownloadOpen] = useState(false)
  const [detectedOS, setDetectedOS] = useState<'mac' | 'windows' | 'linux'>('mac')
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Detect platform
  useEffect(() => {
    const platform = window.navigator.platform.toLowerCase()
    if (platform.includes('win')) setDetectedOS('windows')
    else if (platform.includes('mac')) setDetectedOS('mac')
    else if (platform.includes('linux')) setDetectedOS('linux')
  }, [])

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDownloadOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Stagger variants for premium entrance feel
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.06,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1], // Custom premium ease-out
      },
    },
  }

  // OS SVGs
  const appleSvg = (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 170 170">
      <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.34.13-9.13-1.92-14.37-6.15-2.9-2.51-6.69-7.03-11.36-13.56-5.66-8.25-10.01-17.75-13.06-28.52-3.04-10.77-4.57-21.2-4.57-31.3 0-12.14 2.87-22.37 8.62-30.68 5.74-8.32 13.12-12.51 22.14-12.51 3.82 0 8.35.96 13.56 2.9 5.21 1.93 8.7 2.9 10.45 2.9 1.76 0 5.43-.97 11.02-2.9 5.59-1.94 9.77-2.8 12.55-2.58 9.72.77 17.26 4.39 22.61 10.87-9.56 5.78-14.28 13.84-14.17 24.2.1 8.28 3.11 15.18 9.03 20.72 5.92 5.54 12.92 8.44 20.97 8.71-2.92 8.52-6.52 16.59-10.82 24.23zM119.22 28.74c0-6.72-2.39-12.87-7.18-18.45 4.88-.58 9.88.94 15.02 4.58 5.14 3.64 8.77 8.37 10.87 14.2-5.74.45-11.16-1.37-16.27-5.46-5.11-4.1-7.44-9.35-7.44-14.87z"/>
    </svg>
  )

  const windowsSvg = (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
      <path d="M0 3.449L9.75 2.1v9.451H0V3.449zM0 12.45h9.75v9.45L0 20.551V12.45zm11.25-10.5L24 0v11.55H11.25V1.95zm0 20.1V12.45H24v11.55l-12.75-1.95z"/>
    </svg>
  )

  const linuxSvg = (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
      <path d="M12 2c-.66 0-1.25.25-1.72.66-.5.42-.87 1.01-1.03 1.72C8.6 4.7 7.7 5.72 7.7 7c0 1.02.57 1.93 1.41 2.38-.13.34-.21.72-.21 1.12 0 1.25.72 2.33 1.78 2.84-.13.53-.18 1.1-.12 1.66-.46.33-.87.77-1.19 1.28C8.5 16.03 8 16.94 8 18v1.5c0 .28.22.5.5.5h7c.28 0 .5-.22.5-.5V18c0-1.06-.5-1.97-1.37-2.72-.32-.51-.73-.95-1.19-1.28.06-.56.01-1.13-.12-1.66 1.06-.51 1.78-1.59 1.78-2.84 0-.4-.08-.78-.21-1.12.84-.45 1.41-1.36 1.41-2.38 0-1.28-.9-2.3-2.15-2.62-.16-.71-.53-1.3-1.03-1.72C13.25 2.25 12.66 2 12 2z"/>
    </svg>
  )

  const getOSLogo = (osType: 'mac' | 'windows' | 'linux') => {
    switch (osType) {
      case 'windows': return windowsSvg
      case 'linux': return linuxSvg
      default: return appleSvg
    }
  }

  const getOSLabel = (osType: 'mac' | 'windows' | 'linux') => {
    switch (osType) {
      case 'windows': return 'Windows'
      case 'linux': return 'Linux'
      default: return 'macOS'
    }
  }

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-start pt-32 px-6 overflow-hidden bg-obsidian">
      {/* Cinematic ambient lighting background overlay */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1440px] h-[600px] bg-gradient-to-b from-midnight via-obsidian/40 to-transparent pointer-events-none z-0" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl w-full flex flex-col items-center text-center mt-12"
      >
        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight leading-[1.08] text-pure-white max-w-3xl"
          style={{ letterSpacing: '-0.035em' }}
        >
          <span className="text-shine">Krea.ai</span> is the world's most powerful creative AI suite.
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="mt-6 text-base sm:text-lg text-fog max-w-xl font-normal leading-[1.4]"
        >
          Generate, enhance, and edit images, videos, or 3D meshes for free with AI.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-row items-center gap-4 relative z-20"
        >
          {/* Download Dropdown Group */}
          <div ref={dropdownRef} className="relative">
            <div className="inline-flex items-center rounded-full bg-pure-white text-obsidian shadow-sm overflow-hidden transition-transform duration-200 active:scale-[0.98]">
              <a
                href={`#download-${detectedOS}`}
                className="flex items-center gap-2 text-sm font-semibold pl-6 pr-4 py-3 hover:bg-cloud transition-colors duration-150 border-r border-obsidian/10"
              >
                {getOSLogo(detectedOS)}
                <span>Download for {getOSLabel(detectedOS)}</span>
              </a>
              <button
                onClick={() => setDownloadOpen(!downloadOpen)}
                className="px-3 py-3 hover:bg-cloud transition-colors duration-150 flex items-center justify-center"
                aria-label="Select OS"
              >
                <ChevronDown size={16} className={`transition-transform duration-200 ${downloadOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {/* Dropdown Options */}
            <AnimatePresence>
              {downloadOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.95 }}
                  transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute top-full left-0 mt-2 w-56 bg-charcoal border border-iron/20 rounded-2xl p-2 shadow-2xl flex flex-col gap-1 z-50 text-left"
                >
                  <a
                    href="#download-mac"
                    onClick={() => setDownloadOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 text-xs font-semibold text-fog hover:text-pure-white rounded-xl hover:bg-graphite transition-colors duration-150"
                  >
                    {appleSvg}
                    <span>macOS (.dmg)</span>
                  </a>
                  <a
                    href="#download-windows"
                    onClick={() => setDownloadOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 text-xs font-semibold text-fog hover:text-pure-white rounded-xl hover:bg-graphite transition-colors duration-150"
                  >
                    {windowsSvg}
                    <span>Windows (.exe)</span>
                  </a>
                  <a
                    href="#download-linux"
                    onClick={() => setDownloadOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 text-xs font-semibold text-fog hover:text-pure-white rounded-xl hover:bg-graphite transition-colors duration-150"
                  >
                    {linuxSvg}
                    <span>Linux (.AppImage)</span>
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* GitHub CTA Button */}
          <a
            href="https://github.com/ReyyyGITHUB/connexio-landing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-pure-white bg-graphite/40 border border-iron/20 hover:border-pearl hover:bg-graphite/60 px-6 py-3 rounded-full transition-[background-color,border-color,transform] duration-200 ease-out active:scale-[0.98]"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>GitHub</span>
          </a>
        </motion.div>

        {/* Premium Studio Monitor / Device Mockup Container */}
        <motion.div
          variants={itemVariants}
          className="mt-16 w-full max-w-3xl relative flex flex-col items-center group"
        >
          {/* Subtle backlighting glow behind monitor */}
          <div className="absolute inset-0 bg-pure-white/[0.02] blur-[80px] rounded-full scale-75 group-hover:scale-90 transition-transform duration-500 ease-out" />

          {/* Device Frame */}
          <div className="relative w-full aspect-[16/10] bg-charcoal border-4 border-iron/30 rounded-2xl shadow-[0_24px_50px_rgba(0,0,0,0.8)] overflow-hidden">
            {/* Inner Workspace Screen Simulation */}
            <div className="w-full h-full bg-obsidian flex flex-col p-3 text-left select-none relative">
              {/* Screen Top Bar */}
              <div className="flex items-center justify-between border-b border-iron/10 pb-2 mb-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-iron/40" />
                  <span className="w-2 h-2 rounded-full bg-iron/40" />
                  <span className="w-2 h-2 rounded-full bg-iron/40" />
                </div>
                <div className="text-[10px] font-medium text-ash uppercase tracking-wider">
                  Krea Realtime Studio
                </div>
                <div className="w-6" />
              </div>

              {/* Workspace Content Canvas */}
              <div className="flex-1 border border-iron/10 rounded-lg bg-midnight flex flex-col items-center justify-center relative overflow-hidden p-6">
                {/* Simulated Glass Panel Inside Workspace */}
                <div className="absolute inset-0 bg-gradient-to-tr from-pure-white/[0.01] to-transparent pointer-events-none" />
                
                <h3 className="text-xl md:text-3xl font-medium tracking-tight text-fog mb-4 text-center">
                  Let's create something
                </h3>
                
                {/* Generation Card Grid preview */}
                <div className="grid grid-cols-3 gap-3 w-full max-w-md mt-2">
                  <div className="aspect-[4/3] bg-charcoal/80 border border-iron/20 rounded-lg p-2 flex flex-col justify-between hover:border-pearl/30 transition-colors duration-200">
                    <span className="text-[9px] font-semibold text-ash uppercase">Generate</span>
                    <Play size={12} className="text-fog" />
                  </div>
                  <div className="aspect-[4/3] bg-charcoal/80 border border-iron/20 rounded-lg p-2 flex flex-col justify-between hover:border-pearl/30 transition-colors duration-200">
                    <span className="text-[9px] font-semibold text-ash uppercase">Enhance</span>
                    <Play size={12} className="text-fog" />
                  </div>
                  <div className="aspect-[4/3] bg-charcoal/80 border border-iron/20 rounded-lg p-2 flex flex-col justify-between hover:border-pearl/30 transition-colors duration-200">
                    <span className="text-[9px] font-semibold text-ash uppercase">3D Mesh</span>
                    <Play size={12} className="text-fog" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* iMac Style Curved Stand Neck & Base */}
          <div className="w-24 h-16 bg-gradient-to-b from-iron/50 to-iron/20 clip-stand -mt-0.5 border-x border-b border-iron/20" />
          <div className="w-36 h-2 bg-iron/40 rounded-full -mt-1 shadow-md" />
        </motion.div>
      </motion.div>
    </section>
  )
}
