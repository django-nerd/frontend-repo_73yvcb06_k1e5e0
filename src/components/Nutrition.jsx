const tips = [
  'Eat protein at every meal to support muscle and satiety.',
  'Build meals around whole foods — 80/20 rule for flexibility.',
  'Stay hydrated: 30–35 ml of water per kg bodyweight daily.',
  'Sleep 7–9 hours to maximize recovery and fat loss.'
]

export default function Nutrition() {
  return (
    <section id="nutrition" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block text-rose-300/90 text-xs font-semibold tracking-widest uppercase">Nutrition</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-white">Fuel your best self</h2>
            <p className="mt-3 text-white/70">No crash diets. Just smart, sustainable nutrition aligned with your training and lifestyle.</p>

            <ul className="mt-6 space-y-3">
              {tips.map((t, i) => (
                <li key={i} className="flex items-start gap-3 text-white/80">
                  <span className="mt-1 inline-block w-1.5 h-1.5 rounded-full bg-rose-400" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative rounded-2xl overflow-hidden bg-white/[0.03] ring-1 ring-white/10 p-6">
            <div className="aspect-video rounded-lg bg-gradient-to-br from-rose-500/40 to-orange-400/40" />
            <p className="mt-4 text-sm text-white/70">Get a custom macro plan aligned with your goals, foods you enjoy, and your cultural preferences.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
