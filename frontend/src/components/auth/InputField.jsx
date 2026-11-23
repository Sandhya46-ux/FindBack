export default function InputField({
  id,
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  required = false,
  error,
  helperText,
  icon: Icon,
  disabled = false,
  autoComplete,
}) {
  return (
    <div className="space-y-1.5 text-left">
      <div className="flex items-center justify-between">
        <label
          htmlFor={id}
          className="block text-xs font-semibold text-[#101B35] tracking-wide"
        >
          {label}
          {required && <span className="text-red-500 ml-0.5">*</span>}
        </label>
      </div>

      <div className="relative rounded-lg shadow-xs">
        {Icon && (
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
            <Icon className="w-4 h-4" aria-hidden="true" />
          </div>
        )}

        <input
          id={id}
          name={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          autoComplete={autoComplete}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${id}-error` : helperText ? `${id}-helper` : undefined}
          className={`block w-full rounded-lg border py-2.5 text-sm text-[#101B35] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0D9488] focus:border-[#0D9488] transition-colors ${
            Icon ? 'pl-9 pr-3' : 'px-3'
          } ${
            error
              ? 'border-red-300 bg-red-50/20 focus:ring-red-500 focus:border-red-500'
              : 'border-slate-300 bg-white hover:border-slate-400'
          } ${disabled ? 'bg-slate-100 cursor-not-allowed opacity-75' : ''}`}
        />
      </div>

      {error ? (
        <p id={`${id}-error`} className="text-xs text-red-600 font-medium">
          {error}
        </p>
      ) : helperText ? (
        <p id={`${id}-helper`} className="text-[11px] text-[#64748B]">
          {helperText}
        </p>
      ) : null}
    </div>
  )
}
