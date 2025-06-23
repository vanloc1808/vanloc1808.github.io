'use client';

import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from 'react';

interface ThemeContextType {
  theme: 'light' | 'dark' | 'system' | null;
  setTheme: (theme: 'light' | 'dark' | 'system') => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setThemeState] = useState<'light' | 'dark' | 'system' | null>(
    null
  );

  // Helper to apply theme to document
  const applyTheme = (theme: 'light' | 'dark' | 'system') => {
    if (theme === 'system') {
      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
      document.documentElement.classList.toggle('dark', prefersDark);
    } else {
      document.documentElement.classList.toggle('dark', theme === 'dark');
    }
  };

  // Listen for system theme changes if 'system' is selected
  useEffect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined')
      return;
    const savedTheme =
      (localStorage.getItem('theme') as 'light' | 'dark' | 'system' | null) ||
      'system';
    setThemeState(savedTheme);
    applyTheme(savedTheme);

    let mediaQuery: MediaQueryList | null = null;
    let handleChange: (() => void) | null = null;

    if (savedTheme === 'system') {
      mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      handleChange = () => {
        applyTheme('system');
      };
      mediaQuery.addEventListener('change', handleChange);
    }
    return () => {
      if (mediaQuery && handleChange) {
        mediaQuery.removeEventListener('change', handleChange);
      }
    };
  }, []);

  // When theme changes, apply it and save to localStorage
  const setTheme = (newTheme: 'light' | 'dark' | 'system') => {
    setThemeState(newTheme);
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
  };

  // Don't render children until theme is determined to prevent mismatch
  if (theme === null) return null;

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
