"use client"

import { CheckCircle2 } from "lucide-react"
import Image from "next/image"
import { FAQSection } from "./faq-section"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
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
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Nuestro equipo está preparado para brindarte el mejor asesoramiento legal y acompañarte en cada paso del
              proceso hasta lograr el resultado que buscas.
            </p>

            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem 
                value="reclamar"
                className="border border-border rounded-lg px-6 transition-all duration-300 hover:border-primary data-[state=open]:border-primary data-[state=open]:shadow-md last:border-b"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-5">
                  ¿Qué podés reclamar con un Amparo de Salud?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Medicación de alto costo</li>
                    <li>Estudios médicos (resonancias, análisis complejos, etc)</li>
                    <li>Cirugías Urgentes, intervenciones demoradas</li>
                    <li>Psicología, fonoaudiología, kinesiología, Terapia Ocupacional</li>
                    <li>Acompañante Terapéutico (AT)</li>
                    <li>Prótesis, audífonos, sillas de ruedas e insumos</li>
                    <li>Internación y atención domiciliaria</li>
                    <li>Tratamientos de fertilización</li>
                    <li>Traslados</li>
                    <li>Otro tipo de prestaciones</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="porque"
                className="border border-border rounded-lg px-6 transition-all duration-300 hover:border-primary data-[state=open]:border-primary data-[state=open]:shadow-md last:border-b"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-5">
                  ¿Por qué iniciar un Amparo de Salud?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Respuestas judiciales rápidas</li>
                    <li>Medidas cautelares que ordenan la cobertura en días</li>
                    <li>Alto nivel de efectividad</li>
                    <li>Presentación completamente gestionada por profesionales</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="como"
                className="border border-border rounded-lg px-6 transition-all duration-300 hover:border-primary data-[state=open]:border-primary data-[state=open]:shadow-md last:border-b"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-5">
                  ¿Cómo trabajamos?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Analizamos tu caso y la viabilidad en una entrevista personal</li>
                    <li>Reunimos la prescripción y documentación médica</li>
                    <li>Redactamos y enviamos nota o carta documento a la Obra Social o Prepaga</li>
                    <li>Presentamos la demanda de Amparo de Salud</li>
                    <li>Solicitamos una Medida Cautelar Urgente</li>
                    <li>Acompañamos todo el proceso hasta la cobertura efectiva</li>
                  </ol>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="cuando"
                className="border border-border rounded-lg px-6 transition-all duration-300 hover:border-primary data-[state=open]:border-primary data-[state=open]:shadow-md last:border-b"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-5">
                  ¿Cuándo corresponde un amparo?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Cuando te rechazan una prestación médica</li>
                    <li>Cuando no hay respuestas de parte de la Obra Social o Prepaga</li>
                    <li>Cuando tu médico tratante indica algo y la Obra social no lo cubre</li>
                    <li>Cuando está en riesgo tu salud o calidad de vida y necesitás una respuesta urgente</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
