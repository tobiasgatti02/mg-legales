"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  const navBg = isScrolled ? "bg-background/95 backdrop-blur-sm border-b border-border" : "bg-transparent"
  const navClassName = "fixed top-0 left-0 right-0 z-50 transition-all duration-300 " + navBg

  return (
    <nav className={navClassName}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 border-2 border-primary flex items-center justify-center transition-all duration-300 hover:bg-primary/10">
              <span className="text-primary font-sans text-xl md:text-2xl font-semibold">MG</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-sans text-lg md:text-xl font-semibold text-foreground leading-tight">Mazzarini & Gatti</div>
              <div className="text-xs md:text-sm text-muted-foreground tracking-wider">AMPAROS DE SALUD</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Button
              asChild
              className="relative inline-flex items-center gap-2 text-sm font-semibold text-white hover:opacity-95 transition-all"
              style={{ backgroundColor: "text-primary", padding: "0.5rem 0.75rem" }}
            >
              <Link href="/amparos-de-salud" aria-label="Amparos de Salud">
                Amparos de Salud
                <span className="absolute -top-2 -right-2 flex h-5 w-5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-5 w-5 bg-green-300"></span>
                </span>
              </Link>
            </Button>

            <Link href="/otros-servicios" className="text-sm text-foreground hover:text-primary transition-colors">
              Otros Servicios
            </Link>

            <button onClick={() => scrollToSection("servicios")} className="text-sm text-foreground hover:text-primary transition-colors">
              Servicios
            </button>

            <button onClick={() => scrollToSection("nosotros")} className="text-sm text-foreground hover:text-primary transition-colors">
              Nosotros
            </button>

            <Button onClick={() => scrollToSection("contacto")} className="bg-accent text-accent-foreground hover:bg-accent/90">
              Contactános
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 text-foreground" aria-label="Toggle menu">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-background">
            <div className="flex flex-col gap-4">
              <Button
                asChild
                className="w-full text-left px-4 py-2 font-semibold text-white inline-flex items-center gap-2 justify-between"
                style={{ backgroundColor: "oklch(0.565 0.138 180.723)" }}
              >
                <Link href="/amparos-de-salud" onClick={() => setIsMobileMenuOpen(false)} aria-label="Amparos de Salud">
                  <span>Amparos de Salud</span>
                  <span className="inline-flex h-2 w-2 rounded-full bg-green-500" />
                </Link>
              </Button>

              <Link href="/otros-servicios" className="text-left px-4 py-2 text-foreground hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                Otros Servicios
              </Link>

              <button onClick={() => { scrollToSection("servicios") }} className="text-left px-4 py-2 text-foreground hover:text-primary transition-colors">
                Servicios
              </button>

              <button onClick={() => { scrollToSection("nosotros") }} className="text-left px-4 py-2 text-foreground hover:text-primary transition-colors">
                Nosotros
              </button>

              <button onClick={() => { scrollToSection("contacto") }} className="text-left px-4 py-2 text-foreground hover:text-primary transition-colors">
                Contacto
              </button>

              <div className="px-4">
                <Button onClick={() => scrollToSection("contacto")} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  Contactános
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>

  )
}

