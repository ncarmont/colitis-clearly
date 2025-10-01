'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="bg-white/80 backdrop-blur-lg border-b border-gray-200/50 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-200">
              <span className="text-2xl">🫒</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              EVOO Rankings
            </span>
          </Link>

          <div className="flex gap-2 items-center">
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
        </div>
      </div>
    </nav>
  )
}
