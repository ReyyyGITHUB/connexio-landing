import React from 'react'

interface TechItem {
  code: string
  label: string
  desc: string
  metric?: string
}

const techFeatures: TechItem[] = [
  {
    code: 'SH_01',
    label: 'Auto shell detect',
    desc: 'Instantly scrapes and hooks available shells: Zsh, Fish, PowerShell, CMD, Git Bash, or active WSL instances.',
    metric: 'latency < 8ms'
  },
  {
    code: 'TS_02',
    label: 'Tailscale tunnels',
    desc: 'Auto-generates secure sharing endpoints using local and private Tailscale connection states.',
    metric: 'active'
  },
  {
    code: 'TM_03',
    label: 'Command timers',
    desc: 'Logs active execution time and fires native system notifications when long background processes terminate.',
    metric: 'μs precision'
  },
  {
    code: 'RPC_04',
    label: 'Discord presence',
    desc: 'Broadens developer workflow states with configurable Discord Rich Presence indicators dynamically.',
    metric: 'rich-rpc'
  },
  {
    code: 'WEB_05',
    label: 'Live web previews',
    desc: 'Launches sandboxed web views directly inside target tabs alongside runners for active testing loops.',
    metric: 'isolated port'
  },
  {
    code: 'UI_06',
    label: 'WebGL rendering',
    desc: 'Leverages hardware-accelerated rendering pipelines to handle intensive stream stdout speeds flawlessly.',
    metric: '120 fps'
  }
]

export const TechGrid: React.FC = () => {
  return (
    <section id="tech-specs" className="w-full bg-obsidian border-b border-iron/20 py-32 px-6 flex flex-col items-center relative overflow-hidden">
      {/* Background blueprint details */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#0091ff_1px,transparent_1px)] [background-size:16px_16px]" />
      
      <div className="max-w-[1200px] w-full flex flex-col items-center relative z-10">
        
        {/* Section Header */}
        <div className="mb-24 text-center flex flex-col items-center">
          <div className="flex items-center gap-2 border border-iron/30 px-3 py-1.5 rounded-full bg-charcoal/50 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0091ff] animate-pulse" />
            <span className="text-[10px] tracking-wider text-ash font-mono font-medium">SYSTEM_SPEC // MICRO_SPECS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-pure-white font-suisse mt-6 max-w-2xl leading-tight">
            The invisible core powering your shell.
          </h2>
          <p className="text-ash text-sm font-suisse mt-4 max-w-md">
            Low-level systems designed to run seamlessly under the hood without configuration.
          </p>
        </div>

        {/* Centered 3-Column Brutalist Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-iron/10 w-full bg-charcoal/5">
          {techFeatures.map((item, index) => (
            <div 
              key={item.code} 
              className="p-8 border-r border-b border-iron/10 flex flex-col justify-between h-72 bg-obsidian/40 backdrop-blur-sm group hover:bg-[#0091ff]/[0.02] transition-colors duration-200 ease-premium relative overflow-hidden"
              style={{ transitionDelay: `${index * 30}ms` }}
            >
              {/* Subtle hover blueprint grid line glow */}
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_95%,rgba(0,145,255,0.05))] translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-300 ease-premium pointer-events-none" />
              
              {/* Tech corner accent indicators */}
              <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-transparent group-hover:border-[#0091ff] transition-[border-color] duration-200 ease-premium" />
              <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-transparent group-hover:border-[#0091ff] transition-[border-color] duration-200 ease-premium" />

              {/* Card Header */}
              <div className="flex justify-between items-center w-full font-mono">
                <span className="text-[9px] text-ash/80 group-hover:text-[#0091ff] transition-colors duration-200 ease-premium font-semibold">
                  SYS::{item.code}
                </span>
                {item.metric && (
                  <span className="text-[9px] text-[#0091ff] bg-[#0091ff]/10 border border-[#0091ff]/20 px-2 py-0.5 rounded-sm font-medium">
                    {item.metric}
                  </span>
                )}
              </div>

              {/* Card Body */}
              <div className="my-auto py-4">
                <h3 className="text-base font-bold text-pure-white font-suisse tracking-wide transition-transform duration-200 ease-premium group-hover:translate-x-1 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-iron/40 group-hover:bg-[#0091ff] transition-all duration-200 ease-premium" />
                  {item.label}
                </h3>
                <p className="mt-3 text-xs text-fog/80 leading-[1.7] font-suisse">
                  {item.desc}
                </p>
              </div>

              {/* Card Footer */}
              <div className="flex justify-between items-center pt-2 border-t border-iron/5 font-mono text-[9px] text-ash/60">
                <span>STATUS // ENGAGED</span>
                <span>SYS_INIT_OK</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decorative stats status line */}
        <div className="w-full flex justify-between items-center mt-6 px-2 font-mono text-[10px] text-ash/60">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500/80 animate-ping inline-block" />
            <span>ALL CORE MODULES OPERATIONAL</span>
          </div>
          <span>SPEC_V2.1.0</span>
        </div>

      </div>
    </section>
  )
}

