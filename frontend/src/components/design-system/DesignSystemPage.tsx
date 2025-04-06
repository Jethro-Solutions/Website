"use client";

import { ColorSystem } from "./ColorSystem";
import { TypographySystem } from "./TypographySystem";
import { H1 } from "./Typography";

export function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-12 px-4">
        <H1 className="mb-8">
          Jethro Solutions Design System
        </H1>
        
        <div className="space-y-24">
          <section id="colors">
            <ColorSystem />
          </section>
          
          <section id="typography">
            <TypographySystem />
          </section>
        </div>
      </div>
    </div>
  );
} 