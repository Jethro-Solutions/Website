"use client"

import React, { createContext, useContext, useEffect, useState } from "react"
import { getSystemTheme } from "./utils"

type Theme = "dark" | "light" | "system"

interface ThemeProviderProps {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

interface ThemeContextValue {
  theme: Theme
  setTheme: (theme: Theme) => void
  isDarkMode: boolean
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

export function ThemeProvider({
  children,
  defaultTheme = "dark",
  storageKey = "jethro-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>("dark")
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true)

  useEffect(() => {
    const root = window.document.documentElement
    
    // Remove light class if it exists
    root.classList.remove("light")
    
    // Add dark class
    if (!root.classList.contains("dark")) {
      root.classList.add("dark")
    }
    
    // Always set to dark in storage
    localStorage.setItem(storageKey, "dark")
  }, [storageKey])

  const value = {
    theme: "dark" as Theme,
    setTheme: () => {},
    isDarkMode: true
  }

  return (
    <ThemeContext.Provider value={value} {...props}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = (): ThemeContextValue => {
  const context = useContext(ThemeContext)
  
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  
  return context
} 