'use client';

import React, { ReactNode } from 'react';
import { ThemeProvider } from './theme-context';
import { AppProvider } from './app-context';

export { ThemeProvider, useTheme } from './theme-context';
export { AppProvider, useAppState } from './app-context';

// Combine all providers into a single provider component
type ProviderProps = {
  children: ReactNode;
};

export const GlobalProvider = ({ children }: ProviderProps) => {
  return (
    <ThemeProvider>
      <AppProvider>
        {children}
      </AppProvider>
    </ThemeProvider>
  );
}; 