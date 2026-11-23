import {
  Sparkles,
  MessageSquare,
  ShieldCheck,
  Building2,
  FileCheck2,
  BellRing,
} from 'lucide-react'

export default function Features() {
  const featureList = [
    {
      title: 'Intelligent Item Matching',
      description:
        'Designed to compare categories, locations, and time windows to automatically surface potential matches without manual board scanning.',
      icon: Sparkles,
      tag: 'Core Engine',
    },
    {
      title: 'WhatsApp Integration',
      description:
        'Designed to support real-time WhatsApp alerts when a potential match is logged, keeping students informed without requiring constant manual check-ins.',
      icon: MessageSquare,
      tag: 'Direct Alerts',
    },
    {
      title: 'Secure Ownership Verification',
      description:
        'Structured so identifying attributes like serial numbers and distinct markings remain hidden from public view to help prevent false claims.',
      icon: ShieldCheck,
      tag: 'Anti-Fraud',
    },
    {
      title: 'Staff-Managed Recovery',
      description:
        'Built around a staff-supervised handover protocol where campus personnel confirm student credentials and ownership answers before releasing items.',
      icon: Building2,
      tag: 'Campus Oversight',
    },
    {
      title: 'Centralized Campus Reports',
      description:
        'Designed to connect multiple campus buildings and departments into a single unified lost-and-found registry.',
      icon: FileCheck2,
      tag: 'Unified Network',
    },
    {
      title: 'Timely Notifications',
      description:
        'Engineered to notify reporters promptly when a matching item is turned in, complete with clear instructions on recovery desk procedures.',
      icon: BellRing,
      tag: 'Real-Time',
    },
  ]

  return (
    <section id="features" className="py-20 md:py-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold tracking-wider uppercase">
            <span>Platform Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#101B35] tracking-tight">
            Engineered for Campus Integrity
          </h2>
          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
            FindBack is designed to replace informal lost-and-found message boards with a structured, verified recovery model suited for university environments.
          </p>
        </div>

        {/* Features 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureList.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="flex flex-col justify-between p-7 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:shadow-slate-900/5 hover:border-[#0D9488]/40 transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#101B35] text-white flex items-center justify-center shadow-md shadow-[#101B35]/10 group-hover:bg-[#0D9488] transition-colors duration-200">
                      <Icon className="w-6 h-6 text-[#0D9488] group-hover:text-white transition-colors duration-200" />
                    </div>
                    <span className="text-[11px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 group-hover:bg-teal-50 group-hover:text-teal-700 transition-colors">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#101B35] mb-3 group-hover:text-[#0D9488] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#64748B] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-[#0D9488]">
                  <span>Campus Standard</span>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
