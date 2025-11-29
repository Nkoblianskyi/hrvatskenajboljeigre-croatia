import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Politika Privatnosti - hrvatskenajboljeigre.com",
  description: "Saznajte kako hrvatskenajboljeigre.com prikuplja, koristi i štiti vaše osobne podatke.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#07080b]">
      <Header />

      <main className="container mx-auto px-4 py-10 md:py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gold-500 hover:text-gold-400 transition-colors mb-8 text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Povratak na početnu</span>
        </Link>

        <div className="max-w-4xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-12">
            <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-gold-gradient">Politika Privatnosti</h1>
            <p className="text-gray-400">Vaša privatnost je naš prioritet</p>
            <p className="text-xs text-gray-500 mt-2">
              Posljednje ažuriranje: {new Date().toLocaleDateString("hr-HR")}
            </p>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#12141c] to-[#0c0e14] rounded-2xl p-6 md:p-8 border border-white/5">
              <h2 className="font-serif text-xl font-bold text-white mb-4">Uvod</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                hrvatskenajboljeigre.com poštuje vašu privatnost i obvezuje se zaštiti vaše osobne podatke. Ova Politika
                privatnosti objašnjava kako prikupljamo i koristimo vaše podatke.
              </p>
              <div className="bg-gold-500/10 border border-gold-500/20 rounded-lg p-4">
                <p className="text-sm text-gray-300">
                  <strong className="text-gold-400">Važno:</strong> Ova politika odnosi se samo na našu stranicu.
                  Linkovi na treće strane podliježu njihovim politikama.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#0c0e14] to-[#12141c] rounded-2xl p-6 md:p-8 border border-gold-500/10">
              <h2 className="font-serif text-xl font-bold text-white mb-4">Podaci Koje Prikupljamo</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Automatski prikupljamo tehničke podatke (IP adresa, preglednik, OS), podatke o korištenju i kolačiće.
                Možete nam dobrovoljno pružiti dodatne informacije putem obrazaca.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#12141c] to-[#0c0e14] rounded-2xl p-6 md:p-8 border border-white/5">
              <h2 className="font-serif text-xl font-bold text-white mb-4">Korištenje Podataka</h2>
              <p className="text-gray-300 leading-relaxed">
                Koristimo podatke za poboljšanje usluga, personalizaciju sadržaja, sigurnost, analitiku i komunikaciju s
                vama. Nikada ne prodajemo vaše podatke trećim stranama.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#0c0e14] to-[#12141c] rounded-2xl p-6 md:p-8 border border-gold-500/10">
              <h2 className="font-serif text-xl font-bold text-white mb-4">Vaša Prava</h2>
              <p className="text-gray-300 leading-relaxed">
                U skladu s GDPR-om imate pravo na pristup, ispravak, brisanje, ograničenje obrade, prigovor i
                prenosivost podataka. Kontaktirajte nas za ostvarivanje prava.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#12141c] to-[#0c0e14] rounded-2xl p-6 md:p-8 border border-white/5">
              <h2 className="font-serif text-xl font-bold text-white mb-4">Sigurnost</h2>
              <p className="text-gray-300 leading-relaxed">
                Koristimo SSL enkripciju, sigurne servere i redovite sigurnosne revizije. Pristup podacima ima samo
                ovlašteno osoblje.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#0c0e14] to-[#12141c] rounded-2xl p-6 md:p-8 border border-gold-500/10">
              <h2 className="font-serif text-xl font-bold text-white mb-4">Kontakt</h2>
              <p className="text-gray-300 leading-relaxed">
                Za pitanja o privatnosti kontaktirajte nas putem web stranice. Možete podnijeti pritužbu Agenciji za
                zaštitu osobnih podataka (AZOP).
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
