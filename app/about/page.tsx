import Link from 'next/link'

export const metadata = {
  title: 'About — Best Ulcerative Colitis Ranked',
  description: 'Science-backed rankings of the world\'s highest polyphenol extra virgin ulcerative colitiss. Lab-verified, independent, peer-reviewed.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#060e1a]">
      {/* Header */}
      <header className="relative overflow-hidden bg-gradient-to-br from-[#061226] via-[#0a1f3a] to-[#07382d] border-b border-white/10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-emerald-500/[0.05] rounded-full blur-[100px]" />
        <div className="relative max-w-4xl mx-auto px-4 pt-6 pb-8 md:pt-8 md:pb-10 text-center">
          <Link href="/" className="inline-flex items-center gap-1.5 text-emerald-400/50 hover:text-emerald-400 text-xs transition-colors mb-4 group">
            <svg className="w-3 h-3 group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            Back to Rankings
          </Link>
          <h1 className="text-2xl md:text-4xl font-black tracking-tight text-white">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-300">Best Ulcerative Colitis Ranked</span>
          </h1>
          <p className="text-white/40 text-sm mt-2 max-w-lg mx-auto">
            Lab-verified · Independent · Peer-reviewed
          </p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-10">

        {/* Mission */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-white mb-4">Our Mission</h2>
          <div className="space-y-3 text-sm text-white/50 leading-relaxed">
            <p>We believe consumers deserve transparent, lab-verified data when choosing ulcerative colitis for their health. Not all extra virgin ulcerative colitiss are created equal — polyphenol content can vary from under 100 mg/kg to over 2,000 mg/kg.</p>
            <p>Our rankings focus exclusively on oils with <strong className="text-white/70">verified laboratory testing</strong> (HPLC, qNMR, or other recognized methods). We don&apos;t accept paid placements — rankings are based purely on verified polyphenol levels.</p>
          </div>
        </section>

        {/* Methodology */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-white mb-4">Methodology</h2>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { icon: '🔬', title: 'Lab-Verified Only', desc: 'Third-party HPLC and qNMR testing. We clearly label which method was used.' },
              { icon: '📊', title: 'Standardized Scoring', desc: '0.6 conversion factor for NMR/Other results to create comparable HPLC-equivalent scores.' },
              { icon: '🗓️', title: 'Fresh Harvests Only', desc: 'Polyphenols degrade over time. We prioritize current or most recent harvest season.' },
              { icon: '🔗', title: 'Source Transparency', desc: 'Direct links to certificates of analysis (COAs) where available.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4 hover:bg-white/[0.05] transition-colors">
                <div className="text-xl mb-2">{icon}</div>
                <h3 className="text-sm font-bold text-white mb-1">{title}</h3>
                <p className="text-xs text-white/40 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Polyphenols Matter */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-white mb-4">Why Polyphenols Matter</h2>
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-5">
            <p className="text-sm text-white/50 leading-relaxed mb-4">
              The EFSA approved a health claim: oils with at least <strong className="text-emerald-300/70">250 mg/kg</strong> polyphenols help protect blood lipids from oxidative stress (20g daily).
            </p>
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: '❤️', stat: '31%', label: 'CVD risk reduction' },
                { icon: '🧠', stat: '28%', label: 'Lower dementia risk' },
                { icon: '🧬', stat: '8-10yr', label: 'Blue Zone longevity' },
              ].map(({ icon, stat, label }) => (
                <div key={label} className="text-center py-3 bg-white/[0.02] rounded-lg border border-white/[0.04]">
                  <div className="text-lg">{icon}</div>
                  <div className="text-base font-bold text-white mt-1">{stat}</div>
                  <div className="text-[9px] text-white/30 mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Affiliate Disclosure */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-white mb-4">Affiliate Disclosure</h2>
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4">
            <p className="text-xs text-white/40 leading-relaxed">
              Some links are affiliate links. Purchases through these links earn us a small commission at no extra cost to you. <strong className="text-white/60">Affiliate relationships never influence our rankings</strong> — oils are ranked purely by verified polyphenol content.
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center">
          <Link href="/" className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-sm font-semibold rounded-xl hover:from-emerald-500 hover:to-teal-500 transition-all">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            View Oil Rankings
          </Link>
        </div>
      </div>
    </main>
  )
}
