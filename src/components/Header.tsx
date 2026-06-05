import React from 'react'

export const Header: React.FC = () => {

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-iron/20 bg-obsidian/75 backdrop-blur-md">
      <div className="max-w-[1440px] mx-auto px-6 h-16 grid grid-cols-3 items-center">
        {/* Left: Brand Logo */}
        <div className="flex items-center gap-2 select-none justify-start">
          <a href="#" className="flex items-center gap-2.5 group">
            {/* Custom C network connector logo */}
            <svg 
              className="w-6.5 h-6.5 text-pure-white transition-transform duration-200 group-hover:scale-[1.02]" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c4.1 0 7.6-2.5 9.1-6.1l-3.6-1.5c-.8 2.3-3 3.9-5.5 3.9-3.3 0-6-2.7-6-6s2.7-6 6-6c2.5 0 4.7 1.6 5.5 3.9l3.6-1.5C19.6 4.5 16.1 2 12 2z" 
                fill="currentColor"
              />
            </svg>
            <span className="text-base font-semibold tracking-tight text-pure-white">Connexio</span>
          </a>
        </div>

        {/* Center: Nav links */}
        <nav className="hidden md:flex items-center justify-center gap-6">
          <a 
            href="#sessions" 
            className="text-sm font-medium text-fog hover:text-pure-white transition-colors duration-150"
          >
            Sessions
          </a>
          <a 
            href="#tasks" 
            className="text-sm font-medium text-fog hover:text-pure-white transition-colors duration-150"
          >
            Tasks
          </a>
          <a 
            href="#ssh" 
            className="text-sm font-medium text-fog hover:text-pure-white transition-colors duration-150"
          >
            SSH Manager
          </a>
          <a 
            href="#editor" 
            className="text-sm font-medium text-fog hover:text-pure-white transition-colors duration-150"
          >
            Editor
          </a>
          <a 
            href="#docs" 
            className="text-sm font-medium text-fog hover:text-pure-white transition-colors duration-150"
          >
            Docs
          </a>
        </nav>

        {/* Right: Download CTA button */}
        <div className="flex items-center justify-end">
          <a 
            href="#download" 
            className="inline-flex items-center justify-center text-sm font-medium bg-pure-white text-obsidian px-5 py-2 rounded-full hover:bg-cloud transition-[background-color,transform] duration-200 ease-out active:scale-[0.98]"
          >
            Download
          </a>
        </div>
      </div>
    </header>
  )
}
