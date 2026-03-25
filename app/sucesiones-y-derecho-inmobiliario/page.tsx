import { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { TestimonialsCarousel } from "@/components/testimonials-carousel"
import { WhatsAppForm } from "@/components/whatsapp-form"
import { MessageCircle, Phone, CheckCircle, Home, Users, Scale, MapPin } from "lucide-react"
import Image from "next/image"
export const metadata: Metadata = {
  title: "Sucesiones y Derecho Inmobiliario — MG Abogados Bahía Blanca",
  description:
    "Abogado de Sucesiones y Derecho Inmobiliario en Bahía Blanca. Resolvé tu situación legal de forma rápida y segura con atención presencial y online.",
  openGraph: {
    title: "Sucesiones y Derecho Inmobiliario — MG Abogados Bahía Blanca",
    description:
      "Asesoramiento en sucesiones, inmuebles, contratos, usucapión y conflictos de posesión en Bahía Blanca y toda la provincia.",
    type: "website",
    url: "https://www.mglegales.com/sucesiones-y-derecho-inmobiliario",
  },
  alternates: {
    canonical: "https://www.mglegales.com/sucesiones-y-derecho-inmobiliario",
  },
}

const serviciosSucesiones = [
  "Sucesiones simples y complejas",
  "Declaratoria de herederos",
  "Inscripción de inmuebles",
  "Ventas por tracto abreviado",
  "División de bienes",
  "Acuerdos entre herederos",
  "Administración de bienes",
  "Regularización de propiedades heredadas",
]

const serviciosInmobiliarios = [
  "Usucapión (prescripción adquisitiva)",
  "Conflictos por posesión",
  "Problemas en compraventa de inmuebles",
  "Negociación y renegociación de contratos",
  "Boletos de compraventa y estudio de título",
  "Desalojos y usurpaciones",
  "Cobros de alquileres adeudados",
  "Asistencia legal en mediaciones",
]

const motivos = [
  "Atención personalizada y directa (sin intermediarios)",
  "Experiencia en casos reales en Bahía Blanca, Tornquist y la zona",
  "Estrategias claras desde el inicio",
  "Enfoque práctico: soluciones concretas sin vueltas",
]

const opiniones = [
  {
    name: "Marisa Ruggiero",
    date: "Marzo 2026",
    text: "Muy satisfecha con el acompañamiento profesional y humano de este estudio. Me brindaron total apoyo en la venta de mi casa. Gracias Agustín Gatti en especial. Tu asesoramiento con paciencia y eficacia fue excelente.",
  },
  {
    name: "Julieta Neira",
    date: "Abril 2026",
    text: "Queremos agradecer enormemente a Agustín por acompañarnos en la búsqueda de nuestra primera casa propia. Siempre estuvo presente, resolviendo cada una de nuestras dudas con claridad, paciencia y mucha profesionalidad. Nos sentimos contenidos y seguros durante todo el proceso. Sin dudas, un abogado inmobiliario súper recomendable.",
  },
]

export default function SucesionesInmobiliarioPage() {
  return (
    <main className="min-h-screen bg-[#F5F7FA] text-[#1A1A1A]">
      <Navbar />

      <section className="relative min-h-[100svh] pt-24 md:pt-32 pb-14 md:pb-20 overflow-hidden flex items-center">
        <Image
          src="/suc.jpg"
          alt="Abogados especializados en sucesiones y derecho inmobiliario"
          fill
          className="absolute top-0 left-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B3C5D]/10 via-[#F5F7FA]/90 to-[#F5F7FA]" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#F5F7FA] to-transparent" />
        <div className="relative z-10 container mx-auto px-4 w-full">
          <div className="max-w-5xl mx-auto">
            <div className="flex justify-center mb-6">
              <p className="text-xs md:text-sm font-semibold tracking-wide uppercase text-[#0B3C5D] border border-[#0B3C5D]/20 bg-white/80 rounded-full px-4 py-2">
                Sucesiones y derecho Inmobiliario
              </p>
            </div>

            <div className="text-center">
              <h1 className="font-sans text-4xl md:text-6xl font-bold text-[#0B3C5D] mb-4 text-balance">
                Abogado Derecho Inmobiliario y Sucesiones en Bahía Blanca
              </h1>
              <p className="text-xl md:text-2xl font-semibold text-[#1A1A1A] mb-6">
                Resolvé tu situación legal de forma rápida y segura
              </p>
              <p className="text-lg md:text-xl text-[#333333] leading-relaxed max-w-4xl mx-auto mb-10">
                ¿Tenés un problema con un inmueble o una sucesión y no sabés por dónde empezar? En MG Abogados te ayudamos a encontrar una solución clara, rápida y legalmente segura. Atención en Bahía Blanca y toda la Provincia de Buenos Aires, con gestión legal presencial y online.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  size="lg"
                  className="text-lg px-8 py-6 w-full sm:w-auto bg-[#0B3C5D] hover:bg-[#1E3A5F]"
                  asChild
                >
                  <a
                    href="https://wa.me/5492916482826?text=Hola%2C%20quiero%20consultar%20por%20sucesiones%20y%20derecho%20inmobiliario"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Consultar por WhatsApp
                  </a>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 w-full sm:w-auto border-2 border-[#0B3C5D] text-[#0B3C5D] hover:bg-[#0B3C5D]/5"
                  asChild
                >
                  <a href="tel:+542916482826" className="flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    Llamar ahora
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-sans text-3xl md:text-4xl font-bold text-[#0B3C5D] mb-10 text-center">Servicios principales</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="border-2 border-[#0B3C5D]/15">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Users className="w-7 h-7 text-[#0B3C5D]" />
                    <h3 className="font-sans text-2xl font-bold text-[#0B3C5D]">Sucesiones</h3>
                  </div>
                  <p className="text-[#333333] mb-5 leading-relaxed">
                    Acompañamiento en cada etapa de la sucesión con claridad, profesionalismo y humanidad.
                  </p>
                  <ul className="space-y-3">
                    {serviciosSucesiones.map((servicio) => (
                      <li key={servicio} className="flex items-start gap-3 text-[#1A1A1A]">
                        <CheckCircle className="w-5 h-5 text-[#0B3C5D] mt-0.5 shrink-0" />
                        <span>{servicio}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-[#0B3C5D]/15">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Home className="w-7 h-7 text-[#0B3C5D]" />
                    <h3 className="font-sans text-2xl font-bold text-[#0B3C5D]">Derecho Inmobiliario</h3>
                  </div>
                  <p className="text-[#333333] mb-5 leading-relaxed">
                    Asesoramiento, consultoría e intervención en negociaciones, ventas y litigios del sector inmobiliario urbano y rural.
                  </p>
                  <ul className="space-y-3">
                    {serviciosInmobiliarios.map((servicio) => (
                      <li key={servicio} className="flex items-start gap-3 text-[#1A1A1A]">
                        <CheckCircle className="w-5 h-5 text-[#0B3C5D] mt-0.5 shrink-0" />
                        <span>{servicio}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-[#F5F7FA]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0B3C5D]/10 mb-4">
              <Scale className="w-5 h-5 text-[#0B3C5D]" />
              <span className="text-sm font-semibold text-[#0B3C5D]">Por qué elegir este servicio</span>
            </div>
            <h2 className="font-sans text-3xl md:text-4xl font-bold text-[#0B3C5D] mb-8">Soluciones concretas, sin vueltas</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              {motivos.map((motivo) => (
                <div key={motivo} className="bg-white border border-[#0B3C5D]/10 rounded-lg p-5 flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#0B3C5D] mt-0.5 shrink-0" />
                  <p className="text-[#1A1A1A]">{motivo}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-sans text-3xl md:text-4xl font-bold text-[#0B3C5D] mb-4">Consultá tu caso hoy</h2>
              <p className="text-lg text-[#333333]">Sabemos que estos temas no pueden esperar. Completá el formulario y te respondemos a la brevedad.</p>
            </div>

            <Card className="border-2 border-[#0B3C5D]/15">
              <CardContent className="p-8">
                <WhatsAppForm
                  className="space-y-6"
                  phoneNumber="5492916482826"
                  phoneMap={{
                    gatti: "5492916482826",
                    mazzarini: "5492915041220",
                  }}
                  intro="Hola, me interesa consultar sobre Sucesiones y Derecho Inmobiliario"
                  fieldLabels={{
                    nombre: "Nombre",
                    email: "Email",
                    telefono: "Telefono",
                    abogado: "Abogado",
                    consulta: "Consulta",
                  }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="nombre" className="text-sm font-medium text-[#1A1A1A]">
                        Nombre y Apellido *
                      </label>
                      <Input id="nombre" name="nombre" type="text" placeholder="Juan Pérez" required className="h-12" />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="telefono" className="text-sm font-medium text-[#1A1A1A]">
                        Teléfono *
                      </label>
                      <Input id="telefono" name="telefono" type="tel" placeholder="291 400 0000" required className="h-12" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-[#1A1A1A]">
                      Email *
                    </label>
                    <Input id="email" name="email" type="email" placeholder="tu@email.com" required className="h-12" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="abogado" className="text-sm font-medium text-[#1A1A1A]">
                      Elegi con quien queres hablar *
                    </label>
                    <select
                      id="abogado"
                      name="abogado"
                      required
                      defaultValue=""
                      className="h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="" disabled>
                        Seleccionar abogado
                      </option>
                      <option value="gatti">Agustin Gatti</option>
                      <option value="mazzarini">Agustin Mazzarini</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="consulta" className="text-sm font-medium text-[#1A1A1A]">
                      Contanos tu caso *
                    </label>
                    <Textarea
                      id="consulta"
                      name="consulta"
                      placeholder="Describí brevemente tu situación sucesoria o inmobiliaria"
                      required
                      className="min-h-32"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full text-lg py-6 bg-[#0B3C5D] hover:bg-[#1E3A5F]">
                    Enviar por WhatsApp
                  </Button>

                  <p className="text-sm text-[#333333] text-center">Completá el formulario y te redirijiremos a WhatsApp</p>
                </WhatsAppForm>
              </CardContent>
            </Card>

           
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-[#F5F7FA]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="font-sans text-3xl md:text-4xl font-bold text-[#0B3C5D] mb-3">Opiniones de clientes</h2>
            <p className="text-[#333333] mb-8">Experiencias reales de personas que confiaron en nuestro estudio.</p>
            <TestimonialsCarousel items={opiniones} />
          </div>
        </div>
      </section>

      <section className="py-8 md:py-16 bg-white">
        <h2 className="font-sans text-3xl md:text-4xl font-bold text-[#0B3C5D] mb-6 text-center">Nuestro despacho</h2>
        <div className="container mx-auto mt-4 px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="w-full h-64 md:h-96 rounded-lg overflow-hidden border-2 border-[#0B3C5D]/20">
              <iframe
                title="Estudio Jurídico Mazzarini-Gatti - Map"
                src="https://www.google.com/maps?q=-38.7245635,-62.2670839&hl=es&z=17&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>

            <div className="flex flex-col justify-center gap-4">
              <div className="p-6 bg-[#F5F7FA] rounded-lg border border-[#0B3C5D]/15">
                <h3 className="font-sans text-xl font-bold text-[#0B3C5D] mb-2">Estudio Jurídico Mazzarini-Gatti</h3>
                <p className="text-sm text-[#333333] flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#0B3C5D]" />
                  Berutti 323, Bahía Blanca, Provincia de Buenos Aires
                </p>
                <p className="text-sm text-[#333333] mt-2">
                  Atención presencial y online. Matrícula en toda la provincia de Buenos Aires.
                </p>
              </div>

              <Button
                asChild
                className="w-full text-center px-6 py-4 text-lg font-semibold bg-[#0B3C5D] hover:bg-[#1E3A5F]"
              >
                <a
                  href="https://www.google.com.ar/maps/place/Estudio+Jur%C3%ADdico+Mazzarini-Gatti+y+asociados/@-38.7244721,-62.266976,3a,75y,90t/data=!3m8!1e2!3m6!1sCIABIhCMRr61mqmDih31BJ2nwD2_!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FAG0ilSyHCuMVaoIvC7pkKWP2jhG_wG-WSXkQdtU-Lgvyl0ccR4IKZJ3h_9edWHVjjIZ2FjEAjssPKbkwommUEapbMQ8zo0zdSbYYOLUfjpaMg-Od2FFEo81WVQJVJaRMAeUHTokg9QkMSubBQny0%3Dw86-h114-k-no!7i3024!8i4032!4m17!1m9!3m8!1s0x95edbddcdf1eb265:0x5c101d1aff154daa!2sEstudio+Jur%C3%ADdico+Mazzarini-Gatti+y+asociados!8m2!3d-38.7245635!4d-62.2670839!9m1!1b1!16s%2Fg%2F11zklwjsgc!3m6!1s0x95edbddcdf1eb265:0x5c101d1aff154daa!8m2!3d-38.7245635!4d-62.2670839!10e5!16s%2Fg%2F11zklwjsgc?hl=es&entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ver en Google Maps"
                >
                  Conocé nuestro despacho
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
