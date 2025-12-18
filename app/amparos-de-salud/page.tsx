
import { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Shield, Clock, Award, Phone, MessageCircle, CheckCircle } from "lucide-react"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Amparos de Salud — MG Abogados Bahía Blanca | Amparo por medicación y tratamientos",
  description: "Abogados especializados en amparos de salud en Bahía Blanca. Defendemos tu derecho a recibir medicamentos, tratamientos y coberturas médicas. Consulta inmediata.",
  openGraph: {
    title: "Amparos de Salud — MG Abogados Bahía Blanca",
    description: "Abogados especializados en amparos de salud. Defendemos tu derecho a recibir medicamentos y tratamientos.",
    type: "website",
    url: "https://www.mglegales.com/amparos-de-salud",
  },
  keywords: [
    "amparos de salud",
    "amparo de salud bahia blanca",
    "abogados amparos bahia blanca",
    "amparo medicamentos",
    "obras sociales negadas",
  ],
  alternates: {
    canonical: "https://www.mglegales.com/amparos-de-salud",
  },
  robots: {
    index: true,
    follow: true,
  },
}

const casos = [
  "Medicamentos de alto costo negados",
  "Tratamientos médicos rechazados",
  "Cirugías no autorizadas",
  "Estudios diagnósticos denegados",
  "Terapias y rehabilitación",
  "Prótesis y dispositivos médicos",
]

const beneficios = [
  {
    icon: Shield,
    title: "Experiencia en Bahía Blanca",
    description: "Experiencia defendiendo pacientes en Bahía Blanca y zona. Casos ganados contra IOMA, OSDE, Swiss Medical y más",
  },
  {
    icon: Clock,
    title: "Respuesta Inmediata",
    description: "Atención rápida y prioritaria",
  }
]

export default function AmparosDeSaludPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-20 bg-linear-to-br from-primary/5 via-background to-secondary/20">
      
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-primary">Especialistas en Amparos de Salud</span>
            </div>
            
            <h1 className="font-sans text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              ¿Tu Obra Social o Prepaga te negó una prestación médica o tratamiento ?
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty leading-relaxed">
             <span className="text-foreground font-semibold"> Atención en Bahía Blanca y toda la Provincia de Buenos Aires. </span>
                Gestión legal rápida y 100% online.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 w-full sm:w-auto"
                asChild
              >
                <a 
                  href="https://wa.me/542916482826?text=Hola%2C%20necesito%20consultar%20por%20un%20amparo%20de%20salud" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Consulta por WhatsApp
                </a>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 w-full sm:w-auto"
                asChild
              >
                <a href="tel:+542916482826" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Llamar Ahora
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>



       <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-sans text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Casos que Resolvemos
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {casos.map((caso, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors"
                >
                  <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <span className="text-lg text-foreground">{caso}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Mapa y Reseñas */}
      <section className="py-8 md:py-16 bg-secondary/10">
                  <h2 className="font-sans text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              Nuestro despacho
            </h2>
        <div className="container mx-auto mt-4 px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="w-full h-64 md:h-96 rounded-lg overflow-hidden border-2">
              <iframe
                title="Estudio Jurídico Mazzarini-Gatti - Map"
                src="https://www.google.com/maps?q=-38.7245635,-62.2670839&hl=es&z=17&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>

            <div className="flex flex-col justify-center gap-4">
              <div className="p-6 bg-background/60 rounded-lg border-2">
                <h3 className="font-sans text-xl font-bold text-foreground mb-2">Estudio Jurídico Mazzarini-Gatti</h3>
                <p className="text-sm text-muted-foreground">Berutti 323, Bahia Blanca, Provincia de Buenos Aires</p>
                <p className="text-sm text-muted-foreground">Tel: <a href="tel:+54 9 291 648-2826" className="text-primary">+54 9 291 648-2826</a></p>
              </div>

              <div>
                <Button
                  asChild
                  className="w-full text-center px-6 py-4 text-lg font-semibold"
                >
                  <a
                    href="https://www.google.com.ar/maps/place/Estudio+Jur%C3%ADdico+Mazzarini-Gatti+y+asociados/@-38.7244721,-62.266976,3a,75y,90t/data=!3m8!1e2!3m6!1sCIABIhCMRr61mqmDih31BJ2nwD2_!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FAG0ilSyHCuMVaoIvC7pkKWP2jhG_wG-WSXkQdtU-Lgvyl0ccR4IKZJ3h_9edWHVjjIZ2FjEAjssPKbkwommUEapbMQ8zo0zdSbYYOLUfjpaMg-Od2FFEo81WVQJVJaRMAeUHTokg9QkMSubBQny0%3Dw86-h114-k-no!7i3024!8i4032!4m17!1m9!3m8!1s0x95edbddcdf1eb265:0x5c101d1aff154daa!2sEstudio+Jur%C3%ADdico+Mazzarini-Gatti+y+asociados!8m2!3d-38.7245635!4d-62.2670839!9m1!1b1!16s%2Fg%2F11zklwjsgc!3m6!1s0x95edbddcdf1eb265:0x5c101d1aff154daa!8m2!3d-38.7245635!4d-62.2670839!10e5!16s%2Fg%2F11zklwjsgc?hl=es&entry=ttu&g_ep=EgoyMDI1MTExNi4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Ver en Google Maps"
                  >
                    Conoce nuestro despacho
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schema JSON-LD para LocalBusiness + Reviews */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            "name": "MG Abogados - Amparos de Salud",
            "image": "https://www.mglegales.com/logo.png",
            "@id": "https://www.mglegales.com/amparos-de-salud",
            "url": "https://www.mglegales.com/amparos-de-salud",
            "telephone": "+54 9 291 648-2826",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Av. Alem 123",
              "addressLocality": "Bahía Blanca",
              "addressRegion": "Buenos Aires",
              "postalCode": "8000",
              "addressCountry": "AR"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "ratingCount": "128"
            },
            "review": [
              {
                "@type": "Review",
                "author": "María G.",
                "datePublished": "2025-09-12",
                "reviewBody": "Me ayudaron a obtener un medicamento que mi obra social me negaba. Rápidos y profesionales.",
                "reviewRating": {"@type": "Rating","ratingValue": "5"}
              },
              {
                "@type": "Review",
                "author": "Fernando R.",
                "datePublished": "2025-07-02",
                "reviewBody": "Presentaron una medida cautelar y en pocos días la cobertura fue otorgada. Excelente acompañamiento.",
                "reviewRating": {"@type": "Rating","ratingValue": "5"}
              }
            ]
          }),
        }}
      />

      {/* Casos que Resolvemos */}
     




      {/* Formulario de Contacto */}
      <section id="contacto" className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-sans text-3xl md:text-4xl font-bold text-foreground mb-4">
                Consultá tu Caso
              </h2>
              <p className="text-lg text-muted-foreground">
                Completá el formulario y te contactamos en menos de 24 horas
              </p>
            </div>

            <Card className="border-2">
              <CardContent className="p-8">
                <form className="space-y-6" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="nombre" className="text-sm font-medium text-foreground">
                        Nombre y Apellido *
                      </label>
                      <Input
                        id="nombre"
                        name="nombre"
                        type="text"
                        placeholder="Juan Pérez"
                        required
                        className="h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="telefono" className="text-sm font-medium text-foreground">
                        Teléfono *
                      </label>
                      <Input
                        id="telefono"
                        name="telefono"
                        type="tel"
                        placeholder="291 400 0000"
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="tu@email.com"
                      required
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="obraSocial" className="text-sm font-medium text-foreground">
                      Obra Social / Prepaga *
                    </label>
                    <Input
                      id="obraSocial"
                      name="obraSocial"
                      type="text"
                      placeholder="Ej: OSDE, Swiss Medical, IOMA, etc."
                      required
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="consulta" className="text-sm font-medium text-foreground">
                      Contanos tu caso *
                    </label>
                    <Textarea
                      id="consulta"
                      name="consulta"
                      placeholder="Describí brevemente qué tratamiento, medicamento o cobertura te fue negada..."
                      required
                      className="min-h-32"
                    />
                  </div>

                  <input type="hidden" name="_subject" value="Nueva consulta - Amparo de Salud" />
                  <input type="hidden" name="_next" value="https://www.mglegales.com/gracias" />

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full text-lg py-6"
                  >
                    Enviar Consulta
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    Tus datos están protegidos. Te contactaremos a la brevedad.
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* CTA Adicional WhatsApp */}
            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">¿Preferís una respuesta más rápida?</p>
              <Button 
                size="lg" 
                className="text-lg px-8"
                asChild
              >
                <a 
                  href="https://wa.me/542916482826?text=Hola%2C%20necesito%20consultar%20por%20un%20amparo%20de%20salud" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Escribínos por WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
