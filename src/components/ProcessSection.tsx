import {
  FileInput,
  Search,
  PenTool,
  CheckCircle2,
  Send,
  Lock,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: FileInput,
    title: "Recepción del Documento",
    description: "Recibimos su documento y evaluamos el alcance del proyecto.",
  },
  {
    number: "02",
    icon: Search,
    title: "Análisis Terminológico",
    description: "Estudio del contexto, terminología especializada y requisitos específicos.",
  },
  {
    number: "03",
    icon: PenTool,
    title: "Traducción Especializada",
    description: "Traducción profesional con atención a cada detalle y matiz del texto.",
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "Revisión Rigurosa",
    description: "Control de calidad exhaustivo para garantizar precisión y fidelidad.",
  },
  {
    number: "05",
    icon: Send,
    title: "Entrega Final",
    description: "Documento certificado con firma y sello del Perito Traductor.",
  },
];

export function ProcessSection() {
  return (
    <section id="proceso" className="section-padding bg-card">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-secondary uppercase tracking-widest">
            Metodología
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mt-4 mb-6">
            Nuestro Proceso de Trabajo
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Un proceso estructurado que garantiza calidad, precisión y cumplimiento
            de plazos en cada proyecto.
          </p>
        </div>

        {/* Process steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Step card */}
                <div className="text-center">
                  <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-background border-2 border-primary mb-6 z-10">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-xs font-medium text-secondary uppercase tracking-widest mb-2">
                    Paso {step.number}
                  </p>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Confidentiality note */}
        <div className="mt-16 p-8 bg-hero-gradient rounded-lg">
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary-foreground/10 flex items-center justify-center">
              <Lock className="w-8 h-8 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-heading text-xl font-semibold text-primary-foreground mb-2">
                Confidencialidad Garantizada
              </h3>
              <p className="text-primary-foreground/80">
                Todos los documentos son tratados con absoluta discreción y seguridad.
                La información de nuestros clientes está protegida en cada etapa del proceso.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
