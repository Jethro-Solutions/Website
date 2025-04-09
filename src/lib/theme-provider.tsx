"use client"

import React, { createContext, useContext, useEffect } from "react"
// import { getSystemTheme } from "./utils" // Removed unused import

type Theme = "dark" | "light" | "system"

interface ThemeProviderProps {
  children: React.ReactNode
  defaultTheme?: Theme // Keep in interface for potential future use, but not used below
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
  // defaultTheme = "dark", // Removed unused prop destructuring
  storageKey = "jethro-theme",
  ...props
}: ThemeProviderProps) {
  // const [theme, setTheme] = useState<Theme>("dark") // Removed unused state
  // const [isDarkMode, setIsDarkMode] = useState<boolean>(true) // Removed unused state

  useEffect(() => {
    const root = window.document.documentElement
    
    root.classList.remove("light")
    
    if (!root.classList.contains("dark")) {
      root.classList.add("dark")
    }
    
    localStorage.setItem(storageKey, "dark")
  }, [storageKey])

  // Hardcoded value as the theme switching logic is currently disabled
  const value = {
    theme: "dark" as Theme,
    setTheme: () => { console.warn("Theme switching is currently disabled.") }, // Provide a no-op setter
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