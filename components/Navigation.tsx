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

function BrandIcon() {
  return (
    <div className="relative flex-shrink-0">
      <div className="logo-breathe absolute -inset-1.5 rounded-[20px] bg-gradient-to-br from-coral-400/40 to-teal-accent/25 blur-md" />
      <div className="relative overflow-hidden rounded-[14px] shadow-[0_4px_16px_rgba(244,132,95,0.25)]">
        <svg width="42" height="42" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect width="44" height="44" rx="13" fill="url(#navGrad1)" />
          <rect x="0" y="0" width="44" height="22" rx="13" fill="url(#navSheen)" opacity="0.45" />
          <path
            d="M30 13C27.2 11.4 24 10.5 20.8 10.5C13.6 10.5 8 16.2 8 23.5C8 30.8 13.6 36.5 20.8 36.5C24 36.5 27.1 35.5 30 33.8"
            stroke="white"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeOpacity="0.95"
          />
          <circle cx="30.5" cy="12.5" r="2.8" fill="white" fillOpacity="0.95" />
          <circle cx="30.5" cy="34.5" r="2.8" fill="white" fillOpacity="0.95" />
          <path
            d="M25.5 17.5C23.5 16.3 21.2 15.8 19 16"
            stroke="white"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeOpacity="0.35"
          />
          <defs>
            <linearGradient id="navGrad1" x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">
              <stop stopColor="#f4845f" />
              <stop offset="1" stopColor="#f9a87a" />
            </linearGradient>
            <linearGradient id="navSheen" x1="22" y1="0" x2="22" y2="22" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" stopOpacity="0.28" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}

export default function Navigation() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  return (
    <nav className="sticky top-0 z-50 border-b border-warm-200/60 bg-white/80 backdrop-blur-2xl shadow-[0_1px_20px_rgba(180,80,40,0.06)]">
      <div className="mx-auto max-w-7xl px-4 py-2.5 md:px-6">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="group flex min-w-0 items-center gap-2.5">
            <BrandIcon />
            <div className="min-w-0 leading-tight">
              <p className="font-display text-[1.25rem] tracking-tight text-warm-900 md:text-[1.4rem]">
                Project Remission <span className="text-coral-400">UC</span>
              </p>
              <p className="truncate text-[0.58rem] uppercase tracking-[0.26em] text-warm-500 md:text-[0.63rem]">
                Finding what actually works
              </p>
            </div>
          </Link>

          <div className="hidden items-center gap-1 rounded-full border border-warm-200 bg-warm-50/80 p-1 md:flex">
            {links.map((link) => {
              const active = pathname.startsWith(link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-full border px-3.5 py-1.5 text-sm font-semibold transition-all ${
                    active
                      ? 'border-coral-400/50 bg-coral-400/10 text-coral-600'
                      : 'border-transparent text-warm-700 hover:border-warm-200 hover:bg-white hover:text-warm-900'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-warm-200 bg-white text-warm-700 md:hidden"
            onClick={() => setMobileMenuOpen((c) => !c)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
            <div className="mt-2.5 rounded-[24px] border border-warm-200 bg-white/95 p-2.5 shadow-card-warm">
              <div className="mb-2.5 rounded-[18px] border border-coral-400/15 bg-coral-50/60 px-4 py-2.5">
                <p className="text-[0.6rem] uppercase tracking-[0.28em] text-coral-600/70">Navigation</p>
                <p className="mt-1 text-xs text-warm-600">
                  Evidence-guided rankings, articles, research summaries, and science-backed recommendations.
                </p>
              </div>
              <div className="space-y-1.5">
                {links.map((link) => {
                  const active = pathname.startsWith(link.href)
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`block rounded-xl border px-4 py-2.5 text-sm font-semibold ${
                        active
                          ? 'border-coral-400/40 bg-coral-400/8 text-coral-600'
                          : 'border-warm-100 bg-warm-50 text-warm-800 hover:bg-white'
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
