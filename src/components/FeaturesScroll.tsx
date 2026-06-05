import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

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
                className="w-[380px] sm:w-[480px] h-[520px] flex-shrink-0 bg-obsidian border border-iron/20 p-6 flex flex-col justify-between relative overflow-hidden group"
              >
                {/* Pure Image Placeholder Container */}
                <div className="w-full flex-1 bg-charcoal/30 border border-iron/20 flex flex-col justify-start relative overflow-hidden">
                  <div className="w-full h-6 border-b border-iron/20 bg-obsidian/60 flex items-center px-3 justify-between">
                    <span className="text-[9px] text-ash tracking-widest">{feature.tag}_MOCK_PREVIEW</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-iron/40" />
                  </div>
                  <div className="flex-1 flex flex-col items-center justify-center relative bg-radial from-charcoal to-obsidian p-8 text-center">
                    <div className="w-12 h-12 rounded-full border border-iron/20 bg-obsidian/85 flex items-center justify-center text-ash mb-3">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375 0 11-.75 0 .375 0 01.75 0z" />
                      </svg>
                    </div>
                    <span className="text-[10px] text-fog font-medium uppercase tracking-wider mb-1">
                      {feature.title} Preview
                    </span>
                    <span className="text-[9px] text-ash tracking-tight">
                      [{feature.placeholderText}]
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

