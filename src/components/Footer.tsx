
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { useLanguage } from '@/contexts/LanguageContext';

export const Footer = () => {
  const { messages } = useLanguage();

  return (
    <footer className="py-12 bg-muted/20">
      <div className="container mx-auto px-6">
        <Separator className="mb-8" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/lovable-uploads/2aa28b5a-0bb3-42c5-b710-0499aa67e02d.png" 
                alt="ProtoZeph Logo" 
                className="h-8 w-8"
              />
              <span className="text-lg font-bold text-foreground">ProtoZeph Technologies</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {messages.footer.description}
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">{messages.footer.servicesHeading}</h4>
            <ul className="space-y-2 text-muted-foreground">
              {messages.footer.services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">{messages.footer.contactHeading}</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>mathias.onu@outlook.com</li>
              <li>{messages.contact.locationValue}</li>
              <li>
                <a href="https://www.linkedin.com/company/protozeph-technologies" target="_blank" rel="noopener noreferrer" aria-label={messages.footer.linkedinLabel}>
                  <i className="fab fa-linkedin fa-2x text-[#0077b5]"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <Separator className="mb-6" />
        
        <div className="text-center text-muted-foreground">
          <p>{messages.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};
