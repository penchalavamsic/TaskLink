import React, { createContext, useContext } from 'react';

// Create the Theme Context
const ThemeContext = createContext();

// Theme Provider Component
export const ThemeProvider = ({ children }) => {
  // Define theme values based on index.css and theme.css
  const theme = {
    primaryColor: '#96f97b', // From --primary-color in theme.css
    sidebarWidth: '250px', // From --sidebar-width in theme.css
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
