import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-ai-agency.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="AI Agency Hero" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
            <span className="gradient-text">AI</span>
            <span className="text-foreground"> FOR </span>
            <span className="gradient-text">PRESENT</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Agencia especializada en <span className="text-ai-accent font-semibold">agentes de IA</span> y 
            <span className="text-ai-secondary font-semibold"> automatismos inteligentes</span> con 
            integración completa de herramientas empresariales
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="bg-gradient-hero text-white px-8 py-6 text-lg font-semibold rounded-xl hover:shadow-glow transition-all duration-300 animate-pulse-glow"
            >
              Descubre Nuestros Servicios
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-ai-primary/50 text-foreground hover:bg-ai-primary/10 px-8 py-6 text-lg rounded-xl backdrop-blur-sm"
            >
              Ver Demo
            </Button>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-ai-primary/20 rounded-full blur-xl animate-float" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-ai-secondary/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-20 w-16 h-16 bg-ai-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }} />
      </div>
    </section>
  );
};