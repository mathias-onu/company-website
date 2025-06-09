
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Cpu } from 'lucide-react';

export const Hero = () => {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20"></div>
      
      {/* Floating code elements */}
      <div className="absolute top-20 left-10 opacity-10 animate-pulse">
        <Code size={60} />
      </div>
      <div className="absolute bottom-20 right-10 opacity-10 animate-pulse delay-1000">
        <Cpu size={80} />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent animate-fade-in">
            Custom Software
            <br />
            <span className="text-4xl md:text-6xl">Development</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed animate-fade-in delay-200">
            We craft bespoke software solutions and contribute to existing projects, 
            transforming your ideas into powerful digital experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in delay-400">
            <Button 
              size="lg"
              onClick={scrollToServices}
              className="bg-foreground text-background hover:bg-foreground/90 group transition-all"
            >
              Explore Our Services
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              onClick={scrollToContact}
              className="border-foreground/20 hover:bg-foreground/5 transition-all"
            >
              Get In Touch
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-4">
              <div className="text-2xl font-bold text-foreground">5+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="p-4">
              <div className="text-2xl font-bold text-foreground">50+</div>
              <div className="text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="p-4">
              <div className="text-2xl font-bold text-foreground">100%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
