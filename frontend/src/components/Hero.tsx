
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-secondary/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 z-10">
        <div className="text-center animate-fade-in">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mb-6 shadow-lg animate-scale-in">
              <span className="text-4xl font-bold text-primary-foreground">KUR.J</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
            kur.J Developer
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
            Full-Stack Web Developer & Tech Assistant
          </p>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Crafting beautiful, functional websites and providing comprehensive tech solutions. 
            Let's bring your digital vision to life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8 py-6 hover-scale">
              View My Work
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 hover-scale">
              Get In Touch
            </Button>
          </div>
          
          <div className="flex justify-center gap-6 mb-12">
            <Button variant="ghost" size="icon" className="w-12 h-12 hover-scale">
              <Github className="w-6 h-6" />
            </Button>
            <Button variant="ghost" size="icon" className="w-12 h-12 hover-scale">
              <Linkedin className="w-6 h-6" />
            </Button>
            <Button variant="ghost" size="icon" className="w-12 h-12 hover-scale">
              <Mail className="w-6 h-6" />
            </Button>
          </div>
          
          <div className="animate-bounce">
            <ArrowDown className="w-8 h-8 mx-auto text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
