'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Tab } from '@headlessui/react';
import { motion } from 'framer-motion';

export interface TabItem {
  label: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
  disabled?: boolean;
}

export interface TabsProps {
  items: TabItem[];
  variant?: 'default' | 'pills' | 'underline' | 'gradient';
  className?: string;
  tabsClassName?: string;
  panelsClassName?: string;
  defaultIndex?: number;
  onChange?: (index: number) => void;
}

export function Tabs({
  items,
  variant = 'default',
  className,
  tabsClassName,
  panelsClassName,
  defaultIndex = 0,
  onChange,
}: TabsProps) {
  return (
    <Tab.Group
      defaultIndex={defaultIndex}
      onChange={onChange}
      as="div"
      className={cn("w-full", className)}
    >
      <Tab.List
        className={cn(
          "flex space-x-1 mb-6",
          {
            'p-1 bg-background-lighter rounded-lg': variant === 'pills',
            'border-b border-background-lighter': variant === 'underline',
            'relative': variant === 'gradient',
          },
          tabsClassName
        )}
      >
        {items.map((item, index) => (
          <Tab
            key={index}
            disabled={item.disabled}
            className={({ selected }: { selected: boolean }) =>
              cn(
                "relative py-2 px-4 text-sm font-medium transition-standard focus:outline-none",
                {
                  // Default variant
                  'text-text-subtle hover:text-text': variant === 'default' && !selected,
                  'text-primary-blue font-semibold': variant === 'default' && selected,
                  
                  // Pills variant
                  'text-text-subtle hover:text-text rounded-md': variant === 'pills' && !selected,
                  'bg-background-light text-text rounded-md shadow-sm': variant === 'pills' && selected,
                  
                  // Underline variant
                  'text-text-subtle hover:text-text border-b-2 border-transparent': variant === 'underline' && !selected,
                  'text-primary-blue border-b-2 border-primary-blue': variant === 'underline' && selected,
                  
                  // Gradient variant
                  'text-text-subtle hover:text-text': variant === 'gradient' && !selected,
                  'text-white z-10': variant === 'gradient' && selected,
                  
                  // Disabled state
                  'opacity-50 cursor-not-allowed': item.disabled,
                }
              )
            }
          >
            <div className="flex items-center space-x-2">
              {item.icon && <span>{item.icon}</span>}
              <span>{item.label}</span>
            </div>
            {variant === 'gradient' && (
              <Tab.Selected as={React.Fragment}>
                <motion.span
                  className="absolute inset-0 rounded-md gradient-bg"
                  layoutId="gradient-tab-background"
                  transition={{ type: 'spring', bounce: 0.15, duration: 0.5 }}
                />
              </Tab.Selected>
            )}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels className={cn("", panelsClassName)}>
        {items.map((item, index) => (
          <Tab.Panel key={index} className="focus:outline-none">
            {item.content}
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
} 