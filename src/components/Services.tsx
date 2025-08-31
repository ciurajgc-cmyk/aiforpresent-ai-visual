import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bot, Zap, Cog, Users, TrendingUp, Shield } from "lucide-react";
import dashboardImage from "@/assets/dashboard-automation.jpg";
import chatbotImage from "@/assets/ai-chatbot.jpg";

const services = [
  {
    icon: Bot,
    title: "Agentes de IA Personalizados",
    description: "Desarrollamos agentes inteligentes adaptados a tu negocio que automatizan tareas complejas y mejoran la productividad.",
    features: ["Procesamiento de lenguaje natural", "Aprendizaje automático", "Integración API", "Análisis predictivo"]
  },
  {
    icon: Zap,
    title: "Automatización de Procesos",
    description: "Optimizamos workflows empresariales mediante automatización inteligente que reduce costos y aumenta la eficiencia.",
    features: ["Workflows automatizados", "Integración multicanal", "Monitoreo en tiempo real", "Escalabilidad empresarial"]
  },
  {
    icon: Cog,
    title: "Integración de Herramientas",
    description: "Conectamos todas tus herramientas empresariales en un ecosistema cohesivo y automatizado.",
    features: ["CRM Integration", "ERP Systems", "Marketing Tools", "Analytics Platforms"]
  },
  {
    icon: Users,
    title: "Consultoría Estratégica",
    description: "Asesoramos en la implementación de IA para transformar digitalmente tu organización.",
    features: ["Análisis de procesos", "Roadmap tecnológico", "Training de equipos", "Soporte continuo"]
  },
  {
    icon: TrendingUp,
    title: "Analytics & Insights",
    description: "Generamos insights actionables mediante análisis avanzado de datos y machine learning.",
    features: ["Business Intelligence", "Predictive Analytics", "Custom Dashboards", "Real-time Reporting"]
  },
  {
    icon: Shield,
    title: "Seguridad & Compliance",
    description: "Implementamos soluciones de IA con los más altos estándares de seguridad y cumplimiento normativo.",
    features: ["Data Protection", "GDPR Compliance", "Security Audits", "Risk Management"]
  }
];

export const Services = () => {
  return (
    <section id="servicios" className="py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-ai-primary/10 text-ai-primary border-ai-primary/20">
            Nuestros Servicios
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Soluciones de <span className="gradient-text">IA Empresarial</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transformamos tu negocio con tecnología de vanguardia y automatización inteligente
          </p>
        </div>

        {/* Featured Services with Images */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <Card className="glass-card p-8 group hover:shadow-glow transition-all duration-500">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Dashboards Inteligentes</h3>
              </div>
              <img 
                src={dashboardImage} 
                alt="AI Dashboard" 
                className="w-full h-48 object-cover rounded-xl"
              />
              <p className="text-muted-foreground">
                Dashboards personalizados que integran todas tus herramientas empresariales con IA predictiva.
              </p>
            </div>
          </Card>

          <Card className="glass-card p-8 group hover:shadow-glow transition-all duration-500">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Asistentes Virtuales</h3>
              </div>
              <img 
                src={chatbotImage} 
                alt="AI Chatbot" 
                className="w-full h-48 object-cover rounded-xl"
              />
              <p className="text-muted-foreground">
                Chatbots y asistentes virtuales que mejoran la experiencia del cliente 24/7.
              </p>
            </div>
          </Card>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="glass-card p-6 group hover:shadow-glow transition-all duration-500 hover:-translate-y-2"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center group-hover:animate-pulse-glow">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold group-hover:text-ai-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-xs text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-ai-accent rounded-full mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};