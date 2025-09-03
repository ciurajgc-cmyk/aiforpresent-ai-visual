import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { EnterpriseTools } from "@/components/EnterpriseTools";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";

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
          <div className="flex items-center justify-center space-x-2 mb-4">
            <img 
              src="/lovable-uploads/2324b808-b90e-460c-a946-702d276294b9.png" 
              alt="AIforpresent.com Logo" 
              className="h-40 w-auto"
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
