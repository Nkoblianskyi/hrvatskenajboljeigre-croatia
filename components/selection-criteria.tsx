export function SelectionCriteria() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-[#07080b]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold-900/10 via-transparent to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-semibold tracking-widest uppercase rounded-full mb-4">
              Metodologija
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">Kriteriji Evaluacije</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-gold-500 to-gold-600 mx-auto rounded-full" />
          </div>

          {/* Criteria Cards */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#12141c] to-[#0c0e14] rounded-2xl p-6 md:p-8 border border-white/5">
              <h3 className="font-serif text-xl md:text-2xl font-semibold text-gold-400 mb-4">
                Sigurnost i Licenciranje
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Provjeravamo valjanost licence Ministarstva financija RH, SSL enkripciju, zaštitu podataka i integraciju
                s nacionalnim registrom samoisključenja. Samo potpuno licencirani casini ulaze u našu selekciju.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#0c0e14] to-[#12141c] rounded-2xl p-6 md:p-8 border border-gold-500/10">
              <h3 className="font-serif text-xl md:text-2xl font-semibold text-gold-400 mb-4">Bonusi i Promocije</h3>
              <p className="text-gray-300 leading-relaxed">
                Analiziramo uvjete prometa, vremenska ograničenja i stvarnu vrijednost ponuda. Preferiramo casine s fer
                uvjetima (30-40x promet) i transparentnim pravilima.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#12141c] to-[#0c0e14] rounded-2xl p-6 md:p-8 border border-white/5">
              <h3 className="font-serif text-xl md:text-2xl font-semibold text-gold-400 mb-4">Brzina Isplata</h3>
              <p className="text-gray-300 leading-relaxed">
                Testiramo sve metode plaćanja s fokusom na brzinu i naknade. Najbolji casini nude isplate unutar 24-48
                sati s minimalnim naknadama.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
