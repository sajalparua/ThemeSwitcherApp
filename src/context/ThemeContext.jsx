import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

const themes = ['theme1', 'theme2', 'theme3'];

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'theme1');

  const switchTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    document.body.className = '';
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, switchTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
};
