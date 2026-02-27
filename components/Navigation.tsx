'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Navigation() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-emerald-100/70 bg-white/85 backdrop-blur-xl shadow-[0_8px_30px_rgba(15,23,42,0.06)]">
      <div className="max-w-7xl mx-auto px-3 md:px-6 py-2.5 md:py-3.5">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2.5 md:gap-3.5 group">
            <div className="relative w-11 h-11 md:w-12 md:h-12 rounded-2xl p-[2px] bg-gradient-to-br from-emerald-400 via-green-500 to-teal-600 shadow-md group-hover:shadow-lg transition-all duration-300">
              <div className="w-full h-full rounded-[14px] bg-white flex items-center justify-center overflow-hidden">
                <img src="/ig-profile.jpg" alt="Best Olive Oil Ranked" className="w-8 h-8 md:w-9 md:h-9 rounded-full object-cover" />
              </div>
            </div>
            <div className="leading-tight">
              <div className="text-[12px] md:text-[18px] font-extrabold tracking-tight bg-gradient-to-r from-emerald-700 via-green-600 to-teal-600 bg-clip-text text-transparent">
                best-olive-oil-ranked.com
              </div>
              <div className="hidden md:block text-[11px] text-emerald-700/70 font-medium">
                Lab-verified EVOO rankings
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-2 items-center rounded-2xl border border-emerald-100 bg-emerald-50/50 p-1.5">
            <Link
              href="/"
              className={`px-4 py-2 rounded-xl font-semibold transition-all duration-200 ${
                pathname === '/'
                  ? 'bg-white text-emerald-700 shadow-sm border border-emerald-100'
                  : 'text-gray-700 hover:bg-white/80 hover:text-emerald-700'
              }`}
            >
              Rankings
            </Link>
            <Link
              href="/blog"
              className={`px-4 py-2 rounded-xl font-semibold transition-all duration-200 ${
                pathname.startsWith('/blog')
                  ? 'bg-white text-emerald-700 shadow-sm border border-emerald-100'
                  : 'text-gray-700 hover:bg-white/80 hover:text-emerald-700'
              }`}
            >
              Blog
            </Link>
            <Link
              href="/research"
              className={`px-4 py-2 rounded-xl font-semibold transition-all duration-200 ${
                pathname.startsWith('/research')
                  ? 'bg-white text-emerald-700 shadow-sm border border-emerald-100'
                  : 'text-gray-700 hover:bg-white/80 hover:text-emerald-700'
              }`}
            >
              Research
            </Link>
            <Link
              href="/about"
              className={`px-4 py-2 rounded-xl font-semibold transition-all duration-200 ${
                pathname === '/about'
                  ? 'bg-white text-emerald-700 shadow-sm border border-emerald-100'
                  : 'text-gray-700 hover:bg-white/80 hover:text-emerald-700'
              }`}
            >
              About
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 text-slate-700 bg-white border border-emerald-100 shadow-sm hover:bg-emerald-50 rounded-xl transition-colors"
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

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pb-1 space-y-1.5 rounded-2xl border border-emerald-100 bg-white/90 p-2 animate-fade-in">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-2.5 rounded-xl font-semibold transition-all duration-200 ${
                pathname === '/'
                  ? 'bg-emerald-100 text-emerald-800'
                  : 'text-gray-700 hover:bg-emerald-50 hover:text-emerald-700'
              }`}
            >
              Rankings
            </Link>
            <Link
              href="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-2.5 rounded-xl font-semibold transition-all duration-200 ${
                pathname.startsWith('/blog')
                  ? 'bg-emerald-100 text-emerald-800'
                  : 'text-gray-700 hover:bg-emerald-50 hover:text-emerald-700'
              }`}
            >
              Blog
            </Link>
            <Link
              href="/research"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-2.5 rounded-xl font-semibold transition-all duration-200 ${
                pathname.startsWith('/research')
                  ? 'bg-emerald-100 text-emerald-800'
                  : 'text-gray-700 hover:bg-emerald-50 hover:text-emerald-700'
              }`}
            >
              Research
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-2.5 rounded-xl font-semibold transition-all duration-200 ${
                pathname === '/about'
                  ? 'bg-emerald-100 text-emerald-800'
                  : 'text-gray-700 hover:bg-emerald-50 hover:text-emerald-700'
              }`}
            >
              About
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
