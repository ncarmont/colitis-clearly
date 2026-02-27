import Link from 'next/link'

export const metadata = {
  title: 'Editorial Policy | Best Olive Oil Ranked',
  description: 'How Best Olive Oil Ranked researches, verifies, and updates rankings.'
}

export default function EditorialPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-4xl mx-auto px-4 py-12 prose prose-slate max-w-none">
        <Link href="/" className="text-green-700 hover:underline no-underline">← Back to rankings</Link>
        <h1>Editorial Policy</h1>

        <p>
          Our goal is to publish accurate, useful, and transparent olive-oil rankings focused on polyphenol evidence.
        </p>

        <h2>How products are evaluated</h2>
        <ul>
          <li>Polyphenol values from published lab methods (HPLC, qNMR, RSS/other where disclosed).</li>
          <li>Harvest freshness and batch relevance.</li>
          <li>Source credibility (official producer pages, COAs, or trusted lab references).</li>
          <li>Data consistency across multiple sources when available.</li>
        </ul>

        <h2>How often data is updated</h2>
        <p>
          We run frequent checks and update values when source data changes (harvest season, pricing, stock status, lab disclosures).
        </p>

        <h2>Corrections policy</h2>
        <p>
          If you spot an error, email <a href="mailto:contact@best-olive-oil-ranked.com">contact@best-olive-oil-ranked.com</a> with the
          product name, correction details, and source links.
        </p>

        <h2>Commercial independence</h2>
        <p>
          We may use affiliate links. However, paid relationships do not automatically change ranking order.
        </p>
      </section>
    </main>
  )
}
