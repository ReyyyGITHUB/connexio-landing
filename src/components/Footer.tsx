import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { ArrowRight, Globe, Apple, Download } from 'lucide-react'
import logo from '@/assets/logo.png'
import { DOWNLOAD_LINKS, getOSLink } from '@/constants'

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [detectedOS, setDetectedOS] = useState<'mac' | 'windows' | 'linux'>('mac')

  useEffect(() => {
    const platform = window.navigator.platform.toLowerCase()
    if (platform.includes('win')) setDetectedOS('windows')
    else if (platform.includes('mac')) setDetectedOS('mac')
    else if (platform.includes('linux')) setDetectedOS('linux')
  }, [])

  const getOSLabel = (osType: 'mac' | 'windows' | 'linux') => {
    switch (osType) {
      case 'windows': return 'Windows'
      case 'linux': return 'Linux'
      default: return 'macOS'
    }
  }

  const getOSIcon = (osType: 'mac' | 'windows' | 'linux', size = 14) => {
    const className = `fill-current`
    const style = { width: size, height: size }
    switch (osType) {
      case 'windows':
        return (
          <svg className={className} style={style} viewBox="0 0 24 24">
            <path d="M0 3.449L9.75 2.1v9.451H0V3.449zM0 12.45h9.75v9.45L0 20.551V12.45zm11.25-10.5L24 0v11.55H11.25V1.95zm0 20.1V12.45H24v11.55l-12.75-1.95z"/>
          </svg>
        )
      case 'linux':
        return (
          <svg className={className} style={style} viewBox="0 0 24 24">
            <path d="M22 5.18c-.48-.54-1.14-.84-1.83-.84h-4.3c-.69 0-1.35.3-1.83.84L12 7.7 9.96 5.18C9.48 4.64 8.82 4.34 8.13 4.34H3.83C3.14 4.34 2.48 4.64 2 5.18l-1.6 1.8c-.37.42-.51.99-.37 1.52.14.53.53.96 1.05 1.15l8.42 3.16c.32.12.67.12.99 0l8.42-3.16c.52-.19.91-.62 1.05-1.15.14-.53 0-1.1-.37-1.52l-1.59-1.8zM12 18.5c-3.58 0-6.5-2.92-6.5-6.5S8.42 5.5 12 5.5s6.5 2.92 6.5 6.5-2.92 6.5-6.5 6.5z"/>
          </svg>
        )
      default:
        return <Apple size={size} className="stroke-[2.2]" />
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
      setTimeout(() => setSubscribed(false), 3000)
      setEmail('')
    }
  }

  // Animation variants
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  }

  return (
    <div className="w-full flex flex-col bg-obsidian">
      {/* Reverted Download Section */}
      <section id="download" className="w-full py-28 px-6 flex flex-col items-center justify-center text-center font-mono">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 80, damping: 15 }}
          className="max-w-[1200px] w-full flex flex-col items-center gap-8"
        >
          {/* Subtitle tag */}
          <span className="text-xs text-[#0091ff] tracking-widest font-semibold font-mono">DOWNLOAD</span>
          
          {/* Main Header */}
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-pure-white font-suisse leading-tight max-w-3xl">
            Try Connexio now.
          </h2>

          {/* Dynamic Centered Pill Download Button */}
          <div className="mt-4 flex flex-col items-center gap-6">
            <motion.a 
              href={getOSLink(detectedOS)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2.5 bg-pure-white text-obsidian px-6 py-3 rounded-full text-xs font-semibold hover:bg-cloud transition-colors duration-200 ease-premium shadow-lg font-suisse"
            >
              {getOSIcon(detectedOS, 14)}
              <span>Download for {getOSLabel(detectedOS)}</span>
              <Download size={14} className="stroke-[2.5]" />
            </motion.a>

            {/* Fallback secondary options for other OSes */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-[10px] text-ash font-suisse mt-2">
              <span className="select-none">Or download for:</span>
              <a href={DOWNLOAD_LINKS.mac} className="hover:text-pure-white transition-colors duration-150 flex items-center gap-1.5">
                {getOSIcon('mac', 10)}
                <span>macOS</span>
              </a>
              <span className="select-none text-iron/50">|</span>
              <a href={DOWNLOAD_LINKS.windows} className="hover:text-pure-white transition-colors duration-150 flex items-center gap-1.5">
                {getOSIcon('windows', 10)}
                <span>Windows</span>
              </a>
              <span className="select-none text-iron/50">|</span>
              <a href={DOWNLOAD_LINKS.linuxAppImage} className="hover:text-pure-white transition-colors duration-150 flex items-center gap-1.5">
                {getOSIcon('linux', 10)}
                <span>Linux (.AppImage)</span>
              </a>
              <span className="select-none text-iron/50">|</span>
              <a href={DOWNLOAD_LINKS.linuxDebian} className="hover:text-pure-white transition-colors duration-150 flex items-center gap-1.5">
                {getOSIcon('linux', 10)}
                <span>Linux (.deb)</span>
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Grid Footer Section */}
      <footer className="w-full bg-charcoal/70 pt-20 pb-12 px-6 sm:px-12 md:px-16 border-t border-charcoal/80 flex flex-col items-center justify-center font-suisse overflow-hidden select-none">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-[1200px] w-full flex flex-col gap-16"
        >
          {/* Large Title Section */}
          <motion.div variants={itemVariants} className="w-full flex items-center gap-4 sm:gap-6 md:gap-8">
            <img 
              src={logo} 
              alt="Connexio App Icon" 
              className="w-14 h-14 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain rounded-xl sm:rounded-2xl flex-shrink-0"
            />
            <h1 className="text-4xl min-[380px]:text-5xl sm:text-8xl md:text-[7.5rem] font-bold tracking-tighter leading-[0.85] uppercase text-left">
              <span className="text-shine block">Connexio.</span>
            </h1>
          </motion.div>

          {/* 4 Columns Grid Section */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6 pt-6 border-t border-charcoal/40">
            
            {/* Col 1: Tagline */}
            <div className="md:col-span-4 flex flex-col gap-4">
              <p className="text-sm text-fog leading-relaxed max-w-sm">
                The most powerful workspace environment for developer teams. Build, manage, and persist terminal configurations automatically.
              </p>
            </div>

            {/* Col 2: Company Link List */}
            <div className="md:col-span-2 flex flex-col gap-4">
              <span className="text-xs font-mono text-ash tracking-widest uppercase">Company</span>
              <ul className="flex flex-col gap-2.5 text-sm font-medium">
                <li>
                  <a href="#pricing" className="text-fog hover:text-pure-white transition-colors duration-150">Pricing</a>
                </li>
                <li>
                  <a href="#contact" className="text-fog hover:text-pure-white transition-colors duration-150">Contact Us</a>
                </li>
                <li>
                  <a href="#affiliate" className="group inline-flex items-center gap-1 text-fog hover:text-pure-white transition-colors duration-150">
                    <span>Become an Affiliate</span>
                    <span className="text-xs transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-ash">↗</span>
                  </a>
                </li>
                <li>
                  <a href="#projects" className="group inline-flex items-center gap-1 text-fog hover:text-pure-white transition-colors duration-150">
                    <span>Projects</span>
                    <span className="text-xs transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-ash">↗</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Socials Link List */}
            <div className="md:col-span-2 flex flex-col gap-4">
              <span className="text-xs font-mono text-ash tracking-widest uppercase">Socials</span>
              <ul className="flex flex-col gap-2.5 text-sm font-medium">
                <li>
                  <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-1 text-fog hover:text-pure-white transition-colors duration-150">
                    <span>Behance</span>
                    <span className="text-xs transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-ash">↗</span>
                  </a>
                </li>
                <li>
                  <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-1 text-fog hover:text-pure-white transition-colors duration-150">
                    <span>Dribbble</span>
                    <span className="text-xs transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-ash">↗</span>
                  </a>
                </li>
                <li>
                  <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-1 text-fog hover:text-pure-white transition-colors duration-150">
                    <span>Twitter/X</span>
                    <span className="text-xs transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-ash">↗</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4: Newsletter */}
            <div className="md:col-span-4 flex flex-col gap-4">
              <span className="text-xs font-mono text-ash tracking-widest uppercase">Newsletter</span>
              <p className="text-sm text-fog leading-relaxed">
                Receive product updates, news, exclusive discounts and early access.
              </p>
              
              <form onSubmit={handleSubmit} className="relative mt-2 flex items-center bg-charcoal/40 border border-charcoal rounded-full pl-5 pr-1.5 py-1.5 focus-within:border-pure-white/30 focus-within:bg-charcoal/60 transition-all duration-300 ease-premium w-full max-w-sm">
                <span className="text-ash/70 text-sm mr-2 select-none font-mono">@</span>
                <input 
                  type="email" 
                  placeholder={subscribed ? "Thank you!" : "Enter your email..."}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={subscribed}
                  className="w-full bg-transparent text-sm text-pure-white placeholder-ash/60 focus:outline-none pr-8 disabled:text-[#0091ff]"
                />
                <motion.button 
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  className="w-8 h-8 rounded-full bg-pure-white text-obsidian flex items-center justify-center hover:bg-cloud transition-colors duration-150 flex-shrink-0 cursor-pointer"
                  aria-label="Subscribe"
                >
                  <ArrowRight size={14} className="stroke-[2.5]" />
                </motion.button>
              </form>
            </div>

          </motion.div>

          {/* Bottom Footer Section */}
          <motion.div 
            variants={itemVariants} 
            className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-charcoal/40 text-xs font-medium text-ash"
          >
            <div>
              <span>© {new Date().getFullYear()} Connexio. All rights reserved. Made with Connexio</span>
            </div>

            <div className="flex items-center gap-6">
              <span className="text-[11px]">Built with React & Vite</span>
              <div className="flex items-center gap-4 text-fog">
                <a href="#" className="hover:text-pure-white transition-colors duration-150" aria-label="Website">
                  <Globe size={14} />
                </a>
                <a href="https://github.com/ReyyyGITHUB/connexio-landing" target="_blank" rel="noopener noreferrer" className="hover:text-pure-white transition-colors duration-150" aria-label="GitHub">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-pure-white transition-colors duration-150" aria-label="Twitter">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </footer>
    </div>
  )
}


