'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Navigation() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-white/80 backdrop-blur-lg border-b border-gray-200/50 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 md:gap-3 group">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-200">
              <span className="text-xl md:text-2xl">🫒</span>
            </div>
            <span className="text-sm md:text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              best-olive-oil-ranked.com
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-2 items-center">
            <Link
              href="/"
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                pathname === '/'
                  ? 'bg-green-100 text-green-700'
                  : 'text-gray-700 hover:bg-green-50 hover:text-green-600'
              }`}
            >
              Rankings
            </Link>
            <Link
              href="/blog"
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                pathname.startsWith('/blog')
                  ? 'bg-green-100 text-green-700'
                  : 'text-gray-700 hover:bg-green-50 hover:text-green-600'
              }`}
            >
              Blog
            </Link>
            <Link
              href="/research"
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                pathname.startsWith('/research')
                  ? 'bg-green-100 text-green-700'
                  : 'text-gray-700 hover:bg-green-50 hover:text-green-600'
              }`}
            >
              Research
            </Link>
            <Link
              href="/about"
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                pathname === '/about'
                  ? 'bg-green-100 text-green-700'
                  : 'text-gray-700 hover:bg-green-50 hover:text-green-600'
              }`}
            >
              About
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:bg-green-50 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pb-2 space-y-1">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                pathname === '/'
                  ? 'bg-green-100 text-green-700'
                  : 'text-gray-700 hover:bg-green-50 hover:text-green-600'
              }`}
            >
              Rankings
            </Link>
            <Link
              href="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                pathname.startsWith('/blog')
                  ? 'bg-green-100 text-green-700'
                  : 'text-gray-700 hover:bg-green-50 hover:text-green-600'
              }`}
            >
              Blog
            </Link>
            <Link
              href="/research"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                pathname.startsWith('/research')
                  ? 'bg-green-100 text-green-700'
                  : 'text-gray-700 hover:bg-green-50 hover:text-green-600'
              }`}
            >
              Research
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                pathname === '/about'
                  ? 'bg-green-100 text-green-700'
                  : 'text-gray-700 hover:bg-green-50 hover:text-green-600'
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
