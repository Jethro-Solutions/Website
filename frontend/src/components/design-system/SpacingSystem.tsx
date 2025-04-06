import React from 'react';
import { Stack, HStack, Section, Container, SpacerSize } from './Spacer';

interface SpacingBoxProps {
  size: SpacerSize;
  showLabel?: boolean;
}

const SpacingBox = ({ size, showLabel = true }: SpacingBoxProps) => {
  const sizeMap: Record<SpacerSize, string> = {
    'xs': '4px',
    'sm': '8px',
    'md': '16px',
    'lg': '24px',
    'xl': '32px',
    '2xl': '40px',
    '3xl': '48px',
    '4xl': '64px',
    '5xl': '80px',
    '6xl': '96px',
    '7xl': '128px',
    '8xl': '160px',
    '9xl': '192px',
  };

  return (
    <div className="flex flex-col items-center">
      <div className={`bg-primary-blue w-${size} h-${size} rounded-sm`} />
      {showLabel && (
        <div className="mt-2 text-xs text-text-muted">
          <span className="font-mono">{size}</span> - {sizeMap[size]}
        </div>
      )}
    </div>
  );
};

export const SpacingSystem = () => {
  return (
    <div className="space-y-12">
      <div className="mb-8">
        <h2 className="text-2xl font-serif mb-2">Spacing System</h2>
        <p className="text-lg text-text-muted">
          A consistent and responsive spacing scale for the entire design system
        </p>
      </div>

      <Section>
        <h3 className="text-xl font-serif mb-6">Spacing Scale</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-8">
          <SpacingBox size="xs" />
          <SpacingBox size="sm" />
          <SpacingBox size="md" />
          <SpacingBox size="lg" />
          <SpacingBox size="xl" />
          <SpacingBox size="2xl" />
          <SpacingBox size="3xl" />
          <SpacingBox size="4xl" />
          <SpacingBox size="5xl" />
          <SpacingBox size="6xl" />
          <SpacingBox size="7xl" />
          <SpacingBox size="8xl" />
          <SpacingBox size="9xl" />
        </div>
      </Section>

      <Section>
        <h3 className="text-xl font-serif mb-6">Vertical Stacking (Stack Component)</h3>
        <div className="space-y-8">
          <div className="p-6 bg-background-lighter rounded-lg">
            <h4 className="text-lg font-serif mb-4">Small Stack (space="sm")</h4>
            <Stack space="sm" className="bg-background-light p-4 rounded-md">
              <div className="h-8 bg-secondary-teal rounded-md w-full" />
              <div className="h-8 bg-secondary-teal rounded-md w-full" />
              <div className="h-8 bg-secondary-teal rounded-md w-full" />
            </Stack>
          </div>
          
          <div className="p-6 bg-background-lighter rounded-lg">
            <h4 className="text-lg font-serif mb-4">Medium Stack (space="md")</h4>
            <Stack space="md" className="bg-background-light p-4 rounded-md">
              <div className="h-8 bg-secondary-teal rounded-md w-full" />
              <div className="h-8 bg-secondary-teal rounded-md w-full" />
              <div className="h-8 bg-secondary-teal rounded-md w-full" />
            </Stack>
          </div>
          
          <div className="p-6 bg-background-lighter rounded-lg">
            <h4 className="text-lg font-serif mb-4">Large Stack (space="lg")</h4>
            <Stack space="lg" className="bg-background-light p-4 rounded-md">
              <div className="h-8 bg-secondary-teal rounded-md w-full" />
              <div className="h-8 bg-secondary-teal rounded-md w-full" />
              <div className="h-8 bg-secondary-teal rounded-md w-full" />
            </Stack>
          </div>
        </div>
      </Section>

      <Section>
        <h3 className="text-xl font-serif mb-6">Horizontal Stacking (HStack Component)</h3>
        <div className="space-y-8">
          <div className="p-6 bg-background-lighter rounded-lg">
            <h4 className="text-lg font-serif mb-4">Small HStack (space="sm")</h4>
            <HStack space="sm" className="bg-background-light p-4 rounded-md">
              <div className="h-8 w-16 bg-primary-orange rounded-md" />
              <div className="h-8 w-16 bg-primary-orange rounded-md" />
              <div className="h-8 w-16 bg-primary-orange rounded-md" />
            </HStack>
          </div>
          
          <div className="p-6 bg-background-lighter rounded-lg">
            <h4 className="text-lg font-serif mb-4">Medium HStack (space="md")</h4>
            <HStack space="md" className="bg-background-light p-4 rounded-md">
              <div className="h-8 w-16 bg-primary-orange rounded-md" />
              <div className="h-8 w-16 bg-primary-orange rounded-md" />
              <div className="h-8 w-16 bg-primary-orange rounded-md" />
            </HStack>
          </div>
          
          <div className="p-6 bg-background-lighter rounded-lg">
            <h4 className="text-lg font-serif mb-4">Large HStack (space="lg")</h4>
            <HStack space="lg" className="bg-background-light p-4 rounded-md">
              <div className="h-8 w-16 bg-primary-orange rounded-md" />
              <div className="h-8 w-16 bg-primary-orange rounded-md" />
              <div className="h-8 w-16 bg-primary-orange rounded-md" />
            </HStack>
          </div>
        </div>
      </Section>

      <Section>
        <h3 className="text-xl font-serif mb-6">Section Component with Responsive Padding</h3>
        <div className="space-y-4">
          <div className="border border-dashed border-text-subtle p-0">
            <Section className="bg-background-lighter">
              <div className="h-24 bg-primary-blue-dark rounded-md flex items-center justify-center">
                <p className="text-text font-medium">Default Section Padding (responsive)</p>
              </div>
            </Section>
          </div>
        </div>
      </Section>

      <Section>
        <h3 className="text-xl font-serif mb-6">Container Component with Max Width</h3>
        <div className="space-y-8">
          <div>
            <h4 className="text-lg font-serif mb-4">Narrow Container (maxWidth="narrow")</h4>
            <div className="bg-background-lighter p-4">
              <Container maxWidth="narrow" className="bg-background-light p-4 border border-dashed border-text-subtle">
                <div className="h-12 bg-secondary-green rounded-md flex items-center justify-center">
                  <p className="text-text font-medium">Max Width: 2xl (42rem/672px)</p>
                </div>
              </Container>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-serif mb-4">Medium Container (maxWidth="medium")</h4>
            <div className="bg-background-lighter p-4">
              <Container maxWidth="medium" className="bg-background-light p-4 border border-dashed border-text-subtle">
                <div className="h-12 bg-secondary-green rounded-md flex items-center justify-center">
                  <p className="text-text font-medium">Max Width: 4xl (56rem/896px)</p>
                </div>
              </Container>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-serif mb-4">Wide Container (maxWidth="wide")</h4>
            <div className="bg-background-lighter p-4">
              <Container maxWidth="wide" className="bg-background-light p-4 border border-dashed border-text-subtle">
                <div className="h-12 bg-secondary-green rounded-md flex items-center justify-center">
                  <p className="text-text font-medium">Max Width: 6xl (72rem/1152px)</p>
                </div>
              </Container>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}; 