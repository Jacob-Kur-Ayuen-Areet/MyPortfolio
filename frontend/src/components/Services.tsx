import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Smartphone, Globe, Settings, Headphones, Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Services = () => {
  const { toast } = useToast();

  const services = [
    {
      icon: Code,
      title: "Web Development",
      description:
        "Custom websites and web applications built with modern technologies. From simple landing pages to complex enterprise solutions.",
      features: ["Responsive Design", "Modern Frameworks", "SEO Optimized", "Performance Focused"],
      price: "Starting at $999",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description:
        "Cross-platform mobile applications that work seamlessly on iOS and Android devices with native performance.",
      features: ["Cross-Platform", "Native Performance", "App Store Ready", "Offline Support"],
      price: "Starting at $1,499",
    },
    {
      icon: Globe,
      title: "E-Commerce Solutions",
      description:
        "Complete online store setup with payment processing, inventory management, and customer analytics.",
      features: ["Payment Integration", "Inventory Management", "Analytics Dashboard", "Mobile Optimized"],
      price: "Starting at $1,999",
    },
    {
      icon: Settings,
      title: "Technical Consulting",
      description:
        "Expert advice on technology stack selection, architecture design, and development best practices.",
      features: ["Architecture Review", "Tech Stack Selection", "Performance Audit", "Security Assessment"],
      price: "$150/hour",
    },
    {
      icon: Headphones,
      title: "Tech Support",
      description:
        "Ongoing technical support and maintenance for your websites and applications to ensure smooth operation.",
      features: ["24/7 Monitoring", "Regular Updates", "Bug Fixes", "Performance Optimization"],
      price: "Starting at $299/month",
    },
    {
      icon: Zap,
      title: "Quick Solutions",
      description:
        "Fast turnaround for small fixes, feature additions, and emergency technical issues.",
      features: ["Same Day Service", "Emergency Support", "Quick Fixes", "Feature Additions"],
      price: "Starting at $99",
    },
  ];

  const handleGetStarted = async (service: {
    title: string;
    description: string;
    features: string[];
    price: string;
  }) => {
    try {
      const response = await fetch("https://backend-evn9z3ujd-jacob-kur-s-projects.vercel.app/services", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(service),
      });

      if (response.ok) {
        alert("✅ Service request sent successfully!");
      } else {
        const data = await response.json();
        alert("❌ Error: " + (data.error || "Failed to send request."));
      }
    } catch (error) {
      console.error("Error sending service:", error);
      alert("❌ Network error.");
    }
  };

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive web development and technical assistance services tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover-scale transition-all duration-300 hover:shadow-lg h-full">
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-sm">{service.description}</CardDescription>
              </CardHeader>

              <CardContent className="flex flex-col flex-grow">
                <ul className="space-y-2 mb-6 flex-grow">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <div className="text-2xl font-bold text-primary mb-4">{service.price}</div>
                  <Button className="w-full" onClick={() => handleGetStarted(service)}>
                    Get Started
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

export default Services;
