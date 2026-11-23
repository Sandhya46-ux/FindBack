import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ShieldAlert,
  Building2,
  Mail,
  Info,
  Lock,
} from 'lucide-react'
import AuthLayout from '../components/auth/AuthLayout'
import InputField from '../components/auth/InputField'
import PasswordInput from '../components/auth/PasswordInput'

export default function StaffLogin() {
  const [formData, setFormData] = useState({
    staffIdentifier: '',
    password: '',
    department: 'central-desk',
    rememberMe: false,
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionFeedback, setSubmissionFeedback] = useState(null)

  const validate = () => {
    const newErrors = {}

    if (!formData.staffIdentifier.trim()) {
      newErrors.staffIdentifier = 'Staff email or employee ID is required.'
    }

    if (!formData.password) {
      newErrors.password = 'Password is required.'
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters.'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmissionFeedback(null)

    if (!validate()) return

    setIsSubmitting(true)

    // Demonstrate clean client validation without faking backend sessions
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmissionFeedback({
        type: 'info',
        title: 'Staff Authentication Form Validated',
        message:
          'Credentials passed client-side validation. In the upcoming milestone, this will authenticate against the Spring Security + JWT staff authority provider with role-based desk permissions.',
      })
    }, 600)
  }

  return (
    <AuthLayout
      badgeText="Staff Administration Desk"
      title="Staff Portal Sign In"
      subtitle="Authorized university staff and recovery desk operators only. All access attempts are recorded."
      backTo="/"
      backLabel="Back to Home"
    >
      {/* Administrative Provisioning Warning Box */}
      <div className="mb-5 p-3.5 rounded-xl bg-amber-50/80 border border-amber-200/90 text-amber-900 text-xs flex items-start gap-2.5">
        <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <span className="font-bold">Administrative Advisory:</span> Staff accounts are centrally provisioned. Public self-registration is disabled. Contact your campus systems administrator for credentials.
        </p>
      </div>

      {submissionFeedback && (
        <div className="mb-6 p-4 rounded-xl bg-teal-50 border border-teal-200/80 text-teal-900 text-xs sm:text-sm space-y-1.5 animate-in fade-in duration-200">
          <div className="flex items-center gap-2 font-bold text-[#0D9488]">
            <Info className="w-4 h-4 shrink-0" />
            <span>{submissionFeedback.title}</span>
          </div>
          <p className="text-[#64748B] leading-relaxed">
            {submissionFeedback.message}
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        {/* Staff Email or Employee ID */}
        <InputField
          id="staff-identifier"
          label="Staff Email or Employee ID"
          type="text"
          value={formData.staffIdentifier}
          onChange={(e) => {
            setFormData({ ...formData, staffIdentifier: e.target.value })
            if (errors.staffIdentifier)
              setErrors({ ...errors, staffIdentifier: null })
          }}
          placeholder="staff.id@university.edu"
          required
          icon={Mail}
          error={errors.staffIdentifier}
          helperText="Enter your official staff email or institutional ID"
          autoComplete="username"
        />

        {/* Assigned Recovery Desk / Department */}
        <div className="space-y-1.5 text-left">
          <label
            htmlFor="staff-department"
            className="block text-xs font-semibold text-[#101B35] tracking-wide"
          >
            Assigned Recovery Desk
          </label>
          <div className="relative rounded-lg shadow-xs">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
              <Building2 className="w-4 h-4" />
            </div>
            <select
              id="staff-department"
              value={formData.department}
              onChange={(e) =>
                setFormData({ ...formData, department: e.target.value })
              }
              className="block w-full rounded-lg border border-slate-300 bg-white py-2.5 pl-9 pr-3 text-sm text-[#101B35] focus:outline-none focus:ring-2 focus:ring-[#0D9488] focus:border-[#0D9488] transition-colors"
            >
              <option value="central-desk">Central Campus Lost Property Desk</option>
              <option value="campus-security">Campus Safety & Security Office</option>
              <option value="library-desk">Main Library Information Helpdesk</option>
              <option value="student-union">Student Union Recovery Desk</option>
            </select>
          </div>
          <p className="text-[11px] text-[#64748B]">
            Determines the local inventory custody for this session
          </p>
        </div>

        {/* Password Field */}
        <div className="space-y-1">
          <PasswordInput
            id="staff-password"
            label="Staff Password"
            value={formData.password}
            onChange={(e) => {
              setFormData({ ...formData, password: e.target.value })
              if (errors.password) setErrors({ ...errors, password: null })
            }}
            required
            error={errors.password}
            autoComplete="current-password"
          />
          <div className="flex items-center justify-between pt-1 text-xs">
            <label className="flex items-center gap-2 cursor-pointer text-[#64748B]">
              <input
                type="checkbox"
                checked={formData.rememberMe}
                onChange={(e) =>
                  setFormData({ ...formData, rememberMe: e.target.checked })
                }
                className="w-3.5 h-3.5 rounded border-slate-300 text-[#101B35] focus:ring-[#101B35]"
              />
              <span>Keep session active</span>
            </label>
            <Link
              to="/forgot-password?role=staff"
              className="font-medium text-[#0D9488] hover:text-[#0F766E] hover:underline"
            >
              Reset staff password
            </Link>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full mt-2 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-[#101B35] hover:bg-[#1A294C] shadow-sm rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#101B35] disabled:opacity-75 disabled:cursor-wait"
        >
          {isSubmitting ? (
            <span>Authorizing Staff Session...</span>
          ) : (
            <>
              <Lock className="w-4 h-4 text-[#0D9488]" />
              <span>Sign In to Staff Desk</span>
            </>
          )}
        </button>

        {/* Link back to Student Portal */}
        <div className="pt-4 border-t border-slate-100 text-center text-xs text-[#64748B]">
          <span>Not university staff? </span>
          <Link
            to="/login"
            className="font-semibold text-[#0D9488] hover:text-[#0F766E] hover:underline"
          >
            Go to Student Portal
          </Link>
        </div>
      </form>
    </AuthLayout>
  )
}
