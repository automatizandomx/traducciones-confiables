import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center bg-hero-gradient overflow-hidden"
    >
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container-custom relative z-10 pt-28 pb-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-secondary" />
            <span className="text-sm text-primary-foreground/90 font-medium">
              Perito Traductor Certificado
            </span>
          </div>

          {/* Main heading */}
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-primary-foreground leading-[1.1] mb-6 animate-fade-in-up">
            Traducción certificada con
            <span className="block mt-2 text-secondary">precisión y rigor</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-primary-foreground/80 leading-relaxed max-w-2xl mb-10 animate-fade-in-up delay-200">
            Más de 20 años de experiencia en traducción legal, académica y técnica. 
            Cada palabra cuenta. Cada documento importa.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
            <Button asChild variant="hero" size="xl">
              <a href="#contacto" className="group">
                Solicitar Cotización
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button asChild variant="hero-outline" size="xl">
              <a href="#servicios">Conocer Servicios</a>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 pt-8 border-t border-primary-foreground/20 animate-fade-in delay-500">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <p className="text-3xl font-heading font-semibold text-primary-foreground">
                  20+
                </p>
                <p className="text-sm text-primary-foreground/60 mt-1">
                  Años de experiencia
                </p>
              </div>
              <div>
                <p className="text-3xl font-heading font-semibold text-primary-foreground">
                  Legal
                </p>
                <p className="text-sm text-primary-foreground/60 mt-1">
                  Autorización judicial
                </p>
              </div>
              <div>
                <p className="text-3xl font-heading font-semibold text-primary-foreground">
                  100%
                </p>
                <p className="text-sm text-primary-foreground/60 mt-1">
                  Confidencialidad
                </p>
              </div>
              <div>
                <p className="text-3xl font-heading font-semibold text-primary-foreground">
                  EN/ES
                </p>
                <p className="text-sm text-primary-foreground/60 mt-1">
                  Inglés - Español
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
