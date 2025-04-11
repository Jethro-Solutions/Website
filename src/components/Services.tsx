
import React from 'react';
import { BarChart3, Lightbulb, Settings, LineChart } from 'lucide-react';

const ServiceCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => {
  return (
    <div className="card hover:translate-y-[-5px]">
      <div className="text-jethro-blue mb-4">{icon}</div>
      <h3 className="text-xl font-playfair font-medium mb-3">{title}</h3>
      <p className="text-jethro-black/70 leading-relaxed">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-jethro-blue font-medium tracking-wide">OUR SERVICES</span>
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold mt-3 mb-6">
            Optimization Expertise for Your Business
          </h2>
          <p className="text-jethro-black/70 leading-relaxed">
            We provide comprehensive guidance through every stage of technology implementation, 
            ensuring optimal outcomes aligned with your business objectives.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard
            icon={<Lightbulb size={42} strokeWidth={1.5} />}
            title="Strategic Advisory"
            description="Guiding technology decisions with wisdom-driven insights that align with your organizational goals."
          />
          <ServiceCard
            icon={<Settings size={42} strokeWidth={1.5} />}
            title="Implementation Excellence"
            description="Proven methodologies for successful technology deployment with minimal disruption."
          />
          <ServiceCard
            icon={<BarChart3 size={42} strokeWidth={1.5} />}
            title="Resource Optimization"
            description="Identifying efficiencies and maximizing ROI through careful stewardship of resources."
          />
          <ServiceCard
            icon={<LineChart size={42} strokeWidth={1.5} />}
            title="Ongoing Optimization"
            description="Continuous improvement strategies to adapt and evolve your technology landscape."
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
