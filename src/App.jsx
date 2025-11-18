import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Programs from './components/Programs'
import Nutrition from './components/Nutrition'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Programs />
        <Nutrition />
        <CTA />
      </main>
      <footer className="py-10 border-t border-white/10 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} PulseFit Coaching. All rights reserved.</p>
          <div className="text-white/60 text-sm">Built with care • Train hard • Eat smart</div>
        </div>
      </footer>
    </div>
  )
}

export default App
