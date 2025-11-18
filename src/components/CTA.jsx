export default function CTA() {
  return (
    <section id="contact" className="py-20 bg-slate-950">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Ready to get started?</h2>
        <p className="mt-3 text-white/70">Tell us about your goals and we’ll reach out with a personalized plan.</p>

        <form className="mt-8 grid sm:grid-cols-3 gap-3">
          <input className="col-span-1 sm:col-span-1 w-full px-4 py-3 rounded-md bg-white/5 ring-1 ring-white/10 text-white placeholder:text-white/60 focus:outline-none focus:ring-white/30" placeholder="Full name" />
          <input className="col-span-1 sm:col-span-1 w-full px-4 py-3 rounded-md bg-white/5 ring-1 ring-white/10 text-white placeholder:text-white/60 focus:outline-none focus:ring-white/30" placeholder="Email" />
          <button type="button" className="col-span-1 w-full px-4 py-3 rounded-md bg-white text-slate-900 font-semibold hover:bg-slate-100 transition">Request consult</button>
        </form>

        <p className="mt-4 text-xs text-white/60">By submitting, you agree to be contacted about coaching. No spam.</p>
      </div>
    </section>
  )
}
