import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { FeaturesScroll } from '@/components/FeaturesScroll'
import { TechGrid } from '@/components/TechGrid'
import { Footer } from '@/components/Footer'

function App() {
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
