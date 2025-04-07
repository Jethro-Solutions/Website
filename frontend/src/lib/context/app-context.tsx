'use client';

import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';

type AppContextType = {
  isNavOpen: boolean;
  isLoading: boolean;
  activeSection: string;
  setNavOpen: (isOpen: boolean) => void;
  setLoading: (isLoading: boolean) => void;
  setActiveSection: (section: string) => void;
};

const defaultContext: AppContextType = {
  isNavOpen: false,
  isLoading: false,
  activeSection: 'home',
  setNavOpen: () => null,
  setLoading: () => null,
  setActiveSection: () => null,
};

const AppContext = createContext<AppContextType>(defaultContext);

export const useAppState = () => useContext(AppContext);

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const setNavOpen = useCallback((isOpen: boolean) => {
    setIsNavOpen(isOpen);
    if (isOpen) {
      // Disable body scroll when nav is open
      document.body.style.overflow = 'hidden';
    } else {
      // Re-enable scroll when nav is closed
      document.body.style.overflow = 'auto';
    }
  }, []);

  const setLoading = useCallback((loading: boolean) => {
    setIsLoading(loading);
  }, []);

  const value = {
    isNavOpen,
    isLoading,
    activeSection,
    setNavOpen,
    setLoading,
    setActiveSection,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}; 