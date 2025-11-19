"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, Phone } from "lucide-react"
import { trackConversion } from "@/lib/gtm"

interface ContactButtonProps {
  type: "whatsapp" | "phone"
  size?: "default" | "sm" | "lg"
  variant?: "default" | "outline"
  className?: string
  children?: React.ReactNode
}

export function ContactButton({ 
  type, 
  size = "default", 
  variant = "default",
  className = "",
  children 
}: ContactButtonProps) {
  const whatsappNumber = "+54 9 291 648-2826" // Actualizar con número real
  const phoneNumber = "+54 9 291 648-2826" // Actualizar con número real
  
  const handleClick = () => {
    // Trackear conversión en Google Ads vía GTM
    trackConversion('contact_click', {
      method: type,
      location: window.location.pathname,
    })
  }

  if (type === "whatsapp") {
    const message = encodeURIComponent("Hola, necesito consultar por un amparo de salud")
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`
    
    return (
      <Button 
        size={size} 
        variant={variant}
        className={className}
        asChild
      >
        <a 
          href={whatsappUrl}
          target="_blank" 
          rel="noopener noreferrer"
          onClick={handleClick}
          className="flex items-center gap-2"
        >
          <MessageCircle className="w-5 h-5" />
          {children || "WhatsApp"}
        </a>
      </Button>
    )
  }

  return (
    <Button 
      size={size} 
      variant={variant}
      className={className}
      asChild
    >
      <a 
        href={`tel:${phoneNumber}`}
        onClick={handleClick}
        className="flex items-center gap-2"
      >
        <Phone className="w-5 h-5" />
        {children || "Llamar"}
      </a>
    </Button>
  )
}
