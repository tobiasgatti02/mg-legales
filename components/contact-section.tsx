"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react"
import { useState } from "react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const whatsappNumber = "5492915041220"
  const whatsappMessage = encodeURIComponent("Hola, me gustaría obtener más información sobre sus servicios" )


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage("")

    try {
      const serviceId = 'service_mjrvrqj'
      const templateId = 'template_33ri52s'
      const publicKey = 'Menb23a1jWwv5ZTp-'

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
        to_email: 'estudiomglegales@gmail.com',
      }


      setSubmitMessage("¡Consulta enviada exitosamente!")
      setFormData({ name: "", email: "", phone: "", message: "" })
    } catch (error) {
      setSubmitMessage("Error al enviar la consulta. Inténtalo de nuevo.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contacto" className="py-4 md:py-4 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-sans text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">Contactanos</h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Estamos aquí para ayudarte.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* WhatsApp Contact - Principal */}
          <Card className="lg:col-span-2 border-2 transition-all duration-300 hover:border-primary hover:shadow-lg">
            <CardContent className="p-8">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <MessageCircle className="w-10 h-10 text-primary" />
                </div>
                <h3 className="font-sans text-2xl md:text-3xl font-bold text-foreground">
                  Escribínos por WhatsApp
                </h3>
                <p className="text-lg text-muted-foreground">
                  Obtén una respuesta rápida a tu consulta. Estamos disponibles para ayudarte.
                </p>
                <Button
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300 text-lg py-6"
                  asChild
                >
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-6 w-6" />
                    Iniciá tu <b>Amparo de Salud</b>
                  </a>
                </Button>
                <p className="text-sm text-muted-foreground">
                  <Phone className="inline w-4 h-4 mr-1" />
                  +54 9 291 648-2826
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact Info Cards */}
          <div className="space-y-6">
            <Card className="border-2 transition-all duration-300 hover:border-primary hover:shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <p className="text-sm text-muted-foreground">estudiomglegales@gmail.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 transition-all duration-300 hover:border-primary hover:shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Dirección</h3>
                    <ul className="text-sm text-muted-foreground">
                      <li>Berutti 323, Bahia Blanca</li>
                      <li>25 de mayo 243, Tornquist</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>


        </div>
      </div>
    </section>
  )
}
