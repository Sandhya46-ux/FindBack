import { useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import Features from '../components/Features'
import TrustSecurity from '../components/TrustSecurity'
import Footer from '../components/Footer'
import ActionModal from '../components/ActionModal'

export default function LandingPage() {
  const [modalState, setModalState] = useState({
    isOpen: false,
    actionTitle: '',
  })

  const openActionModal = (actionTitle) => {
    setModalState({
      isOpen: true,
      actionTitle,
    })
  }

  const closeModal = () => {
    setModalState({
      isOpen: false,
      actionTitle: '',
    })
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#101B35] flex flex-col font-sans selection:bg-[#0D9488]/20 selection:text-[#101B35] antialiased">
      {/* Top Navigation */}
      <Navbar onActionClick={openActionModal} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero
          onReportLost={() => openActionModal('Report Lost Item')}
          onReportFound={() => openActionModal('Report Found Item')}
        />
        <HowItWorks />
        <Features />
        <TrustSecurity />
      </main>

      {/* Footer */}
      <Footer onActionClick={openActionModal} />

      {/* Action Gateway Dialog */}
      <ActionModal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        actionTitle={modalState.actionTitle}
      />
    </div>
  )
}
