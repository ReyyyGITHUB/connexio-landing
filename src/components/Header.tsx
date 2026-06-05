import React, { useState, useRef, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'

export const Header: React.FC = () => {
  const [downloadOpen, setDownloadOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDownloadOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const appleSvg = (
    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 170 170">
      <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.34.13-9.13-1.92-14.37-6.15-2.9-2.51-6.69-7.03-11.36-13.56-5.66-8.25-10.01-17.75-13.06-28.52-3.04-10.77-4.57-21.2-4.57-31.3 0-12.14 2.87-22.37 8.62-30.68 5.74-8.32 13.12-12.51 22.14-12.51 3.82 0 8.35.96 13.56 2.9 5.21 1.93 8.7 2.9 10.45 2.9 1.76 0 5.43-.97 11.02-2.9 5.59-1.94 9.77-2.8 12.55-2.58 9.72.77 17.26 4.39 22.61 10.87-9.56 5.78-14.28 13.84-14.17 24.2.1 8.28 3.11 15.18 9.03 20.72 5.92 5.54 12.92 8.44 20.97 8.71-2.92 8.52-6.52 16.59-10.82 24.23zM119.22 28.74c0-6.72-2.39-12.87-7.18-18.45 4.88-.58 9.88.94 15.02 4.58 5.14 3.64 8.77 8.37 10.87 14.2-5.74.45-11.16-1.37-16.27-5.46-5.11-4.1-7.44-9.35-7.44-14.87z"/>
    </svg>
  )

  const windowsSvg = (
    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
      <path d="M0 3.449L9.75 2.1v9.451H0V3.449zM0 12.45h9.75v9.45L0 20.551V12.45zm11.25-10.5L24 0v11.55H11.25V1.95zm0 20.1V12.45H24v11.55l-12.75-1.95z"/>
    </svg>
  )

  const linuxSvg = (
    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
      <path d="M12 2c-.66 0-1.25.25-1.72.66-.5.42-.87 1.01-1.03 1.72C8.6 4.7 7.7 5.72 7.7 7c0 1.02.57 1.93 1.41 2.38-.13.34-.21.72-.21 1.12 0 1.25.72 2.33 1.78 2.84-.13.53-.18 1.1-.12 1.66-.46.33-.87.77-1.19 1.28C8.5 16.03 8 16.94 8 18v1.5c0 .28.22.5.5.5h7c.28 0 .5-.22.5-.5V18c0-1.06-.5-1.97-1.37-2.72-.32-.51-.73-.95-1.19-1.28.06-.56.01-1.13-.12-1.66 1.06-.51 1.78-1.59 1.78-2.84 0-.4-.08-.78-.21-1.12.84-.45 1.41-1.36 1.41-2.38 0-1.28-.9-2.3-2.15-2.62-.16-.71-.53-1.3-1.03-1.72C13.25 2.25 12.66 2 12 2z"/>
    </svg>
  )

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-iron/20 bg-obsidian/80 backdrop-blur-md font-mono">
      <div className="max-w-[1440px] mx-auto px-6 h-14 flex items-center justify-between">
        {/* Left: Brand Logo & version */}
        <div className="flex items-center gap-4 select-none">
          <a href="#" className="flex items-center gap-2.5 group">
            <svg 
              className="w-5 h-5 text-pure-white transition-transform duration-200 group-hover:scale-[1.02]" 
              viewBox="0 0 512 512" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="32" y="32" width="448" height="448" rx="96" fill="currentColor" fillOpacity="0.06" stroke="currentColor" strokeWidth="24"/>
              <path d="M310 140C220 140 150 200 150 256C150 312 220 372 310 372" stroke="currentColor" strokeWidth="36" strokeLinecap="round" />
              <path d="M225 210L275 256L225 302" stroke="currentColor" strokeWidth="28" strokeLinecap="round" strokeLinejoin="round" />
              <line x1="290" y1="302" x2="335" y2="302" stroke="currentColor" strokeWidth="28" strokeLinecap="round" />
              <path d="M360 256H380" stroke="#0091ff" strokeWidth="24" strokeLinecap="round" />
              <path d="M380 256V180H410" stroke="#0091ff" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M380 256V332H410" stroke="#0091ff" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="410" cy="180" r="15" fill="#0091ff" />
              <circle cx="410" cy="256" r="15" fill="#0091ff" />
              <circle cx="410" cy="332" r="15" fill="#0091ff" />
            </svg>
            <span className="text-sm font-semibold tracking-tight text-pure-white font-suisse">Connexio</span>
          </a>
          <span className="text-[10px] px-1.5 py-0.5 border border-iron/30 text-ash rounded uppercase select-none">v0.5.0</span>
        </div>

        {/* Center: Nav links */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#sessions" className="text-xs text-fog hover:text-pure-white transition-colors">SESSIONS</a>
          <a href="#tasks" className="text-xs text-fog hover:text-pure-white transition-colors">TASKS</a>
          <a href="#ssh" className="text-xs text-fog hover:text-pure-white transition-colors">SSH_MANAGER</a>
          <a href="#editor" className="text-xs text-fog hover:text-pure-white transition-colors">EDITOR</a>
          
          <div ref={dropdownRef} className="relative">
            <button 
              onClick={() => setDownloadOpen(!downloadOpen)}
              className="flex items-center gap-1 text-xs text-fog hover:text-pure-white transition-colors"
            >
              <span>DOWNLOAD</span>
              <ChevronDown size={12} className={`transition-transform ${downloadOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {downloadOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-charcoal border border-iron/20 p-2 shadow-2xl flex flex-col gap-1 z-50">
                <a 
                  href="#download-mac" 
                  onClick={() => setDownloadOpen(false)}
                  className="flex items-center gap-2.5 px-3 py-2 text-[10px] text-fog hover:text-pure-white hover:bg-graphite transition-colors"
                >
                  {appleSvg}
                  <span>macOS (.dmg)</span>
                </a>
                <a 
                  href="#download-windows" 
                  onClick={() => setDownloadOpen(false)}
                  className="flex items-center gap-2.5 px-3 py-2 text-[10px] text-fog hover:text-pure-white hover:bg-graphite transition-colors"
                >
                  {windowsSvg}
                  <span>Windows (.exe)</span>
                </a>
                <a 
                  href="#download-linux" 
                  onClick={() => setDownloadOpen(false)}
                  className="flex items-center gap-2.5 px-3 py-2 text-[10px] text-fog hover:text-pure-white hover:bg-graphite transition-colors"
                >
                  {linuxSvg}
                  <span>Linux (.AppImage)</span>
                </a>
              </div>
            )}
          </div>
        </nav>

        {/* Right: Quick action */}
        <div className="flex items-center justify-end">
          <a 
            href="#download" 
            className="text-xs font-semibold text-pure-white hover:text-obsidian border border-pure-white px-4 py-1.5 hover:bg-pure-white transition-colors duration-150"
          >
            GET APP
          </a>
        </div>
      </div>
    </header>
  )
}
