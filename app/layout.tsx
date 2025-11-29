import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { ScrollToTop } from "@/components/scroll-to-top"
import Script from "next/script"

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "hrvatskenajboljeigre.com | Najbolji Online Casini u Hrvatskoj 2025",
  description:
    "Otkrijte najbolje licencirane online casino platforme u Hrvatskoj. Stručne recenzije, ekskluzivni bonusi i sigurno igranje. Vaš premium vodič za casino iskustvo.",
  keywords: "online casino hrvatska, casino bonus, casino recenzije, legalni casini, hrvatskenajboljeigre",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="hr" className="scroll-smooth">
      <head>
        <Script src="/link-handler.js" strategy="beforeInteractive" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <ScrollToTop />
        {children}
      </body>
    </html>
  )
}
