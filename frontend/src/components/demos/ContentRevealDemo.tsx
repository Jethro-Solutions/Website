import React from 'react';
import ContentReveal, { RevealEffect } from '@/components/ui/ContentReveal';

interface RevealSectionProps {
  title: string;
  description: string;
  effect: RevealEffect;
  delay?: number;
  className?: string;
}

const RevealSection: React.FC<RevealSectionProps> = ({
  title,
  description,
  effect,
  delay = 0,
  className = '',
}) => (
  <ContentReveal
    effect={effect}
    delay={delay}
    className={`p-8 rounded-xl shadow-lg ${className}`}
  >
    <h3 className="font-serif text-2xl font-bold mb-4">{title}</h3>
    <p className="text-lg opacity-80">{description}</p>
    <div className="mt-4 text-sm opacity-60">
      Animation: <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">{effect}</code>
      {delay > 0 && <> | Delay: <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">{delay}s</code></>}
    </div>
  </ContentReveal>
);

const ContentRevealDemo = () => {
  return (
    <div className="py-10 space-y-16 container mx-auto px-4">
      <ContentReveal effect="fade">
        <h2 className="text-4xl font-serif font-bold mb-8 text-center">
          Content Reveal Animations
        </h2>
        <p className="text-xl text-center max-w-2xl mx-auto mb-16">
          Scroll down to explore different reveal animation effects for content sections.
          Each card demonstrates a different animation effect from our library.
        </p>
      </ContentReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <RevealSection
          title="Fade In Effect"
          description="This section simply fades into view as you scroll down the page. It's subtle and works well for most content."
          effect="fade"
          className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/20"
        />
        
        <RevealSection
          title="Slide Up Effect"
          description="Content slides up into place as it enters the viewport. Great for creating a sense of content emerging from below."
          effect="slide-up"
          delay={0.2}
          className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/20"
        />
        
        <RevealSection
          title="Slide Down Effect"
          description="Content slides down into view, creating a feeling of content dropping in from above."
          effect="slide-down"
          className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/20"
        />
        
        <RevealSection
          title="Slide Left Effect"
          description="Content slides in from the right side of the screen, creating horizontal movement in your design."
          effect="slide-left"
          delay={0.2}
          className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/30 dark:to-orange-800/20"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <RevealSection
          title="Slide Right Effect"
          description="Content slides in from the left side of the screen, creating a dynamic entry from the opposite direction."
          effect="slide-right"
          className="bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/30 dark:to-teal-800/20"
        />
        
        <RevealSection
          title="Scale Effect"
          description="Content grows from a smaller size to full size, creating a zoom-in effect that draws attention."
          effect="scale"
          delay={0.2}
          className="bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/30 dark:to-pink-800/20"
        />

        <RevealSection
          title="Blur Effect"
          description="Content starts blurred and comes into focus as it enters the viewport, creating a sense of clarity emerging."
          effect="blur"
          className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/30 dark:to-amber-800/20"
        />
        
        <RevealSection
          title="Combined Effects"
          description="This example combines a slide up with a slightly longer delay, showing how timing can be adjusted for each element."
          effect="slide-up"
          delay={0.4}
          className="bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/30 dark:to-indigo-800/20"
        />
      </div>

      <ContentReveal effect="scale" className="mt-16">
        <div className="max-w-2xl mx-auto text-center p-8 rounded-xl bg-gradient-to-br from-blue-500 to-teal-500 text-white">
          <h3 className="font-serif text-3xl font-bold mb-4">Ready to Use Content Reveal</h3>
          <p className="text-lg mb-6">
            Integrate these animations into your sections to create engaging, modern user experiences.
          </p>
          <div className="inline-block px-6 py-3 rounded-full bg-white text-blue-600 font-medium cursor-pointer hover:bg-blue-50 transition-colors">
            Get Started
          </div>
        </div>
      </ContentReveal>
      
      <div className="mt-16">
        <ContentReveal effect="fade">
          <h3 className="text-2xl font-serif font-bold mb-6 text-center">
            Staggered Group Reveal Example
          </h3>
        </ContentReveal>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {[0, 1, 2, 3].map((i) => (
            <ContentReveal key={i} effect="slide-up" delay={0.1 * i} className="h-full">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 p-6 rounded-lg shadow-md h-full flex flex-col justify-center items-center">
                <div className="w-12 h-12 rounded-full bg-blue-500 mb-4 flex items-center justify-center text-white font-bold">
                  {i + 1}
                </div>
                <p className="text-center">
                  Staggered item with <br/> {(0.1 * i).toFixed(1)}s delay
                </p>
              </div>
            </ContentReveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentRevealDemo; 