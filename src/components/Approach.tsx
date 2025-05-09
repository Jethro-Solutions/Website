import React from 'react';
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const GridBackground = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="absolute inset-0 z-0"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.04)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
      }}
    />
  );
};

const Approach: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href');
    
    if (href && (href.startsWith('#') || (href.startsWith('/') && href.includes('#')))) {
      e.preventDefault();
      const id = href.includes('#') ? href.split('#')[1] : href.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div id="approach" className="w-full py-20 lg:py-40 bg-gray-900 relative overflow-hidden">
      <GridBackground />
      <div className="container mx-auto relative z-10">
        <div className="grid border-0 rounded-lg container p-8 grid-cols-1 gap-8 items-center lg:grid-cols-2">
          <div className="flex gap-10 flex-col">
            <div className="flex gap-4 flex-col">
              <div>
                <Badge variant="outline" className="text-white border-white/20">Our Approach</Badge>
              </div>
              <div className="flex gap-2 flex-col">
                <h2 className="text-3xl lg:text-5xl tracking-tighter max-w-xl text-left font-regular text-white">
                  How We Help You Succeed
                </h2>
                <p className="text-lg leading-relaxed tracking-tight text-gray-300 max-w-xl text-left">
                  We automate tedious tasks, build custom AI agents, and develop websites that solve your business problems — no unnecessary complexity, just solutions that work.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="text-xl font-medium text-white">Our Core Services</h3>
              <div className="grid lg:pl-6 grid-cols-1 sm:grid-cols-3 items-start lg:grid-cols-1 gap-6">
                <div className="flex flex-row gap-6 items-start">
                  <Check className="w-4 h-4 mt-2 text-blue-400" />
                  <div className="flex flex-col gap-1">
                    <p className="text-white">Workflow Automation</p>
                    <p className="text-gray-300 text-sm">
                      Streamline repetitive tasks and complex processes to free up your time.
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-6 items-start">
                  <Check className="w-4 h-4 mt-2 text-blue-400" />
                  <div className="flex flex-col gap-1">
                    <p className="text-white">AI Agent Development</p>
                    <p className="text-gray-300 text-sm">
                      Custom n8n AI agents designed for your specific business tasks.
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-6 items-start">
                  <Check className="w-4 h-4 mt-2 text-blue-400" />
                  <div className="flex flex-col gap-1">
                    <p className="text-white">Website Development</p>
                    <p className="text-gray-300 text-sm">
                      Professional, responsive websites with exactly the functionality you need.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-800/80 rounded-xl shadow-md overflow-hidden p-8 border border-gray-700">
            <h3 className="text-xl font-medium text-white mb-4">Technologies We Use</h3>
            <div className="grid grid-cols-2 gap-6">
              {[
                { name: "n8n", color: "from-[#EFEDE5] to-[#EFEDE5]/90" },
                { name: "React", color: "from-[#EFEDE5] to-[#EFEDE5]/90" },
                { name: "LangChain", color: "from-[#EFEDE5] to-[#EFEDE5]/90" },
                { name: "Firebase", color: "from-[#EFEDE5] to-[#EFEDE5]/90" },
                { name: "Tailwind CSS", color: "from-[#EFEDE5] to-[#EFEDE5]/90" },
                { name: "Claude API", color: "from-[#EFEDE5] to-[#EFEDE5]/90" }
              ].map((tech, index) => (
                <div 
                  key={index} 
                  className={`bg-gradient-to-br ${tech.color} backdrop-blur-sm border border-white/10 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 text-[#111827]`}
                >
                  <div className="font-medium">{tech.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Approach;
