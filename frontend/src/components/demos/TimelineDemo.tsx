'use client';

import React from 'react';
import { Timeline, TimelineEvent } from '../features/timeline';
import { CalendarDays, Code, Rocket, Award, Sparkles, Workflow } from 'lucide-react';

// Sample timeline events
const companyMilestones: TimelineEvent[] = [
  {
    id: 'founding',
    date: '2018',
    title: 'Jethro Solutions Founded',
    description: 'Established with a vision to bring integrated technology and financial solutions to small and medium businesses.',
    icon: <Rocket className="w-4 h-4" />,
    imageUrl: '/timeline/founding.jpg'
  },
  {
    id: 'first-client',
    date: '2019',
    title: 'First Major Client',
    description: 'Secured our first enterprise client and delivered a complete financial analytics dashboard and reporting system.',
    icon: <Award className="w-4 h-4" />
  },
  {
    id: 'tech-expansion',
    date: '2020',
    title: 'Technology Division Expansion',
    description: 'Expanded our technology offerings to include custom web and mobile application development.',
    icon: <Code className="w-4 h-4" />,
    imageUrl: '/timeline/tech-expansion.jpg'
  },
  {
    id: 'ai-launch',
    date: '2021',
    title: 'AI Solutions Launch',
    description: 'Introduced AI-powered financial forecasting and budgeting solutions for small businesses.',
    icon: <Sparkles className="w-4 h-4" />
  },
  {
    id: 'global-reach',
    date: '2022',
    title: 'Global Client Base',
    description: 'Expanded our client base to include businesses from Europe, Asia, and Australia.',
    icon: <Workflow className="w-4 h-4" />,
    imageUrl: '/timeline/global.jpg'
  },
  {
    id: 'present',
    date: '2023',
    title: 'Present Day',
    description: 'Continuing to innovate at the intersection of financial services and cutting-edge technology.',
    icon: <CalendarDays className="w-4 h-4" />
  }
];

export default function TimelineDemo() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl md:text-4xl font-serif text-center mb-12 bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
        Company Journey
      </h2>
      
      <div className="mb-16">
        <Timeline 
          events={companyMilestones} 
          orientation="vertical"
          className="min-h-[800px]"
        />
      </div>
      
      <div className="mt-24 overflow-x-auto pb-8">
        <h3 className="text-2xl font-serif text-center mb-8">
          Horizontal Timeline View
        </h3>
        <div className="min-w-[900px]">
          <Timeline 
            events={companyMilestones.slice(0, 4)} 
            orientation="horizontal"
            activeColor="bg-gradient-to-r from-teal-500 to-emerald-500"
          />
        </div>
      </div>
    </div>
  );
} 