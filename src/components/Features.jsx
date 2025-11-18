import { Salad, Flame, Dumbbell, Clock, Apple } from 'lucide-react'

const features = [
  {
    icon: <Dumbbell className="w-6 h-6" />,
    title: 'Strength & Conditioning',
    desc: 'Periodized training tailored to your goals with progressive overload and form coaching.'
  },
  {
    icon: <Apple className="w-6 h-6" />,
    title: 'Personalized Nutrition',
    desc: 'Macro-aligned meal plans that fit your lifestyle, preferences, and cultural foods.'
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'Habit Coaching',
    desc: 'Build sustainable routines using simple, daily habits and weekly check-ins.'
  },
  {
    icon: <Flame className="w-6 h-6" />,
    title: 'Metabolic Health',
    desc: 'Energy balance, recovery, and stress management to maximize results.'
  },
]

export default function Features() {
  return (
    <section id="services" className="relative py-20 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(244,63,94,0.08),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(251,113,133,0.06),transparent_45%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-rose-300/90 text-xs font-semibold tracking-widest uppercase">What we do</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-white">Coaching that actually works</h2>
          <p className="mt-3 text-white/70">Everything you need to get strong, lean, and confident—without guesswork.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="group rounded-2xl bg-white/[0.03] ring-1 ring-white/10 p-6 hover:bg-white/[0.06] transition">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-rose-500 to-orange-400 text-white flex items-center justify-center">
                {f.icon}
              </div>
              <h3 className="mt-4 text-white font-semibold">{f.title}</h3>
              <p className="mt-2 text-white/70 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
