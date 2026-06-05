import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { Layout, History, Play, Server, Code2 } from 'lucide-react'

interface FeatureCard {
  id: number
  title: string
  tag: string
  placeholderText: string
}

const features: FeatureCard[] = [
  {
    id: 1,
    tag: 'WORKSPACE',
    title: 'Project Workspace',
    placeholderText: 'Workspace Interface Mockup'
  },
  {
    id: 2,
    tag: 'SESSIONS',
    title: 'Persistent Sessions',
    placeholderText: 'Session Restore Flow Diagram'
  },
  {
    id: 3,
    tag: 'RUNNER',
    title: 'Auto Task Runner',
    placeholderText: 'Detected Scripts Action Panel'
  },
  {
    id: 4,
    tag: 'REMOTE',
    title: 'SSH Connection Manager',
    placeholderText: 'Remote Nodes SSH List'
  },
  {
    id: 5,
    tag: 'EDITOR',
    title: 'CodeMirror 6 Editor',
    placeholderText: 'Code Split-Pane Workspace'
  }
]

export const FeaturesScroll: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: targetRef
  })

  // Smooth scroll using physics-based spring damping
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 25,
    restDelta: 0.0005
  })

  // Horizontal translate calculation based on smooth progress
  const x = useTransform(smoothProgress, [0, 1], ['0%', '-52%'])

  const getFeatureIcon = (tag: string) => {
    switch (tag) {
      case 'WORKSPACE': return <Layout size={18} />
      case 'SESSIONS': return <History size={18} />
      case 'RUNNER': return <Play size={18} />
      case 'REMOTE': return <Server size={18} />
      case 'EDITOR': return <Code2 size={18} />
      default: return <Layout size={18} />
    }
  }

  return (
    <section id="features" ref={targetRef} className="relative h-[300vh] bg-obsidian border-b border-iron/20 font-mono">
      {/* Sticky container matching viewport height */}
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden z-10">
        <div className="max-w-[1440px] mx-auto px-6 w-full mb-12">
          <span className="text-xs font-semibold tracking-widest text-[#0091ff]">FEATURES</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-pure-white mt-2 uppercase font-suisse">
            Built for high-performance terminal workflows.
          </h2>
        </div>

        {/* Horizontal scroll track with brutalist borders */}
        <div className="flex items-center border-y border-iron/20 bg-charcoal/10 py-16">
          <motion.div style={{ x }} className="flex gap-8 pl-12 pr-[30vw]">
            {features.map((feature) => (
              <motion.div 
                key={feature.id} 
                whileHover={{ y: -8, borderColor: 'rgba(0, 145, 255, 0.45)' }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="w-[380px] sm:w-[480px] h-[500px] flex-shrink-0 bg-obsidian border border-iron/20 p-6 flex flex-col justify-between relative overflow-hidden group cursor-pointer"
              >
                {/* Visual grid blueprint accent line */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#0091ff]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Pure Image Placeholder Container */}
                <div className="w-full flex-1 bg-charcoal/30 border border-iron/20 flex flex-col justify-start relative overflow-hidden">
                  <div className="w-full h-6 border-b border-iron/20 bg-obsidian/60 flex items-center px-3 justify-between">
                    <span className="text-[9px] text-[#0091ff] tracking-widest font-semibold">{feature.tag}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-iron/40" />
                  </div>
                  
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
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

