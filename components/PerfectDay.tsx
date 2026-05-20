import Link from 'next/link'

const stack = [
  { time: 'Before buying', action: 'Demand the COA', stat: 'Lab, batch, date, analytes', href: '/blog/heavy-metals-in-coffee-what-actually-matters' },
  { time: 'At checkout', action: 'Check roast date', stat: 'Fresh beats “best by”', href: '/blog/clean-coffee-buying-checklist' },
  { time: 'For decaf', action: 'Verify the process', stat: 'Swiss Water / CO₂ preferred', href: '/blog/decaf-solvents-swiss-water-co2' },
]

export default function PerfectDay() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:px-6">
      <div className="rounded-[32px] border border-white/8 bg-white/[0.03] p-6 md:p-8">
        <p className="text-[0.7rem] font-bold uppercase tracking-[0.28em] text-amber-200/70">Clean coffee protocol</p>
        <h2 className="font-display mt-3 text-4xl tracking-tight text-white">The buying stack that beats toxin theater.</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {stack.map((item) => (
            <Link key={item.time} href={item.href} className="rounded-[24px] border border-white/8 bg-white/[0.03] p-5 transition hover:border-amber-300/30">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{item.time}</p>
              <h3 className="mt-3 text-xl font-bold text-white">{item.action}</h3>
              <p className="mt-2 text-sm text-slate-300">{item.stat}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
