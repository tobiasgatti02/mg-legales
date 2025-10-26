import { CheckCircle2 } from "lucide-react"
import Image from "next/image"
const features = [
  "Atención personalizada por los Dres. Mazzarini y Gatti",
]

export function AboutSection() {
  return (
    <section id="nosotros" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
          {/* Image */}
          <div className="relative">
          <Image
            src="/abogados.jpeg"
            alt="Oficina legal"
            width={600}
            height={400}
            className="w-full h-[50rem] object-cover object-top rounded-lg object-bottom"
          />

           
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-primary rounded-lg -z-10" />
          </div>

          {/* Content */}
          <div>
            <h2 className="font-sans text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Comprometidos con tu salud y bienestar
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Los Dres. Agustín Mazzarini y Agustín Gatti lideran un estudio jurídico especializado en la defensa del
              derecho a la salud.
            </p>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 transition-all duration-300 hover:translate-x-2">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Nuestro equipo está preparado para brindarte el mejor asesoramiento legal y acompañarte en cada paso del
              proceso hasta lograr el resultado que buscas.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
