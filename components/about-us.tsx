export function AboutUs() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-[#07080b]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold-900/10 via-transparent to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-semibold tracking-widest uppercase rounded-full mb-4">
              O Nama
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">Vaš Pouzdani Casino Vodič</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-gold-500 to-gold-600 mx-auto rounded-full" />
          </div>

          {/* Content Cards */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#12141c] to-[#0c0e14] rounded-2xl p-6 md:p-8 border border-white/5">
              <h3 className="font-serif text-xl md:text-2xl font-semibold text-gold-400 mb-4">Tko Smo Mi</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                <strong className="text-white">hrvatskenajboljeigre.com</strong> je vodeća platforma za recenzije online
                casino platformi u Hrvatskoj. S preko 10 godina iskustva u industriji, naš tim stručnjaka posvećen je
                pružanju transparentnih i objektivnih analiza.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Naša misija je pomoći vam pronaći sigurne, licencirane i kvalitetne casino platforme s najboljim
                bonusima i fer uvjetima igranja.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#0c0e14] to-[#12141c] rounded-2xl p-6 md:p-8 border border-gold-500/10">
              <h3 className="font-serif text-xl md:text-2xl font-semibold text-gold-400 mb-4">Naš Proces Evaluacije</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Svaki casino prolazi kroz rigoroznu provjeru: verifikacija licence, testiranje igara, analiza bonusa,
                provjera brzine isplata i kvalitete korisničke podrške.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Redovito ažuriramo recenzije kako bismo pratili promjene na tržištu i osigurali najnovije informacije za
                naše čitatelje.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#12141c] to-[#0c0e14] rounded-2xl p-6 md:p-8 border border-white/5">
              <h3 className="font-serif text-xl md:text-2xl font-semibold text-gold-400 mb-4">Transparentnost</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Primamo partnersku naknadu od casino operatera, ali to nikada ne utječe na naše ocjene. Naša reputacija
                ovisi o istinitosti i objektivnosti naših recenzija.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Snažno podržavamo odgovorno kockanje i preporučujemo samo platforme s alatima za zaštitu igrača.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
