
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, MapPin, Clock, Send } from 'lucide-react';

export const Contact = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:mathias.onu@protozeph.com?subject=Project Inquiry&body=Hello ProtoZeph team, I would like to discuss a project opportunity.';
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how we can help bring your ideas to life.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <Card className="border-border/50 bg-background/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-foreground/10 rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Email Us</h3>
                      <p className="text-muted-foreground">mathias.onu@protozeph.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-border/50 bg-background/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-foreground/10 rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Location</h3>
                      <p className="text-muted-foreground">Iasi, Romania</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-border/50 bg-background/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-foreground/10 rounded-lg flex items-center justify-center">
                      <Clock className="h-6 w-6 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Response Time</h3>
                      <p className="text-muted-foreground">Within 24 hours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="lg:pl-8">
              <Card className="border-border/50 bg-background/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-foreground">
                    Ready to Start Your Project?
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Whether you need custom software development, want to contribute to an existing project, 
                    or need technical consultation, we're here to help. Let's discuss your requirements and 
                    create something amazing together.
                  </p>
                  
                  <Button 
                    onClick={handleEmailClick}
                    size="lg"
                    className="w-full bg-foreground text-background hover:bg-foreground/90 group transition-all"
                  >
                    <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    Send us an Email
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
