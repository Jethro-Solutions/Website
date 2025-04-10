
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/5">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">About Us</span>
            <h2 className="text-h2 font-bold mt-2 mb-6">Pioneering Business Intelligence Solutions</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2015, Jethro Solutions has been at the forefront of business intelligence 
                innovation. Our mission is to empower organizations with data-driven insights that 
                drive meaningful business outcomes.
              </p>
              <p>
                With a team of expert data scientists, analysts, and business consultants, we've 
                successfully delivered solutions to over 500 companies across finance, healthcare, 
                retail, manufacturing, and more.
              </p>
              <p>
                Our approach combines cutting-edge technology with deep industry expertise to create 
                customized solutions that address the unique challenges and opportunities of each client.
              </p>
            </div>
            <div className="mt-8">
              <Button>
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-6 mt-12">
              {[
                { metric: "500+", label: "Clients" },
                { metric: "98%", label: "Satisfaction" },
                { metric: "15+", label: "Years Experience" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">{item.metric}</div>
                  <div className="text-sm text-muted-foreground">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 p-1">
              <div className="h-full w-full rounded-lg bg-card flex items-center justify-center overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2070" 
                  alt="Jethro Solutions Team" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
