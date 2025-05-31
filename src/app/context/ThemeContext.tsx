'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type ThemeMode = 'testosterone' | 'estrogen';

interface ThemeContextType {
  theme: ThemeMode;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeMode>('testosterone');

  const toggleTheme = () => {
    const newTheme = theme === 'testosterone' ? 'estrogen' : 'testosterone';
    setTheme(newTheme);
    localStorage.setItem('workoutTheme', newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('workoutTheme') as ThemeMode;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
} 