import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Politika Kolačića - hrvatskenajboljeigre.com",
  description: "Saznajte kako hrvatskenajboljeigre.com koristi kolačiće za poboljšanje vašeg iskustva.",
}

export default function CookiePolicyPage() {
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
            <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-gold-gradient">Politika Kolačića</h1>
            <p className="text-gray-400">Kako koristimo kolačiće na hrvatskenajboljeigre.com</p>
            <p className="text-xs text-gray-500 mt-2">
              Posljednje ažuriranje: {new Date().toLocaleDateString("hr-HR")}
            </p>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#12141c] to-[#0c0e14] rounded-2xl p-6 md:p-8 border border-white/5">
              <h2 className="font-serif text-xl font-bold text-white mb-4">Što su Kolačići?</h2>
              <p className="text-gray-300 leading-relaxed">
                Kolačići su male tekstualne datoteke koje web stranica pohranjuje na vaš uređaj. Omogućuju pamćenje
                vaših postavki i preferencija kroz određeno vrijeme.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#0c0e14] to-[#12141c] rounded-2xl p-6 md:p-8 border border-gold-500/10">
              <h2 className="font-serif text-xl font-bold text-white mb-4">Nužni Kolačići</h2>
              <p className="text-gray-300 leading-relaxed">
                Neophodni za funkcioniranje stranice. Omogućuju osnovne funkcije poput pamćenja postavki privatnosti i
                navigacije. Ne mogu se onemogućiti.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#12141c] to-[#0c0e14] rounded-2xl p-6 md:p-8 border border-white/5">
              <h2 className="font-serif text-xl font-bold text-white mb-4">Analitički Kolačići</h2>
              <p className="text-gray-300 leading-relaxed">
                Koriste se za analizu korištenja stranice (npr. Google Analytics). Prikupljaju anonimizirane podatke o
                najposjećenijim stranicama. Možete ih odbiti putem bannera.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#0c0e14] to-[#12141c] rounded-2xl p-6 md:p-8 border border-gold-500/10">
              <h2 className="font-serif text-xl font-bold text-white mb-4">Marketinški Kolačići</h2>
              <p className="text-gray-300 leading-relaxed">
                Koriste se za prikazivanje personaliziranih ponuda i oglasa. Mogu ih postaviti naši partneri. Možete ih
                odbiti putem bannera.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#12141c] to-[#0c0e14] rounded-2xl p-6 md:p-8 border border-white/5">
              <h2 className="font-serif text-xl font-bold text-white mb-4">Upravljanje Kolačićima</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Možete upravljati kolačićima putem postavki preglednika ili našeg cookie bannera.
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/5 rounded-lg p-3">
                  <span className="text-white text-sm font-medium">Chrome:</span>{" "}
                  <span className="text-gray-400 text-xs">Postavke → Privatnost</span>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <span className="text-white text-sm font-medium">Firefox:</span>{" "}
                  <span className="text-gray-400 text-xs">Opcije → Privatnost</span>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <span className="text-white text-sm font-medium">Safari:</span>{" "}
                  <span className="text-gray-400 text-xs">Postavke → Privatnost</span>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <span className="text-white text-sm font-medium">Edge:</span>{" "}
                  <span className="text-gray-400 text-xs">Postavke → Kolačići</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
