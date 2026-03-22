'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { SITE_NAME, SITE_TAGLINE } from '@/lib/site'

export default function Navigation() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const links = [
    { href: '/', label: 'Home', active: pathname === '/' },
    { href: '/rankings', label: 'Treatments', active: pathname.startsWith('/rankings') },
    { href: '/research', label: 'Research', active: pathname.startsWith('/research') },
    { href: '/blog', label: 'Blog', active: pathname.startsWith('/blog') },
    { href: '/about', label: 'About', active: pathname.startsWith('/about') },
  ]

  return (
    <nav className="sticky top-0 z-50 border-b border-white/8 bg-[#071220]/85 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-3 py-3 md:px-6 md:py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2.5 md:gap-3.5 group">
            <div className="relative w-11 h-11 md:w-12 md:h-12 rounded-2xl p-[1px] bg-gradient-to-br from-emerald-300 via-cyan-300 to-sky-400 shadow-lg shadow-emerald-900/25 transition-all duration-300 group-hover:scale-[1.02]">
              <div className="flex h-full w-full items-center justify-center rounded-[15px] bg-[#071220] text-sm font-black tracking-[0.2em] text-emerald-200 md:text-base">
                CC
              </div>
            </div>
            <div className="leading-tight">
              <div className="text-[13px] md:text-[18px] font-extrabold tracking-tight bg-gradient-to-r from-emerald-200 via-cyan-200 to-sky-200 bg-clip-text text-transparent">
                {SITE_NAME}
              </div>
              <div className="hidden md:block text-[11px] text-slate-400 font-medium">
                {SITE_TAGLINE}
              </div>
            </div>
          </Link>

          <div className="hidden md:flex gap-2 items-center rounded-2xl border border-white/8 bg-white/[0.04] p-1.5">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-xl font-semibold transition-all duration-200 ${
                  link.active
                    ? 'bg-white text-slate-950 shadow-sm'
                    : 'text-slate-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 text-slate-200 bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] rounded-xl transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.3} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.3} d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pb-1 space-y-1.5 rounded-2xl border border-white/10 bg-[#0b1830] p-2 animate-fade-in">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2.5 rounded-xl font-semibold transition-all duration-200 ${
                  link.active
                    ? 'bg-white text-slate-950'
                    : 'text-slate-300 hover:bg-white/8 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
