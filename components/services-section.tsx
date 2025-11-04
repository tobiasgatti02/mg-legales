import { Card, CardContent } from "@/components/ui/card"
import { Shield, FileText, Users, Clock } from "lucide-react"

const services = [
  {
    icon: Shield,
    title: "Amparos de Salud",
    description:
      "Defendemos tu derecho a recibir tratamientos, medicamentos y coberturas médicas negadas por obras sociales y prepagas.",
  },
  {
    icon: FileText,
    title: "Asesoramiento Integral",
    description:
      "Te guiamos en cada paso del proceso legal, explicándote tus derechos como paciente de forma clara y accesible.",
  },
  {
    icon: Users,
    title: "Representación Legal",
    description:
      "Actuamos en tu nombre ante obras sociales, prepagas y en instancias judiciales para garantizar tu acceso a la salud.",
  },
  {
    icon: Clock,
    title: "Respuesta Inmediata",
    description:
      "Entendemos la urgencia de los casos de salud. Brindamos consultas personalizadas; acompañamiento y seguimiento constante",
  },
]

export function ServicesSection() {
  return (
    <section id="servicios" className="py-8 md:py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-sans text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Soluciones legales especializadas para proteger tu derecho fundamental a la salud
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border border-border/50 hover:border-primary hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-primary/20">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-sans text-lg md:text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
