import { CheckCircle2 } from "lucide-react"

const features = [
  "Más de 10 años de experiencia en amparo de salud",
  "Atención personalizada por los Dres. Mazzarini y Gatti",
  "Primera consulta completamente gratuita",
  "Resultados comprobados en casos complejos",
]

export function AboutSection() {
  return (
    <section id="nosotros" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden border-2 border-border transition-all duration-300 hover:border-primary">
              <img
                src="/elegant-law-office-with-scales-of-justice.jpg"
                alt="Oficina legal"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-primary rounded-lg -z-10" />
          </div>

          {/* Content */}
          <div>
            <h2 className="font-sans text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Comprometidos con tu salud y bienestar
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Los Dres. Agustín Mazzarini y Agustín Gatti lideran un estudio jurídico especializado en la defensa del
              derecho a la salud. Con amplia experiencia en amparos, hemos ayudado a cientos de personas a obtener la
              cobertura médica que necesitan y merecen.
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
