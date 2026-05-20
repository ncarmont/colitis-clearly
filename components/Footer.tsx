import Link from 'next/link'
import MedicalDisclaimer from '@/components/MedicalDisclaimer'
import { SITE_NAME, SITE_TAGLINE } from '@/lib/site'

const footerColumns = [
  {
    title: 'Explore',
    links: [
      { href: '/rankings', label: 'Coffee Rankings' },
      { href: '/blog', label: 'Guides' },
      { href: '/research', label: 'Testing Library' },
      { href: '/shop', label: 'Clean Coffee Picks' },
      { href: '/about', label: 'About' },
    ],
  },
  {
    title: 'Coffee Paths',
    links: [
      { href: '/research/testing-trials', label: 'Contaminant Testing' },
      { href: '/research/biomarkers', label: 'Mycotoxins' },
      { href: '/research/pathophysiology', label: 'Caffeine & Health' },
      { href: '/research/emerging', label: 'Decaf Methods' },
    ],
  },
  {
    title: 'Editorial',
    links: [
      { href: '/editorial-policy', label: 'Editorial Policy' },
      { href: '/privacy-policy', label: 'Privacy Policy' },
      { href: '/terms', label: 'Terms of Service' },
      { href: '/contact', label: 'Contact' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-warm-200/60 bg-warm-50/80 backdrop-blur-sm">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-coral-400/30 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr,1.8fr]">
          <div className="space-y-5">
            <div>
              <p className="font-display text-3xl tracking-tight text-warm-900">
                Cleanest <span className="text-coral-400">Coffee</span>
              </p>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-warm-600">
                {SITE_TAGLINE}. Brutally clear coffee rankings for people who want cleaner beans, better sourcing, and fewer marketing hallucinations.
              </p>
            </div>
            <MedicalDisclaimer />
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-warm-400">
                  {column.title}
                </p>
                <div className="mt-4 space-y-3">
                  {column.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block text-sm text-warm-600 transition hover:text-coral-500"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-warm-200/60 pt-6 text-sm text-warm-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 {SITE_NAME}. Educational coffee science, not personal medical advice.</p>
          <p className="max-w-xl text-left md:text-right">
            Coffee is not magic. If caffeine wrecks your sleep, reflux, anxiety, heart rhythm, or gut, see a professional.
          </p>
        </div>
      </div>
    </footer>
  )
}
