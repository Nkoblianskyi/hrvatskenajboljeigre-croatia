export function ResponsibleGaming() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-[#0a0b0f]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gold-900/10 via-transparent to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-semibold tracking-widest uppercase rounded-full mb-4">
              Sigurnost
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">Odgovorno Kockanje</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-gold-500 to-gold-600 mx-auto rounded-full" />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#12141c] to-[#0c0e14] rounded-2xl p-6 md:p-8 border border-white/5">
              <h3 className="font-serif text-xl md:text-2xl font-semibold text-gold-400 mb-4">Sigurnost i Zaštita</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Online kockanje treba biti zabava, nikada obveza. Svi licencirani casini u Hrvatskoj moraju
                implementirati alate za odgovorno kockanje: limite depozita, pauze i samoisključenje.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Preporučujemo samo platforme koje aktivno štite igrače i nude podršku u slučaju problema.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#0c0e14] to-[#12141c] rounded-2xl p-6 md:p-8 border border-gold-500/10">
              <h3 className="font-serif text-xl md:text-2xl font-semibold text-gold-400 mb-4">Znakovi Problema</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Prepoznajte rane znakove: igranje s novcem koji ne možete izgubiti, pokušaji vraćanja gubitaka,
                zanemarivanje obveza zbog kockanja.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Ako primijetite bilo koji od ovih znakova, odmah potražite profesionalnu pomoć.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#12141c] to-[#0c0e14] rounded-2xl p-6 md:p-8 border border-white/5">
              <h3 className="font-serif text-xl md:text-2xl font-semibold text-gold-400 mb-4">Organizacije za Pomoć</h3>
              <div className="space-y-3">
                <a
                  href="https://www.gambleaware.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gold-400 hover:text-gold-300 font-semibold transition-colors"
                >
                  GambleAware →
                </a>
                <a
                  href="https://www.gamcare.org.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gold-400 hover:text-gold-300 font-semibold transition-colors"
                >
                  GamCare →
                </a>
                <a
                  href="https://www.gamstop.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gold-400 hover:text-gold-300 font-semibold transition-colors"
                >
                  GamStop →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
