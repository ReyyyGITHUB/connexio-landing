import React from 'react'

export const Footer: React.FC = () => {
  return (
    <footer id="download" className="w-full bg-obsidian font-mono py-24 px-6 border-t border-iron/20">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* Left Column: Title & Version */}
        <div className="flex flex-col justify-between items-start">
          <div>
            <span className="text-xs text-[#0091ff] tracking-widest">[ 04 / DISTRIBUTION ]</span>
            <h2 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tighter text-pure-white font-suisse uppercase mt-4 leading-none">
              Connexio
            </h2>
            <p className="mt-4 text-xs text-ash max-w-sm">
              Built with Tauri v2 and native Rust. Designed for low memory footprints, fast boot intervals, and maximum security scopes.
            </p>
          </div>
          <span className="text-xs text-ash mt-12 md:mt-0 select-none">
            © {new Date().getFullYear()} CONNEXIO. ALL RIGHTS RESERVED. MIT_LICENSE.
          </span>
        </div>

        {/* Right Column: Dynamic Brutalist Download List */}
        <div className="flex flex-col justify-end border-t md:border-t-0 border-iron/20 pt-8 md:pt-0">
          <span className="text-xs text-ash mb-4 uppercase">[ Platform distribution packages ]</span>
          <div className="flex flex-col border-t border-iron/20">
            <a 
              href="#download-mac" 
              className="flex items-center justify-between py-6 border-b border-iron/20 text-sm text-fog hover:text-pure-white group transition-colors"
            >
              <span>MACOS_APPLE_SILICON_OR_INTEL (.dmg)</span>
              <span className="text-xs text-ash group-hover:text-pure-white transition-colors">DOWNLOAD ➜</span>
            </a>
            <a 
              href="#download-windows" 
              className="flex items-center justify-between py-6 border-b border-iron/20 text-sm text-fog hover:text-pure-white group transition-colors"
            >
              <span>WINDOWS_X64_BINARY (.exe)</span>
              <span className="text-xs text-ash group-hover:text-pure-white transition-colors">DOWNLOAD ➜</span>
            </a>
            <a 
              href="#download-linux" 
              className="flex items-center justify-between py-6 border-b border-iron/20 text-sm text-fog hover:text-pure-white group transition-colors"
            >
              <span>LINUX_PORTABLE_APPIMAGE (.AppImage)</span>
              <span className="text-xs text-ash group-hover:text-pure-white transition-colors">DOWNLOAD ➜</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}
