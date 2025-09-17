
import React from 'react';
import { Separator } from '@/components/ui/separator';

export const Footer = () => {
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
              Custom software development and project contributions. 
              Transforming ideas into powerful digital experiences.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Custom Software Development</li>
              <li>Consultancy</li>
              <li>Web Applications</li>
              <li>Mobile Solutions</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>mathias.onu@protozeph.com</li>
              <li>Iasi, Romania</li>
              <li>
                <a href="https://www.linkedin.com/company/protozeph-technologies" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <i className="fab fa-linkedin fa-2x text-[#0077b5]"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <Separator className="mb-6" />
        
        <div className="text-center text-muted-foreground">
          <p>&copy; 2025 ProtoZeph Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
