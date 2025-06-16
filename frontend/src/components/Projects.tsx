import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Projects = () => {
  const { toast } = useToast();

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, and order processing.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "https://github.com/Jacob-Kur-Ayuen-Areet"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop",
      technologies: ["Vue.js", "Firebase", "TypeScript", "Vuetify"],
      liveUrl: "#",
      githubUrl: "https://github.com/Jacob-Kur-Ayuen-Areet"
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics using modern APIs.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=400&fit=crop",
      technologies: ["Next.js", "OpenWeather API", "Chart.js", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "https://github.com/Jacob-Kur-Ayuen-Areet"
    },
    {
      title: "Portfolio CMS",
      description: "Content management system for creative professionals with drag-and-drop page builder and SEO optimization tools.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
      technologies: ["React", "Django", "PostgreSQL", "AWS S3"],
      liveUrl: "#",
      githubUrl: "https://github.com/Jacob-Kur-Ayuen-Areet"
    },
    {
      title: "Real Estate Platform",
      description: "Modern real estate platform with advanced search filters, virtual tours, and integrated mortgage calculator.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=400&fit=crop",
      technologies: ["React", "Express", "MySQL", "Google Maps API"],
      liveUrl: "#",
      githubUrl: "https://github.com/Jacob-Kur-Ayuen-Areet"
    },
    {
      title: "Learning Management System",
      description: "Comprehensive LMS with video streaming, progress tracking, quizzes, and interactive course content.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=400&fit=crop",
      technologies: ["Angular", "Node.js", "MongoDB", "Socket.io"],
      liveUrl: "#",
      githubUrl: "https://github.com/Jacob-Kur-Ayuen-Areet"
    }
  ];

  const openInNewTab = (url) => {
    if (url && url !== "#") {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      alert("Link not available");
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of recent projects demonstrating technical expertise and creative problem-solving
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="hover-scale transition-all duration-300 hover:shadow-lg overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-sm line-clamp-3">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="default"
                    className="flex-1"
                    onClick={() => openInNewTab(project.liveUrl)}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1"
                    onClick={() => openInNewTab(project.githubUrl)}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
