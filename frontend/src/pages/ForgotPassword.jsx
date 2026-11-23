import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Mail, ArrowRight, ArrowLeft, CheckCircle2, Shield } from 'lucide-react'
import AuthLayout from '../components/auth/AuthLayout'
import InputField from '../components/auth/InputField'

export default function ForgotPassword() {
  const [searchParams, setSearchParams] = useSearchParams()
  const role = searchParams.get('role') === 'staff' ? 'staff' : 'student'

  const [email, setEmail] = useState('')
  const [error, setError] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleRoleChange = (newRole) => {
    if (newRole === 'staff') {
      setSearchParams({ role: 'staff' })
    } else {
      setSearchParams({})
    }
  }

  const validate = () => {
    if (!email.trim()) {
      setError('Email address is required.')
      return false
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError('Please enter a valid email address.')
      return false
    }
    setError(null)
    return true
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)

    // Simulate validation and feedback
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
    }, 600)
  }

  return (
    <AuthLayout
      badgeText="Account Recovery"
      title="Reset Your Password"
      subtitle="Enter your verified institutional email to receive a password reset link."
      backTo={role === 'staff' ? '/staff-login' : '/login'}
      backLabel={role === 'staff' ? 'Back to Staff Login' : 'Back to Student Login'}
    >
      {submitted ? (
        <div className="space-y-5 text-center animate-in fade-in duration-200">
          <div className="w-12 h-12 rounded-full bg-teal-50 border border-teal-200 text-[#0D9488] mx-auto flex items-center justify-center">
            <CheckCircle2 className="w-6 h-6" />
          </div>

          <div className="space-y-2">
            <h2 className="text-lg font-bold text-[#101B35]">
              Password Reset Request Received
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
              If an active account exists for the submitted email address, password recovery instructions will be sent shortly.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-[#64748B] text-left space-y-1">
            <div className="font-semibold text-[#101B35] flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-[#0D9488]" />
              <span>Institutional Protocol</span>
            </div>
            <p>Password reset links remain valid for 15 minutes. Check your junk or spam folder if the email does not arrive promptly.</p>
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              type="button"
              onClick={() => {
                setSubmitted(false)
                setEmail('')
              }}
              className="text-xs font-semibold text-[#0D9488] hover:underline"
            >
              Try another email address
            </button>
            <Link
              to={role === 'staff' ? '/staff-login' : '/login'}
              className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-[#101B35] hover:text-[#0D9488] transition-colors pt-2"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Return to Login</span>
            </Link>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          {/* Role Selector Tabs */}
          <div className="flex rounded-lg bg-slate-100 p-1 text-xs font-semibold">
            <button
              type="button"
              onClick={() => handleRoleChange('student')}
              className={`flex-1 py-1.5 rounded-md transition-all ${
                role === 'student'
                  ? 'bg-white text-[#101B35] shadow-xs'
                  : 'text-[#64748B] hover:text-[#101B35]'
              }`}
            >
              Student Account
            </button>
            <button
              type="button"
              onClick={() => handleRoleChange('staff')}
              className={`flex-1 py-1.5 rounded-md transition-all ${
                role === 'staff'
                  ? 'bg-[#101B35] text-white shadow-xs'
                  : 'text-[#64748B] hover:text-[#101B35]'
              }`}
            >
              Campus Staff Desk
            </button>
          </div>

          {/* Email Field */}
          <InputField
            id="recovery-email"
            label={role === 'staff' ? 'Staff Email Address' : 'College Email Address'}
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              if (error) setError(null)
            }}
            placeholder={role === 'staff' ? 'staff@university.edu' : 'student@university.edu'}
            required
            icon={Mail}
            error={error}
            helperText={`Enter the institutional email registered with your ${role} account`}
            autoComplete="email"
          />

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-2 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-[#0D9488] hover:bg-[#0F766E] shadow-sm shadow-[#0D9488]/20 rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0D9488] disabled:opacity-75 disabled:cursor-wait"
          >
            {isSubmitting ? (
              <span>Processing Request...</span>
            ) : (
              <>
                <span>Send Password Reset Link</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>

          {/* Back Link */}
          <div className="pt-4 border-t border-slate-100 text-center text-xs text-[#64748B]">
            <Link
              to={role === 'staff' ? '/staff-login' : '/login'}
              className="inline-flex items-center gap-1 font-semibold text-[#101B35] hover:text-[#0D9488] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to {role === 'staff' ? 'Staff Login' : 'Student Login'}</span>
            </Link>
          </div>
        </form>
      )}
    </AuthLayout>
  )
}
