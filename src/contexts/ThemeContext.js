import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(() => {
    const savedSettings = JSON.parse(localStorage.getItem("erp_settings") || "{}");
    return savedSettings.darkMode || false;
  });

  useEffect(() => {
    // Aplica ou remove a classe 'dark' no elemento html
    if (darkMode) {
      document.documentElement.setAttribute("data-bs-theme", "dark");
      document.body.classList.add("dark-mode");
    } else {
      document.documentElement.removeAttribute("data-bs-theme");
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newValue = !prev;
      // Atualiza também no localStorage
      const savedSettings = JSON.parse(localStorage.getItem("erp_settings") || "{}");
      savedSettings.darkMode = newValue;
      localStorage.setItem("erp_settings", JSON.stringify(savedSettings));
      return newValue;
    });
  };

  const setDarkModeValue = (value) => {
    setDarkMode(value);
    const savedSettings = JSON.parse(localStorage.getItem("erp_settings") || "{}");
    savedSettings.darkMode = value;
    localStorage.setItem("erp_settings", JSON.stringify(savedSettings));
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode, setDarkModeValue }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme deve ser usado dentro de ThemeProvider");
  }
  return context;
}
