import { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { CheckCircle, MessageCircle, Phone } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Gracias por tu consulta — MG Abogados",
  description: "Recibimos tu consulta. Te contactaremos a la brevedad.",
  robots: "noindex, nofollow",
}

export default function GraciasPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 min-h-[80vh] flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
              <CheckCircle className="w-10 h-10 text-primary" />
            </div>
            
            <h1 className="font-sans text-4xl md:text-5xl font-bold text-foreground mb-6">
              ¡Gracias por tu Consulta!
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Recibimos tu mensaje correctamente. Un miembro de nuestro equipo se pondrá en contacto contigo 
              <span className="text-foreground font-semibold"> de manera prioritaria</span> para analizar tu caso.
            </p>

            <div className="bg-secondary/30 border-2 border-border rounded-lg p-6 mb-8">
              <p className="text-lg text-foreground mb-4">
                <strong>¿Necesitás atención urgente?</strong>
              </p>
              <p className="text-muted-foreground mb-6">
                Podés comunicarte directamente con nosotros por WhatsApp o teléfono
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  asChild
                >
                  <a 
                    href="https://wa.me/5492914000000?text=Hola%2C%20necesito%20consultar%20por%20un%20amparo%20de%20salud" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp
                  </a>
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline"
                  asChild
                >
                  <a href="tel:+54 9 291 648-2826" className="flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    Llamar Ahora
                  </a>
                </Button>
              </div>
            </div>

            <Link href="/">
              <Button variant="ghost" size="lg">
                Volver al Inicio
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
