import {
  Scale,
  GraduationCap,
  Landmark,
  Plane,
  FileText,
  Briefcase,
} from "lucide-react";

const services = [
  {
    icon: Scale,
    title: "Traducción Certificada",
    description:
      "Documentos legales y oficiales avalados por Perito Traductor autorizado por el Poder Judicial.",
  },
  {
    icon: Landmark,
    title: "Documentos Legales",
    description:
      "Contratos, poderes notariales, sentencias, actas constitutivas y documentos jurídicos.",
  },
  {
    icon: GraduationCap,
    title: "Documentos Académicos",
    description:
      "Artículos científicos, tesis, abstracts, ensayos académicos y libros especializados.",
  },
  {
    icon: Briefcase,
    title: "Documentos Financieros",
    description:
      "Estados de cuenta, constancias fiscales, recibos, cheques, pagarés y documentos de inversión.",
  },
  {
    icon: Plane,
    title: "Trámites Migratorios",
    description:
      "Actas de nacimiento, pasaportes, visas, títulos profesionales, certificados y apostillas.",
  },
  {
    icon: FileText,
    title: "Documentos Técnicos",
    description:
      "Manuales, especificaciones técnicas, patentes y documentación especializada.",
  },
];

export function ServicesSection() {
  return (
    <section id="servicios" className="section-padding bg-section-gradient">
      <div className="container-custom">
        {/* Section header */}
        <div className="max-w-3xl mb-16">
          <span className="text-sm font-medium text-secondary uppercase tracking-widest">
            Servicios
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mt-4 mb-6">
            Servicios de Traducción Profesional
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Cada documento requiere un enfoque especializado. Ofrecemos traducción
            certificada con el rigor terminológico y la validez legal que sus
            trámites exigen.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 bg-card rounded-lg border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional note */}
        <div className="mt-12 p-6 bg-primary/5 rounded-lg border border-primary/10">
          <p className="text-center text-foreground">
            <span className="font-medium">Importante:</span> Todas las traducciones
            certificadas incluyen firma y sello del Perito Traductor, con validez
            ante autoridades judiciales y administrativas.
          </p>
        </div>
      </div>
    </section>
  );
}
