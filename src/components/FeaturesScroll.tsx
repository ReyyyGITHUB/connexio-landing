import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface FeatureCard {
  id: number
  title: string
  tag: string
  description: string
  contentMock: React.ReactNode
}

const features: FeatureCard[] = [
  {
    id: 1,
    tag: 'WORKSPACE',
    title: 'Project Workspace',
    description: 'Organize shell sessions by project scopes. Move workspaces across tab boundaries with absolute drag fluidity.',
    contentMock: (
      <div className="w-full font-mono text-[10px] text-fog/90 p-4 leading-normal select-none">
        <div className="text-ash mb-2">// Active Workspace Configuration</div>
        <div className="flex justify-between border-b border-iron/20 pb-1.5 mb-1.5">
          <span>scope: "frontend-dashboard"</span>
          <span className="text-[#0091ff]">ACTIVE</span>
        </div>
        <div className="text-ash">projects:</div>
        <div className="pl-4 text-pure-white">- connexio-app [path: ~/dev/connexio]</div>
        <div className="pl-4 text-ash">- connexio-landing [path: ~/dev/landing-page]</div>
        <div className="mt-4 text-[9px] bg-charcoal p-1.5 border border-iron/30">
          * Drag and drop headers to bind shell environments.
        </div>
      </div>
    )
  },
  {
    id: 2,
    tag: 'SESSIONS',
    title: 'Persistent Sessions',
    description: 'State preservation layer keeps active layouts, paths, and stdout history persistent after restarts.',
    contentMock: (
      <div className="w-full font-mono text-[10px] text-fog/90 p-4 leading-normal select-none">
        <div className="text-ash mb-2">// Session State (Auto-save)</div>
        <div className="text-pure-white">active_layout: "split-horizontal"</div>
        <div className="text-[#0091ff]">restored_directories: 3</div>
        <div className="text-ash">history_buffer: 5000 lines</div>
        <div className="mt-4 flex gap-1.5">
          <span className="bg-iron/30 px-2 py-0.5 border border-iron/20 text-[9px]">RESTORE_PREV_LAYOUT: YES</span>
        </div>
      </div>
    )
  },
  {
    id: 3,
    tag: 'RUNNER',
    title: 'Auto Task Runner',
    description: 'Auto-scrapes scripts inside project scopes (package.json, Makefile, Cargo.toml) for single-action builds.',
    contentMock: (
      <div className="w-full font-mono text-[10px] text-fog/90 p-4 leading-normal select-none">
        <div className="text-ash mb-2">// package.json scripts detected</div>
        <div className="flex justify-between items-center bg-charcoal p-1.5 border border-iron/20 mb-1">
          <span className="text-pure-white">"dev": "vite"</span>
          <span className="text-ash text-[9px] px-1 border border-iron/30">RUN</span>
        </div>
        <div className="flex justify-between items-center bg-charcoal p-1.5 border border-iron/20 mb-1">
          <span className="text-pure-white">"build": "tsc && vite build"</span>
          <span className="text-ash text-[9px] px-1 border border-iron/30">RUN</span>
        </div>
        <div className="flex justify-between items-center bg-charcoal p-1.5 border border-iron/20">
          <span className="text-pure-white">"lint": "eslint ."</span>
          <span className="text-ash text-[9px] px-1 border border-iron/30">RUN</span>
        </div>
      </div>
    )
  },
  {
    id: 4,
    tag: 'REMOTE',
    title: 'SSH Connection Manager',
    description: 'Embedded remote node configuration manager for server connection states in single tab divisions.',
    contentMock: (
      <div className="w-full font-mono text-[10px] text-fog/90 p-4 leading-normal select-none">
        <div className="text-ash mb-2">// SSH Configuration Store</div>
        <div className="text-pure-white">Host target-production</div>
        <div className="pl-4">HostName 142.250.190.46</div>
        <div className="pl-4">User ubuntu</div>
        <div className="pl-4">IdentityFile ~/.ssh/production.pem</div>
        <div className="mt-3 text-[#0091ff] animate-pulse">● Ready to tunnel...</div>
      </div>
    )
  },
  {
    id: 5,
    tag: 'EDITOR',
    title: 'CodeMirror 6 Editor',
    description: 'Full code editor layer with live compilation target visualization side-by-side inside active splits.',
    contentMock: (
      <div className="w-full font-mono text-[10px] text-fog/90 p-4 leading-normal select-none">
        <div className="text-ash mb-2">// preview.tsx</div>
        <div><span className="text-[#0091ff]">import</span> &#123; Workspace &#125; <span className="text-[#0091ff]">from</span> <span className="text-pearl">"./App"</span></div>
        <div><span className="text-[#0091ff]">const</span> init = () =&gt; &#123;</div>
        <div className="pl-4">console.log(<span className="text-pearl">"Connexio live editor active"</span>);</div>
        <div>&#125;</div>
      </div>
    )
  }
]

export const FeaturesScroll: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: targetRef
  })

  // Horizontal translate calculation based on vertical scroll percentage
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-52%'])

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-obsidian border-b border-iron/20 font-mono">
      {/* Sticky container matching viewport height */}
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden z-10">
        <div className="max-w-[1440px] mx-auto px-6 w-full mb-12">
          <span className="text-xs font-semibold tracking-widest text-ash">[ 02 / FEATURES ]</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-pure-white mt-2 uppercase font-suisse">
            Built for high-performance terminal workflows.
          </h2>
        </div>

        {/* Horizontal scroll track with brutalist borders */}
        <div className="flex items-center border-y border-iron/20 bg-charcoal/10 py-12">
          <motion.div style={{ x }} className="flex gap-8 pl-6 pr-[25vw]">
            {features.map((feature) => (
              <div 
                key={feature.id} 
                className="w-[380px] sm:w-[440px] h-[460px] flex-shrink-0 bg-obsidian border border-iron/20 p-6 flex flex-col justify-between relative overflow-hidden group"
              >
                {/* Visual Image / Code Mockup inside card */}
                <div className="w-full h-[220px] bg-charcoal/30 border border-iron/20 flex flex-col justify-start relative overflow-hidden">
                  <div className="w-full h-6 border-b border-iron/20 bg-obsidian/60 flex items-center px-3 justify-between">
                    <span className="text-[9px] text-ash tracking-widest">MOCK_CONTENT://{feature.tag}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-iron/40" />
                  </div>
                  <div className="flex-1 flex items-center justify-center">
                    {feature.contentMock}
                  </div>
                </div>

                {/* Card Details */}
                <div className="mt-4 flex flex-col items-start">
                  <span className="text-[10px] font-semibold text-[#0091ff] tracking-widest mb-2">
                    [ {feature.tag} ]
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight text-pure-white font-suisse uppercase">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-xs text-fog leading-[1.6] max-w-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

