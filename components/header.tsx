"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        isScrolled ? "bg-[#07080b]/95 backdrop-blur-xl border-b border-gold-500/10" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-center h-16 md:h-20">
          <Link href="/" className="group" onClick={() => window.scrollTo(0, 0)}>
            <div className="flex items-center gap-2">
              <Image src="/favicon.ico" alt="Logo" width={40} height={40} />
              <div className="flex flex-col">
                <span className="font-serif text-base md:text-lg font-bold tracking-tight text-white group-hover:text-gold-400 transition-colors">
                  Hrvatske Najbolje Igre
                </span>
                <span className="text-[8px] md:text-[9px] font-medium tracking-[0.2em] text-gold-500/70 uppercase">
                  Premium Casino Vodič
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </header>
  )
}
