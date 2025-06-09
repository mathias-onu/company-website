
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from './ThemeToggle';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-border' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/2aa28b5a-0bb3-42c5-b710-0499aa67e02d.png" 
              alt="ProtoZeph Logo" 
              className="h-10 w-10"
            />
            <span className="text-xl font-bold text-foreground">ProtoZeph Technologies</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button 
              onClick={scrollToContact}
              className="bg-foreground text-background hover:bg-foreground/90 transition-colors"
            >
              Contact us
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
