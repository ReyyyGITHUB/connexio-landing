import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { Play } from 'lucide-react'

export const Hero: React.FC = () => {
  // Stagger variants for premium entrance feel
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.06,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1], // Custom premium ease-out
      },
    },
  }

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-start pt-32 px-6 overflow-hidden bg-obsidian">
      {/* Cinematic ambient lighting background overlay */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1440px] h-[600px] bg-gradient-to-b from-midnight via-obsidian/40 to-transparent pointer-events-none z-0" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl w-full flex flex-col items-center text-center mt-12"
      >
        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight leading-[1.08] text-pure-white max-w-3xl"
          style={{ letterSpacing: '-0.035em' }}
        >
          <span className="text-shine">Krea.ai</span> is the world's most powerful creative AI suite.
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="mt-6 text-base sm:text-lg text-fog max-w-xl font-normal leading-[1.4]"
        >
          Generate, enhance, and edit images, videos, or 3D meshes for free with AI.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-row items-center gap-4"
        >
          <a
            href="#start"
            className="inline-flex items-center justify-center text-sm font-semibold bg-pure-white text-obsidian px-6 py-3 rounded-full hover:bg-cloud transition-[background-color,transform] duration-200 ease-out active:scale-[0.98]"
          >
            Start for free
          </a>
          <a
            href="#launch"
            className="inline-flex items-center justify-center text-sm font-semibold text-pure-white bg-graphite/40 border border-iron/20 hover:border-pearl hover:bg-graphite/60 px-6 py-3 rounded-full transition-[background-color,border-color,transform] duration-200 ease-out active:scale-[0.98]"
          >
            Launch App
          </a>
        </motion.div>

        {/* Premium Studio Monitor / Device Mockup Container */}
        <motion.div
          variants={itemVariants}
          className="mt-16 w-full max-w-3xl relative flex flex-col items-center group"
        >
          {/* Subtle backlighting glow behind monitor */}
          <div className="absolute inset-0 bg-pure-white/[0.02] blur-[80px] rounded-full scale-75 group-hover:scale-90 transition-transform duration-500 ease-out" />

          {/* Device Frame */}
          <div className="relative w-full aspect-[16/10] bg-charcoal border-4 border-iron/30 rounded-2xl shadow-[0_24px_50px_rgba(0,0,0,0.8)] overflow-hidden">
            {/* Inner Workspace Screen Simulation */}
            <div className="w-full h-full bg-obsidian flex flex-col p-3 text-left select-none relative">
              {/* Screen Top Bar */}
              <div className="flex items-center justify-between border-b border-iron/10 pb-2 mb-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-iron/40" />
                  <span className="w-2 h-2 rounded-full bg-iron/40" />
                  <span className="w-2 h-2 rounded-full bg-iron/40" />
                </div>
                <div className="text-[10px] font-medium text-ash uppercase tracking-wider">
                  Krea Realtime Studio
                </div>
                <div className="w-6" />
              </div>

              {/* Workspace Content Canvas */}
              <div className="flex-1 border border-iron/10 rounded-lg bg-midnight flex flex-col items-center justify-center relative overflow-hidden p-6">
                {/* Simulated Glass Panel Inside Workspace */}
                <div className="absolute inset-0 bg-gradient-to-tr from-pure-white/[0.01] to-transparent pointer-events-none" />
                
                <h3 className="text-xl md:text-3xl font-medium tracking-tight text-fog mb-4 text-center">
                  Let's create something
                </h3>
                
                {/* Generation Card Grid preview */}
                <div className="grid grid-cols-3 gap-3 w-full max-w-md mt-2">
                  <div className="aspect-[4/3] bg-charcoal/80 border border-iron/20 rounded-lg p-2 flex flex-col justify-between hover:border-pearl/30 transition-colors duration-200">
                    <span className="text-[9px] font-semibold text-ash uppercase">Generate</span>
                    <Play size={12} className="text-fog" />
                  </div>
                  <div className="aspect-[4/3] bg-charcoal/80 border border-iron/20 rounded-lg p-2 flex flex-col justify-between hover:border-pearl/30 transition-colors duration-200">
                    <span className="text-[9px] font-semibold text-ash uppercase">Enhance</span>
                    <Play size={12} className="text-fog" />
                  </div>
                  <div className="aspect-[4/3] bg-charcoal/80 border border-iron/20 rounded-lg p-2 flex flex-col justify-between hover:border-pearl/30 transition-colors duration-200">
                    <span className="text-[9px] font-semibold text-ash uppercase">3D Mesh</span>
                    <Play size={12} className="text-fog" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* iMac Style Curved Stand Neck & Base */}
          <div className="w-24 h-16 bg-gradient-to-b from-iron/50 to-iron/20 clip-stand -mt-0.5 border-x border-b border-iron/20" />
          <div className="w-36 h-2 bg-iron/40 rounded-full -mt-1 shadow-md" />
        </motion.div>
      </motion.div>
    </section>
  )
}
