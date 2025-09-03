import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { EnterpriseTools } from "@/components/EnterpriseTools";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";

const alforpresentLogo = "/lovable-uploads/db899d63-c1e6-4018-a90a-485cf3e07700.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <EnterpriseTools />
        <About />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <img 
              src={alforpresentLogo}
              alt="Alforpresent - AI Agents & Intelligent Automation" 
              className="h-24 w-auto"
            />
          </div>
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} AIFORPRESENT. Transformando empresas con IA inteligente.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
