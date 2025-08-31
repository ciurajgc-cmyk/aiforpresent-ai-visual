import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Target, Lightbulb, Award, TrendingUp } from "lucide-react";

const achievements = [
  { number: "200+", label: "Proyectos Completados" },
  { number: "95%", label: "Satisfacción del Cliente" },
  { number: "150+", label: "Empresas Transformadas" },
  { number: "5 años", label: "Experiencia en IA" }
];

const values = [
  {
    icon: Target,
    title: "Enfoque Estratégico",
    description: "Analizamos profundamente tu negocio para crear soluciones de IA que generen impacto real."
  },
  {
    icon: Lightbulb,
    title: "Innovación Constante",
    description: "Utilizamos las últimas tecnologías de IA y machine learning para mantenerte a la vanguardia."
  },
  {
    icon: Users,
    title: "Colaboración Cercana",
    description: "Trabajamos codo a codo con tu equipo para asegurar una implementación exitosa."
  },
  {
    icon: Award,
    title: "Calidad Garantizada",
    description: "Nuestros estándares de calidad y metodologías probadas aseguran resultados excepcionales."
  }
];

const benefits = [
  "Reducción del 70% en tareas manuales",
  "Incremento del 40% en productividad",
  "ROI positivo en menos de 6 meses",
  "Integración perfecta con tu stack actual",
  "Soporte 24/7 y actualizaciones continuas",
  "Escalabilidad automática según demanda"
];

export const About = () => {
  return (
    <section id="about" className="py-24 px-4 bg-gradient-to-b from-background/50 to-background">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-ai-glow/10 text-ai-glow border-ai-glow/20">
            Sobre Nosotros
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Transformamos empresas con <span className="gradient-text">IA inteligente</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Somos especialistas en automatización empresarial e inteligencia artificial. 
            Creamos soluciones que revolucionan la forma en que las empresas operan y crecen.
          </p>
        </div>

        {/* Mission Statement */}
        <Card className="glass-card p-8 md:p-12 mb-16 text-center">
          <h3 className="text-3xl font-bold mb-6">Nuestra Misión</h3>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Democratizar el acceso a la inteligencia artificial para empresas de todos los tamaños, 
            creando <span className="text-ai-primary font-semibold">agentes autónomos</span> y 
            <span className="text-ai-secondary font-semibold"> sistemas de automatización</span> que 
            no solo optimizan procesos, sino que reimaginan completamente la forma de hacer negocios.
          </p>
        </Card>

        {/* Achievements */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <Card key={index} className="glass-card p-6 text-center group hover:shadow-glow transition-all duration-500">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2 group-hover:animate-pulse-glow">
                {achievement.number}
              </div>
              <div className="text-sm text-muted-foreground">{achievement.label}</div>
            </Card>
          ))}
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <Card key={index} className="glass-card p-6 group hover:shadow-glow transition-all duration-500 hover:-translate-y-2">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center flex-shrink-0 group-hover:animate-pulse-glow">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-ai-primary transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Benefits Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold">
              ¿Por qué elegir <span className="gradient-text">AIFORPRESENT</span>?
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              No somos solo otro proveedor de tecnología. Somos tu socio estratégico en la 
              transformación digital, comprometidos con tu éxito a largo plazo.
            </p>
            
            <div className="grid gap-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-ai-accent flex-shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <Card className="glass-card p-8 bg-gradient-to-br from-ai-primary/5 to-ai-secondary/5 border-ai-primary/20">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <TrendingUp className="w-8 h-8 text-ai-primary" />
                <h4 className="text-2xl font-bold">Resultados Comprobados</h4>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Tiempo de implementación promedio</span>
                  <span className="font-bold text-ai-primary">30 días</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Reducción de costos operativos</span>
                  <span className="font-bold text-ai-secondary">45%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Incremento en eficiencia</span>
                  <span className="font-bold text-ai-accent">65%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Satisfacción del cliente</span>
                  <span className="font-bold gradient-text">98%</span>
                </div>
              </div>

              <div className="pt-4 border-t border-ai-primary/20">
                <p className="text-sm text-muted-foreground italic">
                  "La implementación de agentes de IA de AIFORPRESENT transformó completamente 
                  nuestros procesos. Ahora somos 3x más eficientes."
                </p>
                <p className="text-xs text-ai-primary mt-2">— CEO, Empresa Fortune 500</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};