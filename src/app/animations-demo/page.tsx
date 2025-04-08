'use client';

import HeroAnimation from '@/components/hero/hero-animation';
import AbstractBackground from '@/components/background/abstract-background';
import FinancialGraph from '@/components/data-viz/financial-graph';
import { FadeInSection, ParallaxSection, StaggeredChildren } from '@/components/animations/scroll-section';
import { HoverCard3D, MagneticButton, GlowBorder } from '@/components/animations/hover-effects';

export default function AnimationsDemo() {
  return (
    <div className="min-h-screen bg-soft-black text-soft-white">
      <h1 className="text-4xl font-serif text-center pt-10 pb-6">3D & Animation Components</h1>
      
      {/* Hero Animation */}
      <section className="mb-20">
        <h2 className="text-2xl font-mono mb-4 text-center">Hero Animation</h2>
        <HeroAnimation />
      </section>
      
      {/* Abstract Background */}
      <section className="mb-20">
        <h2 className="text-2xl font-mono mb-4 text-center">Abstract Background</h2>
        <AbstractBackground particleCount={3000} className="w-full h-[40vh]" />
      </section>
      
      {/* Financial Graph */}
      <section className="mb-20">
        <h2 className="text-2xl font-mono mb-4 text-center">Financial Data Visualization</h2>
        <FinancialGraph className="w-full h-[50vh] max-w-4xl mx-auto" />
      </section>
      
      {/* Scroll Animations */}
      <section className="mb-20">
        <h2 className="text-2xl font-mono mb-4 text-center">Scroll Animations</h2>
        
        <div className="max-w-4xl mx-auto px-4">
          <FadeInSection className="bg-soft-black/30 border border-soft-tan/20 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-sans mb-2">Fade In Section</h3>
            <p>This content fades in when scrolled into view.</p>
          </FadeInSection>
          
          <ParallaxSection className="h-[30vh] mb-8">
            <div className="bg-soft-black/30 border border-soft-tan/20 p-6 rounded-lg h-full flex items-center justify-center">
              <h3 className="text-xl font-sans">Parallax Section</h3>
            </div>
          </ParallaxSection>
          
          <StaggeredChildren
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
            childClassName="h-full"
          >
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-soft-black/30 border border-soft-tan/20 p-6 rounded-lg h-full">
                <h3 className="text-xl font-sans mb-2">Item {item}</h3>
                <p>This item animates in sequence with the others.</p>
              </div>
            ))}
          </StaggeredChildren>
        </div>
      </section>
      
      {/* Hover Effects */}
      <section className="mb-20">
        <h2 className="text-2xl font-mono mb-4 text-center">Hover Effects</h2>
        
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-sans mb-4">3D Hover Card</h3>
            <HoverCard3D className="p-6">
              <h4 className="text-lg font-sans mb-2">3D Card Effect</h4>
              <p>Hover over this card to see the 3D tilt effect with glare.</p>
            </HoverCard3D>
          </div>
          
          <div>
            <h3 className="text-xl font-sans mb-4">Magnetic Button</h3>
            <div className="flex justify-center items-center h-40">
              <MagneticButton className="bg-soft-tan text-soft-black py-3 px-6 rounded-full font-mono">
                Magnetic Button
              </MagneticButton>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="text-xl font-sans mb-4">Glow Border</h3>
            <GlowBorder>
              <div className="bg-soft-black/70 p-8 text-center">
                <h4 className="text-lg font-sans mb-2">Glow Effect</h4>
                <p>Hover to see the glowing border effect.</p>
              </div>
            </GlowBorder>
          </div>
        </div>
      </section>
    </div>
  );
} 