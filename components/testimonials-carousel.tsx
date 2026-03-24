"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

type Testimonial = {
  name: string
  date: string
  text: string
}

type TestimonialsCarouselProps = {
  items: Testimonial[]
}

export function TestimonialsCarousel({ items }: TestimonialsCarouselProps) {
  const [current, setCurrent] = useState(0)

  const prev = () => {
    setCurrent((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1))
  }

  const next = () => {
    setCurrent((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1))
  }

  if (items.length === 0) {
    return null
  }

  const item = items[current]

  return (
    <div className="w-full max-w-3xl mx-auto">
      <Card className="border-2 border-sky-900/20 bg-white">
        <CardContent className="p-6 md:p-8">
          <div className="flex items-center gap-1 mb-3" aria-label="Calificación 5 estrellas">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
            ))}
          </div>

          <p className="text-base md:text-lg text-foreground leading-relaxed mb-4">{item.text}</p>

          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-foreground">{item.name}</p>
              <p className="text-sm text-muted-foreground">{item.date}</p>
            </div>

            <div className="flex items-center gap-2">
              <Button
                type="button"
                variant="outline"
                size="icon"
                className="h-9 w-9"
                onClick={prev}
                aria-label="Ver opinión anterior"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                type="button"
                variant="outline"
                size="icon"
                className="h-9 w-9"
                onClick={next}
                aria-label="Ver siguiente opinión"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2">
            {items.map((_, i) => (
              <button
                key={i}
                type="button"
                className={
                  "h-2.5 rounded-full transition-all " +
                  (i === current ? "w-6 bg-sky-900" : "w-2.5 bg-sky-900/30")
                }
                onClick={() => setCurrent(i)}
                aria-label={`Ir a la opinión ${i + 1}`}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
