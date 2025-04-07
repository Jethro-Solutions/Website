'use client';

import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useAnimateOnScroll } from '@/lib/animations/hooks';
import { TimelineEvent } from './types';
import Image from 'next/image';

// Register the ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Inline TimelineItem component to avoid import issues
function TimelineItem({
  event,
  orientation,
  isActive,
  activeColor,
  inactiveColor,
  onClick,
}: {
  event: TimelineEvent;
  orientation: 'vertical' | 'horizontal';
  isActive: boolean;
  activeColor: string;
  inactiveColor: string;
  onClick: () => void;
}) {
  const itemRef = useRef<HTMLDivElement>(null);

  return (
    <div
      id={`timeline-event-${event.id}`}
      ref={itemRef}
      className={cn(
        'timeline-event relative cursor-pointer transition-all duration-300',
        orientation === 'vertical'
          ? 'w-full'
          : 'flex-shrink-0 w-60'
      )}
      onClick={onClick}
    >
      {/* Timeline Node */}
      <div
        className={cn(
          'absolute rounded-full border-2 border-white dark:border-gray-800 p-1 z-10 shadow-md transition-all duration-500 transform',
          orientation === 'vertical' 
            ? 'left-[-28px] top-0' 
            : 'left-0 top-[-28px]',
          isActive ? activeColor : inactiveColor,
          isActive ? 'scale-110' : 'scale-100'
        )}
      >
        <div className="w-4 h-4 rounded-full bg-white dark:bg-gray-900" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          transition: { 
            type: 'spring', 
            stiffness: 300, 
            damping: 30 
          }
        }}
        whileHover={{ 
          scale: 1.02,
          transition: { duration: 0.2 } 
        }}
        className={cn(
          'bg-white dark:bg-gray-900 rounded-lg shadow-lg p-4 overflow-hidden',
          'border border-gray-200 dark:border-gray-800',
          'transform transition-all duration-300',
          isActive 
            ? 'shadow-md border-opacity-100 dark:border-opacity-100' 
            : 'shadow-sm border-opacity-50 dark:border-opacity-50 opacity-75'
        )}
      >
        {/* Date */}
        <div 
          className={cn(
            'text-sm font-mono mb-1 transition-colors duration-300',
            isActive 
              ? 'text-blue-600 dark:text-blue-400' 
              : 'text-gray-500 dark:text-gray-400'
          )}
        >
          {event.date}
        </div>

        {/* Title */}
        <h3 className="text-xl font-serif font-medium mb-2">{event.title}</h3>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 text-sm">{event.description}</p>

        {/* Optional Image */}
        {event.imageUrl && (
          <div className="mt-3 rounded-md overflow-hidden">
            <Image
              src={event.imageUrl}
              alt={event.title}
              width={300}
              height={200}
              className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        )}

        {/* Optional Icon */}
        {event.icon && (
          <div className="absolute top-4 right-4 text-gray-400 dark:text-gray-600">
            {event.icon}
          </div>
        )}
      </motion.div>
    </div>
  );
}

type TimelineProps = {
  events: TimelineEvent[];
  className?: string;
  orientation?: 'vertical' | 'horizontal';
  activeColor?: string;
  inactiveColor?: string;
};

export default function Timeline({
  events,
  className,
  orientation = 'vertical',
  activeColor = 'bg-gradient-to-r from-blue-600 to-orange-500',
  inactiveColor = 'bg-gray-300 dark:bg-gray-700',
}: TimelineProps) {
  const timelineRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [ref, inView] = useAnimateOnScroll<HTMLDivElement>(0.1);
  
  useEffect(() => {
    if (!timelineRef.current || !progressRef.current) return;
    
    const eventElements = timelineRef.current.querySelectorAll('.timeline-event');
    
    // Set up the timeline progress indicator animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: timelineRef.current,
        start: 'top center',
        end: 'bottom center',
        scrub: 0.5,
        onUpdate: (self) => {
          // Calculate which event is active based on scroll position
          const index = Math.floor(self.progress * events.length);
          setActiveIndex(Math.min(index, events.length - 1));
        }
      }
    });

    // Animate the progress line to grow as user scrolls
    tl.to(progressRef.current, {
      height: orientation === 'vertical' ? '100%' : '2px',
      width: orientation === 'horizontal' ? '100%' : '2px',
      duration: 1,
      ease: 'none',
    });

    // Animate event items with staggered entrances
    gsap.fromTo(
      eventElements,
      { 
        opacity: 0,
        x: orientation === 'horizontal' ? -30 : 0,
        y: orientation === 'vertical' ? -30 : 0
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: timelineRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );

    return () => {
      // Clean up ScrollTrigger instances
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, [events.length, orientation, inView]);

  return (
    <div 
      ref={ref}
      className={cn(
        'relative w-full', 
        orientation === 'vertical' ? 'min-h-[400px]' : 'h-[200px]',
        className
      )}
    >
      <div 
        ref={timelineRef}
        className={cn(
          'relative',
          orientation === 'vertical' 
            ? 'flex flex-col items-start space-y-16 pl-8 md:pl-12' 
            : 'flex flex-row items-center space-x-16 pt-8'
        )}
      >
        {/* Timeline Track */}
        <div 
          className={cn(
            'absolute bg-gray-200 dark:bg-gray-800',
            orientation === 'vertical' 
              ? 'left-4 top-0 h-full w-[2px]' 
              : 'left-0 top-4 h-[2px] w-full'
          )}
        >
          {/* Progress indicator */}
          <div 
            ref={progressRef}
            className={cn(
              activeColor,
              orientation === 'vertical' 
                ? 'h-0 w-full' 
                : 'h-full w-0'
            )}
          />
        </div>

        {/* Timeline Events */}
        {events.map((event, index) => (
          <TimelineItem
            key={event.id}
            event={event}
            orientation={orientation}
            isActive={index <= activeIndex}
            activeColor={activeColor}
            inactiveColor={inactiveColor}
            onClick={() => {
              // Scroll to this event when clicked
              const element = document.getElementById(`timeline-event-${event.id}`);
              if (element) {
                element.scrollIntoView({ 
                  behavior: 'smooth', 
                  block: 'center' 
                });
              }
            }}
          />
        ))}
      </div>
    </div>
  );
} 