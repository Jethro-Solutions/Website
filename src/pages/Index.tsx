import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Approach from '../components/Approach';
// import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  // Handle scrolling to section when page loads with a hash
  useEffect(() => {
    // Get the hash from the URL (e.g., #approach)
    const hash = window.location.hash;
    
    if (hash) {
      // Remove the # symbol
      const id = hash.replace('#', '');
      
      // Find the element with the ID
      const element = document.getElementById(id);
      
      // If the element exists, scroll to it
      if (element) {
        // Small delay to ensure page is fully rendered
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-jethro-cream">
      <Navbar />
      <Hero />
      <Services />
      <Approach />
      {/* Testimonials component temporarily removed */}
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
