import { Header } from '@/components/Header'

function App() {
  return (
    <div className="min-h-screen bg-obsidian text-pure-white flex flex-col font-suisse selection:bg-pure-white selection:text-obsidian">
      <Header />
      <main className="flex-1 flex flex-col justify-center items-center pt-24">
        {/* Placeholder for Hero Section */}
        <div className="text-center py-20 text-ash">
          Hero Section goes here
        </div>
      </main>
    </div>
  )
}

export default App
