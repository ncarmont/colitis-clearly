'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const links = [
  { href: '/rankings', label: 'Rankings' },
  { href: '/blog', label: 'Blog' },
  { href: '/research', label: 'Research' },
  { href: '/shop', label: 'Shop' },
  { href: '/about', label: 'About' },
]

export default function Navigation() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  return (
    <nav className="sticky top-0 z-50 border-b border-white/8 bg-[rgba(8,17,28,0.82)] backdrop-blur-2xl">
      <div className="mx-auto max-w-7xl px-4 py-3 md:px-6">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="group flex min-w-0 items-center gap-3">
            <div className="rounded-[18px] bg-gradient-to-br from-emerald-accent via-teal-accent to-amber-accent p-[1px] shadow-glow-emerald">
              <div className="flex h-12 w-12 items-center justify-center rounded-[17px] bg-navy-950 text-sm font-black tracking-[0.24em] text-white">
                CC
              </div>
            </div>
            <div className="min-w-0 leading-tight">
              <p className="font-display text-[1.35rem] tracking-tight text-white md:text-[1.55rem]">
                Colitis <span className="text-emerald-accent">Clearly</span>
              </p>
              <p className="truncate text-[0.63rem] uppercase tracking-[0.28em] text-slate-400 md:text-[0.68rem]">
                Evidence-Based UC Science
              </p>
            </div>
          </Link>

          <div className="hidden items-center gap-2 rounded-full border border-white/8 bg-white/[0.04] p-1.5 md:flex">
            {links.map((link) => {
              const active = pathname.startsWith(link.href)

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold ${
                    active
                      ? 'border-emerald-accent/60 bg-emerald-accent/12 text-emerald-100'
                      : 'border-transparent text-slate-300 hover:border-white/10 hover:bg-white/[0.06] hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-white md:hidden"
            onClick={() => setMobileMenuOpen((current) => !current)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>

        {mobileMenuOpen ? (
          <div className="animate-fade-in-up md:hidden">
            <div className="mt-3 rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(20,34,54,0.96),rgba(8,17,28,0.94))] p-3 shadow-glow-soft">
              <div className="mb-3 rounded-[22px] border border-[rgba(0,200,83,0.16)] bg-[rgba(0,200,83,0.08)] px-4 py-3">
                <p className="text-[0.65rem] uppercase tracking-[0.28em] text-emerald-100/70">Navigation</p>
                <p className="mt-1 text-sm text-slate-300">
                  Evidence-guided rankings, articles, research summaries, and science-backed recommendations.
                </p>
              </div>
              <div className="space-y-2">
                {links.map((link) => {
                  const active = pathname.startsWith(link.href)

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`block rounded-2xl border px-4 py-3 text-sm font-semibold ${
                        active
                          ? 'border-emerald-accent/60 bg-emerald-accent/12 text-emerald-100'
                          : 'border-white/8 bg-white/[0.04] text-slate-200 hover:bg-white/[0.08]'
                      }`}
                    >
                      {link.label}
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  )
}
