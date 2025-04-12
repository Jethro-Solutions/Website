import React from 'react';
import { Quote } from 'lucide-react';
import { GridBackground } from './Hero';

interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ quote, author, position }) => {
  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-sm border border-gray-200">
      <Quote className="text-jethro-blue mb-4" size={32} />
      <p className="text-gray-700 leading-relaxed mb-6 italic">{quote}</p>
      <div>
        <p className="font-medium text-gray-900">{author}</p>
        <p className="text-gray-600 text-sm">{position}</p>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="section-padding bg-[#111827] relative">
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
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TestimonialCard
            quote="Jethro Solutions provided invaluable guidance that transformed our implementation approach. Their wisdom-driven methodology delivered results beyond our expectations."
            author="Sarah Johnson"
            position="CIO, Global Enterprises"
          />
          <TestimonialCard
            quote="The team's ability to balance technological innovation with practical stewardship of our resources resulted in a seamless implementation with measurable ROI."
            author="Michael Chen"
            position="Operations Director, TechAdvance"
          />
          <TestimonialCard
            quote="As our first advisor, Jethro Solutions helped us navigate complex decisions with clarity and foresight, establishing a technology foundation that continues to serve us well."
            author="Rebecca Martinez"
            position="CEO, Innovate Corp"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
