'use client';

import React from 'react';
import {
  ParallaxBase,
  ParallaxSection,
  ParallaxLayers,
  ParallaxImage,
  ParallaxGSAP
} from '../features/parallax';

const ParallaxDemo = () => {
  return (
    <div className="space-y-24 pb-20">
      <h1 className="text-4xl font-serif text-center mt-8 mb-16">Parallax Scrolling Examples</h1>
      
      {/* Basic parallax example */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-serif text-teal-700 mb-6">Basic Parallax</h2>
        <div className="h-80 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 rounded-lg overflow-hidden">
          <ParallaxBase
            speed={0.2}
            className="flex items-center justify-center h-full p-8"
          >
            <div className="text-white text-center">
              <h3 className="text-3xl font-serif mb-4">Simple Parallax Effect</h3>
              <p className="text-xl">This content moves at a different speed than the page scroll</p>
            </div>
          </ParallaxBase>
        </div>
      </section>
      
      {/* Parallax Section */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-serif text-teal-700 mb-6">Parallax Section</h2>
        <ParallaxSection
          className="h-96 rounded-lg"
          bgClassName="bg-gradient-to-r from-blue-500 to-teal-500 bg-opacity-50"
          contentClassName="flex items-center justify-center h-full p-8"
          parallaxSpeed={0.3}
        >
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-lg text-white text-center max-w-md">
            <h3 className="text-3xl font-serif mb-4">Parallax Section</h3>
            <p className="text-xl">
              This section has a background that moves at a different rate than the content
            </p>
          </div>
        </ParallaxSection>
      </section>
      
      {/* Parallax Layers */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-serif text-teal-700 mb-6">Parallax Layers</h2>
        <div className="relative h-96 rounded-lg overflow-hidden bg-gray-900">
          <ParallaxLayers
            layers={[
              {
                id: 'layer1',
                content: (
                  <div className="absolute inset-0 bg-blue-600 opacity-20"></div>
                ),
                speed: 0.1,
                zIndex: 1
              },
              {
                id: 'layer2',
                content: (
                  <div className="absolute inset-0 flex items-end justify-end p-12">
                    <div className="h-40 w-40 rounded-full bg-purple-500 opacity-40"></div>
                  </div>
                ),
                speed: 0.3,
                zIndex: 2
              },
              {
                id: 'layer3',
                content: (
                  <div className="absolute inset-0 flex items-start justify-start p-16">
                    <div className="h-24 w-24 rounded-full bg-teal-400 opacity-60"></div>
                  </div>
                ),
                speed: 0.5,
                zIndex: 3
              },
              {
                id: 'content',
                content: (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/10 backdrop-blur-md p-8 rounded-lg text-white text-center max-w-md">
                      <h3 className="text-3xl font-serif mb-4">Multi-Layer Parallax</h3>
                      <p className="text-xl">Each layer moves at a different speed</p>
                    </div>
                  </div>
                ),
                speed: -0.1, // Content moves slower than scroll
                zIndex: 10
              }
            ]}
            className="h-full w-full"
          />
        </div>
      </section>
      
      {/* Parallax Image */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-serif text-teal-700 mb-6">Parallax Image</h2>
        <div className="h-96 rounded-lg overflow-hidden">
          <ParallaxImage
            src="/placeholder-image.jpg" // Replace with an actual image path from your project
            alt="Parallax demo image"
            width={1200}
            height={800}
            fill
            speed={0.2}
            className="w-full h-full"
            imgClassName="object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-black/40 backdrop-blur-sm p-8 rounded-lg text-white max-w-md text-center">
              <h3 className="text-3xl font-serif mb-4">Parallax Image</h3>
              <p className="text-xl">Images with parallax effects create depth</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* GSAP Parallax */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-serif text-teal-700 mb-6">GSAP Parallax</h2>
        <div className="h-96 bg-gradient-to-r from-purple-900 via-red-800 to-amber-900 rounded-lg overflow-hidden">
          <ParallaxGSAP
            speed={0.4}
            className="flex items-center justify-center h-full p-8"
          >
            <div className="text-white text-center">
              <h3 className="text-3xl font-serif mb-4">GSAP-Powered Parallax</h3>
              <p className="text-xl">Using GSAP's ScrollTrigger for advanced effects</p>
            </div>
          </ParallaxGSAP>
        </div>
      </section>
      
      {/* Staggered GSAP Parallax */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-serif text-teal-700 mb-6">Staggered Parallax Elements</h2>
        <div className="bg-gray-900 p-12 rounded-lg">
          <ParallaxGSAP
            speed={0.3}
            stagger={true}
            staggerAmount={0.2}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 h-96"
          >
            <div className="bg-gradient-to-br from-blue-600 to-blue-900 rounded-lg flex items-center justify-center text-white p-6">
              <div className="text-center">
                <h3 className="text-xl font-serif mb-2">Element 1</h3>
                <p>Each element moves at a staggered time</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-600 to-purple-900 rounded-lg flex items-center justify-center text-white p-6">
              <div className="text-center">
                <h3 className="text-xl font-serif mb-2">Element 2</h3>
                <p>Creating a cascade effect</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-teal-600 to-teal-900 rounded-lg flex items-center justify-center text-white p-6">
              <div className="text-center">
                <h3 className="text-xl font-serif mb-2">Element 3</h3>
                <p>For visual interest and depth</p>
              </div>
            </div>
          </ParallaxGSAP>
        </div>
      </section>
    </div>
  );
};

export default ParallaxDemo; 