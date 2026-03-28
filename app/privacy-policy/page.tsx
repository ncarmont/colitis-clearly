import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Project Remission UC',
  description: 'Privacy policy for Project Remission UC.',
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#060e1a] text-white">
      <section className="mx-auto max-w-4xl px-4 py-12 md:px-6 md:py-16">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-emerald-300/70 transition hover:text-emerald-200">
          <span>←</span>
          Back to home
        </Link>
        <h1 className="mt-6 text-4xl font-black tracking-tight">Privacy Policy</h1>
        <p className="mt-3 text-sm text-slate-400">Last updated: March 22, 2026</p>
        <div className="mt-8 space-y-5 text-sm leading-relaxed text-slate-300">
          <p>Project Remission UC uses basic analytics and advertising tools to understand site traffic and support the publication.</p>
          <p>We may collect non-personal information such as browser type, device information, and page visits through analytics providers.</p>
          <p>If you contact us directly, we may retain your message so we can respond and maintain editorial records.</p>
          <p>Advertising providers may use cookies or similar technologies according to their own policies and the consent requirements in your region.</p>
          <p>Questions about privacy can be sent to <a className="text-emerald-200" href="mailto:contact@colitisclearly.com">contact@colitisclearly.com</a>.</p>
        </div>
      </section>
    </main>
  )
}
