import { MEDICAL_DISCLAIMER } from '@/lib/site'

export default function MedicalDisclaimer({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`rounded-[28px] border border-amber-accent/20 bg-[linear-gradient(135deg,rgba(241,181,68,0.14),rgba(20,34,54,0.82))] text-amber-50 shadow-[0_20px_48px_rgba(8,17,28,0.24)] ${
        compact ? 'px-4 py-3 text-sm' : 'px-5 py-4 text-sm md:px-6 md:py-5'
      }`}
    >
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full border border-white/12 bg-white/[0.08]">
          <span className="text-lg text-amber-accent">+</span>
        </div>
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-amber-100/75">
            Medical Disclaimer
          </p>
          <p className="mt-1 leading-relaxed text-amber-50/90">{MEDICAL_DISCLAIMER}</p>
        </div>
      </div>
    </div>
  )
}
