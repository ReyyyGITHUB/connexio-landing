import { useEffect } from 'react'
import Lenis from 'lenis'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { FeaturesScroll } from '@/components/FeaturesScroll'
import { TechGrid } from '@/components/TechGrid'
import { Footer } from '@/components/Footer'

function App() {
  useEffect(() => {
    // Initialize Lenis with high smoothness parameters
    const lenis = new Lenis({
      duration: 1.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      infinite: false,
      smoothWheel: true,
      wheelMultiplier: 1.1,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div className="min-h-screen bg-obsidian text-pure-white flex flex-col font-suisse selection:bg-pure-white selection:text-obsidian">
      <Header />
      <main className="flex-1 w-full">
        <Hero />
        <FeaturesScroll />
        <TechGrid />
        <Footer />
      </main>
    </div>
  )
}

export default App

