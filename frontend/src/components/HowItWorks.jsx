import { FileText, Sparkles, MessageSquare, ShieldCheck, ArrowRight } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      stage: 'REPORT',
      title: 'Submit Campus Report',
      description:
        'Log a lost or found item. Detail the approximate campus area, item category, date, and private ownership markers that only the true owner would know.',
      icon: FileText,
      accent: 'text-teal-600',
      bg: 'bg-teal-50',
      border: 'border-teal-200/80',
    },
    {
      number: '02',
      stage: 'MATCH',
      title: 'Intelligent Matching',
      description:
        'Designed to correlate keywords, campus locations, timestamps, and item attributes to help identify potential matches automatically across records.',
      icon: Sparkles,
      accent: 'text-teal-600',
      bg: 'bg-teal-50',
      border: 'border-teal-200/80',
    },
    {
      number: '03',
      stage: 'NOTIFY',
      title: 'Direct Notifications',
      description:
        'Designed to support automated alerts via WhatsApp and email as soon as a potential match is registered or handed in to campus staff.',
      icon: MessageSquare,
      accent: 'text-teal-600',
      bg: 'bg-teal-50',
      border: 'border-teal-200/80',
    },
    {
      number: '04',
      stage: 'RECOVER',
      title: 'Staff-Supervised Handover',
      description:
        'Designed for collection at authorized campus recovery desks where designated university staff confirm ownership credentials before item release.',
      icon: ShieldCheck,
      accent: 'text-teal-600',
      bg: 'bg-teal-50',
      border: 'border-teal-200/80',
    },
  ]

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-white border-y border-slate-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-[#101B35] text-xs font-bold tracking-wider uppercase">
            <span>Recovery Workflow</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#101B35] tracking-tight">
            How It Works
          </h2>
          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
            From initial report to safe retrieval, FindBack is structured around a four-stage recovery protocol to reconnect students with their belongings.
          </p>

          {/* Flow Indicator Badges */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 pt-2 text-xs font-semibold">
            <span className="px-3 py-1 rounded-md bg-[#101B35] text-white">REPORT</span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="px-3 py-1 rounded-md bg-[#101B35] text-white">MATCH</span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="px-3 py-1 rounded-md bg-[#101B35] text-white">NOTIFY</span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="px-3 py-1 rounded-md bg-[#0D9488] text-white">RECOVER</span>
          </div>
        </div>

        {/* 4 Stage Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={step.number}
                className="relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 hover:border-[#0D9488]/40 hover:bg-white hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300 group"
              >
                {/* Stage Header */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-[#0D9488] transition-colors">
                      {step.number}
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#0D9488] bg-teal-50 border border-teal-200/70 px-2.5 py-0.5 rounded-full">
                      {step.stage}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl ${step.bg} ${step.border} border flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-200`}>
                    <Icon className={`w-6 h-6 ${step.accent}`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-[#101B35] mb-2.5 group-hover:text-[#0D9488] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#64748B] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Bottom Step Indicator */}
                <div className="pt-5 mt-6 border-t border-slate-200/60 flex items-center justify-between text-xs font-medium text-slate-400 group-hover:text-[#101B35] transition-colors">
                  <span>Stage {index + 1} of 4</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#0D9488] transition-colors" />
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
