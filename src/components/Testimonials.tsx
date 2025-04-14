import React from 'react';
import { cn } from '@/lib/utils';
import { GridBackground } from './Hero';
import { TestimonialCard } from './ui/testimonial-card';

// Sample testimonial data
const testimonials = [
  {
    author: {
      name: 'Sarah Johnson',
      handle: 'CIO, Global Enterprises',
      avatar: '/placeholder.svg',
    },
    text: "Jethro Solutions provided invaluable guidance that transformed our implementation approach. Their wisdom-driven methodology delivered results beyond our expectations."
  },
  {
    author: {
      name: 'Michael Chen',
      handle: 'Operations Director, TechAdvance',
      avatar: '/placeholder.svg',
    },
    text: "The team's ability to balance technological innovation with practical stewardship of our resources resulted in a seamless implementation with measurable ROI."
  },
  {
    author: {
      name: 'Rebecca Martinez',
      handle: 'CEO, Innovate Corp',
      avatar: '/placeholder.svg',
    },
    text: "As our first advisor, Jethro Solutions helped us navigate complex decisions with clarity and foresight, establishing a technology foundation that continues to serve us well."
  },
  {
    author: {
      name: 'David Thompson',
      handle: 'CTO, FutureTech',
      avatar: '/placeholder.svg',
    },
    text: "Working with Jethro's team gave us the strategic clarity we needed to make critical technology decisions with confidence and vision."
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="relative bg-[#111827] py-16 md:py-24">
      <GridBackground />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-jethro-blue font-medium tracking-wide">TESTIMONIALS</span>
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold mt-3 mb-6 text-white">
            What Our Clients Say
          </h2>
          <p className="text-white/80 leading-relaxed">
            We measure our success through the improved outcomes and efficiency gains 
            experienced by the organizations we serve.
          </p>
        </div>
        
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:40s]">
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
              {[...Array(2)].map((_, setIndex) => (
                testimonials.map((testimonial, i) => (
                  <TestimonialCard 
                    key={`${setIndex}-${i}`}
                    author={testimonial.author}
                    text={testimonial.text}
                  />
                ))
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-[#111827] sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-[#111827] sm:block" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
