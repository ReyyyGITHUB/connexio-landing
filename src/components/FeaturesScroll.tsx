import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface FeatureCard {
  id: number
  title: string
  tag: string
  description: string
  placeholderBg: string
}

const features: FeatureCard[] = [
  {
    id: 1,
    tag: 'Workspace',
    title: 'Project Workspace',
    description: 'Organize your terminal environments by project dynamically with drag-and-drop groups.',
    placeholderBg: 'from-zinc-900 to-black border border-iron/20'
  },
  {
    id: 2,
    tag: 'Sessions',
    title: 'Persistent Sessions',
    description: 'Keep your active shell tabs, directory histories, and runners active even after application restarts.',
    placeholderBg: 'from-zinc-900 to-black border border-iron/20'
  },
  {
    id: 3,
    tag: 'Runner',
    title: 'Auto Task Runner',
    description: 'Automatically detects package.json, Cargo.toml, pyproject.toml, and Makefile scripts for single-click execution.',
    placeholderBg: 'from-zinc-900 to-black border border-iron/20'
  },
  {
    id: 4,
    tag: 'Remote',
    title: 'SSH Manager',
    description: 'Secure authentication key manager to connect and manage remote server networks within the editor.',
    placeholderBg: 'from-zinc-900 to-black border border-iron/20'
  },
  {
    id: 5,
    tag: 'Editor',
    title: 'Built-in Code Editor',
    description: 'Full code editor powered by CodeMirror 6 with live preview layouts side-by-side.',
    placeholderBg: 'from-zinc-900 to-black border border-iron/20'
  }
]

export const FeaturesScroll: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: targetRef
  })

  // Horizontal translate calculation based on vertical scroll percentage
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-60%'])

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-obsidian">
      {/* Sticky container matching viewport height */}
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden z-10">
        <div className="max-w-[1440px] mx-auto px-6 w-full mb-8">
          <span className="text-xs font-semibold tracking-widest text-ash uppercase">Features Gallery</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-pure-white mt-1">Built for high-performance engineering.</h2>
        </div>

        {/* Horizontal scroll track */}
        <div className="flex items-center">
          <motion.div style={{ x }} className="flex gap-6 pl-6 pr-[20vw]">
            {features.map((feature) => (
              <div 
                key={feature.id} 
                className="w-[380px] sm:w-[450px] h-[500px] flex-shrink-0 rounded-3xl bg-gradient-to-b p-8 flex flex-col justify-between relative overflow-hidden group shadow-[0_12px_40px_rgba(0,0,0,0.6)]"
              >
                {/* Decorative spotlight hover effect */}
                <div className="absolute inset-0 bg-radial from-pure-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                {/* Visual Image Placeholder inside the card */}
                <div className="w-full h-[220px] rounded-2xl bg-gradient-to-br from-charcoal to-graphite border border-iron/30 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-radial from-pure-white/[0.04] to-transparent" />
                  <span className="text-xs font-medium text-ash uppercase tracking-wider">{feature.tag} Mockup</span>
                </div>

                {/* Card Details */}
                <div className="mt-6 flex flex-col items-start">
                  <span className="px-3 py-1 rounded-full border border-iron/30 text-[10px] font-semibold tracking-wider text-fog uppercase bg-charcoal/40 mb-3 select-none">
                    {feature.tag}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-pure-white">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm text-fog leading-[1.5] max-w-sm">
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
