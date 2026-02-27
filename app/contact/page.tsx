import Link from 'next/link'

export const metadata = {
  title: 'Contact | Best Olive Oil Ranked',
  description: 'Contact Best Olive Oil Ranked for corrections, lab reports, partnerships, and editorial feedback.'
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <section className="max-w-4xl mx-auto px-4 py-12">
        <Link href="/" className="text-green-700 hover:underline">← Back to rankings</Link>
        <h1 className="text-4xl font-bold text-slate-900 mt-4 mb-4">Contact</h1>
        <p className="text-slate-700 mb-8">
          We review correction requests, new lab reports, media inquiries, and partnership opportunities.
        </p>

        <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-4">
          <p><strong>Email:</strong> <a className="text-green-700 hover:underline" href="mailto:contact@best-olive-oil-ranked.com">contact@best-olive-oil-ranked.com</a></p>
          <p><strong>Response time:</strong> Usually within 2–4 business days.</p>
          <p><strong>For data corrections, include:</strong> product name, harvest/batch, source URL, and (if available) COA PDF or lab link.</p>
        </div>

        <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-6 text-slate-800">
          <h2 className="text-xl font-semibold mb-2">Important note</h2>
          <p>
            We do not guarantee listing placement. Rankings are based on verified polyphenol evidence and editorial methodology,
            not payment.
          </p>
        </div>
      </section>
    </main>
  )
}
