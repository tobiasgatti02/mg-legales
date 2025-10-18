import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

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
  title: "Estudio Jurídico - Amparo de Salud",
  description: "Especialistas en amparo de salud. Defendemos tu derecho a la salud con profesionalismo y dedicación.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${playfairDisplay.variable} ${inter.variable} font-mono antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
