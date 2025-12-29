import { BookOpen, Award, MessageCircle, Users, Monitor, Calendar } from "lucide-react";

const courses = [
  {
    title: "Inglés General",
    levels: "Niveles A1 – C2",
    description: "Programa completo de inglés para todos los niveles según el Marco Común Europeo.",
  },
  {
    title: "Preparación TOEFL",
    levels: "Intermedio – Avanzado",
    description: "Preparación especializada para el examen TOEFL con estrategias y práctica intensiva.",
  },
  {
    title: "Inglés para Jóvenes",
    levels: "A partir de 10 años",
    description: "Cursos diseñados para niños y adolescentes con metodología adaptada a su edad.",
  },
  {
    title: "Chino Mandarín",
    levels: "HSK 1 y HSK 2",
    description: "Introducción al chino mandarín con apoyo en inglés para hispanohablantes.",
  },
];

const features = [
  { icon: Monitor, text: "Modalidad presencial y en línea" },
  { icon: Calendar, text: "Horarios flexibles: entre semana y sábados" },
  { icon: MessageCircle, text: "Club de conversación incluido" },
  { icon: Users, text: "Grupos reducidos" },
];

export function CoursesSection() {
  return (
    <section id="cursos" className="section-padding bg-section-gradient">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-secondary uppercase tracking-widest">
            Academia
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mt-4 mb-6">
            Cursos de Idiomas
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Aprenda con un profesional certificado. Metodología estructurada,
            atención personalizada y enfoque en resultados reales.
          </p>
        </div>

        {/* Courses grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {courses.map((course) => (
            <div
              key={course.title}
              className="p-6 bg-card rounded-lg border border-border hover:shadow-card transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      {course.title}
                    </h3>
                    <span className="text-xs font-medium px-2 py-1 bg-secondary/10 text-secondary rounded">
                      {course.levels}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{course.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="p-8 bg-card rounded-lg border border-border">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div key={feature.text} className="flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
