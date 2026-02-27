import Link from 'next/link'

export const metadata = {
  title: 'Terms of Use | Best Olive Oil Ranked',
  description: 'Terms of use for best-olive-oil-ranked.com.'
}

export default function TermsPage() {
  const updated = '2026-02-27'

  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-4xl mx-auto px-4 py-12 prose prose-slate max-w-none">
        <Link href="/" className="text-green-700 hover:underline no-underline">← Back to rankings</Link>
        <h1>Terms of Use</h1>
        <p><strong>Last updated:</strong> {updated}</p>

        <p>
          By using best-olive-oil-ranked.com, you agree to these Terms.
        </p>

        <h2>Informational content only</h2>
        <p>
          Content is provided for general informational purposes and does not constitute medical advice.
          Always consult a qualified professional for medical decisions.
        </p>

        <h2>Ranking methodology</h2>
        <p>
          Rankings are based on available evidence (e.g., published lab values, harvest details, and source reliability).
          We may update entries at any time as new information appears.
        </p>

        <h2>Affiliate disclosure</h2>
        <p>
          Some links are affiliate links. We may earn a commission at no additional cost to you.
          Affiliate relationships do not guarantee ranking position.
        </p>

        <h2>External websites</h2>
        <p>
          We are not responsible for the content, pricing, policies, or availability of third-party websites.
        </p>

        <h2>Limitation of liability</h2>
        <p>
          To the fullest extent permitted by law, we disclaim liability for losses arising from use of this website.
        </p>

        <h2>Contact</h2>
        <p>
          For legal or policy questions: <a href="mailto:contact@best-olive-oil-ranked.com">contact@best-olive-oil-ranked.com</a>
        </p>
      </section>
    </main>
  )
}
