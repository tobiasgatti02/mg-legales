import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  const whatsappNumber = "5492916482826"; // Reemplaza con tu número real
  const whatsappMessage = encodeURIComponent(
    "Hola, me gustaría obtener más información sobre sus servicios"
  );

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 md:pt-20 bg-background">
      <Image
        src="/salud.jpg"
        alt="Amparos de salud"
        fill
        className="absolute top-0 left-0 w-full h-full object-cover opacity-10 z-10"
      />
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full transition-all duration-300 hover:bg-primary/20">
            <span className="text-sm text-primary font-medium">
              Especialistas en Amparo de Salud
            </span>
          </div>

          <h1 className="font-sans text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance leading-tight">
            Defendemos tu derecho a la salud
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto text-pretty leading-relaxed">
            Asesoramiento legal especializado en amparos de salud. Protegemos
            tus derechos con profesionalismo, dedicación y resultados
            comprobados.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">


            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:scale-105 text-base px-8 py-6 w-full sm:w-auto bg-transparent transition-all duration-300"
              asChild
            >
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
