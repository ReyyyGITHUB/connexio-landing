import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export const Header: React.FC = () => {
  const [featuresOpen, setFeaturesOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-iron/20 bg-obsidian/75 backdrop-blur-md">
      <div className="max-w-[1440px] mx-auto px-6 h-16 grid grid-cols-3 items-center">
        {/* Left: Brand Logo */}
        <div className="flex items-center gap-2 select-none justify-start">
          <a href="#" className="flex items-center gap-2 group">
            {/* Achromatic premium custom K symbol */}
            <svg 
              className="w-7 h-7 text-pure-white transition-transform duration-200 group-hover:scale-[1.02]" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M4 4H8V12L14 4H19L11 12L19 20H14L8 12V20H4V4Z" 
                fill="currentColor"
              />
            </svg>
          </a>
        </div>

        {/* Center: Nav links */}
        <nav className="hidden md:flex items-center justify-center gap-6">
          <a 
            href="#app" 
            className="text-sm font-medium text-fog hover:text-pure-white transition-colors duration-150"
          >
            App
          </a>
          
          <div 
            className="relative"
            onMouseEnter={() => setFeaturesOpen(true)}
            onMouseLeave={() => setFeaturesOpen(false)}
          >
            <button 
              className="flex items-center gap-1 text-sm font-medium text-fog hover:text-pure-white transition-colors duration-150"
            >
              <span>Features</span>
              <ChevronDown 
                size={14} 
                className={`transition-transform duration-200 ${featuresOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {/* Subtle Dropdown Panel */}
            {featuresOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-charcoal border border-iron/20 rounded-xl p-2 shadow-2xl flex flex-col gap-1 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                <a 
                  href="#feature-1" 
                  className="px-3 py-2 text-xs font-medium text-fog hover:text-pure-white rounded-lg hover:bg-graphite transition-colors duration-150"
                >
                  Realtime Canvas
                </a>
                <a 
                  href="#feature-2" 
                  className="px-3 py-2 text-xs font-medium text-fog hover:text-pure-white rounded-lg hover:bg-graphite transition-colors duration-150"
                >
                  Studio Editor
                </a>
              </div>
            )}
          </div>

          <a 
            href="#upscaler" 
            className="text-sm font-medium text-fog hover:text-pure-white transition-colors duration-150"
          >
            Upscaler
          </a>
          <a 
            href="#pricing" 
            className="text-sm font-medium text-fog hover:text-pure-white transition-colors duration-150"
          >
            Pricing
          </a>
          <a 
            href="#api" 
            className="text-sm font-medium text-fog hover:text-pure-white transition-colors duration-150"
          >
            API
          </a>
        </nav>

        {/* Right: Download CTA button */}
        <div className="flex items-center justify-end">
          <a 
            href="#download" 
            className="inline-flex items-center justify-center text-sm font-medium bg-pure-white text-obsidian px-5 py-2 rounded-full hover:bg-cloud transition-all duration-200 active:scale-[0.98]"
          >
            Download
          </a>
        </div>
      </div>
    </header>
  )
}
