
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

export const Team = () => {
  const team = [
    {
      name: "Mathias Onu",
      role: "CEO & Founder",
      image: "/lovable-uploads/a26cdfc3-0b85-46fb-9d39-70d9522b064f.png"
    },
    {
      name: "Denis Onu",
      role: "Software Developer",
      image: "/lovable-uploads/8df141d3-2892-42fe-8521-d5a17e5c5862.png"
    }
  ];

  return (
    <section id="team" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Our Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet the dedicated professionals behind ProtoZeph Technologies
          </p>
        </div>
        
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl">
            {team.map((member, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover-scale border-border/50 bg-background/80 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="mb-6">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-border/20 group-hover:border-foreground/20 transition-colors"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {member.name}
                  </h3>
                  <p className="text-muted-foreground">
                    {member.role}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
