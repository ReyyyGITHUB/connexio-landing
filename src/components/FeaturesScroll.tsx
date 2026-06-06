import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { Layout, Terminal, Columns, FolderOpen, FileText, Globe, GitBranch } from 'lucide-react'

import workspaceVideo from '../assets/video/1-conexio.webm'
import sessionsVideo from '../assets/video/2-conexio.webm'
import runnerVideo from '../assets/video/3-conexio.webm'
import remoteVideo from '../assets/video/4-conexio.webm'
import gitVideo from '../assets/video/5-conexio.webm'
import editorVideo from '../assets/video/6-conexio.webm'
import paletteVideo from '../assets/video/7-conexio.webm'

interface FeatureCard {
  id: number
  title: string
  tag: string
  placeholderText: string
  videoSrc?: string
}

const features: FeatureCard[] = [
  {
    id: 1,
    tag: 'INTERFACE',
    title: 'Tabbed Interface',
    placeholderText: 'Tabbed UI Window Session',
    videoSrc: workspaceVideo
  },
  {
    id: 2,
    tag: 'SHELLS',
    title: 'Multiple Shells',
    placeholderText: 'PowerShell, Zsh, CMD switcher',
    videoSrc: sessionsVideo
  },
  {
    id: 3,
    tag: 'PANES',
    title: 'Split Panes',
    placeholderText: 'Side-by-side terminal splits',
    videoSrc: runnerVideo
  },
  {
    id: 4,
    tag: 'WORKSPACE',
    title: 'Project Workspace',
    placeholderText: 'Project directory context builder',
    videoSrc: remoteVideo
  },
  {
    id: 5,
    tag: 'EDITOR',
    title: 'Markdown Editor',
    placeholderText: 'In-app documentation writer',
    videoSrc: gitVideo
  },
  {
    id: 6,
    tag: 'BROWSER',
    title: 'Browser Preview',
    placeholderText: 'Live web rendering frame',
    videoSrc: editorVideo
  },
  {
    id: 7,
    tag: 'GIT',
    title: 'Git Panel',
    placeholderText: 'Integrated branch and diff visualizer',
    videoSrc: paletteVideo
  }
]

export const FeaturesScroll: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [scrollRange, setScrollRange] = React.useState(0)

  // Measure dynamic scroll range based on card contents
  React.useEffect(() => {
    const calculateRange = () => {
      if (scrollContainerRef.current) {
        // Scroll limit is total width of track minus viewport width
        setScrollRange(scrollContainerRef.current.scrollWidth - window.innerWidth)
      }
    }
    calculateRange()
    
    // Recalculate on window resize & image/video loads
    window.addEventListener('resize', calculateRange)
    
    // Small delay to ensure layout is painted
    const timer = setTimeout(calculateRange, 100)
    
    return () => {
      window.removeEventListener('resize', calculateRange)
      clearTimeout(timer)
    }
  }, [])
  
  const { scrollYProgress } = useScroll({
    target: targetRef
  })

  // Tighter physics-based spring for premium, responsive feedback
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // Horizontal translate dynamically calculated in pixels (exactly stops at the last card edge)
  const x = useTransform(smoothProgress, [0, 1], [0, -scrollRange])

  const getFeatureIcon = (tag: string) => {
    switch (tag) {
      case 'INTERFACE': return <Layout size={18} />
      case 'SHELLS': return <Terminal size={18} />
      case 'PANES': return <Columns size={18} />
      case 'WORKSPACE': return <FolderOpen size={18} />
      case 'EDITOR': return <FileText size={18} />
      case 'BROWSER': return <Globe size={18} />
      case 'GIT': return <GitBranch size={18} />
      default: return <Layout size={18} />
    }
  }

  return (
    <section id="features" ref={targetRef} className="relative h-[400vh] bg-obsidian border-b border-iron/20 font-mono">
      {/* Sticky container matching viewport height */}
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden z-10">
        <div className="max-w-[1440px] mx-auto px-6 w-full mb-6">
          <span className="text-xs font-semibold tracking-widest text-[#0091ff]">FEATURES</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-pure-white mt-2 uppercase font-suisse">
            Built for high-performance terminal workflows.
          </h2>
        </div>

        {/* Horizontal scroll track with brutalist borders */}
        <div className="flex items-center border-y border-iron/20 bg-charcoal/10 py-12">
          <motion.div 
            ref={scrollContainerRef}
            style={{ x }} 
            className="flex gap-8 pl-12 pr-12"
          >
            {features.map((feature) => (
              <motion.div 
                key={feature.id} 
                whileHover={{ borderColor: 'rgba(0, 145, 255, 0.45)' }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="w-[400px] sm:w-[560px] aspect-video flex-shrink-0 bg-obsidian border border-iron/20 relative overflow-hidden group cursor-pointer"
              >
                {/* Visual grid blueprint accent line */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#0091ff]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30" />
                
                {/* Pure Image/Video Container filling 100% height & width */}
                <div className="absolute inset-0 w-full h-full bg-charcoal/30 flex flex-col justify-between overflow-hidden">
                  
                  {/* Top Header - Overlayed */}
                  <div className="w-full h-8 border-b border-iron/20 bg-obsidian/80 backdrop-blur-md flex items-center px-3 justify-between z-20 relative">
                    <span className="text-[9px] text-[#0091ff] tracking-widest font-semibold">{feature.tag}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-iron/40" />
                  </div>
                  
                  {feature.videoSrc ? (
                    <video 
                      src={feature.videoSrc} 
                      autoPlay 
                      loop 
                      muted 
                      playsInline 
                      className="absolute inset-0 w-full h-full object-cover z-10"
                    />
                  ) : (
                    <>
                      {/* Blueprint Grid graphic pattern overlay */}
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(64,64,64,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(64,64,64,0.05)_1px,transparent_1px)] bg-[size:14px_14px] pointer-events-none z-0" />
                      
                      <div className="flex-1 flex flex-col items-center justify-center relative bg-radial from-charcoal/40 to-obsidian/90 p-8 text-center z-10">
                        <div className="w-12 h-12 rounded-none border border-iron/20 bg-obsidian/90 flex items-center justify-center text-[#0091ff] mb-4 shadow-[0_0_15px_rgba(0,145,255,0.05)] group-hover:border-[#0091ff]/50 group-hover:text-pure-white group-hover:scale-110 transition-all duration-300 ease-premium">
                          {getFeatureIcon(feature.tag)}
                        </div>
                        <span className="text-[10px] text-pure-white font-semibold uppercase tracking-wider mb-1">
                          {feature.title} Preview
                        </span>
                        <span className="text-[9px] text-ash tracking-tight">
                          [{feature.placeholderText}]
                        </span>
                      </div>
                    </>
                  )}

                  {/* Dark bottom gradient overlay for readability */}
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-obsidian via-obsidian/60 to-transparent z-15 pointer-events-none" />

                  {/* Feature Label Overlay at bottom */}
                  <div className="p-3 w-full bg-obsidian/80 backdrop-blur-md border-t border-iron/10 flex items-center justify-between text-left z-20 relative mt-auto">
                    <span className="text-xs text-pure-white font-semibold uppercase tracking-wider">
                      {feature.title}
                    </span>
                    <span className="text-[10px] text-ash">
                      {feature.id.toString().padStart(2, '0')}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

