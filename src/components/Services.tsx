import React from 'react';
import { BarChart3, Lightbulb, Settings, LineChart } from 'lucide-react';
import { BentoCard, BentoCardGrid } from '@/components/ui/bento-card';

const Services: React.FC = () => {
  return (
    <section id="services" className="section-padding py-20 bg-[#efede5] dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-jethro-blue dark:text-blue-400 font-medium tracking-wide">OUR SERVICES</span>
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold mt-3 mb-6 text-jethro-black dark:text-white">
            Optimization Expertise for Your Business
          </h2>
          <p className="text-jethro-black/70 dark:text-gray-300 leading-relaxed">
            We provide comprehensive guidance through every stage of technology implementation, 
            ensuring optimal outcomes aligned with your business objectives.
          </p>
        </div>
        
        <BentoCardGrid className="gap-6 md:grid-cols-2 lg:grid-cols-4">
          <BentoCard
            variant="jethro"
            icon={<Lightbulb className="w-6 h-6 text-jethro-blue dark:text-blue-400" />}
            title="Strategic Advisory"
            description="Guiding technology decisions with wisdom-driven insights that align with your organizational goals."
            tags={["Strategy", "Leadership"]}
            status="Featured"
            colSpan={2}
            hasPersistentHover={true}
          />
          
          <BentoCard
            variant="jethro"
            icon={<Settings className="w-6 h-6 text-jethro-blue dark:text-blue-400" />}
            title="Implementation Excellence"
            description="Proven methodologies for successful technology deployment with minimal disruption."
            tags={["Deployment", "Process"]}
          />
          
          <BentoCard
            variant="jethro"
            icon={<BarChart3 className="w-6 h-6 text-jethro-blue dark:text-blue-400" />}
            title="Resource Optimization"
            description="Identifying efficiencies and maximizing ROI through careful stewardship of resources."
            tags={["Efficiency", "ROI"]}
            meta="High Impact"
          />
          
          <BentoCard
            variant="jethro"
            icon={<LineChart className="w-6 h-6 text-jethro-blue dark:text-blue-400" />}
            title="Ongoing Optimization"
            description="Continuous improvement strategies to adapt and evolve your technology landscape."
            tags={["Improvement", "Growth"]}
            colSpan={2}
          />
        </BentoCardGrid>
        
        <div className="text-center mt-12">
          <a href="/services" className="inline-flex items-center gap-2 text-jethro-blue dark:text-blue-400 font-medium hover:underline">
            View all our services <BarChart3 className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
