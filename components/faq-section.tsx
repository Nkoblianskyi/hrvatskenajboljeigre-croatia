"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const faqItems = [
  {
    question: "Koji online casini su legalni u Hrvatskoj?",
    answer:
      "U Hrvatskoj su legalni samo casini s licencom Ministarstva financija RH. Svi moraju koristiti SSL enkripciju, integraciju sa sustavom samoisključenja i plaćati 15% poreza na bruto prihod.",
  },
  {
    question: "Kako provjeriti sigurnost casina?",
    answer:
      "Provjerite licencu na web stranici Ministarstva financija, SSL certifikat (zeleni lokot), recenzije igrača i uvjete bonusa. Svi naši preporučeni casini su verificirani.",
  },
  {
    question: "Što su razumni uvjeti za bonus?",
    answer:
      "Razumni uvjeti uključuju promet 30-40x, minimalno 30 dana za ispunjenje, jasne uvjete i realne limite. Izbjegavajte bonuse s prometom preko 50x.",
  },
  {
    question: "Koliko brzo mogu podići dobitke?",
    answer:
      "E-novčanici nude najbrže isplate (24-48h), bankovni transferi 3-5 dana. Prvi put je potrebna KYC verifikacija koja može produžiti proces.",
  },
  {
    question: "Plaćaju li hrvatski igrači porez na dobitke?",
    answer:
      "Ne, igrači ne plaćaju porez na dobitke s licenciranih platformi. Porez plaća casino operater (15% na bruto prihod).",
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-[#07080b]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gold-900/10 via-transparent to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-semibold tracking-widest uppercase rounded-full mb-4">
              FAQ
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">Često Postavljana Pitanja</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-gold-500 to-gold-600 mx-auto rounded-full" />
          </div>

          {/* FAQ Items */}
          <div className="space-y-3">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#12141c] to-[#0c0e14] rounded-xl overflow-hidden border border-white/5 hover:border-gold-500/20 transition-colors"
              >
                <button
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="font-semibold text-white text-sm md:text-base pr-4">{item.question}</span>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold-500/10 flex items-center justify-center">
                    {openIndex === index ? (
                      <Minus className="w-4 h-4 text-gold-500" />
                    ) : (
                      <Plus className="w-4 h-4 text-gold-500" />
                    )}
                  </div>
                </button>
                {openIndex === index && (
                  <div className="px-5 md:px-6 pb-5 md:pb-6">
                    <p className="text-gray-400 text-sm leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
