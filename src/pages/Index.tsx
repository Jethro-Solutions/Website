
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Projects from '../components/Projects';
import About from '../components/About';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Loading screen */}
      {isLoading && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background">
          <div className="text-center">
            <div className="text-gradient text-h2 font-bold mb-4">JETHRO</div>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full">
              <div className="w-full h-full bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      )}
      
      {/* Main content */}
      <div className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Navbar />
        <main>
          <Hero />
          <Features />
          <About />
          <Projects />
          <CTA />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
