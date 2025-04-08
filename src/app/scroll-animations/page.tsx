'use client';

import { 
  FadeInSection, 
  ParallaxSection, 
  StaggeredChildren,
  ScaleFade,
  ScrollOpacity,
  RevealText,
  Rotate3D,
  AnimatedBackground
} from '@/components/animations';

export default function ScrollAnimationsDemo() {
  return (
    <div className="min-h-screen bg-soft-black text-soft-white overflow-x-hidden">
      {/* Hero section with RevealText */}
      <section className="min-h-[90vh] flex items-center justify-center p-4">
        <div className="max-w-5xl mx-auto">
          <RevealText 
            text="Scroll Animations" 
            className="text-6xl md:text-7xl font-serif text-center mb-6"
          />
          <RevealText 
            text="Elegant, performant animations for the Jethro Solutions website" 
            className="text-xl md:text-2xl font-mono text-center text-soft-tan/80"
            delay={0.5}
          />
          
          <div className="flex justify-center mt-12">
            <ScaleFade delay={1}>
              <div className="bg-soft-tan/10 border border-soft-tan/20 px-6 py-3 rounded-lg">
                Scroll down to explore
              </div>
            </ScaleFade>
          </div>
        </div>
      </section>
      
      {/* FadeInSection showcase */}
      <section className="py-32">
        <div className="max-w-5xl mx-auto px-4">
          <FadeInSection className="mb-8">
            <h2 className="text-3xl font-serif mb-3">Fade In Sections</h2>
            <p className="text-soft-tan/70 text-lg">Elements gracefully appear as you scroll.</p>
          </FadeInSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <FadeInSection className="bg-soft-black/30 border border-soft-tan/20 p-6 rounded-lg" delay={0.1}>
              <h3 className="text-xl font-sans mb-2">Fade from bottom</h3>
              <p className="text-soft-tan/60">Content appears with a slight upward motion.</p>
            </FadeInSection>
            
            <FadeInSection 
              className="bg-soft-black/30 border border-soft-tan/20 p-6 rounded-lg" 
              direction="down"
              delay={0.2}
            >
              <h3 className="text-xl font-sans mb-2">Fade from top</h3>
              <p className="text-soft-tan/60">Content appears with a slight downward motion.</p>
            </FadeInSection>
            
            <FadeInSection 
              className="bg-soft-black/30 border border-soft-tan/20 p-6 rounded-lg" 
              direction="left"
              delay={0.3}
            >
              <h3 className="text-xl font-sans mb-2">Fade from right</h3>
              <p className="text-soft-tan/60">Content appears with a slight leftward motion.</p>
            </FadeInSection>
          </div>
        </div>
      </section>
      
      {/* ParallaxSection showcase */}
      <section className="py-32 bg-soft-black/50">
        <div className="max-w-5xl mx-auto px-4">
          <FadeInSection className="mb-16">
            <h2 className="text-3xl font-serif mb-3">Parallax Effects</h2>
            <p className="text-soft-tan/70 text-lg">Create depth with elements that move at different speeds.</p>
          </FadeInSection>
          
          <div className="relative h-[50vh] mb-12">
            <ParallaxSection className="absolute inset-0" speed={0.1}>
              <div className="w-full h-full bg-soft-tan/5 rounded-2xl"></div>
            </ParallaxSection>
            
            <ParallaxSection className="absolute inset-0 flex items-center justify-center" speed={0.3}>
              <div className="bg-soft-black/80 border border-soft-tan/20 p-8 rounded-xl max-w-md text-center">
                <h3 className="text-2xl font-serif mb-3">Depth Through Motion</h3>
                <p className="text-soft-tan/70">
                  Parallax creates an illusion of depth by moving elements at different speeds relative to the scroll position.
                </p>
              </div>
            </ParallaxSection>
          </div>
        </div>
      </section>
      
      {/* StaggeredChildren showcase */}
      <section className="py-32">
        <div className="max-w-5xl mx-auto px-4">
          <FadeInSection className="mb-16">
            <h2 className="text-3xl font-serif mb-3">Sequential Animations</h2>
            <p className="text-soft-tan/70 text-lg">Elements animate in sequence for a coordinated appearance.</p>
          </FadeInSection>
          
          <StaggeredChildren
            className="grid grid-cols-1 md:grid-cols-4 gap-4"
            childClassName="h-full"
          >
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-soft-black/30 border border-soft-tan/20 p-6 rounded-lg h-full">
                <h3 className="text-xl font-sans mb-2">Item {item}</h3>
                <p className="text-soft-tan/60">This appears in sequence with other items.</p>
              </div>
            ))}
          </StaggeredChildren>
        </div>
      </section>
      
      {/* ScaleFade showcase */}
      <section className="py-32 bg-soft-black/50">
        <div className="max-w-5xl mx-auto px-4">
          <FadeInSection className="mb-16">
            <h2 className="text-3xl font-serif mb-3">Scale & Fade Effects</h2>
            <p className="text-soft-tan/70 text-lg">Combining scale and opacity for elegant entrances.</p>
          </FadeInSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ScaleFade className="bg-soft-black/30 border border-soft-tan/20 p-8 rounded-lg" initialScale={0.8}>
              <h3 className="text-xl font-sans mb-2">Scale Up</h3>
              <p className="text-soft-tan/60">Content scales up as it appears.</p>
            </ScaleFade>
            
            <ScaleFade className="bg-soft-black/30 border border-soft-tan/20 p-8 rounded-lg" initialScale={1.2}>
              <h3 className="text-xl font-sans mb-2">Scale Down</h3>
              <p className="text-soft-tan/60">Content scales down as it appears.</p>
            </ScaleFade>
          </div>
        </div>
      </section>
      
      {/* Rotate3D showcase */}
      <section className="py-32">
        <div className="max-w-5xl mx-auto px-4">
          <FadeInSection className="mb-16">
            <h2 className="text-3xl font-serif mb-3">3D Rotation Effects</h2>
            <p className="text-soft-tan/70 text-lg">Add dimension with scroll-linked rotation.</p>
          </FadeInSection>
          
          <Rotate3D className="h-[40vh] mb-12">
            <div className="bg-soft-black/30 border border-soft-tan/20 p-8 rounded-lg h-full flex items-center justify-center text-center">
              <div>
                <h3 className="text-2xl font-serif mb-3">Dimensional Depth</h3>
                <p className="text-soft-tan/70 max-w-md mx-auto">
                  This element rotates as you scroll, creating an interactive 3D effect that responds to user movement.
                </p>
              </div>
            </div>
          </Rotate3D>
        </div>
      </section>
      
      {/* AnimatedBackground showcase */}
      <section className="py-32 bg-soft-black/50">
        <div className="max-w-5xl mx-auto px-4">
          <FadeInSection className="mb-16">
            <h2 className="text-3xl font-serif mb-3">Animated Backgrounds</h2>
            <p className="text-soft-tan/70 text-lg">Backgrounds that transform to reveal content.</p>
          </FadeInSection>
          
          <AnimatedBackground className="p-8 min-h-[30vh] mb-12 rounded-lg" backgroundClass="bg-soft-tan/10">
            <div className="text-center">
              <h3 className="text-2xl font-serif mb-3">Dynamic Reveal</h3>
              <p className="text-soft-tan/70 max-w-md mx-auto">
                The background animates in first, followed by the content, creating a sophisticated reveal sequence.
              </p>
            </div>
          </AnimatedBackground>
        </div>
      </section>
      
      {/* ScrollOpacity showcase */}
      <section className="py-32">
        <div className="max-w-5xl mx-auto px-4">
          <FadeInSection className="mb-16">
            <h2 className="text-3xl font-serif mb-3">Scroll-Linked Opacity</h2>
            <p className="text-soft-tan/70 text-lg">Transparency tied directly to scroll position.</p>
          </FadeInSection>
          
          <ScrollOpacity className="h-[40vh] mb-12">
            <div className="bg-soft-black/30 border border-soft-tan/20 p-8 rounded-lg h-full flex items-center justify-center text-center">
              <div>
                <h3 className="text-2xl font-serif mb-3">Precise Control</h3>
                <p className="text-soft-tan/70 max-w-md mx-auto">
                  The opacity of this section is directly linked to your scroll position, providing fine-grained control over visibility.
                </p>
              </div>
            </div>
          </ScrollOpacity>
        </div>
      </section>
      
      {/* Final call to action */}
      <section className="py-32 bg-soft-black/50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <RevealText 
            text="Ready to implement these animations?" 
            className="text-4xl md:text-5xl font-serif mb-6"
          />
          
          <RevealText 
            text="Create stunning, engaging experiences for your users"
            className="text-xl font-mono text-soft-tan/80 mb-12"
            delay={0.5}
          />
          
          <ScaleFade delay={1}>
            <div className="inline-block bg-soft-tan text-soft-black px-8 py-4 rounded-lg font-mono">
              Let's get started
            </div>
          </ScaleFade>
        </div>
      </section>
    </div>
  );
} 