
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code2, GitBranch, Smartphone, Globe, Cog, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const Services = () => {
  const { messages } = useLanguage();
  const serviceIcons = [Code2, Users, GitBranch, Globe, Smartphone, Cog];
  const services = messages.services.list.map((service, index) => ({
    icon: serviceIcons[index],
    title: service.title,
    description: service.description,
  }));

  return (
    <section id="services" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            {messages.services.heading}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {messages.services.subtitle}
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
