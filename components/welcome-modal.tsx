"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X, Star } from "lucide-react"
import { casinos } from "@/lib/data"

export function WelcomeModal() {
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowModal(true), 8000)
    return () => clearTimeout(timer)
  }, [])

  if (!showModal) return null

  const topCasino = casinos[0]

  const renderStars = () => {
    const stars = []
    const rating = topCasino.rating / 2
    for (let i = 1; i <= 5; i++) {
      const fill = Math.min(Math.max(rating - (i - 1), 0), 1) * 100
      stars.push(
        <div key={i} className="relative w-4 h-4">
          <Star className="absolute w-4 h-4 text-gray-600" />
          <div className="absolute inset-0 overflow-hidden" style={{ width: `${fill}%` }}>
            <Star className="w-4 h-4 text-gold-500 fill-gold-500" />
          </div>
        </div>,
      )
    }
    return stars
  }

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && setShowModal(false)}
    >
      <div className="bg-gradient-to-br from-[#12141c] to-[#0c0e14] rounded-2xl shadow-2xl w-full max-w-md relative overflow-hidden border border-gold-500/20">
        {/* Close Button */}
        <button
          onClick={() => setShowModal(false)}
          className="absolute top-3 right-3 text-gray-400 hover:text-white z-10 bg-white/10 rounded-full p-1.5"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Gold Line */}
        <div className="h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent" />

        <div className="p-6">
          {/* Header */}
          <div className="text-center mb-5">
            <span className="inline-block px-3 py-1 bg-gold-500/10 border border-gold-500/20 text-gold-400 text-[10px] font-bold tracking-widest uppercase rounded-full mb-3">
              Najbolja Preporuka
            </span>
            <h2 className="font-serif text-xl font-bold text-white">Vrhunski Izbor</h2>
          </div>

          {/* Logo */}
          <div className="text-center mb-5">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 inline-block border border-white/10">
              <Image
                src={topCasino.logo || "/placeholder.svg"}
                alt={topCasino.name}
                width={140}
                height={70}
                className="object-contain"
              />
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="flex gap-0.5">{renderStars()}</div>
            <span className="text-xl font-bold text-gold-500">{topCasino.rating.toFixed(1)}</span>
            <span className="text-gray-500 text-sm">/10</span>
          </div>

          {/* Bonus */}
          <div className="bg-gold-500/10 border border-gold-500/20 rounded-xl p-4 text-center mb-5">
            <div className="text-[10px] uppercase tracking-widest text-gold-400 mb-1">Ekskluzivni Bonus</div>
            <div className="text-lg font-bold text-white">{topCasino.bonus}</div>
          </div>

          {/* CTA */}
          <button
            onClick={() => {
              window.open(topCasino.url, "_blank", "noopener,noreferrer")
              setShowModal(false)
            }}
            className="btn-gold w-full"
          >
            Igraj Sada
          </button>

          {/* Terms */}
          <p className="text-[10px] text-gray-500 text-center mt-4">18+ | Uvjeti vrijede | Igrajte odgovorno</p>
        </div>
      </div>
    </div>
  )
}
