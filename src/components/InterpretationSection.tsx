import { Mic, Users, Building2 } from "lucide-react";

const interpretationServices = [
  {
    icon: Mic,
    title: "Interpretación Simultánea",
    description:
      "Traducción en tiempo real para conferencias, seminarios y eventos de gran escala con equipo profesional.",
  },
  {
    icon: Users,
    title: "Eventos Académicos",
    description:
      "Congresos, defensas de tesis, presentaciones académicas y simposios internacionales.",
  },
  {
    icon: Building2,
    title: "Eventos Profesionales",
    description:
      "Reuniones corporativas, negociaciones comerciales, audiencias legales y capacitaciones.",
  },
];

export function InterpretationSection() {
  return (
    <section id="interpretacion" className="section-padding bg-card">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <span className="text-sm font-medium text-secondary uppercase tracking-widest">
              Interpretación
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mt-4 mb-6">
              Interpretación Profesional
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              La comunicación en tiempo real requiere precisión, fluidez y
              conocimiento especializado. Ofrecemos servicios de interpretación
              simultánea y consecutiva para eventos que exigen excelencia.
            </p>

            <div className="space-y-6">
              {interpretationServices.map((service) => (
                <div key={service.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual element */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg bg-hero-gradient overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <Mic className="w-16 h-16 text-primary-foreground/30 mx-auto mb-6" />
                  <p className="font-heading text-2xl text-primary-foreground font-medium">
                    "La interpretación es el puente entre culturas"
                  </p>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary/20 rounded-lg -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/10 rounded-lg -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
