import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'

function App() {
  return (
    <div className="min-h-screen bg-obsidian text-pure-white flex flex-col font-suisse selection:bg-pure-white selection:text-obsidian">
      <Header />
      <main className="flex-1 flex flex-col justify-center items-center">
        <Hero />
      </main>
    </div>
  )
}

export default App
