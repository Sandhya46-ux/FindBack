import { Link } from 'react-router-dom'
import { X, ShieldCheck, ArrowRight, HelpCircle } from 'lucide-react'

export default function ActionModal({ isOpen, onClose, actionTitle }) {
  if (!isOpen) return null

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
                Action Authentication Gateway
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
            To submit or manage campus item reports, please sign in with your verified college credentials.
          </p>

          <p className="text-sm text-[#64748B] leading-relaxed">
            FindBack protects student property by ensuring all reports and potential match alerts are linked to authorized university community accounts.
          </p>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2 text-xs text-[#64748B]">
            <div className="font-semibold text-[#101B35]">Access Pathways:</div>
            <ul className="list-disc list-inside space-y-1 text-slate-600">
              <li>Existing students: Sign in with your college email.</li>
              <li>New students: Register your college account and student ID.</li>
              <li>Desk staff: Access the dedicated Staff Desk Portal.</li>
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
            Cancel
          </button>
          <Link
            to="/register"
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2 text-xs font-semibold text-[#101B35] bg-slate-200 hover:bg-slate-300 rounded-lg transition-colors text-center"
          >
            Register
          </Link>
          <Link
            to="/login"
            onClick={onClose}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#0D9488] hover:bg-[#0F766E] rounded-lg shadow-sm transition-colors text-center"
          >
            <span>Sign In to Continue</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </div>
  )
}
