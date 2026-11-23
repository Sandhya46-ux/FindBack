import {
  Lock,
  UserCheck,
  Building,
  CheckCircle2,
  FileCheck,
  EyeOff,
} from 'lucide-react'

export default function TrustSecurity() {
  const securityPillars = [
    {
      title: 'Protected Sensitive Details',
      description:
        'Architecture designed so identifying traits like device serial numbers, engraving texts, lock screens, and interior contents remain hidden from public listings. Only authorized staff review them during claim evaluation.',
      icon: EyeOff,
    },
    {
      title: 'Staff-Supervised Custody',
      description:
        'Framework structured so physical custody remains with designated campus personnel at official desks, preventing informal or unverified peer exchanges in unsupervised areas.',
      icon: Building,
    },
    {
      title: 'Ownership Verification Standards',
      description:
        'Protocol designed to require official student credentials and specific ownership challenge responses before any item is authorized for collection.',
      icon: UserCheck,
    },
    {
      title: 'Accountable Recovery Logging',
      description:
        'Workflow designed to record intake timestamps, staff review notes, and release sign-offs to maintain administrative traceability and auditability.',
      icon: FileCheck,
    },
  ]

  return (
    <section id="about" className="py-20 md:py-28 bg-[#101B35] text-white relative overflow-hidden">
      {/* Decorative Glow Elements */}
      <div className="absolute inset-0 pointer-events-none -z-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0D9488]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#162444] border border-[#1E315C] text-[#0D9488] text-xs font-bold tracking-wider uppercase">
            <Lock className="w-3.5 h-3.5" />
            <span>Security & Privacy Principles</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Trust & Campus Protection
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Recovering campus property requires strict privacy safeguards and verified custody. FindBack is architected around security principles to protect student belongings and data.
          </p>
        </div>

        {/* 4 Security Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {securityPillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <div
                key={pillar.title}
                className="p-8 rounded-2xl bg-[#162444]/70 border border-[#1E315C] hover:border-[#0D9488]/50 transition-all duration-300 group"
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-[#0D9488]/15 border border-[#0D9488]/30 flex items-center justify-center shrink-0 group-hover:bg-[#0D9488] transition-colors duration-200">
                    <Icon className="w-6 h-6 text-[#0D9488] group-hover:text-white transition-colors duration-200" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-[#0D9488] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Institutional Handover Protocol Box */}
        <div className="rounded-2xl bg-gradient-to-r from-[#162444] via-[#1A294C] to-[#162444] border border-[#1E315C] p-8 sm:p-10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0D9488]">
                Institutional Safeguards
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Designed to Protect Student Property
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                FindBack's protocol is built to ensure items in campus custody are returned only to verified owners. Claimants are asked to describe unique, unlisted characteristics before viewing an item.
              </p>
            </div>

            <div className="lg:col-span-4 space-y-3 pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l border-slate-700/60 lg:pl-8">
              <div className="flex items-center gap-2.5 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#0D9488] shrink-0" />
                <span>No public exposure of identifying traits</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#0D9488] shrink-0" />
                <span>Staff-guided verification on collection</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#0D9488] shrink-0" />
                <span>Student credential check before release</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#0D9488] shrink-0" />
                <span>Designed for campus administrative oversight</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
