import { Link, useLocation } from 'react-router-dom'
import { Shield, ArrowUpRight, Lock } from 'lucide-react'

export default function Footer({ onActionClick }) {
  const currentYear = new Date().getFullYear()
  const location = useLocation()

  const scrollToSection = (e, targetId) => {
    if (location.pathname === '/') {
      e.preventDefault()
      const element = document.querySelector(targetId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <footer className="bg-[#0A1122] text-slate-400 border-t border-slate-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">

          {/* Brand Info (2 columns on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <Link
              to="/"
              className="inline-flex items-center gap-3"
            >
              <div className="w-9 h-9 rounded-xl bg-[#101B35] border border-slate-700 flex items-center justify-center text-white">
                <Shield className="w-4 h-4 text-[#0D9488]" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Find<span className="text-[#0D9488]">Back</span>
              </span>
            </Link>

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
                  href="/#home"
                  onClick={(e) => scrollToSection(e, '#home')}
                  className="hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/#how-it-works"
                  onClick={(e) => scrollToSection(e, '#how-it-works')}
                  className="hover:text-white transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="/#features"
                  onClick={(e) => scrollToSection(e, '#features')}
                  className="hover:text-white transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="/#about"
                  onClick={(e) => scrollToSection(e, '#about')}
                  className="hover:text-white transition-colors"
                >
                  Trust & Security
                </a>
              </li>
            </ul>
          </div>

          {/* Student Actions & Access */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Student Access
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/login"
                  className="hover:text-white transition-colors text-left flex items-center gap-1"
                >
                  <span>Student Sign In</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="hover:text-white transition-colors text-left flex items-center gap-1"
                >
                  <span>Student Registration</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </Link>
              </li>
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
            </ul>
          </div>

          {/* Platform Standards & Staff Access */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Administration
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link
                  to="/staff-login"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#162444] border border-[#1E315C] text-slate-200 hover:text-white hover:border-[#0D9488]/60 transition-colors text-xs font-semibold"
                >
                  <Lock className="w-3.5 h-3.5 text-[#0D9488]" />
                  <span>Staff Desk Portal</span>
                </Link>
              </li>
              <li className="pt-1 text-xs">
                <span>Centralized Campus Records</span>
              </li>
              <li className="text-xs">
                <span>Staff-Supervised Handovers</span>
              </li>
              <li className="text-xs">
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
