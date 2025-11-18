import { useState, useEffect } from 'react'
import { Menu, X, Dumbbell } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggle = () => setOpen(v => !v)

  const LinkItem = ({ href, children }) => (
    <a href={href} className="text-slate-200 hover:text-white transition-colors px-3 py-2 rounded-md">
      {children}
    </a>
  )

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-slate-900/70 border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 text-white font-semibold">
            <div className="p-2 rounded-lg bg-gradient-to-br from-rose-500 to-orange-500">
              <Dumbbell className="w-5 h-5 text-white" />
            </div>
            <span>PulseFit</span>
          </a>

          <nav className="hidden md:flex items-center gap-2">
            <LinkItem href="#services">Services</LinkItem>
            <LinkItem href="#programs">Programs</LinkItem>
            <LinkItem href="#nutrition">Nutrition</LinkItem>
            <LinkItem href="#testimonials">Results</LinkItem>
            <a href="#contact" className="ml-2 inline-flex items-center px-4 py-2 rounded-md bg-white text-slate-900 font-medium hover:bg-slate-100 transition-colors">Get Started</a>
          </nav>

          <button className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md bg-white/10 text-white" onClick={toggle} aria-label="Toggle menu">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/90 backdrop-blur-md">
          <div className="px-4 py-3 space-y-1">
            <a onClick={() => setOpen(false)} href="#services" className="block text-slate-200 py-2">Services</a>
            <a onClick={() => setOpen(false)} href="#programs" className="block text-slate-200 py-2">Programs</a>
            <a onClick={() => setOpen(false)} href="#nutrition" className="block text-slate-200 py-2">Nutrition</a>
            <a onClick={() => setOpen(false)} href="#testimonials" className="block text-slate-200 py-2">Results</a>
            <a onClick={() => setOpen(false)} href="#contact" className="block text-white font-medium py-2">Get Started</a>
          </div>
        </div>
      )}
    </header>
  )
}
