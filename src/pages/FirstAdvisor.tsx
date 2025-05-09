import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight, Check, AlertCircle, Lock, FileText, Clock, Search, PenTool, Code, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const FirstAdvisor = () => {
  // Add a ref for the Google Calendar scheduling button
  const calendarButtonRef = React.useRef(null);
  
  // Handle navigation link clicks for smooth scrolling to page sections
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    try {
      const href = e.currentTarget.getAttribute('href');
      
      // Check if it's the services link and redirect to home page services section
      if (href === '#services' && window.location.pathname !== '/') {
        e.preventDefault();
        window.location.href = '/#services';
        return;
      }
      
      // Only handle links that are on the same page
      if (href && href.startsWith('#')) {
        e.preventDefault();
        
        // Extract the id from the href
        const id = href.substring(1);
        
        // Find the element to scroll to
        const element = document.getElementById(id);
        
        // If element exists, scroll to it smoothly
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 0);
        }
      }
    } catch (error) {
      console.error('Error in smooth scrolling:', error);
      // Don't prevent default navigation if there's an error
    }
  };

  // Load Google Calendar scripts and initialize the button
  useEffect(() => {
    // Add CSS - using a different approach
    if (!document.getElementById('google-calendar-css')) {
      const linkElement = document.createElement('link');
      linkElement.id = 'google-calendar-css';
      linkElement.rel = 'stylesheet';
      linkElement.href = 'https://calendar.google.com/calendar/scheduling-button-script.css';
      document.head.appendChild(linkElement);
    }

    // Add script
    const scriptElement = document.createElement('script');
    scriptElement.src = 'https://calendar.google.com/calendar/scheduling-button-script.js';
    scriptElement.async = true;
    
    // Initialize the calendar button after script loads
    scriptElement.onload = () => {
      if (window.calendar && window.calendar.schedulingButton && calendarButtonRef.current) {
        window.calendar.schedulingButton.load({
          url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ2zKnuw2GKwxML9JrT7UPRK7bnLQZR9V95SODT0cDhujv2HPcOphsxw_2niPyxfofVSyYb1u9MZ?gv=true',
          color: '#0B8043',
          label: "Schedule a Consultation",
          target: calendarButtonRef.current,
        });
      }
    };
    
    document.head.appendChild(scriptElement);

    // Cleanup
    return () => {
      const cssLink = document.getElementById('google-calendar-css');
      if (cssLink) {
        document.head.removeChild(cssLink);
      }
      
      if (document.head.contains(scriptElement)) {
        document.head.removeChild(scriptElement);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 section-padding relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-10 md:mb-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-semibold mb-6">
                  Your First Advisor
                </h1>
                <h2 className="text-xl md:text-2xl text-gray-300 font-light mb-6 italic">
                  "Ancient wisdom applied through modern technology"
                </h2>
                <p className="text-lg text-gray-200 mb-8">
                  Harness the power of custom AI agents built on n8n to transform how your business operates. 
                  Our approach combines time-tested management principles with cutting-edge AI technology.
                </p>
                <Button asChild variant="default" className="bg-[#28452c] hover:bg-[#28452c] border border-[#4e8253] shadow-md transition-all duration-300">
                  <a href="#contact" className="flex items-center justify-center gap-2" onClick={handleNavClick}>
                    Get Started <ArrowRight size={18} />
                  </a>
                </Button>
              </motion.div>
            </div>
            
            <div className="w-full md:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg border border-gray-700 shadow-xl"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-900 flex items-center justify-center rounded-full mr-4">
                    <FileText className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold">The First Management Consultant</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  In the biblical narrative, Jethro advised Moses on creating a hierarchical structure to delegate authority, 
                  becoming the world's first management consultant. Today, we apply those same principles of efficient delegation, 
                  but now to AI agents for your business.
                </p>
                <div className="border-t border-gray-700 pt-4">
                  <p className="text-gray-400 italic">
                    "The thing that you are doing is not good... select capable men... and place these over the people 
                    as chiefs of thousands, hundreds, fifties, and tens." - Exodus 18:17-21
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* n8n AI Agent Approach */}
      <section className="py-20 bg-gray-800 section-padding" id="our-approach">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-4">
              Our Approach
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              We build powerful, customized AI agents using n8n's workflow automation platform to create 
              intelligent systems that work for your specific business needs.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Discover",
                description: "We analyze your business processes to identify opportunities for AI enhancement.",
                icon: <Search className="w-6 h-6 text-blue-400" />
              },
              {
                title: "Design",
                description: "We design custom AI agent workflows tailored to your specific requirements.",
                icon: <PenTool className="w-6 h-6 text-blue-400" />
              },
              {
                title: "Develop",
                description: "We implement your custom AI agents using n8n's powerful workflow automation.",
                icon: <Code className="w-6 h-6 text-blue-400" />
              },
              {
                title: "Deploy",
                description: "We deploy your AI agents and provide training and ongoing support.",
                icon: <Zap className="w-6 h-6 text-blue-400" />
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-gray-900 p-6 rounded-lg border border-gray-700"
              >
                <div className="w-12 h-12 bg-blue-900 flex items-center justify-center rounded-full mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* AI Agent Capabilities */}
      <section className="py-20 bg-gray-900 section-padding" id="services">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-4">
              AI Agent Capabilities
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Our custom n8n AI agents can transform how your business operates through automation and intelligence.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Automate complex decision-making processes",
              "Connect to your existing tools and data sources",
              "Process and analyze unstructured data",
              "Execute multi-step workflows autonomously",
              "Provide real-time insights and recommendations",
              "Scale to handle growing workloads"
            ].map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="flex items-start"
              >
                <div className="flex-shrink-0 mr-4">
                  <div className="w-8 h-8 bg-[#28452c] flex items-center justify-center rounded-full">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                </div>
                <p className="text-lg text-gray-200">{capability}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-gray-800 section-padding" id="faq">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Common questions about our AI agent approach and implementation process.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "How do AI agents differ from basic chatbots?",
                answer: "Unlike simple chatbots that follow predefined scripts, our AI agents use advanced language models for reasoning, can access various tools, and execute complex workflows across multiple systems."
              },
              {
                question: "Why do you use n8n for building AI agents?",
                answer: "n8n provides a flexible, visual workflow builder that makes it easy to design complex agent processes, integrate with hundreds of services, and maintain full control over your data and implementation."
              },
              {
                question: "How do you ensure security for AI agents with access to company data?",
                answer: "We implement strict data access controls, encryption, and can deploy n8n on your own infrastructure for maximum data security and compliance with your internal policies."
              },
              {
                question: "What types of tools can AI agents use?",
                answer: "Our agents can connect to databases, APIs, email systems, CRMs, calendar apps, document storage, and hundreds of other tools and services through n8n's extensive integration library."
              },
              {
                question: "How long does it take to implement a custom AI agent solution?",
                answer: "Implementation timelines vary based on complexity, but typical projects range from 2-8 weeks from initial discovery to deployment, with opportunities for iterative improvements."
              },
              {
                question: "Can AI agents handle complex reasoning tasks?",
                answer: "Yes, by leveraging large language models as reasoning engines and designing specialized workflows for decision-making, our agents can handle nuanced tasks requiring judgment and contextual understanding."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-gray-900 p-6 rounded-lg border border-gray-700"
              >
                <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gray-900 section-padding" id="contact">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 md:p-12 rounded-lg border border-gray-700 shadow-xl max-w-4xl mx-auto text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-[#28452c] flex items-center justify-center rounded-full">
                <Lock className="w-8 h-8 text-green-400" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss how our custom AI agents can help streamline your operations, 
              enhance decision-making, and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Google Calendar Appointment Scheduling button target */}
              <div 
                ref={calendarButtonRef} 
                className="inline-block"
              ></div>
            </div>
            <div className="mt-8 flex items-center justify-center text-gray-400">
              <Clock className="w-4 h-4 mr-2" />
              <span>Typical response time: Within 24 hours</span>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

// Add type definition for window object
declare global {
  interface Window {
    calendar?: {
      schedulingButton: {
        load: (config: {
          url: string;
          color: string;
          label: string;
          target: HTMLElement;
        }) => void;
      };
    };
  }
}

export default FirstAdvisor; 