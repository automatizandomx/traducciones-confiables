import { Button } from "@/components/ui/button";
import { Mail, Phone, MessageCircle, ArrowRight } from "lucide-react";

export function ContactSection() {
  const whatsappNumber = "526142188439";
  const whatsappMessage = encodeURIComponent(
    "Hola, me gustaría solicitar una cotización para un servicio de traducción."
  );

  return (
    <section id="contacto" className="section-padding bg-card">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <span className="text-sm font-medium text-secondary uppercase tracking-widest">
              Contacto
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mt-4 mb-6">
              Solicite su Cotización
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Envíe su documento para recibir una cotización sin compromiso.
              Responderemos a la brevedad con los detalles del servicio.
            </p>
          </div>

          {/* Contact cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* WhatsApp */}
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 bg-secondary/5 rounded-lg border border-secondary/20 hover:border-secondary/40 hover:bg-secondary/10 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-7 h-7 text-secondary" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-1">
                    WhatsApp
                  </h3>
                  <p className="text-lg text-foreground font-medium mb-2">
                    614 218 8439
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Respuesta rápida • Envíe su documento
                  </p>
                </div>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:iv980402@gmail.com?subject=Solicitud de cotización"
              className="group p-8 bg-primary/5 rounded-lg border border-primary/20 hover:border-primary/40 hover:bg-primary/10 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-1">
                    Correo Electrónico
                  </h3>
                  <p className="text-lg text-foreground font-medium mb-2">
                    iv980402@gmail.com
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Para documentos extensos o múltiples archivos
                  </p>
                </div>
              </div>
            </a>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button
              asChild
              variant="default"
              size="xl"
              className="group"
            >
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5" />
                Cotizar por WhatsApp
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <p className="mt-4 text-sm text-muted-foreground">
              Sin compromiso • Respuesta en menos de 24 horas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
