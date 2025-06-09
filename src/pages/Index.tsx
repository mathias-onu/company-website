
import React from 'react';
import { ThemeProvider } from '../components/ThemeProvider';
import { Navigation } from '../components/Navigation';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Projects } from '../components/Projects';
import { Team } from '../components/Team';
import { Reviews } from '../components/Reviews';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <Hero />
        <Services />
        <Projects />
        <Team />
        <Reviews />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
