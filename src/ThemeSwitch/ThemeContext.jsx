import React, { createContext, useContext, useState, useEffect } from "react";

// Create the ThemeContext
const ThemeContext = createContext();

// Provider to wrap the app and provide theme state
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    document.documentElement.classList.toggle("dark");
  };

  // Adding the snowflakes effect when theme is dark
  useEffect(() => {
    if (theme === "dark") {
      const createSnowflakes = () => {
        const snowflakeCount = 100; // Number of snowflakes
        const snowflakesContainer = document.createElement("div");
        snowflakesContainer.className = "snowflakes";
        document.body.appendChild(snowflakesContainer);

        for (let i = 0; i < snowflakeCount; i++) {
          const snowflake = document.createElement("div");
          snowflake.className = "snowflake";
          snowflake.style.width = `${Math.random() * 10 + 5}px`;
          snowflake.style.height = snowflake.style.width;
          snowflake.style.animationDuration = `${Math.random() * 3 + 5}s`;
          snowflake.style.animationDelay = `${Math.random() * 5}s`;
          snowflake.style.left = `${Math.random() * 100}vw`;
          snowflakesContainer.appendChild(snowflake);
        }
      };

      createSnowflakes();
    } else {
      const existingSnowflakes = document.querySelector(".snowflakes");
      if (existingSnowflakes) {
        existingSnowflakes.remove();
      }
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
