'use client';

import { GradientButton, GradientTextButton } from '@/components/ui/GradientButton';
import { FlowingGradientButton } from '@/components/ui/FlowingGradientButton';
import { RevealGradientButton } from '@/components/ui/RevealGradientButton';

export default function GradientButtonDemo() {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-background">
      <h2 className="text-3xl font-serif mb-8 gradient-text">Gradient Button Components</h2>
      
      <div className="space-y-12">
        {/* Standard Gradient Buttons */}
        <section>
          <h3 className="text-2xl font-serif mb-4">Standard Gradient Buttons</h3>
          <p className="text-text-muted mb-6">Buttons with gradient backgrounds that shift on hover</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center gap-4 p-6 bg-background-light rounded-xl">
              <h4 className="text-lg font-serif">Primary (Blue-Orange)</h4>
              <GradientButton variant="primary">Button Text</GradientButton>
            </div>
            
            <div className="flex flex-col items-center gap-4 p-6 bg-background-light rounded-xl">
              <h4 className="text-lg font-serif">Secondary (Orange-Red)</h4>
              <GradientButton variant="secondary">Button Text</GradientButton>
            </div>
            
            <div className="flex flex-col items-center gap-4 p-6 bg-background-light rounded-xl">
              <h4 className="text-lg font-serif">Tertiary (Blue-Teal)</h4>
              <GradientButton variant="tertiary">Button Text</GradientButton>
            </div>
            
            <div className="flex flex-col items-center gap-4 p-6 bg-background-light rounded-xl">
              <h4 className="text-lg font-serif">Outline</h4>
              <GradientButton variant="outline">Button Text</GradientButton>
            </div>
            
            <div className="flex flex-col items-center gap-4 p-6 bg-background-light rounded-xl">
              <h4 className="text-lg font-serif">Text Gradient</h4>
              <GradientTextButton>Button Text</GradientTextButton>
            </div>
          </div>
        </section>
        
        {/* Flowing Gradient Buttons */}
        <section>
          <h3 className="text-2xl font-serif mb-4">Flowing Gradient Buttons</h3>
          <p className="text-text-muted mb-6">Buttons with animated flowing gradients on hover</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center gap-4 p-6 bg-background-light rounded-xl">
              <h4 className="text-lg font-serif">Primary (Blue-Orange)</h4>
              <FlowingGradientButton variant="primary">Button Text</FlowingGradientButton>
            </div>
            
            <div className="flex flex-col items-center gap-4 p-6 bg-background-light rounded-xl">
              <h4 className="text-lg font-serif">Secondary (Orange-Red)</h4>
              <FlowingGradientButton variant="secondary">Button Text</FlowingGradientButton>
            </div>
            
            <div className="flex flex-col items-center gap-4 p-6 bg-background-light rounded-xl">
              <h4 className="text-lg font-serif">Radial</h4>
              <FlowingGradientButton variant="radial">Button Text</FlowingGradientButton>
            </div>
            
            <div className="flex flex-col items-center gap-4 p-6 bg-background-light rounded-xl">
              <h4 className="text-lg font-serif">Conic</h4>
              <FlowingGradientButton variant="conic">Button Text</FlowingGradientButton>
            </div>
            
            <div className="flex flex-col items-center gap-4 p-6 bg-background-light rounded-xl">
              <h4 className="text-lg font-serif">Outline</h4>
              <FlowingGradientButton variant="outline">Button Text</FlowingGradientButton>
            </div>
          </div>
        </section>
        
        {/* Reveal Gradient Buttons */}
        <section>
          <h3 className="text-2xl font-serif mb-4">Reveal Gradient Buttons</h3>
          <p className="text-text-muted mb-6">Buttons that reveal gradients from different directions on hover</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center gap-4 p-6 bg-background-light rounded-xl">
              <h4 className="text-lg font-serif">From Left</h4>
              <RevealGradientButton variant="fromLeft">Button Text</RevealGradientButton>
            </div>
            
            <div className="flex flex-col items-center gap-4 p-6 bg-background-light rounded-xl">
              <h4 className="text-lg font-serif">From Right</h4>
              <RevealGradientButton variant="fromRight">Button Text</RevealGradientButton>
            </div>
            
            <div className="flex flex-col items-center gap-4 p-6 bg-background-light rounded-xl">
              <h4 className="text-lg font-serif">From Top</h4>
              <RevealGradientButton variant="fromTop">Button Text</RevealGradientButton>
            </div>
            
            <div className="flex flex-col items-center gap-4 p-6 bg-background-light rounded-xl">
              <h4 className="text-lg font-serif">From Bottom</h4>
              <RevealGradientButton variant="fromBottom">Button Text</RevealGradientButton>
            </div>
            
            <div className="flex flex-col items-center gap-4 p-6 bg-background-light rounded-xl">
              <h4 className="text-lg font-serif">From Center</h4>
              <RevealGradientButton variant="fromCenter">Button Text</RevealGradientButton>
            </div>
          </div>
        </section>
        
        {/* Size Variations */}
        <section>
          <h3 className="text-2xl font-serif mb-4">Size Variations</h3>
          <p className="text-text-muted mb-6">Button size variations with gradient effects</p>
          
          <div className="flex flex-col gap-6 items-center sm:flex-row sm:items-end sm:justify-around p-6 bg-background-light rounded-xl">
            <div className="flex flex-col items-center gap-2">
              <h4 className="text-lg font-serif">Small</h4>
              <GradientButton variant="primary" size="sm">Small</GradientButton>
            </div>
            
            <div className="flex flex-col items-center gap-2">
              <h4 className="text-lg font-serif">Medium</h4>
              <GradientButton variant="primary" size="md">Medium</GradientButton>
            </div>
            
            <div className="flex flex-col items-center gap-2">
              <h4 className="text-lg font-serif">Large</h4>
              <GradientButton variant="primary" size="lg">Large</GradientButton>
            </div>
            
            <div className="flex flex-col items-center gap-2">
              <h4 className="text-lg font-serif">X-Large</h4>
              <GradientButton variant="primary" size="xl">X-Large</GradientButton>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 