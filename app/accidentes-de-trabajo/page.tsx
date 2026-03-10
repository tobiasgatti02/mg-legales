
import { Metadata } from "next"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Shield, Clock, AlertTriangle, Phone, MessageCircle, CheckCircle, HardHat, FileWarning, Activity, Stethoscope } from "lucide-react"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Accidentes de Trabajo (ART) — MG Abogados Bahía Blanca | Reclamos y demandas laborales",
  description: "Abogados especializados en accidentes de trabajo y reclamos a ART en Bahía Blanca. Defendemos tus derechos ante incapacidades, enfermedades profesionales y divergencias. Consulta gratuita.",
  openGraph: {
    title: "Accidentes de Trabajo (ART) — MG Abogados Bahía Blanca",
    description: "Abogados especializados en reclamos a ART. Defendemos tus derechos por accidentes laborales e incapacidades.",
    type: "website",
    url: "https://www.mglegales.com/accidentes-de-trabajo",
  },
  keywords: [
    "accidentes de trabajo",
    "ART bahia blanca",
    "abogados ART bahia blanca",
    "reclamo ART",
    "incapacidad laboral",
    "enfermedades profesionales",
    "divergencia ART",
    "accidente laboral abogado",
  ],
  alternates: {
    canonical: "https://www.mglegales.com/accidentes-de-trabajo",
  },
  robots: {
    index: true,
    follow: true,
  },
}

const casos = [
  {
    icon: FileWarning,
    title: "Divergencia en el alta médica",
    description: "Cuando la ART te da el alta pero vos no estás en condiciones de volver a trabajar",
  },
  {
    icon: Activity,
    title: "Incapacidad laboral",
    description: "Reclamos por porcentaje de incapacidad mal otorgado o negado",
  },
  {
    icon: Stethoscope,
    title: "Reingreso al tratamiento",
    description: "Cuando necesitás continuar con el tratamiento y la ART te lo niega",
  },
  {
    icon: HardHat,
    title: "Enfermedades profesionales",
    description: "Patologías causadas por tu actividad laboral no reconocidas",
  },
]

const beneficios = [
  {
    icon: Shield,
    title: "Experiencia en Bahía Blanca",
    description: "Defendemos trabajadores en Bahía Blanca y zona contra todas las ART del mercado",
  },
  {
    icon: Clock,
    title: "Respuesta Inmediata",
    description: "Atención rápida y prioritaria para tu caso",
  },
  {
    icon: AlertTriangle,
    title: "Acompañamiento",
    description: "Acompañamiento integral junto a médicos legistas",
  },
]

const faqs = [
  {
    pregunta: "¿Qué hago si la ART me dio el alta pero sigo con dolor?",
    respuesta: "Podés reclamar una divergencia ante la Comisión Médica. Nosotros te acompañamos en todo el proceso para que puedas continuar tu tratamiento hasta estar realmente recuperado.",
  },
  {
    pregunta: "¿Puedo reclamar si mi accidente fue hace tiempo?",
    respuesta: "Sí, hay plazos legales para reclamar. Lo importante es consultar cuanto antes para evaluar tu caso y no perder derechos.",
  },
  {
    pregunta: "¿Qué es una enfermedad profesional?",
    respuesta: "Es una enfermedad causada directamente por tu trabajo (problemas de columna, tendinitis, hipoacusia, etc.). Tenés derecho a que la ART cubra tu tratamiento y te indemnice.",
  },
  {
    pregunta: "¿Te dijeron que no tenés incapacidad y no estás de acuerdo?",
    respuesta: "Es posible impugnar la determinación de incapacidad ante la SRT y reclamar lo que corresponde.",
  },
  {
    pregunta: "¿Necesitás volver al tratamiento y la ART se niega?",
    respuesta: "Se puede solicitar el reingreso al tratamiento cuando los síntomas persisten o se agravan.",
  },
  {
    pregunta: "¿Tenés una enfermedad relacionada con tu trabajo?",
    respuesta: "Las enfermedades profesionales también están cubiertas por la ART, aunque muchas veces no te lo informan.",
  },
  {
    pregunta: "¿La ART rechazó tu caso o demoró la atención?",
    respuesta: "Las demoras injustificadas y los rechazos pueden ser impugnados legalmente.",
  },
  {
    pregunta: "¿No sabés si tu caso es reclamable?",
    respuesta: "Una consulta inicial permite evaluar rápidamente si corresponde iniciar el trámite y cuál es el mejor camino.",
  }
]

export default function AccidentesDeTrabajoPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-20 md:pb-28 overflow-hidden">
        <Image
                src="/image.jpg"
                alt="Accidente laboral Bahia Blanca"
                fill
                className="absolute top-0 left-0 w-full h-full object-cover opacity-25"
              />
        {/* Gradiente de fondo */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-background to-secondary/20" />
        {/* Difuminado inferior */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-6 py-6 bg-orange-500/10 rounded-full mb-6">
              <HardHat className="w-5 h-5 text-orange-600" />
              <span className="text-sm font-semibold text-orange-600">Abogados Accidentes de Trabajo - Bahia Blanca</span>
            </div>
            
            <h1 className="font-sans text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Abogados ART: Accidentes Laborales y Enfermedades Profesionales
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty leading-relaxed">
              <span className="text-foreground font-semibold">Atención en Bahía Blanca y en toda la zona.</span>{" "}
              <span className="text-foreground">Reclamamos por tus derechos como trabajador ante la ART, tanto en sede administrativa (Comisión Médica) como judicial. Acompañamiento legal y médico en todo el proceso, para lograr la indemnización correspondiente según tu caso.</span>
            </p>

            <div className="relative z-10 flex flex-col sm:flex-row gap-5 justify-center items-center">
              <Button 
                size="lg" 
                className="text-xl px-14 py-10 w-full sm:w-auto bg-orange-600 hover:bg-orange-700 shadow-lg hover:shadow-xl transition-all"
                asChild
              >
                <a 
                  href="https://wa.me/5492916481220?text=Hola%2C%20necesito%20consultar%20por%20un%20accidente%20de%20trabajo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3"
                >
                  <MessageCircle className="font-bold w-6 h-6" />
                  <p className="font-bold ">Iniciá hoy tu Reclamo Laboral</p>
                </a>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="text-xl px-10 py-7 w-full sm:w-auto bg-background border-2 border-orange-600 text-orange-600 hover:bg-orange-50 shadow-lg hover:shadow-xl transition-all"
                asChild
              >
                
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Casos que Resolvemos */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-sans text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              Casos que Tratamos
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {casos.map((caso, index) => (
                <Card key={index} className="border-2 hover:border-orange-500/50 transition-colors">
                  <CardContent className="p-12">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-orange-500/10 rounded-lg">
                        <caso.icon className="w-6 h-6 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-foreground mb-2">{caso.title}</h3>
                        <p className="text-muted-foreground">{caso.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-12 md:py-20 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-sans text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              ¿Por qué elegirnos?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {beneficios.map((beneficio, index) => (
                <div key={index} className="text-center p-6">
                  <div className="inline-flex p-4 bg-orange-500/10 rounded-full mb-4">
                    <beneficio.icon className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">{beneficio.title}</h3>
                  <p className="text-muted-foreground">{beneficio.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>




      {/* FAQs */}
      <section className="py-12 md:py-20 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-sans text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Preguntas Frecuentes
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* FAQs Accordion */}
              <div>
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left text-lg">
                        {faq.pregunta}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.respuesta}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* Image */}
              <div className="relative">
                <Image
                  src="/abogados.jpeg"
                  alt="Abogados especializados en accidentes de trabajo"
                  width={600}
                  height={400}
                  className="w-full h-[50rem] object-cover object-top rounded-lg"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-orange-500 rounded-lg -z-10" />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 max-w-xs">
                  <h3 className="font-sans text-lg font-bold text-foreground mb-2">
                    Comprometidos con tu salud y bienestar
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Los Dres. Agustín Mazzarini y Agustín Gatti lideran un estudio jurídico especializado en la defensa de tus derechos laborales.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

            {/* Mapa y Contacto */}
      <section className="py-8 md:py-16">
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
                <p className="text-sm text-muted-foreground">Tel: <a href="tel:+54 9 291 504-1220" className="text-primary">+54 9 291 504-1220</a></p>
              </div>

              <div>
                <Button
                  asChild
                  className="w-full text-center px-6 py-4 text-lg font-semibold"
                >
                  <a
                    href="https://www.google.com.ar/maps/place/Estudio+Jur%C3%ADdico+Mazzarini-Gatti+y+asociados/@-38.7244721,-62.266976,3a,75y,90t/data=!3m8!1e2!3m6!1sCIABIhCMRr61mqmDih31BJ2nwD2_!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FAG0ilSyHCuMVaoIvC7pkKWP2jhG_wG-WSXkQdtU-Lgvyl0ccR4IKZJ3h_9edWHVjjIZ2FjEAjssPKbkwommUEapbMQ8zo0zdSbYYOLUfjpaMg-Od2FFEo81WVQJVJaRMAeUHTokg9QkMSubBQny0%3Dw86-h114-k-no!7i3024!8i4032!4m17!1m9!3m8!1s0x95edbddcdf1eb265:0x5c101d1aff154daa!2sEstudio+Jur%C3%ADdico+Mazzarini-Gatti+y+asociados!8m2!3d-38.7245635!4d-62.2670839!9m1!1b1!16s%2Fg%2F11zklwjsgc!3m6!1s0x95edbddcdf1eb265:0x5c101d1aff154daa!8m2!3d-38.7245635!4d-62.2670839!10e5!16s%2Fg%2F11zklwjsgc?hl=es&entry=ttu"
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
                    <label htmlFor="art" className="text-sm font-medium text-foreground">
                      ART (si la conocés)
                    </label>
                    <Input
                      id="art"
                      name="art"
                      type="text"
                      placeholder="Ej: Galeno ART, Experta, La Segunda, etc."
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
                      placeholder="Describí brevemente qué te pasó, cuándo fue el accidente, qué lesiones tenés..."
                      required
                      className="min-h-32"
                    />
                  </div>

                  <input type="hidden" name="_subject" value="Nueva consulta - Accidente de Trabajo" />
                  <input type="hidden" name="_next" value="https://www.mglegales.com/gracias" />

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full text-lg py-6 bg-orange-600 hover:bg-orange-700"
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
                className="text-lg px-8 bg-orange-600 hover:bg-orange-700"
                asChild
              >
                <a 
                  href="https://wa.me/5492916481220?text=Hola%2C%20necesito%20consultar%20por%20un%20accidente%20de%20trabajo" 
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

      {/* Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            "name": "MG Abogados - Accidentes de Trabajo",
            "image": "https://www.mglegales.com/logo.png",
            "@id": "https://www.mglegales.com/accidentes-de-trabajo",
            "url": "https://www.mglegales.com/accidentes-de-trabajo",
            "telephone": "+54 9 291 504-1220",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Berutti 323",
              "addressLocality": "Bahía Blanca",
              "addressRegion": "Buenos Aires",
              "postalCode": "8000",
              "addressCountry": "AR"
            },
            "areaServed": {
              "@type": "City",
              "name": "Bahía Blanca"
            },
            "priceRange": "Consulta gratuita",
          }),
        }}
      />

      <Footer />
    </main>
  )
}
