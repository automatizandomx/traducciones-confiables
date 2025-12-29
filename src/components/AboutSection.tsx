import { Award, Shield, Target, BookCheck } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Autorización Oficial",
    description:
      "Perito Traductor Certificado, autorizado por los Órganos del Poder Judicial de la Federación y del Poder Judicial Estatal.",
  },
  {
    icon: Shield,
    title: "Ética Profesional",
    description:
      "Compromiso inquebrantable con la confidencialidad, la imparcialidad y la integridad en cada proyecto.",
  },
  {
    icon: Target,
    title: "Precisión Terminológica",
    description:
      "Dominio de la terminología especializada en ámbitos legales, académicos, técnicos y comerciales.",
  },
  {
    icon: BookCheck,
    title: "Fidelidad al Original",
    description:
      "Respeto absoluto por el sentido, el tono y la intención del documento original.",
  },
];

export function AboutSection() {
  return (
    <section id="nosotros" className="section-padding bg-section-gradient">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Main content */}
          <div>
            <span className="text-sm font-medium text-secondary uppercase tracking-widest">
              Trayectoria
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mt-4 mb-6">
              Sobre Nosotros
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                <strong className="text-foreground">IR Translations</strong> es
                una empresa de servicios lingüísticos dirigida por un Perito
                Traductor Certificado con más de 20 años de experiencia en el
                campo de la traducción profesional.
              </p>
              <p>
                La traducción certificada no es simplemente reemplazar palabras
                de un idioma a otro. Es un proceso que requiere comprensión
                profunda del contexto, análisis riguroso de la terminología y
                plena consciencia de la responsabilidad legal y académica que
                cada documento conlleva.
              </p>
              <p>
                Nuestra especialización abarca documentos legales, académicos,
                técnicos, financieros y comerciales, siempre con el más alto
                estándar de calidad y el cumplimiento de los requisitos
                establecidos por las autoridades correspondientes.
              </p>
            </div>

            {/* Experience badge */}
            <div className="mt-10 inline-flex items-center gap-4 p-4 bg-card rounded-lg border border-border">
              <div className="text-center px-4 border-r border-border">
                <p className="font-heading text-4xl font-bold text-primary">20+</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">
                  Años
                </p>
              </div>
              <p className="text-sm text-foreground font-medium max-w-[200px]">
                Experiencia profesional en traducción e interpretación
              </p>
            </div>
          </div>

          {/* Values grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-6 bg-card rounded-lg border border-border"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
