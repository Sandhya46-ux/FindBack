import { X, ShieldCheck, ArrowRight, HelpCircle } from 'lucide-react'

export default function ActionModal({ isOpen, onClose, actionTitle }) {
  if (!isOpen) return null

  const handleLearnMore = () => {
    onClose()
    const element = document.querySelector('#how-it-works')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A1122]/70 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200/90 overflow-hidden animate-in zoom-in-95 duration-200">

        {/* Header */}
        <div className="bg-[#101B35] px-6 py-4 flex items-center justify-between text-white border-b border-[#1A294C]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#0D9488]/20 border border-[#0D9488]/40 flex items-center justify-center text-[#0D9488]">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h3 id="modal-title" className="text-sm font-bold text-white">
                FindBack Campus Network
              </h3>
              <p className="text-[11px] text-slate-400">
                Milestone 1 Preview
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-teal-50 border border-teal-200/70 text-teal-800 text-xs font-semibold">
            <HelpCircle className="w-4 h-4 text-[#0D9488] shrink-0" />
            <span>Action Selected: {actionTitle}</span>
          </div>

          <p className="text-sm text-[#101B35] font-semibold leading-snug">
            You are viewing the FindBack Public Landing Page (Milestone 1).
          </p>

          <p className="text-sm text-[#64748B] leading-relaxed">
            The reporting forms, student authentication system, and administrative desk recovery dashboards will be activated in the upcoming development milestones.
          </p>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2 text-xs text-[#64748B]">
            <div className="font-semibold text-[#101B35]">Current Public Prototype Features:</div>
            <ul className="list-disc list-inside space-y-1 text-slate-600">
              <li>Institutional recovery process overview (REPORT → MATCH → NOTIFY → RECOVER)</li>
              <li>Intelligent matching engine architecture and trust principles</li>
              <li>Staff-managed verification and privacy safeguards</li>
            </ul>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-slate-50/80 border-t border-slate-200 flex flex-col-reverse sm:flex-row items-center justify-end gap-2.5">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2 text-xs font-semibold text-[#101B35] bg-white hover:bg-slate-100 border border-slate-300 rounded-lg transition-colors"
          >
            Close
          </button>
          <button
            type="button"
            onClick={handleLearnMore}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#0D9488] hover:bg-[#0F766E] rounded-lg shadow-sm transition-colors"
          >
            <span>Explore How It Works</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  )
}
