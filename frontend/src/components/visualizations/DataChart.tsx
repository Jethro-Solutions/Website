import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { BarChart } from './BarChart';
import { LineChart } from './LineChart';
import { PieChart } from './PieChart';
import { StatCard } from './StatCard';
import { ComparisonChart } from './ComparisonChart';
import { TimelineChart } from './TimelineChart';
import { DataChartProps, ChartType } from './types';
import { useScrollAnimation } from '../../lib/animations/hooks';

/**
 * A universal chart component that renders the appropriate visualization based on chartType
 */
export const DataChart: React.FC<DataChartProps> = ({ 
  data, 
  chartType, 
  config,
  className = '',
}) => {
  const chartRef = useRef<HTMLDivElement>(null);
  const { inView, animationControls } = useScrollAnimation();
  
  // Default configuration with brand-aligned styling
  const defaultConfig = {
    theme: 'dark',
    showTooltip: true,
    showLegend: true,
    gradients: true,
    responsive: true,
    animation: {
      duration: 0.8,
      staggered: true,
      scrollTriggered: true,
    },
    ...config
  };
  
  // Apply scroll-triggered animations if configured
  useEffect(() => {
    if (inView && defaultConfig.animation?.scrollTriggered) {
      animationControls.start('animate');
    }
  }, [inView, animationControls, defaultConfig.animation?.scrollTriggered]);

  // Render the appropriate chart based on the chartType
  const renderChart = () => {
    switch (chartType) {
      case 'bar':
        return <BarChart data={data} config={defaultConfig} />;
      case 'line':
      case 'area':
        return <LineChart 
          data={data} 
          config={defaultConfig} 
          area={chartType === 'area'} 
        />;
      case 'pie':
        return <PieChart data={data} config={defaultConfig} />;
      case 'stat':
        if (data && data.length > 0) {
          const { label, value } = data[0];
          return (
            <StatCard 
              label={label} 
              value={value} 
              config={defaultConfig} 
            />
          );
        }
        return null;
      case 'comparison':
        return <ComparisonChart data={data} config={defaultConfig} />;
      case 'timeline':
        return <TimelineChart data={data} config={defaultConfig} />;
      default:
        return (
          <div className="flex items-center justify-center h-full">
            <p className="text-xl text-red-500">
              Unsupported chart type: {chartType}
            </p>
          </div>
        );
    }
  };

  return (
    <motion.div 
      ref={chartRef}
      className={`data-chart-container ${className}`}
      initial="initial"
      animate={defaultConfig.animation?.scrollTriggered ? animationControls : "animate"}
      variants={{
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 0.5 } }
      }}
    >
      {data && data.length > 0 ? (
        <>
          {config?.title && (
            <h3 className="text-xl font-serif mb-2 text-white">{config.title}</h3>
          )}
          {config?.subtitle && (
            <p className="text-sm text-gray-300 mb-4">{config.subtitle}</p>
          )}
          <div className={`chart-wrapper ${defaultConfig.responsive ? 'w-full' : ''}`}>
            {renderChart()}
          </div>
        </>
      ) : (
        <div className="flex items-center justify-center h-40 w-full">
          <p className="text-gray-500">No data available</p>
        </div>
      )}
    </motion.div>
  );
}; 