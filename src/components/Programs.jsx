import { motion } from 'framer-motion'

const programs = [
  {
    name: 'Lean Build',
    desc: '8-week hypertrophy block focused on quality movement, progressive overload, and recovery.',
    cta: 'Join Lean Build',
    color: 'from-rose-500 to-orange-500'
  },
  {
    name: 'Athlete Engine',
    desc: 'Speed, power, and conditioning cycles to boost performance on and off the field.',
    cta: 'Start Training',
    color: 'from-fuchsia-500 to-rose-500'
  },
  {
    name: 'Metabolic Reset',
    desc: 'Dial in nutrition, sleep, and stress with targeted protocols and weekly coaching.',
    cta: 'Reset Now',
    color: 'from-amber-500 to-rose-500'
  },
]

export default function Programs() {
  return (
    <section id="programs" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-rose-300/90 text-xs font-semibold tracking-widest uppercase">Programs</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-white">Choose your path</h2>
          <p className="mt-3 text-white/70">Flexible, coach-led options designed around your goals and schedule.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {programs.map((p, i) => (
            <motion.div
              key={i}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl bg-white/[0.03] ring-1 ring-white/10 p-6 overflow-hidden relative"
            >
              <div className={`absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl opacity-30 bg-gradient-to-br ${p.color}`} />
              <h3 className="text-white font-semibold text-xl">{p.name}</h3>
              <p className="mt-2 text-white/70 text-sm">{p.desc}</p>
              <a href="#contact" className="mt-6 inline-flex px-4 py-2 rounded-md bg-white text-slate-900 font-medium hover:bg-slate-100 transition">{p.cta}</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
