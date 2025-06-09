
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

export const Reviews = () => {
  const reviews = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CTO",
      content: "ProtoZeph delivered exceptional results on our e-commerce platform. Their attention to detail and technical expertise exceeded our expectations.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      company: "Digital Solutions Ltd.",
      role: "Product Manager",
      content: "Working with ProtoZeph was a game-changer for our project. They seamlessly integrated with our existing team and delivered high-quality code.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      company: "Healthcare Plus",
      role: "Engineering Lead",
      content: "The team's expertise in healthcare software development is impressive. They understood our complex requirements and delivered a robust solution.",
      rating: 5,
      avatar: "ER"
    },
    {
      name: "David Thompson",
      company: "FinTech Innovations",
      role: "CEO",
      content: "ProtoZeph's contribution to our mobile banking app was outstanding. Their security-first approach gave us confidence in the final product.",
      rating: 5,
      avatar: "DT"
    },
    {
      name: "Lisa Wang",
      company: "Smart IoT Systems",
      role: "Technical Director",
      content: "Excellent collaboration and communication throughout the project. The IoT dashboard they built exceeded our performance requirements.",
      rating: 5,
      avatar: "LW"
    },
    {
      name: "Robert Martinez",
      company: "Enterprise Solutions",
      role: "VP of Technology",
      content: "Their API integration service saved us months of development time. Professional, reliable, and technically superior work.",
      rating: 5,
      avatar: "RM"
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Client Reviews
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear what our clients have to say about working with us
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover-scale border-border/50 bg-background/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="h-5 w-5 text-muted-foreground mr-2" />
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{review.content}"
                </p>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-foreground/10 rounded-full flex items-center justify-center mr-3">
                    <span className="text-sm font-semibold text-foreground">
                      {review.avatar}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{review.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {review.role} at {review.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
