import Link from "next/link"
import { ArrowLeft, Users, Target, Shield, Eye } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "O Nama - hrvatskenajboljeigre.com",
  description:
    "Saznajte više o hrvatskenajboljeigre.com - vašem pouzdanom izvoru za objektivne recenzije online casina u Hrvatskoj.",
}

export default function AboutPage() {
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
            <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-gold-gradient">O Nama</h1>
            <p className="text-gray-400">Vaš pouzdani vodič za najbolje casino iskustvo u Hrvatskoj</p>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#12141c] to-[#0c0e14] rounded-2xl p-6 md:p-8 border border-white/5">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-gold-500" />
                <h2 className="font-serif text-xl font-bold text-white">Tko Smo Mi</h2>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                <strong className="text-white">hrvatskenajboljeigre.com</strong> je vodeća platforma za recenzije online
                casino platformi u Hrvatskoj. S preko 10 godina iskustva u industriji, naš tim stručnjaka posvećen je
                pružanju najkvalitetnijih informacija.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Osnovani smo s jasnom vizijom: pomoći igračima pronaći sigurne, pouzdane i kvalitetne platforme za
                online igranje.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#0c0e14] to-[#12141c] rounded-2xl p-6 md:p-8 border border-gold-500/10">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-gold-500" />
                <h2 className="font-serif text-xl font-bold text-white">Naša Misija</h2>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                Pružiti transparentne, detaljne i pouzdane recenzije svih casina na hrvatskom tržištu. Testiramo svaki
                casino prema strogim kriterijima.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mt-2" />
                  Licenciranje i sigurnost
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mt-2" />
                  Ponuda igara i bonusi
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mt-2" />
                  Brzina i sigurnost isplata
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mt-2" />
                  Kvaliteta korisničke podrške
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#12141c] to-[#0c0e14] rounded-2xl p-6 md:p-8 border border-white/5">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-gold-500" />
                <h2 className="font-serif text-xl font-bold text-white">Odgovorno Kockanje</h2>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Snažno podržavamo odgovorno kockanje. Preporučujemo samo casine s alatima za zaštitu igrača. Svi
                recenzirani casini su namijenjeni osobama starijim od 18 godina.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#0c0e14] to-[#12141c] rounded-2xl p-6 md:p-8 border border-gold-500/10">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-6 h-6 text-gold-500" />
                <h2 className="font-serif text-xl font-bold text-white">Transparentnost</h2>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Primamo partnersku naknadu od nekih operatera, ali to nikada ne utječe na naše recenzije. Naša
                reputacija ovisi o istinitosti i objektivnosti.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
