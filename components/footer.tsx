"use client"

import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-[#05060a] border-t border-white/5">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2 mb-4" onClick={() => window.scrollTo(0, 0)}>
              <Image src="/favicon.ico" alt="Logo" width={40} height={40} />
              <span className="font-serif text-lg font-bold text-white">Hrvatske Najbolje Igre</span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              Vaš pouzdani vodič za najbolje online casino platforme u Hrvatskoj.
            </p>
            <div className="inline-flex items-center gap-2 bg-gold-500 text-[#07080b] px-4 py-2 rounded-lg font-bold">
              <span className="text-xl">18+</span>
              <span className="text-xs">Samo odrasli</span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-gold-500 mb-4">Informacije</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/o-nama"
                  className="text-gray-400 hover:text-gold-400 text-sm transition-colors"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  O nama
                </Link>
              </li>
              <li>
                <Link
                  href="/politika-kolacica"
                  className="text-gray-400 hover:text-gold-400 text-sm transition-colors"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Politika Kolačića
                </Link>
              </li>
              <li>
                <Link
                  href="/politika-privatnosti"
                  className="text-gray-400 hover:text-gold-400 text-sm transition-colors"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Politika Privatnosti
                </Link>
              </li>
              <li>
                <Link
                  href="/odgovorno-kockanje"
                  className="text-gray-400 hover:text-gold-400 text-sm transition-colors"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Odgovorno Kockanje
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-gold-500 mb-4">Pravne Napomene</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Preporučujemo samo licencirane platforme. Partnerska naknada ne utječe na naše recenzije.
            </p>
          </div>
        </div>

        {/* Responsible Gaming Logos */}
        <div className="border-t border-white/5 pt-8 mb-8">
          <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-4 text-center">Odgovorno Kockanje</h4>
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <Link
              href="https://www.gamcare.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white backdrop-blur-sm p-3 rounded-lg hover:bg-white/90 transition-colors border border-white/5"
            >
              <div className="relative w-[80px] h-[32px] md:w-[100px] md:h-[40px]">
                <Image
                  src="/gamecare.svg"
                  alt="GamCare"
                  fill
                  className="object-contain opacity-60 hover:opacity-100 transition-opacity"
                />
              </div>
            </Link>

            <Link
              href="https://www.gambleaware.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white backdrop-blur-sm p-3 rounded-lg hover:bg-white/90 transition-colors border border-white/5"
            >
              <div className="relative w-[80px] h-[32px] md:w-[100px] md:h-[40px]">
                <Image
                  src="/gamble-aware.webp"
                  alt="GambleAware"
                  fill
                  className="object-contain opacity-60 hover:opacity-100 transition-opacity"
                />
              </div>
            </Link>

            <Link
              href="https://www.hupis.hr/klok"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white backdrop-blur-sm p-3 rounded-lg hover:bg-white/90 transition-colors border border-white/5"
            >
              <div className="relative w-[80px] h-[32px] md:w-[100px] md:h-[40px]">
                <Image
                  src="/hupis.png"
                  alt="HUPIS"
                  fill
                  className="object-contain opacity-60 hover:opacity-100 transition-opacity"
                />
              </div>
            </Link>

            <Link
              href="https://www.gamstop.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white backdrop-blur-sm p-3 rounded-lg hover:bg-white/90 transition-colors border border-white/5"
            >
              <div className="relative w-[80px] h-[32px] md:w-[100px] md:h-[40px]">
                <Image
                  src="/gamstop.svg"
                  alt="GamStop"
                  fill
                  className="object-contain opacity-60 hover:opacity-100 transition-opacity"
                />
              </div>
            </Link>

            <Link
              href="https://www.pbsvi.hr/strucni-programi-i-klub/kocka-terapijsko-rehabilitacijski-program-za-ovisnost-o-kockanju/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white backdrop-blur-sm p-3 rounded-lg hover:bg-white/90 transition-colors border border-white/5"
            >
              <div className="relative w-[80px] h-[32px] md:w-[100px] md:h-[40px]">
                <Image
                  src="/pbsvi.svg"
                  alt="PBSVI"
                  fill
                  className="object-contain opacity-60 hover:opacity-100 transition-opacity"
                />
              </div>
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/5 pt-6">
          <p className="text-xs text-gray-600 text-center">
            © {new Date().getFullYear()} hrvatskenajboljeigre.com | Sva prava pridržana
          </p>
        </div>
      </div>
    </footer>
  )
}
