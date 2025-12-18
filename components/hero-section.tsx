"use client"

import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { FAQSection } from "./faq-section";

export function HeroSection() {
  const whatsappNumber = "5492916482826"; 
  const whatsappMessage = encodeURIComponent(
    "Hola, me gustaría obtener más información sobre sus servicios"
  );

  const scrollToContact = () => {
    const element = document.getElementById("contacto")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToFAQ = () => {
    const element = document.getElementById("preguntas")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 md:pt-20 bg-background">
      <Image
        src="/salud.jpg"
        alt="Amparos de salud"
        fill
        className="absolute top-0 left-0 w-full h-full object-cover opacity-10 z-10"
      />
      <div className="container mx-auto px-4 py-8 md:py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full transition-all duration-300 hover:bg-primary/20">
            <span className="text-sm text-primary font-medium">
              Defensa del derecho a la salud
            </span>
          </div>

          <h1 className="font-sans text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance leading-tight">
            Defensa del derecho a la Salud 
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto text-pretty leading-relaxed">
            Abogados especializados en Amparos de Salud en <b>Bahía Blanca y toda la Provincia de Buenos Aires</b>. Protegemos
            tus derechos ante obras sociales y prepagas con profesionalismo, dedicación y resultados
            comprobados.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">


            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary text-white   hover:scale-105 text-2xl px-32 py-10 w-full sm:w-auto bg-primary transition-all duration-300"
              asChild
            >
              <Link href="/amparos-de-salud">
                <MessageCircle className="mr-2 h-5 w-5" />
                Iniciá tu <b>Amparo de Salud</b>
              </Link>
            </Button>

            
          </div>
        </div>
      </div>
    </section>
  );
}
