
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, MapPin, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const Contact = () => {
  const { messages } = useLanguage();

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            {messages.contact.heading}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {messages.contact.subtitle}
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
                      <h3 className="font-semibold text-foreground">{messages.contact.emailTitle}</h3>
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
                      <h3 className="font-semibold text-foreground">{messages.contact.locationTitle}</h3>
                      <p className="text-muted-foreground">{messages.contact.locationValue}</p>
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
                      <h3 className="font-semibold text-foreground">{messages.contact.responseTimeTitle}</h3>
                      <p className="text-muted-foreground">{messages.contact.responseTimeValue}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="lg:pl-8">
              <Card className="border-border/50 bg-background/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-foreground">
                    {messages.contact.projectHeading}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {messages.contact.projectDescription}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
