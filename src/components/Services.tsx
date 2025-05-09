import React from 'react';
import { BarChart3, Lightbulb, Settings, LineChart, ArrowRight } from 'lucide-react';
import { BentoCard, BentoCardGrid } from '@/components/ui/bento-card';

const Services: React.FC = () => {
  const handleCardClick = (url: string) => {
    window.location.href = url;
  };

  return (
    <section id="services" className="section-padding py-20 bg-[#efede5] dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-jethro-blue dark:text-blue-400 font-medium tracking-wide">OUR SERVICES</span>
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold mt-3 mb-6 text-jethro-black dark:text-white">
            Comprehensive Business Technology Solutions
          </h2>
          <p className="text-jethro-black/70 dark:text-gray-300 leading-relaxed">
            Jethro Solutions provides expert guidance and implementation services 
            that transform your business technology landscape while optimizing resources.
          </p>
        </div>
        
        <BentoCardGrid className="gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div 
            className="cursor-pointer" 
            onClick={() => handleCardClick('/first-advisor')}
          >
            <BentoCard
              variant="jethro"
              icon={<Lightbulb className="w-6 h-6 text-jethro-blue dark:text-blue-400" />}
              title="First Advisor Program"
              description="Our premier advisory service providing dedicated wisdom-driven insights for executive leadership, tailored to your specific business challenges."
              tags={["Strategy", "Leadership"]}
              status="Featured"
              colSpan={2}
              hasPersistentHover={true}
              cta="Explore →"
            />
          </div>
          
          <div 
            className="cursor-pointer" 
            onClick={() => handleCardClick('/first-advisor')}
          >
            <BentoCard
              variant="jethro"
              icon={<Settings className="w-6 h-6 text-jethro-blue dark:text-blue-400" />}
              title="Technology Implementation"
              description="End-to-end deployment services ensuring seamless integration of new technologies with minimal disruption to your operations."
              tags={["Deployment", "Process"]}
              cta="Explore →"
            />
          </div>
          
          <div 
            className="cursor-pointer" 
            onClick={() => handleCardClick('/first-advisor')}
          >
            <BentoCard
              variant="jethro"
              icon={<BarChart3 className="w-6 h-6 text-jethro-blue dark:text-blue-400" />}
              title="Strategic Resource Management"
              description="Maximize your technology investments through our data-driven approach to resource allocation and ROI optimization."
              tags={["Efficiency", "ROI"]}
              meta="High Impact"
              cta="Explore →"
            />
          </div>
          
          <div 
            className="cursor-pointer" 
            onClick={() => handleCardClick('/first-advisor')}
          >
            <BentoCard
              variant="jethro"
              icon={<LineChart className="w-6 h-6 text-jethro-blue dark:text-blue-400" />}
              title="Continuous Improvement Programs"
              description="Long-term partnership focused on evolving your technology ecosystem to adapt to changing business needs and market conditions."
              tags={["Improvement", "Growth"]}
              colSpan={2}
              cta="Explore →"
            />
          </div>
        </BentoCardGrid>
        
        <div className="text-center mt-12">
          <a href="/first-advisor" className="inline-flex items-center gap-2 text-jethro-blue dark:text-blue-400 font-medium hover:underline">
            Learn about our First Advisor Program <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
