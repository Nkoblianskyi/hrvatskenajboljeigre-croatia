"use client"

import { Star } from "lucide-react"
import Image from "next/image"
import type { Casino } from "@/lib/data"

interface CasinoCardProps {
  casino: Casino
  rank: number
  featured?: boolean
}

export function CasinoCard({ casino, rank, featured }: CasinoCardProps) {
  const isTop3 = rank <= 3

  const getBadge = () => {
    if (rank === 1) return { text: "Najbolji Izbor", color: "from-gold-400 via-gold-500 to-gold-600" }
    if (rank === 2) return { text: "Popularno", color: "from-gold-500 to-gold-600" }
    if (rank === 3) return { text: "Preporučeno", color: "from-gold-600 to-gold-700" }
    return null
  }

  const badge = getBadge()

  const renderStars = () => {
    const stars = []
    const starValue = casino.rating / 2
    const fullStars = Math.floor(starValue)
    const partialFill = starValue - fullStars

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="w-3.5 h-3.5 fill-gold-500 text-gold-500" />)
    }
    if (partialFill > 0) {
      stars.push(
        <div key="partial" className="relative w-3.5 h-3.5">
          <Star className="absolute w-3.5 h-3.5 text-gray-600" />
          <div className="absolute inset-0 overflow-hidden" style={{ width: `${partialFill * 100}%` }}>
            <Star className="w-3.5 h-3.5 fill-gold-500 text-gold-500" />
          </div>
        </div>,
      )
    }
    for (let i = stars.length; i < 5; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-3.5 h-3.5 text-gray-600" />)
    }
    return stars
  }

  return (
    <div className="relative group">
      {badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
          <div
            className={`bg-gradient-to-r ${badge.color} px-4 py-1.5 text-xs font-bold tracking-wide rounded-full text-[#07080b] shadow-lg shadow-gold-500/20`}
          >
            {badge.text}
          </div>
        </div>
      )}

      <a
        href={casino.url}
        target="_blank"
        rel="noopener noreferrer nofollow sponsored"
        className={`block relative rounded-2xl p-5 md:p-6 transition-all duration-500 ${
          isTop3
            ? "bg-gradient-to-br from-[#12141c] to-[#0c0e14] border border-gold-500/20 hover:border-gold-500/40 shadow-xl shadow-gold-500/5 hover:shadow-gold-500/15"
            : "bg-[#0e1015] border border-white/5 hover:border-gold-500/20"
        } hover:-translate-y-1`}
      >
        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-[50px_140px_1fr_auto_auto] md:gap-6 md:items-center pt-2">
          {/* Rank */}
          <div className="text-center">
            <span className={`text-3xl font-serif font-bold ${isTop3 ? "text-gold-500" : "text-gray-500"}`}>
              {rank}
            </span>
          </div>

          {/* Logo */}
          <div className="bg-white/5 backdrop-blur-sm p-3 rounded-xl border border-white/10">
            <Image
              src={casino.logo || "/placeholder.svg"}
              alt={casino.name}
              width={120}
              height={60}
              className="w-full h-14 object-contain"
            />
          </div>

          {/* Bonus */}
          <div className="text-center px-4">
            <div className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">Bonus Dobrodošlice</div>
            <div className="text-base font-bold text-white leading-tight">{casino.bonus}</div>
          </div>

          {/* Rating */}
          <div className="text-center min-w-[100px]">
            <div className="flex items-baseline justify-center gap-1 mb-1">
              <span className="text-2xl font-serif font-bold text-gold-500">{casino.rating.toFixed(1)}</span>
              <span className="text-sm text-gray-500">/10</span>
            </div>
            <div className="flex items-center justify-center gap-0.5 mb-1">{renderStars()}</div>
            <div className="text-[10px] text-gray-500">{casino.votes} glasova</div>
          </div>

          {/* CTA */}
          <div>
            <div className="btn-gold whitespace-nowrap text-xs px-5 py-3">Posjeti</div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-3 pt-2">
          <div className="flex items-center gap-4">
            <div className="bg-white/5 backdrop-blur-sm p-3 rounded-xl border border-white/10 flex-shrink-0">
              <Image
                src={casino.logo || "/placeholder.svg"}
                alt={casino.name}
                width={120}
                height={60}
                className="w-24 h-12 object-contain"
              />
            </div>
            <div className="flex-1 text-center">
              <div className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">Bonus</div>
              <div className="text-sm font-bold text-white leading-tight">{casino.bonus}</div>
            </div>
          </div>

          <div className="flex items-center justify-between gap-3 pt-1">
            <div className="flex items-center gap-2">
              <span className="text-xl font-serif font-bold text-gold-500">{casino.rating.toFixed(1)}</span>
              <div className="flex gap-0.5">{renderStars()}</div>
              <span className="text-[10px] text-gray-500">({casino.votes})</span>
            </div>
            <div className="btn-gold text-xs px-5 py-2.5">Posjeti</div>
          </div>
        </div>

        {/* Terms */}
        <div className="mt-4 pt-4 border-t border-white/5">
          <p className="text-[10px] text-gray-500 text-center">18+ | Uvjeti vrijede | Igrajte odgovorno</p>
        </div>

        {/* Shimmer Effect */}
        {isTop3 && <div className="absolute inset-0 rounded-2xl shimmer pointer-events-none" />}
      </a>
    </div>
  )
}
