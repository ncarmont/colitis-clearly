import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 text-gray-300">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-2xl">🫒</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                EVOO Rankings
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Science-backed rankings of the highest polyphenol extra virgin olive oils for optimal health.
            </p>
            <div className="flex gap-3 pt-2">
              <a
                href="https://www.instagram.com/bestoliveoilranked.com_/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-green-600 flex items-center justify-center transition-all duration-200 hover:scale-110"
                aria-label="Instagram"
              >
                <span className="text-sm">IG</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-green-400 transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Rankings
                </Link>
              </li>
              <li>
                <Link href="/research" className="text-gray-400 hover:text-green-400 transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Research
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-green-400 transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-bold mb-4 text-lg">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/research/overview" className="text-gray-400 hover:text-green-400 transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Research Overview
                </Link>
              </li>
              <li>
                <Link href="/research/producers" className="text-gray-400 hover:text-green-400 transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Top Producers
                </Link>
              </li>
              <li>
                <Link href="/research/cultivars" className="text-gray-400 hover:text-green-400 transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Olive Cultivars
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-bold mb-4 text-lg">Stay Updated</h3>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Get the latest rankings and research insights
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2.5 rounded-lg bg-gray-800/50 border border-gray-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all placeholder:text-gray-500"
              />
              <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-5 py-2.5 rounded-lg hover:from-green-500 hover:to-emerald-500 transition-all duration-200 text-sm font-semibold shadow-lg hover:shadow-xl hover:scale-105">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Affiliate Disclosure */}
        <div className="border-t border-gray-800 pt-6 pb-2">
          <p className="text-gray-500 text-xs leading-relaxed text-center max-w-2xl mx-auto">
            Some links on this site are affiliate links. We may earn a small commission if you purchase through them, at no extra cost to you. This helps us maintain the site and continue independent research. Our rankings are based solely on lab-verified data and are never influenced by affiliate relationships.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2026 EVOO Rankings. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm flex-wrap justify-center">
            <Link href="/privacy-policy" className="text-gray-400 hover:text-green-400 transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-green-400 transition-colors duration-200">
              Terms of Service
            </Link>
            <Link href="/contact" className="text-gray-400 hover:text-green-400 transition-colors duration-200">
              Contact
            </Link>
            <Link href="/editorial-policy" className="text-gray-400 hover:text-green-400 transition-colors duration-200">
              Editorial Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
