
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Projects = () => {
  const projects = [
    {
      title: "Electrical Vehicle Infrastructure Platform",
      description: "Comprehensive platform for managing electric vehicle charging infrastructure with real-time monitoring, scheduling, and analytics capabilities.",
      technologies: ["Angular", "TypeScript", "Java", "SpringBoot", "MariaDB", "AWS"],
      category: "Web Application",
      link: "#",
      image: null
    },
    {
      title: "GMonitor Dashboard",
      description: "Dashboard for teachers and students to monitor student activity on GED Flash quizzes.",
      technologies: ["Angular", "TypeScript", "Node.js", "Express.js", "MongoDB", "Render"],
      category: "SaaS Platform",
      link: "https://ged-monitoring-dashboard.vercel.app",
      image: "/lovable-uploads/d0a2bdc8-b3d7-4723-bb7f-a1671ec475e4.png"
    },
    {
      title: "GED Monitor Extension",
      description: "Browser extension which facilitates the test monitoring for GMonitor Platform",
      technologies: ["JavaScript", "Chrome API", "HTML", "CSS"],
      category: "Browser extension",
      link: "https://chromewebstore.google.com/detail/ged-monitor/nkginkabjihgljieglcghhldhekcnmdh?hl=en",
      image: "/lovable-uploads/b5876448-66cf-40ff-bfa1-8fb4c8ce5d64.png"
    },
    {
      title: "Natanael",
      description: "Presentation website for Natanael, a pastry shop in Suceava, Romania.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      category: "Website",
      link: "https://www.natanael.ro/",
      image: "/lovable-uploads/87e64625-7774-42a3-bd5d-cbe555e17ef1.png"
    },
    {
      title: "Drywall Solutions",
      description: "Presentation website for Drywall Solutions, an interior construction business in Brussels, Belgium.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      category: "Website",
      link: "https://www.drywallsolution.be/",
      image: "/lovable-uploads/f1a72d98-1d45-4124-a385-8966103ba3d6.png"
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
                
                <div className="pt-2">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="w-full text-xs"
                    onClick={() => window.open(project.link, '_blank')}
                  >
                    <ExternalLink className="h-3 w-3 mr-1" />
                    View Project
                  </Button>
                </div>

                {project.image && (
                  <div className="mt-4">
                    <img 
                      src={project.image} 
                      alt={`${project.title} screenshot`}
                      className="w-full h-auto rounded-md border border-border/20"
                    />
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
