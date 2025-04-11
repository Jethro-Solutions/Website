import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Button } from './ui/button';

const Approach: React.FC = () => {
  return (
    <section id="approach" className="section-padding bg-jethro-sage/10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-jethro-blue font-medium tracking-wide">OUR APPROACH</span>
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold mt-3 mb-6">
              Guiding Principles That Deliver Results
            </h2>
            <p className="text-jethro-black/70 leading-relaxed mb-8">
              Our methodology combines deep technical expertise with a philosophy of responsible 
              stewardship, ensuring your technology investments create lasting value.
            </p>
            
            <div className="space-y-4">
              {[
                "First Advisor positioning for comprehensive guidance",
                "Value-oriented optimization of resources and processes",
                "Forward-thinking implementation with proven methodologies",
                "Balanced approach to technology and human elements"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-jethro-blue shrink-0 mt-1" size={20} />
                  <p className="text-jethro-black/80">{item}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-10">
              <Button asChild variant="default" className="bg-[#28452c] hover:bg-[#28452c]/90 border border-[#4e8253] shadow-[0_0_15px_rgba(78,130,83,0.5)] transition-all duration-300">
                <a href="#contact">Discuss Your Project</a>
              </Button>
            </div>
          </div>
          
          <div className="relative rounded-lg overflow-hidden h-[400px] bg-gradient-to-br from-jethro-blue to-jethro-blue/70 flex items-center justify-center shadow-xl">
            <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIwLjQiPgogICAgICAgICAgICA8cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00TTYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bTEyLTI0YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNCI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+')]"></div>
            <div className="text-center text-jethro-cream p-12 relative z-10">
              <h3 className="text-3xl font-playfair font-medium mb-4">Our Philosophy</h3>
              <p className="text-jethro-cream/90 leading-relaxed max-w-md mx-auto">
                "We believe in the power of wisdom-driven technology implementation 
                that balances innovation with responsible stewardship."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
