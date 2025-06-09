
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code2, GitBranch, Smartphone, Globe, Database, Cog } from 'lucide-react';

export const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Custom Software Development",
      description: "Tailored solutions built from the ground up to meet your specific business requirements and objectives."
    },
    {
      icon: GitBranch,
      title: "Project Contributions",
      description: "Expert assistance on existing projects, code reviews, feature additions, and technical debt reduction."
    },
    {
      icon: Globe,
      title: "Web Applications",
      description: "Modern, responsive web applications using cutting-edge technologies and best practices."
    },
    {
      icon: Smartphone,
      title: "Mobile Solutions",
      description: "Cross-platform mobile applications that deliver exceptional user experiences across all devices."
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Robust, scalable backend systems with secure APIs and efficient database design."
    },
    {
      icon: Cog,
      title: "System Integration",
      description: "Seamless integration of third-party services and legacy systems with modern architectures."
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive software development solutions tailored to your business needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover-scale border-border/50 bg-background/80 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-foreground/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-foreground/20 transition-colors">
                  <service.icon className="h-6 w-6 text-foreground" />
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
