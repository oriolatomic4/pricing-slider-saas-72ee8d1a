
import React, { createContext, useContext, useEffect, useState } from "react";
import { colors } from "@/lib/colors";

type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
  colors: typeof colors.light & {
    brand: typeof colors.brand;
  };
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Get saved theme from localStorage if available
    const savedTheme = localStorage.getItem("theme") as Theme;
    // Check if the user has a system preference for dark mode
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    // Return saved theme if it exists, otherwise use system preference or default to light
    return savedTheme || (prefersDark ? "dark" : "light");
  });

  useEffect(() => {
    // Apply theme class to document element
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    
    // Save theme preference to localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === "dark" ? "light" : "dark");
  };

  // Get the current theme colors
  const currentColors = {
    ...(theme === "dark" ? colors.dark : colors.light),
    brand: colors.brand
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, colors: currentColors }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
