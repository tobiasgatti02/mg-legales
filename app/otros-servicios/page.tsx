import { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Briefcase, Users, Scale, Heart, ArrowRight, Shield } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Otros Servicios Legales — MG Abogados Bahía Blanca",
  description: "Accidentes de Trabajo, Sucesiones, Derecho Laboral y Familia. Asesoramiento integral en MG Legales, Bahía Blanca.",
  openGraph: {
    title: "Otros Servicios Legales — MG Abogados",
    description: "Accidentes de Trabajo, Sucesiones, Derecho Laboral y Familia. Abogados en Bahía Blanca.",
    url: "https://www.mglegales.com/otros-servicios",
  },
}

export default function OtrosServiciosPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-12 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Scale className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-primary">Asesoramiento Integral</span>
            </div>
            <h1 className="font-sans text-3xl md:text-5xl font-bold text-foreground mb-4">Otros Servicios Legales en Bahía Blanca</h1>
            <p className="text-lg text-muted-foreground">Además de nuestra especialidad en Amparos de Salud, brindamos soluciones legales completas en diversas áreas del derecho.</p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* ART */}
            <Card className="border-2 hover:border-primary hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Briefcase className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-sans text-xl font-bold text-foreground mb-3">⚖️ Accidentes de Trabajo (ART)</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Asesoramos y representamos a trabajadores que sufrieron accidentes laborales o enfermedades profesionales en Bahía Blanca.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        Rechazos de ART y determinación de incapacidad
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        Trámites ante SRT y juicios laborales
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        Indemnizaciones por accidentes de trabajo
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Sucesiones */}
            <Card className="border-2 hover:border-primary hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-sans text-xl font-bold text-foreground mb-3">⚖️ Sucesiones</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Acompañamos todo el proceso sucesorio para que la transmisión de bienes se realice sin complicaciones.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        Inicio de sucesiones y declaratoria de herederos
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        Administración de la herencia
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        Acuerdos familiares y partición de bienes
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Laboral */}
            <Card className="border-2 hover:border-primary hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Scale className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-sans text-xl font-bold text-foreground mb-3">⚖️ Derecho Laboral</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Defendemos los derechos de trabajadores frente a situaciones laborales injustas en Bahía Blanca.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        Despidos y diferencias salariales
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        Registración laboral y trabajo en negro
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        Acoso laboral y reclamos por incumplimientos
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Familia */}
            <Card className="border-2 hover:border-primary hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Heart className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-sans text-xl font-bold text-foreground mb-3">⚖️ Familia</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Brindamos asesoramiento humano y profesional en temas sensibles del derecho de familia.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        Cuotas alimentarias y régimen de comunicación
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        Divorcios y responsabilidad parental
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        Violencia familiar y homologaciones
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="font-sans text-2xl md:text-3xl font-bold text-foreground mb-4">
              Trabajamos con seriedad y compromiso
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              En MG Legales, cada asunto se aborda con un enfoque claro orientado a resolver el problema de manera eficiente y efectiva.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/amparos-de-salud">
                  Ver Amparos de Salud
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://wa.me/5492916482826?text=Hola%2C%20necesito%20asesoramiento%20legal">
                  Consultar por WhatsApp
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
