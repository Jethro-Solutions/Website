
import React from 'react';
import { Activity, BarChart, LineChart, Lock, Server, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const FeatureCard = ({ title, description, icon, className }: FeatureProps) => {
  return (
    <div className={cn("p-6 rounded-lg border border-border bg-card card-hover", className)}>
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-medium">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      title: "Real-time Analytics",
      description: "Monitor business performance with powerful dashboards and real-time metrics tracking.",
      icon: <Activity className="h-6 w-6" />,
    },
    {
      title: "Advanced Reporting",
      description: "Generate comprehensive reports and visualize data trends for better decision making.",
      icon: <BarChart className="h-6 w-6" />,
    },
    {
      title: "Predictive Analysis",
      description: "Leverage AI-powered predictive models to forecast business outcomes and trends.",
      icon: <LineChart className="h-6 w-6" />,
    },
    {
      title: "Secure Infrastructure",
      description: "Enterprise-grade security protocols to protect your sensitive business data.",
      icon: <Shield className="h-6 w-6" />,
    },
    {
      title: "Cloud Integration",
      description: "Seamless integration with leading cloud platforms and third-party applications.",
      icon: <Server className="h-6 w-6" />,
    },
    {
      title: "Data Encryption",
      description: "End-to-end encryption ensures your business intelligence remains confidential.",
      icon: <Lock className="h-6 w-6" />,
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted/5">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Services</span>
          <h2 className="text-h2 font-bold mt-2 mb-4">Powerful Features</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover the powerful features that drive our business intelligence solutions
            and help organizations achieve their operational excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
