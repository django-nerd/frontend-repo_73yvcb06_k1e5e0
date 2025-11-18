import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 via-slate-900/40 to-slate-900 pointer-events-none" />

      <div className="relative h-full max-w-7xl mx-auto px-6 flex items-center">
        <div className="max-w-2xl">
          <div className="inline-flex items-center text-xs font-medium text-white/80 bg-white/10 backdrop-blur rounded-full px-3 py-1 ring-1 ring-white/20 mb-4">
            Premium fitness & nutrition coaching
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-lg">
            Build strength. Eat smarter. Feel unstoppable.
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-xl">
            We combine science-backed training with personalized meal planning to help you achieve real, lasting results.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex justify-center items-center px-6 py-3 rounded-md bg-white text-slate-900 font-semibold shadow-lg shadow-rose-500/20 hover:bg-slate-100 transition">
              Start your transformation
            </a>
            <a href="#programs" className="inline-flex justify-center items-center px-6 py-3 rounded-md bg-slate-900/70 text-white ring-1 ring-white/20 hover:bg-slate-900/90 transition">
              Explore programs
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
