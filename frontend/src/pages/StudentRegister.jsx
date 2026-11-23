import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  User,
  Mail,
  BadgeCheck,
  Phone,
  ArrowRight,
  Info,
} from 'lucide-react'
import AuthLayout from '../components/auth/AuthLayout'
import InputField from '../components/auth/InputField'
import PasswordInput from '../components/auth/PasswordInput'

export default function StudentRegister() {
  const [formData, setFormData] = useState({
    fullName: '',
    studentId: '',
    collegeEmail: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionFeedback, setSubmissionFeedback] = useState(null)

  const validate = () => {
    const newErrors = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required.'
    }

    if (!formData.studentId.trim()) {
      newErrors.studentId = 'Student ID / Roll number is required.'
    }

    if (!formData.collegeEmail.trim()) {
      newErrors.collegeEmail = 'College email is required.'
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.collegeEmail.trim())
    ) {
      newErrors.collegeEmail = 'Please enter a valid email address.'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Mobile number is required for WhatsApp match alerts.'
    } else if (!/^[0-9+()-\s]{7,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number.'
    }

    if (!formData.password) {
      newErrors.password = 'Password is required.'
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters.'
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Confirm your password.'
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.'
    }

    if (!formData.agreeTerms) {
      newErrors.agreeTerms = 'You must agree to the campus property policy.'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmissionFeedback(null)

    if (!validate()) return

    setIsSubmitting(true)

    // Client-side demonstration without fake backend
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmissionFeedback({
        type: 'info',
        title: 'Registration Form Validated',
        message:
          'Your profile fields passed client validation. Upon backend integration, this will dispatch your registration to Spring Security and send an email verification token to your college inbox.',
      })
    }, 600)
  }

  return (
    <AuthLayout
      badgeText="New Student Access"
      title="Create Student Account"
      subtitle="Register with your official college credentials to track lost property and receive verified match alerts."
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
        {/* Full Name */}
        <InputField
          id="reg-fullName"
          label="Full Name"
          type="text"
          value={formData.fullName}
          onChange={(e) => {
            setFormData({ ...formData, fullName: e.target.value })
            if (errors.fullName) setErrors({ ...errors, fullName: null })
          }}
          placeholder="e.g. Alex Morgan"
          required
          icon={User}
          error={errors.fullName}
          autoComplete="name"
        />

        {/* Student ID */}
        <InputField
          id="reg-studentId"
          label="Student ID / Enrollment Number"
          type="text"
          value={formData.studentId}
          onChange={(e) => {
            setFormData({ ...formData, studentId: e.target.value })
            if (errors.studentId) setErrors({ ...errors, studentId: null })
          }}
          placeholder="e.g. CS-2024-0491"
          required
          icon={BadgeCheck}
          error={errors.studentId}
          helperText="Will be matched during in-person desk verification"
        />

        {/* College Email */}
        <InputField
          id="reg-email"
          label="College Email"
          type="email"
          value={formData.collegeEmail}
          onChange={(e) => {
            setFormData({ ...formData, collegeEmail: e.target.value })
            if (errors.collegeEmail) setErrors({ ...errors, collegeEmail: null })
          }}
          placeholder="name@university.edu"
          required
          icon={Mail}
          error={errors.collegeEmail}
          helperText="Must be your official university domain email address"
          autoComplete="email"
        />

        {/* Mobile / WhatsApp Number */}
        <InputField
          id="reg-phone"
          label="Mobile Number (WhatsApp Enabled)"
          type="tel"
          value={formData.phone}
          onChange={(e) => {
            setFormData({ ...formData, phone: e.target.value })
            if (errors.phone) setErrors({ ...errors, phone: null })
          }}
          placeholder="+1 (555) 000-0000"
          required
          icon={Phone}
          error={errors.phone}
          helperText="Required for instant WhatsApp match notifications"
          autoComplete="tel"
        />

        {/* Password */}
        <PasswordInput
          id="reg-password"
          label="Password (min 8 characters)"
          value={formData.password}
          onChange={(e) => {
            setFormData({ ...formData, password: e.target.value })
            if (errors.password) setErrors({ ...errors, password: null })
          }}
          required
          error={errors.password}
          autoComplete="new-password"
        />

        {/* Confirm Password */}
        <PasswordInput
          id="reg-confirmPassword"
          label="Confirm Password"
          value={formData.confirmPassword}
          onChange={(e) => {
            setFormData({ ...formData, confirmPassword: e.target.value })
            if (errors.confirmPassword)
              setErrors({ ...errors, confirmPassword: null })
          }}
          required
          error={errors.confirmPassword}
          autoComplete="new-password"
        />

        {/* Policy Consent */}
        <div className="pt-1">
          <label className="flex items-start gap-2.5 cursor-pointer text-xs text-[#64748B]">
            <input
              type="checkbox"
              checked={formData.agreeTerms}
              onChange={(e) => {
                setFormData({ ...formData, agreeTerms: e.target.checked })
                if (errors.agreeTerms) setErrors({ ...errors, agreeTerms: null })
              }}
              className="mt-0.5 w-4 h-4 rounded border-slate-300 text-[#0D9488] focus:ring-[#0D9488]"
            />
            <span>
              I agree to the FindBack campus lost property recovery terms and understand that physical claims require valid student ID verification.
            </span>
          </label>
          {errors.agreeTerms && (
            <p className="mt-1 text-xs text-red-600 font-medium">
              {errors.agreeTerms}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full mt-2 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-[#0D9488] hover:bg-[#0F766E] shadow-sm shadow-[#0D9488]/20 rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0D9488] disabled:opacity-75 disabled:cursor-wait"
        >
          {isSubmitting ? (
            <span>Creating Account...</span>
          ) : (
            <>
              <span>Create Student Account</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>

        {/* Link back to Login */}
        <div className="pt-4 border-t border-slate-100 text-center text-xs text-[#64748B]">
          <span>Already registered? </span>
          <Link
            to="/login"
            className="font-semibold text-[#0D9488] hover:text-[#0F766E] hover:underline"
          >
            Sign in to your account
          </Link>
        </div>
      </form>
    </AuthLayout>
  )
}
