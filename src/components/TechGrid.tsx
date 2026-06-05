import React from 'react'

interface TechItem {
  code: string
  label: string
  desc: string
}

const techFeatures: TechItem[] = [
  {
    code: 'SH_01',
    label: 'Auto Shell Detect',
    desc: 'Instantly scrapes and hooks available shells: Zsh, Fish, PowerShell, CMD, Git Bash, or active WSL instances.'
  },
  {
    code: 'TS_02',
    label: 'Tailscale Tunnels',
    desc: 'Auto-generates secure sharing endpoints using local and private Tailscale connection states.'
  },
  {
    code: 'TM_03',
    label: 'Command Timers',
    desc: 'Logs active execution time and fires native system notifications when long background processes terminate.'
  },
  {
    code: 'RPC_04',
    label: 'Discord Presence',
    desc: 'Broadens developer workflow states with configurable Discord Rich Presence indicators dynamically.'
  },
  {
    code: 'WEB_05',
    label: 'Live Web Previews',
    desc: 'Launches sandboxed web views directly inside target tabs alongside runners for active testing loops.'
  },
  {
    code: 'UI_06',
    label: 'WebGL Rendering',
    desc: 'Leverages hardware-accelerated rendering pipelines to handle intensive stream stdout speeds flawlessly.'
  }
]

export const TechGrid: React.FC = () => {
  return (
    <section id="tech-specs" className="w-full bg-obsidian border-b border-iron/20 font-mono py-24 px-6">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="mb-16 border-b border-iron/20 pb-8">
          <span className="text-xs text-[#0091ff] tracking-widest">[ 03 / MICRO_SPECS ]</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-pure-white font-suisse uppercase mt-2">
            The invisible features that power development.
          </h2>
        </div>

        {/* 3-Column Brutalist Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-iron/20">
          {techFeatures.map((item) => (
            <div 
              key={item.code} 
              className="p-8 border-r border-b border-iron/20 flex flex-col justify-between h-56 bg-charcoal/5 group hover:bg-charcoal/20 transition-colors duration-150"
            >
              <div className="flex justify-between items-start">
                <span className="text-[10px] text-ash">[{item.code}]</span>
                <span className="w-1.5 h-1.5 bg-iron/40 group-hover:bg-[#0091ff] transition-colors duration-150 rounded-full" />
              </div>

              <div className="mt-8">
                <h3 className="text-base font-semibold text-pure-white uppercase font-suisse tracking-wide">
                  {item.label}
                </h3>
                <p className="mt-2 text-xs text-fog leading-[1.6] max-w-xs font-suisse">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
