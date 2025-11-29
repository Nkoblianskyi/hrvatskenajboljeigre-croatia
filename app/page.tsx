import { casinos } from "@/lib/data"
import { HeroSection } from "@/components/hero-section"
import { CasinoCard } from "@/components/casino-card"
import { ResponsibleGaming } from "@/components/responsible-gaming"
import { SelectionCriteria } from "@/components/selection-criteria"
import { FaqSection } from "@/components/faq-section"
import { PopularBonuses } from "@/components/popular-bonuses"
import { AboutUs } from "@/components/about-us"
import { Footer } from "@/components/footer"
import { CookieConsent } from "@/components/cookie-consent"
import { WelcomeModal } from "@/components/welcome-modal"
import { ScrollToTopButton } from "@/components/scroll-to-top-button"
import { Header } from "@/components/header"

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />

      {/* Casino List Section */}
      <section id="casino-list" className="py-12 md:py-20 bg-[#07080b] relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold-900/5 via-transparent to-transparent" />

        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          {/* Section Header */}
          <div className="text-center mb-10">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-3">Najbolji Licencirani Casini</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-gold-500 to-gold-600 mx-auto rounded-full" />
          </div>

          {/* Casino Cards */}
          <div className="flex flex-col gap-5">
            {casinos.map((casino, index) => (
              <CasinoCard key={casino.id} casino={casino} rank={index + 1} />
            ))}
          </div>

          {/* Disclaimer */}
          <p className="text-gray-500 text-xs text-center mt-10">
            * Primjenjuju se uvjeti. Kockanje može uzrokovati ovisnost. Igrajte odgovorno. 18+
          </p>
        </div>
      </section>

      <AboutUs />
      <ResponsibleGaming />
      <SelectionCriteria />
      <PopularBonuses casinos={casinos} />
      <FaqSection />
      <Footer />
      <CookieConsent />
      <WelcomeModal />
      <ScrollToTopButton />
    </>
  )
}
