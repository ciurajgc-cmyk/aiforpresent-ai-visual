import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useContactInfo } from "@/hooks/useContactInfo";

export const Contact = () => {
  const { contactInfo, loading, error, refetch } = useContactInfo();

  return (
    <section id="contacto" className="py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-ai-accent/10 text-ai-accent border-ai-accent/20">
            Contacto
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¿Listo para <span className="gradient-text">automatizar</span> tu negocio?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conversemos sobre cómo la IA puede transformar tu empresa. Consulta gratuita incluida.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="glass-card p-8 space-y-6">
            <h3 className="text-2xl font-bold">Envíanos un mensaje</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-muted-foreground">Nombre</label>
                <Input 
                  placeholder="Tu nombre" 
                  className="mt-1 bg-background/50 border-ai-primary/20 focus:border-ai-primary"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Empresa</label>
                <Input 
                  placeholder="Nombre de tu empresa" 
                  className="mt-1 bg-background/50 border-ai-primary/20 focus:border-ai-primary"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-muted-foreground">Email</label>
              <Input 
                type="email" 
                placeholder="tu@empresa.com" 
                className="mt-1 bg-background/50 border-ai-primary/20 focus:border-ai-primary"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-muted-foreground">¿Cómo podemos ayudarte?</label>
              <Textarea 
                placeholder="Cuéntanos sobre tu proyecto y necesidades de automatización..."
                className="mt-1 min-h-[120px] bg-background/50 border-ai-primary/20 focus:border-ai-primary"
              />
            </div>

            <Button className="w-full bg-gradient-hero text-white py-6 text-lg hover:shadow-glow transition-all duration-300">
              Enviar Mensaje
            </Button>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="glass-card p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold flex items-center">
                  <div className="w-2 h-2 bg-ai-primary rounded-full mr-3" />
                  Información de Contacto
                </h3>
                <Button 
                  onClick={refetch}
                  variant="ghost" 
                  size="sm"
                  className="text-ai-primary hover:text-ai-primary/80"
                  disabled={loading}
                >
                  {loading ? "Cargando..." : "Recargar"}
                </Button>
              </div>
              
              {loading ? (
                <div className="space-y-4">
                  <div className="h-4 bg-muted/20 rounded animate-pulse" />
                  <div className="h-4 bg-muted/20 rounded animate-pulse" />
                  <div className="h-4 bg-muted/20 rounded animate-pulse" />
                </div>
              ) : error ? (
                <div className="text-red-400 text-sm">{error}</div>
              ) : contactInfo ? (
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-ai-primary mt-0.5" />
                    <div>
                      <div className="font-medium">Teléfono</div>
                      <div className="text-muted-foreground">{contactInfo.telefono}</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-ai-primary mt-0.5" />
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-muted-foreground">{contactInfo.email}</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-ai-primary mt-0.5" />
                    <div>
                      <div className="font-medium">Dirección</div>
                      <div className="text-muted-foreground">{contactInfo.direccion}</div>
                    </div>
                  </div>
                </div>
              ) : null}
            </Card>

            <Card className="glass-card p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Clock className="w-5 h-5 text-ai-secondary mr-3" />
                Horarios de Atención
              </h3>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex justify-between">
                  <span>Lunes - Viernes</span>
                  <span>9:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábados</span>
                  <span>10:00 - 14:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingos</span>
                  <span>Cerrado</span>
                </div>
              </div>
            </Card>

            <Card className="glass-card p-6 bg-gradient-to-r from-ai-primary/10 to-ai-secondary/10 border-ai-primary/20">
              <h3 className="text-xl font-bold mb-2">Consulta Gratuita</h3>
              <p className="text-muted-foreground text-sm mb-4">
                ¿Necesitas hablar con un experto? Agenda una llamada gratuita de 30 minutos.
              </p>
              <Button variant="outline" className="w-full border-ai-primary/50 text-ai-primary hover:bg-ai-primary/10">
                Agendar Llamada
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};