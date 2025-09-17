
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

export const Reviews = () => {
  const reviews = [
    {
      name: "Jonathan Müll",
      company: "Scty",
      role: "Project Manager",
      content: "I had the opportunity to work with Mathias Onu on various initiatives, and each time, I can say that we achieved unexpectedly great results. Mathias is not only highly skilled and creative from a technical standpoint but also has the ability to understand the business side and possesses a remarkable talent for working with people. Communication with Mathias is always smooth and generates a lot of momentum. I was genuinely impressed by his proactive approach, structured work style, and constant focus on progress and delivering high-performance results at top standards. In short, I wholeheartedly recommend Mathias!",
      rating: 5
    },
    {
      name: "Radu Tamas",
      company: "Codify Idea",
      role: "CEO",
      content: "I worked with Mathias for over a year as a Frontend Developer (Angular). Although he worked remotely, he integrated seamlessly with the team and communicated exceptionally well. Beyond his technical skills, he stood out for his work ethic, reliability, and excellent self-organization. On the technical side, he consistently delivered robust solutions, structured his work effectively, and proactively proposed ideas that simplified implementations. I strongly recommend Mathias to any team looking for a responsible, organised frontend developer focused on delivering client value.",
      rating: 5
    },
    {
      name: "Bogdan Baran",
      company: "Heaven Solutions",
      role: "CTO",
      content: "I worked closely with Mathias during this time [time working for Heaven Solutions], and I am happy how he handled his work and his team interactions. He was highly regarded by his peers and managers alike. I would recommend Mathias Onu to any software development organization. He is a dedicated and productive individual.",
      rating: 5
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
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover-scale border-border/50 bg-background/80 backdrop-blur-sm flex flex-col">
              <CardContent className="p-6 flex flex-col flex-grow">
                <div className="flex items-center mb-4">
                  <Quote className="h-5 w-5 text-muted-foreground mr-2" />
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed italic flex-grow">
                  "{review.content}"
                </p>
                
                <div className="mt-auto">
                  <div className="font-semibold text-foreground">{review.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {review.role} @ {review.company}
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
