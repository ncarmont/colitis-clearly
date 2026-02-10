import Link from 'next/link'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <header className="bg-green-600 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-green-100 hover:text-white mb-4 inline-block">
            ← Back to Rankings
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Best Olive Oil Ranked
          </h1>
          <p className="text-green-100 text-lg max-w-2xl">
            Science-backed rankings of the world's highest polyphenol extra virgin olive oils.
          </p>
        </div>
      </header>

      {/* Mission Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <div className="prose prose-lg text-gray-700 space-y-4">
            <p>
              We believe consumers deserve transparent, lab-verified data when choosing olive oil for their health.
              Not all extra virgin olive oils are created equal — polyphenol content can vary from under 100 mg/kg
              to over 1,500 mg/kg depending on the cultivar, harvest timing, and processing methods.
            </p>
            <p>
              Our rankings focus exclusively on oils with <strong>verified laboratory testing</strong> (HPLC, qNMR, or
              other recognized methods) that document polyphenol content. We don't accept paid placements —
              rankings are based purely on verified polyphenol levels.
            </p>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Methodology</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 p-6 rounded-xl border border-green-100">
              <div className="text-3xl mb-3">🔬</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Lab-Verified Only</h3>
              <p className="text-gray-700">
                We only include oils with documented third-party laboratory testing. HPLC and qNMR are the gold
                standards — we clearly label which method was used for each oil.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-xl border border-green-100">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Standardized Scoring</h3>
              <p className="text-gray-700">
                Since HPLC and NMR methods can produce different values, we apply a 0.6 conversion factor to
                NMR/Other results to create comparable HPLC-equivalent scores.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-xl border border-green-100">
              <div className="text-3xl mb-3">🗓️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fresh Harvests Only</h3>
              <p className="text-gray-700">
                Polyphenols degrade over time. We prioritize oils from the current or most recent harvest season
                to ensure you're getting maximum health benefits.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-xl border border-green-100">
              <div className="text-3xl mb-3">🔗</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Source Transparency</h3>
              <p className="text-gray-700">
                Where available, we link directly to certificates of analysis (COAs) so you can verify the
                polyphenol content yourself.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Polyphenols Matter */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Polyphenols Matter</h2>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <p className="text-gray-700 mb-6">
              The European Food Safety Authority (EFSA) has approved a health claim for olive oil polyphenols:
              oils containing at least <strong>250 mg/kg</strong> of polyphenols can claim to help protect blood
              lipids from oxidative stress when consumed as part of a balanced diet (about 20g daily).
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-4xl mb-2">❤️</div>
                <h4 className="font-bold text-gray-900 mb-1">Cardiovascular</h4>
                <p className="text-sm text-gray-600">31% reduction in CVD risk with high EVOO intake</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🧠</div>
                <h4 className="font-bold text-gray-900 mb-1">Cognitive</h4>
                <p className="text-sm text-gray-600">Supports brain health and may reduce dementia risk</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🧬</div>
                <h4 className="font-bold text-gray-900 mb-1">Longevity</h4>
                <p className="text-sm text-gray-600">Key component of Blue Zone Mediterranean diets</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Affiliate Disclosure */}
      <section className="py-16 px-4 bg-green-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Affiliate Disclosure</h2>
          <div className="bg-white p-6 rounded-xl border border-green-200">
            <p className="text-gray-700">
              Some links on this site are affiliate links. If you purchase through these links, we may earn a
              small commission at no extra cost to you. This helps support our research and keeps the site running.
              <strong> Affiliate relationships never influence our rankings</strong> — oils are ranked purely by
              verified polyphenol content.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Questions or Suggestions?</h2>
          <p className="text-gray-600 mb-8">
            Know of a high-polyphenol oil we're missing? Have lab results to share? We'd love to hear from you.
          </p>
          <Link
            href="/"
            className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition"
          >
            View Current Rankings
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Best Olive Oil Ranked. All data verified from laboratory sources.
          </p>
        </div>
      </footer>
    </main>
  )
}
