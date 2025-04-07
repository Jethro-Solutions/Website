import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import ScrollAnimationDemo from '@/components/demos/ScrollAnimationDemo';

const ScrollAnimationsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Scroll Animation Framework | Jethro Solutions</title>
        <meta name="description" content="Demonstration of the scroll-based animation framework capabilities" />
      </Head>
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-serif font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
            Scroll Animation Framework
          </h1>
          <p className="text-lg mb-16 max-w-2xl">
            Scroll down to see various scroll-triggered animations in action. 
            This framework provides a suite of hooks for creating engaging scroll-based interactions.
          </p>
        </div>
        
        <ScrollAnimationDemo />
      </main>
    </>
  );
};

export default ScrollAnimationsPage; 