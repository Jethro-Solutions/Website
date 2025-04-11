import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Icons } from '../components/ui/icons';
import HeroBadge from '../components/ui/hero-badge';

const IconsDemo = () => {
  const variants = ['default', 'outline', 'ghost'] as const;
  const sizes = ['sm', 'md', 'lg'] as const;
  
  return (
    <div className="min-h-screen bg-jethro-cream">
      <Navbar />
      
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-4xl font-playfair font-semibold mb-12 text-center">UI Components Demo</h1>
        
        {/* Icons Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-playfair font-semibold mb-6">Icons</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {Object.entries(Icons).map(([name, Icon]) => (
              <div 
                key={name}
                className="flex flex-col items-center justify-center p-4 border rounded-lg bg-white"
              >
                <Icon className="h-8 w-8 mb-2" />
                <span className="text-sm text-gray-700">{name}</span>
              </div>
            ))}
          </div>
        </section>
        
        {/* Hero Badge Section */}
        <section>
          <h2 className="text-2xl font-playfair font-semibold mb-6">Hero Badges</h2>
          
          {/* Size Variants */}
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-4">Size Variants</h3>
            <div className="flex flex-wrap gap-4">
              {sizes.map((size) => (
                <HeroBadge 
                  key={size}
                  text={`${size.toUpperCase()} Size`}
                  size={size}
                  variant="default"
                />
              ))}
            </div>
          </div>
          
          {/* Style Variants */}
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-4">Style Variants</h3>
            <div className="flex flex-wrap gap-4">
              {variants.map((variant) => (
                <HeroBadge 
                  key={variant}
                  text={`${variant} variant`}
                  variant={variant}
                  size="md"
                />
              ))}
            </div>
          </div>
          
          {/* With Icons */}
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-4">With Icons</h3>
            <div className="flex flex-wrap gap-4">
              <HeroBadge 
                text="With Start Icon"
                icon={<Icons.book className="h-4 w-4" />}
                variant="default"
                size="md"
              />
              <HeroBadge 
                text="With End Icon"
                endIcon={<Icons.chevronRight className="h-4 w-4" />}
                variant="outline"
                size="md"
              />
              <HeroBadge 
                text="Both Icons"
                icon={<Icons.component className="h-4 w-4" />}
                endIcon={<Icons.chevronRight className="h-4 w-4" />}
                variant="ghost"
                size="md"
              />
            </div>
          </div>
          
          {/* Interactive */}
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-4">Interactive</h3>
            <div className="flex flex-wrap gap-4">
              <HeroBadge 
                text="With Link"
                icon={<Icons.github className="h-4 w-4" />}
                href="#"
                variant="default"
                size="md"
              />
              <HeroBadge 
                text="With Click Handler"
                icon={<Icons.component className="h-4 w-4" />}
                onClick={() => alert('Badge clicked!')}
                variant="outline"
                size="md"
              />
            </div>
          </div>
          
          {/* Custom Styling */}
          <div>
            <h3 className="text-xl font-medium mb-4">Custom Styling</h3>
            <div className="flex flex-wrap gap-4">
              <HeroBadge 
                text="Custom Color"
                className="bg-green-100 text-green-800 hover:bg-green-200 border-green-300"
                variant="outline"
                size="md"
              />
              <HeroBadge 
                text="YOUR FIRST ADVISOR"
                className="text-jethro-cream"
                variant="outline"
                size="md"
              />
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default IconsDemo; 