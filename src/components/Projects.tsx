
import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "Financial Analytics Platform",
      description: "Comprehensive financial analytics solution for a Fortune 500 banking institution.",
      category: "Finance",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070",
    },
    {
      title: "Healthcare Management System",
      description: "End-to-end healthcare management platform for regional hospital networks.",
      category: "Healthcare",
      imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2070",
    },
    {
      title: "Retail Inventory Solution",
      description: "AI-powered inventory management system for global retail chains.",
      category: "Retail",
      imageUrl: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=2070",
    },
    {
      title: "Manufacturing Analytics",
      description: "Real-time production analytics for manufacturing facilities.",
      category: "Manufacturing",
      imageUrl: "https://images.unsplash.com/photo-1581093196277-9f6e9b96fdf6?auto=format&fit=crop&q=80&w=2070",
    },
    {
      title: "Supply Chain Optimization",
      description: "AI-driven supply chain optimization for global logistics companies.",
      category: "Logistics",
      imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2070",
    },
    {
      title: "Energy Consumption Analysis",
      description: "Smart energy consumption tracking and optimization for utilities.",
      category: "Energy",
      imageUrl: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=2070",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Portfolio</span>
          <h2 className="text-h2 font-bold mt-2 mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our diverse portfolio of successful implementations across various industries.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              category={project.category}
              imageUrl={project.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
