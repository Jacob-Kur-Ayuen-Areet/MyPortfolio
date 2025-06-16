import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Home = () => {
  const slideImages = [
    {
      src: "https://i.postimg.cc/WpnDTtmx/Whats-App-Image-2025-06-06-at-12-18-35-6d18a54a.jpg",
      alt: "Modern workspace with laptop",
      title: "Web Development"
    },
    {
      src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop",
      alt: "Technology and coding",
      title: "Tech Solutions"
    },
    {
      src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
      alt: "Circuit board technology",
      title: "Digital Innovation"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-secondary/10 relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left side - Image on desktop */}
            <div className="hidden lg:flex justify-center items-center animate-scale-in">
              <div className="relative">
                <div className="w-80 h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-primary/20">
                  <img 
                    src="https://i.postimg.cc/7ZWCTcf4/PNG.jpg"
                    alt="Kur.J Developer - Full Stack Web Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-secondary/20 rounded-full animate-pulse delay-1000"></div>
              </div>
            </div>

            {/* Mobile image instead of text */}
            <div className="mb-8 lg:hidden flex justify-center">
              <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg animate-scale-in">
                <img
                  src="https://i.postimg.cc/7ZWCTcf4/PNG.jpg"
                  alt="Kur.J Developer - Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right side - Content */}
            <div className="text-center lg:text-left animate-fade-in">
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                KUR.J Developer
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Full-Stack Web Developer & Tech Assistant
              </p>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
                Crafting beautiful, functional websites and providing comprehensive tech solutions. 
                Let's bring your digital vision to life.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <Button size="lg" className="text-lg px-8 py-6 hover-scale" asChild>
                  <Link to="/projects">View My Work</Link>
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 hover-scale" asChild>
                  <Link to="/contact">Get In Touch</Link>
                </Button>
              </div>
              
              <div className="flex justify-center lg:justify-start gap-6 mb-12">
                <a 
                  href="https://github.com/Jacob-Kur-Ayuen-Areet" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="GitHub"
                  title="View my GitHub"
                >
                  <Button variant="ghost" size="icon" className="w-12 h-12 hover-scale">
                    <Github className="w-6 h-6" />
                  </Button>
                </a>

                <a 
                  href="https://www.linkedin.com/in/kur-ayuen-areet-013106368/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="LinkedIn"
                >
                  <Button variant="ghost" size="icon" className="w-12 h-12 hover-scale">
                    <Linkedin className="w-6 h-6" />
                  </Button>
                </a>

                <a href="mailto:kurj@africau.edu" aria-label="Email kurj@africau.edu">
                  <Button variant="ghost" size="icon" className="w-12 h-12 hover-scale">
                    <Mail className="w-6 h-6" />
                  </Button>
                </a>
                
                <a href="mailto:kurjacobayuen@gmail.com" aria-label="Email kurjacobayuen@gmail.com">
                  <Button variant="ghost" size="icon" className="w-12 h-12 hover-scale">
                    <Mail className="w-6 h-6" />
                  </Button>
                </a>
              </div>

              <div className="animate-bounce lg:text-left">
                <ArrowDown className="w-8 h-8 mx-auto lg:mx-0 text-muted-foreground" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Carousel Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              My Work Portfolio
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore some of my recent projects and technical expertise
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                {slideImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative group">
                      <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute bottom-6 left-6 text-white">
                            <h3 className="text-2xl font-bold mb-2">{image.title}</h3>
                            <p className="text-white/90">{image.alt}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
