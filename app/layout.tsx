import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"
import { Analytics } from "@vercel/analytics/next"
import { GoogleTagManager, GoogleTagManagerNoScript } from "@/lib/gtm"
import dynamic from "next/dynamic"
import Script from "next/script"
const WhatsAppFloat = dynamic(() => import("@/components/whatsapp-float").then(m => m.WhatsAppFloat), { ssr: true })
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Abogados Bahia Blanca - Amparos de Salud",
  description: "Defensa de derecho de salud Bahia Blanca. Defendemos tu derecho a la salud con profesionalismo y dedicación.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <GoogleTagManager />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17752138433"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17752138433');
            `,
          }}
        />
      </head>
      <body className={`${playfairDisplay.variable} ${inter.variable} font-mono antialiased`}>
        <GoogleTagManagerNoScript />
        {children}
        <WhatsAppFloat />
        <Analytics />
      </body>
    </html>
  )
}
