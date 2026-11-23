import { Link } from 'react-router-dom'
import { Shield, ArrowLeft } from 'lucide-react'

export default function AuthLayout({
  children,
  badgeText = 'Institutional Recovery Network',
  title,
  subtitle,
  backTo = '/',
  backLabel = 'Back to Home',
}) {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col justify-between relative overflow-hidden">
      {/* Background Subtle Gradient Accents */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-teal-100/40 via-slate-100/20 to-transparent blur-3xl opacity-70" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-teal-500/5 rounded-full blur-2xl" />
        <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#101B35]/5 rounded-full blur-2xl" />
      </div>

      {/* Top Header Bar */}
      <header className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9488] rounded-lg p-1"
          >
            <div className="w-9 h-9 rounded-xl bg-[#101B35] flex items-center justify-center text-white shadow-md shadow-[#101B35]/10 group-hover:bg-[#0D9488] transition-colors duration-200">
              <Shield className="w-4 h-4 text-[#0D9488] group-hover:text-white transition-colors duration-200" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-[#101B35]">
                Find<span className="text-[#0D9488]">Back</span>
              </span>
              <span className="text-[9px] font-medium uppercase tracking-wider text-[#64748B] -mt-1">
                Campus Recovery Network
              </span>
            </div>
          </Link>

          <Link
            to={backTo}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#64748B] hover:text-[#101B35] py-1.5 px-3 rounded-lg hover:bg-slate-100/80 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{backLabel}</span>
          </Link>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="w-full max-w-md">
          {/* Card Wrapper */}
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xl shadow-slate-900/5 overflow-hidden">

            {/* Card Header */}
            <div className="px-6 pt-7 pb-5 text-center border-b border-slate-100">
              {badgeText && (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200/70 text-teal-800 text-[11px] font-semibold tracking-wide mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488]" />
                  <span>{badgeText}</span>
                </div>
              )}
              <h1 className="text-2xl font-extrabold tracking-tight text-[#101B35]">
                {title}
              </h1>
              {subtitle && (
                <p className="mt-1.5 text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  {subtitle}
                </p>
              )}
            </div>

            {/* Form Content */}
            <div className="p-6 sm:p-7">
              {children}
            </div>

          </div>
        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center text-xs text-slate-400">
        <p>&copy; {new Date().getFullYear()} FindBack Campus Recovery Network. Spring Security & JWT Architecture.</p>
      </footer>
    </div>
  )
}
