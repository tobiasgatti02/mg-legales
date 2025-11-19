"use client"

import Link from "next/link"
import { MessageCircle } from "lucide-react"
import { trackConversion } from "@/lib/gtm"

export function WhatsAppFloat() {
  const phoneNumber = "5492914000000" // ACTUALIZAR con número real
  const message = encodeURIComponent("Hola, necesito consultar por un amparo de salud")
  const url = `https://wa.me/${phoneNumber}?text=${message}`

  const handleClick = () => {
    try {
      trackConversion('whatsapp_click', { location: window.location.pathname })
    } catch (e) {
      // noop
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        aria-label="WhatsApp"
        className="flex items-center gap-3 px-4 py-3 bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition transform hover:-translate-y-0.5"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="hidden sm:inline-block font-medium">Escribinos</span>
      </a>
    </div>
  )
}
