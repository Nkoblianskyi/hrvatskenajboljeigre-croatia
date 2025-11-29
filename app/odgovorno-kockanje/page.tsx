import Link from "next/link"
import { ArrowLeft, Shield, AlertTriangle, HeartHandshake } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Odgovorno Kockanje - hrvatskenajboljeigre.com",
  description: "Saznajte više o odgovornom kockanju i gdje potražiti pomoć ako imate problem.",
}

export default function ResponsibleGamblingPage() {
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
            <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-gold-gradient">Odgovorno Kockanje</h1>
            <p className="text-gray-400">Vaša sigurnost je naš prioritet</p>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#12141c] to-[#0c0e14] rounded-2xl p-6 md:p-8 border border-white/5">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-gold-500" />
                <h2 className="font-serif text-xl font-bold text-white">Sigurnost i Zaštita</h2>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                Online kockanje treba biti zabava, nikada obveza ili način zarade. Svi licencirani casini u Hrvatskoj
                moraju nuditi alate za odgovorno kockanje: limite depozita, pauze od igranja i samoisključenje.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Preporučujemo samo platforme koje aktivno štite igrače i nude podršku u slučaju problema.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#0c0e14] to-[#12141c] rounded-2xl p-6 md:p-8 border border-gold-500/10">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-gold-500" />
                <h2 className="font-serif text-xl font-bold text-white">Znakovi Problema</h2>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">Prepoznajte rane znakove problematičnog kockanja:</p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mt-2" />
                  Igranje s novcem koji ne možete priuštiti izgubiti
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mt-2" />
                  Pokušaji vraćanja izgubljenog novca
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mt-2" />
                  Zanemarivanje obveza ili odnosa zbog kockanja
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mt-2" />
                  Posudivanje novca za kockanje
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mt-2" />
                  Laganje o kockanju
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#12141c] to-[#0c0e14] rounded-2xl p-6 md:p-8 border border-white/5">
              <div className="flex items-center gap-3 mb-4">
                <HeartHandshake className="w-6 h-6 text-gold-500" />
                <h2 className="font-serif text-xl font-bold text-white">Organizacije za Pomoć</h2>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                Ako imate problem s kockanjem, dostupne su profesionalne organizacije koje nude besplatnu i povjerljivu
                pomoć:
              </p>
              <div className="space-y-4">
                <a
                  href="https://www.gambleaware.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-colors border border-white/5"
                >
                  <span className="text-gold-400 font-bold">GambleAware</span>
                  <p className="text-gray-400 text-sm mt-1">
                    Vodeća organizacija za edukaciju i prevenciju ovisnosti o kockanju.
                  </p>
                </a>
                <a
                  href="https://www.gamcare.org.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-colors border border-white/5"
                >
                  <span className="text-gold-400 font-bold">GamCare</span>
                  <p className="text-gray-400 text-sm mt-1">
                    Besplatna podrška i savjetovanje za sve pogođene problemima s kockanjem.
                  </p>
                </a>
                <a
                  href="https://www.gamstop.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-colors border border-white/5"
                >
                  <span className="text-gold-400 font-bold">GamStop</span>
                  <p className="text-gray-400 text-sm mt-1">
                    Besplatni servis za samoisključenje iz svih online casino platformi.
                  </p>
                </a>
              </div>
            </div>

            <div className="bg-gold-500/10 border border-gold-500/20 rounded-2xl p-6 text-center">
              <p className="text-white font-semibold mb-2">Ne oklijevajte potražiti pomoć</p>
              <p className="text-gray-400 text-sm">
                Ovisnost o kockanju je rješiv problem s pravovremenom intervencijom i profesionalnom podrškom.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
