import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export const Projects = () => {
  const { messages } = useLanguage();
  const projects = messages.projects.list;

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            {messages.projects.heading}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {messages.projects.subtitle}
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
                  {project.link && project.link !== '#' && (
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="w-full text-xs"
                      onClick={() => window.open(project.link, '_blank')}
                    >
                      <ExternalLink className="h-3 w-3 mr-1" />
                      {messages.projects.viewProject}
                    </Button>
                  )}
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
