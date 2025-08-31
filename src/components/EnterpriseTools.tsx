import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import enterpriseToolsImage from "@/assets/enterprise-tools.jpg";

const tools = [
  {
    category: "CRM & Sales",
    tools: ["Salesforce", "HubSpot", "Pipedrive", "Zoho CRM", "Monday.com"]
  },
  {
    category: "Communication",
    tools: ["Slack", "Microsoft Teams", "Discord", "Zoom", "Google Meet"]
  },
  {
    category: "Automation",
    tools: ["Zapier", "Make", "Power Automate", "IFTTT", "Integromat"]
  },
  {
    category: "Analytics",
    tools: ["Google Analytics", "Mixpanel", "Tableau", "Power BI", "Looker"]
  },
  {
    category: "Productivity",
    tools: ["Google Workspace", "Microsoft 365", "Notion", "Airtable", "Trello"]
  },
  {
    category: "E-commerce",
    tools: ["Shopify", "WooCommerce", "Magento", "BigCommerce", "Stripe"]
  }
];

const metrics = [
  { number: "500+", label: "Herramientas Integradas" },
  { number: "99.9%", label: "Uptime Garantizado" },
  { number: "24/7", label: "Soporte Técnico" },
  { number: "50%", label: "Reducción de Costos" }
];

export const EnterpriseTools = () => {
  return (
    <section id="herramientas" className="py-24 px-4 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-ai-secondary/10 text-ai-secondary border-ai-secondary/20">
            Integraciones Empresariales
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Conecta todas tus <span className="gradient-text">herramientas</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Integramos perfectamente con más de 500 herramientas empresariales para crear 
            un ecosistema automatizado y eficiente
          </p>
        </div>

        {/* Featured Integration Image */}
        <div className="mb-16">
          <Card className="glass-card p-8 group hover:shadow-glow transition-all duration-500">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold">Ecosistema Unificado</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Nuestros agentes de IA se integran seamlessly con tu stack tecnológico existente, 
                  eliminando silos de datos y creando workflows automatizados que aumentan la productividad.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {metrics.map((metric, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold gradient-text">{metric.number}</div>
                      <div className="text-sm text-muted-foreground">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img 
                  src={enterpriseToolsImage} 
                  alt="Enterprise Tools Integration" 
                  className="w-full h-80 object-cover rounded-xl shadow-card"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent rounded-xl" />
              </div>
            </div>
          </Card>
        </div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((category, index) => (
            <Card key={index} className="glass-card p-6 group hover:shadow-glow transition-all duration-500 hover:-translate-y-2">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-gradient-hero rounded-full animate-pulse-glow" />
                  <h3 className="text-lg font-bold group-hover:text-ai-primary transition-colors">
                    {category.category}
                  </h3>
                </div>
                
                <div className="space-y-2">
                  {category.tools.map((tool, toolIndex) => (
                    <div 
                      key={toolIndex} 
                      className="flex items-center justify-between p-2 rounded-lg bg-background/30 hover:bg-ai-primary/10 transition-colors"
                    >
                      <span className="text-sm text-muted-foreground">{tool}</span>
                      <div className="w-2 h-2 bg-ai-accent rounded-full" />
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">¿No ves tu herramienta?</h3>
            <p className="text-muted-foreground mb-6">
              Desarrollamos integraciones personalizadas para cualquier API o sistema empresarial
            </p>
            <button className="bg-gradient-hero text-white px-8 py-3 rounded-xl hover:shadow-glow transition-all duration-300 font-semibold">
              Solicitar Integración Custom
            </button>
          </Card>
        </div>
      </div>
    </section>
  );
};