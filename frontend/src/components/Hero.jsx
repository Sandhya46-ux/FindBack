import { Search, Sparkles, CheckCircle2, ShieldCheck, ArrowRight, MapPin, Clock, MessageSquare, AlertCircle } from 'lucide-react'

export default function Hero({ onReportLost, onReportFound }) {
  return (
    <section id="home" className="relative pt-8 pb-20 md:pt-16 md:pb-28 overflow-hidden">
      {/* Background Subtle Gradient & Accents */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-teal-100/40 via-slate-100/20 to-transparent blur-3xl opacity-70" />
        <div className="absolute top-1/3 -right-20 w-80 h-80 bg-teal-500/5 rounded-full blur-2xl" />
        <div className="absolute top-2/3 -left-20 w-80 h-80 bg-[#101B35]/5 rounded-full blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Headlines & Action Buttons */}
          <div className="lg:col-span-6 space-y-8 text-center lg:text-left">

            {/* Campus Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200/80 text-teal-800 text-xs sm:text-sm font-semibold tracking-wide">
              <span className="flex h-2 w-2 rounded-full bg-[#0D9488]" />
              <span>Campus Recovery Network Concept</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#101B35] leading-[1.12]">
              Lost something on campus?{' '}
              <span className="relative whitespace-nowrap text-[#0D9488]">
                Let's FindBack.
                <svg
                  className="absolute -bottom-2 left-0 w-full h-2 text-[#0D9488]/30"
                  viewBox="0 0 100 20"
                  preserveAspectRatio="none"
                >
                  <path d="M0,15 Q50,0 100,15" fill="none" stroke="currentColor" strokeWidth="4" />
                </svg>
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-[#64748B] leading-relaxed max-w-2xl mx-auto lg:mx-0">
              A smarter campus recovery network that connects lost and found reports, identifies potential matches and helps students recover their belongings securely.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                type="button"
                onClick={onReportLost}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-semibold text-white bg-[#0D9488] hover:bg-[#0F766E] shadow-lg shadow-[#0D9488]/20 rounded-xl transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0D9488]"
              >
                <Search className="w-5 h-5" />
                <span>Report Lost Item</span>
              </button>

              <button
                type="button"
                onClick={onReportFound}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-semibold text-[#101B35] bg-white hover:bg-slate-50 border border-slate-300/80 shadow-sm rounded-xl transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#101B35]"
              >
                <ShieldCheck className="w-5 h-5 text-[#0D9488]" />
                <span>Report Found Item</span>
              </button>
            </div>

            {/* Trust Micro-Points */}
            <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs text-[#64748B]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#0D9488]" />
                <span>Privacy-First Item Profiles</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#0D9488]" />
                <span>Staff-Supervised Protocol</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#0D9488]" />
                <span>Designed for WhatsApp Alerts</span>
              </div>
            </div>

          </div>

          {/* Right Column: Custom SaaS Process Dashboard Composition */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-md lg:max-w-none">

              {/* Outer Decorative Glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#0D9488]/20 to-[#101B35]/20 blur-xl opacity-75" />

              {/* Main Dashboard Panel */}
              <div className="relative rounded-2xl bg-white border border-slate-200/90 shadow-2xl shadow-slate-900/10 overflow-hidden">

                {/* Panel Header */}
                <div className="bg-[#101B35] px-5 py-3.5 flex items-center justify-between border-b border-[#1A294C]">
                  <div className="flex items-center gap-2.5">
                    <div className="flex gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                    </div>
                    <span className="text-xs font-semibold text-slate-200 tracking-wide ml-2">
                      Illustrative Recovery Workflow
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-medium bg-teal-500/10 text-teal-300 border border-teal-500/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488]" />
                      Product Preview
                    </span>
                  </div>
                </div>

                {/* Dashboard Body */}
                <div className="p-5 sm:p-6 space-y-4 bg-slate-50/50">

                  {/* Stage 1: Lost Item Ticket (Sample Demonstration Data) */}
                  <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-red-700 bg-red-50 px-2.5 py-0.5 rounded-md border border-red-200/60">
                        <AlertCircle className="w-3.5 h-3.5" />
                        Sample Lost Report (Demonstration)
                      </span>
                      <span className="text-[11px] text-[#64748B] flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        Demonstration Record
                      </span>
                    </div>

                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h2 className="text-sm font-bold text-[#101B35]">
                          Sample Item: Space Grey 13-inch Laptop
                        </h2>
                        <div className="flex items-center gap-2 mt-1 text-xs text-[#64748B]">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-slate-400" />
                            Example Location: Campus Library Study Zone
                          </span>
                        </div>
                      </div>
                      <span className="text-xs font-medium px-2 py-0.5 bg-slate-100 text-slate-700 rounded">
                        Electronics
                      </span>
                    </div>

                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                      <span className="text-[#64748B]">Private Markings:</span>
                      <span className="font-mono text-[11px] bg-slate-100 px-2 py-0.5 rounded text-slate-600">
                        •••• (Stored privately for verification challenge)
                      </span>
                    </div>
                  </div>

                  {/* Process Connection Node: Match Engine Concept (No fabricated score) */}
                  <div className="relative py-1 flex items-center justify-center">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-dashed border-teal-300" />
                    </div>
                    <div className="relative flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-[#0D9488]/40 shadow-xs">
                      <Sparkles className="w-3.5 h-3.5 text-[#0D9488]" />
                      <span className="text-xs font-semibold text-[#0D9488]">
                        Intelligent Match Detection (Illustrative)
                      </span>
                    </div>
                  </div>

                  {/* Stage 2: Found Item Match & Verification Ticket (Demonstration Data) */}
                  <div className="p-4 rounded-xl bg-white border-2 border-teal-500/30 shadow-xs space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-800 bg-teal-50 px-2.5 py-0.5 rounded-md border border-teal-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0D9488]" />
                        Sample Found Record (Demonstration)
                      </span>
                      <span className="text-[11px] text-[#64748B] flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        Status: Logged for Staff Review
                      </span>
                    </div>

                    <div>
                      <h3 className="text-sm font-bold text-[#101B35]">
                        Sample Item: Matching Laptop & Dark Sleeve
                      </h3>
                      <p className="text-xs text-[#64748B] mt-0.5">
                        Example entry: Logged at campus lost property desk. Ready for owner challenge verification.
                      </p>
                    </div>

                    {/* Forward-looking / design workflow indicators */}
                    <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs">
                      <div className="flex items-center gap-1 text-teal-700 font-medium">
                        <MessageSquare className="w-3.5 h-3.5 text-[#0D9488]" />
                        <span>Designed to trigger WhatsApp alert</span>
                      </div>
                      <div className="flex items-center gap-1 text-[#101B35] font-semibold bg-slate-100 px-2 py-0.5 rounded">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#0D9488]" />
                        <span>Pending Staff Verification</span>
                      </div>
                    </div>
                  </div>

                  {/* Protocol Summary Bar */}
                  <div className="px-4 py-2.5 rounded-lg bg-[#101B35] text-white flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-teal-400" />
                      <span className="text-slate-300 font-medium">
                        Workflow Standard:
                      </span>
                      <span className="font-semibold text-white">
                        ID Check & Ownership Challenge on Collection
                      </span>
                    </div>
                    <span className="text-[#0D9488] font-semibold flex items-center gap-1">
                      Staff Review <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>

                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
