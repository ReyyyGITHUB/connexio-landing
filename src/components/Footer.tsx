import React, { useState, useEffect } from 'react'

export const Footer: React.FC = () => {
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

  const getOSLink = (osType: 'mac' | 'windows' | 'linux') => {
    switch (osType) {
      case 'windows': return '#download-windows'
      case 'linux': return '#download-linux'
      default: return '#download-mac'
    }
  }

  return (
    <footer id="download" className="w-full bg-obsidian py-32 px-6 border-t border-iron/20 flex flex-col items-center justify-center text-center font-mono">
      <div className="max-w-[1200px] w-full flex flex-col items-center gap-8">
        
        {/* Subtitle tag */}
        <span className="text-xs text-[#0091ff] tracking-widest font-semibold font-mono">DOWNLOAD</span>
        
        {/* Main Header styled like the reference */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-pure-white font-suisse leading-tight max-w-3xl">
          Try Connexio now.
        </h2>

        {/* Dynamic Centered Pill Download Button */}
        <div className="mt-4 flex flex-col items-center gap-6">
          <a 
            href={getOSLink(detectedOS)}
            className="inline-flex items-center gap-2 bg-pure-white text-obsidian px-6 py-3 rounded-full text-xs font-semibold hover:bg-cloud active:scale-[0.98] transition-all duration-200 ease-premium shadow-lg"
          >
            <span>Download for {getOSLabel(detectedOS)}</span>
            <span className="text-sm">↓</span>
          </a>

          {/* Fallback secondary options for other OSes */}
          <div className="flex items-center gap-4 text-[10px] text-ash font-suisse mt-2">
            <span className="select-none">Or download for:</span>
            <a href="#download-mac" className="hover:text-pure-white transition-colors duration-150">macOS</a>
            <span className="select-none text-iron/50">|</span>
            <a href="#download-windows" className="hover:text-pure-white transition-colors duration-150">Windows</a>
            <span className="select-none text-iron/50">|</span>
            <a href="#download-linux" className="hover:text-pure-white transition-colors duration-150">Linux</a>
          </div>
        </div>

        {/* Small copyright at bottom */}
        <span className="text-[9px] text-ash/60 mt-16 select-none font-suisse">
          © {new Date().getFullYear()} CONNEXIO. ALL RIGHTS RESERVED. MIT_LICENSE.
        </span>

      </div>
    </footer>
  )
}

