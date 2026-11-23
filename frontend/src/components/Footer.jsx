import { Shield, ArrowUpRight } from 'lucide-react'

export default function Footer({ onActionClick }) {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (e, id) => {
    e.preventDefault()
    const element = document.querySelector(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-[#0A1122] text-slate-400 border-t border-slate-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">

          {/* Brand Info (2 columns on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <a
              href="#home"
              onClick={(e) => scrollToSection(e, '#home')}
              className="inline-flex items-center gap-3"
            >
              <div className="w-9 h-9 rounded-xl bg-[#101B35] border border-slate-700 flex items-center justify-center text-white">
                <Shield className="w-4 h-4 text-[#0D9488]" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Find<span className="text-[#0D9488]">Back</span>
              </span>
            </a>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              FindBack is a campus lost and found recovery network concept built to reconnect students with their misplaced belongings through intelligent matching, verified handovers, and staff oversight.
            </p>

            <div className="pt-2 text-xs text-slate-500">
              <span>Structured framework for collegiate lost property recovery.</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#home"
                  onClick={(e) => scrollToSection(e, '#home')}
                  className="hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  onClick={(e) => scrollToSection(e, '#how-it-works')}
                  className="hover:text-white transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  onClick={(e) => scrollToSection(e, '#features')}
                  className="hover:text-white transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => scrollToSection(e, '#about')}
                  className="hover:text-white transition-colors"
                >
                  Trust & Security
                </a>
              </li>
            </ul>
          </div>

          {/* Student Actions */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Student Actions
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => onActionClick('Report Lost Item')}
                  className="hover:text-white transition-colors text-left flex items-center gap-1"
                >
                  <span>Report Lost Item</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onActionClick('Report Found Item')}
                  className="hover:text-white transition-colors text-left flex items-center gap-1"
                >
                  <span>Report Found Item</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onActionClick('Recovery Desk Workflow')}
                  className="hover:text-white transition-colors text-left flex items-center gap-1"
                >
                  <span>Recovery Desk Workflow</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onActionClick('Lost Property Guidelines')}
                  className="hover:text-white transition-colors text-left flex items-center gap-1"
                >
                  <span>Lost Property Guidelines</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Platform Standards (Replacing invented college departments) */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Recovery Architecture
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <span>Centralized Campus Records</span>
              </li>
              <li>
                <span>Privacy-First Intake Model</span>
              </li>
              <li>
                <span>Staff-Supervised Handovers</span>
              </li>
              <li>
                <span>Institutional Accountability</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {currentYear} FindBack Campus Recovery Network. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Campus Lost & Found Platform</span>
            <span>•</span>
            <span>Privacy-by-Design</span>
          </div>
        </div>

      </div>
    </footer>
  )
}
