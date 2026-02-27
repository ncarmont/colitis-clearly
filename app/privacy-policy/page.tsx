import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy | Best Olive Oil Ranked',
  description: 'Privacy policy for best-olive-oil-ranked.com.'
}

export default function PrivacyPolicyPage() {
  const updated = '2026-02-27'

  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-4xl mx-auto px-4 py-12 prose prose-slate max-w-none">
        <Link href="/" className="text-green-700 hover:underline no-underline">← Back to rankings</Link>
        <h1>Privacy Policy</h1>
        <p><strong>Last updated:</strong> {updated}</p>

        <p>
          This Privacy Policy explains how Best Olive Oil Ranked ("we", "us") collects and uses information when you use
          <strong> best-olive-oil-ranked.com</strong>.
        </p>

        <h2>Information we collect</h2>
        <ul>
          <li>Basic analytics data (e.g., pages visited, device/browser type) via Google Analytics.</li>
          <li>Ad-related data via Google AdSense (cookies or similar technologies where applicable).</li>
          <li>Information you send us directly by email.</li>
        </ul>

        <h2>How we use information</h2>
        <ul>
          <li>Operate and improve the site.</li>
          <li>Maintain ranking quality and fix errors.</li>
          <li>Measure traffic and site performance.</li>
          <li>Serve ads (once approved) in line with Google policies.</li>
        </ul>

        <h2>Cookies and advertising</h2>
        <p>
          Google AdSense may use cookies to serve personalized or non-personalized ads according to user region and consent choices.
          For EEA/UK users, consent options are provided where required by law.
        </p>

        <h2>Third-party links</h2>
        <p>
          This site links to third-party retailers and producers. Their privacy practices are governed by their own policies.
        </p>

        <h2>Data retention</h2>
        <p>
          We retain analytics and operational logs only as needed for business and legal purposes.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about privacy: <a href="mailto:contact@best-olive-oil-ranked.com">contact@best-olive-oil-ranked.com</a>
        </p>
      </section>
    </main>
  )
}
