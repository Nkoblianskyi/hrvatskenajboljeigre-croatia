"use client"

import { CasinoCard } from "@/components/casino-card"
import type { Casino } from "@/lib/data"

interface PopularBonusesProps {
  casinos: Casino[]
}

export function PopularBonuses({ casinos }: PopularBonusesProps) {
  const topCasino = casinos[0]

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-[#0a0b0f]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold-900/10 via-transparent to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-semibold tracking-widest uppercase rounded-full mb-4">
              Ekskluzivno
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">Top Casino Preporuka</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-gold-500 to-gold-600 mx-auto rounded-full" />
          </div>

          {/* Description */}
          <div className="bg-gradient-to-br from-[#12141c] to-[#0c0e14] rounded-2xl p-6 md:p-8 border border-white/5 mb-8">
            <p className="text-gray-300 leading-relaxed">
              Nakon temeljite analize svih vodećih platformi, izdvajamo našu glavnu preporuku. Ova platforma se
              istaknula po sigurnosti, kvaliteti igara, bonusima i brzini isplata.
            </p>
          </div>

          {/* Featured Casino */}
          <CasinoCard casino={topCasino} rank={1} featured={true} />
        </div>
      </div>
    </section>
  )
}
