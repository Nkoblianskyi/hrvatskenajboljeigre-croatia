"use client"

import { useState, useEffect } from "react"
import { Shield, Award, CheckCircle, Star } from "lucide-react"

function FloatingCard({ className, delay = 0, suit }: { className?: string; delay?: number; suit: string }) {
  return (
    <div
      className={`absolute opacity-[0.07] ${className}`}
      style={{
        animationDelay: `${delay}s`,
        animation: "float 8s ease-in-out infinite",
      }}
    >
      <div className="w-12 h-16 md:w-16 md:h-22 bg-white/10 rounded-lg border border-white/10 flex items-center justify-center text-2xl md:text-3xl">
        {suit}
      </div>
    </div>
  )
}

function FloatingChip({ className, delay = 0 }: { className?: string; delay?: number }) {
  return (
    <div
      className={`absolute w-8 h-8 md:w-10 md:h-10 rounded-full opacity-[0.08] ${className}`}
      style={{
        animationDelay: `${delay}s`,
        animation: "float 10s ease-in-out infinite",
        background:
          "conic-gradient(from 0deg, #D4AF37 0deg 30deg, #1a1a2e 30deg 60deg, #D4AF37 60deg 90deg, #1a1a2e 90deg 120deg, #D4AF37 120deg 150deg, #1a1a2e 150deg 180deg, #D4AF37 180deg 210deg, #1a1a2e 210deg 240deg, #D4AF37 240deg 270deg, #1a1a2e 270deg 300deg, #D4AF37 300deg 330deg, #1a1a2e 330deg 360deg)",
      }}
    />
  )
}

export function HeroSection() {
  const [currentDate, setCurrentDate] = useState("")

  useEffect(() => {
    const months = [
      "siječanj",
      "veljača",
      "ožujak",
      "travanj",
      "svibanj",
      "lipanj",
      "srpanj",
      "kolovoz",
      "rujan",
      "listopad",
      "studeni",
      "prosinac",
    ]
    const now = new Date()
    setCurrentDate(`${months[now.getMonth()]} ${now.getFullYear()}`)
  }, [])

  const scrollToCasinos = () => {
    document.getElementById("casino-list")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative py-8 md:py-8 flex items-center justify-center overflow-hidden bg-[#07080b]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/dark-casino-table-with-poker-chips-and-cards-elega.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-[#07080b]/90" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold-900/15 via-transparent to-transparent" />

      <FloatingCard className="top-[15%] left-[8%] -rotate-12" delay={0} suit="♠" />
      <FloatingCard className="top-[20%] right-[10%] rotate-6" delay={2} suit="♦" />
      <FloatingCard className="bottom-[20%] left-[12%] rotate-12" delay={4} suit="♣" />
      <FloatingCard className="bottom-[25%] right-[8%] -rotate-6" delay={3} suit="♥" />

      <FloatingChip className="top-[35%] left-[18%]" delay={1} />
      <FloatingChip className="top-[40%] right-[15%]" delay={2.5} />
      <FloatingChip className="bottom-[35%] left-[20%]" delay={3.5} />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          

          <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold mb-3 leading-[1.15] tracking-tight">
            <span className="text-white">Najbolji </span>
            <br />
            <span className="text-gold-gradient">Casini u Hrvatskoj</span>
          </h1>

          <p className="text-sm text-gray-400 max-w-md mx-auto mb-5 leading-relaxed">
            Provjerene recenzije i sigurne platforme za hrvatsko tržište.
          </p>
          {/* Date Badge */}
          <div className="inline-flex items-center gap-2 bg-black/40 backdrop-blur-sm border border-gold-500/20 rounded-full px-3 py-1.5 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse" />
            <span className="text-[10px] uppercase tracking-widest text-gray-500">Ažurirano</span>
            <span className="text-[10px] uppercase tracking-widest text-gold-400 font-medium">{currentDate}</span>
          </div>

          <div className="flex flex-wrap justify-center gap-2 max-w-lg mx-auto">
            {[
              { icon: Shield, label: "Licencirano" },
              { icon: CheckCircle, label: "18+" },
              { icon: Award, label: "SSL" },
              { icon: Star, label: "Verificirano" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-1.5 bg-black/40 backdrop-blur-sm border border-white/10 rounded-full px-2.5 py-1"
              >
                <item.icon className="w-3 h-3 text-gold-500" />
                <span className="text-[11px] text-gray-400">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#07080b] to-transparent" />

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(var(--rotation, 0deg)); }
          50% { transform: translateY(-15px) rotate(var(--rotation, 0deg)); }
        }
      `}</style>
    </section>
  )
}
