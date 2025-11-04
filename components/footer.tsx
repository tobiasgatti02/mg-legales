import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-accent text-accent-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 border-2 border-accent-foreground flex items-center justify-center">
                <span className="font-sans text-xl font-semibold">MG</span>
              </div>
              <div>
                <div className="font-sans text-lg font-semibold leading-tight">Mazzarini & Gatti</div>
                <div className="text-xs tracking-wider opacity-80">AMPAROS DE SALUD</div>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Defendemos tu derecho a la salud con profesionalismo y dedicación.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#servicios" className="opacity-80 hover:opacity-100 transition-opacity">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="#nosotros" className="opacity-80 hover:opacity-100 transition-opacity">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="opacity-80 hover:opacity-100 transition-opacity">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>+54 9 291 648-2826 (Agustín Gatti)</li>
              <li>+54 9 2915 04-1220 (Agustín Mazzarini)</li>
              <li>estudiomglegales@gmail.com</li>
              <li>Berutti 323, Bahia Blanca</li>
              <li>25 de mayo 243, Tornquist</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-accent-foreground/20 pt-8 text-center text-sm opacity-80">
          <p>&copy; {currentYear} Mazzarini & Gatti - Estudio Jurídico. Todos los derechos reservados.</p>
        </div>
        <div className=" pt-4 text-center text-sm opacity-80 mt-2">
                    <p>Página web desarrollada por <Link className="underline" href={"https://www.linkedin.com/in/tobias-gatti-610a83170/"}> Tobías Gatti</Link></p>

        </div>
      </div>
    </footer>
  )
}
