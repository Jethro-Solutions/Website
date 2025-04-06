import React from 'react';
import {
  H1, H2, H3, H4, H5, H6,
  Lead, Body, BodySmall,
  Label, Caption,
  Code, Pre,
  GradientText
} from './Typography';

export const TypographySystem = () => {
  return (
    <div className="space-y-12">
      <div className="mb-8">
        <H2>Typography System</H2>
        <Lead>A complete set of typography components with responsive sizing</Lead>
      </div>

      <section className="space-y-8">
        <div>
          <H3 className="mb-4">Serif Font: Playfair Display</H3>
          <div className="space-y-4 p-6 bg-background-lighter rounded-lg">
            <div>
              <Label>H1: Page Titles</Label>
              <H1>Elegant Typography for Impact</H1>
            </div>
            <div>
              <Label>H2: Section Headers</Label>
              <H2>Creating Visual Hierarchy</H2>
            </div>
            <div>
              <Label>H3: Content Dividers</Label>
              <H3>Organizing Your Message</H3>
            </div>
            <div>
              <Label>H4: Sub-sections</Label>
              <H4>Structured Information</H4>
            </div>
            <div>
              <Label>H5: Group Headers</Label>
              <H5>Smaller Section Dividers</H5>
            </div>
            <div>
              <Label>H6: Compact Headers</Label>
              <H6>Maintaining Hierarchy at Small Scales</H6>
            </div>
          </div>
        </div>

        <div>
          <H3 className="mb-4">Sans-Serif Font: Inter</H3>
          <div className="space-y-4 p-6 bg-background-lighter rounded-lg">
            <div>
              <Label>Lead: Introductory Text</Label>
              <Lead>Lead text introduces sections with slightly larger font size and a muted color, guiding the reader into the content that follows.</Lead>
            </div>
            <div>
              <Label>Body: Main Content</Label>
              <Body>The primary text style used for content throughout the site. It's optimized for readability with comfortable line height and proper spacing.</Body>
            </div>
            <div>
              <Label>BodySmall: Secondary Content</Label>
              <BodySmall>A smaller variant used for less prominent information, side notes, or supporting details that don't require the same emphasis as main content.</BodySmall>
            </div>
            <div>
              <Label>Label: Form & Content Labels</Label>
              <div className="flex flex-col space-y-1">
                <Label>This is a standard label</Label>
                <Body>Often used with inputs or to identify content types</Body>
              </div>
            </div>
            <div>
              <Label>Caption: Small Supporting Text</Label>
              <Caption>Used for timestamps, image captions, footnotes, and other auxiliary information with reduced visual prominence.</Caption>
            </div>
          </div>
        </div>

        <div>
          <H3 className="mb-4">Monospace Font: IBM Plex Mono</H3>
          <div className="space-y-4 p-6 bg-background-lighter rounded-lg">
            <div>
              <Label>Code: Inline Code Snippets</Label>
              <Body className="mb-2">Use the <Code>Code</Code> component to highlight variables like <Code>userId</Code> or commands like <Code>npm install</Code>.</Body>
            </div>
            <div>
              <Label>Pre: Code Blocks</Label>
              <Pre>{`function calculateROI(investment, returns) {
  return (returns - investment) / investment * 100;
}

// Returns the ROI percentage
const result = calculateROI(5000, 7500); // 50%`}</Pre>
            </div>
          </div>
        </div>

        <div>
          <H3 className="mb-4">Special Text Styles</H3>
          <div className="space-y-4 p-6 bg-background-lighter rounded-lg">
            <div>
              <Label>GradientText: Branded Highlights</Label>
              <H2>Adding <GradientText>Visual Interest</GradientText> to Important Text</H2>
              <Body>The <GradientText className="font-semibold">GradientText</GradientText> component uses the brand's gradient colors to draw attention to key phrases.</Body>
            </div>
          </div>
        </div>

        <div>
          <H3 className="mb-4">Responsive Behavior</H3>
          <div className="p-6 bg-background-lighter rounded-lg">
            <Body>All typography components automatically scale based on screen size. Try resizing your browser window to see:</Body>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li><BodySmall>On small screens (mobile): Base sizes</BodySmall></li>
              <li><BodySmall>On medium screens (tablets): Scaled up ~20%</BodySmall></li>
              <li><BodySmall>On large screens (desktop): Scaled up ~40%</BodySmall></li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}; 