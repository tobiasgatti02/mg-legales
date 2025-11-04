import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "¿Qué es un amparo de salud?",
    answer:
      "El amparo de salud es una acción judicial rápida y efectiva que permite exigir a las obras sociales, prepagas o al Estado el cumplimiento de tus derechos cuando niegan o demoran tratamientos, medicamentos, cirugías o prestaciones médicas esenciales en general. Su objetivo es garantizar tu acceso a la salud en tiempo y forma, protegiendo un derecho fundamental reconocido por la Constitución y la ley.",
  },
  {
    question: "¿Quién puede iniciar un amparo?",
    answer:
      "Toda persona a la que se le niegue o retrase una cobertura médica esencial, o sus familiares cuando sea necesario.",
  },
  {
    question: "¿Qué documentación necesitás para empezar?",
    answer:
      "Solo algunos documentos básicos: credencial del afiliado, DNI, orden médica del profesional que indicó la prestación, certificado de discapacidad (en caso de corresponder), historia clínica y toda otra documentación médica relacionada a la prestación solicitada.",
  },
  {
    question: "¿Qué prestaciones pueden lograrse con un amparo de salud?",
    answer:
      "El rango de prestaciones es muy amplio, pero podemos enumerar algunas: cirugías urgentes, estudios complejos, medicamentos oncológicos, prótesis importadas, acompañante terapéutico, cuidadores domiciliarios, profesionales interdisciplinarios en general, traslados, internaciones, entre otros.",
  },
  {
    question: "¿Qué pasa si la obra social ya me negó por escrito la cobertura?",
    answer:
      "Esa negativa es una prueba muy importante. Con ella y la prescripción médica, se puede presentar el amparo de forma inmediata. Cuanto antes actúes, más rápido se obtiene la orden judicial para que te brinden la cobertura.",
  },
]

export function FAQSection() {
  return (
    <section id="preguntas" className="py-20 md:py-10 bg-background">
        <div className="max-w-3xl mx-auto text-center mb-16">


        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 transition-all duration-300 hover:border-primary data-[state=open]:border-primary data-[state=open]:shadow-md last:border-b"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
