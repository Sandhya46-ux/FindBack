import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, ArrowRight, Info } from 'lucide-react'
import AuthLayout from '../components/auth/AuthLayout'
import InputField from '../components/auth/InputField'
import PasswordInput from '../components/auth/PasswordInput'

export default function StudentLogin() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionFeedback, setSubmissionFeedback] = useState(null)

  const validate = () => {
    const newErrors = {}
    if (!formData.email.trim()) {
      newErrors.email = 'College email is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.'
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

    // Simulate clean client-side validation completion without mock sessions or fake backend
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmissionFeedback({
        type: 'info',
        title: 'Authentication UI Preview',
        message:
          'Credentials validated on client. In the next milestone, this form will dispatch to the Spring Security + JWT authentication service.',
      })
    }, 600)
  }

  return (
    <AuthLayout
      badgeText="Student Portal"
      title="Welcome Back"
      subtitle="Sign in with your college credentials to manage lost property reports and claim requests."
    >
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
        {/* Email Field */}
        <InputField
          id="student-email"
          label="College Email"
          type="email"
          value={formData.email}
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value })
            if (errors.email) setErrors({ ...errors, email: null })
          }}
          placeholder="student@university.edu"
          required
          icon={Mail}
          error={errors.email}
          helperText="Use your institutional student email address"
          autoComplete="email"
        />

        {/* Password Field */}
        <div className="space-y-1">
          <PasswordInput
            id="student-password"
            label="Password"
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
                className="w-3.5 h-3.5 rounded border-slate-300 text-[#0D9488] focus:ring-[#0D9488]"
              />
              <span>Remember me</span>
            </label>
            <Link
              to="/forgot-password"
              className="font-medium text-[#0D9488] hover:text-[#0F766E] hover:underline"
            >
              Forgot password?
            </Link>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full mt-2 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-[#0D9488] hover:bg-[#0F766E] shadow-sm shadow-[#0D9488]/20 rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0D9488] disabled:opacity-75 disabled:cursor-wait"
        >
          {isSubmitting ? (
            <span>Validating...</span>
          ) : (
            <>
              <span>Sign In as Student</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>

        {/* Link to Registration */}
        <div className="pt-4 border-t border-slate-100 text-center text-xs text-[#64748B]">
          <span>Don't have an account? </span>
          <Link
            to="/register"
            className="font-semibold text-[#0D9488] hover:text-[#0F766E] hover:underline"
          >
            Register with college email
          </Link>
        </div>

        {/* Separate Staff Login Link */}
        <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70 text-center">
          <p className="text-[11px] text-[#64748B]">
            Authorized recovery desk personnel?
          </p>
          <Link
            to="/staff-login"
            className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-[#101B35] hover:text-[#0D9488] transition-colors"
          >
            <span>Go to Staff Desk Portal &rarr;</span>
          </Link>
        </div>
      </form>
    </AuthLayout>
  )
}
