
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Globe, Smartphone, Server, Palette } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Development",
      skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vue.js", "HTML5", "CSS3", "JavaScript"],
      color: "bg-blue-500"
    },
    {
      icon: Server,
      title: "Backend Development",
      skills: ["Node.js", "Python", "Express", "Django", "REST APIs", "GraphQL", "Microservices"],
      color: "bg-green-500"
    },
    {
      icon: Database,
      title: "Database & Cloud",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "AWS", "Docker", "Kubernetes", "Redis"],
      color: "bg-purple-500"
    },
    {
      icon: Smartphone,
      title: "Mobile & Tools",
      skills: ["React Native", "Git", "GitHub", "VS Code", "Figma", "Linux", "CI/CD"],
      color: "bg-orange-500"
    },
    {
      icon: Globe,
      title: "Web Technologies",
      skills: ["Responsive Design", "PWA", "SEO", "Performance Optimization", "Accessibility"],
      color: "bg-cyan-500"
    },
    {
      icon: Palette,
      title: "Design & UX",
      skills: ["UI/UX Design", "Prototyping", "Wireframing", "User Research", "Design Systems"],
      color: "bg-pink-500"
    }
  ];

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive skill set covering the full spectrum of modern web development
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover-scale transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center mr-4`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
