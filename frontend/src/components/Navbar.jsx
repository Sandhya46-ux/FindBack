import { useState, useEffect } from 'react'
import { Shield, Menu, X, ArrowRight } from 'lucide-react'

export default function Navbar({ onActionClick }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Features', href: '#features' },
    { label: 'About', href: '#about' },
  ]

  const handleLinkClick = (e, href) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3'
          : 'bg-[#F8FAFC]/90 backdrop-blur-md border-b border-slate-200/50 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Branding */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9488] rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-[#101B35] flex items-center justify-center text-white shadow-md shadow-[#101B35]/10 group-hover:bg-[#0D9488] transition-colors duration-200">
              <Shield className="w-5 h-5 text-[#0D9488] group-hover:text-white transition-colors duration-200" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-[#101B35]">
                Find<span className="text-[#0D9488]">Back</span>
              </span>
              <span className="text-[10px] font-medium uppercase tracking-wider text-[#64748B] -mt-1">
                Campus Recovery Network
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-3.5 py-2 text-sm font-medium text-[#64748B] hover:text-[#101B35] rounded-lg hover:bg-slate-100/70 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              type="button"
              onClick={() => onActionClick('Login')}
              className="px-4 py-2 text-sm font-semibold text-[#101B35] hover:text-[#0D9488] transition-colors rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9488]"
            >
              Log In
            </button>
            <button
              type="button"
              onClick={() => onActionClick('Get Started')}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-white bg-[#0D9488] hover:bg-[#0F766E] shadow-sm shadow-[#0D9488]/25 rounded-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0D9488]"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#64748B] hover:text-[#101B35] hover:bg-slate-100 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9488]"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200/80 bg-white px-4 pt-4 pb-6 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-2 mb-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-3 py-2.5 text-base font-medium text-[#101B35] hover:bg-slate-50 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex flex-col gap-2.5 pt-3 border-t border-slate-100">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false)
                onActionClick('Login')
              }}
              className="w-full py-2.5 text-center text-sm font-semibold text-[#101B35] bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
            >
              Log In
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false)
                onActionClick('Get Started')
              }}
              className="w-full py-2.5 text-center text-sm font-semibold text-white bg-[#0D9488] hover:bg-[#0F766E] rounded-lg shadow-sm transition-colors"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
