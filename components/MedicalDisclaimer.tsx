import { MEDICAL_DISCLAIMER } from '@/lib/site'

export default function MedicalDisclaimer({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`rounded-2xl border border-amber-400/20 bg-amber-500/10 text-amber-100 ${
        compact ? 'px-4 py-3 text-sm' : 'px-5 py-4 text-sm'
      }`}
    >
      <div className="flex items-start gap-3">
        <div className="mt-0.5 h-2.5 w-2.5 rounded-full bg-amber-300" />
        <div>
          <p className="font-semibold uppercase tracking-[0.18em] text-[10px] text-amber-200/80">
            Medical Disclaimer
          </p>
          <p className="mt-1 leading-relaxed text-amber-50/90">{MEDICAL_DISCLAIMER}</p>
        </div>
      </div>
    </div>
  )
}
