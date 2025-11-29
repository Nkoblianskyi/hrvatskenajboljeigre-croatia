"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { X, Cookie, Shield } from "lucide-react"

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true,
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) setShowConsent(true)
  }, [])

  const acceptAll = () => {
    localStorage.setItem("cookie-consent", "accepted")
    localStorage.setItem("cookie-preferences", JSON.stringify({ essential: true, analytics: true, marketing: true }))
    setShowConsent(false)
    setShowModal(false)
  }

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined")
    localStorage.setItem("cookie-preferences", JSON.stringify({ essential: true, analytics: false, marketing: false }))
    setShowConsent(false)
    setShowModal(false)
  }

  const savePreferences = () => {
    localStorage.setItem("cookie-consent", "custom")
    localStorage.setItem("cookie-preferences", JSON.stringify(cookiePreferences))
    setShowConsent(false)
    setShowModal(false)
  }

  if (!showConsent) return null

  return (
    <>
      {/* Banner */}
      <div className="fixed bottom-0 inset-x-0 z-50 animate-in slide-in-from-bottom duration-500">
        <div className="bg-[#0c0e14]/98 backdrop-blur-xl border-t border-gold-500/20">
          <div className="container mx-auto max-w-6xl px-4 py-4 md:py-5">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="flex items-start gap-3 flex-1">
                <div className="bg-gold-500/10 rounded-lg p-2 border border-gold-500/20">
                  <Cookie className="h-5 w-5 text-gold-500" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white mb-1">Kolačići i Privatnost</h3>
                  <p className="text-xs text-gray-400">
                    Koristimo kolačiće za najbolje iskustvo.{" "}
                    <button onClick={() => setShowModal(true)} className="text-gold-400 hover:text-gold-300 underline">
                      Detalji
                    </button>
                  </p>
                </div>
              </div>
              <div className="flex gap-2 w-full md:w-auto">
                <button onClick={acceptAll} className="btn-gold text-xs px-4 py-2 flex-1 md:flex-none">
                  Prihvati
                </button>
                <button
                  onClick={() => setShowModal(true)}
                  className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-xs font-semibold transition-colors flex-1 md:flex-none"
                >
                  Postavke
                </button>
                <button
                  onClick={decline}
                  className="text-gray-400 hover:text-white px-3 text-xs transition-colors hidden md:block"
                >
                  Odbij
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={() => setShowModal(false)} />
          <div className="relative bg-[#0c0e14] rounded-2xl shadow-2xl max-w-lg w-full max-h-[85vh] overflow-hidden border border-gold-500/20">
            {/* Header */}
            <div className="sticky top-0 bg-[#0c0e14] border-b border-white/5 p-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Cookie className="h-5 w-5 text-gold-500" />
                <h2 className="text-lg font-bold text-white">Postavke Kolačića</h2>
              </div>
              <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-white p-1">
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-5 space-y-4 overflow-y-auto max-h-[calc(85vh-180px)]">
              {/* Essential */}
              <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-gold-500" />
                    <h3 className="font-semibold text-white text-sm">Nužni Kolačići</h3>
                  </div>
                  <span className="text-[10px] bg-gold-500/20 text-gold-400 px-2 py-1 rounded-full">
                    Uvijek aktivni
                  </span>
                </div>
                <p className="text-xs text-gray-400">Potrebni za osnovne funkcije stranice.</p>
              </div>

              {/* Analytics */}
              <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-white text-sm">Analitički Kolačići</h3>
                  <label className="relative cursor-pointer">
                    <input
                      type="checkbox"
                      checked={cookiePreferences.analytics}
                      onChange={(e) => setCookiePreferences({ ...cookiePreferences, analytics: e.target.checked })}
                      className="sr-only peer"
                    />
                    <div className="w-10 h-5 bg-white/10 peer-checked:bg-gold-500 rounded-full transition-colors after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-transform peer-checked:after:translate-x-5" />
                  </label>
                </div>
                <p className="text-xs text-gray-400">Pomažu nam razumjeti korištenje stranice.</p>
              </div>

              {/* Marketing */}
              <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-white text-sm">Marketinški Kolačići</h3>
                  <label className="relative cursor-pointer">
                    <input
                      type="checkbox"
                      checked={cookiePreferences.marketing}
                      onChange={(e) => setCookiePreferences({ ...cookiePreferences, marketing: e.target.checked })}
                      className="sr-only peer"
                    />
                    <div className="w-10 h-5 bg-white/10 peer-checked:bg-gold-500 rounded-full transition-colors after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-transform peer-checked:after:translate-x-5" />
                  </label>
                </div>
                <p className="text-xs text-gray-400">Za personalizirane ponude i oglase.</p>
              </div>

              <p className="text-xs text-gray-500">
                Više informacija u{" "}
                <Link href="/politika-privatnosti" className="text-gold-400 hover:text-gold-300">
                  politici privatnosti
                </Link>
                .
              </p>
            </div>

            {/* Footer */}
            <div className="sticky bottom-0 bg-[#0c0e14] border-t border-white/5 p-5 flex gap-3">
              <button onClick={acceptAll} className="btn-gold text-xs flex-1">
                Prihvati sve
              </button>
              <button
                onClick={savePreferences}
                className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-xs font-semibold transition-colors flex-1"
              >
                Spremi odabir
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
