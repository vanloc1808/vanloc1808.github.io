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
  const [mounted, setMounted] = useState(false);

  // Helper to apply theme to document
  const applyTheme = (theme: 'light' | 'dark' | 'system') => {
    if (typeof window === 'undefined' || typeof document === 'undefined')
      return;
    if (theme === 'system') {
      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
      document.documentElement.classList.toggle('dark', prefersDark);
    } else {
      document.documentElement.classList.toggle('dark', theme === 'dark');
    }
  };

  // Initialize theme from localStorage on mount
  useEffect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined')
      return;
    const savedTheme =
      (localStorage.getItem('theme') as 'light' | 'dark' | 'system' | null) ||
      'system';
    setThemeState(savedTheme);
    applyTheme(savedTheme);
    setMounted(true);
  }, []);

  // Listen for system theme changes when theme is 'system'
  useEffect(() => {
    if (typeof window === 'undefined' || theme !== 'system') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      applyTheme('system');
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [theme]);

  // When theme changes, apply it and save to localStorage
  const setTheme = (newTheme: 'light' | 'dark' | 'system') => {
    console.log('🎯 setTheme called with:', newTheme);
    console.log('🔍 Current theme before change:', theme);
    console.log('🔍 Mounted state:', mounted);
    setThemeState(newTheme);
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
    console.log(
      '✅ Theme set complete. New localStorage value:',
      localStorage.getItem('theme')
    );
  };

  // Don't render children until theme is determined to prevent mismatch
  if (!mounted || theme === null) return null;

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
