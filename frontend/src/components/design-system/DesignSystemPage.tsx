"use client";

import { ColorSystem } from "./ColorSystem";

export function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl md:text-4xl font-serif mb-8 text-text">
          Jethro Solutions Design System
        </h1>
        <ColorSystem />
      </div>
    </div>
  );
} 