import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-hero-gradient py-16">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-xl font-semibold text-primary-foreground mb-2">
              IR Translations
            </h3>
            <p className="text-sm text-primary-foreground/60 uppercase tracking-widest mb-4">
              Traducciones Iván Rodríguez
            </p>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Servicios profesionales de traducción certificada, interpretación
              y enseñanza de idiomas.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-primary-foreground mb-4">
              Servicios
            </h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>
                <a href="#servicios" className="hover:text-primary-foreground transition-colors">
                  Traducción Certificada
                </a>
              </li>
              <li>
                <a href="#interpretacion" className="hover:text-primary-foreground transition-colors">
                  Interpretación
                </a>
              </li>
              <li>
                <a href="#cursos" className="hover:text-primary-foreground transition-colors">
                  Cursos de Idiomas
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-primary-foreground mb-4">
              Contacto
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3 text-primary-foreground/70">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>614 218 8439</span>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/70">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a
                  href="mailto:iv980402@gmail.com"
                  className="hover:text-primary-foreground transition-colors"
                >
                  iv980402@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/70">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>Chihuahua, México</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {currentYear} IR Translations. Todos los derechos reservados.
            </p>
            <p className="text-sm text-primary-foreground/60">
              Perito Traductor Certificado
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
