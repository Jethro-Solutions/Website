import React from 'react';
import { LoadingAnimationsDemo } from '@/components/demos/LoadingAnimationsDemo';

export const metadata = {
  title: 'Loading Animations Demo | Jethro Solutions',
  description: 'Showcase of branded loading state animations for Jethro Solutions website',
};

export default function LoadingDemosPage() {
  return (
    <main className="min-h-screen py-12">
      <LoadingAnimationsDemo />
    </main>
  );
} 