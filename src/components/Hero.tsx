
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen pt-24 flex items-center section-padding bg-gradient-to-b from-jethro-cream to-jethro-gray/10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-6 animate-fade-in">
            <span className="text-jethro-blue font-medium tracking-wide">YOUR FIRST ADVISOR</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-semibold leading-tight">
              Wisdom-Driven <br /> Technology Stewardship
            </h1>
            <p className="text-lg md:text-xl text-jethro-black/80 max-w-xl leading-relaxed">
              Guiding businesses toward optimal implementation with 
              forward-thinking expertise and proven methodologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#services" className="btn-primary flex items-center justify-center gap-2">
                Explore Our Services <ArrowRight size={18} />
              </a>
              <a href="#approach" className="btn-secondary flex items-center justify-center">
                Our Approach
              </a>
            </div>
          </div>
          
          <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl animate-fade-in">
            <div className="absolute inset-0 bg-jethro-blue/10"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-4/5 h-4/5 rounded-lg bg-jethro-blue shadow-lg flex items-center justify-center">
                <p className="text-jethro-cream font-playfair text-2xl">Consultative Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
