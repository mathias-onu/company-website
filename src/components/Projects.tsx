
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management, payment integration, and admin dashboard.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      category: "Web Application"
    },
    {
      title: "Task Management System",
      description: "Collaborative project management tool with real-time updates, team collaboration features, and advanced reporting.",
      technologies: ["Vue.js", "Express", "MongoDB", "Socket.io"],
      category: "SaaS Platform"
    },
    {
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication, transaction history, and budget tracking.",
      technologies: ["React Native", "Firebase", "Node.js", "JWT"],
      category: "Mobile App"
    },
    {
      title: "Healthcare Portal",
      description: "Patient management system with appointment scheduling, medical records, and telemedicine capabilities.",
      technologies: ["Angular", "Spring Boot", "MySQL", "WebRTC"],
      category: "Web Portal"
    },
    {
      title: "IoT Dashboard",
      description: "Real-time monitoring dashboard for IoT devices with data visualization and alert management.",
      technologies: ["React", "Python", "InfluxDB", "MQTT"],
      category: "Dashboard"
    },
    {
      title: "API Integration Service",
      description: "Microservice architecture for third-party API integrations with rate limiting and error handling.",
      technologies: ["Node.js", "Redis", "Docker", "Kubernetes"],
      category: "Backend Service"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Our Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing our expertise through successful project deliveries across various industries
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover-scale border-border/50 bg-background/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="bg-foreground/10 text-foreground">
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-foreground/80 transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs border-foreground/20">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-2 pt-2">
                  <Button size="sm" variant="outline" className="flex-1 text-xs">
                    <ExternalLink className="h-3 w-3 mr-1" />
                    View Project
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 text-xs">
                    <Github className="h-3 w-3 mr-1" />
                    Source Code
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
