"use client";

import { COLORS } from '@/lib/colors';
import { linearGradient, radialGradient, conicGradient } from '@/lib/colors';

interface ColorSwatchProps {
  colorName: string;
  colorValue: string;
  variant?: 'default' | 'large';
}

export function ColorSwatch({ colorName, colorValue, variant = 'default' }: ColorSwatchProps) {
  return (
    <div className="flex flex-col items-center">
      <div 
        className={`rounded-md ${variant === 'large' ? 'w-24 h-24' : 'w-16 h-16'} shadow-md`}
        style={{ backgroundColor: colorValue }}
      />
      <div className="mt-2 text-center">
        <p className="text-sm font-medium">{colorName}</p>
        <p className="text-xs text-text-muted">{colorValue}</p>
      </div>
    </div>
  );
}

interface GradientSwatchProps {
  title: string;
  gradientFunction: string;
  className?: string;
}

export function GradientSwatch({ title, gradientFunction, className = '' }: GradientSwatchProps) {
  return (
    <div className="flex flex-col items-center">
      <div 
        className={`rounded-md w-full h-20 shadow-md ${className}`}
        style={{ background: gradientFunction }}
      />
      <p className="mt-2 text-sm font-medium">{title}</p>
    </div>
  );
}

export function ColorSystem() {
  const primaryColors = [
    { category: 'Primary Blue', colors: COLORS.primary.blue },
    { category: 'Primary Orange', colors: COLORS.primary.orange },
    { category: 'Primary Red', colors: COLORS.primary.red },
  ];

  const secondaryColors = [
    { category: 'Secondary Teal', colors: COLORS.secondary.teal },
    { category: 'Secondary Green', colors: COLORS.secondary.green },
  ];

  const gradients = [
    { title: 'Primary Gradient', style: linearGradient() },
    { title: 'Blue to Orange', style: linearGradient('135deg', [
      { color: COLORS.primary.blue.DEFAULT, position: '0%' },
      { color: COLORS.primary.orange.DEFAULT, position: '100%' },
    ]) },
    { title: 'Orange to Red', style: linearGradient('135deg', [
      { color: COLORS.primary.orange.DEFAULT, position: '0%' },
      { color: COLORS.primary.red.DEFAULT, position: '100%' },
    ]) },
    { title: 'Radial Gradient', style: radialGradient() },
    { title: 'Conic Gradient', style: conicGradient() },
  ];

  return (
    <div className="p-6 space-y-8 bg-background">
      <div>
        <h2 className="text-xl font-serif mb-4 text-text-default">Primary Colors</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {primaryColors.map((category) => (
            <div key={category.category} className="space-y-4">
              <h3 className="text-lg font-medium">{category.category}</h3>
              <div className="space-y-4">
                <ColorSwatch colorName="Default" colorValue={category.colors.DEFAULT} variant="large" />
                <div className="grid grid-cols-2 gap-3">
                  <ColorSwatch colorName="Light" colorValue={category.colors.light} />
                  <ColorSwatch colorName="Dark" colorValue={category.colors.dark} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-serif mb-4 text-text-default">Secondary Colors</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {secondaryColors.map((category) => (
            <div key={category.category} className="space-y-4">
              <h3 className="text-lg font-medium">{category.category}</h3>
              <div className="space-y-4">
                <ColorSwatch colorName="Default" colorValue={category.colors.DEFAULT} variant="large" />
                <div className="grid grid-cols-2 gap-3">
                  <ColorSwatch colorName="Light" colorValue={category.colors.light} />
                  <ColorSwatch colorName="Dark" colorValue={category.colors.dark} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-serif mb-4 text-text-default">Brand Gradients</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gradients.map((gradient) => (
            <GradientSwatch 
              key={gradient.title} 
              title={gradient.title} 
              gradientFunction={gradient.style} 
            />
          ))}
          <GradientSwatch 
            title="Animated Gradient" 
            gradientFunction={linearGradient()} 
            className="animate-gradient-x"
          />
        </div>
      </div>

      <div>
        <h2 className="text-xl font-serif mb-4 text-text-default">Tailwind Gradient Classes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex flex-col items-center">
            <div className="bg-gradient-primary w-full h-20 rounded-md shadow-md" />
            <p className="mt-2 text-sm font-medium">bg-gradient-primary</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-gradient-primary-horizontal w-full h-20 rounded-md shadow-md" />
            <p className="mt-2 text-sm font-medium">bg-gradient-primary-horizontal</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-gradient-blue-orange w-full h-20 rounded-md shadow-md" />
            <p className="mt-2 text-sm font-medium">bg-gradient-blue-orange</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-gradient-orange-red w-full h-20 rounded-md shadow-md" />
            <p className="mt-2 text-sm font-medium">bg-gradient-orange-red</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-gradient-radial-primary w-full h-20 rounded-md shadow-md" />
            <p className="mt-2 text-sm font-medium">bg-gradient-radial-primary</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-gradient-conic-primary w-full h-20 rounded-md shadow-md" />
            <p className="mt-2 text-sm font-medium">bg-gradient-conic-primary</p>
          </div>
        </div>
      </div>
    </div>
  );
} 