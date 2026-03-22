import Link from 'next/link'
import { MEDICAL_DISCLAIMER, SITE_NAME, SITE_TAGLINE } from '@/lib/site'

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 text-gray-300">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-300 to-cyan-300 text-sm font-black tracking-[0.2em] text-slate-950 shadow-lg">
                CC
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-emerald-300 to-cyan-200 bg-clip-text text-transparent">
                {SITE_NAME}
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {SITE_TAGLINE}. We synthesize trial data, biomarkers, and guideline-based UC care for patients, caregivers, and trainees.
            </p>
            <div className="rounded-2xl border border-amber-400/20 bg-amber-400/10 px-4 py-3 text-xs leading-relaxed text-amber-100/85">
              {MEDICAL_DISCLAIMER}
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-emerald-300 transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-emerald-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/rankings" className="text-gray-400 hover:text-emerald-300 transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-emerald-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Treatments
                </Link>
              </li>
              <li>
                <Link href="/research" className="text-gray-400 hover:text-emerald-300 transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-emerald-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Research
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-emerald-300 transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-emerald-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-emerald-300 transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-emerald-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 text-lg">Research Tracks</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/research/overview" className="text-gray-400 hover:text-emerald-300 transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-emerald-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Research Overview
                </Link>
              </li>
              <li>
                <Link href="/research/pathophysiology" className="text-gray-400 hover:text-emerald-300 transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-emerald-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Pathophysiology
                </Link>
              </li>
              <li>
                <Link href="/research/clinical-trials" className="text-gray-400 hover:text-emerald-300 transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-emerald-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Clinical Trials
                </Link>
              </li>
              <li>
                <Link href="/research/biomarkers" className="text-gray-400 hover:text-emerald-300 transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-emerald-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Biomarkers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 text-lg">Read Next</h3>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Start with the flagship treatment comparison or the flare-management guide.
            </p>
            <div className="space-y-3">
              <Link href="/rankings" className="block rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-white transition hover:border-emerald-300/30 hover:bg-white/[0.06]">
                UC treatment rankings
              </Link>
              <Link href="/blog/uc-flare-management" className="block rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-white transition hover:border-emerald-300/30 hover:bg-white/[0.06]">
                What to do during a flare
              </Link>
              <Link href="/blog/fecal-calprotectin-explained" className="block rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-white transition hover:border-emerald-300/30 hover:bg-white/[0.06]">
                Calprotectin explained
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 pb-2">
          <p className="text-gray-500 text-xs leading-relaxed text-center max-w-2xl mx-auto">
            Colitis Clearly is editorially independent. Pages summarize published trials, reviews, and guideline-informed practice. We do not provide personal medical advice or replace clinician care.
          </p>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2026 {SITE_NAME}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm flex-wrap justify-center">
            <Link href="/privacy-policy" className="text-gray-400 hover:text-emerald-300 transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-emerald-300 transition-colors duration-200">
              Terms of Service
            </Link>
            <Link href="/contact" className="text-gray-400 hover:text-emerald-300 transition-colors duration-200">
              Contact
            </Link>
            <Link href="/editorial-policy" className="text-gray-400 hover:text-emerald-300 transition-colors duration-200">
              Editorial Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
