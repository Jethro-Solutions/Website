import React, { useState } from 'react';
import { BarChart, StatCard } from '../visualizations';
import { DataPoint } from '../visualizations/types';

const projectPerformanceData: DataPoint[] = [
  { label: 'Phase 1', value: 85, tooltip: 'Initial planning and design phase' },
  { label: 'Phase 2', value: 92, tooltip: 'Development phase' },
  { label: 'Phase 3', value: 78, tooltip: 'Testing phase' },
  { label: 'Phase 4', value: 95, tooltip: 'Deployment phase' },
  { label: 'Phase 5', value: 88, tooltip: 'Maintenance phase' },
];

const revenueData: DataPoint[] = [
  { label: 'Year 1', value: 125000, color: 'blue' },
  { label: 'Year 2', value: 225000, color: 'indigo' },
  { label: 'Year 3', value: 375000, color: 'purple' },
  { label: 'Year 4', value: 580000, color: 'pink' },
];

export const DataVisualizationDemo: React.FC = () => {
  const [activeTab, setActiveTab] = useState('performance');
  
  return (
    <div className="p-8 bg-gray-900 rounded-xl">
      <h2 className="text-3xl font-serif text-white mb-6">Project Showcase</h2>
      
      {/* Tab navigation */}
      <div className="flex mb-8 border-b border-gray-700">
        <button
          className={`px-4 py-2 font-mono text-sm transition-colors duration-200 ${
            activeTab === 'performance' 
              ? 'text-blue-400 border-b-2 border-blue-400' 
              : 'text-gray-400 hover:text-gray-200'
          }`}
          onClick={() => setActiveTab('performance')}
        >
          Performance Metrics
        </button>
        <button
          className={`px-4 py-2 font-mono text-sm transition-colors duration-200 ${
            activeTab === 'revenue' 
              ? 'text-blue-400 border-b-2 border-blue-400' 
              : 'text-gray-400 hover:text-gray-200'
          }`}
          onClick={() => setActiveTab('revenue')}
        >
          Revenue Growth
        </button>
      </div>
      
      {/* Content for active tab */}
      <div>
        {activeTab === 'performance' && (
          <div className="space-y-8">
            <p className="text-gray-300 mb-6">
              Project performance across different phases of implementation, demonstrating our consistent delivery excellence.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <StatCard 
                value={88} 
                label="Average Performance Score" 
                format="percentage" 
                trend={12}
                trendLabel="vs industry average"
                config={{
                  animation: {
                    duration: 1.2,
                    scrollTriggered: true,
                  }
                }}
              />
              
              <StatCard 
                value={3.2} 
                label="Avg. Delivery Time (months)" 
                trend={-18}
                trendLabel="faster than estimates"
                config={{
                  animation: {
                    duration: 1.2,
                    scrollTriggered: true,
                  }
                }}
              />
              
              <StatCard 
                value={97} 
                label="Client Satisfaction" 
                format="percentage"
                trend={5}
                trendLabel="year over year"
                config={{
                  animation: {
                    duration: 1.2,
                    scrollTriggered: true,
                  }
                }}
              />
            </div>
            
            <div className="mt-10">
              <h3 className="text-xl font-serif text-white mb-4">Performance by Phase</h3>
              <div className="h-96">
                <BarChart 
                  data={projectPerformanceData}
                  config={{
                    height: '100%',
                    animation: {
                      duration: 0.8,
                      staggered: true,
                      staggerAmount: 0.1,
                      scrollTriggered: true,
                    },
                    gradients: true,
                  }}
                />
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'revenue' && (
          <div className="space-y-8">
            <p className="text-gray-300 mb-6">
              Client revenue growth after implementing our solutions, showcasing ROI and business impact.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <StatCard 
                value={580000} 
                label="Latest Annual Revenue" 
                format="currency"
                trend={24}
                trendLabel="year over year"
                config={{
                  animation: {
                    duration: 1.2,
                    scrollTriggered: true,
                  }
                }}
              />
              
              <StatCard 
                value={364} 
                label="Revenue Growth" 
                format="percentage"
                trend={364}
                trendLabel="over 4 years"
                config={{
                  animation: {
                    duration: 1.2,
                    scrollTriggered: true,
                  }
                }}
              />
              
              <StatCard 
                value={2.8} 
                label="ROI Multiple"
                trend={130}
                trendLabel="above projections"
                config={{
                  animation: {
                    duration: 1.2,
                    scrollTriggered: true,
                  }
                }}
              />
            </div>
            
            <div className="mt-10">
              <h3 className="text-xl font-serif text-white mb-4">Revenue Growth Over Time</h3>
              <div className="h-96">
                <BarChart 
                  data={revenueData}
                  config={{
                    height: '100%',
                    animation: {
                      duration: 0.8,
                      staggered: true,
                      staggerAmount: 0.1,
                      scrollTriggered: true,
                    },
                    gradients: true,
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}; 